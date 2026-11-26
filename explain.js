/* Explanations for accepted answers, written in the style of an IB markscheme: what earns the mark and why.
   EXPLAIN[promptId][answerLabel] = explanation. Each subject's explanations live in explain/<subject>.js
   (EX(promptId, {answerLabel: text, ...})) and are downloaded only when that subject is opened. */
const EXPLAIN = {};
function EX(id, o){ EXPLAIN[id] = Object.assign(EXPLAIN[id] || {}, o); }
const explainLoaded = {};
function loadExplain(k){
  const S = SUBJECTS[k];
  if (explainLoaded[k] || !S || !S.prompts.some(p => p.ans)) return;
  explainLoaded[k] = true;
  const s = document.createElement("script"); s.src = "explain/" + k + ".js"; s.async = true;
  s.onerror = () => { explainLoaded[k] = false; };
  document.head.appendChild(s);
}
