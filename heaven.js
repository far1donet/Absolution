/* Go to heaven — an escape mode for every subject.
   Satan drags you down into his dungeon and locks you in a cage. You escape by answering exam-style questions
   that are marked against a markscheme (no rarity here: it's about writing a full answer). Full marks, or close to it,
   climbs a floor; zero marks gets you dragged back down. Reach the gates of heaven to win.
   Question banks live in qbank/<subject>.js:
     QB(subject, [[spec, commandTerm, marks, question, "markscheme point|keyword|other wording", ...], ...])
   A point is awarded when every word of any one of its keyword alternatives appears in the answer
   (spelling slips and word endings are forgiven). There can be more points than marks: any of them count. */
(function(){
"use strict";
const BANK = {};
window.QBANK = BANK;
window.QB = (subject, list) => {
  const arr = BANK[subject] || (BANK[subject] = []);
  list.forEach(q => arr.push({ s:subject, id:`${subject}-${arr.length + 1}`, spec:q[0], term:q[1], marks:q[2], q:q[3],
    pts:q.slice(4).map(p => { const parts = String(p).split("|").map(x => x.trim()); return {t:parts[0], alts:(parts.length > 1 ? parts.slice(1) : parts).filter(Boolean)}; }) }));
};

/* ================= marking ================= */
const SUB = "₀₁₂₃₄₅₆₇₈₉", SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const clean = s => normSp(String(s).replace(/[₀-₉]/g, c => SUB.indexOf(c)).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, c => SUP.indexOf(c)).replace(/[’'`]/g, " ").replace(/[−–—]/g, " "));
const words = s => clean(s).split(" ").filter(w => w && !STOP.has(w));
function wordHit(w, T){
  for (const t of T){
    if (t === w) return true;
    if (/\d/.test(w) || /\d/.test(t)) continue;                       // numbers must match exactly
    if (w.length === 4 && t.startsWith(w) && t.length <= 6) return true;                          // cell → cells
    if (w.length >= 5 && t.length >= 5 && (t.length >= w.length || t.length >= 6) && lev(t, w) <= TOL(w.length)) return true;   // a spelling slip (not a shorter, different word)
    if (w.length >= 5 && t.length >= 5){ const n = Math.max(5, Math.min(w.length, t.length) - 3); if (t.slice(0, n) === w.slice(0, n)) return true; }   // evaporate / evaporation
  }
  return false;
}
function markAnswer(q, text){
  const T = words(text);
  const hits = q.pts.map(p => p.alts.some(a => { const ws = words(a); return ws.length > 0 && ws.every(w => wordHit(w, T)); }));
  return {hits, earned: Math.min(q.marks, hits.filter(Boolean).length)};
}
const needFor = q => q.marks >= 4 ? q.marks - 1 : q.marks;          // full marks, or within one mark on long answers
window.markHeaven = markAnswer;

/* ================= which questions ================= */
function hlTopics(S){ const s = new Set(); S.catalog.forEach(t => t.units.forEach(u => u.topics.forEach(x => { if (x[2]) s.add(x[0]); }))); return s; }
// multiple-choice subjects (Maths) escape with their own questions: one mark for the right option
const mcBank = S => S.prompts.map(p => ({...p, s:S.key, term:"Choose", marks:1, mc:true}));
window.heavenPool = () => {
  const list = (BANK[M.key] && BANK[M.key].length) ? BANK[M.key] : M.mcq ? (M.mcBank || (M.mcBank = mcBank(M))) : [], sel = new Set(pickState.sel), hl = hlTopics(M);
  return list.filter(q => sel.has(topicOf(q)) && (pickState.level === "HL" || !hl.has(topicOf(q))));
};

/* ================= the tower ================= */
const LH = 520, TOP = 10, PAD = 700;          // PAD: bedrock below the cage so the camera can frame it above the question panel
const FLOORS = ["The cage","The dungeon","The lava pits","The catacombs","Under the earth","The surface","The sky","Above the clouds","The stairway","The pearly light","The gates of heaven"];
const floorY = i => (TOP - i) * LH + LH - 64;
const q$ = s => document.querySelector(s);
let H = null, hv = null, camY = 0, camT = 0, camV = 0, sky = null, jelly = null, skyKey = "";

const at = (x, y, inner) => `<svg x="${x}%" y="${y}" overflow="visible">${inner}</svg>`;
function scene(i){
  const r = srand(4242 + i*17); let s = "";
  const rep = (n, fn) => { for (let k=0; k<n; k++) s += fn(k); };
  const bricks = (c1, c2) => { let b = ""; for (let y=0; y<LH-60; y+=26) for (let x=((y/26)%2)*-30; x<1600; x+=60) b += `<rect x="${x}" y="${y}" width="58" height="24" rx="3" fill="${r() < .5 ? c1 : c2}"/>`; return `<svg width="100%" height="${LH}" overflow="hidden">${b}</svg>`; };
  const torch = x => at(x, 150, `<rect x="-4" y="0" width="8" height="40" fill="#5a3a1a"/><path d="M0 -34 q16 18 0 34 q-16 -16 0 -34z" fill="#ffb03a" class="hv-flame"/><path d="M0 -20 q8 10 0 20 q-8 -10 0 -20z" fill="#fff2a8"/><circle cx="0" cy="-10" r="60" fill="#ff9a3a" opacity=".12"/>`);
  const chain = x => at(x, 0, `<g class="swt" style="animation-delay:-${f1(r()*3)}s">` + Array.from({length:7}, (_,k)=>`<ellipse cx="0" cy="${10+k*18}" rx="6" ry="10" fill="none" stroke="#7a7f88" stroke-width="3"/>`).join("") + `<path d="M-10 136 h20 v14 h-20z" fill="#5a5f68"/></g>`);
  switch(i){
    case 0: s += bricks("#2a1214","#321618") + torch(14) + torch(86) + chain(28) + chain(72)
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#1a0a0a"/><rect x="0" y="${LH-64}" width="100%" height="5" fill="#5a2020"/>`
      + `<rect x="0" y="${LH-20}" width="100%" height="20" fill="#ff3a1a" opacity=".25" class="hv-glow"/>`; break;
    case 1: s += bricks("#22202c","#2a2836") + torch(10) + torch(90) + chain(34)
      + at(66, 70, `<rect x="-40" y="0" width="80" height="60" rx="6" fill="#0a0812"/>${[0,1,2,3].map(k=>`<rect x="${-30+k*20}" y="0" width="5" height="60" fill="#4a4858"/>`).join("")}`)
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#15131d"/><rect x="0" y="${LH-64}" width="100%" height="5" fill="#4a4858"/>`; break;
    case 2: s += `<rect width="100%" height="${LH}" fill="url(#hvLava)"/><defs><linearGradient id="hvLava" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0a06"/><stop offset="1" stop-color="#7a1a06"/></linearGradient></defs>`
      + Array.from({length:6},(_,k)=>at(f1(5+k*18), f1(60+r()*160), `<path d="M-40 60 l20 -70 l30 -20 l30 40 l20 50z" fill="#3a1a12"/>`)).join("")
      + `<rect x="0" y="${LH-120}" width="100%" height="56" fill="#ff5a14" class="hv-glow"/>` + Array.from({length:10},(_,k)=>`<circle cx="${f1(5+k*10)}%" cy="${LH-96}" r="${f1(4+r()*6)}" fill="#ffd25a" class="blink" style="animation-delay:${f1(r()*2)}s"/>`).join("")
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#2a120c"/><rect x="0" y="${LH-64}" width="100%" height="5" fill="#ff7a2a"/>`; break;
    case 3: s += bricks("#2e2418","#362a1c") + Array.from({length:8},(_,k)=>at(f1(6+k*12.5), f1(60+(k%2)*110), `<path d="M-26 50 v-30 q26 -30 52 0 v30z" fill="#140e08"/><circle cx="0" cy="30" r="11" fill="#e8e2d0"/><circle cx="-4" cy="29" r="3" fill="#140e08"/><circle cx="4" cy="29" r="3" fill="#140e08"/>`)).join("")
      + at(50, 40, `<rect x="-3" y="0" width="6" height="20" fill="#f2ead8"/><path d="M0 -14 q7 7 0 14 q-7 -7 0 -14z" fill="#ffd25a" class="hv-flame"/>`)
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#1e160c"/><rect x="0" y="${LH-64}" width="100%" height="5" fill="#6a5434"/>`; break;
    case 4: s += `<rect width="100%" height="${LH}" fill="#3a2614"/>` + Array.from({length:14},()=>`<ellipse cx="${f1(r()*100)}%" cy="${f1(r()*LH)}" rx="${f1(8+r()*16)}" ry="${f1(6+r()*10)}" fill="#5a4630"/>`).join("")
      + Array.from({length:6},(_,k)=>at(f1(8+k*17), 0, `<path d="M0 0 q${f1(-20+r()*40)} 80 ${f1(-10+r()*20)} 170 q-10 40 6 90" stroke="#6a4a24" stroke-width="${f1(4+r()*5)}" fill="none"/>`)).join("")
      + at(24, 300, `<path d="M0 0 h70 M10 -8 v16 M30 -8 v16 M50 -8 v16 M66 -6 q10 6 0 12" stroke="#e8dcc0" stroke-width="6" stroke-linecap="round" fill="none"/>`)
      + at(78, 220, `<path d="M0 0 q10 -10 20 0 t20 0 t20 0" stroke="#e8a0a8" stroke-width="7" fill="none" stroke-linecap="round"/>`)
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#2a1a0c"/>`; break;
    case 5: s += `<rect width="100%" height="${LH-64}" fill="url(#hvNight)"/><defs><linearGradient id="hvNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a1030"/><stop offset="1" stop-color="#1e2a50"/></linearGradient></defs>`
      + Array.from({length:40},()=>`<circle cx="${f1(r()*100)}%" cy="${f1(r()*(LH-180))}" r="${f1(.6+r()*1.4)}" fill="#fff" opacity="${f1(.4+r()*.6)}"/>`).join("")
      + at(84, 70, `<circle r="26" fill="#fff6d8"/><circle cx="10" cy="-6" r="24" fill="#0e1636"/>`)
      + at(14, LH-64, `<rect x="-60" y="-110" width="120" height="110" fill="#5a4a3a"/><path d="M-70 -110 l70 -40 l70 40z" fill="#7a3a2a"/><rect x="-12" y="-46" width="24" height="46" fill="#2a1a10"/>${[-40,24].map(x=>`<rect x="${x}" y="-90" width="16" height="16" fill="#ffd27a"/>`).join("")}<text x="0" y="-118" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-size="11" font-weight="700" fill="#ffd27a">SCHOOL</text>`)
      + [70,92].map(x=>at(x, LH-64, `<g class="sw" style="animation-delay:-${f1(r()*4)}s"><rect x="-5" y="-60" width="10" height="60" fill="#2a1a0c"/><circle cx="0" cy="-80" r="34" fill="#1a3a24"/></g>`)).join("")
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#2a4a1e"/><rect x="0" y="${LH-64}" width="100%" height="6" fill="#4a7a34"/>`
      + at(32, LH-62, `<ellipse rx="44" ry="10" fill="#1a0806"/><ellipse rx="36" ry="6" fill="#ff5a14" class="hv-glow" opacity=".0" id="hvHole"/>`); break;
    case 6: s += `<rect width="100%" height="${LH}" fill="url(#hvDawn)"/><defs><linearGradient id="hvDawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a7ad0"/><stop offset="1" stop-color="#f2a87a"/></linearGradient></defs>`
      + Array.from({length:5},()=>at(f1(r()*90), f1(40+r()*300), `<path class="fly" style="animation-delay:-${f1(r()*9)}s" d="M0 0 q6 -6 12 0 q6 -6 12 0" stroke="#2a2a3a" stroke-width="2.5" fill="none"/>`)).join("")
      + at(76, 120, `<g class="fly"><path d="M-40 0 h70 l14 -6 h8 l-8 10 h-84z" fill="#f2f4f8"/><path d="M-6 0 l-16 14 h10 l20 -14z" fill="#c8ccd4"/></g>`)
      + at(50, LH-64, `<ellipse rx="70" ry="18" fill="#fff" opacity=".9"/><ellipse cx="-30" cy="-8" rx="34" ry="16" fill="#fff"/><ellipse cx="26" cy="-10" rx="38" ry="18" fill="#fff"/>`); break;
    case 7: s += `<rect width="100%" height="${LH}" fill="#7ab8f0"/>` + at(50, LH+60, `${["#ff5a5a","#ffa23a","#ffe14a","#5ad85a","#4aa8ff","#8a6aff"].map((c,k)=>`<circle r="${300-k*16}" fill="none" stroke="${c}" stroke-width="16" opacity=".55"/>`).join("")}`)
      + Array.from({length:7},()=>at(f1(r()*100), f1(30+r()*(LH-140)), `<g class="dx" style="animation-delay:-${f1(r()*16)}s"><ellipse rx="${f1(50+r()*40)}" ry="18" fill="#fff" opacity=".85"/><ellipse cx="24" cy="-10" rx="30" ry="16" fill="#fff"/></g>`)).join("")
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#fff" opacity=".9"/>` + Array.from({length:14},(_,k)=>`<circle cx="${k*7.5}%" cy="${LH-64}" r="22" fill="#fff"/>`).join(""); break;
    case 8: s += `<rect width="100%" height="${LH}" fill="url(#hvPastel)"/><defs><linearGradient id="hvPastel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe6c8"/><stop offset="1" stop-color="#b8d8ff"/></linearGradient></defs>`
      + [18,82].map((x,k)=>at(x, 140 + k*90, `<g class="fl" style="animation-delay:-${k*1.6}s"><circle cx="0" cy="0" r="14" fill="#ffd8b8"/><path d="M-12 -14 q12 -12 24 0" fill="#ffe58a"/><ellipse cx="0" cy="-22" rx="12" ry="3" fill="none" stroke="#ffd25a" stroke-width="3"/><path d="M-14 4 q-26 -14 -30 6 q14 8 30 0z M14 4 q26 -14 30 6 q-14 8 -30 0z" fill="#fff"/><ellipse cx="0" cy="22" rx="10" ry="14" fill="#fff"/></g>`)).join("")
      + at(70, 330, `<path d="M0 0 q20 -40 0 -80" stroke="#d8a84a" stroke-width="6" fill="none"/>${[0,1,2,3,4].map(k=>`<path d="M2 ${-8-k*14} l${14-k*2} 0" stroke="#e8c87a" stroke-width="1.5"/>`).join("")}`)
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#fff"/>` + Array.from({length:14},(_,k)=>`<circle cx="${k*7.5}%" cy="${LH-64}" r="22" fill="#fff"/>`).join(""); break;
    case 9: s += `<rect width="100%" height="${LH}" fill="#fff6dc"/>` + at(50, LH, Array.from({length:14},(_,k)=>`<path d="M0 0 L${f1(Math.cos(Math.PI + k*Math.PI/13)*900)} ${f1(Math.sin(Math.PI + k*Math.PI/13)*900)} L${f1(Math.cos(Math.PI + (k+.5)*Math.PI/13)*900)} ${f1(Math.sin(Math.PI + (k+.5)*Math.PI/13)*900)}z" fill="#ffe08a" opacity=".35"/>`).join(""))
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#fff"/>` + Array.from({length:14},(_,k)=>`<circle cx="${k*7.5}%" cy="${LH-64}" r="22" fill="#fff"/>`).join(""); break;
    case 10: s += `<rect width="100%" height="${LH}" fill="url(#hvGold)"/><defs><radialGradient id="hvGold" cx=".5" cy=".55" r=".7"><stop offset="0" stop-color="#fffbe8"/><stop offset="1" stop-color="#ffd98a"/></radialGradient></defs>`
      + Array.from({length:10},()=>at(f1(r()*100), f1(20+r()*200), `<path d="M0 -6 l1.6 4.4 4.4 1.6 -4.4 1.6 -1.6 4.4 -1.6 -4.4 -4.4 -1.6 4.4 -1.6z" fill="#fff" class="blink" style="animation-delay:${f1(r()*2)}s"/>`)).join("")
      + `<rect x="0" y="${LH-64}" width="100%" height="64" fill="#fff"/>` + Array.from({length:14},(_,k)=>`<circle cx="${k*7.5}%" cy="${LH-64}" r="24" fill="#fff"/>`).join(""); break;
  }
  return `<svg width="100%" height="${LH}" aria-hidden="true">${s}</svg>`;
}

/* ================= the cast ================= */
const SATAN = `<svg viewBox="0 0 120 160" width="120" height="160" aria-hidden="true">
  <g class="hv-tail"><path d="M84 120 q34 -6 26 -40 q-4 -14 6 -20" stroke="#b0141e" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M116 60 l-8 -10 l14 0z" fill="#b0141e"/></g>
  <path d="M26 70 q-24 -20 -22 -46 q14 16 30 22z M94 70 q24 -20 22 -46 q-14 16 -30 22z" fill="#6a0a12"/>
  <rect x="40" y="118" width="12" height="34" rx="5" fill="#9a101a"/><rect x="68" y="118" width="12" height="34" rx="5" fill="#9a101a"/><path d="M36 150 h20 v8 h-20z M64 150 h20 v8 h-20z" fill="#1a0808"/>
  <path d="M34 72 q26 -10 52 0 l6 54 q-32 10 -64 0z" fill="#c8141e"/><path d="M60 74 v50" stroke="#9a101a" stroke-width="2"/>
  <circle cx="60" cy="48" r="26" fill="#d81e28"/><path d="M38 34 q-10 -24 4 -32 q-2 16 8 24z M82 34 q10 -24 -4 -32 q2 16 -8 24z" fill="#f2e8d0"/>
  <path d="M44 40 l12 6 M76 40 l-12 6" stroke="#1a0808" stroke-width="4" stroke-linecap="round"/><ellipse cx="50" cy="50" rx="6" ry="5" fill="#ffe14a"/><ellipse cx="70" cy="50" rx="6" ry="5" fill="#ffe14a"/>
  <rect x="49" y="46" width="2" height="8" fill="#1a0808"/><rect x="69" y="46" width="2" height="8" fill="#1a0808"/>
  <path d="M44 60 q16 14 32 0 q-16 6 -32 0z" fill="#3a0608"/><path d="M48 61 l3 5 l3 -4 M66 61 l3 4 l3 -5" fill="#fff"/><path d="M54 72 l6 14 l6 -14z" fill="#3a0608"/>
  <g class="hv-fork"><path d="M20 30 v120" stroke="#3a3a42" stroke-width="5"/><path d="M8 34 v-16 M20 30 v-20 M32 34 v-16 M8 34 q12 10 24 0" stroke="#3a3a42" stroke-width="5" fill="none" stroke-linecap="round"/></g>
  <circle cx="24" cy="92" r="8" fill="#d81e28"/><path d="M34 80 q-10 6 -10 12" stroke="#c8141e" stroke-width="9" fill="none" stroke-linecap="round"/></svg>`;
const GOD = `<svg viewBox="0 0 150 200" width="150" height="200" aria-hidden="true">
  <circle cx="75" cy="60" r="70" fill="#fff8d8" opacity=".55"/><ellipse class="hv-halo" cx="75" cy="12" rx="30" ry="7" fill="none" stroke="#ffcf3a" stroke-width="6"/>
  <path d="M38 96 q-26 10 -30 34 q8 6 16 0 q6 -16 22 -22z M112 96 q26 10 30 34 q-8 6 -16 0 q-6 -16 -22 -22z" fill="#fffdf6" stroke="#e8d8a8" stroke-width="2"/>
  <circle cx="14" cy="134" r="9" fill="#f2c8a0"/><circle cx="136" cy="134" r="9" fill="#f2c8a0"/>
  <path d="M40 92 q35 -14 70 0 l14 104 h-98z" fill="#fffdf6" stroke="#e8d8a8" stroke-width="2"/><path d="M75 96 v100" stroke="#ffcf3a" stroke-width="5"/><path d="M28 192 h94" stroke="#ffcf3a" stroke-width="5"/>
  <path d="M44 48 q0 -32 31 -32 q31 0 31 32 q0 10 -4 16 q-27 -6 -54 0 q-4 -6 -4 -16z" fill="#f4f4f4"/>
  <circle cx="75" cy="52" r="22" fill="#f2c8a0"/><path d="M56 40 q19 -14 38 0" stroke="#f4f4f4" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M64 49 q4 -4 8 0 M78 49 q4 -4 8 0" stroke="#3a2a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M50 62 q4 46 25 54 q21 -8 25 -54 q-12 6 -25 6 q-13 0 -25 -6z" fill="#fff" stroke="#e4e4e4" stroke-width="2"/><path d="M66 66 q9 8 18 0" stroke="#c87a5a" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M62 62 q13 -6 26 0" stroke="#f4f4f4" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`;
const CAGE = `<svg viewBox="0 0 140 180" width="140" height="180" aria-hidden="true">
  <path d="M10 60 q60 -70 120 0" fill="none" stroke="#5a5f68" stroke-width="8"/><circle cx="70" cy="12" r="8" fill="none" stroke="#5a5f68" stroke-width="5"/>
  <rect x="4" y="166" width="132" height="12" rx="3" fill="#3a3f48"/><rect x="8" y="56" width="124" height="8" rx="3" fill="#4a4f58"/>
  ${[14,32,108,126].map(x=>`<rect x="${x-3}" y="40" width="6" height="128" fill="#6a6f78"/>`).join("")}
  <g class="hv-door">${[50,70,90].map(x=>`<rect x="${x-3}" y="38" width="6" height="130" fill="#7a7f88"/>`).join("")}<rect x="44" y="104" width="52" height="6" fill="#7a7f88"/><rect x="60" y="112" width="20" height="18" rx="3" fill="#d8b24a"/><path d="M64 112 v-8 q6 -8 12 0 v8" stroke="#d8b24a" stroke-width="3" fill="none"/></g></svg>`;
const GATE_HALF = side => `<svg viewBox="0 0 110 240" width="110" height="240" aria-hidden="true"><path d="M${side==="l"?4:106} 240 V60 q0 -50 ${side==="l"?102:-102} -56 V240z" fill="#ffe7a0" opacity=".25"/>
  ${[18,40,62,84].map(x=>`<rect x="${side==="l"?x:110-x-5}" y="${side==="l"?40-x*.3:40-(110-x)*.3}" width="5" height="${200}" fill="#e8b830"/>`).join("")}
  <path d="M${side==="l"?4:106} 240 V60 q0 -50 ${side==="l"?102:-102} -56" fill="none" stroke="#e8b830" stroke-width="7"/><path d="M0 120 h110 M0 200 h110" stroke="#e8b830" stroke-width="6"/>
  <circle cx="${side==="l"?96:14}" cy="160" r="7" fill="#fff4c8" stroke="#e8b830" stroke-width="3"/></svg>`;

/* ================= the room ================= */
function build(){
  const el = document.createElement("div"); el.id = "hv"; el.className = "hv"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Go to heaven");
  const levels = FLOORS.map((n, i) => `<div class="hv-lvl" style="top:${(TOP - i) * LH}px;height:${LH}px">${scene(i)}<div class="hv-name"${i === TOP ? " hidden" : ""}><small>${i === 0 ? "Locked in" : i === TOP ? "The finish" : `Floor ${i}`}</small>${n}</div></div>`).join("");
  el.innerHTML = `
    <div class="hv-view" id="hvView"><canvas class="hv-sky" id="hvSky" aria-hidden="true"></canvas><div class="hv-world" id="hvWorld" style="height:${(TOP + 1) * LH + PAD}px">${levels}
      <div class="hv-bedrock" style="top:${(TOP + 1) * LH}px;height:${PAD}px"></div>
      <div class="hv-ladder" style="top:${floorY(5)}px;height:${floorY(0) - floorY(5)}px"></div>
      <div class="hv-stair" style="top:${floorY(TOP)}px;height:${floorY(5) - floorY(TOP)}px"></div>
      <div class="hv-gate l" id="hvGateL" style="top:${floorY(TOP) - 240}px">${GATE_HALF("l")}</div><div class="hv-gate r" id="hvGateR" style="top:${floorY(TOP) - 240}px">${GATE_HALF("r")}</div>
      <div class="hv-sign" style="top:${floorY(TOP) - 272}px">HEAVEN</div>
      <div class="hv-actor hv-god" id="hvGod">${GOD}</div>
      <div class="hv-actor hv-cage" id="hvCage">${CAGE}</div>
      <div class="hv-actor hv-you" id="hvYou"></div>
      <div class="hv-actor hv-satan" id="hvSatan">${SATAN}</div>
      <div class="hv-bubble" id="hvBubble" hidden></div>
    </div></div>
    <header class="hv-top">
      <button class="cr-btn" id="hvLeave">✕ Leave</button>
      <div class="hv-title"><small>${esc(M.name)}</small><b>Go to heaven</b></div>
      <div class="hv-prog" id="hvProg" aria-live="polite"></div>
    </header>
    <button class="hv-skip" id="hvSkip">Skip intro ▸</button>
    <section class="hv-panel" id="hvPanel" hidden></section>`;
  document.body.appendChild(el); document.body.classList.add("in-heaven");
  return el;
}
const actor = id => q$("#" + id);
const SIZE = {hvYou:[74,74], hvSatan:[120,160], hvGod:[150,200], hvCage:[140,180]};
function put(id, xPct, footY){ const el = actor(id), [w,h] = SIZE[id]; el.style.left = xPct + "%"; el.style.transform = `translate(${-w/2}px, ${(footY - h).toFixed(1)}px)`; el._x = xPct; el._y = footY; }
function setYou(level){ const you = actor("hvYou"); you.innerHTML = `<div class="jelly">${M.avatar(Math.max(0, Math.min(10, Math.round(level))), M.bands[2].hue)}</div>`; }
function viewH(){ const v = q$("#hvView"), p = q$("#hvPanel"); const vh = v.clientHeight, ph = p && !p.hidden ? p.offsetHeight : 0; return {vh, free: Math.max(220, vh - ph)}; }
function camFor(footY){ const {vh, free} = viewH(); const world = (TOP + 1) * LH + PAD; const feet = Math.min(free - 24, Math.max(330, free * .75)); return Math.max(0, Math.min(world - vh, footY - feet)); }
/* the camera chases its target on a critically damped spring, so every move eases in and out */
function applyCam(){ const w = q$("#hvWorld"); if (w) w.style.transform = `translate3d(0, ${(-camY).toFixed(1)}px, 0)`; }
let camTV = 0, camTT = 0, camRef = 0;
function setCam(y, instant){
  const now = performance.now(), gap = (now - camTT) / 1000;
  if (gap >= .008){                                                    // how fast the target moves, so the camera keeps up
    camTV = gap < .1 ? Math.max(-6000, Math.min(6000, camTV + ((y - camRef) / gap - camTV) * .5)) : 0;
    camTT = now; camRef = y; }
  camT = y;
  if (instant || Life.reduce.matches){ camY = y; camV = 0; camTV = 0; applyCam(); }
}
function skyFor(lvl){ const S = Life.STYLE; return lvl <= 3 ? ["ember", S.ember] : lvl === 4 ? ["dirt", S.dirt] : lvl === 5 ? ["firefly", S.firefly] : lvl <= 7 ? ["air", S.air] : ["gold", S.gold]; }
function loop(id){
  let last = 0;
  const f = now => {
    if (!H || H.id !== id) return; requestAnimationFrame(f);
    if (document.hidden){ last = 0; return; }
    const dt = last ? Math.min(.034, (now - last) / 1000) : 1 / 60; last = now;
    if (Life.reduce.matches){ if (camY !== camT){ camY = camT; applyCam(); } return; }
    if (now - camTT > 80) camTV *= Math.exp(-dt * 12);
    const w = 7.2; camV += (w * w * (camT - camY) + 2 * w * (camTV - camV)) * dt; camY += camV * dt; applyCam();
    const you = actor("hvYou"), j = you && you.querySelector(".jelly"); if (j && you._y != null) j.style.transform = jelly.step(dt, you._y, false);
    const lvl = Math.max(0, Math.min(TOP, TOP - Math.floor((camY + innerHeight * .4) / LH))), [k, st] = skyFor(lvl);
    if (k !== skyKey){ skyKey = k; sky.setStyle(st, k); }
    sky.step(dt, camY, false);
  };
  requestAnimationFrame(f);
}
async function glideCam(to, dur = 700){ const from = camY; await tween(dur, k => setCam(from + (to - from) * k), EASE.soft); }
function say(text, who, ms){
  const b = q$("#hvBubble"), el = actor(who); if (!b || !el) return Promise.resolve();
  b.textContent = text; b.className = `hv-bubble from-${who}`; b.hidden = false;
  const W = q$("#hv").clientWidth, bw = Math.min(W * .78, 300), x = W * el._x / 100;
  b.style.maxWidth = bw + "px"; b.style.left = Math.max(bw/2 + 8, Math.min(W - bw/2 - 8, x)) + "px"; b.style.top = (el._y - SIZE[who][1] - 14) + "px";
  b.style.setProperty("--tail", (x - Math.max(bw/2 + 8, Math.min(W - bw/2 - 8, x))) + "px");
  return ms ? sleep(ms).then(() => { if (b.textContent === text) b.hidden = true; }) : Promise.resolve();
}
const hush = () => { const b = q$("#hvBubble"); if (b) b.hidden = true; };
function prog(){ const p = q$("#hvProg"); if (!p || !H) return;
  p.innerHTML = `<b>${H.passes}</b>/${H.need}<small>${H.earned}/${H.avail} marks</small>`; }

/* ================= the run ================= */
window.goHeaven = async function(){
  const pool = heavenPool(); if (!pool.length) return;
  flowId++; clearUI();
  const old = q$("#hv"); if (old) old.remove();
  hv = build();
  const need = Math.min(10, pool.length);
  H = {id: flowId, pool, queue: pick(rng(String(Math.random())), pool, pool.length), need, passes:0, level:0, earned:0, avail:0, answered:0, full:0, t0:Date.now(), cur:null, out:false, skip:false};
  q$("#hvLeave").onclick = leaveHeaven;
  sky = Life.Sky(q$("#hvSky")); jelly = Life.Jelly(); camY = camT = camV = 0; skyKey = ""; loop(H.id);
  addEventListener("resize", onResize);
  prog();
  await intro();
};
function onResize(){ if (H) setCam(camFor(floorY(H.level)), true); }
function leaveHeaven(){
  if (H) H.id = -1; H = null; removeEventListener("resize", onResize);
  const el = q$("#hv"); if (el) el.remove(); document.body.classList.remove("in-heaven");
  titleScreen();
}
const alive = id => H && H.id === id;

async function intro(){
  const id = H.id; const skip = q$("#hvSkip");
  const finish = () => { if (!alive(id) || H.introDone) return; H.introDone = true;
    skip.hidden = true; hush(); setYou(0); put("hvYou", 50, floorY(0)); put("hvCage", 50, floorY(0) + 6); actor("hvCage").classList.add("shut");
    put("hvSatan", 20, floorY(0)); actor("hvSatan").classList.add("idle"); setCam(camFor(floorY(0)), H.skip); ask(); };
  skip.onclick = () => { H.skip = true; finish(); };
  setYou(5); put("hvYou", 50, floorY(5)); put("hvGod", 24, floorY(TOP)); put("hvCage", 50, floorY(0) - 420); put("hvSatan", 32, floorY(5) + 170);
  actor("hvSatan").style.opacity = "0"; setCam(camFor(floorY(5)), true);
  const step = async ms => { await sleep(ms); return alive(id) && !H.skip; };
  if (!await step(700)) return;
  const hole = document.getElementById("hvHole"); if (hole) hole.setAttribute("opacity", ".9");
  const sat = actor("hvSatan"); sat.style.transition = "transform .7s cubic-bezier(.2,1.4,.4,1), opacity .3s"; sat.style.opacity = "1"; put("hvSatan", 32, floorY(5));
  if (!await step(800)) return;
  say("Not so fast! Down you go!", "hvSatan");
  if (!await step(1400)) return;
  hush(); sat.style.transition = "transform .45s ease-in"; put("hvSatan", 43, floorY(5));
  if (!await step(500)) return;
  sat.style.transition = ""; actor("hvYou").classList.add("grabbed");
  const y0 = floorY(5), y1 = floorY(0);
  await tween(2600, k => { if (!alive(id) || H.skip) return; const y = y0 + (y1 - y0) * k; put("hvYou", 50, y); put("hvSatan", 43, y); setCam(camFor(y)); }, EASE.move);
  if (!alive(id) || H.skip) return;
  actor("hvYou").classList.remove("grabbed"); setYou(0);
  const cage = actor("hvCage"); cage.style.transition = "transform .35s cubic-bezier(.5,0,.8,.4)"; put("hvCage", 50, floorY(0) + 6);
  if (!await step(380)) return;
  cage.classList.add("shut", "clang"); sat.style.transition = "transform .5s ease"; put("hvSatan", 20, floorY(0));
  if (!await step(600)) return;
  sat.classList.add("idle");
  await say("MWAHAHA! Get full marks on the markscheme or stay down here FOREVER!", "hvSatan", 2600);
  if (!alive(id) || H.skip) return;
  finish();
}

function nextQ(){
  if (!H.queue.length) H.queue = pick(rng(String(Math.random())), H.pool, H.pool.length);
  return H.queue.shift();
}
function ask(){
  if (!H || H.out) return;
  const q = H.cur = nextQ(), panel = q$("#hvPanel");
  const topic = M.topicName[topicOf(q)] || "";
  panel.hidden = false;
  if (q.mc){
    const order = pick(rng("hv" + q.id + Math.random()), q.opts.map((_, i) => i), q.opts.length); q.order = order;
    panel.innerHTML = `<div class="hv-qhead"><span class="spec">${esc(q.spec)}</span><span class="hv-topic">${esc(topic)}</span></div>
      <p class="hv-q"><b class="hv-term">Choose</b> ${fmtM(q.q)}</p>
      <div class="bq-opts hv-opts">${order.map((oi, k) => `<button class="bq-opt" data-o="${oi}"><b>${"ABCD"[k]}</b><span>${fmtM(q.opts[oi])}</span></button>`).join("")}</div>
      <p class="small hv-tip">The right answer climbs a floor. A wrong one and Satan drags you back down.</p>`;
    panel.querySelectorAll(".bq-opt").forEach(b => b.onclick = () => answer("", false, +b.dataset.o));
    setTimeout(() => { const f = panel.querySelector(".bq-opt"); if (f) f.focus({preventScroll:true}); }, 60);
    setCam(camFor(floorY(H.level))); return;
  }
  panel.innerHTML = `<div class="hv-qhead"><span class="spec">${esc(q.spec)}</span><span class="hv-topic">${esc(topic)}</span></div>
    <p class="hv-q"><b class="hv-term">${esc(q.term)}</b> ${esc(q.q)} <span class="hv-marks">[${q.marks} mark${q.marks === 1 ? "" : "s"}]</span></p>
    <textarea id="hvAns" rows="4" placeholder="Write a full answer, as you would in the exam…" aria-label="Your answer"></textarea>
    <div class="row hv-actions"><button class="btn" id="hvSubmit">Submit answer</button><button class="btn ghost" id="hvGive">Show markscheme</button></div>
    <p class="small hv-tip">Full marks${q.marks >= 4 ? ` (or ${q.marks - 1}/${q.marks})` : ""} climbs a floor. Zero marks and Satan drags you back down.</p>`;
  const ta = q$("#hvAns");
  q$("#hvSubmit").onclick = () => answer(ta.value);
  q$("#hvGive").onclick = () => answer("", true);
  ta.onkeydown = e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)){ e.preventDefault(); answer(ta.value); } };
  setTimeout(() => { if (ta.isConnected) ta.focus({preventScroll:true}); }, 60);
  setCam(camFor(floorY(H.level)));
}

async function answer(text, gaveUp, choice){
  if (!H || !H.cur) return;
  const id = H.id, q = H.cur; H.cur = null;
  if (!q.mc && !text.trim() && !gaveUp){ H.cur = q; q$("#hvAns").focus(); return; }
  if (q.mc) text = q.opts[choice] || "";
  const {hits, earned} = q.mc ? {hits:[choice === q.a], earned: choice === q.a ? 1 : 0} : markAnswer(q, text);
  H.answered++; H.avail += q.marks; H.earned += earned;
  const pass = !gaveUp && earned >= needFor(q), zero = !gaveUp && earned === 0;
  if (earned >= q.marks) H.full++;
  if (pass) H.passes++; else { H.queue.push(q); if (zero && H.passes > 0) H.passes--; }
  const from = H.level, to = Math.round(H.passes * TOP / H.need);
  H.level = to; prog();
  const panel = q$("#hvPanel");
  const verdict = pass ? (earned >= q.marks ? `Full marks! You climb to ${floorLabel(to)}.` : `${earned}/${q.marks}: close enough! You climb to ${floorLabel(to)}.`)
    : gaveUp ? "Here's the markscheme. This question will come back later."
    : zero ? (from > 0 ? "0 marks. Satan drags you back down a floor!" : "0 marks. You're still locked in the cage.")
    : `${earned}/${q.marks}. Not enough to climb. This question will come back later.`;
  panel.innerHTML = `<div class="hv-result ${pass ? "up" : zero ? "down" : "stay"}"><b class="hv-score">${earned}<small>/${q.marks}</small></b><p>${esc(verdict)}</p></div>
    <p class="hv-q small"><b class="hv-term">${esc(q.term)}</b> ${q.mc ? fmtM(q.q) : esc(q.q)}</p>
    ${q.mc ? `<div class="hv-ms"><h3>Answer</h3><ul><li class="${hits[0] ? "got" : ""}"><i aria-hidden="true">${hits[0] ? "✓" : "·"}</i><span>${fmtM(q.opts[q.a])}${hits[0] ? "" : ` <small>(you chose ${fmtM(text)})</small>`}</span>${hits[0] ? "<em>+1</em>" : ""}</li></ul><p class="small">${fmtM(q.why)}</p></div>`
    : `${text.trim() ? `<details class="hv-mine"><summary>Your answer</summary><p>${esc(text.trim())}</p></details>` : ""}
    <div class="hv-ms"><h3>Markscheme${q.pts.length > q.marks ? ` <small>· any ${q.marks} of these, 1 mark each</small>` : ""}</h3>
      <ul>${q.pts.map((p,k) => `<li class="${hits[k] ? "got" : ""}"><i aria-hidden="true">${hits[k] ? "✓" : "·"}</i><span>${esc(p.t)}</span>${hits[k] ? `<em>+1</em>` : ""}</li>`).join("")}</ul></div>`}
    <div class="row hv-actions"><button class="btn" id="hvNext" disabled>${H.passes >= H.need ? "Approach the gates ▲" : "Next question"}</button></div>`;
  await move(from, to, pass, zero);
  if (!alive(id)) return;
  const nb = q$("#hvNext"); if (!nb) return;
  nb.disabled = false; nb.focus({preventScroll:true});
  nb.onclick = () => { if (H.passes >= H.need) finale(); else ask(); };
}
const floorLabel = i => i === 0 ? "the cage" : i >= TOP ? "the gates of heaven" : `floor ${i}: ${FLOORS[i].replace(/^The /, "the ")}`;

async function move(from, to, pass, zero){
  const id = H.id;
  if (to > from){
    const cage = actor("hvCage");
    if (from === 0 && cage.classList.contains("shut")){ cage.classList.remove("shut"); cage.classList.add("open"); await sleep(500); if (!alive(id)) return;
      if (!H.mocked){ H.mocked = true; say("NOOO! Get back in there!", "hvSatan", 1600); } }
    const y0 = floorY(from), y1 = floorY(to); actor("hvYou").classList.add("climb");
    await tween(900 + (to - from) * 420, k => { if (!alive(id)) return; const y = y0 + (y1 - y0) * k; put("hvYou", 50, y); setCam(camFor(y)); if (Math.abs(k - .5) < .02) setYou(from + (to - from) * k); }, EASE.move);
    if (!alive(id)) return; actor("hvYou").classList.remove("climb"); setYou(to); toast(to);
  } else if (to < from && zero){
    const sat = actor("hvSatan"); sat.classList.remove("idle"); sat.style.transition = "none"; sat.style.opacity = "0"; put("hvSatan", 34, floorY(from));
    await sleep(30); sat.style.transition = "opacity .3s"; sat.style.opacity = "1"; await say("Nope! Back down you go!", "hvSatan", 1100); if (!alive(id)) return;
    sat.style.transition = ""; const y0 = floorY(from), y1 = floorY(to);
    await tween(900, k => { if (!alive(id)) return; const y = y0 + (y1 - y0) * k; put("hvYou", 50, y); put("hvSatan", 34, y); setCam(camFor(y)); }, EASE.sink);
    if (!alive(id)) return; setYou(to);
    sat.style.transition = "opacity .3s"; sat.style.opacity = "0"; await sleep(320); if (!alive(id)) return;
    sat.style.transition = "none"; put("hvSatan", 20, floorY(0)); await sleep(30); sat.style.transition = "opacity .3s"; sat.style.opacity = "1"; sat.classList.add("idle");
    toast(to);
  } else {
    const you = actor("hvYou"); you.classList.remove("nope"); void you.offsetWidth; you.classList.add(pass ? "cheer" : "nope");
    setCam(camFor(floorY(to)));
  }
}
function toast(i){ const t = document.createElement("div"); t.className = "hv-toast"; t.innerHTML = `<small>${i === 0 ? "Back in" : i >= TOP ? "You made it to" : `Floor ${i} of ${TOP}`}</small>${esc(FLOORS[i])}`;
  q$("#hv").appendChild(t); setTimeout(() => t.remove(), 2200); }

async function finale(){
  const id = H.id, panel = q$("#hvPanel"); H.out = true;
  panel.hidden = true; setCam(camFor(floorY(TOP)));
  await sleep(500); if (!alive(id)) return;
  actor("hvGod").classList.add("wave");
  await say("nice one son! you tryna come in or what?", "hvGod");
  panel.hidden = false;
  panel.innerHTML = `<p class="hv-q">God is waiting at the gates.</p><div class="row hv-actions"><button class="btn" id="hvIn">Yeah, let me in 😇</button><button class="btn ghost" id="hvNah">Nah, I'll go again</button></div>`;
  setCam(camFor(floorY(TOP)));
  q$("#hvNah").onclick = () => { leaveHeaven(); goHeaven(); };
  q$("#hvIn").onclick = async () => {
    panel.hidden = true; hush();
    q$("#hvGateL").classList.add("open"); q$("#hvGateR").classList.add("open"); q$("#hv").classList.add("glory");
    await sleep(900); if (!alive(id)) return;
    actor("hvYou").classList.add("enter"); await sleep(1400); if (!alive(id)) return;
    results();
  };
}
function results(){
  const panel = q$("#hvPanel"), secs = Math.round((Date.now() - H.t0) / 1000), pct = H.avail ? Math.round(H.earned / H.avail * 100) : 0;
  const key = "oiac-heaven-" + M.key, best = store.get(key);
  const better = !best || secs < best.secs; if (better) store.set(key, {secs, pct});
  panel.hidden = false;
  panel.innerHTML = `<div class="hv-win"><div class="eyebrow">${esc(M.name)} · Go to heaven</div><h2>You escaped to heaven!</h2>
    <div class="stats3"><div><b>${H.answered}</b><small>questions answered</small></div><div><b>${H.full}</b><small>full marks</small></div><div><b>${pct}%</b><small>of marks (${H.earned}/${H.avail})</small></div></div>
    <p class="small">Time: ${Math.floor(secs/60)} min ${secs%60} s${better ? " · your fastest escape" : best ? ` · best ${Math.floor(best.secs/60)} min ${best.secs%60} s` : ""}</p>
    <div class="row hv-actions"><button class="btn" id="hvAgain">Go again</button><button class="btn ghost" id="hvHome">Back to the start</button></div></div>`;
  q$("#hvAgain").onclick = () => { leaveHeaven(); goHeaven(); };
  q$("#hvHome").onclick = leaveHeaven;
}
})();
