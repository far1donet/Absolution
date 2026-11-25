/* The character profile: a printable IB-style report card built from every saved game, a practice log,
   badges, personal bests, and the profile editor (username, display name, motto, skin, colour, banner).
   Profile.stats(games) is pure, so the numbers can be checked on their own. */
(function(){
"use strict";
const h = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const q$ = s => document.querySelector(s);
const TIERS = ["gem","rootkit","trojan","adware","spam","blocked"];
const TCOL = {gem:"#c98bff", rootkit:"#ff5470", trojan:"#ff9d2e", adware:"#f5d042", spam:"#a9bac4", blocked:"#5b6b75"};
const SIGN = {cs:"The Virus", bio:"The Microbe", chem:"The Atom", phys:"The Cannon", biz:"The Money Bottle", hist:"The Time Traveller", geo:"The Pirate Captain",
  fr:"La Baguette", eng:"The Pencil", math:"Scipa", gk:"The Alien"};
const BANNERS = {night:["#0b1424","#1d3560","Night"], sunset:["#3a1240","#ff7a4a","Sunset"], ocean:["#06283a","#1a8aa8","Ocean"], forest:["#0e2416","#3a8a4a","Forest"],
  ember:["#2a0a06","#d8401a","Ember"], aurora:["#0a1a2a","#5dffb0","Aurora"], galaxy:["#10062a","#b07aff","Galaxy"], paper:["#efe6d2","#d8c49a","Paper"]};
const NOT_IB = new Set(["gk"]);
const topicCode = spec => String(spec || "").split(".").slice(0, 2).join(".");
const dayKey = d => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`; };
const subjName = k => (SUBJECTS[k] && SUBJECTS[k].name) || k;
function topicName(k, code){
  const S = SUBJECTS[k]; if (!S) return code;
  if (!S.topicName){ const o = {}; S.catalog.forEach(t => t.units.forEach(u => u.topics.forEach(([c, n]) => o[c] = n))); S.topicName = o; }
  return S.topicName[code] || code;
}

/* ================= the numbers ================= */
function gradeFor(avgPts, acc){ const perf = .6 * avgPts + .4 * acc * 100; return perf >= 72 ? 7 : perf >= 60 ? 6 : perf >= 48 ? 5 : perf >= 36 ? 4 : perf >= 24 ? 3 : perf >= 12 ? 2 : 1; }
function stats(games, now = Date.now()){
  const subj = {}, days = {}, topic = {};
  const T = {games:games.length, dives:0, daily:0, practice:0, heaven:0, prompts:0, correct:0, pts:0, gems:0, escapes:0, longest:0};
  const sorted = games.slice().sort((a, b) => new Date(a.played_at) - new Date(b.played_at));
  for (const g of sorted){
    const k = g.subject, d = dayKey(g.played_at);
    days[d] = (days[d] || 0) + 1;
    const S = subj[k] || (subj[k] = {key:k, games:0, dives:0, prompts:0, correct:0, pts:0, gems:0, tiers:Object.fromEntries(TIERS.map(t => [t, 0])), trend:[],
      bestDaily:null, bestPractice:null, longest:0, days:new Set(), heaven:{tries:0, escapes:0, fastest:null, earned:0, avail:0}, levels:new Set(), last:null});
    S.games++; S.days.add(d); S.last = g.played_at; if (g.level) S.levels.add(g.level);
    if (g.mode === "heaven"){
      const x = g.extra || {}; T.heaven++; S.heaven.tries++; S.heaven.earned += x.earned || 0; S.heaven.avail += x.avail || 0;
      if (x.escaped){ S.heaven.escapes++; T.escapes++; if (x.secs && (!S.heaven.fastest || x.secs < S.heaven.fastest)) S.heaven.fastest = x.secs; }
      continue;
    }
    T.dives++; S.dives++; if (g.mode === "daily") T.daily++; else T.practice++;
    const ans = Array.isArray(g.answers) ? g.answers : [];
    let gp = 0, gc = 0;
    for (const a of ans){
      const p = +a.p || 0; gp += p; if (p > 0) gc++;
      S.tiers[TIERS.includes(a.t) ? a.t : "blocked"]++;
      const tk = k + "|" + topicCode(a.s), tp = topic[tk] || (topic[tk] = {k, code:topicCode(a.s), n:0, ok:0, pts:0}); tp.n++; if (p > 0) tp.ok++; tp.pts += p;
    }
    S.prompts += ans.length; S.correct += gc; S.pts += gp; S.gems += g.gems || 0;
    T.prompts += ans.length; T.correct += gc; T.pts += gp; T.gems += g.gems || 0;
    if (ans.length) S.trend.push(gp / ans.length);
    if (g.mode === "daily" && (S.bestDaily == null || g.score > S.bestDaily.score)) S.bestDaily = g;
    if (g.mode === "practice" && (S.bestPractice == null || g.score > S.bestPractice.score)) S.bestPractice = g;
    if (g.mode === "practice"){ S.longest = Math.max(S.longest, ans.length); T.longest = Math.max(T.longest, ans.length); }
  }
  const month = now - 30 * 864e5;
  for (const S of Object.values(subj)){
    S.acc = S.prompts ? S.correct / S.prompts : 0; S.avg = S.prompts ? S.pts / S.prompts : 0;
    S.grade = S.prompts >= 5 ? gradeFor(S.avg, S.acc) : null;
    const recent = [...S.days].filter(d => new Date(d + "T12:00:00").getTime() >= month).length;
    const e = recent * 2 + S.prompts / 10 + S.heaven.tries;
    S.effort = e >= 20 ? "A" : e >= 12 ? "B" : e >= 6 ? "C" : e >= 2 ? "D" : "E";
    const tps = Object.values(topic).filter(t => t.k === S.key && t.n >= 3).map(t => ({...t, acc:t.ok / t.n, avg:t.pts / t.n}));
    tps.sort((a, b) => (b.acc + b.avg / 100) - (a.acc + a.avg / 100));
    S.strong = tps.slice(0, 3); S.weak = tps.slice(-3).reverse().filter(t => !S.strong.includes(t) && (t.acc < .85 || t.avg < 50));
  }
  // predicted IB score: the best six IB subjects plus up to 3 "core" points for escaping hell
  const graded = Object.values(subj).filter(S => S.grade && !NOT_IB.has(S.key)).map(S => S.grade).sort((a, b) => b - a);
  const core = T.escapes >= 6 ? 3 : T.escapes >= 3 ? 2 : T.escapes >= 1 ? 1 : 0;
  T.ib = graded.length ? {score:graded.slice(0, 6).reduce((s, x) => s + x, 0) + core, subjects:Math.min(6, graded.length), core} : null;
  T.acc = T.prompts ? T.correct / T.prompts : 0; T.days = Object.keys(days).length; T.dayCounts = days;
  let streak = 0; for (let d = new Date(now); ; d.setDate(d.getDate() - 1)){ const k = dayKey(d); if (days[k]) streak++; else if (streak || dayKey(d) !== dayKey(now)) break; }
  T.streak = streak;
  T.badges = badges(T, subj);
  return {T, subj, topic};
}
function badges(T, subj){
  const S = Object.values(subj), b = [];
  const add = (ic, name, why, got) => b.push({ic, name, why, got});
  add("🎯", "First dive", "Finish a dive", T.dives >= 1);
  add("💎", "Gem hunter", "Find a One in a …", T.gems >= 1);
  add("👑", "Treasure trove", "Find 10 One in a …", T.gems >= 10);
  add("📅", "Daily devotee", "Play 10 daily dives", T.daily >= 10);
  add("🔥", "On fire", "Play 5 days in a row", T.streak >= 5);
  add("🏃", "Marathon", "Answer 30 prompts in one practice run", T.longest >= 30);
  add("😇", "Escaped hell", "Reach the gates of heaven", T.escapes >= 1);
  add("🌍", "Polymath", "Play 5 different subjects", S.filter(x => x.dives).length >= 5);
  add("7️⃣", "Top marks", "Earn a predicted 7", S.some(x => x.grade === 7));
  add("🧮", "Scipa's favourite", "One in a Googol in Maths", !!(subj.math && subj.math.gems));
  return b;
}
function comment(S){
  const Sb = SUBJECTS[S.key], gw = Sb ? Sb.gemWord : "…", parts = [];
  if (!S.grade) return S.heaven.tries ? `Has been working on full written answers in Go to heaven${S.heaven.escapes ? ` and escaped ${S.heaven.escapes} time${S.heaven.escapes === 1 ? "" : "s"}` : ""}. Play a few dives to get a grade.` : "Not enough answers for a grade yet. Five or more prompts gives a prediction.";
  if (S.grade === 7) parts.push("Outstanding: consistently finds the answers few others think of.");
  else if (S.grade >= 5) parts.push("Strong, reliable recall with real flashes of originality.");
  else if (S.grade >= 3) parts.push("Knows the common answers; now aim for the less obvious ones.");
  else parts.push("Needs to revise the core content: too many answers miss the markscheme.");
  if (S.gems >= 3) parts.push(`A true gem hunter, with ${S.gems} One in a ${gw}.`); else if (S.gems) parts.push(`Has found a One in a ${gw}.`);
  if (S.acc >= .85 && S.avg < 45) parts.push("Accurate but plays it safe.");
  if (S.trend.length >= 6){ const n = Math.floor(S.trend.length / 2), a = S.trend.slice(0, n), b = S.trend.slice(-n), av = x => x.reduce((s, y) => s + y, 0) / x.length;
    if (av(b) - av(a) >= 8) parts.push("Improving steadily."); else if (av(a) - av(b) >= 8) parts.push("Recent dives have slipped a little."); }
  if (S.weak[0]) parts.push(`Next step: ${topicName(S.key, S.weak[0].code)}.`);
  if (S.heaven.escapes) parts.push(`Escaped hell ${S.heaven.escapes}×.`);
  return parts.join(" ");
}

/* ================= drawing ================= */
const pct = x => Math.round(x * 100) + "%";
const fmtDate = d => new Date(d).toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"});
function ago(d){ const days = Math.round((new Date(dayKey(Date.now()) + "T12:00:00") - new Date(dayKey(d) + "T12:00:00")) / 864e5);
  return days <= 0 ? "today" : days === 1 ? "yesterday" : days < 7 ? `${days} days ago` : fmtDate(d); }
const gradeCol = g => ({7:"#e8b923", 6:"#3ebf6a", 5:"#2ab0a0", 4:"#3a8ad8", 3:"#e8862a", 2:"#d8503a", 1:"#b83a3a"})[g] || "#8a96a0";
function spark(vals){
  const v = vals.slice(-12); if (v.length < 2) return `<span class="rc-dash">—</span>`;
  const W = 84, H = 24, pts = v.map((y, i) => `${(i / (v.length - 1) * W).toFixed(1)},${(H - 2 - Math.min(100, y) / 100 * (H - 4)).toFixed(1)}`);
  const up = v[v.length - 1] >= v[0];
  return `<svg class="rc-spark" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-label="Last ${v.length} games"><polyline points="${pts.join(" ")}" fill="none" stroke="${up ? "#2f9a5a" : "#c8503a"}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="${pts[pts.length - 1].split(",")[0]}" cy="${pts[pts.length - 1].split(",")[1]}" r="2.4" fill="${up ? "#2f9a5a" : "#c8503a"}"/></svg>`;
}
const mix = S => { const n = TIERS.reduce((s, t) => s + S.tiers[t], 0) || 1;
  return `<span class="rc-mix" title="${TIERS.map(t => `${t === "blocked" ? "missed" : t === "gem" ? "One in a …" : (SUBJECTS[S.key] ? SUBJECTS[S.key].tiers[t] : t)}: ${S.tiers[t]}`).join(" · ")}">${TIERS.map(t => S.tiers[t] ? `<i style="width:${(S.tiers[t] / n * 100).toFixed(1)}%;background:${TCOL[t]}"></i>` : "").join("")}</span>`; };
function avatarFor(k, hue, power, level = 6){ try { return (SUBJECTS[k] || SUBJECTS.cs).avatar(level, hue, power); } catch(e){ return ""; } }
function heatmap(dayCounts, now = Date.now()){
  const weeks = 15, end = new Date(now); end.setHours(12, 0, 0, 0);
  const start = new Date(end); start.setDate(start.getDate() - (weeks * 7 - 1) - ((end.getDay() + 6) % 7 === 6 ? 0 : 0));
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));        // start on a Monday
  let cells = "", months = "", lastM = -1, lastCol = -9;
  for (let w = 0; w < weeks + 1; w++){
    for (let d = 0; d < 7; d++){
      const day = new Date(start); day.setDate(start.getDate() + w * 7 + d); if (day > end) continue;
      const n = dayCounts[dayKey(day)] || 0, lvl = n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : n <= 6 ? 3 : 4;
      cells += `<i class="l${lvl}" style="grid-column:${w + 1};grid-row:${d + 1}" title="${day.toLocaleDateString("en-GB", {weekday:"short", day:"numeric", month:"short"})}: ${n} game${n === 1 ? "" : "s"}"></i>`;
      if (d === 0 && day.getMonth() !== lastM){ lastM = day.getMonth(); if (w - lastCol >= 3){ lastCol = w; months += `<span style="grid-column:${w + 1} / span 3">${day.toLocaleDateString("en-GB", {month:"short"})}</span>`; } }
    }
  }
  return `<div class="pf-heat"><div class="pf-heat-m">${months}</div><div class="pf-heat-g">${cells}</div><div class="pf-heat-k">Less <i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i> More</div></div>`;
}

