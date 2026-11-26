/* The honey pot: drop in an IA, extended essay or HL essay as a PDF and get an estimated mark on every IB criterion.
   The higher the grade, the deeper your document sinks into the honey. Marks only: IB rules don't allow outside
   feedback on coursework, so each criterion just says "Smashing it", "On track" or "Still to work on".
   The PDF goes to the "grade" Supabase Edge Function (supabase/functions/grade), which asks Claude to mark it
   against the criteria in honey-rubrics.js; the file itself is never stored. Setup: supabase/HONEY-SETUP.md. */
(function(){
"use strict";
const HY = window.HONEY, CFG = window.ACCOUNT_CONFIG || {};
const q$ = s => document.querySelector(s);
const h = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const st = { get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } }, set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} } };
const PREF = "oiac-honey-pick";
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const ORDER = ["bio","chem","phys","cs","biz","hist","geo","math","eng","fr","gk"];
const VERDICT = { smash: ["Smashing it", "🔥"], track: ["On track", "✓"], work: ["Still to work on", "⚒"] };

let P = null;     // what the player has picked: {kind, subject, task, level, file, b64, pages, agree}
let G = null;     // the screen while it's open: {el, raf, phase, ...}

/* ================= opening and closing ================= */
function open(){
  close(true);
  const saved = st.get(PREF) || {};
  const cur = (typeof M !== "undefined" && M) ? M.key : null;   // the subject open on the title screen
  const subj = ok(saved.subject) ? saved.subject : ok(cur) ? cur : "bio";
  P = {kind: saved.kind === "ee" ? "ee" : "ia", subject: subj, task: null, level: saved.level === "HL" ? "HL" : "SL", hist: saved.hist === "hist28" ? "hist28" : "hist27", file: null, b64: null, pages: 0, agree: !!saved.agree};
  const el = document.createElement("div"); el.className = "hpot"; el.id = "hp"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "The honey pot");
  el.innerHTML = `
    <div class="hp-top"><button class="hp-x" id="hpClose" aria-label="Close the honey pot">✕</button>
      <div class="hp-title"><small>Grade my coursework</small><b>The honey pot</b></div><span></span></div>
    <div class="hp-body">
      <div class="hp-stage" aria-hidden="true">${jarSVG()}</div>
      <section class="hp-panel" id="hpPanel" aria-live="polite"></section>
    </div>`;
  document.body.appendChild(el); document.body.classList.add("in-honey");
  G = {el, raf: 0, t0: performance.now(), phase: "idle", lid: 0, doc: {y: -140, r: -8, x: 150, vis: false}, target: null, ripple: 0, bubbles: [], bee: {x: 238, y: 54, dir: -1}, swoop: 0, party: 0};
  q$("#hpClose").onclick = () => close();
  G.onKey = e => { if (e.key === "Escape" && G && G.phase !== "reading") close(); };
  document.addEventListener("keydown", G.onKey);
  G.E = Object.fromEntries(["HoneyP","Shine","Doc","Bub","Drip","Bee","Spark","Lid"].map(k => [k, el.querySelector("#hp" + k)]));
  paintPick(); loop();
  q$("#hpClose").focus({preventScroll: true});
}
function close(silent){
  if (!G) return;
  cancelAnimationFrame(G.raf); if (G.abort) G.abort.abort(); document.removeEventListener("keydown", G.onKey);
  G.el.remove(); G = null; document.body.classList.remove("in-honey");
  if (!silent){ const b = q$("#honeyBtn"); if (b) b.focus({preventScroll: true}); }
}
const ok = k => !!(k && HY.SUBJECTS[k] && (HY.SUBJECTS[k].ia.length || HY.SUBJECTS[k].ee));
function remember(){ st.set(PREF, {kind: P.kind, subject: P.subject, level: P.level, hist: P.hist, agree: P.agree}); }
// the task the picker points at: the subject's IA (or HL essay), or the EE
function taskFor(){
  const s = HY.SUBJECTS[P.subject]; if (!s) return null;
  if (P.kind === "ee") return s.ee ? HY.TASKS.ee : null;
  if (!s.ia.length) return null;
  return HY.TASKS[s.ia.length > 1 ? (s.ia.includes(P.hist) ? P.hist : s.ia[0]) : s.ia[0]];
}
const iaWord = k => { const s = HY.SUBJECTS[k]; return s && s.ia[0] === "engessay" ? "HL essay" : "IA"; };

