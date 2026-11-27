/* Special forms: hitting a "One in a …" transforms the skin for the rest of the dive, and its power spreads through the world.
   Each subject gets a form that fits its theme. A second "One in a …" makes it stronger still (power 2, 3…).
   SUBJECTS[k].avatar(level, hue, power) draws the special form whenever power > 0. */
(function(){
"use strict";
const uid = () => "s" + Math.random().toString(36).slice(2, 8);
const orbit = (R, ry, dur, begin, inner) => `<g><animateMotion dur="${dur}s" begin="-${begin}s" repeatCount="indefinite" path="M${R} 0 A${R} ${ry} 0 1 1 -${R} 0 A${R} ${ry} 0 1 1 ${R} 0"/>${inner}</g>`;
const glow = (id, col, r, op = .55) => `<defs><radialGradient id="${id}"><stop offset="0" stop-color="${col}" stop-opacity="${op}"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient></defs><circle class="av-core" r="${r}" fill="url(#${id})"/>`;
const star = (x, y, r, col, d) => `<path class="blink" style="animation-delay:-${d}s;animation-duration:1.3s" d="M${x} ${y - r} L${f1(x + r * .28)} ${f1(y - r * .28)} L${x + r} ${y} L${f1(x + r * .28)} ${f1(y + r * .28)} L${x} ${y + r} L${f1(x - r * .28)} ${f1(y + r * .28)} L${x - r} ${y} L${f1(x - r * .28)} ${f1(y - r * .28)}z" fill="${col}"/>`;

const FORMS = {
  /* Computer Science: a mega virus. Bigger, barbed, one evil eye and teeth, minions orbiting, red code veins */
  cs(level, hue, power){
    const n = 15 + power * 2, rr = 19 + power * 1.6, len = 13 + power * 1.5;
    let spikes = "";
    for (let i = 0; i < n; i++){ const a = i / n * Math.PI * 2, c = Math.cos(a), si = Math.sin(a), L = len * (i % 2 ? .78 : 1.12);
      const bx = c * rr, by = si * rr, tx = c * (rr + L), ty = si * (rr + L), px = -si * 4.4, py = c * 4.4;
      spikes += `<path d="M${f1(bx - px * .55)} ${f1(by - py * .55)} L${f1(tx)} ${f1(ty)} L${f1(bx + px * .55)} ${f1(by + py * .55)}z" fill="#5a0a14" stroke="#ff2a4a" stroke-width="1.3"/>`
        + `<path class="av-tip" style="animation-delay:-${(i * .11).toFixed(2)}s" d="M${f1(tx)} ${f1(ty)} l${f1(px)} ${f1(py)} l${f1(c * 7)} ${f1(si * 7)}z" fill="#ff5a6e"/>`; }
    const mini = `<g class="vspin" style="animation-duration:3s">${[0,1,2,3,4,5].map(k => { const a = k * 1.047; return `<line x2="${f1(Math.cos(a) * 7)}" y2="${f1(Math.sin(a) * 7)}" stroke="#ff2a4a" stroke-width="1.6"/>`; }).join("")}<circle r="4" fill="#3a0610" stroke="#ff5a6e" stroke-width="1.4"/></g>`;
    const R = f1(rr + len + 14);
    return avatarSVG(glow(uid(), "#ff2a4a", f1(rr + len + 16))
      + `<g class="vspin" style="animation-duration:10s">${spikes}</g><circle r="${f1(rr)}" fill="#14030a" stroke="#ff2a4a" stroke-width="3"/>`
      + [0,1,2,3,4].map(k => { const a = k * 1.26; return `<path class="blink" style="animation-delay:-${k * .3}s" d="M${f1(Math.cos(a) * rr * .95)} ${f1(Math.sin(a) * rr * .95)} q${f1(-Math.cos(a + 1) * 8)} ${f1(-Math.sin(a + 1) * 8)} ${f1(-Math.cos(a) * rr * .45)} ${f1(-Math.sin(a) * rr * .45)}" stroke="#ff2a4a" stroke-width="1.4" fill="none"/>`; }).join("")
      + `<path d="M-15 -12 l11 5 M15 -12 l-11 5" stroke="#ff2a4a" stroke-width="2.6" stroke-linecap="round"/><path d="M-12 -4 q12 -11 24 0 q-12 10 -24 0z" fill="#ffd23a"/><g class="av-blink"><ellipse cy="-4" rx="2.4" ry="6" fill="#14030a"/></g>`
      + `<path d="M-11 6 q11 10 22 0 q-11 4 -22 0z" fill="#3a0008"/><path d="M-9 7 l2 3.4 l2 -3 l2 3.4 l2 -3.4 l2 3.4 l2 -3.4 l2 3 l2 -3" stroke="#fff" stroke-width="1.2" fill="none"/>`
      + Array.from({length: 1 + power}, (_, k) => orbit(R, R, (2.6 + k * .7).toFixed(1), (k * 1.1).toFixed(1), mini)).join(""));
  },
  /* Biology: a superbug. A monstrous bacteriophage with angry eyes, twitching tail fibres and clones */
  bio(level, hue, power){
    const sc = (1 + (power - 1) * .08).toFixed(2);
    const hex = Array.from({length: 6}, (_, i) => { const a = i / 6 * 6.283 + .52; return `${f1(Math.cos(a) * 17)},${f1(-14 + Math.sin(a) * 17)}`; }).join(" ");
    const legs = [-1, 1].map(sd => [0, 1, 2].map(k => `<path class="swt" style="animation-delay:-${(k * .35 + (sd > 0 ? .2 : 0)).toFixed(2)}s;animation-duration:.9s" d="M${sd * (3 + k * 3)} 27 L${sd * (16 + k * 6)} ${30 + k * 3} L${sd * (20 + k * 7)} ${44 + k * 2}" stroke="#ff4fd8" stroke-width="2.2" fill="none" stroke-linecap="round"/>`).join("")).join("");
    const clone = `<g transform="scale(.32)"><polygon points="${hex}" fill="#24062a" stroke="#ff4fd8" stroke-width="5"/><rect x="-4" y="4" width="8" height="18" fill="#5a1a5a"/></g>`;
    return avatarSVG(glow(uid(), "#ff4fd8", 46, .45) + `<g transform="scale(${sc})">` + legs
      + `<polygon points="${hex}" fill="#24062a" stroke="#ff4fd8" stroke-width="3"/><path class="blink" d="M-7 -16 q4 -6 7 0 t7 0 M-7 -10 q4 -6 7 0 t7 0" stroke="#7affd8" stroke-width="1.6" fill="none"/>`
      + `<path d="M-12 -24 l8 4 M12 -24 l-8 4" stroke="#ff4fd8" stroke-width="2.4" stroke-linecap="round"/><g class="av-blink"><ellipse cx="-6" cy="-19" rx="3.2" ry="2.4" fill="#ffe14a"/><ellipse cx="6" cy="-19" rx="3.2" ry="2.4" fill="#ffe14a"/><circle cx="-6" cy="-19" r="1.3" fill="#14030a"/><circle cx="6" cy="-19" r="1.3" fill="#14030a"/></g>`
      + `<rect x="-9" y="3" width="18" height="4" rx="1" fill="#ff4fd8"/><rect x="-5" y="7" width="10" height="17" rx="2" fill="#5a1a5a" stroke="#ff4fd8" stroke-width="1.6"/><path d="M-5 12 h10 M-5 16 h10 M-5 20 h10" stroke="#ff4fd8" stroke-width="1"/><rect x="-12" y="24" width="24" height="4" rx="2" fill="#ff4fd8"/></g>`
      + Array.from({length: 1 + power}, (_, k) => orbit(48, 30, (3.2 + k * .8).toFixed(1), (k * 1.4).toFixed(1), clone)).join(""));
  },
  /* Chemistry: a quantum core. A glowing nucleus, four fast orbits and crackling arcs */
  chem(level, hue, power){
    const nuc = [[0,0,"#ff5a6e"],[5,-3,"#9fb8ff"],[-5,-2,"#ff5a6e"],[2,5,"#9fb8ff"],[-3,5,"#ff5a6e"],[4,2,"#ff5a6e"],[-1,-6,"#9fb8ff"]].map(([x,y,c]) => `<circle cx="${x}" cy="${y}" r="4.4" fill="${c}" stroke="#fff" stroke-width=".8"/>`).join("");
    const orbs = [0, 45, 90, 135].map((a, k) => `<g transform="rotate(${a})"><ellipse rx="32" ry="10" fill="none" stroke="#9ff0ff" stroke-width="1.6" opacity=".8"/><circle r="3.4" fill="#fff"><animateMotion dur="${(.8 + k * .22).toFixed(2)}s" begin="-${(k * .3).toFixed(1)}s" repeatCount="indefinite" path="M32 0 A32 10 0 1 1 -32 0 A32 10 0 1 1 32 0"/></circle></g>`).join("");
    const arcs = [0, 1, 2, 3, 4].map(k => { const a = k * 1.26 + .3; let d = "M0 0", x = 0, y = 0; for (let i = 1; i <= 4; i++){ x = Math.cos(a) * i * 9 + (i % 2 ? 4 : -4) * Math.sin(a); y = Math.sin(a) * i * 9 - (i % 2 ? 4 : -4) * Math.cos(a); d += ` L${f1(x)} ${f1(y)}`; }
      return `<path class="blink" style="animation-delay:-${(k * .13).toFixed(2)}s;animation-duration:.42s" d="${d}" stroke="#e8fbff" stroke-width="1.6" fill="none"/>`; }).join("");
    return avatarSVG(glow(uid(), "#7af0ff", 46) + `<circle class="spin" style="animation-duration:5s" r="${38 + power * 2}" fill="none" stroke="#9ff0ff" stroke-width="2" stroke-dasharray="6 5"/>` + arcs + orbs + `<g class="av-core">${nuc}</g>`);
  },
  /* Physics: a railgun. Charging coils, a hover base and a crackling energy orb at the muzzle */
  phys(level, hue, power){
    const coils = Array.from({length: 5}, (_, k) => `<rect class="blink" style="animation-delay:-${(k * .14).toFixed(2)}s;animation-duration:.8s" x="${6 + k * 9}" y="-11" width="4" height="22" rx="1.5" fill="#7ad8ff"/>`).join("");
    return avatarSVG(glow(uid(), "#7ad8ff", 44, .4) + `<g transform="translate(0 12)"><ellipse class="av-beam" cy="13" rx="24" ry="5" fill="#7ad8ff"/><ellipse cy="9" rx="20" ry="6" fill="#1a2a3a" stroke="#7ad8ff" stroke-width="2"/>`
      + `<g transform="rotate(-38)"><g class="av-recoil"><rect x="-8" y="-8" width="${58 + power * 3}" height="16" rx="5" fill="#1e2a3a" stroke="#7ad8ff" stroke-width="2"/><rect x="-6" y="-8" width="${54 + power * 3}" height="3" fill="#c8f0ff"/><rect x="-6" y="5" width="${54 + power * 3}" height="3" fill="#c8f0ff"/>${coils}</g>`
      + `<circle class="pulse" cx="${57 + power * 3}" cy="0" r="12" fill="#7ad8ff" opacity=".35"/><circle class="av-core" cx="${57 + power * 3}" cy="0" r="6" fill="#e8fbff"/><path class="blink" style="animation-duration:.35s" d="M${63 + power * 3} 0 l6 -5 l4 6 l6 -5" stroke="#e8fbff" stroke-width="1.6" fill="none"/></g>`
      + `<circle r="9" fill="#2a3a4a" stroke="#7ad8ff" stroke-width="2"/><circle r="3.4" fill="#e8fbff"/></g>`);
  },
  /* Business: a golden tycoon. A crowned gold coin with orbiting coins and sparkles */
  biz(level, hue, power){
    const gid = uid();
    const coin = `<circle r="7" fill="#e8b830" stroke="#fff4c8" stroke-width="1.4"/><text y="3" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="8" fill="#7a4f08">$</text>`;
    return avatarSVG(glow(uid(), "#ffd85a", 48, .5)
      + `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset=".5" stop-color="#e8b830"/><stop offset="1" stop-color="#a8701a"/></linearGradient></defs>`
      + `<g class="av-coin"><circle r="${22 + power}" fill="url(#${gid})" stroke="#fff4c8" stroke-width="3"/><circle r="${16 + power}" fill="none" stroke="#a8701a" stroke-width="1.6"/><text y="9" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="26" fill="#6a3f06">$</text></g>`
      + `<path d="M-15 -${21 + power} L-17 -${38 + power} L-8 -${29 + power} L0 -${42 + power} L8 -${29 + power} L17 -${38 + power} L15 -${21 + power}z" fill="#ffd23a" stroke="#fff4c8" stroke-width="1.6"/><circle cx="0" cy="-${30 + power}" r="2.6" fill="#ff3a5a"/><circle cx="-9" cy="-${27 + power}" r="2" fill="#3a8aff"/><circle cx="9" cy="-${27 + power}" r="2" fill="#3a8aff"/>`
      + star(26, -20, 5, "#fff6c8", .2) + star(-27, 14, 4, "#fff6c8", .7) + star(22, 22, 3.4, "#fff6c8", 1.1)
      + Array.from({length: 2 + power}, (_, k) => orbit(40, 16, (2.4 + k * .5).toFixed(1), (k * .9).toFixed(1), coin)).join(""));
  },
  /* History: a time lord. A cloaked figure with an hourglass staff inside a spinning clock portal */
  hist(level, hue, power){
    const ticks = Array.from({length: 12}, (_, k) => { const a = k / 12 * 6.283; return `<line x1="${f1(Math.cos(a) * 30)}" y1="${f1(Math.sin(a) * 30)}" x2="${f1(Math.cos(a) * 35)}" y2="${f1(Math.sin(a) * 35)}" stroke="#e8d8ff" stroke-width="${k % 3 ? 1.4 : 2.6}"/>`; }).join("");
    return avatarSVG(glow(uid(), "#b07aff", 54, .7) + `<g transform="scale(${(1.3 + power * .05).toFixed(2)})">`
      + `<g class="spin" style="animation-duration:16s"><circle r="35" fill="none" stroke="#b07aff" stroke-width="2.4" stroke-dasharray="2 4"/>${ticks}</g>`
      + `<g class="spin" style="animation-duration:2.4s"><circle r="27" fill="none"/><line x2="0" y2="-26" stroke="#e8d8ff" stroke-width="2" opacity=".7"/></g><g class="spin" style="animation-duration:14s"><circle r="27" fill="none"/><line x2="17" y2="0" stroke="#e8d8ff" stroke-width="3" opacity=".7"/></g>`
      + `<path class="sw" d="M0 -16 L-18 25 L18 25z" fill="#6a3aca" stroke="#d8b8ff" stroke-width="1.8"/><circle cy="-22" r="8" fill="#2a1450" stroke="#b07aff" stroke-width="2"/><circle cx="-3" cy="-22" r="1.6" fill="#ffe14a" class="blink"/><circle cx="3" cy="-22" r="1.6" fill="#ffe14a" class="blink"/>`
      + `<path d="M0 -14 v22 M0 -6 l-12 6 M0 -6 l14 -4" stroke="#e8d8ff" stroke-width="3.4" stroke-linecap="round" fill="none"/>`
      + `<line x1="15" y1="-14" x2="15" y2="26" stroke="#ffd25a" stroke-width="2.4"/><g class="pulse"><path d="M10 -24 h10 l-5 6z M10 -12 h10 l-5 -6z" fill="#ffd25a"/><circle cx="15" cy="-18" r="1.4" fill="#fff"/></g></g>`);
  },
  /* Geography: the kraken flagship. A black-sailed galleon with a glowing skull flag, tentacles curling round the hull */
  geo(level, hue, power){
    const masts = [-20, 0, 20], sails = masts.map((x, k) => { const h = k === 1 ? 40 : 30; return `<path d="M${x} 6 V${-h - 4}" stroke="#2e1a0b" stroke-width="2.6"/><path d="M${x - 1} ${-h} q14 ${h / 2} 0 ${h - 2} l-3 -6 l2 -5 l-3 -6z" fill="#1a1a24" stroke="#5affb0" stroke-width="1.4"/>`; }).join("");
    const tent = (x, sd, d) => `<path class="sw" style="animation-delay:-${d}s;animation-duration:2.6s" d="M${x} 30 q${sd * 14} -8 ${sd * 12} -24 q-2 -10 ${sd * -6} -8" stroke="#8a2a6a" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    return avatarSVG(glow(uid(), "#5affb0", 46, .35)
      + `<g class="av-waves"><path d="M-46 28 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0" stroke="#5affb0" stroke-width="2" fill="none" opacity=".7"/></g>`
      + `<g class="av-rock">${sails}<g class="av-flag"><path d="M0 -44 h-17 v12 h17z" fill="#0a0a10" stroke="#5affb0" stroke-width="1"/><circle cx="-8.5" cy="-39" r="3" fill="#5affb0" class="blink"/></g>`
      + `<path d="M-42 6 H42 L32 26 H-32 Z" fill="#2a1a2a" stroke="#5affb0" stroke-width="2"/><path d="M-40 11 H40" stroke="#5affb0" stroke-width="1.4"/>`
      + [-24, -8, 8, 24].map((x, k) => `<circle cx="${x}" cy="17" r="2.4" fill="#5affb0" class="blink" style="animation-delay:-${k * .3}s"/>`).join("")
      + tent(-34, -1, 0) + tent(34, 1, .6) + (power > 1 ? tent(-10, -1, 1.1) + tent(12, 1, 1.5) : "") + `</g>`);
  },
  /* French: the baguette royale. A golden baguette with a crown, a tricolour sash and a grand moustache */
  fr(level, hue, power){
    const gid = uid();
    const rays = Array.from({length: 12}, (_, k) => `<path d="M0 0 L${f1(Math.cos(k * .524) * 44)} ${f1(Math.sin(k * .524) * 44)} L${f1(Math.cos(k * .524 + .12) * 44)} ${f1(Math.sin(k * .524 + .12) * 44)}z" fill="#ffe58a" opacity=".22"/>`).join("");
    return avatarSVG(`<g class="spin" style="animation-duration:14s">${rays}</g>` + glow(uid(), "#ffd25a", 40, .45)
      + `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b8780e"/><stop offset=".5" stop-color="#ffe58a"/><stop offset="1" stop-color="#b8780e"/></linearGradient></defs>`
      + `<path d="M-19 37 V-6 q0 -20 19 -20 q19 0 19 20 V37z" fill="url(#${gid})" stroke="#fff4c8" stroke-width="2"/><path d="M-11 -12 q11 -6 20 0 M-13 24 q13 -6 26 0" stroke="#fff6c8" stroke-width="3" fill="none" stroke-linecap="round"/>`
      + `<path d="M-19 8 L19 26 L19 33 L-19 15z" fill="#0055a4"/><path d="M-19 15 L19 33 L19 37 L-19 22z" fill="#fff"/><path d="M-19 22 L19 37 L-19 29z" fill="#ef4135"/>`
      + `<path d="M-15 -22 L-17 -38 L-8 -30 L0 -42 L8 -30 L17 -38 L15 -22z" fill="#ffd23a" stroke="#fff4c8" stroke-width="1.6"/><circle cy="-31" r="2.6" fill="#ef4135"/><circle cx="-9" cy="-28" r="1.8" fill="#0055a4"/><circle cx="9" cy="-28" r="1.8" fill="#0055a4"/>`
      + `<g class="av-blink"><circle cx="-7" cy="-8" r="4" fill="#fff"/><circle cx="7" cy="-8" r="4" fill="#fff"/><circle cx="-6.4" cy="-7.6" r="2" fill="#1a1a1a"/><circle cx="7.6" cy="-7.6" r="2" fill="#1a1a1a"/><circle cx="-5.6" cy="-8.8" r=".8" fill="#fff"/><circle cx="8.4" cy="-8.8" r=".8" fill="#fff"/></g>`
      + `<path class="av-stache" d="M0 1 q-8 -4 -15 4 q-6 -3 -5 -8 q-3 9 6 11 q8 0 14 -4 q6 4 14 4 q9 -2 6 -11 q1 5 -5 8 q-7 -8 -15 -4z" fill="#3a2414"/><ellipse cx="0" cy="10" rx="4" ry="4.4" fill="#5a1a10"/>`
      + star(-28, -18, 4.4, "#fff6c8", .3) + star(28, -6, 3.6, "#fff6c8", .9) + star(-26, 20, 3.2, "#fff6c8", 1.4));
  },
  /* Economics: the golden bull. Gold all over, the invisible hand rising behind it, coins orbiting and a chart rocketing up */
  econ(level, hue, power){
    const coin = `<g><circle r="5.5" fill="#e0ad2a" stroke="#fff2a8" stroke-width="1.2"/><text y="3" text-anchor="middle" font-size="7" font-weight="700" fill="#7a4f08" font-family="Chakra Petch,sans-serif">$</text></g>`;
    const hand = `<g class="av-hover" opacity=".7"><path d="M-14 46 v-38 q0 -6 5 -6 q5 0 5 6 v-18 q0 -6 5 -6 q5 0 5 6 v14 q0 -6 5 -6 q5 0 5 6 v8 q0 -6 5 -6 q5 0 5 6 v28 q0 24 -22 24 q-20 0 -24 -14 l-11 -22 q-3 -6 3 -8 q4 -1 7 4z" fill="#ffe58a" fill-opacity=".25" stroke="#ffd25a" stroke-width="1.6" transform="translate(0 -6) scale(${f1(1 + power * .08)})"/></g>`;
    const base = SUBJECTS.econ._base(10, hue);
    return avatarSVG(glow(uid(), "#ffd25a", 52, .5) + hand
      + `<g transform="scale(${f1(1.08 + power * .05)})">${base.replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "")}</g>`
      + `<path class="blink" d="M-40 30 l14 -12 l10 6 l18 -26" stroke="#3ee089" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
      + Array.from({length: 2 + power}, (_, k) => orbit(46, 16, (2.4 + k * .5).toFixed(1), (k * .9).toFixed(1), coin)).join(""));
  },
  /* Psychology: the lucid dreamer. The brain wakes inside the dream: a glowing third eye, a halo of moons and stars */
  psych(level, hue, power){
    const star = `<path d="M0 -5 L1.4 -1.4 5 0 1.4 1.4 0 5 -1.4 1.4 -5 0 -1.4 -1.4z" fill="#fff2a8"/>`, moon = `<path d="M3 -6 a6 6 0 1 0 0 12 a7.5 7.5 0 0 1 0 -12z" fill="#c9a3ff"/>`;
    const base = SUBJECTS.psych._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#b07aff", 54, .55)
      + `<circle r="${f1(40 + power * 3)}" fill="none" stroke="#c9a3ff" stroke-width="1.4" stroke-dasharray="2 6" class="vspin" style="animation-duration:9s"/>`
      + `<g transform="scale(${f1(1.06 + power * .05)})">${base}</g>`
      + `<g class="blink" style="animation-duration:2.2s"><path d="M-9 -16 q9 -9 18 0 q-9 9 -18 0z" fill="#fff6c8" stroke="#ffd25a" stroke-width="1.4"/><circle cy="-16" r="3.2" fill="#7a3ab0"/></g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 22, (3 + k * .6).toFixed(1), (k * 1.2).toFixed(1), k % 2 ? moon : star)).join(""));
  },
  /* Mathematics AI: the drone swarm. The drone turns gold, scans the ground with a beam and leads a swarm of minis */
  mathai(level, hue, power){
    const mini = `<g transform="scale(.42)"><path d="M-20 -6 H20" stroke="#9ff5e8" stroke-width="4"/><ellipse class="av-rotor" cx="-20" cy="-10" rx="11" ry="2.4" fill="#9ff5e8"/><ellipse class="av-rotor" cx="20" cy="-10" rx="11" ry="2.4" fill="#9ff5e8"/><rect x="-12" y="-2" width="24" height="12" rx="5" fill="#3a4658" stroke="#9ff5e8" stroke-width="2"/></g>`;
    const base = SUBJECTS.mathai._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(`<path class="av-beam" d="M-10 14 L-34 70 H34 L10 14Z" fill="#9ff5e8"/>` + glow(uid(), "#9ff5e8", 50, .45)
      + `<g transform="scale(${f1(1.1 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(48, 18, (2.6 + k * .5).toFixed(1), (k * .8).toFixed(1), mini)).join(""));
  },
  /* ESS: the world tree. A golden crown full of life, roots glowing below, birds and butterflies circling */
  ess(level, hue, power){
    const bird = `<path d="M-6 0 q3 -4 6 0 q3 -4 6 0" stroke="#fff2a8" stroke-width="1.6" fill="none"/>`, fly = `<g><ellipse cx="-2.4" rx="2.6" ry="3.6" fill="#ff8ad5"/><ellipse cx="2.4" rx="2.6" ry="3.6" fill="#9ff5c8"/></g>`;
    const base = SUBJECTS.ess._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#8be08b", 54, .5)
      + [0,1,2,3,4].map(k => `<path class="blink" style="animation-delay:-${k * .3}s" d="M0 28 q${(k - 2) * 8} 10 ${(k - 2) * 16} 22" stroke="#ffd25a" stroke-width="2" fill="none" opacity=".8"/>`).join("")
      + `<g transform="scale(${f1(1.12 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(46, 20, (3 + k * .6).toFixed(1), (k * 1.1).toFixed(1), k % 2 ? fly : bird)).join(""));
  },
  /* Theory of Knowledge: the owl of Minerva. A golden owl with its wings spread, the Sun behind it and questions in orbit */
  tok(level, hue, power){
    const q = k => `<text text-anchor="middle" y="5" font-family="Georgia,serif" font-size="15" font-weight="700" fill="${k % 2 ? "#fff6c8" : "#ffd25a"}">${["?","!","∴","∵","≠","∀"][k % 6]}</text>`;
    const base = SUBJECTS.tok._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const wing = d => `<path d="M${d * 16} -4 q${d * 30} -22 ${d * 44} -6 q${d * -8} 2 ${d * -10} 8 q${d * 6} 2 ${d * 6} 8 q${d * -10} 0 ${d * -12} 6 q${d * 2} 6 ${d * -2} 10 q${d * -14} -4 ${d * -26} 8z" fill="#e0ad2a" stroke="#fff2a8" stroke-width="1.4"/>`;
    return avatarSVG(`<circle r="${f1(44 + power * 3)}" fill="#ffe58a" opacity=".18"/>` + glow(uid(), "#ffd25a", 56, .55)
      + Array.from({length: 12}, (_, k) => { const a = k / 12 * 6.283; return `<path class="blink" style="animation-delay:-${(k * .15).toFixed(2)}s" d="M${f1(Math.cos(a) * 40)} ${f1(Math.sin(a) * 40)} L${f1(Math.cos(a) * 52)} ${f1(Math.sin(a) * 52)}" stroke="#ffd25a" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`; }).join("")
      + `<g class="av-hover">${wing(-1)}${wing(1)}</g>`
      + `<g transform="scale(${f1(1.06 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(48, 18, (3 + k * .5).toFixed(1), (k * 1.2).toFixed(1), q(k))).join(""));
  },
  /* English A Literature: the Bookwyrm. The worm grows dragon wings made of pages and horns, breathing a stream of letters */
  lit(level, hue, power){
    const book = k => `<g transform="rotate(${k * 40})"><rect x="-6" y="-8" width="12" height="16" rx="1.5" fill="${["#8a1a1a","#1a3a8a","#3a7a4a","#e0ad2a"][k % 4]}" stroke="#fff2a8" stroke-width="1"/><path d="M-3 -4 h6" stroke="#fff2a8" stroke-width="1"/></g>`;
    const base = SUBJECTS.lit._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const wing = d => Array.from({length: 5}, (_, k) => `<path d="M${d * 8} -6 L${d * (30 + k * 3)} ${-34 + k * 12} L${d * (36 + k * 2)} ${-26 + k * 12}z" fill="${k % 2 ? "#f4ead0" : "#e8dcc0"}" stroke="#b07a2a" stroke-width="1"/>`).join("");
    return avatarSVG(glow(uid(), "#ffb03a", 56, .5)
      + `<g class="av-hover">${wing(-1)}${wing(1)}</g>`
      + `<g transform="scale(${f1(1.06 + power * .05)})">${base}<path d="M-9 -24 l-4 -10 l7 6z M9 -24 l4 -10 l-7 6z" fill="#e0ad2a" stroke="#8a5a08" stroke-width="1"/></g>`
      + `<g class="drift" style="animation-duration:1.6s"><text x="-28" y="-2" font-family="Georgia,serif" font-size="11" font-style="italic" font-weight="700" fill="#ffb03a">a b c</text></g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(48, 18, (3 + k * .5).toFixed(1), (k * 1.2).toFixed(1), book(k))).join(""));
  },
  /* Spanish ab initio: the chile de fuego. The chilli turns gold inside a ring of flames, with mini piñatas in orbit */
  es(level, hue, power){
    const pin = k => `<g transform="scale(.5)">${[0,1,2,3,4].map(j => { const a = (-90 + j * 72) * Math.PI / 180; return `<path d="M${f1(Math.cos(a - .5) * 9)} ${f1(Math.sin(a - .5) * 9)} L${f1(Math.cos(a) * 22)} ${f1(Math.sin(a) * 22)} L${f1(Math.cos(a + .5) * 9)} ${f1(Math.sin(a + .5) * 9)}z" fill="${["#ff3a8a","#ffb02e","#3ac0ff","#8a3aff","#3ae08a"][(j + k) % 5]}"/>`; }).join("")}<circle r="10" fill="#ffd25a"/></g>`;
    const base = SUBJECTS.es._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const flames = Array.from({length: 10}, (_, k) => { const a = k / 10 * 6.283, x = Math.cos(a) * 34, y = Math.sin(a) * 30;
      return `<path class="blink" style="animation-delay:-${(k * .12).toFixed(2)}s;animation-duration:.9s" d="M${f1(x - 6)} ${f1(y)} q6 -16 6 -22 q6 10 6 22 q-6 6 -12 0z" fill="${k % 2 ? "#ff6a1a" : "#ffd25a"}" opacity=".85" transform="rotate(${f1(a * 180 / Math.PI + 90)} ${f1(x)} ${f1(y)})"/>`; }).join("");
    return avatarSVG(glow(uid(), "#ff6a1a", 56, .55) + `<g class="av-hover">${flames}</g>`
      + `<g transform="scale(${f1(1.08 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), pin(k))).join(""));
  },
  /* Global Politics: Pax Mundi. A golden dove in an olive wreath, the planet behind it and the world's flags in orbit */
  glopo(level, hue, power){
    const fl = k => { const c = [["#c8102e","#fff","#012169"],["#009b3a","#fedf00","#002776"],["#de2910","#ffde00","#de2910"],["#0055a4","#fff","#ef4135"],["#ff9933","#fff","#138808"],["#006847","#fff","#ce1126"]][k % 6];
      return `<g><rect x="-8" y="-6" width="16" height="4" fill="${c[0]}"/><rect x="-8" y="-2" width="16" height="4" fill="${c[1]}"/><rect x="-8" y="2" width="16" height="4" fill="${c[2]}"/></g>`; };
    const base = SUBJECTS.glopo._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const wreath = Array.from({length: 16}, (_, k) => { const a = (110 + k * 20) * Math.PI / 180, x = Math.cos(a) * 38, y = Math.sin(a) * 38;
      return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="3" ry="7" transform="rotate(${f1(a * 180 / Math.PI + 90)} ${f1(x)} ${f1(y)})" fill="${k % 2 ? "#ffd25a" : "#e0ad2a"}"/>`; }).join("");
    return avatarSVG(`<circle r="${f1(30 + power * 2)}" fill="#1a5a9a" opacity=".55"/><path d="M-20 -12 q14 -12 28 -2 q8 14 -6 22 q-18 4 -22 -20z" fill="#3a9a4a" opacity=".55"/>` + glow(uid(), "#9fd8ff", 56, .45)
      + `<g class="vspin" style="animation-duration:40s">${wreath}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 20, (3 + k * .5).toFixed(1), (k * 1.1).toFixed(1), fl(k))).join(""));
  },
  /* SEHS: second wind. The heart turns gold in a laurel wreath, with wind streaks behind it and medals in orbit */
  sehs(level, hue, power){
    const medal = k => `<g transform="scale(.5)"><path d="M-6 -22 l6 12 l6 -12" stroke="${["#e8443a","#3a8ae8","#3ac08a"][k % 3]}" stroke-width="5" fill="none"/><circle r="10" fill="${["#ffd25a","#d8d8e0","#c87a3a"][k % 3]}" stroke="#fff2a8" stroke-width="2"/></g>`;
    const base = SUBJECTS.sehs._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const wreath = d => Array.from({length: 7}, (_, k) => { const a = (d > 0 ? 200 + k * 14 : 340 - k * 14) * Math.PI / 180, x = Math.cos(a) * 36, y = Math.sin(a) * 36 + 10;
      return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="3" ry="7" transform="rotate(${f1(a * 180 / Math.PI + 90)} ${f1(x)} ${f1(y)})" fill="#ffd25a"/>`; }).join("");
    return avatarSVG(glow(uid(), "#ff6a7a", 56, .5)
      + [0,1,2,3].map(k => `<path class="blink" style="animation-delay:-${k * .2}s" d="M-46 ${-18 + k * 12} h${24 - k * 4}" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>`).join("")
      + `<g class="av-hover">${wreath(1)}${wreath(-1)}</g>`
      + `<g transform="scale(${f1(1.06 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), medal(k))).join(""));
  },
  /* Visual Arts: chroma. The brush turns gold inside a spinning colour wheel, with paint drops of every colour in orbit */
  va(level, hue, power){
    const drop = k => `<path d="M0 -7 q6 8 0 12 q-6 -4 0 -12z" fill="hsl(${(k * 47) % 360} 90% 60%)" stroke="#fff" stroke-width=".8"/>`;
    const base = SUBJECTS.va._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    const wheel = Array.from({length: 12}, (_, k) => { const a0 = k / 12 * 6.283, a1 = (k + 1) / 12 * 6.283;
      return `<path d="M${f1(Math.cos(a0) * 30)} ${f1(Math.sin(a0) * 30)} L${f1(Math.cos(a0) * 40)} ${f1(Math.sin(a0) * 40)} A40 40 0 0 1 ${f1(Math.cos(a1) * 40)} ${f1(Math.sin(a1) * 40)} L${f1(Math.cos(a1) * 30)} ${f1(Math.sin(a1) * 30)} A30 30 0 0 0 ${f1(Math.cos(a0) * 30)} ${f1(Math.sin(a0) * 30)}z" fill="hsl(${k * 30} 90% 58%)" opacity=".8"/>`; }).join("");
    return avatarSVG(glow(uid(), "#ff7ad9", 56, .45) + `<g class="vspin" style="animation-duration:12s">${wheel}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 3 + power}, (_, k) => orbit(50, 20, (2.6 + k * .4).toFixed(1), (k * .9).toFixed(1), drop(k))).join(""));
  },
  /* Design Technology: bright spark. The idea blazes gold inside turning gears, with blueprints and tools in orbit */
  dt(level, hue, power){
    const gear = (r, n, c) => { let d = ""; for (let k = 0; k < n * 2; k++){ const a = k / (n * 2) * 6.283, rr = k % 2 ? r : r + 5; d += (k ? "L" : "M") + f1(Math.cos(a) * rr) + " " + f1(Math.sin(a) * rr); } return `<path d="${d}z" fill="none" stroke="${c}" stroke-width="3"/>`; };
    const tool = k => k % 2 ? `<g transform="scale(.6) rotate(30)"><rect x="-2" y="-2" width="4" height="16" fill="#c9c9c9"/><path d="M-6 -2 a6 6 0 1 1 12 0 l-3 -1 v-3 h-6 v3z" fill="#c9c9c9"/></g>` : `<g transform="scale(.6)"><rect x="-9" y="-7" width="18" height="14" fill="#1a3a7a" stroke="#9fd8ff"/><path d="M-6 3 l4 -6 l4 4 l4 -5" stroke="#fff" stroke-width="1.4" fill="none"/></g>`;
    const base = SUBJECTS.dt._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ffd25a", 58, .55)
      + `<g class="vspin" style="animation-duration:9s">${gear(36, 12, "#ffd25a")}</g><g class="vspin" style="animation-duration:6s;animation-direction:reverse">${gear(24, 8, "#9fd8ff")}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), tool(k))).join(""));
  },
  /* Philosophy: Sophia. The gadfly glows with wisdom inside a turning ring of Greek letters, with questions in orbit */
  phil(level, hue, power){
    const word = "ΣΟΦΙΑ·ΛΟΓΟΣ·", ring = Array.from({length: 12}, (_, k) => { const a = k / 12 * 6.283; return `<text x="${f1(Math.cos(a) * 40)}" y="${f1(Math.sin(a) * 40 + 4)}" text-anchor="middle" font-size="11" font-family="Georgia,serif" font-weight="700" fill="#c8b8ff">${word[k]}</text>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" font-family="Georgia,serif" font-weight="700" fill="${["#ffe58a", "#c8b8ff", "#ffffff"][k % 3]}">${"?∴∞Φ"[k % 4]}</text>`;
    const base = SUBJECTS.phil._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#c8b8ff", 58, .55)
      + `<g class="vspin" style="animation-duration:16s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Digital Society: viral. The post blazes inside a ring of hearts, with likes, hashtags and mentions in orbit */
  ds(level, hue, power){
    const ring = Array.from({length: 10}, (_, k) => { const a = k / 10 * 6.283; return `<text x="${f1(Math.cos(a) * 40)}" y="${f1(Math.sin(a) * 40 + 4)}" text-anchor="middle" font-size="12" fill="${k % 2 ? "#ff3a5a" : "#ff8ad8"}">♥</text>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" font-weight="700" font-family="Chakra Petch,sans-serif" fill="${["#ff4fd8", "#3ac0ff", "#ffffff"][k % 3]}">${["♥", "#", "@", "★"][k % 4]}</text>`;
    const base = SUBJECTS.ds._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ff4fd8", 58, .55)
      + `<g class="vspin" style="animation-duration:12s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.6 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Film: auteur. The clapperboard shines gold inside a turning ring of film frames, with stars in orbit */
  film(level, hue, power){
    const ring = Array.from({length: 14}, (_, k) => { const a = k / 14 * 6.283, x = f1(Math.cos(a) * 40), y = f1(Math.sin(a) * 40); return `<rect x="${f1(x - 5)}" y="${f1(y - 4)}" width="10" height="8" rx="1" fill="#1a1a1a" stroke="#ffd25a" stroke-width="1.2" transform="rotate(${f1(k / 14 * 360)} ${x} ${y})"/>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" font-weight="700" fill="${["#ffd25a", "#ffffff", "#ff3a5a"][k % 3]}">${["★", "▶", "★", "●"][k % 4]}</text>`;
    const base = SUBJECTS.film._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ffd25a", 58, .55)
      + `<g class="vspin" style="animation-duration:14s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.6 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Music: maestro. The quaver glows inside a turning ring of notes, with more notes in orbit */
  music(level, hue, power){
    const ring = Array.from({length: 12}, (_, k) => { const a = k / 12 * 6.283; return `<text x="${f1(Math.cos(a) * 40)}" y="${f1(Math.sin(a) * 40 + 5)}" text-anchor="middle" font-size="13" fill="${k % 2 ? "#ffd25a" : "#9ff5e8"}">${"♪♫♩♬"[k % 4]}</text>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="15" fill="${["#ffd25a", "#9ff5e8", "#ffffff"][k % 3]}">${"♪♫♩♬"[k % 4]}</text>`;
    const base = SUBJECTS.music._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#9ff5e8", 58, .55)
      + `<g class="vspin" style="animation-duration:12s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.6 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Theatre: leading light. The mask glows gold inside a turning ring of marquee bulbs, with stars in orbit */
  thtr(level, hue, power){
    const ring = Array.from({length: 16}, (_, k) => { const a = k / 16 * 6.283; return `<circle class="blink" style="animation-delay:-${(k % 4) * .25}s" cx="${f1(Math.cos(a) * 40)}" cy="${f1(Math.sin(a) * 40)}" r="3.4" fill="#fff8d0"/>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" fill="${["#ffcf6a", "#ffffff", "#ff5a6e"][k % 3]}">${["★", "✦", "♦", "★"][k % 4]}</text>`;
    const base = SUBJECTS.thtr._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ffcf6a", 58, .55)
      + `<g class="vspin" style="animation-duration:16s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.6 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Dance: étoile. The pointe shoe glows inside a whirl of turning ribbons, with petals and sparkles in orbit */
  dance(level, hue, power){
    const ring = Array.from({length: 8}, (_, k) => { const a = k / 8 * 6.283, x = f1(Math.cos(a) * 40), y = f1(Math.sin(a) * 40); return `<path d="M${x} ${y} q${f1(-Math.sin(a) * 14)} ${f1(Math.cos(a) * 14)} ${f1(Math.cos(a + .6) * 40 - x)} ${f1(Math.sin(a + .6) * 40 - y)}" stroke="${k % 2 ? "#ff9ad5" : "#ffd25a"}" stroke-width="3" fill="none" stroke-linecap="round"/>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" fill="${["#ff9ad5", "#ffd25a", "#ffffff"][k % 3]}">${["✦", "❀", "✦", "◆"][k % 4]}</text>`;
    const base = SUBJECTS.dance._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ff9ad5", 58, .55)
      + `<g class="vspin" style="animation-duration:6s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.4 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* World Religions: the beacon. The lamp shines gold inside a turning ring of small flames, with stars in orbit */
  rel(level, hue, power){
    const ring = Array.from({length: 12}, (_, k) => { const a = k / 12 * 6.283, x = f1(Math.cos(a) * 40), y = f1(Math.sin(a) * 40); return `<path class="blink" style="animation-delay:-${(k % 4) * .3}s" d="M${x} ${f1(+y + 4)} q-3 -6 0 -12 q3 6 0 12z" fill="#ffb03a"/>`; }).join("");
    const sym = k => `<text text-anchor="middle" y="5" font-size="13" fill="${["#ffd27a", "#ffffff", "#ffb03a"][k % 3]}">${["✦", "✧", "★", "✦"][k % 4]}</text>`;
    const base = SUBJECTS.rel._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#ffd27a", 58, .55)
      + `<g class="vspin" style="animation-duration:18s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* Social and Cultural Anthropology: the ethnographer. The notebook glows inside a turning kinship web, with kinship symbols in orbit */
  anth(level, hue, power){
    const ring = Array.from({length: 10}, (_, k) => { const a = k / 10 * 6.283, x = f1(Math.cos(a) * 40), y = f1(Math.sin(a) * 40); return (k % 2 ? `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="#ffb0c8" stroke-width="2"/>` : `<path d="M${x} ${f1(y - 5)} l5 9 h-10z" fill="none" stroke="#9fd8a8" stroke-width="2"/>`); }).join("") + `<circle r="40" fill="none" stroke="#d8d0c0" stroke-width="1" stroke-dasharray="2 5"/>`;
    const sym = k => `<text text-anchor="middle" y="5" font-size="14" font-weight="700" fill="${["#9fd8a8", "#ffb0c8", "#ffffff"][k % 3]}">${["△", "○", "◇", "="][k % 4]}</text>`;
    const base = SUBJECTS.anth._base(10, hue).replace(/^<svg[^>]*><g class="bob"><g transform="translate\(37 37\)">/, "").replace(/<\/g><\/g><\/svg>$/, "");
    return avatarSVG(glow(uid(), "#9fd8a8", 58, .55)
      + `<g class="vspin" style="animation-duration:16s">${ring}</g>`
      + `<g transform="scale(${f1(1.04 + power * .05)})">${base}</g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(50, 18, (2.8 + k * .5).toFixed(1), (k * 1.1).toFixed(1), sym(k))).join(""));
  },
  /* General knowledge: the mothership. A huge saucer with a chasing ring of lights, a beam and escort ships */
  gk(level, hue, power){
    const lights = Array.from({length: 11}, (_, k) => { const a = k / 11 * 6.283; return `<circle class="blink" style="animation-delay:-${(k * .1).toFixed(2)}s;animation-duration:1.1s" cx="${f1(Math.cos(a) * 33)}" cy="${f1(6 + Math.sin(a) * 6)}" r="2.6" fill="hsl(${(k * 33) % 360} 95% 65%)"/>`; }).join("");
    const escort = `<g transform="scale(.36)"><path d="M-12 0 a12 12 0 0 1 24 0z" fill="#9ff5c8" opacity=".7"/><ellipse cy="4" rx="26" ry="8" fill="#8a94a4" stroke="#e8f0ff" stroke-width="2"/></g>`;
    return avatarSVG(`<path class="av-beam" d="M-18 14 L-40 70 H40 L18 14Z" fill="#9ff5c8"/>` + glow(uid(), "#9ff5c8", 50, .35)
      + `<g class="av-hover"><ellipse cy="6" rx="42" ry="12" fill="#5a6474" stroke="#e8f0ff" stroke-width="2"/><ellipse cy="2" rx="30" ry="6" fill="#8a94a4"/>${lights}`
      + `<ellipse cy="-5" rx="22" ry="6" fill="#6a7484" stroke="#e8f0ff" stroke-width="1.4"/><path d="M-15 -6 a15 15 0 0 1 30 0z" fill="#9ff5c8" opacity=".55" stroke="#e8fbff" stroke-width="1.4"/>`
      + `<ellipse cx="-4" cy="-11" rx="3" ry="4" fill="#7aff9a"/><ellipse cx="5" cy="-10" rx="3" ry="4" fill="#7aff9a"/><circle cx="-4" cy="-12" r="1" fill="#0a1a10"/><circle cx="5" cy="-11" r="1" fill="#0a1a10"/></g>`
      + Array.from({length: 1 + power}, (_, k) => orbit(56, 20, (3 + k * .8).toFixed(1), (k * 1.5).toFixed(1), escort)).join(""));
  },
  /* Mathematics AA: Scipa Prime. A black-and-gold calculator with a crown, infinity eyes and symbols in orbit */
  math(level, hue, power){
    const sym = k => `<text text-anchor="middle" y="5" font-family="Georgia,serif" font-size="15" font-weight="700" fill="${k % 2 ? "#7ad8ff" : "#ffd25a"}">${["π","∑","∫","∞","√","θ"][k % 6]}</text>`;
    const keys = Array.from({length:15}, (_, k) => `<rect x="${-17 + (k % 3) * 12}" y="${4 + Math.floor(k / 3) * 6.4}" width="10" height="4.4" rx="1.3" fill="${k === 14 ? "#ffd25a" : k % 3 === 2 ? "#7a5a1a" : "#2a2418"}"/>`).join("");
    return avatarSVG(glow(uid(), "#ffd25a", 58, .4)
      + `<g class="av-hover"><path class="av-tip" d="M-24 -4 q-14 -6 -17 -24 M24 -4 q14 -6 17 -24" stroke="#ffd25a" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="-41" cy="-29" r="3.4" fill="#ffd25a"/><circle cx="41" cy="-29" r="3.4" fill="#ffd25a"/>`
      + `<rect x="-23" y="-36" width="46" height="76" rx="10" fill="#16120a" stroke="#ffd25a" stroke-width="2.6"/><rect x="-18" y="-30" width="36" height="27" rx="4" fill="#0e2a40" stroke="#7ad8ff" stroke-width="1.2"/>`
      + `<g class="av-blink"><text x="-8" y="-13" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="700" fill="#7ad8ff">∞</text><text x="8" y="-13" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="700" fill="#7ad8ff">∞</text></g>`
      + `<path d="M-7 -8 q7 5 14 0" stroke="#7ad8ff" stroke-width="1.8" fill="none" stroke-linecap="round"/>${keys}`
      + `<path d="M-17 -36 l4 -11 l6 6 l7 -10 l7 10 l6 -6 l4 11z" fill="#ffd25a" stroke="#fff4c8" stroke-width="1"/><circle cy="-44" r="2" fill="#7ad8ff"/>`
      + `<path d="M-12 40 v6 M12 40 v6" stroke="#ffd25a" stroke-width="3.4" stroke-linecap="round"/></g>`
      + Array.from({length: 2 + power}, (_, k) => orbit(46, 18, (3 + k * .5).toFixed(1), (k * 1.3).toFixed(1), sym(k))).join(""));
  },
  /* English A: the Quill. A tough dark feather pen in shades, with a gold nib, an ink aura and letters in orbit */
  eng(level, hue, power){
    const barbs = Array.from({length: 10}, (_, k) => { const t = k / 9, x = -4 + t * 17, y = 26 - t * 66;
      return `<path d="M${f1(x)} ${f1(y)} q${f1(-9 + t * 3)} ${f1(-3 - t * 3)} ${f1(-13 + t * 5)} ${f1(-9 - t * 4)} M${f1(x)} ${f1(y)} q${f1(7 - t * 2)} ${f1(-2)} ${f1(11 - t * 3)} ${f1(-6 - t * 2)}" stroke="#a87aff" stroke-width="1.1" fill="none" opacity=".75"/>`; }).join("");
    const letter = k => `<text text-anchor="middle" y="5" font-family="Georgia,serif" font-style="italic" font-size="15" font-weight="700" fill="${k % 2 ? "#ffd25a" : "#c8a8ff"}">${["A","&","¶","Æ","Q","§"][k % 6]}</text>`;
    return avatarSVG(glow(uid(), "#9a5aff", 58, .5)
      + `<g class="av-hover"><g transform="rotate(20)">`
      + `<path d="M-3 34 C-16 6 -9 -26 13 -50 C27 -30 22 -2 5 22 Z" fill="#170c26" stroke="#ffd25a" stroke-width="2"/>${barbs}`
      + `<path d="M-1 38 Q4 -6 13 -48" stroke="#ffd25a" stroke-width="2.2" fill="none"/>`
      + `<path d="M-9 -9 h22 v2 q-1 7 -7 7 q-4 0 -4.5 -5.5 h-1 q-.5 5.5 -4.5 5.5 q-5 0 -5 -7z" fill="#05030a" stroke="#ffd25a" stroke-width=".9"/><path d="M-7 -7 l3 0" stroke="#fff" stroke-width="1" opacity=".6"/>`
      + `<path d="M-1 6 q5 3 9 -2" stroke="#ffd25a" stroke-width="1.7" fill="none" stroke-linecap="round"/>`
      + `<path d="M-6 33 L0 56 L6 33z" fill="#ffd25a" stroke="#fff4c8" stroke-width="1"/><path d="M0 38 v12" stroke="#6a4a00" stroke-width="1.1"/><circle cy="38" r="1.6" fill="#6a4a00"/>`
      + `</g></g><g class="drift" style="animation-duration:2.2s"><path d="M-19 58 q-3 5 0 7 q3 -2 0 -7z" fill="#9a5aff"/></g>`
      + Array.from({length: 1 + power}, (_, k) => orbit(46, 20, (3.2 + k * .6).toFixed(1), (k * 1.4).toFixed(1), letter(k))).join(""));
  },
};

/* how each form is introduced, glows, trails and spreads */
const SPECIAL = {
  cs:  {name:"MEGA VIRUS", line:"It's spreading through the whole system.", glow:"#ff2a4a", trail:"#ff2a4a", sky:{kind:"bit", c:["255 42 74", "255 120 140", "120 0 20"], n:72}, spread:{kind:"veins", c:["#ff2a4a", "#a0001a"], glitch:true}},
  bio: {name:"SUPERBUG", line:"Antibiotic resistant. The infection is spreading.", glow:"#ff4fd8", trail:"#ff4fd8", sky:{kind:"cell", c:["255 79 216", "190 40 90"], n:34}, spread:{kind:"veins", c:["#d0206a", "#ff4fd8"]}},
  chem:{name:"QUANTUM CORE", line:"Pure energy. Matter itself is crackling.", glow:"#7af0ff", trail:"#c8f8ff", sky:{kind:"jitter", c:["200 250 255", "255 255 255", "122 240 255"], n:90}, spread:{kind:"arcs", c:["#9ff0ff", "#ffffff"]}},
  phys:{name:"RAILGUN", line:"Electromagnetic launch. Nothing out-ranges you now.", glow:"#7ad8ff", trail:"#7ad8ff", sky:{kind:"wind", c:["122 216 255", "232 251 255"], n:48}, spread:{kind:"cracks", c:["#ffd25a", "#7ad8ff"]}},
  biz: {name:"GOLDEN TYCOON", line:"You're printing money now.", glow:"#ffd85a", trail:"#ffd85a", sky:{kind:"glint", c:["255 216 90", "255 246 200"], n:64}, spread:{kind:"rays", c:["#ffd85a", "#fff2a8"]}},
  hist:{name:"TIME LORD", line:"You control time itself.", glow:"#b07aff", trail:"#c9a3ff", sky:{kind:"glint", c:["201 163 255", "255 214 160"], n:50}, spread:{kind:"rings", c:["#b07aff", "#e8d8ff", "#ffd25a"]}},
  geo: {name:"KRAKEN FLAGSHIP", line:"The kraken sails with you now.", glow:"#5affb0", trail:"#5affb0", sky:{kind:"spray", c:["90 255 176", "200 242 255"], n:54}, spread:{kind:"tentacles", c:["#8a2a6a", "#5a1a4a"]}},
  fr:  {name:"BAGUETTE ROYALE", line:"Vive la baguette ! The crown is yours.", glow:"#ffd25a", trail:"#ffe58a", sky:{kind:"petal", c:["0 85 164", "255 255 255", "239 65 53"], n:46}, spread:{kind:"ribbons", c:["#0055a4", "#ffffff", "#ef4135"]}},
  math:{name:"SCIPA PRIME", line:"Infinite precision. Every equation bends to you.", glow:"#ffd25a", trail:"#ffd25a", sky:{kind:"glyph", c:["255 210 90", "122 216 255", "255 255 255"], n:58, chars:["π","∑","∫","∞","√","θ","∂","λ","φ","e","i","10¹⁰⁰"], alpha:.75}, spread:{kind:"symbols", c:["#ffd25a", "#7ad8ff", "#ffffff"]}},
  eng: {name:"THE QUILL", line:"The pencil is gone. The quill writes whole pages now.", glow:"#9a5aff", trail:"#9a5aff", sky:{kind:"glyph", c:["90 50 170", "40 26 80", "190 140 30"], n:46, chars:["A","a","é","&","¶","§","?","!","“","”","Q","æ","—"], alpha:.55, blend:"source-over", font:"Georgia, serif"}, spread:{kind:"pages", c:["#5a2aa8", "#2a1a50"]}},
  econ:{name:"GOLDEN BULL", line:"The invisible hand is on your side now.", glow:"#ffd25a", trail:"#3ee089", sky:{kind:"glyph", c:["255 210 90", "62 224 137", "255 246 200"], n:56, chars:["$","€","¥","£","₹","%","↑","₿"], alpha:.7}, spread:{kind:"symbols", c:["#ffd25a", "#3ee089", "#fff2a8"], chars:["$","€","¥","£","₹","%","↑","₿","▲"]}},
  psych:{name:"LUCID DREAMER", line:"You're awake inside the dream. You control it now.", glow:"#b07aff", trail:"#c9a3ff", sky:{kind:"glyph", c:["201 163 255", "255 242 168", "159 216 255"], n:56, chars:["z","☾","✦","?","!","∞","∿"], alpha:.65}, spread:{kind:"symbols", c:["#c9a3ff", "#fff2a8", "#9fd8ff"], chars:["z","Z","☾","✦","?","!","∞","∿","☯"]}},
  mathai:{name:"DRONE SWARM", line:"A whole swarm is surveying the world for you now.", glow:"#9ff5e8", trail:"#9ff5e8", sky:{kind:"glyph", c:["159 245 232", "255 210 90", "255 255 255"], n:56, chars:["σ","μ","Σ","x̄","r","χ²","%","∫","0","1"], alpha:.6}, spread:{kind:"symbols", c:["#9ff5e8", "#ffd25a", "#ffffff"], chars:["σ","μ","Σ","x̄","r","χ²","p","%","∫","≈"]}},
  ess: {name:"WORLD TREE", line:"Its roots now reach every ecosystem on Earth.", glow:"#8be08b", trail:"#ffd25a", sky:{kind:"firefly", c:["220 255 120", "139 224 139", "255 210 90"], n:60}, spread:{kind:"symbols", c:["#8be08b", "#ffd25a", "#9fd8ff"], chars:["✿","❀","❧","❦","✦","☘","•"]}},
  tok: {name:"OWL OF MINERVA", line:"Wisdom takes flight at dusk. You've seen the Sun.", glow:"#ffd25a", trail:"#fff2a8", sky:{kind:"glyph", c:["255 210 90", "255 246 200", "255 255 255"], n:56, chars:["?","!","∴","∵","≠","∀","∃","¬"], alpha:.6, font:"Georgia, serif"}, spread:{kind:"symbols", c:["#ffd25a", "#fff2a8", "#ffffff"], chars:["?","!","∴","∵","≠","∀","∃","☉"]}},
  lit: {name:"BOOKWYRM", line:"The worm became a wyrm. It devours whole libraries now.", glow:"#ffb03a", trail:"#ffd27a", sky:{kind:"glyph", c:["255 210 122", "244 234 208", "255 176 58"], n:56, chars:["❦","❧","☙","✦","❝","❞","§"], alpha:.6, font:"Georgia, serif"}, spread:{kind:"symbols", c:["#ffd27a", "#f4ead0", "#ffb03a"], chars:["❦","❧","☙","❝","❞","✒","✦"]}},
  es:  {name:"CHILE DE FUEGO", line:"¡Qué picante! The whole Spanish-speaking world can feel the heat.", glow:"#ff6a1a", trail:"#ffb03a", sky:{kind:"glyph", c:["255 106 26", "255 210 90", "255 58 138"], n:56, chars:["¡","¿","ñ","á","é","í","ó","ú","!","?"], alpha:.65, font:"Georgia, serif"}, spread:{kind:"symbols", c:["#ff6a1a", "#ffd25a", "#ff3a8a", "#3ac0ff"], chars:["¡","¿","ñ","✦","❀","★"]}},
  glopo:{name:"PAX MUNDI", line:"Every nation is at the table now.", glow:"#9fd8ff", trail:"#ffd25a", sky:{kind:"glyph", c:["159 216 255", "255 210 90", "255 255 255"], n:56, chars:["☮","★","⚖","✦","✌"], alpha:.6}, spread:{kind:"symbols", c:["#9fd8ff", "#ffd25a", "#ffffff", "#8be08b"], chars:["☮","★","⚖","✦","✌","❦"]}},
  sehs:{name:"SECOND WIND", line:"Your second wind kicks in. Nothing can catch you now.", glow:"#ff6a7a", trail:"#ffd25a", sky:{kind:"glyph", c:["255 106 122", "255 210 90", "255 255 255"], n:56, chars:["♥","⚡","✦","➚","★"], alpha:.6}, spread:{kind:"symbols", c:["#ff6a7a", "#ffd25a", "#ffffff", "#3a8ae8"], chars:["♥","⚡","✦","★","❤"]}},
  va:  {name:"CHROMA", line:"Every colour there is, at the tip of your brush.", glow:"#ff7ad9", trail:"#9ff5e8", sky:{kind:"glyph", c:["255 58 138", "58 192 255", "244 208 58", "58 224 138"], n:60, chars:["●","◆","✦","✿","▲"], alpha:.6}, spread:{kind:"symbols", c:["#e8443a", "#ff9a1a", "#f4d03a", "#3ac08a", "#3a8ae8", "#8a3ae8"], chars:["●","◆","✦","✿","▲","■"]}},
  dt:  {name:"BRIGHT SPARK", line:"Your idea is in every home on Earth now.", glow:"#ffd25a", trail:"#9fd8ff", sky:{kind:"glyph", c:["255 210 90", "159 216 255", "255 255 255"], n:56, chars:["⚙","✦","▲","●","◆"], alpha:.6}, spread:{kind:"symbols", c:["#ffd25a", "#9fd8ff", "#ffffff", "#ff8a1a"], chars:["⚙","✦","▲","●","◆","♻"]}},
  phil:{name:"SOPHIA", line:"Wisdom itself. Socrates would still have questions.", glow:"#c8b8ff", trail:"#ffe58a", sky:{kind:"glyph", c:["200 184 255", "255 229 138", "255 255 255"], n:56, chars:["?","∴","∞","Φ","Σ"], alpha:.6}, spread:{kind:"symbols", c:["#c8b8ff", "#ffe58a", "#ffffff", "#9fd8ff"], chars:["?","∴","∞","Φ","Σ","Ω"]}},
  ds:  {name:"VIRAL", line:"Everyone on Earth has seen you now.", glow:"#ff4fd8", trail:"#3ac0ff", sky:{kind:"glyph", c:["255 79 216", "58 192 255", "255 255 255"], n:56, chars:["♥","#","@","★","▲"], alpha:.6}, spread:{kind:"symbols", c:["#ff4fd8", "#3ac0ff", "#ffffff", "#ff3a5a"], chars:["♥","#","@","★","▲","✓"]}},
  film:{name:"AUTEUR", line:"Your name goes above the title now.", glow:"#ffd25a", trail:"#ffffff", sky:{kind:"glyph", c:["255 210 90", "255 255 255", "255 58 90"], n:56, chars:["★","▶","●","◆"], alpha:.6}, spread:{kind:"symbols", c:["#ffd25a", "#ffffff", "#ff3a5a", "#9fd8ff"], chars:["★","▶","●","◆","✦"]}},
  music:{name:"MAESTRO", line:"The whole orchestra follows your baton now.", glow:"#9ff5e8", trail:"#ffd25a", sky:{kind:"glyph", c:["159 245 232", "255 210 90", "255 255 255"], n:56, chars:["♪","♫","♩","♬"], alpha:.6}, spread:{kind:"symbols", c:["#9ff5e8", "#ffd25a", "#ffffff", "#ff7ad9"], chars:["♪","♫","♩","♬","♯"]}},
  thtr:{name:"LEADING LIGHT", line:"Your name is up in lights now.", glow:"#ffcf6a", trail:"#ff5a6e", sky:{kind:"glyph", c:["255 207 106", "255 255 255", "255 90 110"], n:56, chars:["★","✦","♦","☾"], alpha:.6}, spread:{kind:"symbols", c:["#ffcf6a", "#ffffff", "#ff5a6e", "#c8102e"], chars:["★","✦","♦","☾","●"]}},
  dance:{name:"ÉTOILE", line:"The whole world is your stage now.", glow:"#ff9ad5", trail:"#ffd25a", sky:{kind:"glyph", c:["255 154 213", "255 210 90", "255 255 255"], n:56, chars:["✦","❀","♪","◆"], alpha:.6}, spread:{kind:"symbols", c:["#ff9ad5", "#ffd25a", "#ffffff", "#c86aff"], chars:["✦","❀","♪","◆","●"]}},
  rel: {name:"THE BEACON", line:"Your light reaches every path now.", glow:"#ffd27a", trail:"#ffb03a", sky:{kind:"glyph", c:["255 210 122", "255 176 58", "255 255 255"], n:56, chars:["✦","✧","★","•"], alpha:.6}, spread:{kind:"symbols", c:["#ffd27a", "#ffb03a", "#ffffff", "#fff8d0"], chars:["✦","✧","★","•"]}},
  anth:{name:"THE ETHNOGRAPHER", line:"Every community welcomes you back now.", glow:"#9fd8a8", trail:"#ffb0c8", sky:{kind:"glyph", c:["159 216 168", "255 176 200", "255 255 255"], n:56, chars:["△","○","◇","="], alpha:.6}, spread:{kind:"symbols", c:["#9fd8a8", "#ffb0c8", "#ffffff", "#ffd27a"], chars:["△","○","◇","=","✦"]}},
  gk:  {name:"MOTHERSHIP", line:"The whole fleet has arrived.", glow:"#9ff5c8", trail:"#9ff5c8", sky:{kind:"star", c:["255 255 255", "200 170 255", "159 245 200"], n:130}, spread:{kind:"rings", c:["#b07aff", "#9ff5c8", "#ffffff"]}},
};

for (const k of Object.keys(FORMS)){
  const S = SUBJECTS[k]; if (!S) continue;
  const base = S.avatar; S._base = base;
  S.avatar = (level, hue, power) => power > 0 ? FORMS[k](level, hue, Math.min(power, 4)) : base(level, hue);
  S.special = SPECIAL[k];
}
})();
