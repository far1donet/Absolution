/* Theory of Knowledge — an owl climbs out of Plato's cave: from the shadows on the wall, past the fire and the cave
   mouth, through the library, the laboratory and the agora, up through the clouds of uncertainty to the Sun.
   Rarer answers climb higher into the light.
   Syllabus: IB Theory of Knowledge (first assessment 2022): the core theme, the knowledge framework and the twelve
   concepts, the five optional themes, the five areas of knowledge, and the exhibition and essay. One course for everyone. */
(function(){
const CATALOG = [
  {label:"Core", units:[
    {code:"C", name:"Knowledge and the knower", topics:[["C.1","Knowledge and the knower"],["C.2","Concepts, claims and the knowledge framework"]]},
  ]},
  {label:"Optional themes", units:[
    {code:"O", name:"Optional themes", topics:[["O.1","Knowledge and technology"],["O.2","Knowledge and language"],["O.3","Knowledge and politics"],["O.4","Knowledge and religion"],["O.5","Knowledge and indigenous societies"]]},
  ]},
  {label:"Areas of knowledge", units:[
    {code:"A", name:"Areas of knowledge", topics:[["A.1","History"],["A.2","The human sciences"],["A.3","The natural sciences"],["A.4","Mathematics"],["A.5","The arts"]]},
  ]},
  {label:"Assessment", units:[
    {code:"X", name:"Assessment", topics:[["X.1","The exhibition and the essay"]]},
  ]},
];

const PROMPTS = [
/* ---------- C Core ---------- */
P("tk001","C.1","Name a source of knowledge (a way of knowing).","Introspection",[
  ["Sense perception",20,"senses","perception","observation","sight"],["Reason",18,"logic","reasoning"],["Language",15],["Emotion",12,"emotions","feelings"],["Memory",10],["Imagination",8],
  ["Intuition",8,"gut feeling"],["Faith",6,"belief"],["Testimony",6,"authority","experts","other people"],["Experience",6,"personal experience"],["Introspection",.4,"looking inward"]]),
P("tk002","C.1","Name a cognitive bias that can distort what a knower believes.","Backfire effect",[
  ["Confirmation bias",25],["Dunning–Kruger effect",10,"dunning kruger"],["Groupthink",8],["Anchoring",8,"anchoring bias"],["Availability heuristic",8,"availability bias"],["Hindsight bias",6],
  ["Bandwagon effect",6,"bandwagon","herd mentality"],["Cultural bias",6,"ethnocentrism"],["In-group bias",6,"in group bias","tribalism"],["Framing effect",4,"framing"],["Backfire effect",.4]]),
P("tk003","C.1","Name a condition or theory of what turns a belief into knowledge.","The Gettier problem",[
  ["Justified true belief",25,"jtb","true justified belief"],["Evidence",12],["Certainty",10],["Justification",10,"justified"],["Truth",8,"true"],["Empiricism",6,"experience"],["Rationalism",6,"reason"],
  ["Reliabilism",4,"reliable process"],["Correspondence theory of truth",4,"correspondence theory"],["Coherence theory of truth",4,"coherence theory"],["Pragmatism",4,"pragmatic theory"],
  ["The Gettier problem",.4,"gettier","gettier cases"]]),
P("tk004","C.1","Name a philosopher famous for a theory of knowledge.","Edmund Gettier",[
  ["Plato",20],["René Descartes",20,"descartes","rene descartes"],["Socrates",12],["Immanuel Kant",10,"kant"],["David Hume",10,"hume"],["John Locke",8,"locke"],["Aristotle",8],
  ["Karl Popper",8,"popper"],["Thomas Kuhn",6,"kuhn"],["Ludwig Wittgenstein",4,"wittgenstein"],["Friedrich Nietzsche",4,"nietzsche"],["Michel Foucault",3,"foucault"],["Francis Bacon",3,"bacon"],
  ["Edmund Gettier",.4,"gettier"]]),
P("tk005","C.2","Name one of the twelve TOK concepts.","Responsibility",[
  ["Evidence",15],["Truth",12],["Certainty",12],["Interpretation",10],["Perspective",8,"perspectives"],["Power",8],["Justification",8],["Explanation",8],["Objectivity",8],["Culture",6],["Values",6],
  ["Responsibility",.4]]),
P("tk006","C.2","Name an element of the TOK knowledge framework.","Scope",[
  ["Perspectives",30,"perspective"],["Ethics",25,"ethical"],["Methods and tools",25,"methods","tools","methodology"],["Scope",.4,"scope and applications"]]),
P("tk007","C.2","Name a part of a TOK argument.","Reductio ad absurdum",[
  ["Claim",20,"claims"],["Counterclaim",20,"counterclaims","counter claim"],["Example",12,"examples","real life situation"],["Evidence",12],["Conclusion",8],["Implication",8,"implications"],
  ["Perspective",8,"perspectives"],["Assumption",6,"assumptions"],["Premise",5,"premises"],["Reductio ad absurdum",.4,"reductio"]]),
/* ---------- O Optional themes ---------- */
P("tk008","O.1","Name a way technology changes how we know.","Cognitive offloading",[
  ["Artificial intelligence",18,"ai","chatgpt","large language models"],["Search engines",15,"google","search"],["Social media",12],["Algorithms",12,"filter bubbles","recommendation algorithms"],
  ["Telescopes",8,"telescope"],["Microscopes",8,"microscope"],["Computers",6,"calculators","computing"],["Wikipedia",6,"online encyclopedias"],["Deepfakes",6,"deepfake"],["Big data",6,"data analysis"],
  ["Cognitive offloading",.4,"offloading memory"]]),
P("tk009","O.1","Name a problem for knowledge created by digital technology.","Epistemic dependence",[
  ["Misinformation",25,"fake news","disinformation"],["Echo chambers",18,"filter bubbles","echo chamber"],["Deepfakes",12,"deepfake"],["Algorithmic bias",10,"biased algorithms"],["Information overload",8],
  ["Loss of privacy",8,"privacy","surveillance"],["AI hallucinations",6,"hallucinations","ai making things up"],["Bots",4,"bot accounts"],["Epistemic dependence",.4,"over reliance on technology"]]),
P("tk010","O.2","Name a way language can shape or limit knowledge.","Newspeak",[
  ["Linguistic relativity",20,"sapir whorf","sapir whorf hypothesis","linguistic determinism"],["Loaded language",15,"emotive language","loaded words"],["Translation problems",12,"lost in translation","translation"],
  ["Euphemism",10,"euphemisms"],["Framing",10],["Ambiguity",8,"ambiguous"],["Jargon",6,"technical language"],["Metaphor",6,"metaphors"],["Propaganda",5],["Newspeak",.4,"orwell","1984 newspeak"]]),
P("tk011","O.2","Name a non-verbal language or symbol system.","The bee waggle dance",[
  ["Body language",15,"gestures"],["Sign language",15,"bsl","asl"],["Mathematics",12,"maths","math","mathematical symbols"],["Emojis",10,"emoji"],["Music notation",8,"musical notation","sheet music"],
  ["Facial expressions",6,"faces"],["Road signs",6,"traffic signs"],["Braille",5],["Morse code",5],["The bee waggle dance",.4,"waggle dance","bee dance"]]),
P("tk012","O.3","Name a way political power can shape knowledge.","Lysenkoism",[
  ["Censorship",20],["Propaganda",20],["Controlling the media",12,"state media","media control"],["Rewriting history",10,"historical revisionism"],["Funding research",8,"research funding"],
  ["Controlling the curriculum",8,"education","school curriculum"],["Surveillance",6],["Book burning",6,"banning books","book bans"],["Fake news",4],["Lysenkoism",.4,"lysenko"]]),
P("tk013","O.3","Name an example of propaganda or state control of knowledge.","Stalin's doctored photographs",[
  ["Nazi propaganda",18,"nazi germany","goebbels"],["Soviet propaganda",12,"ussr","soviet union"],["North Korea",12,"north korean propaganda"],["The Great Firewall of China",10,"great firewall","chinese censorship"],
  ["Orwell's 1984",10,"1984","nineteen eighty four","big brother"],["Galileo's trial",6,"galileo"],["Cultural Revolution",6,"mao"],["Nazi book burnings",6,"book burnings"],["McCarthyism",4,"red scare"],
  ["Stalin's doctored photographs",.4,"doctored photos","airbrushed photographs"]]),
P("tk014","O.4","Name a source of religious knowledge.","Apophatic theology",[
  ["Sacred texts",25,"scripture","bible","quran","holy books"],["Faith",18],["Revelation",12],["Religious authorities",10,"priests","clergy","religious leaders"],["Tradition",8],["Prayer",6],
  ["Mystical experience",6,"religious experience"],["Miracles",5],["Interpretation of scripture",4,"exegesis"],["Apophatic theology",.4,"negative theology","via negativa"]]),
P("tk015","O.4","Name a question or tension between religion and science.","The fine-tuning argument",[
  ["Evolution versus creation",25,"evolution","creationism","creation"],["Does God exist?",10,"existence of god","god"],["The Galileo affair",12,"galileo"],["Age of the Earth",10],["The Big Bang",8,"big bang"],
  ["Miracles",8],["The problem of evil",6,"problem of evil"],["Life after death",6,"afterlife"],["Non-overlapping magisteria",4,"noma","gould"],["The fine-tuning argument",.4,"fine tuning"]]),
P("tk016","O.5","Name a way indigenous knowledge is passed on or preserved.","Wampum belts",[
  ["Oral tradition",25,"oral history","word of mouth"],["Storytelling",18,"stories","myths"],["Elders",10,"elders teaching"],["Songlines",10,"songs","song"],["Ceremonies",8,"rituals"],["Dance",8],
  ["Art",6,"rock art"],["Proverbs",4,"sayings"],["Apprenticeship",4,"learning by doing"],["Wampum belts",.4,"wampum"]]),
P("tk017","O.5","Name an example of indigenous knowledge.","Two-eyed seeing",[
  ["Traditional ecological knowledge",18,"tek","ecological knowledge"],["Traditional medicine",15,"herbal medicine","medicinal plants"],["Polynesian wayfinding",12,"navigation by stars","wayfinding","star navigation"],
  ["Aboriginal fire management",10,"cultural burning","fire management"],["Aboriginal songlines",8,"songlines"],["Inuit knowledge of sea ice",8,"inuit","sea ice"],["Seasonal calendars",6,"indigenous calendars"],
  ["Three Sisters planting",6,"three sisters"],["Two-eyed seeing",.4,"etuaptmumk","two eyed seeing"]]),
/* ---------- A Areas of knowledge ---------- */
P("tk018","A.1","Name a source historians use.","Tree rings",[
  ["Primary sources",20,"primary source"],["Secondary sources",15,"secondary source"],["Archives",12,"documents","records"],["Letters and diaries",10,"letters","diaries","diary"],
  ["Archaeological artefacts",10,"artefacts","artifacts","archaeology"],["Oral history",8,"interviews"],["Photographs",8,"photos"],["Newspapers",8],["Maps",4],["Tree rings",.4,"dendrochronology"]]),
P("tk019","A.1","Name a reason historical knowledge can be uncertain or biased.","Whig history",[
  ["Biased sources",18,"bias","source bias"],["History is written by the victors",15,"written by the winners","victors"],["Missing evidence",12,"gaps","lost sources","incomplete evidence"],
  ["Interpretation",12,"different interpretations"],["Hindsight",8,"hindsight bias"],["Selection of facts",8,"selection","selective"],["Propaganda",6],["Revisionism",6,"changing perspectives"],
  ["Presentism",4,"judging the past by today s values"],["Whig history",.4,"whig interpretation"]]),
P("tk020","A.1","Name a historian or approach to history.","Counterfactual history",[
  ["Herodotus",12],["Great man theory",10,"great men"],["E. H. Carr",10,"carr","eh carr","what is history"],["Marxist history",10,"marxist","marxism"],["Thucydides",8],["Social history",6,"history from below"],
  ["Revisionism",6,"revisionist"],["Annales school",4,"annales"],["Postmodernism",4,"postmodern"],["Oral history",4],["Microhistory",3],["Counterfactual history",.4,"counterfactuals","what if history"]]),
P("tk021","A.2","Name a human science.","Criminology",[
  ["Psychology",25],["Economics",20],["Sociology",15],["Anthropology",12],["Geography",8,"human geography"],["Political science",6,"politics"],["Linguistics",4],["Business",4,"business management"],
  ["Criminology",.4]]),
P("tk022","A.2","Name a problem with studying humans scientifically.","Reflexivity",[
  ["The Hawthorne effect",18,"hawthorne","observer effect","people act differently when watched"],["Ethical limits on experiments",15,"ethics","ethical limits"],["Humans are complex and unpredictable",12,"complexity","unpredictable","free will"],
  ["Researcher bias",10,"bias"],["The replication crisis",10,"replication","hard to replicate"],["Hard to control variables",8,"controlling variables","variables"],["Unreliable self-report",8,"self report","lying"],
  ["Cultural differences",8,"culture","weird samples"],["Reflexivity",.4,"the knower is also the known","self fulfilling predictions"]]),
P("tk023","A.2","Name a famous experiment in the human sciences.","Rosenhan experiment",[
  ["Milgram's obedience study",25,"milgram"],["Stanford prison experiment",20,"zimbardo"],["Asch's conformity study",12,"asch"],["Marshmallow test",10,"stanford marshmallow"],["Bobo doll experiment",8,"bandura","bobo doll"],
  ["Little Albert",6,"watson"],["Robbers Cave",5,"sherif"],["Pavlov's dogs",4,"pavlov"],["Rosenhan experiment",.4,"rosenhan","on being sane in insane places"]]),
P("tk024","A.3","Name a feature of the scientific method.","Occam's razor",[
  ["Hypothesis",20,"hypotheses"],["Experiment",18,"experiments","experimentation"],["Observation",15],["Falsifiability",10,"falsification"],["Peer review",10],["Replication",10,"reproducibility"],
  ["Controlled variables",8,"control","variables"],["Theory",6,"theories"],["Data",6,"measurement"],["Induction",5,"inductive reasoning"],["Occam's razor",.4,"occams razor","parsimony"]]),
P("tk025","A.3","Name a paradigm shift in science.","Oxygen replacing phlogiston",[
  ["Heliocentrism",25,"copernicus","copernican revolution","earth orbits the sun"],["Evolution by natural selection",18,"darwin","evolution"],["Relativity",15,"einstein","theory of relativity"],
  ["Quantum mechanics",10,"quantum theory"],["Plate tectonics",10,"continental drift","wegener"],["Germ theory",8,"germ theory of disease","pasteur"],["The Big Bang",6,"big bang"],
  ["Newtonian physics",5,"newton","gravity"],["Atomic theory",4,"dalton","atoms"],["Oxygen replacing phlogiston",.4,"phlogiston","lavoisier"]]),
P("tk026","A.3","Name a philosopher of science or a problem in the philosophy of science.","The black swan",[
  ["Karl Popper",20,"popper","falsification"],["Thomas Kuhn",18,"kuhn","paradigm shifts"],["The problem of induction",12,"induction","hume s problem"],["Pseudoscience and demarcation",6,"pseudoscience","demarcation"],
  ["Theory-laden observation",6,"theory laden"],["Confirmation bias",6],["Francis Bacon",5,"bacon"],["Paul Feyerabend",3,"feyerabend"],["Underdetermination",3],["The black swan",.4,"black swans","black swan"]]),
P("tk027","A.4","Name a feature of mathematical knowledge.","Gödel's incompleteness theorems",[
  ["Proof",25,"proofs"],["Axioms",18,"axiom"],["Certainty",12],["Deduction",10,"deductive reasoning"],["Abstraction",8,"abstract"],["Theorems",8,"theorem"],["Logic",8],["Universality",6,"universal"],
  ["Conjecture",5,"conjectures"],["Gödel's incompleteness theorems",.4,"godel","incompleteness","godels incompleteness"]]),
P("tk028","A.4","Name a famous theorem, proof or open problem in mathematics.","Kepler conjecture",[
  ["Pythagoras' theorem",15,"pythagoras","pythagorean theorem"],["Fermat's Last Theorem",18,"fermat","fermats last theorem"],["Riemann hypothesis",10,"riemann"],["Goldbach conjecture",8,"goldbach"],
  ["Four colour theorem",8,"four color theorem"],["Collatz conjecture",6,"collatz","3n 1"],["P versus NP",6,"p vs np"],["Poincaré conjecture",5,"poincare"],["Twin prime conjecture",5,"twin primes"],
  ["Kepler conjecture",.4,"kepler","sphere packing"]]),
P("tk029","A.4","Name a debate about the nature of mathematics.","Logicism",[
  ["Is mathematics discovered or invented?",30,"discovered or invented","invented or discovered","discovered","invented"],["Platonism",10,"plato"],["Formalism",8],["Is mathematics universal?",8,"universal"],
  ["The unreasonable effectiveness of mathematics",6,"wigner","unreasonable effectiveness"],["Infinity",6,"different infinities"],["Intuitionism",4],["Logicism",.4,"frege","russell"]]),
P("tk030","A.5","Name a function or purpose of art.","Catharsis",[
  ["Expressing emotion",20,"emotion","expression","self expression"],["Beauty",15,"aesthetic pleasure","aesthetics"],["Social or political commentary",15,"political","social commentary","protest"],["Storytelling",10,"stories"],
  ["Communication",10],["Provoking thought",8,"challenge","make people think"],["Entertainment",8],["Recording history",6,"history"],["Religious worship",6,"religion","worship"],["Catharsis",.4]]),
P("tk031","A.5","Name a controversial or boundary-pushing work of art.","Yves Klein's blue monochromes",[
  ["Duchamp's Fountain",20,"fountain","duchamp","urinal"],["Banksy's shredded painting",12,"banksy","girl with balloon","love is in the bin"],["Comedian (the duct-taped banana)",10,"banana","duct taped banana","comedian","cattelan"],
  ["Warhol's Campbell's Soup Cans",10,"warhol","soup cans","campbell s soup"],["Tracey Emin's My Bed",8,"my bed","tracey emin"],["John Cage's 4′33″",6,"4 33","john cage","4 minutes 33 seconds"],
  ["Guernica",6,"picasso"],["Damien Hirst's shark",6,"hirst","shark in formaldehyde"],["Malevich's Black Square",4,"black square","malevich"],["Yves Klein's blue monochromes",.4,"yves klein","klein blue","ikb"]]),
P("tk032","A.5","Name a way we might judge whether a work of art is good.","The institutional theory of art",[
  ["Skill and technique",18,"skill","technique"],["Emotional impact",15,"emotion","how it makes you feel"],["Originality",12,"creativity","new"],["Beauty",10,"aesthetics"],["Experts and critics",10,"critics","expert opinion"],
  ["Meaning or message",8,"meaning","message"],["Popularity",6],["The test of time",6,"stands the test of time","lasting"],["Price",4,"value","market value"],["The institutional theory of art",.4,"institutional theory","art world"]]),
/* ---------- X Assessment ---------- */
P("tk033","X.1","Name a component of TOK assessment, or something it rewards.","The planning and progress form",[
  ["The TOK essay",20,"essay","1600 word essay"],["The TOK exhibition",18,"exhibition"],["Prescribed titles",10,"prescribed title","titles"],["The IA prompts",8,"ia prompt","prompts"],["Counterclaims",8,"counterclaim"],
  ["Real-life examples",8,"examples","real life situations"],["Implications",6],["Knowledge questions",6,"knowledge question"],["Three objects",6,"objects","3 objects"],["The planning and progress form",.4,"ppf","planning and progress"]]),
];

/* ================= Plato's cave (upwards) ================= */
const BANDS = [
  {name:"The shadows",        zone:"Shadows on the wall",     from:0,  to:40,  hue:30,  bg:["#0c0a08","#14100c"]},
  {name:"The fire",           zone:"The fire",                from:40, to:100, hue:20,  bg:["#14100c","#2a160a"]},
  {name:"The cave passage",   zone:"The cave passage",        from:100,to:170, hue:35,  bg:["#2a160a","#2a2016"]},
  {name:"The cave mouth",     zone:"The cave mouth",          from:170,to:250, hue:45,  bg:["#2a2016","#4a4030"]},
  {name:"Reflections",        zone:"Reflections in the water", from:250,to:320, hue:195, bg:["#4a4030","#3a5a6a"]},
  {name:"The library",        zone:"The library",             from:320,to:390, hue:30,  bg:["#3a5a6a","#4a3a2a"]},
  {name:"The laboratory",     zone:"The laboratory and observatory", from:390,to:460, hue:180, bg:["#4a3a2a","#2a4a5a"]},
  {name:"The agora",          zone:"The agora",               from:460,to:530, hue:40,  bg:["#2a4a5a","#6a7a9a"]},
  {name:"Clouds of doubt",    zone:"The clouds of doubt",     from:530,to:600, hue:220, bg:["#6a7a9a","#a8c0e0"]},
  {name:"The Sun",            zone:"The Sun",                 from:600,to:760, hue:48,  bg:["#a8c0e0","#fff0b0"]},
];
const FACTS = [
  [-30,"chained since birth, the prisoners think the shadows are all there is"],[12,"how do you know what you know?"],[30,"\"The unexamined life is not worth living\" · Socrates"],
  [60,"behind the prisoners, a fire casts the shadows"],[90,"perception is not the same as reality"],[125,"\"I think, therefore I am\" · Descartes"],[155,"doubt everything that can be doubted"],
  [190,"the first light hurts the eyes"],[230,"knowledge is justified true belief… or is it?"],[265,"we see the world as reflections first"],[300,"every map leaves something out"],
  [340,"\"Knowledge is power\" · Francis Bacon"],[372,"history is an argument without end"],[410,"a good theory can be proved wrong"],[445,"paradigms shift"],
  [480,"\"Sapere aude\": dare to know · Kant"],[515,"a claim needs a counterclaim"],[550,"certainty is rare"],[585,"\"I know that I know nothing\" · Socrates"],
  [625,"outside the cave, the prisoner sees the Sun itself"],[670,"the Form of the Good"],[720,"enlightenment"],
];
function wall(i, len, side){
  const r = srand(997 + i*23 + (side==="r"?13:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const rock = c => { for (let y=0; y<len; y+=22) for (let x=-10; x<130; x+=26) s+=`<path d="M${f1(x+r()*6)} ${f1(y+r()*6)} l${f1(18+r()*8)} ${f1(-2+r()*4)} l${f1(4+r()*6)} ${f1(14+r()*6)} l${f1(-22-r()*6)} ${f1(4+r()*4)}z" fill="${c}" opacity="${f1(.6+r()*.4)}"/>`; };
  switch(i){
    case 0: // shadows on the cave wall: figures cast by the fire, prisoners in chains
      rock("#1a1410");
      rep(170, y=>{ s+=`<g opacity=".7"><circle cx="60" cy="${y+40}" r="12" fill="#000"/><path d="M48 ${y+54} h24 l6 50 h-36z" fill="#000"/><path d="M40 ${y+70} l-16 24 M80 ${y+70} l16 24" stroke="#000" stroke-width="6"/></g>`
        + `<path d="M10 ${y+140} q50 10 100 0" stroke="#5a5a5a" stroke-width="3" stroke-dasharray="6 4" fill="none"/>`; });
      break;
    case 1: // the fire, with puppeteers' silhouettes
      rock("#24160c");
      rep(160, y=>{ s+=`<g class="blink" style="animation-duration:${f1(.8+r()*.6)}s"><path d="M60 ${y+120} q-22 -30 -6 -60 q4 18 14 6 q-4 -24 10 -36 q8 28 -2 50 q16 -6 14 -26 q18 30 -6 66z" fill="#ff8a2a"/><path d="M60 ${y+120} q-10 -18 0 -36 q10 18 0 36z" fill="#ffe08a"/></g>`
        + `<path d="M30 ${y+130} h60" stroke="#3a2210" stroke-width="8"/>`; });
      break;
    case 2: // the passage: stalactites and bats
      rock("#2a2016");
      rep(80, y=>{ s+=`<path d="M${f1(10+r()*100)} ${y} l6 34 l6 -34z" fill="#4a3a2a"/>`; }, 0);
      rep(190, y=>{ s+=`<path class="fly" style="animation-delay:-${f1(r()*5)}s" d="M40 ${y+60} q8 -10 16 0 q4 -6 8 0 q4 -6 8 0 q8 -10 16 0 q-12 2 -24 8 q-12 -6 -24 -8z" fill="#1a1010"/>`; }, 60);
      break;
    case 3: // the cave mouth: light flooding in
      rock("#3a3022");
      rep(120, y=>{ s+=`<path d="M0 ${y} L120 ${y+60}" stroke="#ffe8a8" stroke-width="${f1(6+r()*10)}" opacity="${f1(.08+r()*.12)}"/>`; }, 0);
      break;
    case 4: // reflections: a pool with mirrored trees
      rep(200, y=>{ s+=`<path d="M60 ${y+80} V${y+30}" stroke="#4a3a1a" stroke-width="6"/><circle cx="60" cy="${y+24}" r="26" fill="#3a8a4a"/>`
        + `<rect x="0" y="${y+90}" width="120" height="70" fill="#3a6a8a" opacity=".6"/><g opacity=".35" transform="translate(0 ${2*(y+90)}) scale(1 -1)"><path d="M60 ${y+80} V${y+30}" stroke="#4a3a1a" stroke-width="6"/><circle cx="60" cy="${y+24}" r="26" fill="#3a8a4a"/></g>`
        + `<path class="wave" d="M10 ${y+120} q10 -4 20 0 t20 0" stroke="#cfe8ff" stroke-width="2" fill="none" opacity=".6"/>`; });
      break;
    case 5: // the library: shelves of books
      s += `<rect width="120" height="${len}" fill="#3a2414"/>`;
      rep(56, y=>{ s+=`<rect x="0" y="${y+48}" width="120" height="6" fill="#6a4424"/>`; let x = 4; while (x < 114){ const w = f1(6+r()*8), h = f1(30+r()*14); s+=`<rect x="${x}" y="${f1(y+48-h)}" width="${w}" height="${h}" fill="hsl(${Math.floor(r()*360)} 45% ${f1(28+r()*20)}%)"/>`; x += +w + 1; } }, 0);
      break;
    case 6: // laboratory and observatory: flasks, a microscope and a telescope
      rep(180, y=>{ s+=`<path d="M30 ${y+20} v30 l-16 40 h44 l-16 -40 v-30z" fill="#9fd8ff" opacity=".4" stroke="#cfe8ff"/><path d="M18 ${y+80} h40 l-6 -14 h-28z" fill="#3ee089" opacity=".6"/>`
        + `<path d="M80 ${y+120} l24 -60" stroke="#c9d4e0" stroke-width="8"/><circle cx="104" cy="${y+58}" r="6" fill="#9fd8ff"/><path d="M76 ${y+120} h24" stroke="#c9d4e0" stroke-width="4"/>`
        + `<circle class="blink" cx="${f1(r()*120)}" cy="${y+150}" r="2" fill="#fff"/>`; });
      break;
    case 7: // the agora: columns and philosophers' scrolls
      rep(170, y=>{ s+=`<rect x="10" y="${y}" width="16" height="130" fill="#e8e2d0"/><rect x="6" y="${y}" width="24" height="8" fill="#d0c8b0"/><rect x="94" y="${y}" width="16" height="130" fill="#e8e2d0"/><rect x="90" y="${y}" width="24" height="8" fill="#d0c8b0"/>`
        + `<g transform="rotate(${f1((r()-.5)*20)} 60 ${y+70})"><rect x="40" y="${y+56}" width="40" height="26" fill="#f4ead0"/><circle cx="40" cy="${y+69}" r="6" fill="#d8c8a0"/><circle cx="80" cy="${y+69}" r="6" fill="#d8c8a0"/><path d="M46 ${y+64} h28 M46 ${y+70} h24 M46 ${y+76} h26" stroke="#8a6a3a" stroke-width="1.5"/></g>`; });
      break;
    case 8: // clouds of doubt: question marks in the mist
      rep(70, y=>{ s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${f1(20+r()*80)}" cy="${y}" rx="40" ry="16" fill="#fff" opacity=".35"/></g><text x="${f1(10+r()*90)}" y="${y+30}" font-size="${f1(18+r()*16)}" font-weight="700" fill="#4a5a7a" opacity=".55" font-family="Georgia,serif">?</text>`; });
      break;
    case 9: // the Sun: rays and light
      rep(60, y=>{ s+=`<path d="M60 ${y} L${f1(r()*120)} ${y+50}" stroke="#ffd25a" stroke-width="${f1(2+r()*4)}" opacity="${f1(.2+r()*.3)}"/>`; }, 0);
      rep(360, y=>{ s+=`<circle cx="60" cy="${y+80}" r="40" fill="#ffe58a" opacity=".85"/><circle cx="60" cy="${y+80}" r="56" fill="#fff6c8" opacity=".25" class="blink"/>`; }, 100);
      break;
  }
  return vwall(s, len, side);
}
/* the owl of Minerva: it opens its eyes, gains spectacles, a mortarboard and a scroll, then glows gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#e0ad2a" : "#8a6a4a", belly = gold ? "#fff2a8" : "#d8c0a0";
  const s = `<g class="av-rock">
    <path d="M-18 -16 l-4 -12 l10 6z M18 -16 l4 -12 l-10 6z" fill="${body}"/>
    <ellipse cy="2" rx="20" ry="24" fill="${body}" stroke="#3a2a1a" stroke-width="2"/><ellipse cy="10" rx="12" ry="14" fill="${belly}"/>
    <path d="M-6 6 q6 4 12 0 M-6 12 q6 4 12 0 M-6 18 q6 4 12 0" stroke="${body}" stroke-width="1.4" fill="none" opacity=".6"/>
    <circle cx="-8" cy="-8" r="7.5" fill="#fff" stroke="#3a2a1a" stroke-width="1.4"/><circle cx="8" cy="-8" r="7.5" fill="#fff" stroke="#3a2a1a" stroke-width="1.4"/>
    <g class="av-blink"><circle cx="-8" cy="-8" r="3.6" fill="${level >= 5 ? `hsl(${hue} 90% 45%)` : "#1a1a1a"}"/><circle cx="8" cy="-8" r="3.6" fill="${level >= 5 ? `hsl(${hue} 90% 45%)` : "#1a1a1a"}"/></g>
    <path d="M-3 -2 l3 5 l3 -5z" fill="#ffb03a"/>
    ${level >= 3 ? `<circle cx="-8" cy="-8" r="9" fill="none" stroke="#3a2a1a" stroke-width="1.6"/><circle cx="8" cy="-8" r="9" fill="none" stroke="#3a2a1a" stroke-width="1.6"/><path d="M1 -8 h-2" stroke="#3a2a1a" stroke-width="1.6"/>` : ""}
    ${level >= 6 ? `<path d="M-16 -22 l16 -8 l16 8 l-16 8z" fill="#1a1a2a"/><path d="M14 -22 v10" stroke="#ffd25a" stroke-width="1.4"/><circle cx="14" cy="-11" r="1.6" fill="#ffd25a"/>` : ""}
    <path d="M-10 26 l-3 5 M-6 26 l0 5 M6 26 l0 5 M10 26 l3 5" stroke="#ffb03a" stroke-width="2" stroke-linecap="round"/>
    ${level >= 4 ? `<g transform="translate(20 10) rotate(20)"><rect x="-3" y="-8" width="6" height="16" fill="#f4ead0"/><circle cy="-8" r="3" fill="#d8c8a0"/><circle cy="8" r="3" fill="#d8c8a0"/></g>` : ""}
    ${gold ? `<circle r="32" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<circle cx="100" cy="56" r="26" fill="#ffe58a"/>` + Array.from({length:12},(_,k)=>{ const a=k/12*6.283; return `<path class="blink" style="animation-delay:${(k*.1).toFixed(1)}s" d="M${f1(100+Math.cos(a)*32)} ${f1(56+Math.sin(a)*32)} L${f1(100+Math.cos(a)*48)} ${f1(56+Math.sin(a)*48)}" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`; }).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M85 10 l40 80 h-80z" fill="none" stroke="${c}" stroke-width="4"/><circle cx="85" cy="62" r="12" fill="${c}"/><circle cx="85" cy="62" r="5" fill="#1a1a2a"/>`);
  if (t === "trojan") return W(170,100,`<rect x="50" y="20" width="70" height="60" rx="4" fill="#f4ead0" stroke="${c}" stroke-width="3"/><path d="M60 36 h50 M60 48 h44 M60 60 h48" stroke="${c}" stroke-width="3"/><path d="M85 80 v14" stroke="${c}" stroke-width="3"/>`);
  if (t === "adware") return W(170,100,`<ellipse cx="85" cy="50" rx="46" ry="26" fill="none" stroke="${c}" stroke-width="3"/><text x="85" y="60" text-anchor="middle" font-size="30" font-family="Georgia,serif" fill="${c}">?</text>`);
  if (t === "spam") return W(170,90,`<path d="M50 70 q10 -40 35 -40 q25 0 35 40z" fill="#1a1a1a" opacity=".7"/><path d="M30 76 h110" stroke="${c}" stroke-width="2"/>`);
  if (t === "blocked") return W(170,100,`<rect x="30" y="30" width="110" height="40" rx="6" fill="#2a1a1a" stroke="#e8443a" stroke-width="3"/><text x="85" y="57" text-anchor="middle" font-size="17" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">DOGMA</text>`);
  return null;
}
const lux = p => Math.pow(10, -3 + p*8/700);
function fmtL(v){ if (v >= 1000) return Math.round(v).toLocaleString() + " lx"; if (v >= 10) return Math.round(v) + " lx"; if (v >= 1) return v.toFixed(1) + " lx"; if (v >= .01) return v.toFixed(2) + " lx"; return v.toFixed(3) + " lx"; }
registerSubject({
  key:"tok", name:"Theory of Knowledge", theme:"An owl climbing out of Plato's cave into the light", gemWord:"Paradox", gemTitle:"One in a Paradox", emoji:"🦉",
  blurb:"You're an owl chained among the prisoners in Plato's cave, watching shadows. Each prompt has many correct answers. <b>Obvious answers stay in the shadows. Answers other players missed climb you towards the light</b>, past the fire and the cave mouth, through the library, the laboratory and the agora, up through the clouds of doubt to the Sun.",
  axis:"up", arrow:"▲", noLevel:"One course for all",
  tiers:{gem:"One in a Paradox", rootkit:"Enlightenment", trojan:"Justified true belief", adware:"Belief", spam:"Shadow on the wall"}, blocked:"Fallacy", fw:"DOGMA",
  notes:{rootkit:"Enlightened: very few knowers got here.", trojan:"A justified answer most people don't reach.", adware:"A common belief, but a true one.", spam:"The shadow everyone sees first."},
  ladder:{gem:"A paradox: almost no one thinks of it", rootkit:"Enlightenment: a rare insight", trojan:"Justified true belief: a strong, less common answer", adware:"Belief: correct and common", spam:"A shadow on the wall: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Climb ▲", inject:"Question", hint:"▲ rarer answers climb further into the light ▲", count:"examining the evidence"},
  shout:t => ({gem:"SAPERE AUDE!", rootkit:"BUT HOW DO WE KNOW?", blocked:"FALLACY!"})[t],
  particles:["?","!","∴","∵"], particleColor:"#ffe58a",
  meter:{label:"LIGHT", fmt:p=>fmtL(lux(p)), zone:p=>fmtL(lux(p)), tick:p=>fmtL(lux(p)), gain:(a,b)=>`climb to ${fmtL(lux(b))}`},
  start:{bg:"linear-gradient(0deg,#050403,#0c0a08)", label:"Start · 0.001 lx", zone:"Chained in the dark", color:"#ffb03a"},
  endBg:"#fff6d8",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Beyond the Sun",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