/* ================= step 1: choose and drop ================= */
function paintPick(msg){
  if (!G) return;
  G.phase = P.file ? "hover" : "idle"; G.target = null; G.doc.vis = !!P.file; G.party = 0;
  const T = taskFor(), S = HY.SUBJECTS[P.subject], signed = window.Account && Account.user, configured = window.Account && Account.configured();
  const subjBtn = k => { const s = HY.SUBJECTS[k], game = typeof SUBJECTS !== "undefined" && SUBJECTS[k];
    const ic = game && game.avatar ? `<span class="hp-ic">${game.avatar(3, game.bands[2].hue)}</span>` : "";
    return `<button class="hp-subj${ok(k) ? "" : " off"}" data-hsubj="${k}" aria-pressed="${k === P.subject}">${ic}<span>${h(s.name.replace(/:.*$/, ""))}</span></button>`; };
  const none = S && !T ? (S.none || (P.kind === "ee" ? "This subject can't be used for an extended essay." : "This subject has no written internal assessment.")) : "";
  q$("#hpPanel").innerHTML = `
    <p class="hp-lede">Drop in your coursework as a PDF. It's marked against the official IB criteria, and <b>the better it is, the deeper it sinks</b>.</p>
    <div class="hp-seg" role="group" aria-label="What are you dropping in?">
      <button data-hkind="ia" aria-pressed="${P.kind === "ia"}">Internal assessment</button>
      <button data-hkind="ee" aria-pressed="${P.kind === "ee"}">Extended essay</button></div>
    <div class="hp-subjects" role="group" aria-label="Subject">${ORDER.filter(k => HY.SUBJECTS[k]).map(subjBtn).join("")}</div>
    ${T ? taskBox(T) : `<p class="hp-note warn">${h(none)}</p>`}
    ${T ? `
    <label class="hp-drop" id="hpDrop" tabindex="0">
      <input type="file" id="hpFile" accept="application/pdf,.pdf" hidden>
      ${P.file ? `<span class="hp-file"><b>📄 ${h(P.file.name)}</b><small>${(P.file.size / 1048576).toFixed(1)} MB${P.pages ? ` · ${P.pages} page${P.pages === 1 ? "" : "s"}` : ""} · tap to change</small></span>`
               : `<span class="hp-file"><b>Drop your PDF here</b><small>or tap to choose one · up to ${HY.MAX_MB} MB</small></span>`}
    </label>
    <label class="hp-agree"><input type="checkbox" id="hpAgree" ${P.agree ? "checked" : ""}> <span>Send my PDF to Claude (Anthropic) to estimate the marks. The file isn't kept: only the marks are saved to my account.</span></label>
    ${msg ? `<p class="hp-note warn" role="alert">${h(msg)}</p>` : ""}
    <button class="btn hp-go" id="hpGo" ${P.file && P.agree && signed ? "" : "disabled"}>Drop it in the honey pot</button>
    ${!configured ? `<p class="hp-note">The honey pot needs accounts switched on (supabase/SETUP.md).</p>`
      : !signed ? `<p class="hp-note">You need to be signed in: your grades are saved to your account, with ${HY.DAILY} grades a day each. <button class="mini" id="hpSignIn">Sign in</button></p>` : ""}` : ""}
    <p class="hp-fine">Marks only, no feedback: IB rules don't allow outside feedback on coursework, so each criterion just shows whether you're smashing it, on track or still need to work on it. It's an estimate, not an IB mark: your teacher and IB moderation decide the real one. Check your school's academic integrity policy before you use it.</p>
    <div id="hpHist"></div>`;
  const P$ = q$("#hpPanel");
  P$.querySelectorAll("[data-hkind]").forEach(b => b.onclick = () => { P.kind = b.dataset.hkind; remember(); paintPick(); });
  P$.querySelectorAll("[data-hsubj]").forEach(b => b.onclick = () => { P.subject = b.dataset.hsubj; remember(); paintPick(); const f = q$(`[data-hsubj="${P.subject}"]`); if (f) f.focus({preventScroll: true}); });
  P$.querySelectorAll("[data-hvar]").forEach(b => b.onclick = () => { const [k, v] = b.dataset.hvar.split(":"); P[k] = v; remember(); paintPick(); });
  const inp = q$("#hpFile"), drop = q$("#hpDrop");
  if (inp){
    inp.onchange = () => { if (inp.files && inp.files[0]) take(inp.files[0]); };
    drop.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); inp.click(); } });
    ["dragenter", "dragover"].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add("over"); }));
    ["dragleave", "drop"].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.remove("over"); }));
    drop.addEventListener("drop", e => { const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) take(f); });
  }
  const ag = q$("#hpAgree"); if (ag) ag.onchange = () => { P.agree = ag.checked; remember(); const g = q$("#hpGo"); if (g) g.disabled = !(P.file && P.agree && window.Account && Account.user); };
  const si = q$("#hpSignIn"); if (si) si.onclick = () => { close(true); Account.open(); };
  const go = q$("#hpGo"); if (go) go.onclick = () => grade();
  history();
}
function taskBox(T){
  const s = HY.SUBJECTS[P.subject], vars = [];
  if (P.kind === "ia" && s.ia.length > 1) vars.push(`<div class="hp-seg sm" role="group" aria-label="Exam session">${s.ia.map(id => `<button data-hvar="hist:${id}" aria-pressed="${T.id === id}">${id === "hist28" ? "Exams from 2028" : "Exams in 2027"}</button>`).join("")}</div>`);
  if (T.levels) vars.push(`<div class="hp-seg sm" role="group" aria-label="Level"><button data-hvar="level:SL" aria-pressed="${P.level === "SL"}">SL</button><button data-hvar="level:HL" aria-pressed="${P.level === "HL"}">HL</button></div>`);
  const max = T.criteria.reduce((a, c) => a + c.max, 0);
  return `<div class="hp-task">
    <div class="hp-task-h"><b>${h(s.name)} · ${h(T.kind === "ee" ? "Extended essay" : T.title.replace(/ \(.*\)$/, ""))}</b><small>${h(T.guide)} · ${h(T.limit)} · out of ${max}</small></div>
    ${vars.join("")}
    ${P.kind === "ia" && s.iaNote ? `<p class="hp-note">${h(s.iaNote)}</p>` : ""}
    <details class="hp-crit"><summary>The criteria it's marked on</summary><ul>${T.criteria.map(c => `<li><b>${h(c.id)} · ${h(c.name)}</b> <span>(${c.max})</span><small>${h(c.focus)}</small></li>`).join("")}</ul><p class="hp-note">${h(T.note)}</p></details>
  </div>`;
}
// read the chosen file: a PDF, small enough, then base64 for the grader
function take(f){
  if (!/\.pdf$/i.test(f.name) && f.type !== "application/pdf") return paintPick("That isn't a PDF. Export your work as a PDF first (File → Save as / Export → PDF).");
  if (f.size > HY.MAX_MB * 1048576) return paintPick(`That PDF is ${(f.size / 1048576).toFixed(1)} MB. The limit is ${HY.MAX_MB} MB: try exporting it again with smaller images.`);
  const r = new FileReader();
  r.onerror = () => paintPick("That file couldn't be read. Try choosing it again.");
  r.onload = () => {
    const bytes = new Uint8Array(r.result);
    if (String.fromCharCode(...bytes.slice(0, 5)) !== "%PDF-") return paintPick("That file isn't a real PDF. Export your work as a PDF and try again.");
    let bin = ""; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    const pages = (bin.match(/\/Type\s*\/Page(?![a-zA-Z])/g) || []).length;
    P.file = {name: f.name, size: f.size}; P.b64 = btoa(bin); P.pages = pages;
    if (G){ G.doc.y = -140; G.doc.r = -8; }
    paintPick();
  };
  r.readAsArrayBuffer(f);
}

