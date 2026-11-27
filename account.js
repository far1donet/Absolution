/* Accounts: sign up with an emailed 6-digit code, then a password; sign in with email and password after that;
   "Forgot my damn password?" emails a new code to set a new password. Works with any email provider.
   Accounts, profiles and saved games live in Supabase (see supabase/SETUP.md and account-config.js).
   Games played as a guest are kept on this device and added to the account when the player signs up or in. */
(function(){
"use strict";
const CFG = window.ACCOUNT_CONFIG || {};
const CODE_LEN = CFG.codeLength || 6;
const configured = () => !!(window.__supabaseMock || (CFG.supabaseUrl && CFG.supabaseAnonKey));
const q$ = s => document.querySelector(s);
const st = { get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } }, set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} } };
const HIST = "oiac-guest-games", PEND = "oiac-pending-games", CACHE = "oiac-games-", SYNC = "oiac-sync-", KEEP = 4000;
const h = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cid = () => "g" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ================= the backend ================= */
let sb = null, loading = null, user = null, profile = null, flushing = false, toastShown = false;
const listeners = new Set();
const emit = () => { paintChip(); listeners.forEach(fn => { try { fn(); } catch(e){} }); };
// the chip on the title screen: "Sign in" or the player's skin and @username
function paintChip(){ const slot = q$("#acSlot"); if (!slot) return; slot.innerHTML = chipHTML(); const b = q$("#acChip"); if (b) b.onclick = () => open(); }
function loadScript(src){ return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = () => rej(new Error("Failed to fetch the account library")); document.head.appendChild(s); }); }
async function client(){
  if (sb) return sb;
  if (window.__supabaseMock) return (sb = window.__supabaseMock);
  if (!configured()) return null;
  if (!loading) loading = (window.supabase ? Promise.resolve() : loadScript("vendor/supabase.js")).then(() => {
    sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:false, storageKey:"oiac-auth"}});
    return sb; }).catch(e => { loading = null; throw e; });
  return loading;
}
// turn server errors into plain words (and never show raw internals)
function friendly(e){
  const m = String((e && (e.message || e.error_description || e.msg)) || e || ""), code = e && (e.code || e.status);
  if (/failed to fetch|network|load failed|fetch the account library/i.test(m)) return "Couldn't reach the server. Check your connection and try again.";
  if (/invalid login credentials/i.test(m)) return "That email and password don't match. If you've forgotten it, use Forgot my damn password.";
  if (code === "otp_expired" || /expired|invalid.*(otp|token|code)|(otp|token).*(expired|invalid)/i.test(m)) return "That code is wrong or has expired. Check your newest email, or send a new code.";
  const wait = m.match(/after (\d+) seconds?/i); if (wait) return `Too many tries. Wait ${wait[1]} seconds, then try again.`;
  if (code === 429 || /rate limit|too many/i.test(m)) return "Too many emails or tries for now. Wait a minute, then try again.";
  if (/should be different/i.test(m)) return "Your new password has to be different from your old one.";
  if (/password/i.test(m) && /(at least|characters|weak|short)/i.test(m)) return "That password is too weak. Use at least 8 characters with letters and numbers.";
  if (/signups? not allowed|signup.*disabled/i.test(m)) return "New accounts are switched off at the moment.";
  if (/unable to validate email|invalid.*email|email.*invalid/i.test(m)) return "That doesn't look like a valid email address.";
  if (/error sending .*email/i.test(m)) return "We couldn't send the email just now. Please try again in a few minutes.";
  if (/name_not_allowed/.test(m)) return "That isn't allowed. Please choose something else.";
  if (code === "23505" || /duplicate|unique|profiles_username_lower/i.test(m)) return "That username has just been taken. Try another.";
  return "Something went wrong. Please try again." + (m ? ` (${m.slice(0, 120)})` : "");
}
const ok = r => { if (r && r.error) throw r.error; return r ? r.data : null; };

