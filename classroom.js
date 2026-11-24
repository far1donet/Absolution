/* One in a Computer — the classroom (online multiplayer).
   The host's browser runs the game and is the referee: it checks answers, runs the turn clock and sends
   everyone the room state. Friends connect to the host with a 6-letter code (PeerJS / WebRTC).
   Add ?net=local to the URL to test with several tabs on one computer instead. */
(function(){
"use strict";
const PREFIX = "oiac-room-";
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const HUES = [205, 150, 270, 330, 18, 46, 95, 0];
const CHOOSE_TIME = 20;
const LOCAL = /[?&]net=local\b/.test(location.search);
const q$ = s => document.querySelector(s);
const now = () => Date.now();
const rid = () => Math.random().toString(36).slice(2, 10);

/* every subject needs topic names, not only the one open in single player */
for (const k of SUBJECT_ORDER){ const S = SUBJECTS[k]; if (!S.topicName){ const o = {}; S.catalog.forEach(th=>th.units.forEach(u=>u.topics.forEach(([c,n])=>{ o[c]=n; }))); S.topicName = o; } }

/* ================= transports ================= */
function peerTransport(){
  const ok = () => typeof window.Peer === "function";
  return {
    ok,
    host(code, h){ return new Promise((res, rej) => {
      if (!ok()) return rej("nolib");
      const peer = new Peer(PREFIX + code, {debug:0}), conns = new Map(); let opened = false;
      const t = setTimeout(() => { if (!opened){ try{ peer.destroy(); }catch(e){} rej("timeout"); } }, 15000);
      peer.on("open", () => { opened = true; clearTimeout(t); res({
        sendTo(id, m){ const c = conns.get(id); if (c && c.open) try{ c.send(m); }catch(e){} },
        broadcast(m){ conns.forEach(c => { if (c.open) try{ c.send(m); }catch(e){} }); },
        close(){ try{ peer.destroy(); }catch(e){} },
      }); });
      peer.on("connection", c => {
        conns.set(c.peer, c);
        c.on("data", d => h.onData(c.peer, d));
        const gone = () => { if (conns.get(c.peer) === c){ conns.delete(c.peer); h.onClose(c.peer); } };
        c.on("close", gone); c.on("error", gone);
      });
      peer.on("disconnected", () => { try{ peer.reconnect(); }catch(e){} });
      peer.on("error", e => { if (!opened){ clearTimeout(t); try{ peer.destroy(); }catch(x){} rej(e && e.type === "unavailable-id" ? "taken" : "network"); } });
    }); },
    join(code, h){ return new Promise((res, rej) => {
      if (!ok()) return rej("nolib");
      const peer = new Peer({debug:0}); let done = false;
      const fail = r => { if (done) return; done = true; clearTimeout(t); try{ peer.destroy(); }catch(e){} rej(r); };
      const t = setTimeout(() => fail("timeout"), 15000);
      peer.on("error", e => fail(e && e.type === "peer-unavailable" ? "nocode" : "network"));
      peer.on("open", () => {
        const c = peer.connect(PREFIX + code, {reliable:true});
        c.on("open", () => { done = true; clearTimeout(t); res({ send(m){ if (c.open) try{ c.send(m); }catch(e){} }, close(){ try{ c.close(); peer.destroy(); }catch(e){} } }); });
        c.on("data", d => h.onData(d));
        c.on("close", () => h.onClose()); c.on("error", () => h.onClose());
      });
    }); },
  };
}
function localTransport(){
  return {
    ok: () => typeof BroadcastChannel === "function",
    host(code, h){ return new Promise(res => {
      const ch = new BroadcastChannel("oiac-" + code);
      ch.onmessage = e => { const m = e.data; if (!m || m.to !== "host") return;
        if (m.type === "ping") ch.postMessage({to:m.from, type:"pong"});
        else if (m.type === "data") h.onData(m.from, m.data);
        else if (m.type === "close") h.onClose(m.from); };
      res({ sendTo(id, m){ ch.postMessage({to:id, type:"data", data:m}); }, broadcast(m){ ch.postMessage({to:"*", type:"data", data:m}); },
            close(){ ch.postMessage({to:"*", type:"close"}); ch.close(); } });
    }); },
    join(code, h){ return new Promise((res, rej) => {
      const id = "g" + rid(), ch = new BroadcastChannel("oiac-" + code); let ok = false;
      const t = setTimeout(() => { if (!ok){ ch.close(); rej("nocode"); } }, 2500);
      ch.onmessage = e => { const m = e.data; if (!m || (m.to !== id && m.to !== "*")) return;
        if (m.type === "pong" && !ok){ ok = true; clearTimeout(t); res({ send(d){ ch.postMessage({to:"host", from:id, type:"data", data:d}); }, close(){ ch.postMessage({to:"host", from:id, type:"close"}); ch.close(); } }); }
        else if (m.type === "data") h.onData(m.data);
        else if (m.type === "close") h.onClose(); };
      ch.postMessage({to:"host", from:id, type:"ping"});
    }); },
  };
}
const Transport = LOCAL ? localTransport() : peerTransport();

/* ================= profile ================= */
let prof = Object.assign({name:"", skin:"bio", hue:HUES[0]}, store.get("oiac-me") || {});
if (!SUBJECTS[prof.skin]) prof.skin = "cs";
if (!HUES.includes(prof.hue)) prof.hue = HUES[0];
const skinSVG = (skin, hue) => (SUBJECTS[skin] || SUBJECTS.cs).avatar(4, hue);

/* ================= room state ================= */
let role = null, net = null, myId = null, R = null, S = null;
let deadlineLocal = 0, chooseLocal = 0, raf = 0, hostTimer = 0, turnSeq = 0, usedIds = new Set();
let seatEls = [], barKey = "", boardKey = "", choosePick = null;

function defaultSettings(){
  return {seats:4, lives:3, timer:20, heartPts:150, level:"HL", subjects:SUBJECT_ORDER.slice(), off:{}};
}
function poolFor(st, subj, topic){
  const out = [];
  for (const k of st.subjects){
    if (subj && k !== subj) continue;
    const off = new Set(st.off[k] || []);
    for (const p of SUBJECTS[k].prompts){ const t = topicOf(p);
      if (off.has(t) || (topic && t !== topic) || (st.level === "SL" && p.hl)) continue; out.push([k,p]); }
  }
  return out;
}

/* ---------- host: the referee ---------- */
const player = id => R.players.find(p => p.id === id);
const alive = () => R.players.filter(p => !p.out && p.connected);
function log(text, kind){ R.log.push({text, kind:kind||"", id:rid()}); if (R.log.length > 30) R.log.shift(); }
function pub(){
  const t = now();
  return {code:R.code, phase:R.phase, settings:R.settings, players:R.players, turn:R.turn,
    left: R.phase === "playing" && R.turn ? Math.max(0, R.deadline - t) : 0,
    q:R.q, used:R.used, chooser:R.chooser, chooseLeft: R.phase === "choosing" ? Math.max(0, R.chooseDeadline - t) : 0,
    log:R.log.slice(-6), ranking:R.ranking, round:R.round, lap:R.lap ? {failer:R.lap.failer, left:R.lap.left.length} : null};
}
function push(){ if (role !== "host") return; const s = pub(); net.broadcast({t:"state", s}); apply(s); }
function addPlayer(id, info){
  const taken = new Set(R.players.map(p => p.seat)); let seat = 0; while (taken.has(seat)) seat++;
  R.players.push({id, name:info.name, skin:info.skin, hue:info.hue, seat, hearts:R.settings.lives, points:0, bank:0, out:false, connected:true, host:id === "host"});
}
function cleanInfo(m){
  const name = String(m && m.name || "").replace(/\s+/g, " ").trim().slice(0, 16);
  if (!name) return null;
  const skin = SUBJECTS[m.skin] ? m.skin : "cs", hue = HUES.includes(+m.hue) ? +m.hue : HUES[0];
  return {name, skin, hue};
}
function newQuestion(subj, topic){
  let cand = poolFor(R.settings, subj, topic).filter(([,p]) => !usedIds.has(p.id));
  if (!cand.length) cand = poolFor(R.settings, subj, topic);
  if (!cand.length) cand = poolFor(R.settings);
  if (!cand.length) return false;
  const [k, p] = cand[Math.floor(Math.random()*cand.length)]; usedIds.add(p.id);
  R.q = {subject:k, id:p.id, spec:p.spec, text:p.q, topic:SUBJECTS[k].topicName[topicOf(p)] || "", total:p.list.length, hl:!!p.hl};
  R.used = []; R.round++;
  return true;
}
const findPrompt = q => SUBJECTS[q.subject].prompts.find(p => p.id === q.id);
function nextAlive(fromId){
  const all = [...R.players].sort((a,b) => a.seat - b.seat), i = all.findIndex(p => p.id === fromId);
  for (let k = 1; k <= all.length; k++){ const p = all[((i + k) % all.length + all.length) % all.length]; if (!p.out && p.connected) return p.id; }
  return null;
}
function setTurn(id){
  clearTimeout(hostTimer);
  R.phase = "playing"; R.turn = id; R.chooser = null; R.deadline = now() + R.settings.timer*1000;
  const seq = ++turnSeq;
  hostTimer = setTimeout(() => { if (seq === turnSeq && R.phase === "playing" && R.turn === id) fail(id, null, ""); }, R.settings.timer*1000 + 250);
}
function bank(pl, pts){
  const need = R.settings.heartPts, max = R.settings.lives;
  pl.bank += pts;
  while (pl.bank >= need && pl.hearts < max){ pl.bank -= need; pl.hearts++; log(`${pl.name} won back a heart`, "heart"); }
  if (pl.hearts >= max) pl.bank = Math.min(pl.bank, need);
}
function handleAnswer(id, text){
  if (R.phase !== "playing" || R.turn !== id) return;
  const pl = player(id), p = findPrompt(R.q); text = String(text || "").replace(/\s+/g, " ").trim().slice(0, 80);
  if (!pl || !p || !text) return;
  const m = match(p, text);
  if (m.kind === "ok"){
    if (R.used.some(u => u.key === m.ans.key)) return fail(id, `said “${m.ans.label}”, but that was already given`, text);
    const tier = tierOf(p, m.ans), pts = TIER_BASE[tier].pts;
    pl.points += pts; R.used.push({key:m.ans.key, label:m.ans.label, tier, pts, by:id});
    log(`${pl.name}: “${m.ans.label}” · ${SUBJECTS[R.q.subject].tiers[tier]} +${pts}`, tier);
    bank(pl, pts);
    if (R.used.length >= p.list.length){
      if (R.lap){ log("Every answer has been given!", "info"); return endLap(); }
      log("Every answer has been given. Here's a new question!", "info"); newQuestion(); }
    advance(id); push(); return;
  }
  fail(id, m.kind === "trap" ? `said “${text}”. ${m.msg}` : `said “${text}”, which isn't an accepted answer`, text);
}
function fail(id, why){
  clearTimeout(hostTimer); turnSeq++;
  const pl = player(id); if (!pl) return;
  pl.hearts--;
  log(why ? `${pl.name} ${why} · −1 heart` : `${pl.name} ran out of time · −1 heart`, "fail");
  if (pl.bank >= R.settings.heartPts){ pl.bank -= R.settings.heartPts; pl.hearts++; log(`${pl.name}'s full points bar saved the heart`, "heart"); }
  if (pl.hearts <= 0){ pl.out = true; log(`${pl.name} is out of hearts!`, "out"); }
  if (alive().length <= 1) return gameOver();
  if (R.lap){ advance(id); push(); return; }   // someone else slipped during the lap: it carries on
  // start a lap: everyone else answers this same question once, then it comes back to whoever slipped
  R.lap = {failer:id, left:alive().map(p => p.id).filter(x => x !== id)};
  log(`Everyone else answers this question once, then it's back to ${pl.name} to pick the next topic`, "info");
  if (!R.lap.left.length) return endLap();
  advance(id); push();
}
// move the turn on clockwise; during a lap, skip anyone who has already had their go
function advance(id){
  if (!R.lap){ setTurn(nextAlive(id)); return; }
  const aliveIds = new Set(alive().map(p => p.id));
  R.lap.left = R.lap.left.filter(x => x !== id && aliveIds.has(x));
  if (!R.lap.left.length){ endLap(); return; }
  let nx = nextAlive(id), guard = 0;
  while (nx && !R.lap.left.includes(nx) && guard++ < 10) nx = nextAlive(nx);
  setTurn(nx);
}
function endLap(){
  clearTimeout(hostTimer); turnSeq++;
  const f = R.lap ? R.lap.failer : R.turn; R.lap = null;
  const fp = player(f);
  R.phase = "choosing"; R.turn = null; R.after = f;
  R.chooser = fp && !fp.out && fp.connected ? f : nextAlive(f);
  armChoose(); push();
}
function armChoose(){
  R.chooseDeadline = now() + CHOOSE_TIME*1000; const seq = ++turnSeq;
  hostTimer = setTimeout(() => { if (seq === turnSeq && R.phase === "choosing") choose(R.chooser, null, null); }, CHOOSE_TIME*1000 + 250);
}
function choose(id, subj, topic){
  if (!R || R.phase !== "choosing" || id !== R.chooser) return;
  if (subj && !R.settings.subjects.includes(subj)) subj = null;
  if (topic && !(subj && SUBJECTS[subj].topicName[topic])) topic = null;
  if (!newQuestion(subj, topic)) newQuestion();
  const who = player(id);
  log(`${who ? who.name : "Someone"} picked ${subj ? SUBJECTS[subj].name + (topic ? " · " + topic : "") : "a surprise question"}`, "info");
  setTurn(nextAlive(R.after)); push();
}
function gameOver(){
  clearTimeout(hostTimer); turnSeq++;
  R.phase = "over"; R.turn = null; R.chooser = null;
  const ranked = [...R.players].sort((a,b) => (a.out - b.out) || (b.hearts - a.hearts) || (b.points - a.points));
  R.ranking = ranked.map(p => p.id);
  if (ranked[0]) log(`${ranked[0].name} wins the lesson!`, "gem");
  push();
}
function startGame(){
  R.players = R.players.filter(p => p.connected);
  if (R.players.length < 2) return;
  for (const p of R.players){ p.hearts = R.settings.lives; p.points = 0; p.bank = 0; p.out = false; }
  usedIds = new Set(); R.log = []; R.ranking = null; R.round = 0; R.lap = null;
  if (!newQuestion()){ toast("No questions match the room's filter. Turn on more subjects or topics."); return; }
  log("The lesson has started. Go clockwise!", "info");
  setTurn(R.players[Math.floor(Math.random()*R.players.length)].id); push();
}
function backToLobby(){
  clearTimeout(hostTimer); turnSeq++;
  R.phase = "lobby"; R.turn = null; R.q = null; R.used = []; R.chooser = null; R.ranking = null; R.log = []; R.lap = null;
  R.players = R.players.filter(p => p.connected);
  for (const p of R.players){ p.hearts = R.settings.lives; p.points = 0; p.bank = 0; p.out = false; }
  push();
}
function onHostData(id, m){
  if (!m || typeof m !== "object" || !R) return;
  if (m.t === "hello"){
    if (player(id)) return;
    if (R.phase !== "lobby") return net.sendTo(id, {t:"reject", why:"started"});
    if (R.players.length >= R.settings.seats) return net.sendTo(id, {t:"reject", why:"full"});
    const info = cleanInfo(m); if (!info) return net.sendTo(id, {t:"reject", why:"name"});
    let n = 2, base = info.name; while (R.players.some(p => p.name.toLowerCase() === info.name.toLowerCase())) info.name = `${base.slice(0,13)} ${n++}`;
    addPlayer(id, info); net.sendTo(id, {t:"welcome", you:id}); log(`${info.name} joined the class`, "info"); push();
  } else if (m.t === "answer") handleAnswer(id, m.text);
  else if (m.t === "choose") choose(id, typeof m.subject === "string" ? m.subject : null, typeof m.topic === "string" ? m.topic : null);
  else if (m.t === "leave") onHostClose(id);
}
function onHostClose(id){
  const pl = player(id); if (!pl || !pl.connected) return;
  if (R.phase === "lobby"){ R.players = R.players.filter(p => p.id !== id); log(`${pl.name} left`, "info"); push(); return; }
  pl.connected = false; pl.out = true; log(`${pl.name} left the class`, "out");
  if (R.phase === "over") return push();
  if (alive().length <= 1) return gameOver();
  if (R.phase === "playing" && R.turn === id) advance(id);
  else if (R.phase === "choosing" && R.chooser === id){ R.chooser = nextAlive(id); armChoose(); }
  push();
}

/* ---------- actions from this device ---------- */
function act(msg){
  if (role === "host"){
    if (msg.t === "answer") handleAnswer("host", msg.text);
    else if (msg.t === "choose") choose("host", msg.subject, msg.topic);
  } else if (net) net.send(msg);
}

/* ================= entering, joining, hosting ================= */
function randCode(){ let s = ""; for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random()*CODE_CHARS.length)]; return s; }
const WHY = {
  nocode:"There's no classroom with that code. Check it with the host.", started:"That lesson has already started. Ask the host to go back to the lobby.",
  full:"That classroom is full. Ask the host to add more seats.", name:"Pick a nickname first.", timeout:"Couldn't reach the classroom. Check your connection and try again.",
  network:"Couldn't connect. Check your internet, or try another network (some school Wi-Fi blocks games like this).", nolib:"The multiplayer code didn't load. Refresh the page and try again.",
  taken:"Couldn't create a room code. Try again.",
};

