/* The honey pot: drop in an IA, extended essay or HL essay as a PDF and mark it yourself against the IB criteria.
   The higher the grade, the deeper your document sinks into the honey. Marks only: IB rules don't allow outside
   feedback on coursework, so each criterion just says "Smashing it", "On track" or "Still to work on".
   Everything happens on this device: the PDF is read here (vendor/pdfjs) to count its pages and words and to draw
   its first page, and it is never uploaded. The criteria are in honey-rubrics.js. */
(function(){
"use strict";
const HY = window.HONEY;
const q$ = s => document.querySelector(s);
const h = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const st = { get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } }, set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }, del(k){ try { localStorage.removeItem(k); } catch(e){} } };
const PREF = "oiac-honey-pick", DRAFT = "oiac-honey-draft", PAST = "oiac-honey-history";
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const ORDER = ["bio","chem","phys","cs","biz","econ","psych","sehs","ess","hist","glopo","phil","geo","math","mathai","eng","lit","fr","es","va","dt","tok","gk"];
const VERDICT = { smash: ["Smashing it", "🔥"], track: ["On track", "✓"], work: ["Still to work on", "⚒"] };
const n0 = n => Number(n).toLocaleString();
const size = b => b < 1048576 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1048576).toFixed(1)} MB`;

let P = null;     // what the player has picked: {kind, subject, hist, level, file, pages, words, ...; r: ratings by criterion}
let G = null;     // the screen while it's open: {el, raf, phase, ...}

/* ================= opening and closing ================= */
function open(){
  close(true);
  const saved = st.get(PREF) || {};
  const cur = (typeof M !== "undefined" && M) ? M.key : null;   // the subject open on the title screen
  const subj = ok(saved.subject) ? saved.subject : ok(cur) ? cur : "bio";
  P = {kind: saved.kind === "ee" ? "ee" : "ia", subject: subj, level: saved.level === "HL" ? "HL" : "SL", vars: Object.assign({}, saved.vars && typeof saved.vars === "object" ? saved.vars : {}, saved.hist ? {hist: saved.hist} : {}),
       file: null, pages: 0, words: null, scanned: false, thumb: null, reading: false, r: {}};
  const el = document.createElement("div"); el.className = "hpot"; el.id = "hp"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "The honey pot");
  el.innerHTML = `
    <div class="hp-top"><button class="hp-x" id="hpClose" aria-label="Close the honey pot">✕</button>
      <div class="hp-title"><small>Mark your own coursework</small><b>The honey pot</b></div><span></span></div>
    <div class="hp-body">
      <div class="hp-stage" aria-hidden="true">${jarSVG()}</div>
      <section class="hp-panel" id="hpPanel" aria-live="polite"></section>
    </div>`;
  document.body.appendChild(el); document.body.classList.add("in-honey");
  G = {el, raf: 0, t0: performance.now(), phase: "idle", lid: 0, doc: {y: -140, r: -8, x: 150, vis: false}, target: null, ripple: 0, bubbles: [], bee: {x: 238, y: 54, dir: -1}, swoop: 0, party: 0};
  q$("#hpClose").onclick = () => close();
  G.onKey = e => { if (e.key === "Escape" && G) close(); };
  document.addEventListener("keydown", G.onKey);
  G.E = Object.fromEntries(["HoneyP","Shine","Doc","Bub","Drip","Bee","Spark","Lid","DocPlain","DocPic","DocImg"].map(k => [k, el.querySelector("#hp" + k)]));
  paintPick(); loop();
  q$("#hpClose").focus({preventScroll: true});
}
function close(silent){
  if (!G) return;
  cancelAnimationFrame(G.raf); document.removeEventListener("keydown", G.onKey);
  G.el.remove(); G = null; document.body.classList.remove("in-honey");
  if (P) P.job = null;   // a PDF still being read is dropped
  if (!silent){ const b = q$("#honeyBtn"); if (b) b.focus({preventScroll: true}); }
}
const ok = k => !!(k && HY.SUBJECTS[k] && (HY.SUBJECTS[k].ia.length || HY.SUBJECTS[k].ee));
function remember(){ st.set(PREF, {kind: P.kind, subject: P.subject, level: P.level, vars: P.vars}); }
// the task the picker points at: the subject's IA (or HL essay), or the EE
function taskFor(){
  const s = HY.SUBJECTS[P.subject]; if (!s) return null;
  if (P.kind === "ee") return s.ee ? HY.TASKS.ee : null;
  if (!s.ia.length) return null;
  const v = P.vars[P.subject];   // subjects with more than one task (History's two courses, TOK's exhibition and essay)
  return HY.TASKS[s.ia.includes(v) ? v : s.ia[0]];
}
const level = T => T.levels ? P.level : null;
const crits = T => HY.crits(T, level(T));   // HL-only criteria drop out at SL
const draftKey = T => `${T.id}|${level(T) || ""}|${P.file ? P.file.name : ""}`;
function saveDraft(T){ st.set(DRAFT, {key: draftKey(T), r: P.r}); }
function loadDraft(T){ const d = st.get(DRAFT); P.r = d && d.key === draftKey(T) && d.r && typeof d.r === "object" ? d.r : {}; }

/* ================= step 1: choose and drop ================= */
function paintPick(msg){
  if (!G) return;
  G.phase = P.file ? "hover" : "idle"; G.target = null; G.doc.vis = !!P.file; G.party = 0; setLabel();
  const T = taskFor(), S = HY.SUBJECTS[P.subject];
  const subjBtn = k => { const s = HY.SUBJECTS[k], game = typeof SUBJECTS !== "undefined" && SUBJECTS[k];
    const ic = game && game.avatar ? `<span class="hp-ic">${game.avatar(3, game.bands[2].hue)}</span>` : "";
    return `<button class="hp-subj${ok(k) ? "" : " off"}" data-hsubj="${k}" aria-pressed="${k === P.subject}">${ic}<span>${h(s.btn || s.name.replace(/:.*$/, ""))}</span></button>`; };
  const none = S && !T ? (S.none || (P.kind === "ee" ? "This subject can't be used for an extended essay." : "This subject has no written internal assessment.")) : "";
  const fileLine = !P.file ? `<b>Drop your PDF here</b><small>or tap to choose one</small>`
    : `<b>📄 ${h(P.file.name)}</b><small>${P.reading ? "Reading it on this device…" : [size(P.file.size),P.pages ? `${P.pages} page${P.pages === 1 ? "" : "s"}` : "", P.words != null && !P.scanned ? `about ${n0(P.words)} words in the main text` : "", "tap to change"].filter(Boolean).join(" · ")}</small>`;
  q$("#hpPanel").innerHTML = `
    <p class="hp-lede">Drop in your coursework as a PDF and mark it against the official IB criteria. <b>The better it is, the deeper it sinks.</b></p>
    <div class="hp-seg" role="group" aria-label="What are you dropping in?">
      <button data-hkind="ia" aria-pressed="${P.kind === "ia"}">Internal assessment</button>
      <button data-hkind="ee" aria-pressed="${P.kind === "ee"}">Extended essay</button></div>
    <div class="hp-subjects" role="group" aria-label="Subject">${ORDER.filter(k => HY.SUBJECTS[k]).map(subjBtn).join("")}</div>
    ${T ? taskBox(T) : `<p class="hp-note warn">${h(none)}</p>`}
    ${T ? `
    <label class="hp-drop${P.reading ? " busy" : ""}" id="hpDrop" tabindex="0">
      <input type="file" id="hpFile" accept="application/pdf,.pdf" hidden>
      <span class="hp-file">${fileLine}</span>
    </label>
    <p class="hp-safe"><span aria-hidden="true">🔒</span> Your PDF stays on this device. It's read here and never uploaded.</p>
    ${fileNotes(T).map(n => `<p class="hp-note${n.warn ? " warn" : ""}">${h(n.text)}</p>`).join("")}
    ${msg ? `<p class="hp-note warn" role="alert">${h(msg)}</p>` : ""}
    <button class="btn hp-go" id="hpGo" ${P.file && !P.reading ? "" : "disabled"}>Start marking</button>` : ""}
    <p class="hp-fine">Marks only, no feedback: IB rules don't allow outside feedback on coursework, so you rate your work against each criterion and the honey pot shows where you're smashing it, on track or still need to work on it. It's your own estimate, not an IB mark: your teacher and IB moderation decide the real one.</p>
    <div id="hpHist"></div>`;
  const P$ = q$("#hpPanel");
  P$.querySelectorAll("[data-hkind]").forEach(b => b.onclick = () => { P.kind = b.dataset.hkind; remember(); paintPick(); });
  P$.querySelectorAll("[data-hsubj]").forEach(b => b.onclick = () => { P.subject = b.dataset.hsubj; remember(); paintPick(); const f = q$(`[data-hsubj="${P.subject}"]`); if (f) f.focus({preventScroll: true}); });
  P$.querySelectorAll("[data-hvar]").forEach(b => b.onclick = () => { const [k, v] = b.dataset.hvar.split(":"); if (k === "var") P.vars[P.subject] = v; else P[k] = v; remember(); paintPick(); });
  const inp = q$("#hpFile"), drop = q$("#hpDrop");
  if (inp){
    inp.onchange = () => { if (inp.files && inp.files[0]) take(inp.files[0]); };
    drop.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); inp.click(); } });
    ["dragenter", "dragover"].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.add("over"); }));
    ["dragleave", "drop"].forEach(t => drop.addEventListener(t, e => { e.preventDefault(); drop.classList.remove("over"); }));
    drop.addEventListener("drop", e => { const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if (f) take(f); });
  }
  const go = q$("#hpGo"); if (go) go.onclick = () => { loadDraft(T); paintMark(0, true); };
  pastList();
}
function taskBox(T){
  const s = HY.SUBJECTS[P.subject], vars = [];
  if (P.kind === "ia" && s.ia.length > 1) vars.push(`<div class="hp-seg sm" role="group" aria-label="${h(s.varLabel || "Exam session")}">${s.ia.map(id => `<button data-hvar="var:${id}" aria-pressed="${T.id === id}">${h(HY.TASKS[id].variant || HY.TASKS[id].title)}</button>`).join("")}</div>`);
  if (T.levels) vars.push(`<div class="hp-seg sm" role="group" aria-label="Level"><button data-hvar="level:SL" aria-pressed="${P.level === "SL"}">SL</button><button data-hvar="level:HL" aria-pressed="${P.level === "HL"}">HL</button></div>`);
  const max = crits(T).reduce((a, c) => a + c.max, 0);
  return `<div class="hp-task">
    <div class="hp-task-h"><b>${h(s.name)} · ${h(T.kind === "ee" ? "Extended essay" : T.title.replace(/ \(.*\)$/, ""))}</b><small>${h(T.guide)} · ${h(T.limit)} · out of ${max}</small></div>
    ${vars.join("")}
    ${P.kind === "ia" && s.iaNote ? `<p class="hp-note">${h(s.iaNote)}</p>` : ""}
    <details class="hp-crit"><summary>The criteria you'll mark it on</summary><ul>${crits(T).map(c => `<li><b>${h(c.id)} · ${h(c.name)}</b> <span>(${c.max})</span><small>${h(c.focus)}</small></li>`).join("")}</ul><p class="hp-note">${h(T.note)}</p></details>
  </div>`;
}
// facts about the file for this task: over the word limit, too many pages, a scan with no text
function fileNotes(T){
  const out = []; if (!P.file || P.reading) return out;
  if (P.scanned) out.push({text: "This PDF looks like scanned pages, so its words couldn't be counted. You can still mark it."});
  else if (T.words && P.words > T.words) out.push({warn: true, text: `About ${n0(P.words)} words in the main text: over the ${n0(T.words)}-word limit. ${T.kind === "ia" ? "Moderators" : "Examiners"} stop reading at the limit, so only mark what comes before it.`});
  if (T.pages && P.pages > T.pages) out.push({warn: true, text: `${P.pages} pages: the guide suggests 12–20 pages.`});
  return out;
}

// read the chosen file here: a real PDF, then its pages, its words and a picture of its first page
async function take(f){
  if (!/\.pdf$/i.test(f.name) && f.type !== "application/pdf") return paintPick("That isn't a PDF. Export your work as a PDF first (File → Save as / Export → PDF).");
  if (f.size > HY.MAX_MB * 1048576) return paintPick(`That PDF is ${(f.size / 1048576).toFixed(0)} MB. The limit is ${HY.MAX_MB} MB: try exporting it again with smaller images.`);
  let bytes;
  try { bytes = new Uint8Array(await f.arrayBuffer()); } catch(e){ return paintPick("That file couldn't be read. Try choosing it again."); }
  if (String.fromCharCode(...bytes.slice(0, 5)) !== "%PDF-") return paintPick("That file isn't a real PDF. Export your work as a PDF and try again.");
  const job = {}; Object.assign(P, {job, file: {name: f.name, size: f.size}, pages: 0, words: null, scanned: false, thumb: null, reading: true, r: {}});
  if (G){ G.doc.y = -140; G.doc.r = -8; }
  setThumb(null); paintPick();
  let err = "";
  try { Object.assign(P, await readPDF(bytes, (taskFor() || {}).kind === "ee", job)); }
  catch(e){ if (window.console) console.warn("honey pot: couldn't read the PDF", e); err = e && e.name === "PasswordException" ? "This PDF is password-protected. Export it again without a password." : e && e.name === "InvalidPDFException" ? "That PDF looks damaged. Export your work as a PDF again and try that one." : "This PDF couldn't be read here, so its pages and words weren't counted. You can still mark it."; }
  if (P.job !== job) return;   // another file was chosen, or the pot was closed
  P.reading = false;
  if (err && /password|damaged/.test(err)){ P.file = null; return paintPick(err); }
  setThumb(P.thumb); paintPick(err);
}
let lib = null;
async function pdfjs(){
  if (lib) return lib;
  const base = document.baseURI;
  lib = await import(new URL("vendor/pdfjs/pdf.min.js", base).href);
  lib.GlobalWorkerOptions.workerSrc = new URL("vendor/pdfjs/pdf.worker.min.js", base).href;
  return lib;
}
async function readPDF(bytes, ee, job){
  const L = await pdfjs();
  const task = L.getDocument({data: bytes, useSystemFonts: true, stopAtErrors: false}), doc = await task.promise;
  try {
    const out = {pages: doc.numPages};
    try {   // the first page, small, for the document floating in the honey
      const pg = await doc.getPage(1), vp0 = pg.getViewport({scale: 1}), vp = pg.getViewport({scale: 240 / vp0.width});
      const cv = document.createElement("canvas"); cv.width = Math.round(vp.width); cv.height = Math.round(vp.height);
      const cx = cv.getContext("2d"); cx.fillStyle = "#fff"; cx.fillRect(0, 0, cv.width, cv.height);
      await pg.render({canvas: cv, viewport: vp}).promise;
      out.thumb = cv.toDataURL("image/jpeg", 0.82);
    } catch(e){}
    const pages = [];
    for (let i = 1; i <= Math.min(doc.numPages, 120); i++){
      if (P.job !== job) break;
      const tc = await (await doc.getPage(i)).getTextContent();
      const lines = []; let line = "", y = null;
      for (const it of tc.items){ if (typeof it.str !== "string") continue;
        const iy = it.transform ? it.transform[5] : y;
        if (y != null && iy != null && Math.abs(iy - y) > 2 && line.trim()){ lines.push(line.trim()); line = ""; }
        line += it.str + (it.hasEOL ? "\n" : " "); y = iy;
        if (it.hasEOL){ lines.push(line.trim()); line = ""; } }
      if (line.trim()) lines.push(line.trim());
      pages.push(lines.filter(Boolean));
    }
    Object.assign(out, countWords(pages, ee));
    return out;
  } finally { task.destroy(); }
}
// words in the main text: skips a title page and the contents, and stops at the bibliography, references or appendix
// (and, in an extended essay, at the reflective statement). It's an estimate: tables, captions and footnotes still count.
const WORD = /[\p{L}\p{N}]*\p{L}[\p{L}\p{N}]*(?:['’\-][\p{L}\p{N}]+)*/gu;
const words = s => (s.match(WORD) || []).length;
function countWords(pages, ee){
  const END = ee ? /^(?:\d+(?:\.\d+)*\.?\s*)?(bibliography|references|reference list|works cited|works consulted|sources consulted|list of sources|appendix|appendices|reflective statement|reflection)\b/i
                 : /^(?:\d+(?:\.\d+)*\.?\s*)?(bibliography|references|reference list|works cited|works consulted|sources consulted|list of sources|appendix|appendices)\b/i;
  const heading = l => l.length <= 40 && END.test(l) && !/\.{3,}|…|\s\d+\s*$/.test(l);
  const all = pages.reduce((a, p) => a + p.reduce((b, l) => b + words(l), 0), 0);
  let total = 0, stop = false;
  pages.forEach((lines, i) => {
    if (stop) return;
    const w = lines.reduce((a, l) => a + words(l), 0);
    if (i === 0 && pages.length >= 3 && w < 120) return;                          // a title page
    if (lines.slice(0, 3).some(l => /^(table of )?contents$/i.test(l.replace(/\s+/g, " ").trim()))) return;   // the contents
    for (const l of lines){ if (i > 0 && heading(l)){ stop = true; break; } total += words(l); }
  });
  return {words: total, scanned: pages.length > 0 && all < Math.max(60, 25 * pages.length)};
}

/* ================= step 2: mark each criterion ================= */
function paintMark(i, first){
  const T = taskFor(); if (!T || !G) return;
  if (G.phase !== "reading"){ G.phase = "reading"; G.doc.vis = true; G.drop = performance.now(); G.from = G.doc.y; G.landed = false; }
  setLabel();
  const c = crits(T)[i], L = HY.looks(c, level(T)), r = P.r[c.id] = (P.r[c.id] || []).slice(0, L.length);
  const done = k => { const cc = crits(T)[k], rr = P.r[cc.id] || []; return HY.looks(cc, level(T)).every((_, j) => rr[j] >= 0); };
  const last = i === crits(T).length - 1;
  q$("#hpPanel").innerHTML = `
    <div class="hp-steps" role="group" aria-label="Criteria">${crits(T).map((cc, k) => `<button class="hp-dot${k === i ? " on" : ""}${done(k) ? " done" : ""}" data-hstep="${k}" aria-label="Criterion ${h(cc.id)}: ${h(cc.name)}${done(k) ? ", marked" : ""}" ${k === i ? 'aria-current="step"' : ""}>${h(cc.id)}</button>`).join("")}</div>
    <div class="hp-crit-h"><span class="hp-cl big">${h(c.id)}</span><div><small>Criterion ${i + 1} of ${crits(T).length} · out of ${c.max}</small><b>${h(c.name)}</b></div></div>
    <p class="hp-note">${h(c.focus)}</p>
    ${first || i === 0 ? `<p class="hp-tip">Be your own strictest moderator: choose <b>Fully</b> only when you can point to the page that shows it.</p>` : ""}
    <div class="hp-qs">${L.map((text, j) => `
      <fieldset class="hp-q"><legend>${h(text)}</legend><div class="hp-rate">${HY.SCALE.map((lab, v) => `
        <label class="r${v}"><input type="radio" name="hpq${j}" value="${v}" ${r[j] === v ? "checked" : ""}><span>${h(lab)}</span></label>`).join("")}</div></fieldset>`).join("")}</div>
    <p class="hp-sofar" id="hpSoFar"></p>
    <div class="row hp-nav"><button class="btn ghost" id="hpBack">${i ? "Back" : "Change file"}</button>
      <button class="btn hp-go" id="hpNext">${last ? "Drop it in the honey pot" : "Next criterion"}</button></div>`;
  const sofar = () => { const all = L.every((_, j) => r[j] >= 0), b = q$("#hpNext"), s = q$("#hpSoFar");
    s.textContent = all ? `That's ${HY.mark(c.max, r)} out of ${c.max} for criterion ${c.id}.` : `Rate each statement to go on (${r.filter(x => x >= 0).length} of ${L.length}).`;
    b.disabled = !all; };
  q$("#hpPanel").querySelectorAll(".hp-q input").forEach(inp => inp.onchange = () => { const j = +inp.name.slice(3); r[j] = +inp.value; saveDraft(T); sofar(); });
  q$("#hpPanel").querySelectorAll("[data-hstep]").forEach(b => b.onclick = () => { const k = +b.dataset.hstep; if (k <= i || crits(T).slice(0, k).every((_, m) => done(m))) paintMark(k); });
  q$("#hpBack").onclick = () => { if (i) paintMark(i - 1); else { G.phase = "hover"; paintPick(); } };
  q$("#hpNext").onclick = () => last ? finish(T) : paintMark(i + 1);
  sofar();
  // on a phone the panel sits under the jar: show the jar as it drops in, then keep each new criterion in view
  const pn = q$("#hpPanel"), how = calm() ? "auto" : "smooth";
  if (first) G.el.scrollTo({top: 0, behavior: how});
  else if (pn.getBoundingClientRect().top < 60) pn.scrollIntoView({block: "start", behavior: how});
  const f = q$(".hp-q input:checked") || q$(".hp-q input"); if (f) f.focus({preventScroll: true});
}

