/* Philosophy — Socrates' gadfly dives down a well of questions: from the opinions of the agora, past the Paris café,
   the thought-experiment lab, the ship of Theseus and the library of Babel, behind the veil of ignorance, into
   Descartes' dream, along the Tao and through Zeno's paradoxes to the biggest question of all. Rarer answers ask more.
   Syllabus: IB Philosophy (first assessment 2025): the core theme (being human), the seven optional themes, the
   prescribed philosophical text, and the HL extension (philosophy and contemporary issues). */
(function(){
const CATALOG = [
  {label:"Core theme · Being human", units:[
    {code:"C", name:"Being human", topics:[["C.1","Identity and personhood"],["C.2","Mind and body"],["C.3","Freedom and human nature"]]},
  ]},
  {label:"Optional themes", units:[
    {code:"O", name:"Optional themes", topics:[["O.1","Aesthetics"],["O.2","Epistemology"],["O.3","Ethics"],["O.4","Philosophy of religion"],["O.5","Philosophy of science"],["O.6","Political philosophy"],["O.7","Social philosophy"]]},
  ]},
  {label:"Texts and skills", units:[
    {code:"T", name:"Prescribed philosophical texts", topics:[["T.1","Philosophical texts and thinkers"]]},
    {code:"M", name:"Doing philosophy", topics:[["M.1","Arguments, logic and method"]]},
  ]},
  {label:"HL extension", units:[
    {code:"H", name:"Philosophy and contemporary issues", topics:[["H.1","Philosophy and contemporary issues",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- C.1 Identity and personhood ---------- */
P("ph001","C.1","Name a philosopher who wrote about personal identity or the self.","Nagasena",[
  ["John Locke",20,"locke"],["David Hume",15,"hume"],["René Descartes",15,"descartes","rene descartes"],["The Buddha",8,"buddha","siddhartha gautama"],["Derek Parfit",6,"parfit"],["Jean-Paul Sartre",5,"sartre"],["Thomas Reid",4,"reid"],
  ["Daniel Dennett",3,"dennett"],["Bernard Williams",3,"williams"],["Simone de Beauvoir",3,"beauvoir","de beauvoir"],["Charles Taylor",2,"taylor"],["Paul Ricoeur",2,"ricoeur"],["Nagasena",.4]]),
P("ph002","C.1","Name a theory or thought experiment about personal identity.","Reid's brave officer",[
  ["The ship of Theseus",18,"theseus"],["Memory theory",14,"memory","memory criterion"],["Psychological continuity",10,"psychological continuity theory","psychological theory"],["Bundle theory",10,"bundle","bundle of perceptions"],["Soul theory",8,"soul","simple view"],
  ["Bodily continuity",8,"body theory","physical continuity","bodily theory"],["The teletransporter",6,"teleporter","teleportation","teletransportation"],["Brain transplant",5,"brain swap","brain transplants"],["No-self (anatta)",5,"anatta","no self","anatman"],
  ["Narrative identity",4,"narrative self"],["The prince and the cobbler",3,"prince and cobbler"],["Fission",2,"fission cases","split brain"],["Reid's brave officer",.4,"brave officer","brave officer paradox"]]),
P("ph003","C.1","Name something philosophers have said makes humans distinctive.","Play",[
  ["Reason",20,"rationality","rational"],["Language",14],["Consciousness",10],["Self-awareness",10,"self awareness","self consciousness"],["Free will",8,"freedom"],["Morality",8,"moral sense","ethics"],["Culture",6],["Creativity",5,"art"],
  ["A soul",5,"soul"],["Emotions",4,"emotion"],["Tool-making",4,"tools","tool use"],["Awareness of death",3,"mortality","knowing we will die"],["Laughter",3,"humour","humor"],["Play",.4,"homo ludens","playing"]]),
/* ---------- C.2 Mind and body ---------- */
P("ph004","C.2","Name a theory of the relationship between mind and body.","Occasionalism",[
  ["Substance dualism",20,"dualism","cartesian dualism"],["Physicalism",14,"materialism"],["Property dualism",8],["Behaviourism",8,"behaviorism","logical behaviourism"],["Identity theory",8,"mind brain identity theory","type identity theory"],["Functionalism",8],
  ["Idealism",6],["Epiphenomenalism",5],["Interactionism",4],["Eliminative materialism",4,"eliminativism"],["Panpsychism",4],["Parallelism",2,"psychophysical parallelism"],["Occasionalism",.4]]),
P("ph005","C.2","Name a thought experiment or argument in the philosophy of mind.","Leibniz's mill",[
  ["The Chinese room",16,"chinese room"],["Mary's room",12,"mary s room","marys room","knowledge argument","mary the colour scientist"],["Philosophical zombies",12,"zombies","p zombies","zombie argument"],["What is it like to be a bat?",10,"what is it like to be a bat","nagel s bat","bat"],
  ["The brain in a vat",8,"brain in a vat"],["The Turing test",8,"turing test"],["The hard problem of consciousness",6,"hard problem"],["The inverted spectrum",5,"inverted spectrum","inverted qualia"],["The conceivability argument",4,"conceivability argument"],
  ["The China brain",3,"china brain","chinese nation"],["Swampman",2],["Leibniz's mill",.4,"leibniz mill","leibniz s mill","leibnizs mill"]]),
P("ph006","C.2","Name a philosopher of mind.","Elisabeth of Bohemia",[
  ["René Descartes",18,"descartes","rene descartes"],["Gilbert Ryle",10,"ryle"],["David Chalmers",10,"chalmers"],["Daniel Dennett",10,"dennett"],["Thomas Nagel",8,"nagel"],["John Searle",8,"searle"],["Patricia Churchland",5,"churchland","paul churchland"],
  ["Frank Jackson",5,"jackson"],["Jerry Fodor",4,"fodor"],["Hilary Putnam",4,"putnam"],["Alan Turing",4,"turing"],["Gottfried Leibniz",3,"leibniz"],["Elisabeth of Bohemia",.4,"princess elisabeth","elisabeth","elizabeth of bohemia"]]),
/* ---------- C.3 Freedom and human nature ---------- */
P("ph007","C.3","Name a position on free will.","Illusionism",[
  ["Hard determinism",20,"determinism"],["Libertarianism",15,"libertarian free will"],["Compatibilism",15,"soft determinism"],["Fatalism",8],["Indeterminism",6],["Radical freedom",5,"existentialism","condemned to be free"],["Hard incompatibilism",4,"incompatibilism"],
  ["Predestination",4],["Agent causation",3,"agent causal libertarianism"],["Illusionism",.4]]),
P("ph008","C.3","Name a philosopher famous for a view of human nature.","Xunzi",[
  ["Thomas Hobbes",20,"hobbes"],["Jean-Jacques Rousseau",16,"rousseau"],["Aristotle",10],["John Locke",8,"locke"],["Jean-Paul Sartre",8,"sartre"],["Mencius",6,"mengzi"],["Karl Marx",6,"marx"],["Confucius",5,"kongzi"],["Friedrich Nietzsche",5,"nietzsche"],
  ["Sigmund Freud",4,"freud"],["Plato",4],["Immanuel Kant",3,"kant"],["Xunzi",.4,"hsun tzu","xun zi"]]),
P("ph009","C.3","Name an idea from existentialism.","Facticity",[
  ["Existence precedes essence",20],["Bad faith",14],["The absurd",12,"absurd","absurdism","absurdity"],["Authenticity",10,"authentic"],["Anguish",8,"angst","anxiety"],["Freedom",8,"radical freedom"],["Despair",4],["Abandonment",4],
  ["The Other",4,"other","the look"],["Nausea",3],["Leap of faith",3],["Being-for-itself",2,"being for itself","for itself"],["Facticity",.4]]),
/* ---------- O.1 Aesthetics ---------- */
P("ph010","O.1","Name a theory of what makes something art.","Cluster theory",[
  ["Imitation theory",18,"mimesis","representation","mimetic theory","imitation"],["Expression theory",14,"expression"],["Formalism",12,"significant form"],["Institutional theory",10,"institutional","the artworld","art world theory"],["Aesthetic theory",6,"aesthetic experience"],
  ["Art for art's sake",5,"art for arts sake","art for art s sake","aestheticism"],["Art as communication",5,"communication"],["Family resemblance",4,"open concept","anti essentialism"],["Historical definition",3,"historical theory"],["Cluster theory",.4,"cluster account"]]),
P("ph011","O.1","Name a concept in aesthetics.","Mono no aware",[
  ["Beauty",20,"beautiful"],["The sublime",14,"sublime"],["Taste",10,"judgement of taste"],["Catharsis",8],["Mimesis",8],["Aesthetic experience",6],["Disinterestedness",5,"disinterested pleasure"],["Kitsch",4],["The uncanny",4,"uncanny"],
  ["Wabi-sabi",4,"wabi sabi"],["Genius",3],["Yūgen",2,"yugen"],["Mono no aware",.4]]),
/* ---------- O.2 Epistemology ---------- */
P("ph012","O.2","Name a theory of knowledge or justification.","Anekantavada",[
  ["Empiricism",20],["Rationalism",18],["Scepticism",12,"skepticism"],["Justified true belief",10,"jtb","tripartite theory"],["Foundationalism",8],["Coherentism",6,"coherence theory"],["Reliabilism",5],["Pragmatism",4],["Fallibilism",4],
  ["Virtue epistemology",3],["Contextualism",3],["Externalism",3],["Internalism",2],["Anekantavada",.4,"many sidedness"]]),
P("ph013","O.2","Name an argument or thought experiment about knowledge or scepticism.","Dharmottara's mirage",[
  ["The evil demon",16,"evil demon","evil genius","descartes demon"],["The dream argument",14,"dream argument","dreaming"],["The brain in a vat",12,"brain in a vat"],["Gettier cases",12,"gettier","gettier problem"],["The problem of induction",8,"induction","hume s problem of induction"],
  ["Agrippa's trilemma",5,"agrippa","agrippa s trilemma","munchhausen trilemma"],["Moore's hand",5,"here is a hand","moore s proof","moore"],["The fake barns",4,"fake barn","barn facade","fake barn county"],["Zhuangzi's butterfly dream",4,"butterfly dream","zhuangzi","zhuangzi s butterfly"],
  ["The lottery paradox",3,"lottery paradox","lottery"],["The five-minute hypothesis",2,"five minute hypothesis","russell s five minute hypothesis"],["Dharmottara's mirage",.4,"dharmottara","mirage"]]),
P("ph014","O.2","Name an empiricist or rationalist philosopher.","Anne Conway",[
  ["René Descartes",18,"descartes","rene descartes"],["John Locke",16,"locke"],["David Hume",14,"hume"],["George Berkeley",8,"berkeley"],["Gottfried Leibniz",8,"leibniz"],["Baruch Spinoza",8,"spinoza"],["Plato",6],["Francis Bacon",4,"bacon"],
  ["John Stuart Mill",3,"mill","j s mill"],["Thomas Hobbes",3,"hobbes"],["A. J. Ayer",3,"ayer","a j ayer","alfred ayer"],["Anne Conway",.4,"conway"]]),
/* ---------- O.3 Ethics ---------- */
P("ph015","O.3","Name a normative ethical theory.","Moral particularism",[
  ["Utilitarianism",22,"utilitarian","act utilitarianism"],["Kantian ethics",16,"kantianism","deontology","deontological ethics","categorical imperative"],["Virtue ethics",14,"aristotelian ethics"],["Consequentialism",8],["Divine command theory",6,"divine command"],
  ["Natural law",6,"natural law theory"],["Ethical egoism",4,"egoism"],["Contractualism",4,"social contract theory","contractarianism"],["Care ethics",4,"ethics of care"],["Rule utilitarianism",3],["Situation ethics",3],["Confucian ethics",2,"confucianism"],["Moral particularism",.4,"particularism"]],
  [[["emotivism","error theory","moral realism"],"That's a metaethical view, about what moral claims are, not a normative theory of how to act."]]),
P("ph016","O.3","Name an ethical thought experiment or dilemma.","The repugnant conclusion",[
  ["The trolley problem",24,"trolley problem","trolley"],["The drowning child",10,"drowning child","shallow pond"],["The ring of Gyges",8,"ring of gyges","gyges"],["The experience machine",8,"experience machine"],["The murderer at the door",6,"murderer at the door","lying to the murderer"],
  ["The violinist",5,"thomson s violinist","violinist"],["Heinz's dilemma",5,"heinz dilemma","heinz"],["The ticking time bomb",5,"ticking time bomb","ticking bomb"],["The transplant surgeon",4,"transplant","transplant case"],["The lifeboat",4,"lifeboat","lifeboat ethics"],
  ["The ones who walk away from Omelas",3,"omelas"],["The prisoner's dilemma",3,"prisoner s dilemma","prisoners dilemma"],["The repugnant conclusion",.4,"repugnant conclusion"]]),
P("ph017","O.3","Name a metaethical position.","Quasi-realism",[
  ["Moral realism",18,"realism"],["Moral relativism",14,"relativism","cultural relativism"],["Emotivism",12,"boo hurrah theory"],["Moral anti-realism",8,"anti realism","antirealism"],["Error theory",8],["Cognitivism",6],["Non-cognitivism",6,"noncognitivism"],
  ["Intuitionism",5,"ethical intuitionism"],["Subjectivism",5,"moral subjectivism"],["Prescriptivism",4],["Ethical naturalism",4,"naturalism"],["Moral nihilism",3,"nihilism"],["Quasi-realism",.4,"quasi realism"]],
  [[["utilitarianism","virtue ethics","kantian ethics","deontology"],"That's a normative theory of how to act. Metaethics asks what moral claims mean and whether they can be true."]]),
/* ---------- O.4 Philosophy of religion ---------- */
P("ph018","O.4","Name an argument for the existence of God.","Gödel's ontological proof",[
  ["The cosmological argument",22,"cosmological","first cause","first cause argument","kalam","kalam cosmological argument"],["The design argument",18,"teleological argument","design","teleological","watchmaker"],["The ontological argument",16,"ontological","anselm"],
  ["The moral argument",8,"moral"],["Religious experience",8,"argument from religious experience"],["Aquinas' Five Ways",6,"five ways","aquinas"],["Pascal's wager",6,"pascal s wager","pascals wager","wager"],["The fine-tuning argument",5,"fine tuning"],
  ["The argument from contingency",4,"contingency"],["The argument from miracles",4,"miracles"],["The argument from desire",2,"desire"],["Gödel's ontological proof",.4,"godel","godel s ontological proof","goedel"]],
  [[["problem of evil","the problem of evil","evil"],"That's an argument against God's existence."]]),
P("ph019","O.4","Name a challenge to religious belief.","Divine foreknowledge",[
  ["The problem of evil",26,"problem of evil","evil","suffering","problem of suffering"],["Science and evolution",10,"evolution","science","darwin"],["Hume on miracles",8,"hume","against miracles"],["Verificationism",6,"verification principle","logical positivism","ayer"],
  ["Falsification",6,"flew","the invisible gardener","parable of the gardener"],["The Euthyphro dilemma",6,"euthyphro"],["The omnipotence paradox",6,"paradox of the stone","omnipotence"],["Divine hiddenness",5,"hiddenness","hiddenness of god"],
  ["Religion as wish fulfilment",4,"freud","wish fulfilment","wish fulfillment"],["Religion as the opium of the people",4,"marx","opium of the people","opium"],["Religious diversity",3,"diversity","conflicting religions","inconsistent revelations"],["Russell's teapot",3,"teapot","russell s teapot"],
  ["Divine foreknowledge",.4,"foreknowledge","foreknowledge and free will"]],
  [[["cosmological argument","ontological argument","design argument","teleological argument"],"That's an argument for God's existence, not a challenge to it."]]),
/* ---------- O.5 Philosophy of science ---------- */
P("ph020","O.5","Name a philosopher of science.","Helen Longino",[
  ["Karl Popper",24,"popper"],["Thomas Kuhn",18,"kuhn"],["Francis Bacon",10,"bacon"],["Paul Feyerabend",8,"feyerabend"],["Imre Lakatos",6,"lakatos"],["David Hume",6,"hume"],["Carl Hempel",4,"hempel"],["Pierre Duhem",3,"duhem"],["W. V. O. Quine",3,"quine"],
  ["Rudolf Carnap",3,"carnap"],["Bas van Fraassen",2,"van fraassen"],["Ibn al-Haytham",2,"alhazen","ibn al haytham"],["Helen Longino",.4,"longino"]]),
P("ph021","O.5","Name a concept or problem in the philosophy of science.","Grue",[
  ["Falsification",20,"falsifiability","falsificationism"],["The problem of induction",16,"problem of induction","induction"],["Paradigm shift",14,"paradigm","paradigms","scientific revolution"],["The demarcation problem",8,"demarcation","demarcation problem"],
  ["Scientific realism",6,"realism"],["Occam's razor",5,"ockham s razor","occam s razor","parsimony"],["Instrumentalism",5],["Underdetermination",4,"duhem quine thesis"],["Theory-ladenness",4,"theory laden observation","theory ladenness"],
  ["Inference to the best explanation",4,"abduction","ibe"],["The hypothetico-deductive method",4,"hypothetico deductive","scientific method"],["The raven paradox",3,"raven paradox","hempel s ravens"],["Pessimistic meta-induction",2,"pessimistic induction"],["Grue",.4,"new riddle of induction","goodman s grue"]]),
/* ---------- O.6 Political philosophy ---------- */
P("ph022","O.6","Name a political philosopher.","Kautilya",[
  ["Thomas Hobbes",16,"hobbes"],["John Locke",14,"locke"],["Jean-Jacques Rousseau",12,"rousseau"],["Karl Marx",12,"marx"],["Plato",8],["John Rawls",8,"rawls"],["John Stuart Mill",6,"mill","j s mill"],["Niccolò Machiavelli",6,"machiavelli","niccolo machiavelli"],
  ["Aristotle",5],["Robert Nozick",4,"nozick"],["Hannah Arendt",4,"arendt"],["Mary Wollstonecraft",3,"wollstonecraft"],["Confucius",3],["Kautilya",.4,"chanakya"]]),
P("ph023","O.6","Name a key idea in political philosophy.","The Mandate of Heaven",[
  ["The social contract",20,"social contract"],["Justice",10],["Liberty",10,"freedom"],["The state of nature",10,"state of nature"],["Rights",8,"natural rights","human rights"],["The veil of ignorance",8,"veil of ignorance","original position"],["The harm principle",6,"harm principle"],
  ["Sovereignty",5],["Legitimacy",5],["Equality",4],["The general will",4,"general will"],["Utopia",3],["The Mandate of Heaven",.4,"mandate of heaven","tianming"]]),
/* ---------- O.7 Social philosophy ---------- */
P("ph024","O.7","Name a concept in social philosophy.","Ubuntu",[
  ["Gender",14],["Race",10],["Oppression",10],["Power",10],["Social construction",8,"social constructionism","socially constructed"],["Alienation",8],["Recognition",6],["Patriarchy",6],["Intersectionality",6],["The Other",5,"othering","other"],["Identity",5],
  ["Epistemic injustice",3,"testimonial injustice"],["Ubuntu",.4,"i am because we are"]]),
P("ph025","O.7","Name a philosopher who wrote about gender, race or society.","Anna Julia Cooper",[
  ["Simone de Beauvoir",20,"beauvoir","de beauvoir"],["Michel Foucault",12,"foucault"],["Karl Marx",10,"marx"],["Frantz Fanon",8,"fanon"],["Judith Butler",8,"butler"],["Mary Wollstonecraft",8,"wollstonecraft"],["W. E. B. Du Bois",6,"du bois","dubois","web du bois"],
  ["bell hooks",5,"hooks"],["Martha Nussbaum",5,"nussbaum"],["Kimberlé Crenshaw",4,"crenshaw","kimberle crenshaw"],["Charles Taylor",3,"taylor"],["Iris Marion Young",3,"iris young"],["Angela Davis",3,"davis"],["Anna Julia Cooper",.4,"cooper"]]),
/* ---------- T.1 Texts and thinkers ---------- */
P("ph026","T.1","Name a classic work of philosophy.","The Book of the City of Ladies",[
  ["The Republic",18,"republic"],["Meditations on First Philosophy",12,"meditations","descartes meditations"],["Critique of Pure Reason",8],["Leviathan",8],["On Liberty",6],["Nicomachean Ethics",6],["The Second Sex",6,"second sex"],["Tao Te Ching",6,"daodejing","dao de jing"],
  ["The Analects",6,"analects"],["Beyond Good and Evil",4],["Being and Nothingness",4],["A Theory of Justice",4,"theory of justice"],["The Communist Manifesto",4,"communist manifesto"],["Groundwork of the Metaphysics of Morals",3,"groundwork"],
  ["The Book of the City of Ladies",.4,"city of ladies","book of the city of ladies"]]),
P("ph027","T.1","Name a philosopher of the ancient world.","Hipparchia of Maroneia",[
  ["Socrates",20],["Plato",18],["Aristotle",16],["Confucius",8,"kongzi"],["Laozi",5,"lao tzu","lao tse"],["The Buddha",4,"buddha","siddhartha gautama"],["Pythagoras",4],["Epicurus",4],["Marcus Aurelius",4,"aurelius"],["Seneca",3],["Heraclitus",3],
  ["Diogenes",3,"diogenes of sinope"],["Zeno",2,"zeno of elea","zeno of citium"],["Hypatia",2],["Nagarjuna",2],["Hipparchia of Maroneia",.4,"hipparchia"]]),
/* ---------- M.1 Doing philosophy ---------- */
P("ph028","M.1","Name a logical fallacy.","The ecological fallacy",[
  ["Ad hominem",18,"attacking the person"],["Straw man",14,"strawman"],["Slippery slope",12],["Begging the question",8,"circular reasoning","circular argument","petitio principii"],["False dilemma",8,"false dichotomy","black and white thinking","either or fallacy"],
  ["Appeal to authority",6,"argument from authority"],["Post hoc ergo propter hoc",5,"post hoc","false cause"],["Red herring",5],["Hasty generalization",5,"hasty generalisation","overgeneralization"],["Appeal to emotion",4],["Bandwagon",4,"appeal to popularity","ad populum"],
  ["Tu quoque",3,"whataboutism"],["Equivocation",3],["No true Scotsman",3],["The gambler's fallacy",3,"gambler s fallacy","gamblers fallacy"],["Affirming the consequent",2],["The ecological fallacy",.4,"ecological fallacy"]]),
P("ph029","M.1","Name a method or tool philosophers use.","Epoché",[
  ["Thought experiments",18,"thought experiment"],["The Socratic method",14,"socratic method","elenchus","socratic questioning"],["Logic",10,"formal logic"],["Conceptual analysis",8,"analysis"],["Counterexamples",8,"counterexample"],["Dialectic",6,"thesis antithesis synthesis","dialectics"],
  ["Reductio ad absurdum",5,"reductio"],["Deduction",5,"deductive reasoning","syllogism"],["Induction",4,"inductive reasoning"],["Occam's razor",4,"ockham s razor","occam s razor"],["The principle of charity",3,"principle of charity","charity"],["Reflective equilibrium",3],["Phenomenology",3],
  ["Epoché",.4,"epoche","bracketing"]]),
/* ---------- H.1 Philosophy and contemporary issues (HL) ---------- */
P("ph030","H.1","Name a contemporary issue philosophers debate.","Longtermism",[
  ["Artificial intelligence",18,"ai","ai ethics"],["Climate change",14,"global warming","climate"],["Animal rights",10,"animal welfare"],["Euthanasia",8,"assisted dying","assisted suicide"],["Abortion",8],["Social media",6],["Genetic engineering",6,"gene editing","designer babies","crispr"],
  ["Privacy and surveillance",5,"privacy","surveillance"],["Free speech",5,"freedom of speech","censorship"],["Global poverty",4,"poverty"],["Immigration",4,"migration"],["Fake news",3,"misinformation","post truth"],["Human enhancement",3,"transhumanism"],["Longtermism",.4,"future generations"]],
  [], HL),
P("ph031","H.1","Name a branch of applied ethics.","Space ethics",[
  ["Bioethics",20],["Medical ethics",14],["Environmental ethics",14],["Business ethics",12],["Animal ethics",8],["AI ethics",6,"machine ethics","ethics of artificial intelligence"],["Media ethics",5,"journalism ethics"],["Just war theory",4,"military ethics","war ethics"],
  ["Sports ethics",3],["Engineering ethics",3],["Legal ethics",3],["Neuroethics",2],["Space ethics",.4,"astroethics"]],
  [], HL),
];

/* ================= the well of questions (down) ================= */
const BANDS = [
  {name:"The agora",                    zone:"The agora",                    from:0,  to:40,  hue:40,  bg:["#1e2238","#2a2636"]},
  {name:"The café",                     zone:"The Paris café",               from:40, to:100, hue:10,  bg:["#2a2636","#2e1e1a"]},
  {name:"The thought-experiment lab",   zone:"The thought-experiment lab",   from:100,to:170, hue:190, bg:["#2e1e1a","#14262e"]},
  {name:"The ship of Theseus",          zone:"The ship of Theseus",          from:170,to:250, hue:30,  bg:["#14262e","#1a2436"]},
  {name:"The library of Babel",         zone:"The library of Babel",         from:250,to:320, hue:45,  bg:["#1a2436","#2a1e14"]},
  {name:"The veil of ignorance",        zone:"Behind the veil of ignorance", from:320,to:390, hue:260, bg:["#2a1e14","#24203a"]},
  {name:"Descartes' dream",             zone:"Descartes' dream",             from:390,to:460, hue:280, bg:["#24203a","#1a1438"]},
  {name:"The Tao",                      zone:"The way of the Tao",           from:460,to:530, hue:160, bg:["#1a1438","#10261e"]},
  {name:"Zeno's paradoxes",             zone:"Zeno's paradoxes",             from:530,to:600, hue:50,  bg:["#10261e","#1a1a1a"]},
  {name:"Why is there something?",      zone:"Why is there something rather than nothing?", from:600,to:760, hue:260, bg:["#1a1a1a","#05040c"]},
];
// questions asked at each band boundary: one simple question becomes a million
const KNOTS = [[0,1],[40,2],[100,5],[170,12],[250,30],[320,80],[390,250],[460,1000],[530,5000],[600,50000],[760,1e6]];
function asked(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(1e6, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtQ(p){ const n = asked(p); if (n >= 1e6) return "1 million questions"; return `${n.toLocaleString("en-GB")} question${n === 1 ? "" : "s"}`; }
const FACTS = [
  [-30,"the unexamined life is not worth living · Socrates"],[12,"philosophy means 'love of wisdom' in Greek"],[30,"Socrates called himself the gadfly of Athens"],
  [60,"Sartre and Beauvoir wrote in the cafés of Paris"],[85,"existence precedes essence · Sartre"],[115,"the trolley problem was first posed by Philippa Foot (1967)"],[150,"could you be a brain in a vat?"],
  [190,"if every plank is replaced, is it still the same ship?"],[225,"Locke: you're the same person as far back as your memories reach"],[270,"Borges imagined a library holding every possible book"],[300,"all our knowledge begins with experience · Kant"],
  [340,"behind the veil of ignorance, you don't know who you'll be · Rawls"],[370,"life in the state of nature: solitary, poor, nasty, brutish and short · Hobbes"],[410,"what if an evil demon is deceiving you? · Descartes"],[440,"I think, therefore I am (1637)"],
  [480,"the Tao that can be told is not the eternal Tao · Laozi"],[510,"is Zhuangzi dreaming he's a butterfly, or is a butterfly dreaming it's Zhuangzi?"],[550,"Achilles can never catch the tortoise · Zeno"],[580,"this sentence is false"],
  [625,"why is there something rather than nothing? · Leibniz"],[670,"whereof one cannot speak, thereof one must be silent · Wittgenstein"],[720,"the owl of Minerva flies only at dusk · Hegel"],
];
function wall(i, len, side){
  const r = srand(5113 + i*37 + (side==="r"?19:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: // the agora: marble columns and everyday opinions
      rep(230, y=>{ s+=`<rect x="34" y="${y}" width="52" height="10" fill="#e8dcc0"/><rect x="40" y="${y+10}" width="40" height="120" fill="#d8ccb0"/>${[0,1,2,3].map(k=>`<path d="M${46+k*9} ${y+12} v116" stroke="#b8ac90" stroke-width="2"/>`).join("")}<rect x="34" y="${y+130}" width="52" height="10" fill="#e8dcc0"/>`
        + `<g transform="translate(60 ${y+182})"><rect x="-50" y="-18" width="100" height="30" rx="14" fill="#fff" opacity=".9"/><path d="M-10 12 l-8 12 l18 -12z" fill="#fff" opacity=".9"/><text y="2" text-anchor="middle" font-size="12" font-family="Georgia,serif" fill="#3a3a5a">${["obviously!","everyone knows","I reckon…","common sense","just because"][Math.floor(r()*5)]}</text></g>`; });
      break;
    case 1: // the Paris café: a striped awning, little tables and coffee
      rep(200, y=>{ s+=[0,1,2,3,4,5].map(k=>`<rect x="${k*20}" y="${y}" width="20" height="26" fill="${k%2?"#f4f0e8":"#c8303a"}"/>`).join("") + `<path d="M0 ${y+26} ${[0,1,2,3,4,5].map(()=>"q10 12 20 0").join(" ")}" fill="#c8303a"/>`
        + `<ellipse cx="60" cy="${y+120}" rx="40" ry="8" fill="#5a3a20"/><path d="M60 ${y+128} v50 M44 ${y+178} h32" stroke="#2a1a10" stroke-width="4"/>`
        + `<path d="M50 ${y+104} h18 v10 q-9 6 -18 0z" fill="#f4f0e8"/><path d="M68 ${y+107} q6 0 0 6" stroke="#f4f0e8" stroke-width="2" fill="none"/>`
        + `<g class="drift" style="animation-delay:-${f1(r()*4)}s"><path d="M56 ${y+98} q-4 -8 0 -16 q4 -8 0 -16" stroke="#c8c0b0" stroke-width="2" fill="none" opacity=".6"/></g>`; });
      break;
    case 2: // the thought-experiment lab: trolley tracks, a lever and brains in vats
      for (let y=0; y<len; y+=14) s+=`<rect x="34" y="${y}" width="52" height="5" fill="#5a3a20"/>`;
      s+=`<path d="M42 0 V${len} M78 0 V${len}" stroke="#9aa0a8" stroke-width="3"/>`;
      rep(260, y=>{ s+=`<g transform="translate(60 ${y+60})"><rect x="-26" y="-30" width="52" height="64" rx="8" fill="#9fe8ff" opacity=".25" stroke="#9fe8ff" stroke-width="2"/><path d="M-18 4 q-4 -22 18 -22 q22 0 18 22 q-6 10 -18 6 q-12 4 -18 -6z" fill="#ff9ab8" stroke="#c85a7a" stroke-width="1.5"/><path d="M-8 -10 q6 4 0 10 M6 -12 q-6 6 2 12" stroke="#c85a7a" stroke-width="1.2" fill="none"/><rect x="-28" y="34" width="56" height="8" fill="#5a5a6a"/><circle class="blink" cx="-14" cy="20" r="2" fill="#fff"/><circle class="blink" style="animation-delay:.5s" cx="10" cy="14" r="2" fill="#fff"/></g>`
        + `<g transform="translate(60 ${y+170})"><rect x="-4" y="-30" width="8" height="34" fill="#c8303a" transform="rotate(${r()<.5?-25:25} 0 4)"/><circle cy="-30" r="7" fill="#ffd25a" transform="rotate(${r()<.5?-25:25} 0 4)"/><rect x="-14" y="2" width="28" height="10" fill="#3a3a3a"/></g>`; });
      break;
    case 3: { // the ship of Theseus: hull planks, some of them new
      let y = 0, n = 0; while (y < len){ const fresh = r() < .22; s+=`<rect x="10" y="${y}" width="100" height="16" rx="3" fill="${fresh ? "#d8b078" : "#6a4424"}" stroke="#3a2410" stroke-width="1.2"/><circle cx="20" cy="${y+8}" r="1.6" fill="#2a1a0a"/><circle cx="100" cy="${y+8}" r="1.6" fill="#2a1a0a"/>`;
        if (fresh) s+=`<text x="60" y="${y+12}" text-anchor="middle" font-size="9" font-family="Georgia,serif" fill="#5a3a10">new plank #${++n}</text>`; y += 18; }
      rep(300, y=>{ s+=`<path d="M24 ${y} q36 44 72 0" stroke="#c8b080" stroke-width="3" fill="none"/><rect x="22" y="${y+60}" width="76" height="22" rx="6" fill="#14262e" opacity=".85"/><text x="60" y="${y+75}" text-anchor="middle" font-size="11" font-family="Georgia,serif" fill="#f4ead0">same ship?</text>`; });
      break; }
    case 4: // the library of Babel: hexagonal galleries of books
      rep(130, y=>{ const cy = y + 60, hex = [0,1,2,3,4,5].map(k=>{ const a = k*1.0472 + .5236; return `${f1(60+Math.cos(a)*52)},${f1(cy+Math.sin(a)*52)}`; }).join(" ");
        s+=`<polygon points="${hex}" fill="#2a1e14" stroke="#d4af37" stroke-width="2"/>` + Array.from({length:9},(_,k)=>`<rect x="${24+k*8}" y="${cy-18}" width="7" height="${f1(26+r()*8)}" fill="${["#8a2a2a","#2a4a8a","#2a6a3a","#8a6a2a","#5a2a6a"][Math.floor(r()*5)]}"/>`).join("") + `<rect x="22" y="${cy+16}" width="76" height="3" fill="#d4af37"/>`; }, 10);
      break;
    case 5: // the veil of ignorance: drapes and the scales of justice
      for (let x=8; x<120; x+=16) s+=`<path d="M${x} 0 ${Array.from({length: Math.ceil(len/80)}, ()=>"q8 40 0 80").join(" ")}" stroke="#e8e0ff" stroke-width="6" fill="none" opacity=".18"/>`;
      rep(220, y=>{ s+=`<g transform="translate(60 ${y+60})"><path d="M0 -30 v70 M-20 40 h40" stroke="#d4af37" stroke-width="3"/><path d="M-36 -24 h72" stroke="#d4af37" stroke-width="3"/><path d="M-36 -24 l-10 26 h20z M36 -24 l-10 26 h20z" fill="none" stroke="#d4af37" stroke-width="1.5"/><path d="M-46 2 q10 8 20 0z M26 2 q10 8 20 0z" fill="#d4af37"/><circle cy="-30" r="4" fill="#d4af37"/></g>`
        + `<text x="60" y="${y+150}" text-anchor="middle" font-size="11" font-family="Georgia,serif" fill="#e8e0ff" opacity=".75">who will you be?</text>`; });
      break;
    case 6: // Descartes' dream: drifting clouds, the evil demon's eye and the cogito
      rep(200, y=>{ s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><path d="M20 ${y+40} q0 -20 20 -18 q8 -16 26 -6 q18 -6 22 12 q14 4 8 16 h-70 q-12 -2 -6 -4z" fill="#c8b8ff" opacity=".25"/></g>`
        + `<g transform="translate(60 ${y+110})"><path d="M-30 0 q30 -26 60 0 q-30 26 -60 0z" fill="#1a0a1a" stroke="#ff5a6e" stroke-width="2"/><circle r="9" fill="#ff5a6e"/><circle class="blink" r="4" fill="#1a0a1a"/></g>`
        + `<text x="60" y="${y+170}" text-anchor="middle" font-size="13" font-style="italic" font-family="Georgia,serif" fill="#ffe58a">cogito, ergo sum</text>`; });
      break;
    case 7: // the way of the Tao: bamboo, a turning yin and yang, flowing water
      s+=`<path d="M14 0 V${len}" stroke="#4a8a3a" stroke-width="6"/>`; rep(40, y=>{ s+=`<path d="M10 ${y} h8" stroke="#2a5a2a" stroke-width="3"/>`; }, 0);
      rep(200, y=>{ const cx = 66, cy = y + 70, R = 28;
        s+=`<g class="vspin" style="animation-duration:16s;transform-origin:${cx}px ${cy}px"><circle cx="${cx}" cy="${cy}" r="${R}" fill="#f4f0e8"/><path d="M${cx} ${cy-R} a${R} ${R} 0 0 1 0 ${2*R} a${R/2} ${R/2} 0 0 1 0 ${-R} a${R/2} ${R/2} 0 0 0 0 ${-R}z" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy-R/2}" r="4" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy+R/2}" r="4" fill="#f4f0e8"/></g>`
          + [0,1,2].map(k=>`<path d="M28 ${y+130+k*12} q10 -6 20 0 t20 0 t20 0 t20 0" stroke="#7ad8c8" stroke-width="2" fill="none" opacity=".6"/>`).join("")
          + `<path d="M18 ${y+40} q14 -6 22 -20" stroke="#4a8a3a" stroke-width="2" fill="none"/><ellipse cx="42" cy="${y+18}" rx="10" ry="3" transform="rotate(-50 42 ${y+18})" fill="#5aa84a"/>`; });
      break;
    case 8: // Zeno's paradoxes: an arrow halving its way to the target, and the tortoise
      rep(170, y=>{ s+=`<path d="M10 ${y+30} H110" stroke="#c9c9c9" stroke-width="1.5" stroke-dasharray="3 3"/>` + [60,85,97.5,103.8,106.9,108.4].map((x,k)=>`<path d="M${x} ${y+24} v12" stroke="#ffd25a" stroke-width="${f1(2-k*.25)}"/>`).join("")
        + `<path d="M10 ${y+30} h30 M34 ${y+25} l8 5 l-8 5" stroke="#e8e0ff" stroke-width="2.4" fill="none"/><path d="M10 ${y+26} l-6 -4 M10 ${y+34} l-6 4" stroke="#e8e0ff" stroke-width="1.6"/>`
        + `<g transform="translate(66 ${y+100})"><ellipse rx="26" ry="16" fill="#4a7a3a" stroke="#2a4a1a" stroke-width="2"/><path d="M-12 -8 l8 6 l8 -6 l8 6 M-16 4 h32" stroke="#2a4a1a" stroke-width="1.5" fill="none"/><circle cx="30" cy="-4" r="7" fill="#6a9a4a"/><circle cx="32" cy="-6" r="1.4" fill="#1a1a1a"/><path d="M-18 14 v6 M18 14 v6 M-6 16 v6 M6 16 v6" stroke="#6a9a4a" stroke-width="4" stroke-linecap="round"/></g>`
        + `<text x="60" y="${y+150}" text-anchor="middle" font-size="11" font-family="Georgia,serif" fill="#e8e0ff" opacity=".75">${["this sentence is false","½ + ¼ + ⅛ + …","can Achilles catch up?"][Math.floor(r()*3)]}</text>`; });
      break;
    case 9: // the void: stars and fading question marks
      for (let k=0; k<len/14; k++) s+=`<circle cx="${f1(r()*120)}" cy="${f1(r()*len)}" r="${f1(.5+r()*1.4)}" fill="#fff" opacity="${f1(.3+r()*.6)}"/>`;
      rep(160, y=>{ s+=`<text class="blink" style="animation-delay:-${f1(r()*3)}s" x="${f1(30+r()*60)}" y="${y+60}" text-anchor="middle" font-size="${f1(24+r()*30)}" font-family="Georgia,serif" fill="#c8b8ff" opacity="${f1(.15+r()*.35)}">?</text>`; });
      break;
  }
  return vwall(s, len, side);
}
/* Socrates' gadfly: it earns a laurel wreath, a scroll, a toga sash and Diogenes' lantern, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#d4af37" : "#2a2a3a", eye = gold ? "#ffe58a" : level >= 5 ? `hsl(${hue} 90% 55%)` : "#e8443a";
  const laurel = [-160,-140,-120,-60,-40,-20].map(a => { const t = a * Math.PI / 180; return `<ellipse cx="${f1(Math.cos(t) * 13)}" cy="${f1(-6 + Math.sin(t) * 13)}" rx="3.4" ry="1.7" transform="rotate(${a + 90} ${f1(Math.cos(t) * 13)} ${f1(-6 + Math.sin(t) * 13)})" fill="#5aa84a"/>`; }).join("");
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <g class="swt" style="animation-duration:.4s"><ellipse cx="-14" cy="-6" rx="14" ry="7" transform="rotate(-30 -14 -6)" fill="#e8f0ff" opacity=".55" stroke="#9fb8d8" stroke-width="1"/><ellipse cx="14" cy="-6" rx="14" ry="7" transform="rotate(30 14 -6)" fill="#e8f0ff" opacity=".55" stroke="#9fb8d8" stroke-width="1"/></g>
    <path d="M-8 10 l-10 6 M-8 16 l-10 10 M8 10 l10 6 M8 16 l10 10" stroke="#14141e" stroke-width="1.6" stroke-linecap="round"/>
    <ellipse cy="12" rx="9" ry="14" fill="${body}" stroke="#14141e" stroke-width="1.4"/>
    <path d="M-8 8 h16 M-8 14 h16 M-7 20 h14" stroke="${gold ? "#b8861a" : "#5a5a6a"}" stroke-width="1.6"/>
    <path d="M-4 -14 q-4 -8 -10 -9 M4 -14 q4 -8 10 -9" stroke="#14141e" stroke-width="1.4" fill="none"/>
    <circle cy="-6" r="10" fill="${body}" stroke="#14141e" stroke-width="1.4"/>
    <ellipse cx="-6" cy="-8" rx="5.5" ry="6.5" fill="${eye}"/><ellipse cx="6" cy="-8" rx="5.5" ry="6.5" fill="${eye}"/>
    <g class="av-blink"><circle cx="-5" cy="-10" r="1.8" fill="#fff"/><circle cx="7" cy="-10" r="1.8" fill="#fff"/></g>
    ${level >= 2 ? laurel : ""}
    ${level >= 3 ? `<g transform="translate(20 22) rotate(-20)"><rect x="-8" y="-5" width="16" height="10" fill="#f4ead0" stroke="#c8b480"/><circle cx="-8" cy="0" r="5" fill="#e8d8a8" stroke="#c8b480"/><circle cx="8" cy="0" r="5" fill="#e8d8a8" stroke="#c8b480"/><path d="M-4 -2 h8 M-4 1 h6" stroke="#8a7a5a" stroke-width="1"/></g>` : ""}
    ${level >= 4 ? `<path d="M-8 2 q8 10 8 23" stroke="#f4f0e8" stroke-width="4" fill="none" opacity=".9"/>` : ""}
    ${level >= 6 ? `<g transform="translate(-24 16)"><path d="M0 -16 v6" stroke="#8a7a5a" stroke-width="1.4"/><circle r="12" fill="#ffd25a" opacity=".2"/><rect class="blink" x="-5" y="-10" width="10" height="14" rx="2" fill="#ffd25a" stroke="#8a6a1a"/><path d="M-6 -10 h12 M-6 4 h12" stroke="#8a6a1a" stroke-width="2"/></g>` : ""}
    ${level >= 1 ? `<text class="blink" x="18" y="-22" font-size="11" font-weight="700" fill="#c8b8ff" font-family="Georgia,serif">?</text><text class="blink" style="animation-delay:.6s" x="-26" y="-20" font-size="9" font-weight="700" fill="#ffe58a" font-family="Georgia,serif">?</text>` : ""}
    ${gold ? `<circle r="35" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<path d="M100 55 c-14 -30 -56 -30 -56 0 c0 30 42 30 56 0 c14 -30 56 -30 56 0 c0 30 -42 30 -56 0z" fill="none" stroke="${c}" stroke-width="5"/><text x="100" y="66" text-anchor="middle" font-size="30" font-weight="700" font-family="Georgia,serif" fill="#ffe58a">?</text>`
    + [[30,26],[170,30],[36,94],[166,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<rect x="62" y="16" width="46" height="8" fill="#e8dcc0" stroke="${c}" stroke-width="1.5"/><rect x="68" y="24" width="34" height="56" fill="#d8ccb0" stroke="${c}" stroke-width="1.5"/><path d="M76 26 v52 M85 26 v52 M94 26 v52" stroke="#b8ac90" stroke-width="2"/><rect x="62" y="80" width="46" height="8" fill="#e8dcc0" stroke="${c}" stroke-width="1.5"/><text x="85" y="58" text-anchor="middle" font-size="20" font-family="Georgia,serif" fill="#5a3a7a">Φ</text>`);
  if (t === "trojan") return W(170,100,`<circle cx="85" cy="40" r="18" fill="#e8dcc0" stroke="${c}" stroke-width="2"/><path d="M68 46 q17 32 34 0 q-4 14 -17 16 q-13 -2 -17 -16z" fill="#c8bca0" stroke="${c}" stroke-width="1.5"/><path d="M78 36 h4 M88 36 h4" stroke="#5a4a3a" stroke-width="2"/><rect x="66" y="66" width="38" height="20" fill="#d8ccb0" stroke="${c}" stroke-width="2"/>`);
  if (t === "adware") return W(170,100,`<rect x="40" y="26" width="90" height="38" rx="16" fill="#fff" stroke="${c}" stroke-width="2"/><path d="M70 64 l-8 14 l20 -14z" fill="#fff" stroke="${c}" stroke-width="2"/><text x="85" y="50" text-anchor="middle" font-size="13" font-family="Georgia,serif" fill="#3a3a5a">obviously</text>`);
  if (t === "spam") return W(170,90,`<ellipse cx="85" cy="42" rx="34" ry="20" fill="#e8e8f0" stroke="${c}" stroke-width="2"/><circle cx="62" cy="70" r="5" fill="#e8e8f0" stroke="${c}"/><text x="85" y="47" text-anchor="middle" font-size="13" font-family="Georgia,serif" fill="#5a5a7a">meh</text>`);
  if (t === "blocked") return W(170,100,`<rect x="22" y="26" width="126" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="20" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">HEMLOCK</text>`);
  return null;
}
registerSubject({
  key:"phil", name:"Philosophy", theme:"A gadfly diving down a well of questions", gemWord:"Paradox", gemTitle:"One in a Paradox", emoji:"🤔",
  blurb:"You're Socrates' <b>gadfly</b>, buzzing round the agora. Each prompt has many correct answers. <b>Obvious answers are mere opinion. Answers other thinkers missed take you deeper</b>, past the Paris café, the thought-experiment lab, the ship of Theseus and the library of Babel, behind the veil of ignorance and into Descartes' dream, along the Tao and through Zeno's paradoxes, to the biggest question of all.",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Paradox", rootkit:"Profound", trojan:"Socratic", adware:"Common sense", spam:"Mere opinion"}, blocked:"Fallacy", fw:"HEMLOCK",
  notes:{rootkit:"Profound: very few thinkers got this deep.", trojan:"Socratic: not the usual answer.", adware:"Common sense: correct and common.", spam:"Mere opinion: what everyone in the agora says first."},
  ladder:{gem:"One in a Paradox: almost no one thinks of it", rootkit:"Profound: a rare answer", trojan:"Socratic: a strong, less common answer", adware:"Common sense: correct and common", spam:"Mere opinion: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Question ▼", inject:"Ask", hint:"▼ rarer answers dig deeper ▼", count:"thinking it through"},
  shout:t => ({gem:"I THINK, THEREFORE I AM!", rootkit:"PROFOUND!", blocked:"FALLACY!"})[t],
  particles:["?","∴","∞","Φ"], particleColor:"#c8b8ff",
  meter:{label:"QUESTIONS ASKED", fmt:fmtQ, zone:fmtQ, tick:fmtQ, gain:(a,b)=>`ask ${fmtQ(b)}`},
  start:{bg:"linear-gradient(180deg,#14162a,#1e2238)", label:"Start · 1 question", zone:"A simple question", color:"#c8b8ff"},
  endBg:"#05040c",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Beyond words",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