/* ================= step 2: the bee reads it ================= */
async function grade(){
  const T = taskFor(); if (!T || !P.b64 || !G) return;
  const id = G; G.phase = "reading"; G.doc.vis = true; G.drop = performance.now(); G.landed = false;
  G.el.scrollTo({top: 0, behavior: calm() ? "auto" : "smooth"});   // on a phone, bring the jar back into view
  const lines = [`The bee is reading your ${T.kind === "ee" ? "extended essay" : iaWord(P.subject) === "HL essay" ? "HL essay" : "IA"}…`, ...T.criteria.map(c => `Marking criterion ${c.id}: ${c.name}…`), "Checking the markbands…", "Totting up the marks…"];
  q$("#hpPanel").innerHTML = `<div class="hp-wait"><div class="hp-buzz" aria-hidden="true"><i></i><i></i><i></i></div><p id="hpWait">${h(lines[0])}</p>
    <p class="hp-fine">${h(HY.SUBJECTS[P.subject].name)} · ${h(P.file.name)}. Reading a whole piece takes a minute or two. Keep this page open.</p></div>`;
  let li = 0; const tick = setInterval(() => { const w = q$("#hpWait"); if (!w || G !== id){ clearInterval(tick); return; } li = Math.min(lines.length - 1, li + 1); w.textContent = lines[li]; }, 7000);
  const fail = m => { clearInterval(tick); if (G !== id) return; paintPick(m); };
  let token = null; try { token = await Account.token(); } catch(e){}
  if (!token) return fail("Your sign-in has expired. Sign in again, then drop it in.");
  const ctl = new AbortController(); G.abort = ctl;
  let res;
  try {
    res = await fetch(`${CFG.supabaseUrl}/functions/v1/grade`, {method: "POST", signal: ctl.signal,
      headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`, apikey: CFG.supabaseAnonKey},
      body: JSON.stringify({task: T.id, subject: P.subject, level: T.levels ? P.level : null, file_name: P.file.name, pdf: P.b64})});
  } catch(e){ return fail(ctl.signal.aborted ? "" : "Couldn't reach the honey pot. Check your connection and try again."); }
  if (!res.ok){
    let j = {}; try { j = await res.json(); } catch(e){}
    if (res.status === 404) return fail("The honey pot isn't switched on yet: its grading function hasn't been deployed (supabase/HONEY-SETUP.md).");
    if (j.error === "limit") return fail(`${j.message} You can drop in another ${j.next ? "after " + new Date(j.next).toLocaleString([], {weekday: "short", hour: "2-digit", minute: "2-digit"}) : "tomorrow"}.`);
    return fail(j.message || `The honey pot had a problem (error ${res.status}). Please try again.`);
  }
  // the grader streams a line every few seconds while it works, then the result
  let out = null, buf = "";
  try {
    const rd = res.body.getReader(), dec = new TextDecoder();
    for (;;){ const {value, done} = await rd.read(); if (done) break; buf += dec.decode(value, {stream: true});
      let i; while ((i = buf.indexOf("\n")) >= 0){ const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1); if (!line) continue;
        try { const m = JSON.parse(line); if (m.type === "result" || m.type === "error") out = m; } catch(e){} } }
    if (!out && buf.trim()) { try { out = JSON.parse(buf); } catch(e){} }
  } catch(e){ return fail(ctl.signal.aborted ? "" : "The connection dropped while the bee was reading. Please try again."); }
  clearInterval(tick);
  if (G !== id) return;
  if (!out) return fail("The honey pot took too long. Try again, or try a smaller PDF.");
  if (out.type === "error") return fail(out.message);
  show(T, out);
}

/* ================= step 3: it sinks, and the marks ================= */
function show(T, r){
  const f = r.max ? r.total / r.max : 0;
  G.el.scrollTo({top: 0, behavior: calm() ? "auto" : "smooth"});
  G.phase = "sunk"; G.target = {f, t0: performance.now(), from: G.doc.y}; G.ripple = 1; G.swoop = performance.now(); G.party = f >= 0.8 ? performance.now() : 0;
  setLabel(r.grade, `${r.total}/${r.max}`);
  const by = v => r.criteria.filter(c => c.verdict === v);
  const row = c => `<li class="hp-c ${c.verdict}"><span class="hp-cl">${h(c.id)}</span><span class="hp-cn"><b>${h(c.name)}</b>
      <i class="hp-bar"><i style="width:${Math.round(100 * c.mark / c.max)}%"></i></i></span><span class="hp-cm">${c.mark}<small>/${c.max}</small></span>
      <span class="hp-v">${VERDICT[c.verdict][1]} ${VERDICT[c.verdict][0]}</span></li>`;
  const kindWord = T.kind === "ee" ? "EE grade" : T.kind === "essay" ? "HL essay grade" : "IA grade";
  const notes = [];
  if (r.over) notes.push(`About ${r.words.toLocaleString()} words: over the ${T.words.toLocaleString()}-word limit. Moderators stop reading at the limit, so nothing after it was marked.`);
  if (T.kind === "ee" && r.reflection === false) notes.push("There's no reflective statement in this file, so Reflection got 0. Add your reflective statement to the PDF to have it marked.");
  q$("#hpPanel").innerHTML = `
    <div class="hp-score"><div class="hp-grade"><small>Estimated ${h(kindWord)}</small><b>${h(r.grade)}</b></div>
      <div class="hp-tot"><b>${r.total}<small>/${r.max}</small></b><span>${Math.round(100 * f)}% of the marks · ${h(depthWord(f))}</span></div></div>
    ${by("smash").length ? `<h3 class="hp-h smash">Where you're smashing it</h3><ul class="hp-list">${by("smash").map(row).join("")}</ul>` : ""}
    ${by("track").length ? `<h3 class="hp-h track">On track</h3><ul class="hp-list">${by("track").map(row).join("")}</ul>` : ""}
    ${by("work").length ? `<h3 class="hp-h work">Still to work on</h3><ul class="hp-list">${by("work").map(row).join("")}</ul>` : ""}
    ${notes.map(n => `<p class="hp-note warn">${h(n)}</p>`).join("")}
    <p class="hp-fine">${h(T.note)} This is an estimate from an AI grader using the IB criteria, not an IB mark.${typeof r.left === "number" ? ` You have ${r.left} grade${r.left === 1 ? "" : "s"} left today.` : ""}</p>
    <div class="row hp-again"><button class="btn" id="hpAgain">Drop in another</button><button class="btn ghost" id="hpDone">Close</button></div>
    <div id="hpHist"></div>`;
  q$("#hpAgain").onclick = () => { P.file = null; P.b64 = null; P.pages = 0; setLabel(); paintPick(); };
  q$("#hpDone").onclick = () => close();
  q$("#hpAgain").focus({preventScroll: true});
  history(r.id);
}
const depthWord = f => f >= 0.8 ? "right at the bottom of the pot" : f >= 0.6 ? "deep in the honey" : f >= 0.4 ? "halfway down" : f >= 0.2 ? "just under the surface" : "floating on top";

// earlier grades, read from the player's own rows (row-level security keeps everyone else's private)
async function history(skipId){
  const box = q$("#hpHist"); if (!box || !window.Account || !Account.user) return;
  try {
    const c = await Account.client(); if (!c || !c.from) return;
    const r = await c.from("honey_grades").select("id,task,subject,level,file_name,total,max,grade,created_at").eq("status", "done").order("created_at", {ascending: false}).limit(6);
    const rows = ((r && r.data) || []).filter(x => x.id !== skipId).slice(0, 5);
    if (!rows.length || !q$("#hpHist")) return;
    q$("#hpHist").innerHTML = `<h3 class="hp-h">Earlier in the honey pot</h3><ul class="hp-past">${rows.map(x => { const T = HY.TASKS[x.task], s = HY.SUBJECTS[x.subject];
      return `<li><span><b>${h(s ? s.name.replace(/:.*$/, "") : x.subject)} · ${h(T ? (T.kind === "ee" ? "EE" : T.short) : x.task)}</b><small>${h(x.file_name || "")} · ${new Date(x.created_at).toLocaleDateString([], {day: "numeric", month: "short"})}</small></span><span class="hp-pg">${h(x.grade)}<small>${x.total}/${x.max}</small></span></li>`; }).join("")}</ul>`;
  } catch(e){}
}

/* ================= the jar, the honey, the document and the bee ================= */
// jar inside: x 58..242, honey surface y=150, bottom y=326
const SURF = 150, FLOOR = 326, DOC_H = 70;
function jarSVG(){
  return `<svg viewBox="-62 0 382 360" class="hp-jar" role="img">
    <defs>
      <linearGradient id="hpHoney" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd257" stop-opacity=".8"/><stop offset=".45" stop-color="#f3a51c" stop-opacity=".84"/><stop offset="1" stop-color="#b8640a" stop-opacity=".92"/></linearGradient>
      <linearGradient id="hpGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".2" stop-color="#fff" stop-opacity=".05"/><stop offset=".8" stop-color="#fff" stop-opacity=".03"/><stop offset="1" stop-color="#fff" stop-opacity=".14"/></linearGradient>
      <linearGradient id="hpLidG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c98a3a"/><stop offset="1" stop-color="#7a4a18"/></linearGradient>
      <pattern id="hpHex" width="14" height="24" patternUnits="userSpaceOnUse"><path d="M7 0l7 4v8l-7 4-7-4V4zM7 16l7 4v8M7 16l-7 4" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="1"/></pattern>
      <clipPath id="hpIn"><path d="M58 92 Q58 84 66 84 H234 Q242 84 242 92 V312 Q242 334 220 334 H80 Q58 334 58 312Z"/></clipPath>
    </defs>
    <ellipse cx="150" cy="344" rx="112" ry="10" fill="#000" opacity=".45"/>
    <path d="M52 92 Q52 78 66 78 H234 Q248 78 248 92 V312 Q248 340 220 340 H80 Q52 340 52 312Z" fill="#1a1208" fill-opacity=".55" stroke="#fff" stroke-opacity=".22" stroke-width="3"/>
    <g id="hpDoc" opacity="0"><rect x="-30" y="-35" width="60" height="${DOC_H}" rx="3" fill="#fffaf0" stroke="#5a3a14" stroke-opacity=".55" stroke-width="1.5"/><path d="M18 -35 L30 -23 L18 -23Z" fill="#e8dcc0"/>
      <text id="hpDocT" x="0" y="-10" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="15" fill="#3a2a10">IA</text>
      <g stroke="#bfae8a" stroke-width="2.2" stroke-linecap="round"><path d="M-20 4H20M-20 12H20M-20 20H12"/></g></g>
    <g clip-path="url(#hpIn)">
      <path id="hpHoneyP" fill="url(#hpHoney)"/>
      <rect x="52" y="${SURF}" width="200" height="190" fill="url(#hpHex)"/>
      <g id="hpBub"></g>
      <path id="hpShine" fill="none" stroke="#fff6c8" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/>
    </g>
    <path d="M52 92 Q52 78 66 78 H234 Q248 78 248 92 V312 Q248 340 220 340 H80 Q52 340 52 312Z" fill="url(#hpGlass)"/>
    <path d="M72 100 V300" stroke="#fff" stroke-opacity=".22" stroke-width="7" stroke-linecap="round"/>
    <g id="hpLid"><rect x="44" y="50" width="212" height="34" rx="9" fill="url(#hpLidG)" stroke="#5a3208" stroke-width="2"/>
    <path d="M56 60h188M56 72h188" stroke="#ffd59a" stroke-opacity=".25" stroke-width="2"/></g>
    <path id="hpDrip" d="M200 84 q0 0 0 0" fill="#f3a51c"/>
    <path d="M50 70 Q20 80 -8 118" fill="none" stroke="#c9a26a" stroke-width="2"/>
    <g id="hpLabel" transform="rotate(-7 -10 160)"><path d="M-48 122 H22 Q30 122 30 130 V196 Q30 204 22 204 H-48 Q-56 204 -56 196 V130 Q-56 122 -48 122Z" fill="#fff3d0" stroke="#7a4a18" stroke-width="2.5"/>
      <circle cx="-8" cy="132" r="4" fill="#1a1208" stroke="#7a4a18" stroke-width="2"/>
      <text id="hpLabG" x="-13" y="178" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="34" fill="#5a3208">IB</text>
      <text id="hpLabS" x="-13" y="195" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-weight="600" font-size="11" fill="#7a4a18">honey</text></g>
    <g id="hpBee">${beeSVG()}</g>
    <g id="hpSpark"></g>
  </svg>`;
}
function beeSVG(){
  return `<g class="hp-bee"><ellipse class="hp-wing l" cx="-5" cy="-13" rx="9" ry="12" fill="#e8f6ff" fill-opacity=".78" stroke="#9cc8e0" stroke-width="1"/>
    <ellipse class="hp-wing r" cx="6" cy="-14" rx="8" ry="11" fill="#e8f6ff" fill-opacity=".62" stroke="#9cc8e0" stroke-width="1"/>
    <ellipse cx="0" cy="0" rx="15" ry="11" fill="#ffd23d" stroke="#3a2608" stroke-width="2"/>
    <path d="M-5 -10.4 Q-8 0 -5 10.4 M3 -10.8 Q0 0 3 10.8" stroke="#2a1a06" stroke-width="4.2" fill="none"/>
    <path d="M-15 0 l-6 -1.6 l0 3.2z" fill="#2a1a06"/>
    <circle cx="15" cy="-1" r="7.5" fill="#2a1a06"/><circle cx="17.6" cy="-3" r="2.2" fill="#fff"/>
    <path d="M17 -8 q2 -7 7 -8 M14 -8 q-1 -7 2 -10" stroke="#2a1a06" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>`;
}
function setLabel(g, s){
  const G1 = q$("#hpLabG"), S1 = q$("#hpLabS"), T = q$("#hpDocT"); if (!G1) return;
  G1.textContent = g || "IB"; S1.textContent = s || "honey";
  const task = taskFor(); if (T) T.textContent = task ? (task.kind === "ee" ? "EE" : task.short === "HL essay" ? "HL" : "IA") : "IA";
}
const ease = t => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
function loop(){
  if (!G) return;
  const now = performance.now(), t = (now - G.t0) / 1000, still = calm(), d = G.doc;
  // honey surface: a slow wave, stirred by the document landing
  G.ripple *= 0.985;
  const amp = (still ? 0.6 : 2.2) + G.ripple * 7, pts = [];
  for (let x = 44; x <= 256; x += 8) pts.push([x, SURF + Math.sin(x / 19 + t * 1.6) * amp * 0.6 + Math.sin(x / 7 - t * 2.3) * amp * 0.25 + (d.vis ? -G.ripple * 5 * Math.exp(-Math.pow((x - d.x) / 26, 2)) : 0)]);
  const top = "M" + pts.map(p => p[0] + " " + p[1].toFixed(1)).join(" L");
  const E = G.E;
  E.HoneyP.setAttribute("d", top + " L256 345 L44 345Z");
  E.Shine.setAttribute("d", "M" + pts.slice(3, 11).map(p => p[0] + " " + (p[1] + 4).toFixed(1)).join(" L"));
  // the document: hovering above the jar, dropping in, floating while it's read, then sinking to its depth
  const docEl = E.Doc;
  if (d.vis){
    if (G.phase === "hover"){ d.y = 18 + Math.sin(t * 2) * 4; d.r = -8 + Math.sin(t * 1.3) * 3; }
    else if (G.phase === "reading"){ const k = ease((now - (G.drop || now)) / 900); const float = SURF - 12 + Math.sin(t * 1.8) * 3;
      d.y = 18 + (float - 18) * k; d.r = -8 + Math.sin(t * 1.1) * 4; if (k > 0.85 && !G.landed){ G.landed = true; G.ripple = 1; } }
    else if (G.phase === "sunk" && G.target){ const tg = G.target, k = still ? 1 : ease((now - tg.t0) / 2600);
      const goal = SURF - 14 + (FLOOR - DOC_H / 2 - (SURF - 14)) * tg.f;
      d.y = tg.from + (goal - tg.from) * k + (k >= 1 ? Math.sin(t * 0.9) * 1.2 : 0); d.r = (1 - k) * 10 * Math.sin(t * 3) + 3;
      if (!still && k < 1 && G.bubbles.length < 60 && Math.random() < 0.25) G.bubbles.push({x: d.x + (Math.random() - 0.5) * 40, y: d.y, r: 1.5 + Math.random() * 3, v: 0.4 + Math.random() * 0.6}); }
    docEl.setAttribute("opacity", "1"); docEl.setAttribute("transform", `translate(${d.x} ${d.y.toFixed(1)}) rotate(${d.r.toFixed(1)})`);
  } else { docEl.setAttribute("opacity", "0"); G.landed = false; }
  G.bubbles = G.bubbles.filter(b => (b.y -= b.v) > SURF + 2);
  E.Bub.innerHTML = G.bubbles.map(b => `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r.toFixed(1)}" fill="#fff4c0" fill-opacity=".5"/>`).join("");
  // the lid lifts off while a document is going in, and goes back on when the marks are in
  const lidOpen = d.vis && (G.phase === "hover" || G.phase === "reading") ? 1 : 0;
  G.lid += (lidOpen - G.lid) * (still ? 1 : 0.08);
  E.Lid.setAttribute("transform", `translate(${(G.lid * 44).toFixed(1)} ${(G.lid * 14).toFixed(1)}) rotate(${(-G.lid * 84).toFixed(1)} 256 84)`);   // propped against the side of the jar
  // a honey drip down the side
  const dp = (t * 0.35) % 1; E.Drip.setAttribute("d", `M206 84 q-3 ${(4 + dp * 26).toFixed(1)} 0 ${(6 + dp * 34).toFixed(1)} q3 ${(-2 - dp * 8).toFixed(1)} 0 ${(-6 - dp * 34).toFixed(1)}Z`);
  // the bee: a figure of eight over the jar, a closer look while reading, a dive to the honey when the marks come in
  const b = G.bee, px = b.x, py = b.y;
  if (still){ b.x = 236; b.y = 34; }
  else if (G.phase === "reading" && d.vis){ b.x = d.x + Math.cos(t * 2.4) * 52; b.y = SURF - 46 + Math.sin(t * 4.8) * 14; }
  else if (G.phase === "sunk" && now - G.swoop < 3200){ const k = (now - G.swoop) / 3200, dip = Math.sin(Math.PI * k);
    b.x = 150 + Math.cos(t * 3) * 60 * (1 - dip * 0.6); b.y = 40 + dip * (SURF - 30 - 40) + Math.sin(t * 6) * 4; }
  else { b.x = 150 + Math.sin(t * 0.9) * 96; b.y = 30 + Math.sin(t * 1.8) * 16; }
  if (Math.abs(b.x - px) > 0.05) b.dir = b.x < px ? -1 : 1;
  E.Bee.setAttribute("transform", `translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) scale(${b.dir} 1) rotate(${(Math.max(-12, Math.min(12, (b.y - py) * 6))).toFixed(1)})`);
  // a burst of sparkles for the top grades
  const sp = E.Spark;
  if (G.party && !still && now - G.party < 4000){ const k = (now - G.party) / 4000;
    sp.innerHTML = Array.from({length: 12}, (_, i) => { const a = i / 12 * Math.PI * 2 + t, rr = 40 + k * 90; return `<path transform="translate(${(150 + Math.cos(a) * rr).toFixed(1)} ${(SURF + 40 + Math.sin(a) * rr * 0.7).toFixed(1)}) rotate(${(t * 90 + i * 30).toFixed(0)})" d="M0 -6L1.6 -1.6 6 0 1.6 1.6 0 6 -1.6 1.6 -6 0 -1.6 -1.6Z" fill="#fff2a0" opacity="${(1 - k).toFixed(2)}"/>`; }).join(""); }
  else if (sp.innerHTML) sp.innerHTML = "";
  G.raf = requestAnimationFrame(loop);
}

window.HoneyPot = { open, close };
})();