function openJoin(code){
  flowId++; clearUI(); document.body.classList.add("in-class");
  const host = q$("#crJoin"); if (host) host.remove();
  const wrap = document.createElement("div"); wrap.className = "overlay cr-join"; wrap.id = "crJoin";
  wrap.innerHTML = `<section class="sheet" aria-labelledby="cjT">
    <div><div class="eyebrow">Multiplayer</div><h1 id="cjT">Join the <em>classroom</em></h1></div>
    <p class="lede">Play against friends on their own phones. Take turns round the class, give answers nobody else has said, and hold on to your hearts.</p>
    <label class="cj-field"><span>Nickname <b aria-hidden="true">*</b></span><input id="cjName" maxlength="16" autocomplete="nickname" required value="${esc(prof.name)}" placeholder="What should the class call you?"></label>
    <fieldset class="cj-skins"><legend>Skin</legend><div class="cj-grid">${SUBJECT_ORDER.map(k => `<label class="cj-skin"><input type="radio" name="cjSkin" value="${k}" ${k === prof.skin ? "checked" : ""}><span class="cj-av">${skinSVG(k, prof.hue)}</span><small>${esc(SUBJECTS[k].name)}</small></label>`).join("")}</div></fieldset>
    <fieldset class="cj-hues"><legend>Colour</legend><div class="row">${HUES.map(h => `<label class="cj-hue" style="--h:${h}"><input type="radio" name="cjHue" value="${h}" ${h === prof.hue ? "checked" : ""}><span></span></label>`).join("")}</div></fieldset>
    <div class="cj-codebox">
      <label class="cj-field"><span>Enter the code</span><input id="cjCode" maxlength="6" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="e.g. K7P3QX" value="${esc(code || "")}"></label>
      <button class="btn" id="cjJoin">Join</button>
    </div>
    <div class="cj-or"><span>or</span></div>
    <button class="btn ghost cj-host" id="cjHost">Host a classroom</button>
    <p class="small" id="cjMsg" role="status" aria-live="polite"></p>
    <details class="how"><summary>How the classroom works</summary>
      <ul class="cj-rules">
        <li>Everyone takes turns clockwise round the class, answering the same question.</li>
        <li>A correct answer nobody has said yet scores 10–100 points. Rarer answers score more.</li>
        <li>A wrong answer, a repeat or running out of time scores 0 and costs a heart. Whoever slipped up picks the next topic, and the next person starts.</li>
        <li>Fill your points bar to win back a heart. If your hearts are full, the bar saves the next heart you lose.</li>
        <li>The last player with hearts left wins. The host sets the seats, hearts, timer, points per heart and which questions come up.</li>
      </ul>
    </details>
    <button class="linkbtn" id="cjBack">← Back to single player</button>
  </section>`;
  document.body.appendChild(wrap);
  const msg = t => { q$("#cjMsg").textContent = t; };
  const readProf = () => { prof = {name:q$("#cjName").value.replace(/\s+/g," ").trim().slice(0,16), skin:(q$('input[name="cjSkin"]:checked')||{}).value || "cs", hue:+((q$('input[name="cjHue"]:checked')||{}).value || HUES[0])}; store.set("oiac-me", prof); return prof; };
  wrap.querySelectorAll('input[name="cjHue"]').forEach(r => r.onchange = () => { const h = +r.value; wrap.querySelectorAll(".cj-skin").forEach(l => { const k = l.querySelector("input").value; l.querySelector(".cj-av").innerHTML = skinSVG(k, h); }); });
  const busy = b => { q$("#cjJoin").disabled = b; q$("#cjHost").disabled = b; };
  const need = () => { if (!readProf().name){ msg("Enter a nickname first."); q$("#cjName").focus(); return false; } return true; };
  q$("#cjCode").oninput = e => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); };
  q$("#cjCode").onkeydown = e => { if (e.key === "Enter") q$("#cjJoin").click(); };
  q$("#cjJoin").onclick = async () => {
    if (!need()) return;
    const c = q$("#cjCode").value.trim().toUpperCase();
    if (c.length !== 6){ msg("Classroom codes have 6 letters and numbers."); q$("#cjCode").focus(); return; }
    busy(true); msg("Joining the classroom…");
    try { await joinRoom(c); } catch(e){ msg(WHY[e] || WHY.network); busy(false); }
  };
  q$("#cjHost").onclick = async () => {
    if (!need()) return;
    busy(true); msg("Opening a classroom…");
    try { await hostRoom(); } catch(e){ msg(WHY[e] || WHY.network); busy(false); }
  };
  q$("#cjBack").onclick = () => { wrap.remove(); exitToTitle(); };
  setTimeout(() => (code ? q$("#cjName") : q$("#cjName")).focus({preventScroll:true}), 50);
}