async function init(){
  if (!configured()){ emit(); return; }
  try {
    const c = await client();
    const {data} = await c.auth.getSession(); await setUser(data && data.session && data.session.user);
    c.auth.onAuthStateChange((ev, session) => setTimeout(() => setUser(session && session.user), 0));
    addEventListener("online", flush);
  } catch(e){ emit(); }
}
// sign-in events and the sign-in button can both report the same user at once: load their profile once, and let both wait for it
let loadFor = null, loadP = null;
async function setUser(u){
  user = u || null;
  if (!user){ profile = null; loadFor = loadP = null; emit(); return; }
  if (loadFor !== user.id){ loadFor = user.id; profile = null;
    loadP = (async () => { try { await loadProfile(); } catch(e){} await claimGuest(); flush(); })(); }
  await loadP; emit();
}
async function loadProfile(){
  const c = await client(); if (!c || !user) return null;
  profile = ok(await c.from("profiles").select("*").eq("id", user.id).maybeSingle()) || null; emit(); return profile;
}

/* ================= saving games ================= */
const COLS = ["client_id","subject","mode","level","scope","score","prompts","gems","bonus","bonus_asked","reached","finished","answers","extra","played_at"];
const row = g => Object.fromEntries(COLS.filter(k => g[k] !== undefined).map(k => [k, g[k]]));
function save(g){
  g.client_id = g.client_id || cid(); g.played_at = g.played_at || new Date().toISOString();
  if (user){ g.owner = user.id; const q = st.get(PEND) || []; q.push(g); st.set(PEND, q.slice(-400)); flush(); }
  else { const hist = st.get(HIST) || []; hist.push(g); st.set(HIST, hist.slice(-600)); }
  emit();
}
async function flush(){
  if (!user || flushing) return;
  flushing = true;
  try {
    // keep going until the queue is empty: games saved while an upload is running go in the next batch
    for (let round = 0; round < 20 && user; round++){
      const id = user.id, mine = (st.get(PEND) || []).filter(g => g.owner === id).slice(0, 200); if (!mine.length) break;
      const c = await client();
      ok(await c.from("results").upsert(mine.map(row), {onConflict:"user_id,client_id", ignoreDuplicates:true}));
      const done = new Set(mine.map(g => g.client_id));
      st.set(PEND, (st.get(PEND) || []).filter(g => !(g.owner === id && done.has(g.client_id))));
      const cache = loadSync(id); cache.rows = [...mine.map(row), ...cache.rows]; saveSync(id, cache);   // shown until the server copy arrives
    }
  } catch(e){ /* kept in the queue and retried on the next save, sign-in or reconnect */ }
  finally { flushing = false; }
}
// games played as a guest on this device join the account the first time someone signs in here
async function claimGuest(){
  const hist = st.get(HIST) || []; if (!hist.length || !user) return;
  const q = st.get(PEND) || []; hist.forEach(g => { g.owner = user.id; q.push(g); });
  st.set(PEND, q); st.set(HIST, []);
  toast(`${hist.length} game${hist.length === 1 ? "" : "s"} you played as a guest ${hist.length === 1 ? "was" : "were"} added to your report card.`);
}
/* The device keeps a copy of the player's games, and each visit downloads only the games saved since.
   The server numbers saved games in order (id), so "everything after the highest id I have" is all that's new. */
function loadSync(id){ const c = st.get(SYNC + id); return c && Array.isArray(c.rows) ? c : {maxId:0, rows:[]}; }
function saveSync(id, c){
  for (const keep of [KEEP, 1500, 400]){
    try { localStorage.setItem(SYNC + id, JSON.stringify({maxId:c.maxId, rows:c.rows.slice(0, keep)})); return; }
    catch(e){ /* storage full: keep fewer games on the device (the account still has them all) */ }
  }
}
async function games(){
  if (!user) return (st.get(HIST) || []).slice().reverse();
  const id = user.id, cache = loadSync(id);
  try { localStorage.removeItem(CACHE + id); } catch(e){}               // the old full-download cache
  try {
    const c = await client();
    for (let page = 0; page < 20; page++){
      const data = ok(await c.from("results").select("id," + COLS.join(",")).gt("id", cache.maxId).order("id", {ascending:true}).limit(500)) || [];
      if (!data.length) break;
      const fresh = new Set(data.map(d => d.client_id));
      cache.rows = [...data.slice().reverse(), ...cache.rows.filter(r => !fresh.has(r.client_id))];
      cache.maxId = data.reduce((m, d) => Math.max(m, +d.id || 0), cache.maxId);
      if (data.length < 500) break;
    }
    cache.rows.sort((a, b) => new Date(b.played_at) - new Date(a.played_at));
    saveSync(id, cache);
  } catch(e){ /* offline or the server is asleep: show what this device already has */ }
  const have = new Set(cache.rows.map(r => r.client_id)), pend = (st.get(PEND) || []).filter(g => g.owner === id && !have.has(g.client_id)).map(row);
  return [...pend.reverse(), ...cache.rows];
}