/* ================= step 3: it sinks, and the marks ================= */
function finish(T){
  const lv = level(T);
  const criteria = crits(T).map(c => { const L = HY.looks(c, lv), r = P.r[c.id] || [], m = HY.mark(c.max, r);
    return {id: c.id, name: c.name, max: c.max, mark: m, verdict: HY.verdict(m, c.max), low: L.map((text, j) => ({text, v: r[j]})).filter(x => x.v <= 1)}; });
  const total = criteria.reduce((a, c) => a + c.mark, 0), max = criteria.reduce((a, c) => a + c.max, 0);
  const res = {task: T.id, subject: P.subject, level: lv, file: P.file ? P.file.name : "", total, max, grade: HY.grade(T.kind, total, max), at: Date.now()};
  const past = (st.get(PAST) || []).filter(x => x && x.at); past.unshift(res); st.set(PAST, past.slice(0, 8));
  show(T, Object.assign({criteria}, res));
}
function show(T, r){
  const f = r.max ? r.total / r.max : 0;
  G.el.scrollTo({top: 0, behavior: calm() ? "auto" : "smooth"});
  G.phase = "sunk"; G.target = {f, t0: performance.now(), from: G.doc.y}; G.ripple = 1; G.swoop = performance.now(); G.party = f >= 0.8 ? performance.now() : 0;
  setLabel(r.grade, `${r.total}/${r.max}`);
  const by = v => r.criteria.filter(c => c.verdict === v);
  const row = c => `<li class="hp-c ${c.verdict}"><span class="hp-cl">${h(c.id)}</span><span class="hp-cn"><b>${h(c.name)}</b>
      <i class="hp-bar"><i style="width:${Math.round(100 * c.mark / c.max)}%"></i></i></span><span class="hp-cm">${c.mark}<small>/${c.max}</small></span>
      <span class="hp-v">${VERDICT[c.verdict][1]} ${VERDICT[c.verdict][0]}</span>
      ${c.verdict !== "smash" && c.low.length ? `<ul class="hp-low">${c.low.map(x => `<li><i>${h(HY.SCALE[x.v])}</i>${h(x.text)}</li>`).join("")}</ul>` : ""}</li>`;
  const kindWord = T.kind === "ee" ? "EE grade" : T.kind === "tok" ? "TOK grade" : T.kind === "essay" ? "HL essay grade" : "IA grade";
  q$("#hpPanel").innerHTML = `
    <div class="hp-score"><div class="hp-grade"><small>Estimated ${h(kindWord)}</small><b>${h(r.grade)}</b></div>
      <div class="hp-tot"><b>${r.total}<small>/${r.max}</small></b><span>${Math.round(100 * f)}% of the marks · ${h(depthWord(f))}</span></div></div>
    ${by("smash").length ? `<h3 class="hp-h smash">Where you're smashing it</h3><ul class="hp-list">${by("smash").map(row).join("")}</ul>` : ""}
    ${by("track").length ? `<h3 class="hp-h track">On track</h3><ul class="hp-list">${by("track").map(row).join("")}</ul>` : ""}
    ${by("work").length ? `<h3 class="hp-h work">Still to work on</h3><ul class="hp-list">${by("work").map(row).join("")}</ul>` : ""}
    ${fileNotes(T).filter(n => n.warn).map(n => `<p class="hp-note warn">${h(n.text)}</p>`).join("")}
    <p class="hp-fine">${h(T.note)} These are your own marks against the IB criteria, not an IB mark.</p>
    <div class="row hp-again"><button class="btn" id="hpAgain">Drop in another</button><button class="btn ghost" id="hpRedo">Change my marks</button><button class="btn ghost" id="hpDone">Close</button></div>
    <div id="hpHist"></div>`;
  q$("#hpAgain").onclick = () => { Object.assign(P, {file: null, pages: 0, words: null, scanned: false, thumb: null, r: {}}); setThumb(null); G.doc.y = -140; paintPick(); };
  q$("#hpRedo").onclick = () => { setLabel(); paintMark(0); };
  q$("#hpDone").onclick = () => close();
  q$("#hpAgain").focus({preventScroll: true});
  pastList(r.at);
}
const depthWord = f => f >= 0.8 ? "right at the bottom of the pot" : f >= 0.6 ? "deep in the honey" : f >= 0.4 ? "halfway down" : f >= 0.2 ? "just under the surface" : "floating on top";

// earlier marks, kept on this device only
function pastList(skipAt){
  const box = q$("#hpHist"); if (!box) return;
  const rows = (st.get(PAST) || []).filter(x => x && x.at && x.at !== skipAt && HY.TASKS[x.task]).slice(0, 5);
  if (!rows.length){ box.innerHTML = ""; return; }
  box.innerHTML = `<div class="hp-past-h"><h3 class="hp-h">Earlier in the honey pot</h3><button class="mini" id="hpForget">Forget these</button></div>
    <ul class="hp-past">${rows.map(x => { const T = HY.TASKS[x.task], s = HY.SUBJECTS[x.subject];
      return `<li><span><b>${h(s ? s.btn || s.name.replace(/:.*$/, "") : x.subject)} · ${h(T.kind === "ee" ? "EE" : T.short)}${x.level ? " " + h(x.level) : ""}</b><small>${h(x.file || "")} · ${new Date(x.at).toLocaleDateString([], {day: "numeric", month: "short"})}</small></span><span class="hp-pg">${h(x.grade)}<small>${x.total}/${x.max}</small></span></li>`; }).join("")}</ul>
    <p class="hp-fine">Saved on this device only.</p>`;
  q$("#hpForget").onclick = () => { st.del(PAST); box.innerHTML = ""; };
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
      <clipPath id="hpDocClip"><path d="M-27 -35 H18 L30 -23 V32 Q30 35 27 35 H-27 Q-30 35 -30 32 V-32 Q-30 -35 -27 -35Z"/></clipPath>
    </defs>
    <ellipse cx="150" cy="344" rx="112" ry="10" fill="#000" opacity=".45"/>
    <path d="M52 92 Q52 78 66 78 H234 Q248 78 248 92 V312 Q248 340 220 340 H80 Q52 340 52 312Z" fill="#1a1208" fill-opacity=".55" stroke="#fff" stroke-opacity=".22" stroke-width="3"/>
    <g id="hpDoc" opacity="0"><rect x="-30" y="-35" width="60" height="${DOC_H}" rx="3" fill="#fffaf0" stroke="#5a3a14" stroke-opacity=".55" stroke-width="1.5"/>
      <g id="hpDocPlain"><path d="M18 -35 L30 -23 L18 -23Z" fill="#e8dcc0"/>
        <text id="hpDocT" x="0" y="-10" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="15" fill="#3a2a10">IA</text>
        <g stroke="#bfae8a" stroke-width="2.2" stroke-linecap="round"><path d="M-20 4H20M-20 12H20M-20 20H12"/></g></g>
      <g id="hpDocPic" style="display:none"><image id="hpDocImg" x="-30" y="-35" width="60" height="${DOC_H}" preserveAspectRatio="xMidYMin slice" clip-path="url(#hpDocClip)"/>
        <path d="M18 -35 L30 -23 L18 -23Z" fill="#e8dcc0" stroke="#5a3a14" stroke-opacity=".4" stroke-width="1"/>
        <rect x="-30" y="-35" width="60" height="${DOC_H}" rx="3" fill="none" stroke="#5a3a14" stroke-opacity=".55" stroke-width="1.5"/>
        <rect x="-14" y="20" width="28" height="13" rx="3" fill="#3a2206"/><text id="hpDocB" x="0" y="30.2" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="9.5" fill="#ffd257">IA</text></g></g>
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
// the first page of the PDF on the floating document, or a plain page until it's read
function setThumb(src){
  if (!G) return; const E = G.E;
  if (src){ E.DocImg.setAttribute("href", src); E.DocPic.style.display = ""; E.DocPlain.style.display = "none"; }
  else { E.DocImg.removeAttribute("href"); E.DocPic.style.display = "none"; E.DocPlain.style.display = ""; }
}
function setLabel(g, s){
  const G1 = q$("#hpLabG"), S1 = q$("#hpLabS"); if (!G1) return;
  G1.textContent = g || "IB"; S1.textContent = s || "honey";
  const task = taskFor(), w = task ? (task.kind === "ee" ? "EE" : task.kind === "tok" ? "TOK" : task.short === "HL essay" ? "HL" : "IA") : "IA";
  ["#hpDocT", "#hpDocB"].forEach(id => { const t = q$(id); if (t) t.textContent = w; });
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
  // the document: hovering above the jar, dropping in and floating while it's marked, then sinking to its depth
  const docEl = E.Doc;
  if (d.vis){
    if (G.phase === "hover"){ d.y = 18 + Math.sin(t * 2) * 4; d.r = -8 + Math.sin(t * 1.3) * 3; }
    else if (G.phase === "reading"){ const k = still ? 1 : ease((now - (G.drop || now)) / 900), float = SURF - 12 + Math.sin(t * 1.8) * 3, from = G.from == null || G.from < -100 ? 18 : G.from;
      d.y = from + (float - from) * k; d.r = -8 + Math.sin(t * 1.1) * 4; if (k > 0.85 && !G.landed){ G.landed = true; G.ripple = 1; } }
    else if (G.phase === "sunk" && G.target){ const tg = G.target, k = still ? 1 : ease((now - tg.t0) / 2600);
      const goal = SURF - 14 + (FLOOR - DOC_H / 2 - (SURF - 14)) * tg.f;
      d.y = tg.from + (goal - tg.from) * k + (k >= 1 ? Math.sin(t * 0.9) * 1.2 : 0); d.r = (1 - k) * 10 * Math.sin(t * 3) + 3;
      if (!still && k < 1 && G.bubbles.length < 60 && Math.random() < 0.25) G.bubbles.push({x: d.x + (Math.random() - 0.5) * 40, y: d.y, r: 1.5 + Math.random() * 3, v: 0.4 + Math.random() * 0.6}); }
    docEl.setAttribute("opacity", "1"); docEl.setAttribute("transform", `translate(${d.x} ${d.y.toFixed(1)}) rotate(${d.r.toFixed(1)})`);
  } else { docEl.setAttribute("opacity", "0"); G.landed = false; }
  G.bubbles = G.bubbles.filter(b => (b.y -= b.v) > SURF + 2);
  E.Bub.innerHTML = G.bubbles.map(b => `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r.toFixed(1)}" fill="#fff4c0" fill-opacity=".5"/>`).join("");
  // the lid comes off while a document is going in, and goes back on when the marks are in
  const lidOpen = d.vis && (G.phase === "hover" || G.phase === "reading") ? 1 : 0;
  G.lid += (lidOpen - G.lid) * (still ? 1 : 0.08);
  E.Lid.setAttribute("transform", `translate(${(G.lid * 44).toFixed(1)} ${(G.lid * 14).toFixed(1)}) rotate(${(-G.lid * 84).toFixed(1)} 256 84)`);   // propped against the side of the jar
  // a honey drip down the side
  const dp = (t * 0.35) % 1; E.Drip.setAttribute("d", `M206 84 q-3 ${(4 + dp * 26).toFixed(1)} 0 ${(6 + dp * 34).toFixed(1)} q3 ${(-2 - dp * 8).toFixed(1)} 0 ${(-6 - dp * 34).toFixed(1)}Z`);
  // the bee: a figure of eight over the jar, a closer look while it's marked, a dive to the honey when the marks are in
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

window.HoneyPot = { open, close, _countWords: countWords };
})();