async function hostRoom(){
  let code, t;
  for (let i = 0; i < 4; i++){ code = randCode(); try { t = await Transport.host(code, {onData:onHostData, onClose:onHostClose}); break; } catch(e){ if (e !== "taken" || i === 3) throw e; } }
  net = t; role = "host"; myId = "host";
  R = {code, phase:"lobby", settings:defaultSettings(), players:[], turn:null, deadline:0, q:null, used:[], chooser:null, after:null, chooseDeadline:0, log:[], ranking:null, round:0};
  addPlayer("host", prof); log(`${prof.name} opened the classroom`, "info");
  enterRoom(); push();
}
async function joinRoom(code){
  let welcomed = false, rejected = null;
  const t = await Transport.join(code, {
    onData: m => { if (!m) return;
      if (m.t === "welcome"){ myId = m.you; welcomed = true; }
      else if (m.t === "reject"){ rejected = m.why; }
      else if (m.t === "state"){ if (!q$("#cr")) enterRoom(); apply(m.s); }
      else if (m.t === "closed") hostGone(); },
    onClose: () => hostGone(),
  });
  net = t; role = "guest";
  net.send({t:"hello", name:prof.name, skin:prof.skin, hue:prof.hue});
  const t0 = now();
  while (!welcomed && !rejected && now() - t0 < 10000) await new Promise(r => setTimeout(r, 100));
  if (!welcomed){ const why = rejected || "timeout"; try{ net.close(); }catch(e){} net = null; role = null; const cr = q$("#cr"); if (cr) cr.remove(); throw why; }
}
function hostGone(){
  if (!role) return;
  const was = role; leave(true);
  if (was === "guest"){ openJoin(""); const m = q$("#cjMsg"); if (m) m.textContent = "The host closed the classroom."; }
}
function leave(silent){
  cancelAnimationFrame(raf); raf = 0; clearTimeout(hostTimer); turnSeq++;
  if (net){ try { if (role === "host") net.broadcast({t:"closed"}); else net.send({t:"leave"}); } catch(e){} setTimeout((n => () => { try{ n.close(); }catch(e){} })(net), 150); }
  net = null; role = null; R = null; S = null; myId = null; seatEls = []; barKey = ""; boardKey = ""; choosePick = null;
  const cr = q$("#cr"); if (cr) cr.remove();
  if (!silent) exitToTitle();
}
function exitToTitle(){ document.body.classList.remove("in-class"); const j = q$("#crJoin"); if (j) j.remove(); if (location.hash.startsWith("#room-")) history.replaceState(null, "", location.pathname + location.search); titleScreen(); }