/* ================= the account sheet ================= */
let F = {email:"", mode:"signup", resendAt:0, timer:0};
function toast(text){
  const t = document.createElement("div"); t.className = "ac-toast"; t.setAttribute("role", "status"); t.textContent = text;
  document.body.appendChild(t); setTimeout(() => { t.classList.add("bye"); setTimeout(() => t.remove(), 500); }, 3800);
}
function sheet(wide){
  let el = q$("#acct");
  if (!el){
    el = document.createElement("div"); el.id = "acct"; el.className = "acct"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "acTitle");
    el.innerHTML = `<div class="ac-card"><button class="ac-x" id="acX" aria-label="Close">✕</button><div class="ac-body" id="acBody"></div></div>`;
    document.body.appendChild(el); document.body.classList.add("in-account");
    q$("#acX").onclick = close;
    el.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    el.addEventListener("click", e => { if (e.target === el) close(); });
  }
  el.querySelector(".ac-card").classList.toggle("wide", !!wide);
  return q$("#acBody");
}
function close(){ const el = q$("#acct"); if (el){ el.id = ""; el.classList.add("bye"); setTimeout(() => el.remove(), 220); } document.body.classList.remove("in-account"); clearInterval(F.timer); emit(); }
const msg = (t, good) => { const m = q$("#acMsg"); if (m){ m.textContent = t || ""; m.classList.toggle("good", !!good); } };
const busy = (b, label) => { const g = q$("#acGo"); if (g){ g.disabled = b; if (label) g.textContent = label; } };
const steps = n => `<ol class="ac-steps" aria-label="Step ${n} of 4">${["Email","Code","Password","Profile"].map((s, i) => `<li class="${i + 1 < n ? "done" : i + 1 === n ? "on" : ""}"><i>${i + 1 < n ? "✓" : i + 1}</i>${s}</li>`).join("")}</ol>`;
const pwField = (id, label, auto) => `<label class="ac-f"><span>${label}</span><span class="ac-pw"><input id="${id}" type="password" autocomplete="${auto}" maxlength="72" required><button type="button" class="ac-eye" data-for="${id}" aria-label="Show password">Show</button></span></label>`;
function wireEyes(){ document.querySelectorAll(".ac-eye").forEach(b => b.onclick = () => { const i = q$("#" + b.dataset.for), show = i.type === "password"; i.type = show ? "text" : "password"; b.textContent = show ? "Hide" : "Show"; b.setAttribute("aria-label", show ? "Hide password" : "Show password"); }); }
const focus = s => setTimeout(() => { const f = q$(s); if (f) f.focus({preventScroll:true}); }, 60);

function open(view){
  if (!configured()) return showProfile();
  if (!view) view = !user ? "signin" : !(user.user_metadata && user.user_metadata.pw) ? "password" : !profile ? "username" : "profile";
  if (view === "password" && user){ F.mode = F.mode || "signup"; }
  ({signin:vSignIn, signup:vSignupEmail, forgot:vForgot, code:vCode, password:vPassword, username:vUsername, profile:showProfile})[view]();
}

