/* Life: makes every world feel alive.
   · Jelly: the avatar squashes, stretches and leans with its speed, wobbles when it stops and breathes when idle.
   · Sky: themed ambient particles (data bits, blood cells, sea spray, flour, stars…) that drift on their own and
     stream past with parallax when the camera moves, stretching into speed lines on fast moves.
   Both are reused by Go to heaven. Everything switches off with "reduce motion". */
(function(){
"use strict";
const reduce = matchMedia("(prefers-reduced-motion: reduce)");
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const R = Math.random;

/* ---------- a springy body ---------- */
function Jelly(){
  let prev = null, vel = 0, s = 0, sv = 0, l = 0, lv = 0, t = R() * 10;
  return {
    step(dt, pos, horizontal){
      if (prev === null || Math.abs(pos - prev) > 600){ prev = pos; vel = 0; }   // a jump (new world), not a move
      const v = (pos - prev) / Math.max(dt, 1e-3); prev = pos;
      vel += (v - vel) * Math.min(1, dt * 14);
      const sT = clamp(Math.abs(vel) / 2400, 0, .3);
      const lT = horizontal ? clamp(vel / 42, -15, 15) : clamp(vel / 380, -6, 6);
      sv += (170 * (sT - s) - 11 * sv) * dt; s += sv * dt;            // under-damped: overshoots into a squash when it stops
      lv += (120 * (lT - l) - 10 * lv) * dt; l += lv * dt;
      t += dt;
      const br = .03 * Math.sin(t * 2.3), sw = 2.6 * Math.sin(t * 1.2) + 1.1 * Math.sin(t * 2.9);
      const along = 1 + s + br, across = 1 - s * .55 - br * .5;
      return horizontal ? `rotate(${(l + sw * .5).toFixed(2)}deg) scale(${along.toFixed(3)},${across.toFixed(3)})`
                        : `rotate(${(l + sw).toFixed(2)}deg) scale(${across.toFixed(3)},${along.toFixed(3)})`;
    },
    reset(){ prev = null; vel = s = sv = l = lv = 0; },
  };
}

/* ---------- ambient particles ---------- */
const STYLE = {
  cs:{kind:"bit", c:"93 255 176", n:46}, bio:{kind:"cell", c:"255 120 140", n:22}, chem:{kind:"jitter", c:"160 232 255", n:54},
  phys:{kind:"wind", c:"235 242 255", n:30}, biz:{kind:"glint", c:"255 216 90", n:32}, hist:{kind:"dust", c:"255 214 160", n:42},
  geo:{kind:"spray", c:"200 242 255", n:36}, econ:{kind:"glyph", c:"62 224 137", n:26, chars:["$","€","¥","£","%","↑"], alpha:.32}, psych:{kind:"glyph", c:"201 163 255", n:24, chars:["z","?","!","∿","☾"], alpha:.3}, mathai:{kind:"glyph", c:"159 245 232", n:24, chars:["σ","μ","Σ","%","0","1"], alpha:.28}, ess:{kind:"firefly", c:"200 255 140", n:26}, fr:{kind:"petal", c:"255 214 150", n:28}, gk:{kind:"star", c:"255 255 255", n:90},
  ember:{kind:"ember", c:"255 140 60", n:44}, dirt:{kind:"dust", c:"210 170 120", n:34}, firefly:{kind:"firefly", c:"220 255 120", n:24},
  air:{kind:"dust", c:"255 255 255", n:30}, gold:{kind:"glint", c:"255 220 120", n:40},
};
function Sky(canvas){
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dpr = 1, parts = [], fx = [], st = null, key = "", camPrev = null, camVel = 0, t = 0;
  function resize(){
    const r = canvas.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, r.width); H = Math.max(1, r.height); canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  }
  function make(p){
    const k = st.kind; p.x = R() * W; p.y = R() * H; p.d = .3 + R() * 1.1; p.ph = R() * 6.283; p.rot = R() * 6.283;
    p.vx = 0; p.vy = 0; p.r = 1 + R() * 2; p.c = Array.isArray(st.c) ? st.c[Math.floor(R() * st.c.length)] : st.c;
    if (k === "bit"){ p.r = 1.2 + R() * 1.8; p.vy = -(6 + R() * 10) * p.d; }
    else if (k === "cell"){ p.r = (4 + R() * 7) * p.d; p.vx = (R() - .5) * 10; p.vy = (R() - .5) * 10; }
    else if (k === "jitter"){ p.r = .8 + R() * 1.6; }
    else if (k === "wind"){ p.r = 8 + R() * 22; p.vx = -(30 + R() * 60) * p.d; p.vy = (R() - .5) * 4; }
    else if (k === "glint"){ p.r = 1.6 + R() * 3; p.vy = -(5 + R() * 9) * p.d; }
    else if (k === "dust"){ p.r = .7 + R() * 1.7; p.vx = (R() - .5) * 8; p.vy = (R() - .5) * 6; }
    else if (k === "spray"){ p.r = 1 + R() * 2.2; p.vy = -(8 + R() * 14) * p.d; }
    else if (k === "petal"){ p.r = 2 + R() * 2.5; p.vy = (10 + R() * 16) * p.d; p.vx = (4 + R() * 10) * p.d; }
    else if (k === "star"){ p.r = (.5 + R() * 1.4) * (p.d > 1 ? 1.4 : 1); }
    else if (k === "ember"){ p.r = 1 + R() * 2.2; p.vy = -(18 + R() * 30) * p.d; }
    else if (k === "firefly"){ p.r = 1.4 + R() * 1.6; p.vx = (R() - .5) * 16; p.vy = (R() - .5) * 16; }
    else if (k === "glyph"){ p.r = (11 + R() * 13) * (.55 + p.d * .45); p.ch = st.chars[Math.floor(R() * st.chars.length)]; p.vy = -(4 + R() * 9) * p.d; p.vx = (R() - .5) * 7; p.rot = (R() - .5) * .8; }
    return p;
  }
  function setStyle(s, k){
    if (k === key) return; key = k; st = s;
    resize();
    const n = Math.round(s.n * clamp(W * H / (390 * 844), .7, 2.2));
    parts = Array.from({length:n}, () => make({}));
  }
  function step(dt, cam, horizontal){
    if (!st) return;
    if (canvas.width !== Math.round(canvas.getBoundingClientRect().width * dpr)) { resize(); }
    t += dt;
    let dc = camPrev === null ? 0 : cam - camPrev; camPrev = cam;
    if (Math.abs(dc) > 900) dc = 0;                                   // a cut, not a move
    camVel += (dc / Math.max(dt, 1e-3) - camVel) * Math.min(1, dt * 10);
    const k = st.kind, speed = Math.abs(camVel);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = st.blend || "lighter";              // light worlds (paper) draw normally
    for (const p of parts){
      // drift, wobble and parallax with the camera
      if (k === "jitter"){ p.vx += (R() - .5) * 240 * dt; p.vy += (R() - .5) * 240 * dt; p.vx *= .92; p.vy *= .92; }
      if (k === "firefly"){ p.vx += Math.sin(t * .9 + p.ph) * 12 * dt; p.vy += Math.cos(t * .7 + p.ph) * 12 * dt; p.vx = clamp(p.vx, -20, 20); p.vy = clamp(p.vy, -20, 20); }
      const wob = (k === "petal" || k === "spray" || k === "ember") ? Math.sin(t * 2 + p.ph) * 12 * dt : 0;
      p.x += p.vx * dt + wob; p.y += p.vy * dt;
      if (horizontal) p.x -= dc * p.d; else p.y -= dc * p.d;
      if (p.x < -40){ p.x += W + 80; if (horizontal) p.y = R() * H; } else if (p.x > W + 40){ p.x -= W + 80; if (horizontal) p.y = R() * H; }
      if (p.y < -40){ p.y += H + 80; if (!horizontal) p.x = R() * W; } else if (p.y > H + 40){ p.y -= H + 80; if (!horizontal) p.x = R() * W; }
      p.rot += dt * (k === "petal" ? 2.4 : k === "glyph" ? Math.sin(t * .7 + p.ph) * .25 : .6);
      // twinkle
      const tw = .5 + .5 * Math.sin(t * (k === "star" ? 1.8 : 2.6) + p.ph);
      const a = k === "star" ? .25 + .65 * tw * Math.min(1, p.d) : k === "cell" ? .16 + .1 * tw : k === "wind" ? .12 + .14 * tw : k === "glint" ? .15 + .75 * tw * tw : k === "firefly" ? .1 + .8 * tw * tw : k === "ember" ? .35 + .5 * tw : k === "glyph" ? (st.alpha || .5) * (.35 + .65 * tw) * Math.min(1, p.d) : .2 + .45 * tw;
      ctx.fillStyle = ctx.strokeStyle = `rgb(${p.c} / ${a.toFixed(3)})`;
      // speed lines on fast camera moves
      const trail = p.d > .55 ? clamp(speed * p.d * .016, 0, 46) : 0;
      if (trail > 4){ ctx.globalAlpha = .55;
        ctx.lineWidth = Math.max(1, p.r * .9); ctx.beginPath(); ctx.moveTo(p.x, p.y);
        if (horizontal) ctx.lineTo(p.x + Math.sign(camVel) * trail, p.y); else ctx.lineTo(p.x, p.y + Math.sign(camVel) * trail);
        ctx.stroke(); ctx.globalAlpha = 1;
      }
      if (k === "bit"){ ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2); }
      else if (k === "cell"){ ctx.beginPath(); ctx.ellipse(p.x, p.y, p.r, p.r * .78, p.rot, 0, 6.283); ctx.fill(); ctx.lineWidth = 1.2; ctx.stroke(); }
      else if (k === "wind"){ ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.r, p.y + p.vy * .2); ctx.stroke(); }
      else if (k === "glint"){ const r = p.r * (.6 + .6 * tw); ctx.beginPath(); ctx.moveTo(p.x, p.y - r * 2); ctx.lineTo(p.x + r * .4, p.y); ctx.lineTo(p.x, p.y + r * 2); ctx.lineTo(p.x - r * .4, p.y); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(p.x - r * 2, p.y); ctx.lineTo(p.x, p.y + r * .4); ctx.lineTo(p.x + r * 2, p.y); ctx.lineTo(p.x, p.y - r * .4); ctx.closePath(); ctx.fill(); }
      else if (k === "petal"){ ctx.beginPath(); ctx.ellipse(p.x, p.y, p.r, p.r * .45, p.rot, 0, 6.283); ctx.fill(); }
      else if (k === "glyph"){ ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.font = `${st.weight || 600} ${p.r.toFixed(1)}px ${st.font || "Georgia, serif"}`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.ch, 0, 0); ctx.restore(); }
      else if (k === "firefly" || k === "ember"){ ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2.6, 0, 6.283); ctx.fillStyle = `rgb(${p.c} / ${(a * .18).toFixed(3)})`; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fillStyle = `rgb(${p.c} / ${a.toFixed(3)})`; ctx.fill(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill(); }
    }
    // sparks: bursts and trails, which stay put in the world as the camera moves
    for (let i = fx.length - 1; i >= 0; i--){
      const f = fx[i]; f.life -= dt; if (f.life <= 0){ fx.splice(i, 1); continue; }
      const drag = Math.exp(-dt * f.drag); f.vx *= drag; f.vy *= drag; f.vy += f.g * dt;
      f.x += f.vx * dt; f.y += f.vy * dt; if (horizontal) f.x -= dc; else f.y -= dc;
      const a = Math.min(1, f.life / f.max * 1.6), sp = Math.hypot(f.vx, f.vy), L = Math.min(26, sp * .045);
      ctx.strokeStyle = ctx.fillStyle = `rgb(${f.c} / ${(a * .9).toFixed(3)})`;
      if (L > 1.5){ ctx.lineWidth = f.r; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(f.x - f.vx / sp * L, f.y - f.vy / sp * L); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r * (.6 + a * .6), 0, 6.283); ctx.fill();
      ctx.fillStyle = `rgb(${f.c} / ${(a * .16).toFixed(3)})`; ctx.beginPath(); ctx.arc(f.x, f.y, f.r * 3.2, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  }
  /* sparks: n of them from (x, y); spread is their speed */
  function emit(x, y, c, n, o = {}){
    if (fx.length > 420) return;
    for (let i = 0; i < n; i++){
      const a = o.dir != null ? o.dir + (R() - .5) * (o.cone || 1) : R() * 6.283, sp = (o.speed || 260) * (.3 + R() * .9);
      const life = (o.life || .9) * (.6 + R() * .6);
      fx.push({x:x + (R() - .5) * (o.jitter || 6), y:y + (R() - .5) * (o.jitter || 6), vx:Math.cos(a) * sp, vy:Math.sin(a) * sp, life, max:life, r:(o.size || 2.2) * (.6 + R() * .8), c, drag:o.drag || 3.2, g:o.g || 0});
    }
  }
  function clear(){ ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); }
  addEventListener("resize", () => { if (st) { const s = st, k = key; key = ""; setStyle(s, k); } });
  return {setStyle, step, clear, emit, reset(){ camPrev = null; camVel = 0; fx.length = 0; }};
}
const rgb = hex => { const h = String(hex).replace("#", ""), n = parseInt(h.length === 3 ? h.split("").map(x => x + x).join("") : h, 16); return `${n >> 16 & 255} ${n >> 8 & 255} ${n & 255}`; };
window.Life = {Jelly, Sky, STYLE, reduce, rgb};