/* ================= the classroom view ================= */
function enterRoom(){
  const j = q$("#crJoin"); if (j) j.remove();
  document.body.classList.add("in-class");
  const el = document.createElement("div"); el.className = "cr"; el.id = "cr";
  el.innerHTML = `
    <header class="cr-top">
      <button class="cr-btn" id="crLeave">Leave</button>
      <div class="cr-code"><small>Classroom code</small><b id="crCode">——</b></div>
      <div class="row cr-top-r"><button class="cr-btn" id="crCopy">Copy invite</button><button class="cr-btn" id="crSet" hidden>Room settings</button></div>
    </header>
    <div class="cr-wall">
      <div class="cr-clock" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#f4f0e2" stroke="#5a3d22" stroke-width="4"/>${Array.from({length:12},(_,i)=>{const a=i/12*Math.PI*2;return `<line x1="${(32+Math.sin(a)*22).toFixed(1)}" y1="${(32-Math.cos(a)*22).toFixed(1)}" x2="${(32+Math.sin(a)*25).toFixed(1)}" y2="${(32-Math.cos(a)*25).toFixed(1)}" stroke="#3a2a1a" stroke-width="2"/>`;}).join("")}<line id="crHand" x1="32" y1="32" x2="32" y2="10" stroke="#c83a3a" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="32" r="3" fill="#3a2a1a"/></svg><b id="crSecs"></b></div>
      <section class="board" id="crBoard" aria-live="polite"></section>
      <div class="cr-feed" id="crFeed" aria-live="polite"></div>
    </div>
    <section class="room" id="crRoom" aria-label="Classroom seats">
      <svg class="cr-ring" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="50" rx="38" ry="34" fill="none" stroke="rgb(255 240 210 / .35)" stroke-width=".5" stroke-dasharray="1.6 2.4" class="cr-flow"/></svg>
      <div class="cr-rug"></div>
      <div id="crSeats"></div>
      <div class="cr-teacher" id="crTeacher" aria-hidden="true"><svg viewBox="-60 -70 120 130">
        <ellipse cx="0" cy="52" rx="30" ry="6" fill="rgb(0 0 0 / .3)"/>
        <path d="M-20 50 L-16 8 Q0 -2 16 8 L20 50 Z" fill="#3b5ba5"/><path d="M-6 6 L0 22 L6 6Z" fill="#f4f0e2"/><path d="M-2 10 L0 26 L2 10Z" fill="#c83a3a"/>
        <circle cx="0" cy="-12" r="15" fill="#f1c9a0"/><path d="M-15 -14 Q-14 -32 0 -30 Q14 -32 15 -14 Q8 -22 0 -21 Q-8 -22 -15 -14Z" fill="#5a3a22"/>
        <circle cx="-6" cy="-12" r="4.5" fill="none" stroke="#222" stroke-width="1.6"/><circle cx="6" cy="-12" r="4.5" fill="none" stroke="#222" stroke-width="1.6"/><path d="M-1.5 -12h3" stroke="#222" stroke-width="1.6"/>
        <path d="M-5 -4 Q0 -1 5 -4" stroke="#7a3a2a" stroke-width="1.6" fill="none"/>
        <path d="M-17 12 Q-26 28 -20 40" stroke="#3b5ba5" stroke-width="7" fill="none" stroke-linecap="round"/>
        <g id="crStick" class="cr-stick"><path d="M0 0 H22" stroke="#3b5ba5" stroke-width="7" stroke-linecap="round"/><circle cx="24" cy="0" r="4" fill="#f1c9a0"/><path d="M24 0 H64" stroke="#8a5a2a" stroke-width="3" stroke-linecap="round"/><circle cx="65" cy="0" r="2.6" fill="#ffe9a8"/></g>
      </svg><span class="cr-cw">↻ clockwise</span></div>
    </section>
    <footer class="cr-bar" id="crBar"></footer>
    <div class="cr-sheet" id="crSheet" hidden></div>`;
  document.body.appendChild(el);
  q$("#crLeave").onclick = () => leave(false);
  q$("#crCopy").onclick = () => { const link = location.origin + location.pathname + location.search + "#room-" + (S ? S.code : ""); copyText(link, `Invite link copied. Or share the code ${S ? S.code : ""}.`); };
  q$("#crSet").onclick = openSettings;
  if (!raf) raf = requestAnimationFrame(tick);
}
function copyText(t, ok){ try { navigator.clipboard.writeText(t).then(() => toast(ok), () => toast("Share this: " + t)); } catch(e){ toast("Share this: " + t); } }
function toast(t){ const f = q$("#crFeed") || document.body; const d = document.createElement("div"); d.className = "cr-toast"; d.textContent = t; f.appendChild(d); while (f.children.length > 2) f.firstChild.remove(); setTimeout(() => d.remove(), 5200); }

