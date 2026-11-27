/* Social and Cultural Anthropology — a field notebook climbs the web of human relationships: from the self (Ego)
   through the family, the household, the lineage and the clan, to the village, the city, the nation, the diaspora and
   all of humanity. Rarer answers mean more days in the field.
   Syllabus: IB Social and cultural anthropology (first assessment 2019): key concepts, methods and ethics, the areas of
   inquiry and, at HL, anthropological theory. */
(function(){
const CATALOG = [
  {label:"Thinking anthropologically", units:[
    {code:"K", name:"Concepts and methods", topics:[["K.1","Key concepts and anthropologists"],["M.1","Fieldwork methods and ethics"]]},
  ]},
  {label:"Areas of inquiry", units:[
    {code:"A", name:"Areas of inquiry", topics:[["A.1","Belonging"],["A.2","Classifying the world"],["A.3","Communication and expression"],["A.4","Conflict"],["A.5","Development"],["A.6","Health, illness and healing"],["A.7","Movement, time and space"],["A.8","Production, exchange and consumption"]]},
  ]},
  {label:"HL extension", units:[
    {code:"H", name:"Anthropological theory", topics:[["H.1","Theoretical perspectives",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- K.1 Key concepts and anthropologists ---------- */
P("an001","K.1","Name a key concept in anthropology.","Habitus",[
  ["Culture",22],["Identity",12],["Power",10],["Kinship",8],["Belonging",8],["Ethnicity",6],["Gender",6],["Change",5],["Ritual",5],["Society",4],["Materiality",3],["Classification",3],["Sociality",3],["Habitus",.4]]),
P("an002","K.1","Name an important idea in how anthropologists study other cultures.","The ethnographic present",[
  ["Cultural relativism",22,"relativism"],["Avoiding ethnocentrism",14,"ethnocentrism"],["The emic perspective",10,"emic","insider perspective"],["The etic perspective",8,"etic","outsider perspective"],["Holism",8,"holistic"],["Reflexivity",8,"reflexive"],
  ["Positionality",5],["Comparison",5,"comparative"],["Thick description",4],["Making the familiar strange",4,"make the familiar strange","making the strange familiar"],["The ethnographic present",.4,"ethnographic present"]]),
P("an003","K.1","Name a famous anthropologist.","Ella Cara Deloria",[
  ["Margaret Mead",18,"mead"],["Bronisław Malinowski",14,"malinowski","bronislaw malinowski"],["Franz Boas",12,"boas"],["Claude Lévi-Strauss",10,"levi strauss","claude levi strauss"],["Clifford Geertz",8,"geertz"],["Ruth Benedict",6,"benedict"],
  ["E. E. Evans-Pritchard",4,"evans pritchard"],["Mary Douglas",4,"douglas"],["Zora Neale Hurston",4,"hurston"],["Victor Turner",3,"turner"],["Marcel Mauss",3,"mauss"],["David Graeber",3,"graeber"],["Ella Cara Deloria",.4,"deloria","ella deloria"]]),
/* ---------- M.1 Fieldwork methods and ethics ---------- */
P("an004","M.1","Name a research method used in anthropology.","Multi-sited ethnography",[
  ["Participant observation",24],["Interviews",16,"interviewing","unstructured interviews"],["Fieldwork",10],["Ethnography",8],["Surveys",6,"questionnaires"],["Field notes",6,"fieldnotes"],["Life histories",5,"life history","oral history"],
  ["Genealogies",4,"kinship charts","genealogy"],["Focus groups",4],["Mapping",3,"maps"],["Photography and film",3,"photography","visual methods"],["Archival research",2,"archives"],["Multi-sited ethnography",.4,"multi sited"]]),
P("an005","M.1","Name an ethical principle in anthropological fieldwork.","Data sovereignty",[
  ["Informed consent",26,"consent"],["Do no harm",16,"avoid harm","no harm"],["Anonymity",12,"anonymising","anonymizing"],["Confidentiality",10],["Respect",8,"respecting participants"],["The right to withdraw",6,"right to withdraw"],["Honesty",5,"transparency","no deception"],
  ["Reciprocity",4,"giving back"],["Protecting vulnerable people",4,"vulnerable groups"],["Sharing results",3,"sharing findings"],["Data sovereignty",.4,"indigenous data sovereignty"]]),
/* ---------- A.1 Belonging ---------- */
P("an006","A.1","Name a type of kinship or family relationship that anthropologists study.","Milk kinship",[
  ["Nuclear family",18],["Extended family",16],["Marriage",10],["Lineage",8],["Clan",8],["Patrilineal descent",8,"patrilineal","patriliny"],["Matrilineal descent",8,"matrilineal","matriliny"],["Polygamy",5,"polygyny","polyandry"],
  ["Fictive kinship",4,"godparents","chosen family"],["Adoption",4],["Bilateral descent",3,"bilateral"],["Milk kinship",.4,"milk siblings"]]),
P("an007","A.1","Name something that can create a sense of belonging.","Communitas",[
  ["Language",16],["Family",14,"kinship"],["Religion",12,"faith"],["Ethnicity",10],["Nationality",8,"nation"],["Shared history",6,"history"],["Rituals",6,"ritual"],["Food",6,"cuisine"],["Music",5],["Clothing",4,"dress"],["Sport",4,"supporting a team","fandom"],["Place",4,"home"],
  ["Online communities",3,"social media"],["Communitas",.4]]),
/* ---------- A.2 Classifying the world ---------- */
P("an008","A.2","Name a way societies classify people or things.","Totemism",[
  ["Gender",16],["Age",12,"age groups","generations"],["Class",10,"social class"],["Race",10,"race as a social construct"],["Ethnicity",8],["Caste",8],["Kinship",6],["Purity and pollution",6,"clean and unclean","purity"],["Sacred and profane",5,"sacred"],
  ["Edible and inedible",4,"food taboos"],["Colour terms",3,"colours"],["Totemism",.4,"totems"]]),
P("an009","A.2","Name a rite of passage.","Land diving",[
  ["Wedding",18,"marriage"],["Funeral",14,"death rites"],["Coming-of-age ceremony",12,"coming of age"],["Birth or naming ceremony",10,"naming ceremony","birth"],["Bar or Bat Mitzvah",8,"bar mitzvah","bat mitzvah"],["Graduation",6],["Initiation",6,"initiation rites"],["Baptism",5,"christening"],
  ["Quinceañera",4,"quinceanera"],["Seijin Shiki",2,"coming of age day"],["Retirement",2],["Land diving",.4,"naghol","gol"]]),
/* ---------- A.3 Communication and expression ---------- */
P("an010","A.3","Name a form of non-verbal communication.","Chronemics",[
  ["Gestures",18,"gesture","hand gestures"],["Facial expressions",16,"facial expression"],["Body language",12],["Eye contact",10],["Touch",8],["Personal space",8,"proxemics"],["Clothing",6,"dress"],["Posture",5],["Tattoos",4,"body art","body modification"],["Silence",4],
  ["Tone of voice",3,"paralanguage"],["Emoji",2,"emojis"],["Chronemics",.4,"use of time"]]),
P("an011","A.3","Name a form of human expression that anthropologists study.","Phatic communion",[
  ["Language",16],["Art",14],["Music",12],["Dance",10],["Storytelling",10,"myths","myth","folk tales"],["Ritual",8],["Clothing",5,"fashion"],["Body art",5,"tattoos"],["Food",4,"cooking"],["Humour",4,"humor","jokes"],["Architecture",3],["Sport",3],
  ["Phatic communion",.4,"small talk"]]),
/* ---------- A.4 Conflict ---------- */
P("an012","A.4","Name a cause of conflict between groups.","Schismogenesis",[
  ["Land",16,"territory"],["Resources",14,"water","natural resources"],["Religion",10],["Ethnicity",10,"ethnic tension"],["Power",10,"politics"],["Inequality",8,"poverty"],["Colonialism",6,"colonial legacy"],["Borders",5],["Identity",5],["Economic competition",4,"jobs"],["Language",3],
  ["Historical grievances",3,"history"],["Schismogenesis",.4]]),
P("an013","A.4","Name a way communities resolve conflict.","Song duels",[
  ["Mediation",18,"mediator"],["Negotiation",14],["Courts",10,"law","legal system"],["Councils of elders",10,"elders"],["Restorative justice",8],["Compensation",6,"payment","reparations"],["Reconciliation rituals",6,"rituals","reconciliation"],
  ["Truth commissions",4,"truth and reconciliation commission"],["Gift exchange",3,"gifts"],["Avoidance",3,"moving away"],["Song duels",.4,"song duel"]]),
/* ---------- A.5 Development ---------- */
P("an014","A.5","Name an issue anthropologists study in development projects.","The anti-politics machine",[
  ["Poverty",16],["Inequality",12],["Ignoring local knowledge",10,"local knowledge"],["Displacement",8,"forced relocation","dams"],["Aid dependency",8,"dependency","aid"],["Tourism",6],["NGOs",6,"charities"],["Gender",6,"women"],
  ["Indigenous rights",5,"land rights"],["Sustainability",4,"environment"],["Urbanization",3,"urbanisation"],["Microfinance",3,"microcredit"],["The anti-politics machine",.4,"anti politics machine","ferguson"]]),
P("an015","A.5","Name an alternative to top-down development.","Buen vivir",[
  ["Participatory development",16,"participation","community participation"],["Community-led projects",14,"community led","bottom up"],["Fair trade",10],["Using local knowledge",10,"local knowledge","indigenous knowledge"],["Sustainable development",8],["Cooperatives",6,"cooperative"],
  ["Microfinance",6,"microcredit"],["Appropriate technology",4],["Indigenous-led conservation",4,"indigenous conservation"],["Buen vivir",.4,"sumak kawsay","living well"]]),
/* ---------- A.6 Health, illness and healing ---------- */
P("an016","A.6","Name a type of healer or healing practice.","Sangoma",[
  ["Doctors",16,"biomedicine","western medicine"],["Herbal medicine",12,"herbalism","herbalists"],["Traditional healers",12,"traditional medicine"],["Shamans",10,"shamanism"],["Acupuncture",8],["Ayurveda",6],["Prayer and faith healing",6,"faith healing","prayer"],
  ["Midwives",5,"midwife"],["Traditional Chinese medicine",5,"tcm"],["Curanderos",3,"curandero"],["Healing rituals",3],["Sangoma",.4,"sangomas"]]),
P("an017","A.6","Name a factor that shapes how a culture understands illness.","Structural violence",[
  ["Religious beliefs",16,"religion","beliefs"],["Biomedicine",12,"science"],["Social inequality",10,"inequality","poverty"],["Stigma",10],["Access to healthcare",8,"healthcare"],["Gender",6],["Family",6],["Diet",5,"food"],["Environment",4],["Witchcraft beliefs",4,"witchcraft"],
  ["Language",3],["Structural violence",.4,"paul farmer"]]),
/* ---------- A.7 Movement, time and space ---------- */
P("an018","A.7","Name a reason people migrate.","Transhumance",[
  ["Work",20,"jobs","employment"],["Conflict",14,"war"],["Poverty",10,"a better life"],["Climate change",8,"climate"],["Education",8,"study"],["Family reunion",6,"family"],["Persecution",6],["Natural disasters",5,"disasters"],["Marriage",4],["Urbanization",3,"moving to cities"],
  ["Seasonal herding",3,"pastoralism","nomadism"],["Transhumance",.4]]),
P("an019","A.7","Name a concept used to study migration and movement.","Ethnoscapes",[
  ["Diaspora",16],["Transnationalism",12,"transnational"],["Refugees",10,"refugee"],["Assimilation",8],["Integration",8],["Remittances",8],["Globalization",6,"globalisation"],["Borders",5],["Hybridity",4,"hybrid identities"],["Displacement",4],["Nomadism",3,"nomads"],
  ["Ethnoscapes",.4,"ethnoscape","appadurai"]]),
/* ---------- A.8 Production, exchange and consumption ---------- */
P("an020","A.8","Name a form of exchange.","Hau",[
  ["Gift exchange",18,"gifts","gift giving"],["Barter",14,"bartering"],["Market exchange",12,"money","markets","buying and selling"],["Reciprocity",10],["Redistribution",8],["Trade",6],["The Kula ring",6,"kula","kula ring"],["Potlatch",5],["Sharing",4],["Bride price",3,"bridewealth","dowry"],
  ["Credit",2,"debt"],["Hau",.4,"spirit of the gift"]]),
P("an021","A.8","Name a type of subsistence or economic system.","Swidden",[
  ["Hunting and gathering",20,"foraging","hunter gatherers"],["Agriculture",14,"farming"],["Pastoralism",12,"herding"],["Horticulture",8],["Industrialism",6,"industry"],["Capitalism",6],["Fishing",5],["Subsistence farming",5],["Informal economy",4],["Market economy",3],
  ["The gig economy",2,"gig economy"],["Swidden",.4,"slash and burn","shifting cultivation"]]),
/* ---------- H.1 Theoretical perspectives (HL) ---------- */
P("an022","H.1","Name a theoretical perspective in anthropology.","Actor-network theory",[
  ["Functionalism",18],["Structuralism",14],["Cultural relativism",10,"boasian anthropology"],["Interpretive anthropology",8,"interpretivism","symbolic anthropology"],["Structural functionalism",8],["Marxist anthropology",6,"marxism","political economy"],
  ["Feminist anthropology",6,"feminism"],["Postmodernism",5,"postmodern anthropology"],["Cultural evolutionism",4,"evolutionism"],["Practice theory",4],["Postcolonial theory",3,"postcolonialism"],["Cultural ecology",3],["Actor-network theory",.4,"actor network theory","ant"]],
  [], HL),
P("an023","H.1","Name an anthropologist linked to a theory.","Bruno Latour",[
  ["Bronisław Malinowski",16,"malinowski","bronislaw malinowski"],["Claude Lévi-Strauss",14,"levi strauss","claude levi strauss"],["Clifford Geertz",12,"geertz"],["Franz Boas",10,"boas"],["A. R. Radcliffe-Brown",6,"radcliffe brown"],["Pierre Bourdieu",6,"bourdieu"],
  ["Marvin Harris",4,"harris"],["Eric Wolf",4,"wolf"],["Lewis Henry Morgan",3,"morgan"],["Sherry Ortner",3,"ortner"],["Edward Said",3,"said"],["Victor Turner",3,"turner"],["Bruno Latour",.4,"latour"]],
  [], HL),
];

/* ================= the web of human relationships (up) ================= */
const BANDS = [
  {name:"The self",           zone:"The self (Ego)",        from:0,  to:40,  hue:120, bg:["#0e1612","#121c16"]},
  {name:"The family",         zone:"The family",            from:40, to:100, hue:30,  bg:["#121c16","#1e1a12"]},
  {name:"The household",      zone:"The household",         from:100,to:170, hue:30,  bg:["#1e1a12","#22160e"]},
  {name:"The lineage",        zone:"The lineage",           from:170,to:250, hue:45,  bg:["#22160e","#1a1a24"]},
  {name:"The clan",           zone:"The clan",              from:250,to:320, hue:15,  bg:["#1a1a24","#241612"]},
  {name:"The village",        zone:"The village",           from:320,to:390, hue:90,  bg:["#241612","#16220e"]},
  {name:"The city",           zone:"The city",              from:390,to:460, hue:210, bg:["#16220e","#121a2a"]},
  {name:"The nation",         zone:"The nation",            from:460,to:530, hue:0,   bg:["#121a2a","#1a1222"]},
  {name:"The diaspora",       zone:"The diaspora",          from:530,to:600, hue:190, bg:["#1a1222","#0e1a26"]},
  {name:"Humanity",           zone:"All of humanity",       from:600,to:760, hue:150, bg:["#0e1a26","#04080e"]},
];
// days in the field at each band boundary: from a first visit to ten years of fieldwork
const KNOTS = [[0,1],[40,2],[100,5],[170,14],[250,40],[320,90],[390,180],[460,365],[530,730],[600,1460],[760,3650]];
function days(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(3650, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtD(p){ const d = days(p); if (d < 60) return `${d} day${d === 1 ? "" : "s"} in the field`; if (d < 730) return `${Math.round(d / 30.4)} months in the field`; return `${(d / 365).toFixed(d >= 3600 ? 0 : 1)} years in the field`; }
const FACTS = [
  [-30,"anthropology: the study of what makes us human"],[12,"kinship charts start from one person: Ego"],[30,"in kinship charts, △ is male, ○ is female and = is marriage"],
  [60,"families take many different forms around the world"],[85,"Malinowski pioneered long-term participant observation in the Trobriand Islands"],[115,"a household can include several generations and non-relatives"],[150,"sharing food builds relationships in every culture"],
  [190,"a lineage traces descent from a known ancestor"],[225,"in matrilineal societies, descent passes through the mother's line"],[265,"a clan claims descent from a shared, sometimes mythical ancestor"],[300,"totems can link clans to animals, plants or places"],
  [340,"the Kula ring linked the Trobriand Islands through gift exchange"],[370,"markets are places of social life as well as trade"],[410,"more than half the world's people now live in cities"],[440,"hundreds of languages are spoken in London"],
  [480,"Benedict Anderson called nations 'imagined communities'"],[510,"about 7,000 languages are spoken in the world"],[550,"over 280 million people live outside the country they were born in"],[580,"remittances send money home across the world"],
  [625,"every known culture has language, music and ritual"],[670,"one species, countless ways of living"],[720,"make the strange familiar, and the familiar strange"],
];
function wall(i, len, side){
  const r = srand(11027 + i*67 + (side==="r"?37:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const M = (x, y, c = "#9fd8a8") => `<path d="M${x} ${y-8} l8 14 h-16z" fill="none" stroke="${c}" stroke-width="2"/>`;
  const F = (x, y, c = "#ffb0c8") => `<circle cx="${x}" cy="${y}" r="7" fill="none" stroke="${c}" stroke-width="2"/>`;
  switch(i){
    case 0: // the self: Ego at the centre of a kinship chart
      rep(160, y=>{ s+=`<rect x="44" y="${y+30}" width="32" height="20" fill="#9fd8a8" opacity=".2"/>` + M(60, y+42, "#fff") + `<text x="60" y="${y+70}" text-anchor="middle" font-size="11" font-weight="700" fill="#9fd8a8" font-family="Chakra Petch,sans-serif">EGO</text>`
        + `<path d="M60 ${y+20} v-16 M60 ${y+78} v20 M30 ${y+40} h-20 M90 ${y+40} h20" stroke="#5a7a62" stroke-width="1.5" stroke-dasharray="3 3"/>`; }, 20);
      break;
    case 1: // the family: parents, a marriage sign and children
      rep(140, y=>{ s+= M(36, y+20) + `<path d="M46 ${y+18} h28 M46 ${y+24} h28" stroke="#d8d0c0" stroke-width="2"/>` + F(84, y+21) + `<path d="M60 ${y+24} v26 M30 ${y+50} h60 M30 ${y+50} v14 M60 ${y+50} v14 M90 ${y+50} v14" stroke="#d8d0c0" stroke-width="1.5"/>`
        + M(30, y+76) + F(60, y+76) + M(90, y+76); }, 20);
      break;
    case 2: // the household: homes with lit windows and a cooking fire
      rep(150, y=>{ s+=`<path d="M20 ${y+50} l40 -36 l40 36z" fill="#6a3a1a"/><rect x="28" y="${y+50}" width="64" height="56" fill="#a8784a"/><rect x="38" y="${y+62}" width="16" height="14" fill="#ffd27a"/><rect x="66" y="${y+74}" width="18" height="32" fill="#3a2410"/>`
        + `<path d="M50 ${y+132} l10 -12 l10 12z" fill="#5a3a1a"/><path class="blink" d="M60 ${y+128} q-6 -10 0 -20 q6 10 0 20z" fill="#ff8a1a"/>`; });
      break;
    case 3: // the lineage: generations descending from one ancestor
      rep(200, y=>{ s+= M(60, y+14, "#ffd27a") + `<path d="M60 ${y+22} v14 M24 ${y+36} h72 M24 ${y+36} v12 M60 ${y+36} v12 M96 ${y+36} v12" stroke="#c8b080" stroke-width="1.5"/>` + M(24, y+58) + F(60, y+58) + M(96, y+58)
        + `<path d="M24 ${y+66} v20 M12 ${y+86} h24 M12 ${y+86} v10 M36 ${y+86} v10 M96 ${y+66} v20 M84 ${y+86} h24 M84 ${y+86} v10 M108 ${y+86} v10" stroke="#c8b080" stroke-width="1.5"/>` + F(12, y+104) + M(36, y+106) + M(84, y+106) + F(108, y+104); }, 20);
      break;
    case 4: // the clan: carved emblem posts of animals
      rep(150, y=>{ s+=`<rect x="40" y="${y}" width="40" height="150" fill="#6a3a1a"/>`
        + `<g transform="translate(60 ${y+30})"><path d="M-18 0 q18 -24 36 0 q-18 10 -36 0z" fill="#c8302a"/><circle cx="-6" cy="-4" r="3" fill="#fff"/><circle cx="6" cy="-4" r="3" fill="#fff"/><path d="M0 2 l-6 10 h12z" fill="#ffd25a"/></g>`
        + `<g transform="translate(60 ${y+90})"><ellipse rx="20" ry="12" fill="#2a6a8a"/><path d="M18 0 l10 -8 v16z" fill="#2a6a8a"/><circle cx="-10" cy="-2" r="2.4" fill="#fff"/></g>`
        + `<path d="M20 ${y+64} h80" stroke="#c8302a" stroke-width="6"/>`; });
      break;
    case 5: // the village: round houses, paths and a market stall
      rep(140, y=>{ s+=`<path d="M14 ${y+40} q28 -34 56 0z" fill="#c8a060"/><rect x="18" y="${y+40}" width="48" height="34" rx="4" fill="#a8784a"/><rect x="36" y="${y+52}" width="12" height="22" fill="#3a2410"/>`
        + `<path d="M74 ${y+94} h40 l-6 -14 h-28z" fill="#e8443a"/><rect x="78" y="${y+94}" width="32" height="20" fill="#c8a060"/>` + [0,1,2].map(k=>`<circle cx="${84+k*10}" cy="${y+90}" r="4" fill="${["#ffd25a","#3ac04a","#ff8a1a"][k]}"/>`).join("")
        + `<path d="M0 ${y+120} q60 10 120 0" stroke="#c8a870" stroke-width="5" fill="none" opacity=".5"/>`; }, 10);
      break;
    case 6: // the city: apartment blocks and greetings in many languages
      rep(170, y=>{ s+=`<rect x="10" y="${y}" width="46" height="160" fill="#2a3448"/><rect x="62" y="${y+30}" width="48" height="130" fill="#222a3e"/>`;
        for (let wy = y+8; wy < y+156; wy += 14) for (let k = 0; k < 3; k++){ if (r() < .55) s+=`<rect x="${16+k*14}" y="${wy}" width="8" height="8" fill="#ffd27a" opacity=".8"/>`; if (wy > y+34 && r() < .5) s+=`<rect x="${68+k*14}" y="${wy}" width="8" height="8" fill="#9fd8ff" opacity=".8"/>`; }
        s+=`<rect x="14" y="${y+66}" width="92" height="24" rx="12" fill="#fff" opacity=".9"/><text x="60" y="${y+82}" text-anchor="middle" font-size="11" fill="#2a3448" font-family="Chakra Petch,sans-serif">${["hello","hola","salaam","ni hao","jambo","bonjour","namaste","olá"][Math.floor(r()*8)]}</text>`; });
      break;
    case 7: // the nation: banners and a map outline
      rep(150, y=>{ const c = [["#c86a2a","#9fd8a8","#c86a2a"],["#8a3aa8","#ffd25a","#8a3aa8"],["#2a8a8a","#f4d8a8","#2a8a8a"],["#c8302a","#9fd8ff","#c8302a"]][Math.floor(r()*4)];
        s+=`<path d="M24 ${y} v120" stroke="#8a8a9a" stroke-width="3"/>` + c.map((cc,k)=>`<rect x="26" y="${y+k*14}" width="64" height="14" fill="${cc}"/>`).join("") + `<circle cx="58" cy="${y+21}" r="7" fill="#fff" opacity=".9"/><path d="M58 ${y+15} l2 4 l4 1 l-3 3 l1 4 l-4 -2 l-4 2 l1 -4 l-3 -3 l4 -1z" fill="${c[0]}"/>`
          + `<path d="M30 ${y+80} q20 -16 40 -4 q20 -10 30 10 q-10 24 -34 22 q-30 4 -36 -28z" fill="none" stroke="#9fd8a8" stroke-width="2" stroke-dasharray="4 3"/>`; });
      break;
    case 8: // the diaspora: planes, suitcases and dotted journeys
      rep(160, y=>{ s+=`<path d="M10 ${y+60} q50 -60 100 -20" stroke="#9fd8ff" stroke-width="2" fill="none" stroke-dasharray="4 4"/><g transform="translate(96 ${y+40}) rotate(20)"><path d="M-14 0 h24 l6 -3 v6 l-6 -3 M0 0 l-6 -10 h4 l8 10 M0 0 l-6 10 h4 l8 -10" fill="#e8f0ff" stroke="#e8f0ff" stroke-width="2"/></g>`
        + `<rect x="20" y="${y+90}" width="40" height="30" rx="4" fill="${["#c8302a","#3a6ae8","#ffd25a"][Math.floor(r()*3)]}"/><path d="M32 ${y+90} v-8 h16 v8" stroke="#2a2a2a" stroke-width="3" fill="none"/><rect x="66" y="${y+98}" width="30" height="22" rx="4" fill="#8a5a2a"/>`; });
      break;
    case 9: // humanity: a globe ringed by joined hands, and stars
      for (let k = 0; k < len/14; k++) s+=`<circle cx="${f1(r()*120)}" cy="${f1(r()*len)}" r="${f1(.5 + r()*1.3)}" fill="#fff" opacity="${f1(.3 + r()*.5)}"/>`;
      rep(220, y=>{ s+=`<circle cx="60" cy="${y+80}" r="36" fill="#2a6a9a"/><path d="M36 ${y+66} q14 -10 22 4 q8 14 -6 22 q-14 -2 -16 -26z M66 ${y+60} q14 4 18 20 q-10 6 -18 -4z" fill="#3a8a3a"/>`
        + Array.from({length: 10}, (_, k)=>{ const a = k/10*6.283; return `<circle cx="${f1(60 + Math.cos(a)*46)}" cy="${f1(y + 80 + Math.sin(a)*46)}" r="5" fill="${["#e8c8a8","#c89a7a","#8a5a3a","#5a3a2a"][k%4]}"/>`; }).join("")
        + `<circle cx="60" cy="${y+80}" r="46" fill="none" stroke="#ffd27a" stroke-width="1.5" stroke-dasharray="3 4"/>`; }, 30);
      break;
  }
  return vwall(s, len, side);
}
/* the field notebook: it earns a pencil, a sun hat, a camera and a compass, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, cover = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 50% 50%)` : "#3a7a4a", line = gold ? "#8a6a1a" : "#1a3a22";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <rect x="-18" y="-22" width="36" height="46" rx="4" fill="${cover}" stroke="${line}" stroke-width="1.8"/>
    <rect x="-12" y="-16" width="26" height="34" rx="2" fill="#f4f0e4" opacity=".9"/>
    ${[0,1,2,3,4].map(k=>`<circle cx="-18" cy="${-16 + k*9}" r="2.4" fill="none" stroke="#8a8a9a" stroke-width="1.4"/>`).join("")}
    <path d="M-8 10 h18 M-8 14 h14" stroke="#9a9aa8" stroke-width="1"/>
    <circle cx="-3" cy="-6" r="3.4" fill="#fff" stroke="#9a9aa8" stroke-width=".6"/><circle cx="8" cy="-6" r="3.4" fill="#fff" stroke="#9a9aa8" stroke-width=".6"/>
    <g class="av-blink"><circle cx="-2.6" cy="-5.6" r="1.8" fill="#14201a"/><circle cx="8.4" cy="-5.6" r="1.8" fill="#14201a"/></g>
    <path d="M-1 3 q4 3 8 0" stroke="#14201a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<g transform="translate(22 6) rotate(20)"><rect x="-2" y="-16" width="4" height="26" fill="#f4d03a"/><path d="M-2 10 l2 5 l2 -5z" fill="#e8c8a8"/><rect x="-2" y="-20" width="4" height="4" fill="#e8a0a0"/></g>` : ""}
    ${level >= 3 ? `<path d="M-26 -22 q26 -6 52 0 q-4 4 -10 4 h-32 q-6 0 -10 -4z" fill="#d8c08a" stroke="#8a6a3a" stroke-width="1"/><path d="M-14 -22 q14 -16 28 0z" fill="#d8c08a" stroke="#8a6a3a" stroke-width="1"/><path d="M-14 -24 h28" stroke="#6a4a2a" stroke-width="2"/>` : ""}
    ${level >= 4 ? `<g transform="translate(-28 16)"><rect x="-8" y="-6" width="16" height="11" rx="2" fill="#2a2a2a"/><circle r="3.4" fill="#5a5a6a" stroke="#9a9aa8"/><rect x="-6" y="-8" width="5" height="3" fill="#2a2a2a"/></g>` : ""}
    ${level >= 6 ? `<g transform="translate(24 -20)"><circle r="6" fill="#f4f0e4" stroke="#8a6a3a" stroke-width="1.4"/><path d="M0 -4 l1.6 4 l-1.6 4 l-1.6 -4z" fill="#c8302a"/></g>` : ""}
    ${level >= 1 ? `<text class="blink" x="-28" y="-28" font-size="10" fill="#9fd8a8">△</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<rect x="60" y="16" width="80" height="80" rx="4" fill="#f4f0e4" stroke="${c}" stroke-width="3"/>` + Array.from({length: 7}, (_, k)=>`<path d="M68 ${28+k*10} h${f1(50 + (k*13)%20)}" stroke="#5a5a6a" stroke-width="1.6"/>`).join("")
    + [[30,26],[170,30],[36,94],[166,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M62 30 l10 18 h-20z" fill="none" stroke="${c}" stroke-width="3"/><path d="M76 38 h18 M76 44 h18" stroke="${c}" stroke-width="2.4"/><circle cx="106" cy="41" r="9" fill="none" stroke="${c}" stroke-width="3"/><path d="M85 44 v18 M62 62 h46 M62 62 v10 M108 62 v10" stroke="${c}" stroke-width="2"/><path d="M62 74 l8 14 h-16z" fill="${c}"/><circle cx="108" cy="82" r="7" fill="${c}"/>`);
  if (t === "trojan") return W(170,100,`<circle cx="70" cy="40" r="10" fill="#e8c8a8"/><circle cx="100" cy="40" r="10" fill="#8a5a3a"/><path d="M60 80 v-26 q10 -6 20 0 M90 80 v-26 q10 -6 20 0" stroke="${c}" stroke-width="8" stroke-linecap="round"/><path d="M80 60 h10" stroke="#e8c8a8" stroke-width="5" stroke-linecap="round"/>`);
  if (t === "adware") return W(170,100,`<rect x="60" y="24" width="50" height="60" rx="3" fill="#f4f0e4" stroke="${c}" stroke-width="2"/><path d="M68 40 h34 M68 50 h28 M68 60 h32" stroke="#5a5a6a" stroke-width="1.6"/>`);
  if (t === "spam") return W(170,90,`<path d="M50 50 q35 -26 70 0" stroke="${c}" stroke-width="3" fill="none" stroke-dasharray="3 4"/><text x="85" y="72" text-anchor="middle" font-size="12" fill="${c}" font-family="Georgia,serif">they say…</text>`);
  if (t === "blocked") return W(170,100,`<rect x="14" y="26" width="142" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">ETHNOCENTRIC!</text>`);
  return null;
}
registerSubject({
  key:"anth", name:"Social and Cultural Anthropology", theme:"A field notebook climbing the web of human relationships", gemWord:"Thick Description", gemTitle:"One in a Thick Description", emoji:"🧭",
  blurb:"You're a <b>field notebook</b> on your first day in the field. Each prompt has many correct answers. <b>Obvious answers are hearsay. Answers other anthropologists missed earn you more time in the field</b>, up through the family, the household, the lineage and the clan, the village, the city and the nation, across the diaspora, to all of humanity.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Thick Description", rootkit:"Insider view", trojan:"Rapport", adware:"Field note", spam:"Hearsay"}, blocked:"Ethnocentric", fw:"ETHNOCENTRIC!",
  notes:{rootkit:"An insider view: very few fieldworkers got this close.", trojan:"Rapport: not the usual answer.", adware:"A field note: correct and common.", spam:"Hearsay: what everyone says first."},
  ladder:{gem:"One in a Thick Description: almost no one thinks of it", rootkit:"Insider view: a rare answer", trojan:"Rapport: a strong, less common answer", adware:"Field note: correct and common", spam:"Hearsay: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Observe ▲", inject:"Note", hint:"▲ rarer answers mean more time in the field ▲", count:"writing field notes"},
  shout:t => ({gem:"EMIC INSIGHT!", rootkit:"DEEP RAPPORT!", blocked:"ETHNOCENTRISM!"})[t],
  particles:["△","○","◇","="], particleColor:"#9fd8a8",
  meter:{label:"FIELDWORK", fmt:fmtD, zone:fmtD, tick:fmtD, gain:(a,b)=>`stay ${fmtD(b)}`},
  start:{bg:"linear-gradient(0deg,#060a08,#0e1612)", label:"Start · day 1", zone:"Arriving in the field", color:"#9fd8a8"},
  endBg:"#04080e",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Writing it all up",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