/* ---------- the main game's world ---------- */
const vpEl = document.getElementById("vp");
const amb = document.createElement("canvas"); amb.id = "amb"; amb.className = "amb"; amb.setAttribute("aria-hidden", "true");
vpEl.appendChild(amb);
const sky = Sky(amb), body = Jelly();
let last = 0, worldKey = "", prevAv = null;
/* a burst of sparks at a point on screen (the engine calls this when an answer lands or a skin transforms) */
Life.burst = (x, y, hex, n) => { if (reduce.matches) return; const vr = vpEl.getBoundingClientRect(); sky.emit(x - vr.left, y - vr.top, rgb(hex), Math.round(n), {speed: 200 + n * 5, life: 1.1, size: n > 40 ? 2.8 : 2.2}); };
function frame(now){
  requestAnimationFrame(frame);
  if (document.hidden){ last = 0; return; }
  const dt = last ? Math.min(.05, (now - last) / 1000) : 1 / 60; last = now;
  const covered = document.body.classList.contains("in-heaven") || document.body.classList.contains("in-class");
  if (reduce.matches || covered || typeof M === "undefined" || !M){ if (worldKey){ sky.clear(); worldKey = ""; } return; }
  const horizontal = AX === "right";
  const power = typeof S !== "undefined" && S && S.power ? 1 : 0;           // a transformed skin brings its own atmosphere
  const k = M.key + (horizontal ? ":h" : ":v") + (power ? ":p" : "");
  if (k !== worldKey){ const same = worldKey.split(":")[0] === M.key; worldKey = k; if (!same){ sky.reset(); body.reset(); }
    sky.setStyle(power && M.special && M.special.sky ? M.special.sky : (M.ambient || STYLE[M.key] || STYLE.hist), k); }
  sky.step(dt, cam, horizontal);
  const j = document.querySelector("#virus .jelly");
  if (j) j.style.transform = body.step(dt, avC, horizontal);
  // a glowing trail behind the skin while it travels
  if (prevAv !== null){
    const speed = Math.abs(avC - prevAv) / dt;
    if (speed > 220 && speed < 20000){
      const v = document.getElementById("virus"), r = v && v.getBoundingClientRect(), vr = vpEl.getBoundingClientRect();
      if (r && r.width){ const dir = Math.sign(avC - prevAv), back = horizontal ? (dir > 0 ? Math.PI : 0) : (dir > 0 ? -Math.PI / 2 : Math.PI / 2);
        const col = power && M.special && M.special.trail ? M.special.trail : (M.particleColor || "#9fe0ff");
        sky.emit(r.left + r.width / 2 - vr.left, r.top + r.height / 2 - vr.top, rgb(col), Math.min(6, Math.ceil(speed * dt / 14)), {dir: back, cone: 1.1, speed: 60 + speed * .05, life: .7, size: power ? 2.6 : 1.8, jitter: 18, drag: 2}); }
    }
  }
  prevAv = avC;
}
requestAnimationFrame(frame);
})();