function vSignIn(){
  const b = sheet(false);
  b.innerHTML = `<div class="ac-hero">${hero()}</div><h2 id="acTitle">Welcome back</h2><p class="ac-sub">Sign in to keep every dive on your report card.</p>
    <form id="acForm" novalidate>
      <label class="ac-f"><span>Email</span><input id="acEmail" type="email" autocomplete="email" inputmode="email" maxlength="254" required value="${h(F.email)}"></label>
      ${pwField("acPw", "Password", "current-password")}
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Sign in</button>
    </form>
    <button class="ac-link ac-forgot" id="acForgot">Forgot my damn password?</button>
    <p class="ac-alt">New here? <button class="ac-link" id="acToUp">Create an account</button></p>`;
  wireEyes(); focus(F.email ? "#acPw" : "#acEmail");
  q$("#acForgot").onclick = () => { F.email = q$("#acEmail").value.trim().toLowerCase(); vForgot(); };
  q$("#acToUp").onclick = () => { F.email = q$("#acEmail").value.trim().toLowerCase(); vSignupEmail(); };
  q$("#acForm").onsubmit = async e => { e.preventDefault();
    const email = q$("#acEmail").value.trim().toLowerCase(), password = q$("#acPw").value; F.email = email;
    if (!EMAIL_RE.test(email)) return msg("Enter the email address you signed up with.");
    if (!password) return msg("Enter your password.");
    busy(true, "Signing in…");
    try { const c = await client(); const data = ok(await c.auth.signInWithPassword({email, password})); await setUser(data.user);
      toast(`Welcome back${profile ? ", " + (profile.display_name || profile.username) : ""}!`); open(); }
    catch(err){ msg(friendly(err)); busy(false, "Sign in"); }
  };
}
function vSignupEmail(){
  F.mode = "signup";
  const b = sheet(false);
  b.innerHTML = `${steps(1)}<h2 id="acTitle">Create your account</h2>
    <p class="ac-sub">Any email works: Gmail, Outlook, Yahoo, iCloud, your school's… We'll send you a ${CODE_LEN}-digit code to check it's yours.</p>
    <form id="acForm" novalidate>
      <label class="ac-f"><span>Email</span><input id="acEmail" type="email" autocomplete="email" inputmode="email" maxlength="254" required value="${h(F.email)}"></label>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Send me a code</button>
    </form>
    <p class="ac-alt">Already have an account? <button class="ac-link" id="acToIn">Sign in</button></p>`;
  focus("#acEmail");
  q$("#acToIn").onclick = () => { F.email = q$("#acEmail").value.trim().toLowerCase(); vSignIn(); };
  q$("#acForm").onsubmit = async e => { e.preventDefault(); sendCode(q$("#acEmail").value.trim().toLowerCase(), "signup"); };
}
function vForgot(){
  F.mode = "reset";
  const b = sheet(false);
  b.innerHTML = `<div class="ac-hero sad">${hero(true)}</div><h2 id="acTitle">Forgot your password?</h2>
    <p class="ac-sub">It happens. Type your email (whatever it is: Gmail, Outlook, Yahoo…) and we'll send you a ${CODE_LEN}-digit code to choose a new one.</p>
    <form id="acForm" novalidate>
      <label class="ac-f"><span>Email</span><input id="acEmail" type="email" autocomplete="email" inputmode="email" maxlength="254" required value="${h(F.email)}"></label>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Send me a reset code</button>
    </form>
    <p class="ac-alt">Remembered it? <button class="ac-link" id="acToIn">Back to sign in</button></p>`;
  focus("#acEmail");
  q$("#acToIn").onclick = () => vSignIn();
  q$("#acForm").onsubmit = async e => { e.preventDefault(); sendCode(q$("#acEmail").value.trim().toLowerCase(), "reset"); };
}
async function sendCode(email, mode, resend){
  F.email = email; F.mode = mode;
  if (!EMAIL_RE.test(email)){ msg("That doesn't look like an email address. Check it and try again."); return; }
  if (!resend) busy(true, "Sending…");
  try {
    const c = await client();
    if (mode === "signup") ok(await c.auth.signInWithOtp({email, options:{shouldCreateUser:true}}));
    else ok(await c.auth.resetPasswordForEmail(email));
    F.resendAt = Date.now() + 60000;
    if (resend){ msg("A new code is on its way.", true); startResendTimer(); } else vCode();
  } catch(err){ msg(friendly(err)); busy(false, mode === "signup" ? "Send me a code" : "Send me a reset code"); }
}
function vCode(){
  const b = sheet(false), reset = F.mode === "reset";
  b.innerHTML = `${reset ? "" : steps(2)}<h2 id="acTitle">Check your email</h2>
    <p class="ac-sub">${reset ? "If there's an account for" : "We sent a code to"} <b>${h(F.email)}</b>${reset ? ", we've sent it a code" : ""}. Type the ${CODE_LEN} digits below. It can take a minute, so check your spam folder too.</p>
    <form id="acForm" novalidate>
      <div class="ac-code" role="group" aria-label="${CODE_LEN}-digit code">${Array.from({length:CODE_LEN}, (_, i) => `<input inputmode="numeric" autocomplete="${i ? "off" : "one-time-code"}" maxlength="${i ? 1 : CODE_LEN}" aria-label="Digit ${i + 1}" data-i="${i}">`).join("")}</div>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Verify</button>
    </form>
    <p class="ac-alt"><button class="ac-link" id="acResend" disabled>Send a new code</button> · <button class="ac-link" id="acChange">Use a different email</button></p>`;
  const boxes = [...document.querySelectorAll(".ac-code input")];
  const code = () => boxes.map(x => x.value).join("");
  const fill = (from, digits) => { digits.split("").slice(0, CODE_LEN - from).forEach((d, k) => boxes[from + k].value = d); const next = boxes[Math.min(CODE_LEN - 1, from + digits.length)]; next.focus(); if (code().length === CODE_LEN) q$("#acForm").requestSubmit(); };
  boxes.forEach((x, i) => {
    x.oninput = () => { const d = x.value.replace(/\D/g, ""); x.value = ""; if (d) fill(i, d); };
    x.onkeydown = e => { if (e.key === "Backspace" && !x.value && i > 0){ boxes[i - 1].value = ""; boxes[i - 1].focus(); e.preventDefault(); }
      if (e.key === "ArrowLeft" && i > 0) boxes[i - 1].focus(); if (e.key === "ArrowRight" && i < CODE_LEN - 1) boxes[i + 1].focus(); };
    x.onpaste = e => { const d = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, ""); if (d){ e.preventDefault(); fill(0, d); } };
  });
  focus(".ac-code input");
  q$("#acChange").onclick = () => (reset ? vForgot : vSignupEmail)();
  q$("#acResend").onclick = () => sendCode(F.email, F.mode, true);
  startResendTimer();
  q$("#acForm").onsubmit = async e => { e.preventDefault();
    const token = code(); if (token.length !== CODE_LEN) return msg(`Enter all ${CODE_LEN} digits.`);
    busy(true, "Checking…");
    try {
      const c = await client(); const data = ok(await c.auth.verifyOtp({email:F.email, token, type: reset ? "recovery" : "email"}));
      await setUser(data.user || (data.session && data.session.user));
      clearInterval(F.timer);
      // an existing player who signed up again with the same email is simply signed in
      if (!reset && user.user_metadata && user.user_metadata.pw){ if (profile){ toast("You already had an account with that email, so you're signed in."); return showProfile(); } return vUsername(); }
      vPassword();
    } catch(err){ msg(friendly(err)); busy(false, "Verify"); boxes.forEach(x => x.value = ""); boxes[0].focus(); }
  };
}
function startResendTimer(){
  clearInterval(F.timer);
  const tick = () => { const b = q$("#acResend"); if (!b){ clearInterval(F.timer); return; } const left = Math.ceil((F.resendAt - Date.now()) / 1000);
    b.disabled = left > 0; b.textContent = left > 0 ? `Send a new code in ${left} s` : "Send a new code"; if (left <= 0) clearInterval(F.timer); };
  tick(); F.timer = setInterval(tick, 500);
}
function pwRules(p, c){ return [["8 or more characters", p.length >= 8], ["a letter", /[A-Za-z]/.test(p)], ["a number", /\d/.test(p)], ["both passwords match", !!p && p === c]]; }
function strength(p){ let s = 0; if (p.length >= 8) s++; if (p.length >= 12) s++; if (/[a-z]/.test(p) && /[A-Z]/.test(p)) s++; if (/\d/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++; return Math.min(4, s); }
function vPassword(){
  const b = sheet(false), reset = F.mode === "reset", change = F.mode === "change";
  b.innerHTML = `${reset || change ? "" : steps(3)}<h2 id="acTitle">${reset || change ? "Choose a new password" : "Choose a password"}</h2>
    <p class="ac-sub">${change ? "Pick a new password for your account." : reset ? "Your email is confirmed. Pick a new password and you're back in." : "Your email is confirmed. From now on you sign in with this password, with no more codes, unless you forget it."}</p>
    <form id="acForm" novalidate>
      ${pwField("acPw", reset ? "New password" : "Password", "new-password")}
      <div class="ac-meter" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      ${pwField("acPw2", "Confirm password", "new-password")}
      <ul class="ac-rules" id="acRules"></ul>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Save password</button>
    </form>`;
  wireEyes(); focus("#acPw");
  const upd = () => { const p = q$("#acPw").value, c = q$("#acPw2").value, s = strength(p);
    document.querySelectorAll(".ac-meter i").forEach((x, i) => x.className = i < s ? `on s${s}` : "");
    q$("#acRules").innerHTML = pwRules(p, c).map(([t, good]) => `<li class="${good ? "ok" : ""}">${good ? "✓" : "○"} ${t}</li>`).join(""); };
  q$("#acPw").oninput = upd; q$("#acPw2").oninput = upd; upd();
  q$("#acForm").onsubmit = async e => { e.preventDefault();
    const p = q$("#acPw").value, c = q$("#acPw2").value, bad = pwRules(p, c).find(r => !r[1]);
    if (bad) return msg(p && c && p !== c ? "The two passwords don't match." : `Your password needs ${bad[0]}.`);
    busy(true, "Saving…");
    try { const cl = await client(); const data = ok(await cl.auth.updateUser({password:p, data:{pw:true}})); user = data.user || user;
      F.mode = "signup";
      if (profile){ toast(reset ? "Password changed. You're signed in." : change ? "Password changed." : "Password saved."); showProfile(); } else vUsername(); }
    catch(err){ msg(friendly(err)); busy(false, "Save password"); }
  };
}
function vUsername(){
  const b = sheet(false), subj = typeof SUBJECT_ORDER !== "undefined" ? SUBJECT_ORDER : [];
  const cur = (typeof M !== "undefined" && M && M.key) || "cs";
  b.innerHTML = `${steps(4)}<h2 id="acTitle">Make your character</h2>
    <p class="ac-sub">Pick a username (it's how you'll appear), a skin and a colour. You can change these later.</p>
    <form id="acForm" novalidate>
      <label class="ac-f"><span>Username</span><span class="ac-at"><b>@</b><input id="acUser" maxlength="20" autocomplete="username" autocapitalize="off" spellcheck="false" required placeholder="e.g. rare_answer_rita"></span></label>
      <p class="ac-hint" id="acUserHint">3–20 letters, numbers or _, starting with a letter.</p>
      <label class="ac-f"><span>Display name <small>(optional)</small></span><input id="acName" maxlength="24" autocomplete="nickname" placeholder="Shown on your report card"></label>
      <fieldset class="ac-skins"><legend>Skin</legend><div class="ac-skin-grid">${subj.map(k => `<label class="ac-skin" title="${h(SUBJECTS[k].name)}"><input type="radio" name="acSkin" value="${k}" ${k === cur ? "checked" : ""}><span class="ac-av" data-k="${k}"></span></label>`).join("")}</div></fieldset>
      <label class="ac-f"><span>Colour</span><input id="acHue" type="range" min="0" max="359" value="${(typeof BX !== "undefined" && BX[2] && BX[2].hue) || 200}" class="ac-hue"></label>
      <p class="ac-msg" id="acMsg" role="alert"></p>
      <button class="btn ac-go" id="acGo" type="submit">Create my profile</button>
    </form>`;
  const paint = () => { const hue = +q$("#acHue").value; document.querySelectorAll(".ac-av").forEach(s => s.innerHTML = SUBJECTS[s.dataset.k].avatar(4, hue, 0)); q$("#acHue").style.setProperty("--h", hue); };
  q$("#acHue").oninput = paint; paint(); focus("#acUser");
  let seq = 0;
  q$("#acUser").oninput = () => { const u = q$("#acUser").value.trim(), hint = q$("#acUserHint"), my = ++seq; hint.className = "ac-hint";
    if (!u){ hint.textContent = "3–20 letters, numbers or _, starting with a letter."; return; }
    const v = NameCheck.username(u); if (!v.ok){ hint.textContent = v.reason; hint.classList.add("bad"); return; }
    hint.textContent = "Checking…";
    setTimeout(async () => { if (my !== seq) return;
      try { const c = await client(); const free = ok(await c.rpc("username_available", {n:u})); if (my !== seq) return;
        hint.textContent = free ? `✓ @${u} is yours if you want it` : `@${u} is taken. Try another.`; hint.classList.add(free ? "good" : "bad"); }
      catch(e){ if (my === seq) hint.textContent = ""; } }, 350); };
  q$("#acForm").onsubmit = async e => { e.preventDefault();
    const username = q$("#acUser").value.trim(), dn = q$("#acName").value.replace(/\s+/g, " ").trim();
    const v = NameCheck.username(username); if (!v.ok) return msg("Username: " + v.reason);
    if (dn){ const d = NameCheck.displayName(dn); if (!d.ok) return msg("Display name: " + d.reason); }
    busy(true, "Creating…");
    try { const c = await client();
      profile = ok(await c.from("profiles").insert({id:user.id, username, display_name:dn || null, skin:(q$('input[name="acSkin"]:checked') || {}).value || "cs", hue:+q$("#acHue").value}).select().single());
      emit(); toast(`Welcome, @${profile.username}! Your games now save to your report card.`); showProfile(); }
    catch(err){ msg(friendly(err)); busy(false, "Create my profile"); }
  };
}
// a little picture for the top of the sign-in sheets: the current subject's skin
function hero(sad){ try { const k = (typeof M !== "undefined" && M && M.key) || "cs"; return `<span class="ac-hero-av${sad ? " sad" : ""}">${SUBJECTS[k].avatar(sad ? 0 : 6, (typeof BX !== "undefined" && BX[3] && BX[3].hue) || 200, 0)}</span>`; } catch(e){ return ""; } }

/* ================= profile ================= */
async function showProfile(){
  const b = sheet(true);
  b.innerHTML = `<div class="pf-loading" aria-live="polite">Loading your report card…</div>`;
  const list = await games();
  if (!q$("#acBody")) return;
  window.Profile.render(q$("#acBody"), {user, profile, games:list, configured:configured(), guest:!user,
    open, close, toast, friendly,
    async saveProfile(patch){ const c = await client(); profile = ok(await c.from("profiles").update(patch).eq("id", user.id).select().single()); emit(); return profile; },
    async checkUsername(u){ const c = await client(); return ok(await c.rpc("username_available", {n:u})); },
    async signOut(){ const c = await client(); try { await c.auth.signOut({scope:"local"}); } catch(e){} await setUser(null); toast("Signed out. See you soon!"); close(); },
    async deleteAccount(){ const c = await client(); ok(await c.rpc("delete_me")); try { await c.auth.signOut(); } catch(e){}
      const id = user && user.id; if (id){ try { localStorage.removeItem(CACHE + id); localStorage.removeItem(SYNC + id); } catch(e){} st.set(PEND, (st.get(PEND) || []).filter(g => g.owner !== id)); }
      await setUser(null); toast("Your account and everything saved with it has been deleted."); close(); },
    changePassword(){ F.mode = "change"; vPassword(); },
  });
}

/* ================= what the rest of the game sees ================= */
function chipHTML(){
  if (user && profile){ const s = SUBJECTS[profile.skin] || SUBJECTS.cs;
    return `<button class="ac-chip in" id="acChip" aria-label="My profile"><span class="ac-chip-av">${s.avatar(4, profile.hue, 0)}</span><span><b>@${h(profile.username)}</b><small>My profile</small></span></button>`; }
  if (user) return `<button class="ac-chip" id="acChip"><span class="ac-chip-ic" aria-hidden="true">✎</span><span><b>Finish signing up</b><small>almost there</small></span></button>`;
  if (!configured()) return `<button class="ac-chip" id="acChip"><span class="ac-chip-ic" aria-hidden="true">★</span><span><b>My report card</b><small>on this device</small></span></button>`;
  return `<button class="ac-chip" id="acChip"><span class="ac-chip-ic" aria-hidden="true">👤</span><span><b>Sign in</b><small>save your report card</small></span></button>`;
}
window.Account = {
  configured, open, close, save, games, chipHTML, paintChip, toast,
  get user(){ return user; }, get profile(){ return profile; },
  onChange(fn){ listeners.add(fn); return () => listeners.delete(fn); },
};
init();
})();
