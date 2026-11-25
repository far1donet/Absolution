/* Name rules for usernames, display names, mottos and classroom nicknames.
   The same lists and logic run in the database (supabase/schema.sql, function name_problem), so a name the
   page accepts is one the server accepts, and nobody can get round the filter by skipping the page.
   It catches: rude or hateful words, leetspeak (sh1t, a55), stretched letters (fuuuck), combinations (bigass,
   killall…), prank names (Mike Hunt…) and names that pretend to be staff. Ordinary words that happen to
   contain a rude one (class, Dickens, Scunthorpe, therapist…) are allowed. */
(function(){
"use strict";
const L = {
  // banned anywhere in the name, unless it sits inside an allowed word below
  sub:["fuck","fuk","fck","shit","cunt","bitch","biatch","bastard","whore","slut","dick","cock","pussy","penis","vagina","dildo","porn","nude","boob","tits","titty","titties",
    "anal","anus","jizz","wank","twat","prick","bollock","arse","piss","sex","horny","milf","rape","rapist","molest","pedophil","paedophil","nazi","hitler","kkk","nigg",
    "negro","faggot","retard","tranny","kike","spic","chink","gook","wetback","coon","dyke","paki","raghead","towelhead","beaner","asshole","asswipe","asshat","assface",
    "assclown","dumbass","jackass","fatass","kissmyass","bigass","cumshot","cumslut","killyourself","testicle","scrotum","erection","orgasm","semen","blowjob","handjob",
    "rimjob","hentai","boner","butthole","buttplug","ballsack","ballsdeep","nutsack","onlyfans","pornhub","whitepower","siegheil","whitesupremac","killall",
    // prank names that read as something rude
    "bendover","mikehunt","mikehawk","mikeoxlong","mikelitoris","hughjass","hughjanus","hughgrection","seymourbutts","seymorebutts","philmccrack","phillmccrack",
    "amandahuggin","ivanaboner","jennytalia","dixienormous","heywoodja",
    // pretending to be staff or the game
    "admin","moderator","superuser","scipa","oneinacomputer"],
  // innocent words that contain one of the above
  allow:["scunthorpe","dickens","dickinson","dickson","benedick","dickory","cockpit","peacock","hancock","hitchcock","cocktail","cockatoo","cockatiel","cockroach","cockney",
    "cockerel","cocker","cockle","shuttlecock","woodcock","babcock","weathercock","gamecock","stopcock","analysis","analyse","analyze","analyst","analytic","analog","analects",
    "canal","banal","analgesic","manuscript","janus","uranus","essex","sussex","middlesex","sextant","sexton","sextet","sextuple","sexagesimal","grape","drape","scrape",
    "trapeze","therapeutic","therapist","parapet","rapeseed","skyscraper","scraper","draper","crape","nazir","nazim","nazia","nazif","spice","spicy","spick","despicable",
    "conspicuous","auspicious","auspice","suspicion","suspicious","perspicacious","spicule","hospice","aspic","raccoon","cocoon","tycoon","puccoon","vandyke","pakistan",
    "montenegro","negroni","niggle","niggling","snigger","sniggle","arsenal","arsenic","arsene","parse","sparse","coarse","hoarse","rehearse","marseille","pissarro",
    "prickly","prickle","swank","thorny","fukuoka","fukushima","fukuda","fukui","shitake","shiitake","pussycat","pussywillow","retardant","badminton","sexual"],
  // banned when they are a whole word in the name (big_ass, BigAss, ass99) but fine inside other words (class, title)
  tok:["ass","tit","cum","fag","fags","kys","kms","pedo","wtf","stfu","gtfo","mod","mods","staff","official","support","system","root","owner","ibo","null","undefined"],
  // hateful combinations: a violent or hateful verb followed by a group of people
  hate:"(kill|hate|gas|hang|lynch|murder|shoot|burn|nuke|exterminate)(all|the|da)?(jews?|muslims?|blacks?|gays?|whites?|asians?|arabs?|mexicans?|christians?|women|girls|trans|immigrants?|refugees?|indians?|chinese)",
  raw:["1488"],
};
const ACC_FROM = "àáâãäåāçćčèéêëēěìíîïīñńòóôõöøōùúûüūýÿžźżšśł", ACC_TO = "aaaaaaacccceeeeeeiiiiinnooooooouuuuuyyzzzssl";
const LEET_FROM = "0134578@$!|+9", LEET_TO = "oieastbasiitg";
const tr = (s, from, to) => { let o = ""; for (const ch of s){ const i = from.indexOf(ch); o += i >= 0 ? to[i] : ch; } return o; };
const collapse = s => s.replace(/(.)\1+/g, "$1");
// every position where w occurs in v must be inside an allowed word, or the name is out
function bannedIn(v, w, allow){
  for (let p = v.indexOf(w); p >= 0; p = v.indexOf(w, p + 1)){
    let covered = false;
    for (const a of allow){ if (!a.includes(w)) continue;
      for (let q = v.indexOf(a); q >= 0; q = v.indexOf(a, q + 1)) if (q <= p && q + a.length >= p + w.length){ covered = true; break; }
      if (covered) break; }
    if (!covered) return true;
  }
  return false;
}
/* null if the text is fine, otherwise "bad" (inappropriate) or "reserved" (pretends to be staff) */
function problem(text){
  const n = String(text || "");
  const low = tr(n.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase(), ACC_FROM, ACC_TO);
  const flat = low.replace(/[^a-z0-9]/g, "");
  if (L.raw.some(r => flat.includes(r))) return "bad";
  const leet = tr(low, LEET_FROM, LEET_TO), v1 = leet.replace(/[^a-z]/g, ""), v2 = collapse(v1);
  const toks = new Set([...low.split(/[^a-z]+/), ...leet.split(/[^a-z]+/)].filter(Boolean));
  const reserved = new Set(["admin","moderator","superuser","scipa","oneinacomputer","mod","mods","staff","official","support","system","root","owner","ibo","null","undefined"]);
  for (const w of L.tok) if (toks.has(w)) return reserved.has(w) ? "reserved" : "bad";
  for (const w of L.sub){
    if (bannedIn(v1, w, L.allow)) return reserved.has(w) ? "reserved" : "bad";
    // stretched letters (fuuuck, shiiit): only for words with no double letters of their own
    if (w.length >= 4 && collapse(w) === w && bannedIn(v2, w, L.allow.map(collapse))) return reserved.has(w) ? "reserved" : "bad";
  }
  if (new RegExp(L.hate).test(v1)) return "bad";
  return null;
}
const MSG = {bad:"That isn't allowed. Please choose something else.", reserved:"That name is reserved. Please choose something else."};
function username(u){
  u = String(u || "").trim();
  if (u.length < 3) return {ok:false, reason:"At least 3 characters."};
  if (u.length > 20) return {ok:false, reason:"20 characters at most."};
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(u)) return {ok:false, reason:"Start with a letter, then use letters, numbers and _ only."};
  if (u.includes("__")) return {ok:false, reason:"No double underscores."};
  const p = problem(u); return p ? {ok:false, reason:MSG[p]} : {ok:true};
}
function displayName(d){
  d = String(d || "").replace(/\s+/g, " ").trim();
  if (d.length < 2) return {ok:false, reason:"At least 2 characters."};
  if (d.length > 24) return {ok:false, reason:"24 characters at most."};
  if (!/^[\p{L}\p{N} '’.\-_]+$/u.test(d)) return {ok:false, reason:"Letters, numbers, spaces and ' . - _ only."};
  if (/https?|www/i.test(d)) return {ok:false, reason:"No links, please."};
  const p = problem(d); return p ? {ok:false, reason:MSG[p]} : {ok:true};
}
function motto(m){
  m = String(m || "").replace(/\s+/g, " ").trim();
  if (m.length > 80) return {ok:false, reason:"80 characters at most."};
  if (/[<>]/.test(m)) return {ok:false, reason:"No < or > please."};
  if (/https?:|www\./i.test(m)) return {ok:false, reason:"No links, please."};
  const p = m ? problem(m) : null; return p ? {ok:false, reason:MSG[p]} : {ok:true};
}
const api = {problem, username, displayName, motto, LISTS:L, ACC:[ACC_FROM, ACC_TO], LEET:[LEET_FROM, LEET_TO]};
if (typeof module !== "undefined" && module.exports) module.exports = api; else window.NameCheck = api;
})();
