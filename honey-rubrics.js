/* The honey pot: the IB assessment criteria used to estimate a mark for an uploaded IA, EE or HL essay.
   This one file feeds both the page (honey.js) and the grading function: after editing it, run
     node supabase/build-grade.js
   to copy it into supabase/functions/grade/index.ts, then redeploy that function.
   Criterion names and maximum marks follow the current IB subject guides; the "focus" lines are short
   summaries of what each criterion rewards, written for this site (they are not the IB's wording). */
(function(root){
"use strict";

const EE = {
  id: "ee", kind: "ee", title: "Extended essay", short: "EE",
  guide: "IB Extended essay guide, first assessment 2027",
  limit: "4,000 words, plus a reflective statement of up to 500 words", words: 4000,
  note: "Marked out of 30. The IB sets the grade boundaries for this scale after the May 2027 session, so the A–E grade here is an estimate.",
  criteria: [
    { id: "A", name: "Framework for the essay", max: 6, focus: "A focused, researchable question; research methods suited to the subject; a structure (title page, contents, headings, citations, bibliography) that supports the argument." },
    { id: "B", name: "Knowledge and understanding", max: 6, focus: "Secure knowledge of the topic and its context; subject terminology and concepts used accurately; sources and material understood and selected well." },
    { id: "C", name: "Analysis and line of argument", max: 6, focus: "Relevant analysis of the research or data, building a reasoned, coherent line of argument that answers the research question." },
    { id: "D", name: "Discussion and evaluation", max: 8, focus: "The findings, sources and methods discussed and evaluated, different perspectives weighed, leading to a reasoned, supported conclusion." },
    { id: "E", name: "Reflection", max: 4, focus: "In the reflective statement: thoughtful reflection on the research process, decisions made and how the student's thinking developed.", reflection: true },
  ],
};

const SCI = {
  id: "sci", kind: "ia", title: "Scientific investigation", short: "IA",
  guide: "IB Biology, Chemistry and Physics guides, first assessment 2025",
  limit: "3,000 words", words: 3000,
  note: "Marked out of 24 (20% of the final grade). Moderators stop reading at 3,000 words.",
  criteria: [
    { id: "A", name: "Research design", max: 6, focus: "A focused, detailed research question in context; a methodology that suits it, with variables identified and controlled, enough relevant data, and a description detailed enough to repeat." },
    { id: "B", name: "Data analysis", max: 6, focus: "Clear, precise recording and processing of relevant data; correct, appropriate processing that accounts for uncertainties; effective tables and graphs." },
    { id: "C", name: "Conclusion", max: 6, focus: "A justified conclusion to the research question, consistent with the analysed data and explained using accepted scientific knowledge." },
    { id: "D", name: "Evaluation", max: 6, focus: "Weaknesses and limitations of the method explained with their effect on the conclusion, and realistic, relevant improvements or extensions." },
  ],
};

const CS = {
  id: "cs", kind: "ia", title: "Computational solution", short: "IA",
  guide: "IB Computer Science guide, first assessment 2027",
  limit: "the documentation word limit in the guide, plus the video", words: 2000,
  note: "Marked out of 30. The video can't be seen here, so only the documentation is judged.",
  criteria: [
    { id: "A", name: "Problem specification", max: 4, focus: "A clear problem scenario in a computational context, with specific, testable success criteria." },
    { id: "B", name: "Planning", max: 4, focus: "The problem decomposed into manageable parts, with a realistic plan for building and testing the solution." },
    { id: "C", name: "System overview", max: 6, focus: "The design of the solution: structure, data, algorithms and a test plan, clearly linked to the success criteria." },
    { id: "D", name: "Development", max: 12, focus: "The techniques used to build the product explained with evidence; complexity and ingenuity appropriate to the course; source code in the appendix." },
    { id: "E", name: "Evaluation", max: 4, focus: "The product evaluated against each success criterion using evidence, with realistic recommendations for improvement." },
  ],
};

const BIZ = {
  id: "biz", kind: "ia", title: "Business research project", short: "IA",
  guide: "IB Business Management guide, first assessment 2024",
  limit: "1,800 words, with 3–5 supporting documents", words: 1800,
  note: "Marked out of 25 at SL and HL. Moderators stop reading at 1,800 words.",
  criteria: [
    { id: "A", name: "Integration of a key concept", max: 5, focus: "One key concept (change, creativity, ethics or sustainability) woven through the project and linked to the research question." },
    { id: "B", name: "Supporting documents", max: 4, focus: "3–5 relevant, recent supporting documents (published within three years) giving enough breadth and depth; most information comes from them." },
    { id: "C", name: "Selection and application of tools and theories", max: 4, focus: "Relevant business management tools and theories chosen and applied skilfully to the documents." },
    { id: "D", name: "Analysis and evaluation", max: 5, focus: "Information from the documents analysed and evaluated, with ideas integrated into balanced, well-supported arguments." },
    { id: "E", name: "Conclusions", max: 3, focus: "Conclusions that follow from the evidence and answer the research question." },
    { id: "F", name: "Structure", max: 2, focus: "Ideas organized into a clear, logical structure." },
    { id: "G", name: "Presentation", max: 2, focus: "Title page with the research question, contents, headings, page numbers, consistent references and a bibliography." },
  ],
};

const HIST27 = {
  id: "hist27", kind: "ia", title: "Historical investigation (exams in 2027)", short: "IA",
  guide: "IB History guide, first assessment 2017 (final exams 2027)",
  limit: "2,200 words", words: 2200,
  note: "Marked out of 25. For exams in May or November 2027.",
  criteria: [
    { id: "A", name: "Identification and evaluation of sources", max: 6, focus: "A clearly stated question; two well-chosen sources explained, with detailed evaluation of their origin, purpose and content, and their value and limitations." },
    { id: "B", name: "Investigation", max: 15, focus: "A clear, well-organized, critical analysis focused on the question, using a range of evidence and evaluating different perspectives, reaching a reasoned conclusion." },
    { id: "C", name: "Reflection", max: 4, focus: "Reflection on what the investigation shows about the methods historians use and the challenges they face, clearly linked to this investigation." },
  ],
};

const HIST28 = {
  id: "hist28", kind: "ia", title: "Historical investigation (exams from 2028)", short: "IA",
  guide: "IB History guide, first assessment 2028",
  limit: "2,200 words", words: 2200,
  note: "Marked out of 24 on the new course (first exams May 2028). There is no reflection section.",
  criteria: [
    { id: "A", name: "Historical inquiry question", max: 6, focus: "A focused, appropriate question that guides the investigation, with its scope and context made clear." },
    { id: "B", name: "Sources and perspectives", max: 6, focus: "Well-chosen sources, evaluated for their value and limitations, and different historical perspectives identified and used." },
    { id: "C", name: "Synthesis and evaluation", max: 12, focus: "Evidence and perspectives synthesized into a critical, well-organized argument that answers the question with a reasoned conclusion." },
  ],
};

const GEO = {
  id: "geo", kind: "ia", title: "Fieldwork investigation", short: "IA",
  guide: "IB Geography guide (current internal assessment criteria)",
  limit: "2,500 words", words: 2500,
  note: "Marked out of 25. Moderators stop reading at 2,500 words.",
  criteria: [
    { id: "A", name: "Fieldwork question and geographic context", max: 3, focus: "A focused fieldwork question linked to the syllabus, a precise location (with a map) and the geographic theory behind it." },
    { id: "B", name: "Methods of investigation", max: 3, focus: "Primary data collection methods described and justified, suited to the question, with a sound sample." },
    { id: "C", name: "Quality and treatment of information collected", max: 6, focus: "Accurate, complete and varied presentation of the data (graphs, maps, tables) that suits the data and supports the analysis." },
    { id: "D", name: "Written analysis", max: 8, focus: "Analysis that answers the question using the data and theory, including anomalies and suitable statistics." },
    { id: "E", name: "Conclusion", max: 2, focus: "A clear conclusion to the fieldwork question, consistent with the analysis." },
    { id: "F", name: "Evaluation", max: 3, focus: "The methods and the reliability of the data evaluated, with their effect on the conclusion and realistic improvements." },
  ],
};

const MATH = {
  id: "math", kind: "ia", title: "Mathematical exploration", short: "IA",
  guide: "IB Mathematics: analysis and approaches guide, first assessment 2021",
  limit: "12–20 pages", words: 0, levels: true,
  note: "Marked out of 20. Criterion E is judged against the level you choose.",
  criteria: [
    { id: "A", name: "Presentation", max: 4, focus: "Well organized, coherent and concise: a clear aim, introduction and conclusion, easy to follow." },
    { id: "B", name: "Mathematical communication", max: 4, focus: "Correct notation, symbols and terminology; key terms defined; suitable formulae, diagrams, tables and graphs." },
    { id: "C", name: "Personal engagement", max: 3, focus: "Significant, creative personal engagement: own questions, ideas, conjectures and independent thinking." },
    { id: "D", name: "Reflection", max: 3, focus: "Critical reflection throughout on results, their meaning, limitations and links to other areas." },
    { id: "E", name: "Use of mathematics", max: 6, focus: "Relevant mathematics at the level of the course, correct and clearly understood (HL also expects sophistication and rigour)." },
  ],
};

const ENG_ESSAY = {
  id: "engessay", kind: "essay", title: "HL essay", short: "HL essay",
  guide: "IB Language A: language and literature guide, first assessment 2021",
  limit: "1,200–1,500 words", words: 1500,
  note: "Marked out of 20 (20% of the HL grade). The individual oral is spoken, so it isn't graded here.",
  criteria: [
    { id: "A", name: "Knowledge, understanding and interpretation", max: 5, focus: "Knowledge and understanding of the text or body of work, interpreted in relation to the line of inquiry and supported by references." },
    { id: "B", name: "Analysis and evaluation", max: 5, focus: "Analysis and evaluation of how the writer's choices of language, technique and style shape meaning." },
    { id: "C", name: "Focus, organization and development", max: 5, focus: "A focused, well-organized essay whose line of argument develops coherently, with well-integrated support." },
    { id: "D", name: "Language", max: 5, focus: "Clear, varied and accurate language in an appropriate register, with precise terminology." },
  ],
};

const TASKS = { ee: EE, sci: SCI, cs: CS, biz: BIZ, hist27: HIST27, hist28: HIST28, geo: GEO, math: MATH, engessay: ENG_ESSAY };

// which tasks each subject offers: the first is its internal assessment (or coursework essay)
const SUBJECTS = {
  bio:  { name: "Biology", ia: ["sci"], ee: true },
  chem: { name: "Chemistry", ia: ["sci"], ee: true },
  phys: { name: "Physics", ia: ["sci"], ee: true },
  cs:   { name: "Computer Science", ia: ["cs"], ee: true },
  biz:  { name: "Business Management", ia: ["biz"], ee: true },
  hist: { name: "History", ia: ["hist27", "hist28"], ee: true },
  geo:  { name: "Geography", ia: ["geo"], ee: true },
  math: { name: "Mathematics: analysis and approaches", ia: ["math"], ee: true },
  eng:  { name: "English A: language and literature", ia: ["engessay"], ee: true, iaNote: "The individual oral is spoken, so the honey pot grades your HL essay instead." },
  fr:   { name: "French ab initio", ia: [], ee: false, none: "French ab initio can't go in the honey pot: its internal assessment is a live oral with your teacher, and the IB doesn't allow an extended essay in an ab initio language." },
  gk:   { name: "General knowledge", ia: [], ee: false, none: "General knowledge isn't an IB subject, so there's nothing to grade." },
};

// estimated grades from the share of marks: the IB sets the real boundaries each session
const IA_BANDS = [[0.80, "7"], [0.67, "6"], [0.55, "5"], [0.43, "4"], [0.30, "3"], [0.15, "2"], [0, "1"]];
const EE_BANDS = [[0.80, "A"], [0.63, "B"], [0.43, "C"], [0.23, "D"], [0, "E"]];
const grade = (kind, got, max) => { const f = max ? got / max : 0; return ((kind === "ee") ? EE_BANDS : IA_BANDS).find(b => f >= b[0] - 1e-9)[1]; };
// each criterion: smashing it, on track, or still to work on
const verdict = (mark, max) => { const f = max ? mark / max : 0; return f >= 0.8 ? "smash" : f >= 0.5 ? "track" : "work"; };

const HONEY = { TASKS, SUBJECTS, IA_BANDS, EE_BANDS, grade, verdict, MAX_MB: 8, DAILY: 3 };
if (typeof module !== "undefined" && module.exports) module.exports = HONEY; else root.HONEY = HONEY;
})(typeof window !== "undefined" ? window : this);
