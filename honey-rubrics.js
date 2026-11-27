/* The honey pot: the IB assessment criteria students mark their own IA, EE or HL essay against.
   Criterion names and maximum marks follow the current IB subject guides. The "focus" line and the "look"
   statements are short summaries of what the top markband rewards, written for this site (they are not the
   IB's wording). Students rate each statement Not yet / Partly / Mostly / Fully, and the criterion's mark is
   that share of its maximum, so the marks always stay on the IB's scale. Nothing is sent anywhere. */
(function(root){
"use strict";

const EE = {
  id: "ee", kind: "ee", title: "Extended essay", short: "EE",
  guide: "IB Extended essay guide, first assessment 2027",
  limit: "4,000 words, plus a reflective statement of up to 500 words", words: 4000,
  note: "Marked out of 30. The IB sets the grade boundaries for this scale after the May 2027 session, so the A–E grade here is an estimate.",
  criteria: [
    { id: "A", name: "Framework for the essay", max: 6, focus: "A focused, researchable question; research methods suited to the subject; a structure that supports the argument.",
      look: ["The research question is focused, clear and can be answered well in 4,000 words.",
             "The research methods suit the question and the subject (or both subjects, for an interdisciplinary essay).",
             "The structure supports the argument: title page, contents, headings, page numbers, consistent citations and a bibliography."] },
    { id: "B", name: "Knowledge and understanding", max: 6, focus: "Secure knowledge of the topic and its context; subject terminology and concepts used accurately; sources understood and selected well.",
      look: ["It shows secure, relevant knowledge of the topic and its context.",
             "The subject's terminology and concepts are used accurately and consistently.",
             "The sources and material are relevant, well chosen and clearly understood."] },
    { id: "C", name: "Analysis and line of argument", max: 6, focus: "Relevant analysis of the research or data, building a reasoned, coherent line of argument that answers the research question.",
      look: ["The research, data or sources are analysed, not just described.",
             "The analysis stays relevant to the research question throughout.",
             "A clear, coherent line of argument builds through the essay and answers the question."] },
    { id: "D", name: "Discussion and evaluation", max: 8, focus: "Findings, sources and methods discussed and evaluated, different perspectives weighed, leading to a reasoned, supported conclusion.",
      look: ["The findings are discussed and their significance is explained.",
             "The sources and methods are evaluated: their strengths, limitations and reliability.",
             "Different perspectives or interpretations are weighed against each other.",
             "The conclusion is reasoned, supported by the evidence and answers the question."] },
    { id: "E", name: "Reflection", max: 4, focus: "In the reflective statement: thoughtful reflection on the research process, the decisions made and how your thinking developed.",
      look: ["The reflective statement explains key decisions made during the research, and why.",
             "It shows how your thinking and understanding developed through the process.",
             "It looks critically at the research process, including what worked and what you'd change."] },
  ],
};

const SCI = {
  id: "sci", kind: "ia", title: "Scientific investigation", short: "IA",
  guide: "IB Biology, Chemistry and Physics guides, first assessment 2025",
  limit: "3,000 words", words: 3000,
  note: "Marked out of 24 (20% of the final grade). Moderators stop reading at 3,000 words.",
  criteria: [
    { id: "A", name: "Research design", max: 6, focus: "A focused research question in context, and a method that suits it, described well enough to repeat.",
      look: ["The research question is focused, detailed and set in its scientific context.",
             "The method suits the question: the independent, dependent and controlled variables are identified, with how each is controlled.",
             "Enough relevant data is planned for: a sensible range, enough values and repeats.",
             "The method is described in enough detail for someone else to repeat it."] },
    { id: "B", name: "Data analysis", max: 6, focus: "Clear, precise recording and processing of relevant data, accounting for uncertainties, with effective tables and graphs.",
      look: ["The raw data is recorded clearly and precisely, with units and uncertainties.",
             "The data is processed correctly, in a way that's relevant to the research question.",
             "Uncertainties are considered and carried through the processing.",
             "Tables and graphs are clear, labelled and suit the data."] },
    { id: "C", name: "Conclusion", max: 6, focus: "A justified conclusion to the research question, consistent with the analysed data and explained using accepted science.",
      look: ["The conclusion clearly answers the research question.",
             "It's justified by, and consistent with, the analysed data, including trends and uncertainties.",
             "It's explained and compared with accepted scientific knowledge or published values."] },
    { id: "D", name: "Evaluation", max: 6, focus: "Weaknesses and limitations of the method explained with their effect on the conclusion, and realistic improvements.",
      look: ["The weaknesses and limitations of the method are identified.",
             "Their effect on the results and the conclusion is explained.",
             "Realistic, relevant improvements or extensions are suggested."] },
  ],
};

const CS = {
  id: "cs", kind: "ia", title: "Computational solution", short: "IA",
  guide: "IB Computer Science guide, first assessment 2027",
  limit: "the documentation word limit in the guide, plus the video", words: 2000,
  note: "Marked out of 30. Mark the documentation here; your video is marked alongside it.",
  criteria: [
    { id: "A", name: "Problem specification", max: 4, focus: "A clear problem scenario in a computational context, with specific, testable success criteria.",
      look: ["The problem, and who it's for, is clearly described in a real computational context.",
             "The success criteria are specific, measurable and can be tested."] },
    { id: "B", name: "Planning", max: 4, focus: "The problem broken down into manageable parts, with a realistic plan for building and testing the solution.",
      look: ["The problem is broken down into manageable parts.",
             "There's a realistic plan, for example a timeline, for building and testing the solution."] },
    { id: "C", name: "System overview", max: 6, focus: "The design of the solution: structure, data, algorithms and a test plan, clearly linked to the success criteria.",
      look: ["The design shows how the solution is structured, for example with diagrams of its parts or classes.",
             "The data structures and key algorithms are designed and explained.",
             "A test plan is linked to each success criterion."] },
    { id: "D", name: "Development", max: 12, focus: "The techniques used to build the product explained with evidence, with complexity and ingenuity suited to the course.",
      look: ["The techniques used to build the product are explained with evidence, such as code extracts and screenshots.",
             "The techniques show complexity and ingenuity suited to the course.",
             "The choice of each technique is justified: why it was used and how it helps meet the success criteria.",
             "The evidence shows the product working, with the full source code in the appendix."] },
    { id: "E", name: "Evaluation", max: 4, focus: "The product evaluated against each success criterion using evidence, with realistic recommendations for improvement.",
      look: ["The product is evaluated against each success criterion, using evidence such as test results or user feedback.",
             "Realistic recommendations for further improvement are given."] },
  ],
};

const BIZ = {
  id: "biz", kind: "ia", title: "Business research project", short: "IA",
  guide: "IB Business Management guide, first assessment 2024",
  limit: "1,800 words, with 3–5 supporting documents", words: 1800,
  note: "Marked out of 25 at SL and HL. Moderators stop reading at 1,800 words.",
  criteria: [
    { id: "A", name: "Integration of a key concept", max: 5, focus: "One key concept (change, creativity, ethics or sustainability) woven through the project and linked to the research question.",
      look: ["One key concept (change, creativity, ethics or sustainability) is chosen and clearly linked to the research question.",
             "The concept runs through the whole project, not just the introduction and conclusion."] },
    { id: "B", name: "Supporting documents", max: 4, focus: "3–5 relevant, recent supporting documents giving enough breadth and depth; most information comes from them.",
      look: ["There are 3–5 supporting documents, all published within three years of submission.",
             "They're relevant and give enough breadth and depth to answer the research question.",
             "Most of the information in the project comes from them."] },
    { id: "C", name: "Selection and application of tools and theories", max: 4, focus: "Relevant business management tools and theories chosen and applied skilfully to the documents.",
      look: ["The business management tools and theories chosen are relevant to the research question.",
             "They're applied skilfully to the information in the supporting documents, not just described."] },
    { id: "D", name: "Analysis and evaluation", max: 5, focus: "Information from the documents analysed and evaluated, with ideas integrated into balanced, well-supported arguments.",
      look: ["Information from the supporting documents is analysed, not just described.",
             "It's evaluated, with different points of view weighed.",
             "The ideas come together into balanced, well-supported arguments."] },
    { id: "E", name: "Conclusions", max: 3, focus: "Conclusions that follow from the evidence and answer the research question.",
      look: ["The conclusions follow from the evidence in the project.",
             "They answer the research question."] },
    { id: "F", name: "Structure", max: 2, focus: "Ideas organized into a clear, logical structure.",
      look: ["The ideas are organized into a clear, logical structure that's easy to follow."] },
    { id: "G", name: "Presentation", max: 2, focus: "Title page with the research question, contents, headings, page numbers, consistent references and a bibliography.",
      look: ["There's a title page with the research question, a contents page, headings and page numbers.",
             "References are consistent and there's a full bibliography."] },
  ],
};

const ECON = {
  id: "econ", kind: "ia", title: "Portfolio commentary", short: "IA",
  guide: "IB Economics guide, first assessment 2022",
  limit: "800 words per commentary", words: 800,
  note: "Each of your three commentaries is marked out of 14 (criteria A–E). The portfolio adds up to 3 marks for meeting the rubric requirements (criterion F), for 45 in all. Drop in one commentary at a time.",
  criteria: [
    { id: "A", name: "Diagrams", max: 3, focus: "Relevant, accurate and correctly labelled diagrams, each fully explained and linked to the article.",
      look: ["The diagrams are relevant to the article and accurate.",
             "They are fully and correctly labelled.",
             "Each diagram is fully explained and applied to the situation in the article."] },
    { id: "B", name: "Terminology", max: 2, focus: "Economic terminology relevant to the article, used appropriately throughout.",
      look: ["Economic terms relevant to the article are used accurately throughout the commentary."] },
    { id: "C", name: "Application and analysis", max: 3, focus: "Relevant economic theory applied to the article, with effective analysis.",
      look: ["Relevant economic theory is applied to the article.",
             "The analysis is effective and stays linked to the article throughout."] },
    { id: "D", name: "Key concept", max: 3, focus: "One key concept identified and explained, with its link to the article developed.",
      look: ["One key concept is identified and clearly linked to the article.",
             "The link is developed through the commentary, not just mentioned at the start."] },
    { id: "E", name: "Evaluation", max: 3, focus: "Judgements supported by effective and balanced reasoning.",
      look: ["The commentary makes judgements supported by effective reasoning.",
             "It weighs different perspectives, such as stakeholders, the short and long run, or the limits of a policy."] },
  ],
};

const PSY = {
  id: "psych", kind: "ia", title: "Research proposal", short: "IA",
  guide: "IB Psychology guide, first assessment 2027",
  limit: "2,200 words", words: 2200,
  note: "Marked out of 24 at SL and HL. You design a study using one of the methods from your class practicals, but you don't carry it out. The criterion names come from teachers' guides to the new course, so check the full descriptors with your teacher.",
  criteria: [
    { id: "A", name: "Introduction", max: 6, focus: "A focused research question, grounded in relevant psychological theory and research, with a clear aim.",
      look: ["The research question is focused and clearly stated.",
             "It is grounded in relevant psychological theory, studies and concepts.",
             "The aim, and the hypothesis or expected findings, are clear."] },
    { id: "B", name: "Research methodology", max: 6, focus: "A suitable research method and design, with clearly defined variables or focus, justified for the question.",
      look: ["The chosen method (experiment, interview, observation or survey) suits the research question.",
             "The variables or the focus of the study are clearly defined and operationalized.",
             "The choice of method, design and sample is justified."] },
    { id: "C", name: "Data collection", max: 6, focus: "A clear, workable plan for collecting data, including sampling, materials and ethics.",
      look: ["The procedure is described in enough detail for someone to carry it out.",
             "The sample, materials and how data will be recorded are explained.",
             "Ethical considerations are addressed and built into the procedure."] },
    { id: "D", name: "Discussion", max: 6, focus: "A forward-looking discussion of what the study could show, its strengths and limitations, and how it could be improved.",
      look: ["Strengths and limitations of the proposed study are discussed.",
             "It considers how the data would be analysed and what the possible findings would mean.",
             "It links back to theory and suggests improvements or further research."] },
  ],
};

const ESS_IA = {
  id: "ess", kind: "ia", title: "Individual investigation", short: "IA",
  guide: "IB Environmental systems and societies guide, first assessment 2026",
  limit: "3,000 words", words: 3000,
  note: "Marked out of 30 (25% of the SL grade, 20% at HL). The criterion names come from teachers' guides to the new course, and sources differ slightly, so check the full descriptors with your teacher.",
  criteria: [
    { id: "A", name: "Research question and inquiry", max: 4, focus: "A focused research question set in its environmental and local or global context.",
      look: ["The research question is focused and clearly stated.",
             "It is set in a relevant environmental context, local or global, with the issue explained."] },
    { id: "B", name: "Strategy", max: 4, focus: "A justified strategy for the investigation, including the perspectives involved.",
      look: ["The overall approach to answering the question is planned and justified.",
             "Different perspectives or stakeholders connected to the issue are considered."] },
    { id: "C", name: "Method", max: 4, focus: "Methods that suit the question, with sampling, data collection and ethical and safety issues addressed.",
      look: ["The methods suit the research question and could be repeated.",
             "Sampling, the amount of data, and risk, ethical and environmental issues are addressed."] },
    { id: "D", name: "Treatment of data", max: 6, focus: "Relevant data recorded, processed and presented accurately and appropriately.",
      look: ["The data are recorded clearly and accurately.",
             "They are processed correctly, e.g. with statistics or diversity indices where useful.",
             "Tables, graphs and maps present the data clearly."] },
    { id: "E", name: "Analysis and conclusion", max: 6, focus: "Analysis that identifies trends and patterns, leading to a conclusion that answers the question.",
      look: ["Trends, patterns and anomalies in the data are identified and explained.",
             "The analysis uses relevant ESS knowledge and theory.",
             "The conclusion answers the research question and is supported by the data."] },
    { id: "F", name: "Evaluation", max: 6, focus: "The method and conclusion evaluated, with realistic improvements and links to the wider environmental issue.",
      look: ["Strengths and weaknesses of the method are evaluated, with their effect on the conclusion.",
             "Realistic improvements and further research are suggested.",
             "The findings are linked back to the wider environmental issue, e.g. a possible solution."] },
  ],
};

const HIST27 = {
  id: "hist27", kind: "ia", title: "Historical investigation (exams in 2027)", short: "IA", variant: "Exams in 2027",
  guide: "IB History guide, first assessment 2017 (final exams 2027)",
  limit: "2,200 words", words: 2200,
  note: "Marked out of 25. For exams in May or November 2027.",
  criteria: [
    { id: "A", name: "Identification and evaluation of sources", max: 6, focus: "A clearly stated question; two well-chosen sources explained and evaluated for their value and limitations.",
      look: ["The question is clearly stated and appropriate.",
             "The sources are relevant, and their relevance to the investigation is explained.",
             "Two sources are analysed in detail: their origin, purpose and content, and from these their value and limitations."] },
    { id: "B", name: "Investigation", max: 15, focus: "A clear, well-organized, critical analysis focused on the question, using evidence and perspectives, reaching a reasoned conclusion.",
      look: ["The investigation is clear, coherent and well organized.",
             "It stays focused on the question with critical analysis, not narrative.",
             "It uses a range of relevant, accurate evidence to support its points.",
             "Different perspectives are evaluated.",
             "It reaches a reasoned conclusion that fits the evidence."] },
    { id: "C", name: "Reflection", max: 4, focus: "Reflection on what the investigation shows about the methods historians use and the challenges they face.",
      look: ["It reflects on what the investigation showed about the methods historians use.",
             "It reflects on the challenges and limitations historians face.",
             "The reflection is clearly linked to your own investigation."] },
  ],
};

const HIST28 = {
  id: "hist28", kind: "ia", title: "Historical investigation (exams from 2028)", short: "IA", variant: "Exams from 2028",
  guide: "IB History guide, first assessment 2028",
  limit: "2,200 words", words: 2200,
  note: "Marked out of 24 on the new course (first exams May 2028). There is no reflection section.",
  criteria: [
    { id: "A", name: "Historical inquiry question", max: 6, focus: "A focused, appropriate question that guides the investigation, with its scope and context made clear.",
      look: ["The inquiry question is focused, appropriate and guides the whole investigation.",
             "Its scope (time, place and focus) and its historical context are made clear."] },
    { id: "B", name: "Sources and perspectives", max: 6, focus: "Well-chosen sources, evaluated for their value and limitations, and different historical perspectives identified and used.",
      look: ["The sources are well chosen and relevant to the question.",
             "Their value and limitations are evaluated.",
             "Different historical perspectives are identified and used."] },
    { id: "C", name: "Synthesis and evaluation", max: 12, focus: "Evidence and perspectives synthesized into a critical, well-organized argument that answers the question with a reasoned conclusion.",
      look: ["Evidence and perspectives are brought together into one critical argument.",
             "The argument is well organized and stays focused on the question.",
             "Each point is supported by accurate, relevant evidence.",
             "It reaches a reasoned conclusion that answers the question."] },
  ],
};

const GEO = {
  id: "geo", kind: "ia", title: "Fieldwork investigation", short: "IA",
  guide: "IB Geography guide (current internal assessment criteria)",
  limit: "2,500 words", words: 2500,
  note: "Marked out of 25. Moderators stop reading at 2,500 words.",
  criteria: [
    { id: "A", name: "Fieldwork question and geographic context", max: 3, focus: "A focused fieldwork question linked to the syllabus, a precise location and the geographic theory behind it.",
      look: ["The fieldwork question is focused and linked to the Geography syllabus.",
             "The location is precise and mapped, and the geographic theory or concept behind it is explained."] },
    { id: "B", name: "Methods of investigation", max: 3, focus: "Primary data collection methods described and justified, suited to the question, with a sound sample.",
      look: ["The primary data collection methods are described clearly.",
             "They're justified, suit the question and use a sound sample."] },
    { id: "C", name: "Quality and treatment of information collected", max: 6, focus: "Accurate, complete and varied presentation of the data that suits the data and supports the analysis.",
      look: ["The data is presented accurately and completely.",
             "A variety of suitable techniques is used: graphs, maps and tables that suit the data.",
             "The presentation supports the analysis."] },
    { id: "D", name: "Written analysis", max: 8, focus: "Analysis that answers the question using the data and theory, including anomalies and suitable statistics.",
      look: ["The analysis uses the data and the geographic theory to answer the question.",
             "Anomalies are identified and explained.",
             "Suitable statistical techniques are used where they help."] },
    { id: "E", name: "Conclusion", max: 2, focus: "A clear conclusion to the fieldwork question, consistent with the analysis.",
      look: ["A clear conclusion answers the fieldwork question and is consistent with the analysis."] },
    { id: "F", name: "Evaluation", max: 3, focus: "The methods and the reliability of the data evaluated, with their effect on the conclusion and realistic improvements.",
      look: ["The methods and the reliability of the data are evaluated.",
             "Their effect on the conclusion is explained, with realistic improvements."] },
  ],
};

const MATH = {
  id: "math", kind: "ia", title: "Mathematical exploration", short: "IA",
  guide: "IB Mathematics: analysis and approaches guide, first assessment 2021",
  limit: "12–20 pages", words: 0, pages: 20, levels: true,
  note: "Marked out of 20. Criterion E depends on the level you choose.",
  criteria: [
    { id: "A", name: "Presentation", max: 4, focus: "Well organized, coherent and concise: a clear aim, introduction and conclusion, easy to follow.",
      look: ["It's well organized, with a clear aim, introduction and conclusion.",
             "It's coherent and concise: a classmate could follow it without help."] },
    { id: "B", name: "Mathematical communication", max: 4, focus: "Correct notation, symbols and terminology; key terms defined; suitable formulae, diagrams, tables and graphs.",
      look: ["The notation, symbols and terminology are correct and consistent.",
             "Key terms and variables are defined.",
             "Formulae, diagrams, tables and graphs are used where they help."] },
    { id: "C", name: "Personal engagement", max: 3, focus: "Significant, creative personal engagement: own questions, ideas, conjectures and independent thinking.",
      look: ["Significant personal engagement shows throughout, not just in the introduction.",
             "It shows your own questions, ideas, conjectures and independent thinking."] },
    { id: "D", name: "Reflection", max: 3, focus: "Critical reflection throughout on results, their meaning, limitations and links to other areas.",
      look: ["The results are reflected on critically throughout, not only at the end.",
             "Their meaning, limitations and links to other areas are considered."] },
    { id: "E", name: "Use of mathematics", max: 6, focus: "Relevant mathematics at the level of the course, correct and clearly understood (HL also expects sophistication and rigour).",
      look: ["The mathematics is relevant to the aim and at the level of the course you chose.",
             "It's correct, with no significant errors.",
             "It's clearly understood and explained.",
             {text: "It shows sophistication and rigour.", hl: true}] },
  ],
};

// Mathematics AI uses the same exploration criteria as Mathematics AA
const MATHAI = Object.assign({}, MATH, { id: "mathai", guide: "IB Mathematics: applications and interpretation guide, first assessment 2021" });

const ENG_ESSAY = {
  id: "engessay", kind: "essay", title: "HL essay", short: "HL essay",
  guide: "IB Language A: language and literature guide, first assessment 2021",
  limit: "1,200–1,500 words", words: 1500,
  note: "Marked out of 20 (20% of the HL grade). The individual oral is spoken, so it isn't marked here.",
  criteria: [
    { id: "A", name: "Knowledge, understanding and interpretation", max: 5, focus: "Knowledge and understanding of the text or body of work, interpreted in relation to the line of inquiry and supported by references.",
      look: ["It shows thorough knowledge and understanding of the text or body of work.",
             "It interprets the work insightfully in relation to the line of inquiry.",
             "Points are supported by well-chosen references to the text."] },
    { id: "B", name: "Analysis and evaluation", max: 5, focus: "Analysis and evaluation of how the writer's choices of language, technique and style shape meaning.",
      look: ["It analyses the writer's choices of language, technique and style.",
             "It evaluates how those choices shape meaning."] },
    { id: "C", name: "Focus, organization and development", max: 5, focus: "A focused, well-organized essay whose line of argument develops coherently, with well-integrated support.",
      look: ["The essay keeps a clear focus on the line of inquiry.",
             "The argument is well organized and develops coherently.",
             "Examples and quotations are well integrated into the argument."] },
    { id: "D", name: "Language", max: 5, focus: "Clear, varied and accurate language in an appropriate register, with precise terminology.",
      look: ["The language is clear, varied and accurate.",
             "The register suits an academic essay, with precise literary and linguistic terms."] },
  ],
};

// Theory of Knowledge: each task is marked holistically against one question, so the statements are the level 9-10 descriptor split up
const TOK_EXHIB = {
  id: "tokx", kind: "tok", title: "TOK exhibition", short: "TOK exhibition", variant: "Exhibition",
  guide: "IB Theory of Knowledge guide, first assessment 2022",
  limit: "950 words", words: 950,
  note: "Marked out of 10 by your teacher and worth a third of your TOK grade. Three objects with commentaries, all linked to one of the 35 IA prompts. TOK is marked holistically, so rate the exhibition as a whole.",
  criteria: [
    { id: "A", name: "How TOK shows up in the world around us", max: 10, focus: "Does the exhibition successfully show how TOK manifests in the world around us?",
      look: ["It clearly identifies three objects and the specific real-world context of each.",
             "Each object is clearly linked to your chosen IA prompt, and the links are well explained.",
             "It strongly justifies the particular contribution each object makes to the exhibition.",
             "Points are supported by appropriate evidence and explicit references to the IA prompt.",
             "All three commentaries stay within 950 words and use the prompt exactly as worded."] },
  ],
};
const TOK_ESSAY = {
  id: "toke", kind: "tok", title: "TOK essay", short: "TOK essay", variant: "Essay",
  guide: "IB Theory of Knowledge guide, first assessment 2022",
  limit: "1,600 words", words: 1600,
  note: "Marked out of 10 by an IB examiner and worth two thirds of your TOK grade. Your TOK and EE grades together can earn up to 3 bonus points. TOK is marked holistically, so rate the essay as a whole.",
  criteria: [
    { id: "A", name: "A clear, coherent and critical exploration of the title", max: 10, focus: "Does the student provide a clear, coherent and critical exploration of the essay title?",
      look: ["It keeps a sustained focus on the prescribed title, exactly as set.",
             "The discussion is linked effectively to areas of knowledge.",
             "Arguments are clear, coherent and supported by specific real-life examples.",
             "The implications of the arguments are considered.",
             "Different points of view are identified and evaluated, with claims and counterclaims."] },
  ],
};

const TASKS = { ee: EE, sci: SCI, cs: CS, biz: BIZ, econ: ECON, psych: PSY, ess: ESS_IA, hist27: HIST27, hist28: HIST28, geo: GEO, math: MATH, mathai: MATHAI, engessay: ENG_ESSAY, tokx: TOK_EXHIB, toke: TOK_ESSAY };

// which tasks each subject offers: the first is its internal assessment (or coursework essay)
const SUBJECTS = {
  bio:  { name: "Biology", ia: ["sci"], ee: true },
  chem: { name: "Chemistry", ia: ["sci"], ee: true },
  phys: { name: "Physics", ia: ["sci"], ee: true },
  cs:   { name: "Computer Science", ia: ["cs"], ee: true },
  biz:  { name: "Business Management", ia: ["biz"], ee: true },
  econ: { name: "Economics", ia: ["econ"], ee: true },
  psych: { name: "Psychology", ia: ["psych"], ee: true },
  ess: { name: "Environmental systems and societies", ia: ["ess"], ee: true },
  hist: { name: "History", ia: ["hist27", "hist28"], ee: true, varLabel: "Exam session" },
  geo:  { name: "Geography", ia: ["geo"], ee: true },
  math: { name: "Mathematics: analysis and approaches", ia: ["math"], ee: true },
  mathai: { name: "Mathematics: applications and interpretation", ia: ["mathai"], ee: true },
  eng:  { name: "English A: language and literature", ia: ["engessay"], ee: true, iaNote: "The individual oral is spoken, so the honey pot marks your HL essay instead." },
  tok:  { name: "Theory of Knowledge", ia: ["tokx", "toke"], ee: false, varLabel: "TOK task", iaNote: "TOK has two tasks: the exhibition, marked by your teacher, and the essay, marked by the IB. Pick one above. There's no extended essay in TOK." },
  fr:   { name: "French ab initio", ia: [], ee: false, none: "French ab initio can't go in the honey pot: its internal assessment is a live oral with your teacher, and the IB doesn't allow an extended essay in an ab initio language." },
  gk:   { name: "General knowledge", ia: [], ee: false, none: "General knowledge isn't an IB subject, so there's nothing to mark." },
};

// the rating scale for each statement
const SCALE = ["Not yet", "Partly", "Mostly", "Fully"];
// the statements that apply (Maths criterion E has one more at HL)
const looks = (c, level) => c.look.filter(l => typeof l === "string" || !l.hl || level === "HL").map(l => typeof l === "string" ? l : l.text);
// a criterion's mark: the share of "Fully" across its statements, on the IB's scale for that criterion
const mark = (max, ratings) => { const r = (ratings || []).filter(x => x >= 0 && x <= 3); return r.length ? Math.round(max * r.reduce((a, b) => a + b, 0) / (3 * r.length) + 1e-9) : 0; };

// estimated grades from the share of marks: the IB sets the real boundaries each session (EE and TOK use letters)
const IA_BANDS = [[0.80, "7"], [0.67, "6"], [0.55, "5"], [0.43, "4"], [0.30, "3"], [0.15, "2"], [0, "1"]];
const EE_BANDS = [[0.80, "A"], [0.63, "B"], [0.43, "C"], [0.23, "D"], [0, "E"]];
const grade = (kind, got, max) => { const f = max ? got / max : 0; return ((kind === "ee" || kind === "tok") ? EE_BANDS : IA_BANDS).find(b => f >= b[0] - 1e-9)[1]; };
// each criterion: smashing it, on track, or still to work on
const verdict = (m, max) => { const f = max ? m / max : 0; return f >= 0.8 ? "smash" : f >= 0.5 ? "track" : "work"; };

const HONEY = { TASKS, SUBJECTS, SCALE, looks, mark, IA_BANDS, EE_BANDS, grade, verdict, MAX_MB: 40 };
if (typeof module !== "undefined" && module.exports) module.exports = HONEY; else root.HONEY = HONEY;
})(typeof window !== "undefined" ? window : this);