function apply(s){
  S = s; deadlineLocal = performance.now() + (s.left || 0); chooseLocal = performance.now() + (s.chooseLeft || 0);
  render();
}
const me = () => S && S.players.find(p => p.id === myId);
const pname = id => { const p = S.players.find(x => x.id === id); return p ? p.name : "Someone"; };
const heartSVG = full => `<svg viewBox="0 0 24 22" class="${full ? "on" : ""}" aria-hidden="true"><path d="M12 21 C5 15 1 11.5 1 7 C1 3.5 3.6 1 7 1 C9.2 1 11 2.3 12 4 C13 2.3 14.8 1 17 1 C20.4 1 23 3.5 23 7 C23 11.5 19 15 12 21Z"/></svg>`;

function seatPos(i, n){ const a = (-90 + 360*(i + .5)/n) * Math.PI/180; return [50 + 38*Math.cos(a), 50 + 34*Math.sin(a)]; }
function render(){
  if (!S || !q$("#cr")) return;
  q$("#crCode").textContent = S.code;
  q$("#crSet").hidden = !(role === "host" && S.phase === "lobby");
  renderBoard(); renderSeats(); renderBar(); renderFeed(); requestAnimationFrame(aimTeacher);
}
function renderBoard(){
  const b = q$("#crBoard"), st = S.settings, mine = me();
  const subjNames = st.subjects.length === SUBJECT_ORDER.length ? "all subjects" : st.subjects.map(k => SUBJECTS[k].name).join(", ") || "no subjects";
  let key = S.phase + "|" + S.round + "|" + (S.lap ? S.lap.left + ":" + S.turn : "") + "|" + S.used.length + "|" + S.chooser + "|" + S.players.length + "|" + JSON.stringify(st) + "|" + (choosePick||"");
  if (key === boardKey) return; boardKey = key;
  if (S.phase === "lobby"){
    const n = S.players.length;
    b.innerHTML = `<div class="ch-eye">Today's lesson</div><div class="ch-big">Classroom <span>${esc(S.code)}</span></div>
      <p class="ch">${n} of ${st.seats} seats taken · ${st.lives} heart${st.lives>1?"s":""} each · ${st.timer}s per turn · ${st.heartPts} pts wins back a heart</p>
      <p class="ch ch-s">Questions: ${esc(subjNames)} · ${st.level}${Object.values(st.off).some(a=>a&&a.length) ? " · some topics off" : ""}</p>
      ${role === "host" ? `<div class="row"><button class="btn ch-btn" id="crStart" ${n<2?"disabled":""}>Start the lesson</button><button class="btn ghost ch-btn2" id="crSet2">Room settings</button></div>${n<2?`<p class="ch ch-s">Share the code with friends. You need at least 2 players.</p>`:""}`
        : `<p class="ch ch-s">Waiting for the host to start the lesson…</p>`}`;
    const s1 = q$("#crStart"); if (s1) s1.onclick = startGame;
    const s2 = q$("#crSet2"); if (s2) s2.onclick = openSettings;
  } else if (S.phase === "playing" || (S.phase === "choosing" && S.chooser !== myId)){
    const q = S.q, sub = SUBJECTS[q.subject];
    const chips = S.used.map(u => `<span class="ch-chip" style="--c:${TIER_BASE[u.tier].hex}">${esc(u.label)} <i>${esc(sub.tiers[u.tier])} +${u.pts}</i> <em>${esc(pname(u.by))}</em></span>`).join("");
    b.innerHTML = `<div class="ch-eye">${esc(sub.name)} · ${esc(q.spec)}${q.hl?" · HL":""} · ${esc(q.topic)}</div>
      <div class="ch-q">${esc(q.text)}</div>
      ${S.lap && S.phase === "playing" ? `<p class="ch ch-lap">Lap: everyone answers once more (${S.lap.left} to go), then it's back to ${esc(pname(S.lap.failer))} to pick the next topic.</p>` : ""}
      ${S.phase === "choosing" ? `<p class="ch ch-wait">${esc(pname(S.chooser))} is choosing the next topic… <b id="crChooseLeft"></b></p>` : ""}
      <div class="ch-used">${chips || `<span class="ch-s">No answers yet. Rarer answers score more.</span>`}</div>
      <div class="ch-foot"><span>${q.total - S.used.length} answer${q.total - S.used.length === 1 ? "" : "s"} left on the list</span><span>Question ${S.round}</span></div>`;
  } else if (S.phase === "choosing"){
    const subs = S.settings.subjects.filter(k => poolFor(S.settings, k).length);
    if (!choosePick){
      b.innerHTML = `<div class="ch-eye">You slipped up, so you choose</div><div class="ch-big ch-mid">Pick the next subject <b id="crChooseLeft"></b></div>
        <div class="ch-pick"><button class="ch-opt ch-rand" data-rand="1">Surprise me</button>${subs.map(k => `<button class="ch-opt" data-subj="${k}"><span class="ch-ic">${skinSVG(k, SUBJECTS[k].bands[2].hue)}</span>${esc(SUBJECTS[k].name)}</button>`).join("")}</div>`;
      b.querySelectorAll("[data-subj]").forEach(x => x.onclick = () => { choosePick = x.dataset.subj; boardKey = ""; renderBoard(); });
      b.querySelector("[data-rand]").onclick = () => act({t:"choose", subject:null, topic:null});
    } else {
      const k = choosePick, Sx = SUBJECTS[k], off = new Set(S.settings.off[k] || []);
      const topics = Object.keys(Sx.topicName).filter(c => !off.has(c) && poolFor(S.settings, k, c).length);
      b.innerHTML = `<div class="ch-eye">${esc(Sx.name)}</div><div class="ch-big ch-mid">Pick a topic <b id="crChooseLeft"></b></div>
        <div class="ch-pick ch-topics"><button class="ch-opt ch-rand" data-any="1">Any ${esc(Sx.name)} topic</button>${topics.map(c => `<button class="ch-opt" data-topic="${esc(c)}"><b>${esc(c)}</b> ${esc(Sx.topicName[c])}</button>`).join("")}</div>
        <button class="linkbtn ch-back" id="crPickBack">← Other subjects</button>`;
      b.querySelector("[data-any]").onclick = () => act({t:"choose", subject:k, topic:null});
      b.querySelectorAll("[data-topic]").forEach(x => x.onclick = () => act({t:"choose", subject:k, topic:x.dataset.topic}));
      q$("#crPickBack").onclick = () => { choosePick = null; boardKey = ""; renderBoard(); };
    }
  } else if (S.phase === "over"){
    const ranked = (S.ranking || []).map(id => S.players.find(p => p.id === id)).filter(Boolean);
    const w = ranked[0];
    b.innerHTML = `<div class="ch-eye">Lesson over</div>
      ${w ? `<div class="ch-win"><span class="ch-wav">${skinSVG(w.skin, w.hue)}</span><div><div class="ch-big">${esc(w.name)} wins!</div><p class="ch ch-s">${w.points} points · ${w.hearts} heart${w.hearts===1?"":"s"} left</p></div></div>` : ""}
      <ol class="ch-rank">${ranked.map((p,i) => `<li><b>${i+1}</b> ${esc(p.name)}${p.id===myId?" (you)":""} <span>${p.points} pts${p.out ? "" : " · " + p.hearts + " ♥"}</span></li>`).join("")}</ol>`;
  }
  if (S.phase !== "choosing" || S.chooser !== myId) choosePick = null;
}
// the teacher turns to point the stick at whoever is answering (or choosing)
let stickDeg = 0;
function aimTeacher(){
  const t = q$("#crTeacher"), st = q$("#crStick"); if (!t || !st || !S) return;
  const target = document.querySelector(".seat.on .st-av");
  t.classList.toggle("idle", !target);
  if (!target) return;
  const a = t.querySelector("svg").getBoundingClientRect(), b = target.getBoundingClientRect();
  const sx = a.left + a.width*(78/120), sy = a.top + a.height*(78/130);      // the shoulder (18, 8) in screen space
  let deg = Math.atan2(b.top + b.height/2 - sy, b.left + b.width/2 - sx) * 180/Math.PI;
  while (deg - stickDeg > 180) deg -= 360; while (deg - stickDeg < -180) deg += 360;   // turn the short way round
  stickDeg = deg; st.style.transform = `translate(18px, 8px) rotate(${deg.toFixed(1)}deg)`;
}
addEventListener("resize", () => aimTeacher());
function renderSeats(){
  const box = q$("#crSeats"), n = S.settings.seats;
  if (seatEls.length !== n){ box.innerHTML = ""; seatEls = [];
    for (let i = 0; i < n; i++){ const d = document.createElement("div"); d.className = "seat"; const [x,y] = seatPos(i, n); d.style.left = x + "%"; d.style.top = y + "%";
      d.innerHTML = `<div class="st-ring"><svg viewBox="0 0 84 84"><circle cx="42" cy="42" r="38" class="st-track"/><circle cx="42" cy="42" r="38" class="st-time" pathLength="100"/></svg></div><div class="st-av"></div><div class="st-desk"></div><div class="st-name"></div><div class="st-hp"></div><div class="st-pts"></div><div class="st-bank"><i></i></div>`;
      box.appendChild(d); seatEls.push(d); } }
  const bySeat = new Map(S.players.map(p => [p.seat, p]));
  seatEls.forEach((d, i) => {
    const p = bySeat.get(i);
    const turn = p && ((S.phase === "playing" && S.turn === p.id) || (S.phase === "choosing" && S.chooser === p.id));
    d.className = "seat" + (p ? "" : " empty") + (turn ? " on" : "") + (p && p.out ? " out" : "") + (p && p.id === myId ? " me" : "") + (p && !p.connected ? " gone" : "");
    const av = d.querySelector(".st-av"), akey = p ? p.skin + p.hue : "";
    if (av.dataset.k !== akey){ av.dataset.k = akey; av.innerHTML = p ? skinSVG(p.skin, p.hue) : ""; }
    d.querySelector(".st-name").innerHTML = p ? `${esc(p.name)}${p.host ? ' <i title="Host">host</i>' : ""}` : "Empty seat";
    d.querySelector(".st-hp").innerHTML = p ? Array.from({length:S.settings.lives}, (_,k) => heartSVG(k < p.hearts)).join("") : "";
    d.querySelector(".st-pts").textContent = p ? `${p.points} pts` : "";
    d.querySelector(".st-bank i").style.width = p ? Math.min(100, p.bank / S.settings.heartPts * 100) + "%" : "0";
    d.querySelector(".st-bank").title = p ? `${p.bank} / ${S.settings.heartPts} points towards a heart` : "";
  });
}
function renderBar(){
  const bar = q$("#crBar"), mine = me();
  const myTurn = S.phase === "playing" && S.turn === myId && mine && !mine.out;
  const key = [S.phase, S.turn, S.round, S.used.length, myTurn, mine && mine.out, role, S.chooser].join("|");
  if (key === barKey) return; barKey = key;
  if (myTurn){
    bar.innerHTML = `<form id="crForm" autocomplete="off"><span class="cr-turn">Your turn</span><input id="crAns" maxlength="80" placeholder="Answer the question on the board" aria-label="Your answer" autocapitalize="off" spellcheck="false"><button class="btn inject">Answer</button></form>`;
    q$("#crForm").onsubmit = e => { e.preventDefault(); const v = q$("#crAns").value.trim(); if (!v) return; q$("#crAns").disabled = true; act({t:"answer", text:v}); };
    q$("#crAns").focus({preventScroll:true});
  } else if (S.phase === "lobby"){
    bar.innerHTML = `<p class="cr-wait">${role === "host" ? "You're the host. Share the code, then start the lesson." : "You're in! Waiting for the host to start."}</p>`;
  } else if (S.phase === "over"){
    bar.innerHTML = `<div class="row">${role === "host" ? `<button class="btn" id="crAgain">Back to the lobby</button>` : `<p class="cr-wait">Waiting for the host…</p>`}<button class="btn ghost" id="crBye">Leave</button></div>`;
    const a = q$("#crAgain"); if (a) a.onclick = backToLobby;
    q$("#crBye").onclick = () => leave(false);
  } else if (mine && mine.out){
    bar.innerHTML = `<p class="cr-wait">You're out of hearts. Watch the rest of the lesson.</p>`;
  } else if (S.phase === "choosing"){
    bar.innerHTML = `<p class="cr-wait">${S.chooser === myId ? "Choose the next topic on the board." : `${esc(pname(S.chooser))} is choosing the next topic…`}</p>`;
  } else {
    bar.innerHTML = `<p class="cr-wait">Waiting for <b>${esc(pname(S.turn))}</b> to answer… <span id="crWaitSecs"></span></p>`;
  }
}
let shownLog = new Set();
function renderFeed(){
  const f = q$("#crFeed");
  for (const e of S.log){ if (shownLog.has(e.id)) continue; shownLog.add(e.id);
    const d = document.createElement("div"); d.className = "cr-toast k-" + e.kind; if (TIER_BASE[e.kind]) d.style.setProperty("--c", TIER_BASE[e.kind].hex);
    d.textContent = e.text; f.appendChild(d); setTimeout(() => d.remove(), 5200);
    while (f.children.length > 2) f.firstChild.remove(); }
}
function tick(){
  raf = requestAnimationFrame(tick);
  if (!S) return;
  const t = performance.now();
  let rem = 0, total = 1;
  if (S.phase === "playing"){ rem = Math.max(0, deadlineLocal - t); total = S.settings.timer*1000; }
  else if (S.phase === "choosing"){ rem = Math.max(0, chooseLocal - t); total = CHOOSE_TIME*1000; }
  const frac = total ? rem/total : 0, secs = Math.ceil(rem/1000);
  const hand = q$("#crHand"); if (hand) hand.setAttribute("transform", `rotate(${((1-frac)*360).toFixed(1)} 32 32)`);
  const sec = q$("#crSecs"); if (sec) { sec.textContent = (S.phase === "playing" || S.phase === "choosing") ? secs + "s" : ""; sec.classList.toggle("low", S.phase === "playing" && secs <= 5); }
  const ws = q$("#crWaitSecs"); if (ws) ws.textContent = secs + "s";
  const cl = q$("#crChooseLeft"); if (cl) cl.textContent = secs + "s";
  const ring = document.querySelector(".seat.on .st-time"); if (ring) ring.style.strokeDashoffset = (100*(1-frac)).toFixed(2);
}