function render(el, ctx){
  const {T, subj} = stats(ctx.games), P = ctx.profile || {};
  const guest = ctx.guest, name = guest ? "Guest player" : (P.display_name || P.username || "Player");
  const skin = SUBJECTS[P.skin] ? P.skin : (guest ? (typeof M !== "undefined" && M && M.key) || "cs" : "cs"), hue = P.hue == null ? 200 : P.hue;
  const power = (P.show_special !== false && subj[skin] && subj[skin].gems) ? Math.min(3, subj[skin].gems) : 0;
  const ban = BANNERS[P.banner] || BANNERS.night;
  const order = SUBJECT_ORDER.slice(), played = order.filter(k => subj[k]), unplayed = order.filter(k => !subj[k]);
  const since = guest ? null : (P.created_at || (ctx.user && ctx.user.created_at));
  const now = new Date(), session = now.toLocaleDateString("en-GB", {month:"long", year:"numeric"});
  const cand = guest ? "GUEST" : String((ctx.user && ctx.user.id) || "").replace(/-/g, "").slice(0, 8).toUpperCase();
  const earned = T.badges.filter(b => b.got);
  el.innerHTML = `
  <div class="pf" style="--h:${hue}">
    <header class="pf-head" style="background:linear-gradient(120deg,${ban[0]},${ban[1]})">
      <div class="pf-av ${power ? "special" : ""}">${avatarFor(skin, hue, power, 7)}</div>
      <div class="pf-who">
        <h2 id="acTitle">${h(name)}</h2>
        ${guest ? `<p class="pf-handle">Playing as a guest · saved on this device only</p>` : `<p class="pf-handle">@${h(P.username || "")}${since ? ` · joined ${fmtDate(since)}` : ""}</p>`}
        ${P.motto ? `<p class="pf-motto">“${h(P.motto)}”</p>` : ""}
        <div class="pf-tags">${P.fav_subject && SUBJECTS[P.fav_subject] ? `<span>♥ ${h(subjName(P.fav_subject))}</span>` : ""}${earned.slice(-3).map(b => `<span>${b.ic} ${h(b.name)}</span>`).join("")}${power ? `<span class="sp">✦ ${h((SUBJECTS[skin].special || {}).name || "Special form")}</span>` : ""}</div>
      </div>
      ${guest ? (ctx.configured ? `<button class="btn pf-cta" id="pfJoin">Create an account</button>` : "") : ""}
    </header>
    ${guest ? `<p class="pf-note">${ctx.configured ? "Create an account (or sign in) and every game below moves onto it, so it's safe on any device." : "Accounts aren't switched on for this copy of the game yet, so this report card lives on this device only."}${ctx.configured ? ` <button class="ac-link" id="pfIn">Sign in</button>` : ""}</p>` : ""}
    <nav class="pf-tabs" role="tablist">${[["rc","Report card"],["log","Practice log"],...(guest ? [] : [["edit","Customise"],["set","Account"]])].map(([k, t], i) => `<button role="tab" data-tab="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</nav>

    <section class="pf-pane" data-pane="rc">
      ${T.games ? "" : `<div class="pf-empty">No games yet. Play a dive, a practice run or Go to heaven and your report card fills in here.</div>`}
      <article class="rc" id="rcCard" aria-label="Report card">
        <div class="rc-top">
          <svg class="rc-crest" viewBox="0 0 60 70" aria-hidden="true"><path d="M30 2 L56 12 V34 C56 52 44 63 30 68 C16 63 4 52 4 34 V12Z" fill="#1d3560" stroke="#b8902a" stroke-width="3"/><text x="30" y="32" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#f3e3b0">1 in</text><text x="30" y="50" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#f3e3b0">a ∞</text></svg>
          <div><div class="rc-school">One in a Computer · IB Revision Academy</div><h3>Student report card</h3><div class="rc-session">${h(session)} session</div></div>
          <dl class="rc-id"><div><dt>Student</dt><dd>${h(name)}</dd></div><div><dt>Candidate no.</dt><dd>${h(cand)}</dd></div><div><dt>Issued</dt><dd>${h(fmtDate(now))}</dd></div></dl>
        </div>
        <div class="rc-sum">
          <div class="rc-big"><b>${T.ib ? T.ib.score : "—"}</b><span>/45</span><small>Predicted IB score${T.ib && T.ib.subjects < 6 ? ` · from ${T.ib.subjects} subject${T.ib.subjects === 1 ? "" : "s"} so far` : ""}${T.ib && T.ib.core ? ` · +${T.ib.core} core` : ""}</small></div>
          <div><b>${T.dives}</b><small>dives</small></div><div><b>${T.prompts}</b><small>answers</small></div><div><b>${T.prompts ? pct(T.acc) : "—"}</b><small>accuracy</small></div>
          <div><b>${T.gems}</b><small>One in a …</small></div><div><b>${T.escapes}</b><small>heaven escapes</small></div><div><b>${T.streak}</b><small>day streak</small></div>
        </div>
        <table class="rc-table">
          <thead><tr><th>Subject</th><th>Grade</th><th>Effort</th><th class="rc-hide">Answers</th><th class="rc-hide">Accuracy</th><th class="rc-hide">Rarity mix</th><th class="rc-hide">Trend</th><th>Teacher's comment</th></tr></thead>
          <tbody>${played.length ? played.map(k => { const S = subj[k];
            return `<tr><td><div class="rc-subj"><span class="rc-ic">${avatarFor(k, (SUBJECTS[k].bands[2] || {}).hue || 200, 0, 3)}</span><span><b>${h(subjName(k))}</b><small>${h([...S.levels].sort().join("/") || (NOT_IB.has(k) ? "not IB" : ""))}</small></span></div></td>
              <td><span class="rc-grade" style="--g:${gradeCol(S.grade)}">${S.grade || "–"}</span></td><td><span class="rc-eff">${S.effort}</span></td>
              <td class="rc-hide">${S.prompts}</td><td class="rc-hide">${S.prompts ? pct(S.acc) : "—"}</td><td class="rc-hide">${S.prompts ? mix(S) : "—"}</td><td class="rc-hide">${spark(S.trend)}</td>
              <td class="rc-com"><p>${h(comment(S))}</p><i>— ${h(SIGN[k] || "Your teacher")}</i></td></tr>`; }).join("") : `<tr><td colspan="8" class="rc-none">Subjects appear here once you've played them.</td></tr>`}</tbody>
        </table>
        ${unplayed.length ? `<p class="rc-not">Not studied yet: ${unplayed.map(k => h(subjName(k))).join(", ")}.</p>` : ""}
        <div class="rc-foot">
          <div class="rc-key"><b>Grades</b> 7 (excellent) to 1, from accuracy and how rare your answers are. <b>Effort</b> A–E, from how often you've played in the last 30 days. Predicted IB score: your six best IB subjects plus up to 3 core points for escaping hell.</div>
          <div class="rc-signs"><div><i>Scipa</i><span>Head of Revision</span></div><div><i>${h(SIGN[skin] || "The Virus")}</i><span>Form tutor</span></div></div>
          <div class="rc-stamp" aria-hidden="true"><b>${T.gems}</b><span>gems</span></div>
        </div>
      </article>
      <div class="pf-row">
        <section class="pf-box"><h4>Strongest topics</h4>${list(played.flatMap(k => subj[k].strong.map(t => ({...t}))).sort((a, b) => b.acc - a.acc).slice(0, 5), false)}</section>
        <section class="pf-box"><h4>Revise these next</h4>${list(played.flatMap(k => subj[k].weak.map(t => ({...t}))).sort((a, b) => a.acc - b.acc).slice(0, 5), true)}</section>
      </div>
      <section class="pf-box"><h4>Badges</h4><div class="pf-badges">${T.badges.map(b => `<span class="pf-badge ${b.got ? "got" : ""}" title="${h(b.why)}"><i>${b.ic}</i><b>${h(b.name)}</b><small>${h(b.why)}</small></span>`).join("")}</div></section>
      <div class="pf-actions"><button class="btn ghost" id="pfPrint">Print or save as PDF</button></div>
    </section>

    <section class="pf-pane" data-pane="log" hidden>
      <section class="pf-box"><h4>Activity · ${T.days} day${T.days === 1 ? "" : "s"} played</h4>${heatmap(T.dayCounts)}</section>
      <section class="pf-box"><h4>Personal bests</h4>${bests(played, subj)}</section>
      <section class="pf-box"><h4>Recent games</h4>${recent(ctx.games)}</section>
    </section>

    ${guest ? "" : editPane(P) + setPane(ctx)}
  </div>`;
  // tabs
  const tabs = [...el.querySelectorAll("[data-tab]")];
  tabs.forEach(t => t.onclick = () => { tabs.forEach(x => x.setAttribute("aria-selected", String(x === t))); el.querySelectorAll(".pf-pane").forEach(p => p.hidden = p.dataset.pane !== t.dataset.tab); });
  const j = q$("#pfJoin"); if (j) j.onclick = () => ctx.open("signup");
  const i = q$("#pfIn"); if (i) i.onclick = () => ctx.open("signin");
  q$("#pfPrint").onclick = () => { document.body.classList.add("print-rc"); const done = () => { document.body.classList.remove("print-rc"); removeEventListener("afterprint", done); }; addEventListener("afterprint", done); window.print(); setTimeout(done, 1500); };
  el.querySelectorAll("[data-practise]").forEach(b => b.onclick = () => { const [k, code] = b.dataset.practise.split("|"); ctx.close(); if (window.practiseTopics) practiseTopics(k, [code]); });
  if (!guest){ wireEdit(el, ctx, P); wireSettings(el, ctx); }
}
function list(items, practise){
  if (!items.length) return `<p class="pf-muted">${practise ? "Nothing yet: answer at least 3 prompts in a topic to see where to focus." : "Answer at least 3 prompts in a topic to see your strengths."}</p>`;
  return `<ul class="pf-topics">${items.map(t => `<li><span class="pf-tn"><b>${h(topicName(t.k, t.code))}</b><small>${h(subjName(t.k))} · ${h(t.code)}</small></span><span class="pf-tacc" style="--a:${Math.round(t.acc * 100)}%">${pct(t.acc)}</span>${practise ? `<button class="mini" data-practise="${h(t.k)}|${h(t.code)}">Practise</button>` : ""}</li>`).join("")}</ul>`;
}
function bests(played, subj){
  if (!played.length) return `<p class="pf-muted">Your best scores appear here.</p>`;
  return `<div class="pf-bests">${played.map(k => { const S = subj[k], d = S.bestDaily, p = S.bestPractice;
    return `<div class="pf-best"><span class="rc-ic">${avatarFor(k, (SUBJECTS[k].bands[2] || {}).hue || 200, 0, 3)}</span><b>${h(subjName(k))}</b>
      <span>Daily best: <b>${d ? d.score : "—"}</b>${d && d.reached ? ` <small>${h(d.reached)}</small>` : ""}</span>
      <span>Practice best: <b>${p ? p.score : "—"}</b>${S.longest ? ` <small>longest run ${S.longest}</small>` : ""}</span>
      <span>Heaven: <b>${S.heaven.escapes}</b> escape${S.heaven.escapes === 1 ? "" : "s"}${S.heaven.fastest ? ` <small>fastest ${Math.floor(S.heaven.fastest / 60)} min ${S.heaven.fastest % 60} s</small>` : ""}</span></div>`; }).join("")}</div>`;
}
function recent(games){
  const g = games.slice().sort((a, b) => new Date(b.played_at) - new Date(a.played_at)).slice(0, 25);
  if (!g.length) return `<p class="pf-muted">Nothing played yet.</p>`;
  const MODE = {daily:"Daily dive", practice:"Practice", heaven:"Go to heaven"};
  return `<ul class="pf-recent">${g.map(x => { const tiers = (x.answers || []).map(a => `<i style="background:${TCOL[a.t] || TCOL.blocked}"></i>`).join("");
    return `<li><span class="rc-ic">${avatarFor(x.subject, ((SUBJECTS[x.subject] || SUBJECTS.cs).bands[2] || {}).hue || 200, 0, 3)}</span>
      <span class="pf-rg"><b>${h(subjName(x.subject))}</b><small>${h(MODE[x.mode] || x.mode)}${x.finished === false ? " · left early" : ""} · ${h(ago(x.played_at))}</small></span>
      <span class="pf-rt">${x.mode === "heaven" ? `${(x.extra || {}).escaped ? "😇 escaped" : "🔥 still in hell"} · ${x.prompts} answered` : `<span class="pf-pips">${tiers}</span>`}</span>
      <span class="pf-rs"><b>${+x.score || 0}</b><small>${x.mode === "heaven" ? "marks" : "pts"}</small></span></li>`; }).join("")}</ul>`;
}
function editPane(P){
  const order = SUBJECT_ORDER;
  return `<section class="pf-pane" data-pane="edit" hidden>
    <form class="pf-edit" id="pfEdit" novalidate>
      <div class="pf-preview" id="pfPrev"></div>
      <label class="ac-f"><span>Username</span><span class="ac-at"><b>@</b><input id="pfUser" maxlength="20" autocapitalize="off" spellcheck="false" value="${h(P.username)}"></span></label>
      <p class="ac-hint" id="pfUserHint">3–20 letters, numbers or _, starting with a letter.</p>
      <label class="ac-f"><span>Display name <small>(optional)</small></span><input id="pfName" maxlength="24" value="${h(P.display_name || "")}"></label>
      <label class="ac-f"><span>Motto <small>(optional, shown under your name)</small></span><input id="pfMotto" maxlength="80" value="${h(P.motto || "")}" placeholder="e.g. Rare answers only"></label>
      <fieldset class="ac-skins"><legend>Skin</legend><div class="ac-skin-grid">${order.map(k => `<label class="ac-skin" title="${h(subjName(k))}"><input type="radio" name="pfSkin" value="${k}" ${k === P.skin ? "checked" : ""}><span class="ac-av" data-k="${k}"></span></label>`).join("")}</div></fieldset>
      <label class="ac-f"><span>Colour</span><input id="pfHue" type="range" min="0" max="359" value="${P.hue == null ? 200 : P.hue}" class="ac-hue"></label>
      <fieldset class="pf-banners"><legend>Banner</legend><div class="row">${Object.entries(BANNERS).map(([k, b]) => `<label class="pf-ban" style="background:linear-gradient(120deg,${b[0]},${b[1]})" title="${b[2]}"><input type="radio" name="pfBan" value="${k}" ${k === (P.banner || "night") ? "checked" : ""}><span>${b[2]}</span></label>`).join("")}</div></fieldset>
      <label class="ac-f"><span>Favourite subject</span><select id="pfFav"><option value="">None</option>${order.map(k => `<option value="${k}" ${k === P.fav_subject ? "selected" : ""}>${h(subjName(k))}</option>`).join("")}</select></label>
      <label class="pf-check"><input type="checkbox" id="pfSpecial" ${P.show_special !== false ? "checked" : ""}> Show my skin's special form once I've found a One in a … in that subject</label>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Save profile</button>
    </form></section>`;
}
function wireEdit(el, ctx, P){
  const form = el.querySelector("#pfEdit"); if (!form) return;
  const hueI = form.querySelector("#pfHue"), prev = form.querySelector("#pfPrev");
  const cur = () => ({skin:(form.querySelector('input[name="pfSkin"]:checked') || {}).value || P.skin, hue:+hueI.value, banner:(form.querySelector('input[name="pfBan"]:checked') || {}).value || "night"});
  const paint = () => { const c = cur(), b = BANNERS[c.banner];
    form.querySelectorAll(".ac-av").forEach(s => s.innerHTML = avatarFor(s.dataset.k, c.hue, 0, 4));
    prev.style.background = `linear-gradient(120deg,${b[0]},${b[1]})`;
    prev.innerHTML = `<span>${avatarFor(c.skin, c.hue, 0, 7)}</span><b>${h(form.querySelector("#pfName").value.trim() || form.querySelector("#pfUser").value.trim())}</b><small>${h(form.querySelector("#pfMotto").value.trim())}</small>`; };
  form.addEventListener("input", paint); form.addEventListener("change", paint); paint();
  let seq = 0; const hint = form.querySelector("#pfUserHint");
  form.querySelector("#pfUser").addEventListener("input", e => { const u = e.target.value.trim(), my = ++seq; hint.className = "ac-hint";
    if (u === P.username){ hint.textContent = "This is your username."; return; }
    const v = NameCheck.username(u); if (!v.ok){ hint.textContent = v.reason; hint.classList.add("bad"); return; }
    hint.textContent = "Checking…"; setTimeout(async () => { if (my !== seq) return; try { const free = await ctx.checkUsername(u); if (my !== seq) return;
      hint.textContent = free ? `✓ @${u} is free` : `@${u} is taken. Try another.`; hint.classList.add(free ? "good" : "bad"); } catch(e){ if (my === seq) hint.textContent = ""; } }, 350); });
  form.onsubmit = async e => { e.preventDefault();
    const m = t => { const x = form.querySelector("#acMsg"); x.textContent = t; x.classList.remove("good"); };
    const username = form.querySelector("#pfUser").value.trim(), dn = form.querySelector("#pfName").value.replace(/\s+/g, " ").trim(), motto = form.querySelector("#pfMotto").value.replace(/\s+/g, " ").trim();
    let v = NameCheck.username(username); if (!v.ok) return m("Username: " + v.reason);
    if (dn){ v = NameCheck.displayName(dn); if (!v.ok) return m("Display name: " + v.reason); }
    v = NameCheck.motto(motto); if (!v.ok) return m("Motto: " + v.reason);
    const btn = form.querySelector("#acGo"); btn.disabled = true; btn.textContent = "Saving…";
    try { const c = cur(); await ctx.saveProfile({username, display_name:dn || null, motto, skin:c.skin, hue:c.hue, banner:c.banner, fav_subject:form.querySelector("#pfFav").value || null, show_special:form.querySelector("#pfSpecial").checked});
      ctx.toast("Profile saved."); Account.open("profile"); }
    catch(err){ m(ctx.friendly(err)); btn.disabled = false; btn.textContent = "Save profile"; }
  };
}
function setPane(ctx){
  const email = ctx.user && ctx.user.email;
  return `<section class="pf-pane" data-pane="set" hidden>
    <div class="pf-box"><h4>Signed in as</h4><p class="pf-email">${h(email || "")}</p><p class="pf-muted">Your email is never shown to other players.</p></div>
    <div class="pf-box"><h4>Password</h4><p class="pf-muted">You sign in with your email and password. If you ever forget it, use “Forgot my damn password?” on the sign-in screen.</p><button class="btn ghost" id="pfPw">Change password</button></div>
    <div class="pf-box"><h4>Sign out</h4><p class="pf-muted">Your report card stays safe on your account.</p><button class="btn ghost" id="pfOut">Sign out</button></div>
    <div class="pf-box danger"><h4>Delete account</h4><p class="pf-muted">This permanently deletes your account, profile and every saved game. It can't be undone.</p>
      <label class="ac-f"><span>Type DELETE to confirm</span><input id="pfDelTxt" autocomplete="off" autocapitalize="characters"></label><p class="ac-msg" id="pfDelMsg" role="alert"></p><button class="btn pf-del" id="pfDel" disabled>Delete my account</button></div>
  </section>`;
}
function wireSettings(el, ctx){
  const pw = el.querySelector("#pfPw"); if (!pw) return;
  pw.onclick = () => ctx.changePassword();
  el.querySelector("#pfOut").onclick = () => ctx.signOut();
  const t = el.querySelector("#pfDelTxt"), d = el.querySelector("#pfDel");
  t.oninput = () => d.disabled = t.value.trim() !== "DELETE";
  d.onclick = async () => { d.disabled = true; d.textContent = "Deleting…"; try { await ctx.deleteAccount(); } catch(e){ el.querySelector("#pfDelMsg").textContent = ctx.friendly(e); d.textContent = "Delete my account"; d.disabled = false; } };
}
window.Profile = {render, stats, gradeFor, comment};
})();
