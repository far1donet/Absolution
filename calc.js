/* Scipa: a live graphic calculator that shows how each Math AA question is solved on a GDC.
   It does the maths itself (a small expression engine, graphs and G-Solv, statistics, normal and binomial
   distributions, polynomial and simultaneous equations), so what it shows is always correct.
   Steps:  ["note", text] · ["app", name] · ["mode", "Deg"|"Rad"] · ["run", expr, display?]
           ["graph", [f1, f2…], [xmin, xmax, ymin, ymax]] · ["root"|"max"|"min", fi, x0] · ["isct", fi, fj, x0]
           ["dydx", fi, x] · ["intg", fi, a, b] · ["stat", L1, L2?] · ["1var"] · ["reg"]
           ["normcd", lower, upper, σ, μ] · ["invn", area, σ, μ] · ["binpd", x, n, p] · ["bincd", lower, upper, n, p]
           ["poly", [a, b, c, …]] · ["simul", [[a, b, c], [d, e, f]]]
   GDC.play(el, steps) shows it; GDC.run(steps) returns the values without drawing (for checking); GDC.sad() is Scipa's disappointment. */
(function(){
"use strict";
/* ================= the maths ================= */
const WORDS = ["asin","acos","atan","sqrt","sin","cos","tan","exp","abs","ln","log","pi","Ans","x","e","C","P"];
function tokenize(src){
  const s = String(src).replace(/×/g, "*").replace(/÷/g, "/").replace(/[−–]/g, "-").replace(/²/g, "^2").replace(/³/g, "^3").replace(/π/g, "pi")
    .replace(/√/g, "sqrt").replace(/sin⁻¹/g, "asin").replace(/cos⁻¹/g, "acos").replace(/tan⁻¹/g, "atan");
  const out = []; let i = 0;
  while (i < s.length){
    const c = s[i];
    if (c === " "){ i++; continue; }
    if (/[0-9.]/.test(c)){ let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; out.push({t:"n", v:parseFloat(s.slice(i, j))}); i = j; continue; }
    if (/[A-Za-z]/.test(c)){ let j = i; while (j < s.length && /[A-Za-z]/.test(s[j])) j++; let w = s.slice(i, j);
      while (w){ const k = WORDS.find(k => w.startsWith(k)); if (!k) throw new Error("unknown " + w); out.push({t:"w", v:k}); w = w.slice(k.length); }
      i = j; continue; }
    if ("+-*/^(),!".includes(c)){ out.push({t:"o", v:c}); i++; continue; }
    throw new Error("bad " + c);
  }
  return out;
}
const FN = {sin:1, cos:1, tan:1, asin:1, acos:1, atan:1, sqrt:1, exp:1, abs:1, ln:1, log:1};
const fact = n => { if (n < 0 || n !== Math.floor(n)) return NaN; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
const nCr = (n, r) => { if (r < 0 || r > n) return 0; let v = 1; for (let i = 1; i <= r; i++) v = v * (n - r + i) / i; return Math.round(v); };
function compile(src){
  const T = tokenize(src); let i = 0;
  const peek = () => T[i], is = (t, v) => T[i] && T[i].t === t && (v === undefined || T[i].v === v), eat = () => T[i++];
  const startsFactor = () => T[i] && (T[i].t === "n" || (T[i].t === "w" && T[i].v !== "C" && T[i].v !== "P") || (T[i].t === "o" && T[i].v === "("));
  function expr(){ let a = term(); while (is("o", "+") || is("o", "-")){ const op = eat().v, b = term(), l = a; a = op === "+" ? c => l(c) + b(c) : c => l(c) - b(c); } return a; }
  function term(){ let a = unary();
    for (;;){ if (is("o", "*") || is("o", "/")){ const op = eat().v, b = unary(), l = a; a = op === "*" ? c => l(c) * b(c) : c => l(c) / b(c); }
      else if (startsFactor()){ const b = unary(), l = a; a = c => l(c) * b(c); } else break; }
    return a; }
  function unary(){ if (is("o", "-")){ eat(); const a = unary(); return c => -a(c); } if (is("o", "+")){ eat(); return unary(); } return power(); }
  function power(){ const a = post(); if (is("o", "^")){ eat(); const b = unary(); return c => Math.pow(a(c), b(c)); } return a; }
  function post(){ let a = comb(); while (is("o", "!")){ eat(); const l = a; a = c => fact(l(c)); } return a; }
  function comb(){ const a = atom(); if (is("w", "C") || is("w", "P")){ const op = eat().v, b = atom(); return op === "C" ? c => nCr(a(c), b(c)) : c => fact(a(c)) / fact(a(c) - b(c)); } return a; }
  function atom(){
    const t = eat(); if (!t) throw new Error("end");
    if (t.t === "n"){ const v = t.v; return () => v; }
    if (t.t === "o" && t.v === "("){ const a = expr(); if (is("o", ")")) eat(); return a; }
    if (t.t === "w"){
      if (t.v === "x") return c => c.x; if (t.v === "pi") return () => Math.PI; if (t.v === "e") return () => Math.E; if (t.v === "Ans") return c => c.ans;
      if (FN[t.v]){ const arg = is("o", "(") ? (eat(), (() => { const a = expr(); if (is("o", ")")) eat(); return a; })()) : power();
        const f = t.v, D = Math.PI / 180;
        return c => { const v = arg(c), d = c.deg;
          switch (f){ case "sin": return Math.sin(d ? v * D : v); case "cos": return Math.cos(d ? v * D : v); case "tan": return Math.tan(d ? v * D : v);
            case "asin": return Math.asin(v) / (d ? D : 1); case "acos": return Math.acos(v) / (d ? D : 1); case "atan": return Math.atan(v) / (d ? D : 1);
            case "sqrt": return Math.sqrt(v); case "exp": return Math.exp(v); case "abs": return Math.abs(v); case "ln": return Math.log(v); case "log": return Math.log10(v); } }; }
    }
    throw new Error("unexpected " + t.v);
  }
  const f = expr(); return (x, ctx = {}) => f({x, ans:ctx.ans || 0, deg:!!ctx.deg});
}
function fmtNum(v){
  if (typeof v !== "number" || !isFinite(v)) return "Math ERROR";
  if (Math.abs(v) < 1e-11) return "0";
  let r = +v.toPrecision(10);
  if (Math.abs(r) >= 1e10 || Math.abs(r) < 1e-3) return r.toExponential(9).replace(/\.?0+e/, "e").replace("e", "E").replace("E+", "E+");
  return String(r);
}
const fmtC = (re, im) => Math.abs(im) < 1e-9 ? fmtNum(re) : `${Math.abs(re) < 1e-9 ? "" : fmtNum(re)}${im < 0 ? "−" : Math.abs(re) < 1e-9 ? "" : "+"}${Math.abs(Math.abs(im) - 1) < 1e-9 ? "" : fmtNum(Math.abs(im))}i`;
/* roots of a polynomial (coefficients from the highest power), real and complex */
function polyRoots(co){
  const a = co.map(v => v / co[0]), n = a.length - 1; if (n === 1) return [[-a[1], 0]];
  if (n === 2){ const [, b, c] = a, D = b * b - 4 * c; return D >= 0 ? [[(-b + Math.sqrt(D)) / 2, 0], [(-b - Math.sqrt(D)) / 2, 0]] : [[-b / 2, Math.sqrt(-D) / 2], [-b / 2, -Math.sqrt(-D) / 2]]; }
  let z = Array.from({length:n}, (_, k) => [Math.cos(k * 2.3 + .4) * .9, Math.sin(k * 2.3 + .4) * .9]);
  const ev = ([x, y]) => { let re = 1, im = 0; for (let k = 1; k <= n; k++){ const r2 = re * x - im * y + a[k], i2 = re * y + im * x; re = r2; im = i2; } return [re, im]; };
  for (let it = 0; it < 500; it++) z = z.map((zi, k) => { let [nr, ni] = ev(zi), dr = 1, di = 0; z.forEach((zj, j) => { if (j !== k){ const ar = zi[0] - zj[0], ai = zi[1] - zj[1], r2 = dr * ar - di * ai; di = dr * ai + di * ar; dr = r2; } });
    const m = dr * dr + di * di; return [zi[0] - (nr * dr + ni * di) / m, zi[1] - (ni * dr - nr * di) / m]; });
  return z.map(([x, y]) => [Math.abs(x - Math.round(x)) < 1e-9 ? Math.round(x) : x, Math.abs(y) < 1e-9 ? 0 : y]).sort((p, q) => q[0] - p[0] || q[1] - p[1]);
}
const phi = z => { z = Math.max(-12, Math.min(12, z)); const n = 2000, h = z / n; let s = 0; const f = t => Math.exp(-t * t / 2); for (let k = 0; k <= n; k++) s += f(k * h) * (k === 0 || k === n ? 1 : k % 2 ? 4 : 2); return .5 + s * h / 3 / Math.sqrt(2 * Math.PI); };
const invPhi = p => { let lo = -12, hi = 12; for (let k = 0; k < 80; k++){ const m = (lo + hi) / 2; if (phi(m) < p) lo = m; else hi = m; } return (lo + hi) / 2; };
const binPD = (x, n, p) => nCr(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
const simpson = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let k = 1; k < n; k++) s += f(a + k * h) * (k % 2 ? 4 : 2); return s * h / 3; };
function findX(g, x0, span){ // a root of g near x0
  let a = x0 - span, b = x0 + span, best = null;
  const N = 400; let px = a, pv = g(a);
  for (let k = 1; k <= N; k++){ const x = a + (b - a) * k / N, v = g(x);
    if (isFinite(v) && isFinite(pv) && (v === 0 || (pv < 0) !== (v < 0))){ let lo = px, hi = x; for (let j = 0; j < 80; j++){ const m = (lo + hi) / 2; if ((g(lo) < 0) !== (g(m) < 0)) hi = m; else lo = m; } const r = (lo + hi) / 2; if (best === null || Math.abs(r - x0) < Math.abs(best - x0)) best = r; }
    px = x; pv = v; }
  return best === null ? x0 : best;
}
function extremum(f, x0, span, max){ let a = x0 - span, b = x0 + span; const g = max ? x => -f(x) : f; const R = (Math.sqrt(5) - 1) / 2;
  let c = b - R * (b - a), d = a + R * (b - a); for (let k = 0; k < 120; k++){ if (g(c) < g(d)) b = d; else a = c; c = b - R * (b - a); d = a + R * (b - a); } return (a + b) / 2; }
const snap = v => Math.abs(v - Math.round(v)) < 1e-7 ? Math.round(v) : v;
function quart(xs){ const s = [...xs].sort((a, b) => a - b), n = s.length, med = a => a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
  const lo = s.slice(0, Math.floor(n / 2)), hi = s.slice(Math.ceil(n / 2)); return {min:s[0], q1:med(lo), med:med(s), q3:med(hi), max:s[n - 1]}; }

/* runs the steps without drawing: every value the calculator would show */
function compute(steps){
  const st = {deg:false, ans:0, fns:[], L1:[], L2:[], out:[]};
  const f = i => { const g = compile(st.fns[i]); return x => g(x, st); };
  for (const s of steps){
    const [k, ...a] = s;
    if (k === "mode") st.deg = a[0] === "Deg";
    else if (k === "run"){ const v = compile(a[0])(0, st); st.ans = v; st.out.push({k, label:a[0], v, show:a[1] || fmtNum(v)}); }
    else if (k === "graph") st.fns = a[0];
    else if (k === "root"){ const x = snap(findX(f(a[0]), a[1], 3)); st.out.push({k, x, y:0, v:x}); }
    else if (k === "max" || k === "min"){ const x = snap(extremum(f(a[0]), a[1], 1.5, k === "max")), y = snap(f(a[0])(x)); st.out.push({k, x, y, v:y}); }
    else if (k === "isct"){ const g1 = f(a[0]), g2 = f(a[1]), x = snap(findX(x => g1(x) - g2(x), a[2], 3)); st.out.push({k, x, y:snap(g1(x)), v:x}); }
    else if (k === "yicpt"){ const y = snap(f(a[0])(0)); st.out.push({k, x:0, y, v:y}); }
    else if (k === "dydx"){ const g = f(a[0]), h = 1e-5, x = a[1], d = snap((g(x + h) - g(x - h)) / (2 * h)); st.out.push({k, x, y:g(x), v:d}); }
    else if (k === "intg"){ const v = snap(simpson(f(a[0]), a[1], a[2])); st.out.push({k, a:a[1], b:a[2], v}); }
    else if (k === "stat"){ st.L1 = a[0]; st.L2 = a[1] || []; }
    else if (k === "1var"){ const L = st.L1, n = L.length, m = L.reduce((p, q) => p + q, 0) / n, ss = L.reduce((p, q) => p + (q - m) ** 2, 0);
      const r = {"x̄":m, "Σx":L.reduce((p, q) => p + q, 0), "Σx²":L.reduce((p, q) => p + q * q, 0), "σx":Math.sqrt(ss / n), "sx":Math.sqrt(ss / (n - 1)), "n":n}, Q = quart(L);
      Object.assign(r, {"minX":Q.min, "Q1":Q.q1, "Med":Q.med, "Q3":Q.q3, "maxX":Q.max}); st.out.push({k, rows:r, v:a[0] ? r[a[0]] : m}); }
    else if (k === "reg"){ const X = st.L1, Y = st.L2, n = X.length, mx = X.reduce((p, q) => p + q, 0) / n, my = Y.reduce((p, q) => p + q, 0) / n;
      let sxy = 0, sxx = 0, syy = 0; X.forEach((x, i) => { sxy += (x - mx) * (Y[i] - my); sxx += (x - mx) ** 2; syy += (Y[i] - my) ** 2; });
      const b = sxy / sxx, c = my - b * mx, r = sxy / Math.sqrt(sxx * syy); const rows = {"a":snap(b), "b":snap(c), "r":r, "r²":r * r}; st.out.push({k, rows, v:a[0] ? rows[a[0]] : rows.a}); }
    else if (k === "normcd"){ const [lo, up, sd, mu] = a, v = phi((up - mu) / sd) - phi((lo - mu) / sd); st.out.push({k, rows:{"p":v, "z:Low":(lo - mu) / sd, "z:Up":(up - mu) / sd}, v}); }
    else if (k === "invn"){ const [p, sd, mu] = a, v = mu + sd * invPhi(p); st.out.push({k, rows:{"x":v}, v}); }
    else if (k === "binpd"){ const [x, n, p] = a, v = binPD(x, n, p); st.out.push({k, rows:{"p":v}, v}); }
    else if (k === "bincd"){ const [lo, up, n, p] = a; let v = 0; for (let x = lo; x <= up; x++) v += binPD(x, n, p); st.out.push({k, rows:{"p":v}, v}); }
    else if (k === "poly"){ const r = polyRoots(a[0]); st.out.push({k, roots:r, v:r[0][0]}); }
    else if (k === "simul"){ const [[a1, b1, c1], [a2, b2, c2]] = a[0], D = a1 * b2 - a2 * b1, x = (c1 * b2 - c2 * b1) / D, y = (a1 * c2 - a2 * c1) / D; st.out.push({k, rows:{"X":snap(x), "Y":snap(y)}, v:snap(x)}); }
    const last = st.out[st.out.length - 1]; if (last && typeof last.v === "number" && k !== "run") st.ans = last.v;   // results feed Ans, as on a real GDC
  }
  return st.out;
}

/* ================= the calculator you see ================= */
const KEYS = [["F1","F2","F3","F4","F5","F6"],["SHIFT","OPTN","VARS","MENU","◀","▶"],["ALPHA","x²","^","EXIT","▲","▼"],["X,θ,T","log","ln","sin","cos","tan"],
  ["a b/c","F⇔D","(",")",",","→"],["7","8","9","DEL","AC"],["4","5","6","×","÷"],["1","2","3","+","−"],["0",".","×10ˣ","(−)","EXE"]];
const APPS = [["Run-Matrix","√×÷"],["Statistics","σ"],["Distribution","∿"],["Spreadsheet","▦"],["Graph","y="],["Dyna Graph","↝"],["Table","☰"],["Recursion","aₙ"],["Conic","◯"],["Equation","x="],["Program","⌨"],["Financial","$"]];
const NS = "http://www.w3.org/2000/svg", sleep = ms => new Promise(r => setTimeout(r, ms));
const keyFor = ch => ({"*":"×","×":"×","/":"÷","÷":"÷","-":"−","−":"−","x":"X,θ,T"})[ch] || ch;
function build(host){
  const el = document.createElement("div"); el.className = "gdc";
  el.innerHTML = `<div class="gdc-top"><b>SCIPA</b><span>fx-AA · smart graphic</span></div>
    <div class="gdc-screen"><svg viewBox="0 0 384 216" preserveAspectRatio="xMidYMid meet"></svg></div>
    <div class="gdc-keys">${KEYS.map((row, r) => `<div class="gdc-row r${r}">${row.map(k => `<i class="gdc-k${/^[0-9.]$/.test(k) ? " num" : k === "EXE" ? " exe" : k === "AC" || k === "DEL" ? " del" : r === 0 ? " fn" : ""}" data-k="${k}">${k}</i>`).join("")}</div>`).join("")}</div>
    <p class="gdc-cap" aria-live="polite"></p>`;
  host.appendChild(el); return el;
}
function Screen(el){
  const svg = el.querySelector("svg"), cap = el.querySelector(".gdc-cap");
  const h = (tag, attrs, text) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); if (text != null) n.textContent = text; return n; };
  const clear = () => { while (svg.firstChild) svg.removeChild(svg.firstChild); };
  const status = (deg, label) => { svg.appendChild(h("rect", {x:0, y:0, width:384, height:15, fill:"#2b3640"}));
    svg.appendChild(h("text", {x:6, y:11, class:"s-st"}, `${deg ? "Deg" : "Rad"}  Norm1  d/c  Real`)); svg.appendChild(h("text", {x:378, y:11, class:"s-st", "text-anchor":"end"}, label || "▮▮▮"));
    svg.appendChild(h("rect", {x:0, y:15, width:384, height:201, fill:"#e8eee6"})); };
  const key = async k => { const b = el.querySelector(`.gdc-k[data-k="${CSS.escape(k)}"]`); if (b){ b.classList.add("hit"); await sleep(90); b.classList.remove("hit"); } };
  const say = t => { cap.classList.remove("in"); void cap.offsetWidth; cap.textContent = t; cap.classList.add("in"); };
  const fkeys = (labels, on) => { svg.appendChild(h("rect", {x:0, y:198, width:384, height:18, fill:"#2b3640"}));
    labels.forEach((l, i) => { svg.appendChild(h("rect", {x:2 + i * 64, y:200, width:60, height:14, rx:2, fill:i === on ? "#f5a623" : "#e8eee6"})); svg.appendChild(h("text", {x:32 + i * 64, y:211, class:"s-fk", "text-anchor":"middle"}, l)); }); };
  return {svg, h, clear, status, key, say, fkeys, cap};
}
const FUNC_COL = ["#1a5bd8", "#d8281a", "#1a9a3a"];
async function play(host, steps, opt = {}){
  host.innerHTML = ""; const el = build(host), S = Screen(el), {svg, h} = S;
  const alive = () => el.isConnected && !el.dataset.stop;
  const vals = compute(steps); let vi = 0, deg = false, lines = [], fns = [], win = null, L1 = [], L2 = [];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, T = ms => reduce ? Math.min(ms, 60) : ms;
  const runScreen = () => { S.clear(); S.status(deg, "RUN"); lines.slice(-8).forEach((ln, i) => svg.appendChild(h("text", {x:ln.r ? 378 : 6, y:36 + i * 21, class:ln.r ? "s-res" : "s-in", "text-anchor":ln.r ? "end" : "start"}, ln.t))); };
  const X = x => (x - win[0]) / (win[1] - win[0]) * 384, Y = y => 196 - (y - win[2]) / (win[3] - win[2]) * 178;
  const graphScreen = (fk) => { S.clear(); S.status(deg, "GRAPH");
    const [x0, x1, y0, y1] = win, step = v => { const r = v / 8, p = Math.pow(10, Math.floor(Math.log10(r))); return [1, 2, 5, 10].map(m => m * p).find(m => m >= r); };
    const sx = step(x1 - x0), sy = step(y1 - y0);
    for (let x = Math.ceil(x0 / sx) * sx; x <= x1; x += sx) svg.appendChild(h("line", {x1:X(x), x2:X(x), y1:18, y2:196, stroke:"#cbd6cc", "stroke-width":.7}));
    for (let y = Math.ceil(y0 / sy) * sy; y <= y1; y += sy) svg.appendChild(h("line", {x1:0, x2:384, y1:Y(y), y2:Y(y), stroke:"#cbd6cc", "stroke-width":.7}));
    if (y0 <= 0 && y1 >= 0) svg.appendChild(h("line", {x1:0, x2:384, y1:Y(0), y2:Y(0), stroke:"#56606a", "stroke-width":1.2}));
    if (x0 <= 0 && x1 >= 0) svg.appendChild(h("line", {x1:X(0), x2:X(0), y1:18, y2:196, stroke:"#56606a", "stroke-width":1.2}));
    fns.forEach((src, i) => { const g = compile(src); let d = "", pen = false, prev = null;
      for (let k = 0; k <= 420; k++){ const x = x0 + (x1 - x0) * k / 420, y = g(x, {deg}); if (!isFinite(y) || (prev !== null && Math.abs(y - prev) > (y1 - y0) * 3)){ pen = false; prev = isFinite(y) ? y : null; continue; }
        const py = Math.max(-200, Math.min(420, Y(y))); d += `${pen ? "L" : "M"}${X(x).toFixed(1)} ${py.toFixed(1)}`; pen = true; prev = y; }
      const p = h("path", {d, fill:"none", stroke:FUNC_COL[i % 3], "stroke-width":2.2, pathLength:1, class:"s-curve"}); p.style.animationDuration = (reduce ? .05 : 1.1) + "s"; svg.appendChild(p);
      svg.appendChild(h("text", {x:6, y:30 + i * 13, class:"s-fn", fill:FUNC_COL[i % 3]}, `Y${i + 1}=${src}`)); });
    S.fkeys(fk || ["ROOT", "MAX", "MIN", "Y-ICPT", "ISCT", "∫dx"], -1); };
  const typeOut = async (text, line) => { for (const ch of text){ if (!alive()) return; line.t += ch; runScreen(); S.key(keyFor(ch)); await sleep(T(55)); } };
  const results = (title, rows) => { S.clear(); S.status(deg, title.toUpperCase().slice(0, 9)); svg.appendChild(h("text", {x:6, y:34, class:"s-in"}, title));
    Object.entries(rows).forEach(([k, v], i) => { if (i > 7) return; svg.appendChild(h("text", {x:12, y:56 + i * 19, class:"s-in"}, k)); svg.appendChild(h("text", {x:378, y:56 + i * 19, class:"s-res", "text-anchor":"end"}, "=" + (typeof v === "number" ? fmtNum(v) : v))); }); };
  const dialog = async (title, fields) => { S.clear(); S.status(deg, "DIST"); svg.appendChild(h("text", {x:6, y:34, class:"s-in"}, title));
    for (let i = 0; i < fields.length; i++){ if (!alive()) return; const [k, v] = fields[i]; svg.appendChild(h("text", {x:12, y:56 + i * 20, class:"s-in"}, k)); svg.appendChild(h("text", {x:140, y:56 + i * 20, class:"s-res"}, ":" + v)); await S.key("EXE"); await sleep(T(240)); }
    svg.appendChild(h("rect", {x:10, y:60 + fields.length * 20 - 13, width:70, height:17, rx:2, fill:"#1a5bd8"})); svg.appendChild(h("text", {x:16, y:60 + fields.length * 20, class:"s-inv"}, "Execute")); await S.key("EXE"); await sleep(T(420)); };
  const point = (x, y, lab, txt) => { const px = X(x), py = Y(y);
    const g = h("g", {class:"s-pt"}); g.appendChild(h("line", {x1:px - 9, x2:px + 9, y1:py, y2:py, stroke:"#111", "stroke-width":1.4})); g.appendChild(h("line", {x1:px, x2:px, y1:py - 9, y2:py + 9, stroke:"#111", "stroke-width":1.4}));
    g.appendChild(h("circle", {cx:px, cy:py, r:4, fill:"none", stroke:"#d8281a", "stroke-width":2})); svg.appendChild(g);
    svg.appendChild(h("rect", {x:0, y:178, width:384, height:20, fill:"#e8eee6"})); svg.appendChild(h("text", {x:6, y:192, class:"s-in"}, lab)); svg.appendChild(h("text", {x:378, y:192, class:"s-res", "text-anchor":"end"}, txt)); };
  for (const s of steps){
    if (!alive()) return;
    const [k, ...a] = s;
    if (k === "note"){ S.say(a[0]); await sleep(T(1100)); continue; }
    if (k === "mode"){ deg = a[0] === "Deg"; await S.key("SHIFT"); await S.key("MENU"); S.say(`Set the angle unit to ${deg ? "degrees" : "radians"}`); await sleep(T(500)); continue; }
    if (k === "app"){ S.clear(); S.status(deg, "MENU"); const idx = Math.max(0, APPS.findIndex(x => x[0] === a[0]));
      APPS.forEach(([n, ic], i) => { const x = 8 + (i % 4) * 94, y = 22 + Math.floor(i / 4) * 58;
        svg.appendChild(h("rect", {x, y, width:86, height:52, rx:6, fill:i === idx ? "#1a5bd8" : "#cfd9d0", class:i === idx ? "s-sel" : ""}));
        svg.appendChild(h("text", {x:x + 43, y:y + 24, class:"s-ic", "text-anchor":"middle", fill:i === idx ? "#fff" : "#2b3640"}, ic));
        svg.appendChild(h("text", {x:x + 43, y:y + 43, class:"s-lab", "text-anchor":"middle", fill:i === idx ? "#fff" : "#2b3640"}, n)); });
      await S.key("MENU"); await sleep(T(350)); await S.key("▶"); await S.key("EXE"); await sleep(T(380));
      lines = []; if (a[0] === "Run-Matrix") runScreen(); continue; }
    if (k === "run"){ const v = vals[vi++]; const ln = {t:""}; lines.push(ln); await typeOut(a[0], ln); if (!alive()) return; await S.key("EXE");
      lines.push({t:v.show, r:true}); runScreen(); await sleep(T(700)); continue; }
    if (k === "graph"){ fns = a[0]; win = a[1]; S.clear(); S.status(deg, "GRAPH");
      fns.forEach((f, i) => svg.appendChild(h("text", {x:8, y:40 + i * 22, class:"s-in"}, `Y${i + 1}=${f}`))); await sleep(T(500));
      for (const f of fns){ for (const ch of f.slice(0, 6)){ await S.key(keyFor(ch)); } } await S.key("F6"); graphScreen(); await sleep(T(1300)); continue; }
    if (["root","max","min","isct","yicpt","dydx","intg"].includes(k)){
      const v = vals[vi++], lab = {root:"ROOT", max:"MAX", min:"MIN", isct:"ISCT", yicpt:"Y-ICPT", dydx:"dY/dX", intg:"∫dx"}[k];
      graphScreen(["ROOT", "MAX", "MIN", "Y-ICPT", "ISCT", k === "dydx" ? "dY/dX" : "∫dx"]); await S.key("SHIFT"); await S.key("F5");
      const on = {root:0, max:1, min:2, yicpt:3, isct:4, dydx:5, intg:5}[k]; S.fkeys(["ROOT", "MAX", "MIN", "Y-ICPT", "ISCT", k === "dydx" ? "dY/dX" : "∫dx"], on); await S.key("F" + (on + 1)); await sleep(T(350));
      if (k === "intg"){ const g = compile(fns[a[0]]); let d = `M${X(v.a).toFixed(1)} ${Y(0).toFixed(1)}`; for (let j = 0; j <= 80; j++){ const x = v.a + (v.b - v.a) * j / 80; d += ` L${X(x).toFixed(1)} ${Y(g(x, {deg})).toFixed(1)}`; } d += ` L${X(v.b).toFixed(1)} ${Y(0).toFixed(1)}Z`;
        const sh = h("path", {d, fill:"#1a5bd8", "fill-opacity":.28, class:"s-shade"}); svg.insertBefore(sh, svg.querySelector(".s-curve")); await sleep(T(500));
        svg.appendChild(h("rect", {x:0, y:178, width:384, height:20, fill:"#e8eee6"})); svg.appendChild(h("text", {x:6, y:192, class:"s-in"}, `∫ from ${fmtNum(v.a)} to ${fmtNum(v.b)}`)); svg.appendChild(h("text", {x:378, y:192, class:"s-res", "text-anchor":"end"}, "∫dx=" + fmtNum(v.v))); }
      else if (k === "dydx"){ point(v.x, v.y, "X=" + fmtNum(v.x), "dY/dX=" + fmtNum(v.v)); }
      else point(v.x, v.y, (k === "isct" || k === "root" ? lab + "  " : lab + "  ") + "X=" + fmtNum(v.x), "Y=" + fmtNum(v.y));
      await sleep(T(1300)); continue; }
    if (k === "stat"){ L1 = a[0]; L2 = a[1] || []; S.clear(); S.status(deg, "STAT");
      svg.appendChild(h("text", {x:60, y:34, class:"s-in", "text-anchor":"middle"}, "List 1")); if (L2.length) svg.appendChild(h("text", {x:170, y:34, class:"s-in", "text-anchor":"middle"}, "List 2"));
      for (let i = 0; i < Math.min(L1.length, 8); i++){ if (!alive()) return; svg.appendChild(h("text", {x:90, y:54 + i * 18, class:"s-res", "text-anchor":"end"}, fmtNum(L1[i]))); if (L2.length) svg.appendChild(h("text", {x:200, y:54 + i * 18, class:"s-res", "text-anchor":"end"}, fmtNum(L2[i]))); await S.key(keyFor(String(L1[i])[0])); await S.key("EXE"); await sleep(T(120)); }
      S.fkeys(["GRAPH", "CALC", "TEST", "INTR", "DIST", "▷"], 1); await sleep(T(600)); continue; }
    if (k === "1var" || k === "reg"){ const v = vals[vi++]; await S.key("F2"); await S.key(k === "1var" ? "F1" : "F3"); results(k === "1var" ? "1-Variable" : "LinearReg(ax+b)", v.rows); await sleep(T(1700)); continue; }
    if (k === "normcd"){ const v = vals[vi++]; await dialog("Normal C.D", [["Lower", a[0] < -1e20 ? "-1E+99" : fmtNum(a[0])], ["Upper", a[1] > 1e20 ? "1E+99" : fmtNum(a[1])], ["σ", fmtNum(a[2])], ["μ", fmtNum(a[3])]]); results("Normal C.D", v.rows); await sleep(T(1600)); continue; }
    if (k === "invn"){ const v = vals[vi++]; await dialog("Inverse Normal", [["Tail", "Left"], ["Area", fmtNum(a[0])], ["σ", fmtNum(a[1])], ["μ", fmtNum(a[2])]]); results("Inverse Normal", v.rows); await sleep(T(1600)); continue; }
    if (k === "binpd" || k === "bincd"){ const v = vals[vi++]; await dialog(k === "binpd" ? "Binomial P.D" : "Binomial C.D", k === "binpd" ? [["x", a[0]], ["Numtrial", a[1]], ["p", a[2]]] : [["Lower", a[0]], ["Upper", a[1]], ["Numtrial", a[2]], ["p", a[3]]]);
      results(k === "binpd" ? "Binomial P.D" : "Binomial C.D", v.rows); await sleep(T(1600)); continue; }
    if (k === "poly"){ const v = vals[vi++], deg2 = a[0].length - 1, names = "abcde"; S.clear(); S.status(deg, "EQUA");
      svg.appendChild(h("text", {x:6, y:34, class:"s-in"}, deg2 === 2 ? "aX²+bX+c=0" : deg2 === 3 ? "aX³+bX²+cX+d=0" : "aXⁿ+…=0"));
      for (let i = 0; i < a[0].length; i++){ if (!alive()) return; svg.appendChild(h("text", {x:24 + i * 88, y:60, class:"s-in", "text-anchor":"middle"}, names[i])); svg.appendChild(h("text", {x:24 + i * 88, y:82, class:"s-res", "text-anchor":"middle"}, fmtNum(a[0][i]))); await S.key("EXE"); await sleep(T(260)); }
      await S.key("F1"); await sleep(T(400)); const rows = {}; v.roots.forEach(([re, im], i) => rows[`X${i + 1}`] = fmtC(re, im)); results("Solutions", rows); await sleep(T(1700)); continue; }
    if (k === "simul"){ const v = vals[vi++]; S.clear(); S.status(deg, "EQUA"); svg.appendChild(h("text", {x:6, y:34, class:"s-in"}, "anX+bnY=cn"));
      a[0].forEach((row, r) => row.forEach((c, i) => svg.appendChild(h("text", {x:60 + i * 100, y:62 + r * 22, class:"s-res", "text-anchor":"middle"}, fmtNum(c)))));
      await S.key("EXE"); await sleep(T(700)); results("Solutions", v.rows); await sleep(T(1700)); continue; }
  }
  if (alive() && opt.done) opt.done();
  el.classList.add("done");
}
/* Scipa jumps onto the screen, disappointed */
function sad(){
  if (document.querySelector(".scipa-sad")) return;
  const el = document.createElement("div"); el.className = "scipa-sad"; el.setAttribute("role", "status");
  el.innerHTML = `<div class="ss-bubble">Scipa is disappointed</div><div class="ss-body"><b>SCIPA</b><div class="ss-screen"><svg viewBox="0 0 120 64"><path d="M30 22 l14 6 M90 22 l-14 6" stroke="#2b3640" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="40" cy="32" r="4" fill="#2b3640"/><circle cx="80" cy="32" r="4" fill="#2b3640"/><path d="M42 52 q18 -12 36 0" stroke="#2b3640" stroke-width="3.4" fill="none" stroke-linecap="round"/><path class="ss-tear" d="M84 38 q-3 6 0 9 q3 -3 0 -9z" fill="#3a8aff"/></svg></div>
    <div class="ss-keys">${Array.from({length:12}, () => "<i></i>").join("")}</div></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add("bye"), 1900); setTimeout(() => el.remove(), 2400);
}
window.GDC = {play, sad, compute, compile, fmtNum, stop(host){ const el = host && host.querySelector(".gdc"); if (el) el.dataset.stop = "1"; }};
})();