/* ---------- host settings ---------- */
function openSettings(){
  if (role !== "host" || !R || R.phase !== "lobby") return;
  const sh = q$("#crSheet"), st = R.settings;
  sh.hidden = false;
  sh.innerHTML = `<section class="sheet cr-set" role="dialog" aria-modal="true" aria-labelledby="csT">
    <div class="row cs-head"><h2 id="csT">Room settings</h2><button class="btn" id="csDone">Done</button></div>
    <div class="cs-grid">
      <label class="cj-field"><span>Seats</span><select id="csSeats">${[2,3,4,5,6,7,8].map(n => `<option value="${n}" ${n===st.seats?"selected":""} ${n<R.players.length?"disabled":""}>${n}${n===2?" (1v1)":""}</option>`).join("")}</select></label>
      <label class="cj-field"><span>Hearts each</span><input id="csLives" type="number" min="1" max="10" value="${st.lives}"></label>
      <label class="cj-field"><span>Seconds per turn</span><input id="csTimer" type="number" min="5" max="120" step="5" value="${st.timer}"></label>
      <label class="cj-field"><span>Points to win back a heart</span><input id="csHeart" type="number" min="20" max="2000" step="10" value="${st.heartPts}"></label>
    </div>
    <div class="row"><span class="small">Level</span><div class="seg" role="group" aria-label="Level"><button data-lv="SL" aria-pressed="${st.level==="SL"}">SL</button><button data-lv="HL" aria-pressed="${st.level==="HL"}">HL</button></div><span class="small" id="csCount"></span></div>
    <h3 class="cs-h3">Questions come from</h3>
    <div class="cs-subjects">${SUBJECT_ORDER.map(k => { const Sx = SUBJECTS[k], off = new Set(st.off[k] || []);
      return `<div class="cs-subj"><label class="cs-sl"><input type="checkbox" data-s="${k}" ${st.subjects.includes(k)?"checked":""}><span class="cs-ic">${skinSVG(k, Sx.bands[2].hue)}</span><b>${esc(Sx.name)}</b></label>
        <details><summary>Topics</summary><div class="cs-topics">${Object.keys(Sx.topicName).map(c => `<label><input type="checkbox" data-s="${k}" data-t="${esc(c)}" ${off.has(c)?"":"checked"}> <b>${esc(c)}</b> ${esc(Sx.topicName[c])}</label>`).join("")}</div></details></div>`; }).join("")}</div>
  </section>`;
  const count = () => { const n = poolFor(R.settings).length; q$("#csCount").textContent = `${n} question${n===1?"":"s"} in the mix`; };
  const clamp = (v, a, b, d) => { v = Math.round(+v); return Number.isFinite(v) ? Math.min(b, Math.max(a, v)) : d; };
  const upd = () => { push(); count(); };
  q$("#csSeats").onchange = e => { const v = clamp(e.target.value, Math.max(2, R.players.length), 8, 4); R.settings.seats = v; seatEls = []; upd(); };
  q$("#csLives").onchange = e => { R.settings.lives = clamp(e.target.value, 1, 10, 3); e.target.value = R.settings.lives; R.players.forEach(p => p.hearts = R.settings.lives); upd(); };
  q$("#csTimer").onchange = e => { R.settings.timer = clamp(e.target.value, 5, 120, 20); e.target.value = R.settings.timer; upd(); };
  q$("#csHeart").onchange = e => { R.settings.heartPts = clamp(e.target.value, 20, 2000, 150); e.target.value = R.settings.heartPts; upd(); };
  sh.querySelectorAll("[data-lv]").forEach(b => b.onclick = () => { R.settings.level = b.dataset.lv; sh.querySelectorAll("[data-lv]").forEach(x => x.setAttribute("aria-pressed", String(x === b))); upd(); });
  sh.querySelectorAll("input[data-s]:not([data-t])").forEach(cb => cb.onchange = () => { const k = cb.dataset.s, set = new Set(R.settings.subjects); cb.checked ? set.add(k) : set.delete(k); R.settings.subjects = SUBJECT_ORDER.filter(x => set.has(x)); upd(); });
  sh.querySelectorAll("input[data-t]").forEach(cb => cb.onchange = () => { const k = cb.dataset.s, off = new Set(R.settings.off[k] || []); cb.checked ? off.delete(cb.dataset.t) : off.add(cb.dataset.t); R.settings.off = {...R.settings.off, [k]:[...off]}; upd(); });
  q$("#csDone").onclick = () => { sh.hidden = true; sh.innerHTML = ""; };
  count(); q$("#csDone").focus({preventScroll:true});
}

/* ---------- entry points ---------- */
window.openClassroom = code => openJoin(code || "");
const m = location.hash.match(/^#room-([A-Z0-9]{6})$/i);
if (m) openJoin(m[1].toUpperCase());
})();
