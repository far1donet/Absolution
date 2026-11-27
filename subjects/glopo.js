/* Global Politics — a dove of peace rises through the levels of analysis: from one voice at the ballot box, through
   the town square, parliament and embassy row, a regional bloc, the United Nations, a global summit, cyberspace and
   orbit, to the whole planet seen without borders. Rarer answers reach more people.
   Syllabus: IB Global Politics (first assessment 2026): the core (understanding power and global politics), the three
   thematic studies (rights and justice, development and sustainability, peace and conflict), the HL extension on
   global political challenges, and the engagement project. */
(function(){
const CATALOG = [
  {label:"Core · Understanding power and global politics", units:[
    {code:"C", name:"Power and global politics", topics:[["C.1","Power and sovereignty"],["C.2","Legitimacy and interdependence"],["C.3","Political actors and institutions"],["C.4","Theories and ideologies"]]},
  ]},
  {label:"Thematic studies", units:[
    {code:"R", name:"Rights and justice", topics:[["R.1","Human rights"],["R.2","Justice, equality and liberty"]]},
    {code:"D", name:"Development and sustainability", topics:[["D.1","Development"],["D.2","Sustainability and the environment"]]},
    {code:"P", name:"Peace and conflict", topics:[["P.1","Conflict and violence"],["P.2","Peace and non-violence"]]},
  ]},
  {label:"HL extension", units:[
    {code:"H", name:"Global political challenges", topics:[["H.1","Global political challenges",HL]]},
  ]},
  {label:"The course", units:[
    {code:"X", name:"Concepts and assessment", topics:[["X.1","Key concepts and the engagement project"]]},
  ]},
];

const PROMPTS = [
/* ---------- C.1 Power and sovereignty ---------- */
P("gp001","C.1","Name a type or source of power in global politics.","Sharp power",[
  ["Military power",18,"hard power","military","the army"],["Economic power",15,"economy","money","wealth"],["Soft power",15,"culture","attraction"],["Smart power",6],["Political power",6],["Diplomatic power",5,"diplomacy"],
  ["Structural power",4],["Relational power",3],["Knowledge and technology",3,"knowledge","information","technology"],["Legitimate authority",3,"authority"],["Coercion",3,"force"],["The veto",3,"veto","veto power"],
  ["Nuclear weapons",3,"nuclear"],["Sharp power",.4]]),
P("gp002","C.1","Name a feature of a sovereign state.","The Montevideo Convention",[
  ["Territory",20,"borders","land"],["A permanent population",15,"population","people","citizens"],["A government",15,"government"],["Recognition by other states",12,"recognition","international recognition"],
  ["Independence",8,"autonomy","self government"],["A monopoly on the legitimate use of force",6,"monopoly of force","monopoly on violence"],["Non-intervention",5,"non interference"],["Legal equality with other states",3,"sovereign equality"],
  ["The Montevideo Convention",.4,"montevideo"]]),
P("gp003","C.1","Name a challenge to state sovereignty.","Structural adjustment programmes",[
  ["Globalization",20,"globalisation"],["Multinational corporations",10,"mncs","tncs","multinationals"],["Intergovernmental organizations",8,"igos","international organizations"],["Humanitarian intervention",10,"intervention"],
  ["Terrorism",8],["Climate change",8],["Migration",6,"refugees","mass migration"],["Secessionist movements",5,"secession","separatism","independence movements"],["Cyber attacks",5,"cyberattacks","hacking"],["Social media",4,"the internet"],
  ["International law",4,"the icc","international courts"],["The responsibility to protect",4,"r2p","responsibility to protect"],["Pandemics",3],["Structural adjustment programmes",.4,"structural adjustment","imf conditionality"]]),
/* ---------- C.2 Legitimacy and interdependence ---------- */
P("gp004","C.2","Name a source of political legitimacy.","Output legitimacy",[
  ["Free and fair elections",22,"elections","voting","democracy"],["The rule of law",12,"rule of law","a constitution","constitution"],["Consent of the governed",10,"consent"],["Good performance",8,"performance","delivering services","economic growth"],
  ["Tradition",6,"traditional authority","monarchy"],["Charismatic authority",5,"charisma"],["Legal-rational authority",4,"legal rational"],["Religion",4,"divine right"],["International recognition",5,"recognition"],
  ["Respect for human rights",4,"human rights"],["Output legitimacy",.4]]),
P("gp005","C.2","Name an example or form of interdependence between states.","Complex interdependence",[
  ["Trade",22,"international trade"],["Globalization",10,"globalisation"],["Supply chains",8,"global supply chains"],["Energy dependence",8,"oil","gas","energy"],["Climate change",6],["Military alliances",6,"alliances","nato"],
  ["The internet",5,"internet"],["Migration",5],["Debt",4,"foreign debt"],["Tourism",3],["Pandemics",3,"covid"],["Regional integration",5,"the eu","eu"],["Complex interdependence",.4,"keohane and nye"]]),
/* ---------- C.3 Actors and institutions ---------- */
P("gp006","C.3","Name an intergovernmental organization (IGO).","The Shanghai Cooperation Organisation",[
  ["The United Nations",25,"un","united nations"],["The European Union",15,"eu"],["NATO",12],["The World Trade Organization",8,"wto"],["The World Health Organization",6,"who"],["The IMF",6,"international monetary fund"],
  ["The World Bank",6,"world bank"],["The African Union",5,"au"],["ASEAN",5],["OPEC",3],["BRICS",3],["The Arab League",2,"arab league"],["ECOWAS",2],["Mercosur",2],
  ["The Shanghai Cooperation Organisation",.4,"sco","shanghai cooperation organization"]],
  [[["unicef","red cross","amnesty","greenpeace","oxfam"],"That's an NGO or a UN agency, not an intergovernmental organization made up of member states."]]),
P("gp007","C.3","Name a non-state actor in global politics.","Private military companies",[
  ["NGOs",20,"ngo","non governmental organizations","charities"],["Multinational corporations",15,"mncs","multinationals","tncs","companies"],["Terrorist groups",10,"terrorists"],["Social movements",8,"protest movements"],
  ["The media",6,"media"],["Individuals and activists",5,"individuals","activists"],["Religious groups",4,"churches"],["Think tanks",3],["Pressure groups",3,"lobby groups","interest groups"],["Rebel groups",3,"militias"],
  ["Indigenous groups",2],["Organized crime",2,"cartels","criminal organizations"],["Private military companies",.4,"pmcs","mercenaries","wagner group"]]),
P("gp008","C.3","Name a famous NGO.","The International Crisis Group",[
  ["Amnesty International",20,"amnesty"],["Greenpeace",15],["Médecins Sans Frontières",12,"msf","doctors without borders","medecins sans frontieres"],["The Red Cross",12,"red cross","icrc","red crescent"],["Oxfam",10],
  ["Human Rights Watch",8],["Save the Children",6],["WWF",5,"world wildlife fund","world wide fund for nature"],["Transparency International",4],["The Gates Foundation",4,"gates foundation","bill and melinda gates foundation"],
  ["CARE International",3,"care"],["Friends of the Earth",3],["The International Crisis Group",.4,"crisis group","international crisis group"]],
  [[["unicef","who","world health organization","unhcr"],"That's a UN agency, part of an intergovernmental organization, not an NGO."]]),
/* ---------- C.4 Theories and ideologies ---------- */
P("gp009","C.4","Name a theory of international relations.","The English School",[
  ["Realism",25,"realist"],["Liberalism",20,"liberal","liberal internationalism"],["Marxism",10,"marxist"],["Constructivism",10,"constructivist"],["Feminism",8,"feminist"],["Neorealism",5,"structural realism"],
  ["Neoliberalism",5,"neoliberal institutionalism"],["Postcolonialism",4,"postcolonial"],["Critical theory",3],["World-systems theory",3,"world systems","dependency theory"],["Green theory",2],
  ["The English School",.4,"english school","international society"]]),
P("gp010","C.4","Name a political ideology.","Syndicalism",[
  ["Liberalism",15],["Socialism",15],["Democracy",12],["Conservatism",12],["Communism",12],["Capitalism",8],["Fascism",8],["Nationalism",8],["Anarchism",6],["Feminism",5],["Environmentalism",5,"green politics","ecologism"],
  ["Populism",5],["Libertarianism",3],["Authoritarianism",3],["Syndicalism",.4]]),
/* ---------- R.1 Human rights ---------- */
P("gp011","R.1","Name a human right in the Universal Declaration of Human Rights.","The right to rest and leisure",[
  ["The right to life",20,"life"],["Freedom of expression",18,"freedom of speech","free speech"],["The right to education",12,"education"],["Freedom from torture",8,"torture"],["Freedom from slavery",8,"slavery"],
  ["Freedom of religion",8,"religion","freedom of thought"],["The right to a fair trial",6,"fair trial"],["Equality before the law",6,"equality"],["The right to vote",5,"vote","voting"],["Freedom of assembly",5,"assembly","protest"],
  ["The right to work",4,"work"],["The right to asylum",3,"asylum"],["The right to privacy",3,"privacy"],["The right to a nationality",2,"nationality"],["The right to rest and leisure",.4,"rest and leisure","holidays with pay","paid holidays"]]),
P("gp012","R.1","Name a human rights treaty, court or body.","The Inter-American Court of Human Rights",[
  ["The Universal Declaration of Human Rights",22,"udhr","universal declaration"],["The International Criminal Court",12,"icc"],["The European Convention on Human Rights",10,"echr","european convention"],
  ["The UN Human Rights Council",8,"human rights council","unhrc"],["The European Court of Human Rights",8,"ecthr"],["The Convention on the Rights of the Child",8,"uncrc","crc","rights of the child"],["The Geneva Conventions",6,"geneva conventions","geneva convention"],
  ["The Convention Against Torture",3,"convention against torture"],["CEDAW",3],["The ICCPR",3,"iccpr","international covenant on civil and political rights"],["The ICESCR",2,"icescr"],
  ["The African Charter on Human and Peoples' Rights",2,"african charter","banjul charter"],["The Inter-American Court of Human Rights",.4,"inter american court"]]),
P("gp013","R.1","Name a famous human rights activist.","Ken Saro-Wiwa",[
  ["Malala Yousafzai",20,"malala"],["Martin Luther King Jr.",18,"martin luther king","mlk"],["Nelson Mandela",18,"mandela"],["Mahatma Gandhi",12,"gandhi"],["Rosa Parks",8],["Eleanor Roosevelt",6],["Desmond Tutu",4],
  ["Aung San Suu Kyi",4],["Nadia Murad",3],["Alexei Navalny",3,"navalny"],["Narges Mohammadi",2],["Ken Saro-Wiwa",.4,"saro wiwa"]]),
/* ---------- R.2 Justice, equality and liberty ---------- */
P("gp014","R.2","Name a theory or principle of justice.","The capabilities approach",[
  ["Equality",15],["Fairness",12,"justice as fairness"],["Rawls' veil of ignorance",10,"veil of ignorance","rawls"],["Utilitarianism",8,"greatest good"],["Retributive justice",8,"retribution","punishment"],
  ["Restorative justice",6,"restorative"],["Distributive justice",6,"distributive","redistribution"],["Social justice",6],["Libertarian justice",4,"nozick","libertarianism"],["Transitional justice",4,"truth and reconciliation"],
  ["Procedural justice",3,"due process"],["The capabilities approach",.4,"capabilities","amartya sen","nussbaum"]]),
P("gp015","R.2","Name a type of equality or inequality.","Intergenerational inequality",[
  ["Gender equality",22,"gender","gender inequality","women s rights"],["Economic inequality",15,"income inequality","wealth inequality","income"],["Racial equality",12,"racial","racism","racial inequality"],
  ["Equality of opportunity",10,"opportunity"],["Equality before the law",8,"legal equality"],["Political equality",6,"one person one vote"],["Educational inequality",5,"education"],["Health inequality",4,"health"],
  ["Equality of outcome",4,"outcome"],["Disability rights",3,"disability"],["LGBTQ+ equality",3,"lgbt","lgbtq","marriage equality"],["The digital divide",3,"digital divide"],["Intergenerational inequality",.4,"intergenerational"]]),
P("gp016","R.2","Name a type of freedom or liberty.","Freedom from want",[
  ["Freedom of speech",20,"free speech","freedom of expression"],["Freedom of religion",12,"religious freedom"],["Freedom of the press",12,"press freedom"],["Freedom of assembly",8,"assembly"],["Freedom of movement",8,"movement"],
  ["Negative liberty",6,"negative freedom"],["Positive liberty",5,"positive freedom"],["Political freedom",5],["Economic freedom",4],["Freedom of association",4,"association"],["Academic freedom",2],["Freedom from fear",2],
  ["Freedom from want",.4]]),
/* ---------- D.1 Development ---------- */
P("gp017","D.1","Name a measure or indicator of development.","The Happy Planet Index",[
  ["GDP per capita",22,"gdp","gross domestic product"],["The Human Development Index",18,"hdi","human development index"],["Life expectancy",10],["Literacy rate",8,"literacy"],["GNI per capita",6,"gni","gross national income"],
  ["Infant mortality",6,"child mortality"],["The Gini coefficient",6,"gini"],["The Gender Inequality Index",4,"gii"],["The Multidimensional Poverty Index",4,"mpi"],["Access to clean water",3,"clean water"],
  ["Years of schooling",3,"schooling"],["Gross National Happiness",3,"happiness","bhutan"],["The Happy Planet Index",.4,"happy planet index"]]),
P("gp018","D.1","Name a theory or approach to development.","Post-development theory",[
  ["Modernization theory",18,"modernisation theory","rostow"],["Dependency theory",15,"dependency"],["Neoliberalism",12,"washington consensus","free market"],["Sustainable development",10],
  ["World-systems theory",6,"world systems","wallerstein"],["Human development",6,"capabilities"],["Foreign aid",5,"aid","official development assistance"],["Microfinance",4,"microcredit","grameen bank"],["Fair trade",4],
  ["Structuralism",4],["Import substitution",3,"isi"],["Post-development theory",.4,"post development"]]),
P("gp019","D.1","Name a barrier to development.","Dutch disease",[
  ["Corruption",20],["Debt",12,"foreign debt"],["Poor infrastructure",10,"infrastructure"],["Conflict",10,"war","civil war"],["Lack of education",8,"education"],["Disease",6,"health","hiv"],["Unfair trade rules",6,"trade barriers","protectionism"],
  ["The legacy of colonialism",6,"colonialism","colonial legacy"],["Poor governance",6,"bad governance"],["Climate change",5,"natural disasters"],["Gender inequality",4],["The resource curse",4,"resource curse"],["Dutch disease",.4]]),
/* ---------- D.2 Sustainability ---------- */
P("gp020","D.2","Name an international climate or environmental agreement.","The Kunming-Montreal Biodiversity Framework",[
  ["The Paris Agreement",25,"paris agreement","paris"],["The Kyoto Protocol",18,"kyoto"],["The Montreal Protocol",8,"montreal protocol"],["The COP summits",8,"cop","cop summits"],["The Sustainable Development Goals",8,"sdgs","sdg"],
  ["The UNFCCC",6,"unfccc"],["The Rio Earth Summit",5,"earth summit","rio summit"],["Agenda 21",2],["The Convention on Biological Diversity",2,"biodiversity convention"],["CITES",2],
  ["The Kunming-Montreal Biodiversity Framework",.4,"kunming montreal","kunming"]]),
P("gp021","D.2","Name one of the UN's Sustainable Development Goals.","Partnerships for the goals",[
  ["No poverty",18,"poverty"],["Zero hunger",15,"hunger"],["Climate action",12,"climate"],["Quality education",10,"education"],["Gender equality",10],["Good health and well-being",8,"health"],["Clean water and sanitation",6,"clean water"],
  ["Affordable and clean energy",5,"clean energy"],["Reduced inequalities",5,"inequality"],["Life below water",4,"oceans"],["Life on land",4],["Decent work and economic growth",4,"decent work"],["Sustainable cities and communities",3,"sustainable cities"],
  ["Responsible consumption and production",3,"responsible consumption"],["Peace, justice and strong institutions",3,"peace and justice"],["Industry, innovation and infrastructure",3,"innovation"],["Partnerships for the goals",.4,"partnerships","goal 17"]]),
P("gp022","D.2","Name an environmental problem that crosses borders.","Transboundary haze",[
  ["Climate change",22,"global warming"],["Air pollution",12,"pollution"],["Plastic in the oceans",10,"ocean plastic","plastic pollution"],["Deforestation",10],["Water scarcity",8,"river disputes","shared rivers"],["Loss of biodiversity",6,"biodiversity","extinction"],
  ["Overfishing",6],["Acid rain",5],["Climate migration",4,"climate refugees","environmental migration"],["Nuclear accidents",3,"chernobyl","fukushima"],["Ozone depletion",3,"ozone"],["Transboundary haze",.4,"haze","asian haze"]]),
/* ---------- P.1 Conflict and violence ---------- */
P("gp023","P.1","Name a type of conflict or violence.","Cultural violence",[
  ["War",18,"interstate war"],["Civil war",15,"intrastate war"],["Terrorism",12],["Genocide",8],["Ethnic conflict",8,"ethnic violence"],["Structural violence",6,"structural"],["Direct violence",6,"physical violence"],
  ["Proxy war",5,"proxy"],["Cyber warfare",5,"cyberwar","cyber attacks"],["Insurgency",4,"guerrilla war"],["Revolution",4],["Hybrid warfare",3],["Cultural violence",.4]]),
P("gp024","P.1","Name a cause of conflict.","Relative deprivation",[
  ["Resources",15,"natural resources","oil","water"],["Territory",12,"land","borders"],["Ethnic tensions",10,"ethnicity"],["Religion",10],["Ideology",8],["Poverty and inequality",8,"poverty","inequality"],["Power",6],["Nationalism",6],
  ["Political repression",4,"oppression"],["Historical grievances",4,"grievances","history"],["The security dilemma",4,"security dilemma","arms race"],["Greed",3,"greed and grievance"],["Relative deprivation",.4]]),
P("gp025","P.1","Name an armed conflict since 1990.","The Second Congo War",[
  ["The war in Ukraine",22,"ukraine","russia ukraine","russo ukrainian war"],["The Israeli-Palestinian conflict",18,"israel palestine","gaza","gaza war"],["The Syrian civil war",12,"syria"],["The war in Afghanistan",8,"afghanistan"],
  ["The Iraq War",8,"iraq"],["The Rwandan genocide",8,"rwanda"],["The Yugoslav wars",6,"bosnia","kosovo","yugoslavia"],["The civil war in Sudan",5,"sudan","darfur"],["The war in Yemen",4,"yemen"],
  ["The conflict in Myanmar",3,"myanmar","rohingya"],["The Nagorno-Karabakh conflict",3,"nagorno karabakh","armenia azerbaijan"],["The Tigray war",2,"tigray"],["The Second Congo War",.4,"second congo war","great african war"]]),
/* ---------- P.2 Peace ---------- */
P("gp026","P.2","Name a way of making or keeping peace.","Track II diplomacy",[
  ["Negotiation",15,"talks"],["Diplomacy",15],["Peacekeeping",12,"un peacekeepers","blue helmets"],["Peace treaties",10,"treaty","peace agreement"],["Mediation",8],["A ceasefire",8,"ceasefire"],["Sanctions",5],["Disarmament",5],
  ["Truth and reconciliation commissions",4,"truth and reconciliation"],["Power-sharing",4,"power sharing"],["Peacebuilding",4],["Humanitarian intervention",3],["Track II diplomacy",.4,"track two diplomacy","backchannel diplomacy"]]),
P("gp027","P.2","Name a peace agreement or treaty.","The Treaty of Tlatelolco",[
  ["The Good Friday Agreement",15,"good friday","belfast agreement"],["The Treaty of Versailles",12,"versailles"],["The Peace of Westphalia",8,"westphalia","treaty of westphalia"],["The Camp David Accords",8,"camp david"],
  ["The Oslo Accords",8,"oslo"],["The Dayton Agreement",6,"dayton"],["The Nuclear Non-Proliferation Treaty",6,"npt","non proliferation treaty"],["The Colombian peace agreement",4,"farc peace deal","colombia"],
  ["The Abraham Accords",4,"abraham accords"],["The Korean Armistice",3,"korean armistice"],["The Treaty of Tlatelolco",.4,"tlatelolco"]]),
P("gp028","P.2","Name a non-violent protest movement or a leader of non-violent resistance.","The Singing Revolution",[
  ["Mahatma Gandhi",22,"gandhi","salt march"],["Martin Luther King Jr.",20,"martin luther king","mlk","march on washington"],["The Montgomery bus boycott",8,"bus boycott","rosa parks"],["The Velvet Revolution",6,"velvet revolution"],
  ["Black Lives Matter",4,"blm"],["The fall of the Berlin Wall",5,"berlin wall"],["The Arab Spring",5,"arab spring"],["Extinction Rebellion",4,"xr"],["Fridays for Future",4,"school strikes","greta thunberg"],
  ["The People Power Revolution",3,"people power","edsa"],["Cesar Chavez",2],["The Singing Revolution",.4,"singing revolution","baltic way"]]),
/* ---------- H.1 HL global political challenges ---------- */
P("gp029","H.1","Name a global political challenge.","The governance of outer space",[
  ["Climate change and the environment",20,"climate change","environment"],["Poverty",15],["Health and pandemics",12,"health","pandemics"],["Security and terrorism",10,"security","terrorism"],["Borders and migration",8,"borders","migration","refugees"],
  ["Identity",8],["Technology",8,"ai","artificial intelligence","cyber security"],["Equality",6,"inequality"],["Nuclear proliferation",4,"nuclear weapons"],["Food security",4],["Water security",3],["The governance of outer space",.4,"space debris","outer space"]],
  [], HL),
P("gp030","H.1","Name a way technology is changing global politics.","Lethal autonomous weapons",[
  ["Social media",20],["Artificial intelligence",15,"ai"],["Cyber attacks",10,"cyber warfare","hacking"],["Disinformation",10,"fake news","misinformation"],["Surveillance",8,"mass surveillance"],["Drones",8,"drone warfare"],
  ["Online activism",5,"hashtag activism","e petitions"],["Election interference",5,"election hacking"],["Deepfakes",4],["Cryptocurrency",3,"bitcoin"],["Data privacy",3,"privacy"],["Lethal autonomous weapons",.4,"killer robots","autonomous weapons"]],
  [], HL),
P("gp031","H.1","Name a global health challenge.","Antimicrobial resistance",[
  ["Pandemics",22,"covid","covid 19","coronavirus"],["Malaria",10],["HIV/AIDS",10,"hiv","aids"],["Vaccine inequality",8,"access to vaccines","vaccines"],["Obesity",6],["Tuberculosis",5,"tb"],["Mental health",5],["Ebola",5],
  ["Malnutrition",5,"hunger"],["Polio",3],["Cholera",3],["Unsafe water",3,"clean water"],["Antimicrobial resistance",.4,"amr","superbugs","antibiotic resistance"]],
  [], HL),
/* ---------- X.1 Concepts and assessment ---------- */
P("gp032","X.1","Name a key concept in IB Global Politics.","Non-violence",[
  ["Power",22],["Sovereignty",15],["Legitimacy",10],["Interdependence",8],["Human rights",8],["Justice",6],["Equality",6],["Development",6],["Peace",6],["Conflict",6],["Globalization",5,"globalisation"],["Sustainability",5],
  ["Liberty",4],["Inequality",3],["Violence",3],["Non-violence",.4,"nonviolence"]]),
P("gp033","X.1","Name something the engagement project needs.","A justification of your engagement",[
  ["Engagement with a political issue",15,"engagement","a political issue","political issue"],["An inquiry question",15,"research question","inquiry"],["Primary research",10,"interviews","surveys","fieldwork"],["Secondary sources",8,"research"],
  ["Analysis",8,"synthesis"],["Evaluation and reflection",8,"evaluation","reflection"],["Key concepts",6,"concepts"],["Different perspectives",6,"perspectives","stakeholders"],["Political theories",4,"theory","theories"],
  ["A recommendation at HL",4,"recommendation"],["A justification of your engagement",.4,"justification","justify"]]),
];

/* ================= the levels of analysis (upwards) ================= */
const BANDS = [
  {name:"Your voice",         zone:"Your voice",             from:0,  to:40,  hue:210, bg:["#0a1020","#101a30"]},
  {name:"The town square",    zone:"The town square",        from:40, to:100, hue:30,  bg:["#101a30","#2a2030"]},
  {name:"Parliament",         zone:"Parliament",             from:100,to:170, hue:45,  bg:["#2a2030","#2a2a3a"]},
  {name:"Embassy row",        zone:"Embassy row",            from:170,to:250, hue:120, bg:["#2a2a3a","#1a3a3a"]},
  {name:"The regional bloc",  zone:"The regional bloc",      from:250,to:320, hue:220, bg:["#1a3a3a","#1a2a5a"]},
  {name:"The United Nations", zone:"The United Nations",     from:320,to:390, hue:200, bg:["#1a2a5a","#2a5a8a"]},
  {name:"The global summit",  zone:"The global summit",      from:390,to:460, hue:150, bg:["#2a5a8a","#3a7a9a"]},
  {name:"Cyberspace",         zone:"Cyberspace",             from:460,to:530, hue:280, bg:["#3a7a9a","#1a1040"]},
  {name:"Orbit",              zone:"Orbit",                  from:530,to:600, hue:220, bg:["#1a1040","#06081a"]},
  {name:"The whole planet",   zone:"The whole planet",       from:600,to:760, hue:195, bg:["#06081a","#02030a"]},
];
const WORLD = 8.3e9;
const people = p => Math.min(WORLD, Math.pow(10, Math.max(0, p) / 700 * Math.log10(WORLD)));
function fmtP(p){ const v = people(p);
  if (v >= 1e9) return `${(v / 1e9).toFixed(1)} billion`; if (v >= 1e6) return `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1)} million`;
  if (v >= 1000) return Math.round(v).toLocaleString("en-GB"); return String(Math.round(v)); }
const FACTS = [
  [-30,"one voter, one ballot"],[12,"politics starts with one voice"],[30,"\"Man is by nature a political animal\" · Aristotle"],
  [60,"a petition, a placard, a protest"],[90,"the personal is political"],[125,"parliaments make laws in the name of the people"],[155,"legitimacy: the right to rule, accepted by the ruled"],
  [190,"embassies are where states speak to each other"],[230,"since 1648, states have been sovereign over their territory"],[265,"regional blocs pool sovereignty"],[300,"interdependence: what happens there affects us here"],
  [340,"the UN has 193 member states"],[372,"five permanent members of the Security Council hold a veto"],[410,"at COP summits, almost every country negotiates on climate"],[445,"no country can stop climate change alone"],
  [480,"news, protest and propaganda travel at the speed of light"],[515,"cyber attacks ignore borders"],[550,"satellites watch every border on Earth"],[585,"from orbit, there are no borders to see"],
  [625,"the overview effect: astronauts see one fragile planet"],[670,"8.3 billion people share one atmosphere"],[720,"global politics: everyone's problem"],
];
function wall(i, len, side){
  const r = srand(5171 + i*29 + (side==="r"?11:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const flag = (x, y, k) => { const c = [["#c8102e","#fff","#012169"],["#009b3a","#fedf00","#002776"],["#de2910","#ffde00","#de2910"],["#000","#dd0000","#ffce00"],["#0055a4","#fff","#ef4135"],["#ff9933","#fff","#138808"],["#006847","#fff","#ce1126"],["#003893","#fff","#d21034"]][k % 8];
    return `<path d="M${x} ${y} v40" stroke="#c9c9c9" stroke-width="2"/><g class="wave"><rect x="${x}" y="${y}" width="30" height="7" fill="${c[0]}"/><rect x="${x}" y="${y+7}" width="30" height="7" fill="${c[1]}"/><rect x="${x}" y="${y+14}" width="30" height="7" fill="${c[2]}"/></g>`; };
  switch(i){
    case 0: // your voice: ballot boxes and speech bubbles
      rep(160, y=>{ s+=`<rect x="30" y="${y+60}" width="60" height="50" rx="4" fill="#e8eef8" stroke="#9fb8d8" stroke-width="2"/><rect x="48" y="${y+58}" width="24" height="5" fill="#2a3a5a"/><path d="M52 ${y+56} l3 -26 h14 l-3 26z" fill="#fff" stroke="#9fb8d8"/><path d="M57 ${y+40} l4 4 l6 -8" stroke="#3ee089" stroke-width="2" fill="none"/>`
        + `<path d="M16 ${y+130} h50 a8 8 0 0 1 8 8 v16 a8 8 0 0 1 -8 8 h-30 l-10 10 v-10 h-10 a8 8 0 0 1 -8 -8 v-16 a8 8 0 0 1 8 -8z" fill="#9fd8ff" opacity=".5"/>`; });
      break;
    case 1: // the town square: protest placards and the town-hall clock
      rep(170, y=>{ s+=`<rect x="20" y="${y+30}" width="80" height="120" fill="#5a4a3a"/><path d="M14 ${y+30} L60 ${y} L106 ${y+30}z" fill="#4a3a2a"/><circle cx="60" cy="${y+60}" r="18" fill="#f4ead0" stroke="#2a1a0a" stroke-width="2"/><path d="M60 ${y+60} v-12 M60 ${y+60} h9" stroke="#2a1a0a" stroke-width="2"/>`
        + [0,1].map(k=>`<g transform="rotate(${f1((r()-.5)*20)} ${30+k*60} ${y+150})"><path d="M${30+k*60} ${y+165} v-30" stroke="#8a6a3a" stroke-width="3"/><rect x="${12+k*60}" y="${y+118}" width="36" height="22" fill="#fff"/><path d="M${16+k*60} ${y+126} h28 M${16+k*60} ${y+132} h20" stroke="${["#d02a2a","#2a6ad0"][k]}" stroke-width="3"/></g>`).join(""); });
      break;
    case 2: // parliament: a dome and columns
      rep(190, y=>{ s+=`<path d="M20 ${y+60} a40 40 0 0 1 80 0z" fill="#c8b890"/><rect x="56" y="${y+8}" width="8" height="14" fill="#c8b890"/>${flag(64, y-24, Math.floor(r()*8))}<rect x="14" y="${y+60}" width="92" height="10" fill="#d8c8a0"/>`
        + [0,1,2,3,4].map(k=>`<rect x="${20+k*18}" y="${y+70}" width="8" height="70" fill="#e8dcc0"/>`).join("") + `<rect x="10" y="${y+140}" width="100" height="10" fill="#d8c8a0"/>`; });
      break;
    case 3: // embassy row: buildings flying different flags
      rep(150, y=>{ s+=`<rect x="24" y="${y+40}" width="72" height="100" fill="#3a4a4a"/>` + [0,1,2].map(k=>`<rect x="${34+k*20}" y="${y+56}" width="12" height="16" fill="#ffe8a0" opacity=".8"/><rect x="${34+k*20}" y="${y+92}" width="12" height="16" fill="#ffe8a0" opacity=".8"/>`).join("") + flag(60, y, Math.floor(r()*8)); });
      break;
    case 4: // the regional bloc: a ring of stars and joined hands
      rep(180, y=>{ s+=Array.from({length:12}, (_, k) => { const a = k/12*6.283; return `<path d="M${f1(60+Math.cos(a)*34)} ${f1(y+60+Math.sin(a)*34-5)} l1.5 3.5 3.8 .3 -2.9 2.4 .9 3.7 -3.3 -2 -3.3 2 .9 -3.7 -2.9 -2.4 3.8 -.3z" fill="#ffd25a"/>`; }).join("")
        + `<path d="M30 ${y+140} q15 -14 30 0 q15 -14 30 0" stroke="#e8c8a8" stroke-width="10" fill="none" stroke-linecap="round"/>`; });
      break;
    case 5: // the UN: a slim tower and a row of flags
      rep(220, y=>{ s+=`<rect x="34" y="${y}" width="52" height="170" fill="#7a9ab8"/>` + Array.from({length:14}, (_, k)=>`<path d="M36 ${y+8+k*12} h48" stroke="#cfe8ff" stroke-width="1.5" opacity=".7"/>`).join("") + [0,1,2].map(k=>flag(8+k*40, y+180, Math.floor(r()*8))).join(""); });
      break;
    case 6: // the global summit: a round table with microphones and banners
      rep(180, y=>{ s+=`<ellipse cx="60" cy="${y+80}" rx="50" ry="20" fill="#3a6a5a" stroke="#cfe8ff" stroke-width="2"/>` + [0,1,2,3,4,5].map(k=>{ const a = k/6*6.283; return `<circle cx="${f1(60+Math.cos(a)*44)}" cy="${f1(y+80+Math.sin(a)*16)}" r="6" fill="${["#ffd25a","#9fd8ff","#ff8ab0","#8be08b","#c9a3ff","#ffb03a"][k]}"/>`; }).join("")
        + `<rect x="20" y="${y+120}" width="80" height="22" rx="3" fill="#1a3a5a"/><text x="60" y="${y+136}" text-anchor="middle" font-size="12" font-weight="700" fill="#9ff5c8" font-family="Chakra Petch,sans-serif">SUMMIT</text>`; });
      break;
    case 7: // cyberspace: data streams and network nodes
      rep(26, y=>{ s+=`<text x="${f1(r()*100)}" y="${y}" font-size="11" fill="#c9a3ff" opacity=".5" font-family="IBM Plex Mono,monospace">${Math.floor(r()*2)}${Math.floor(r()*2)}${Math.floor(r()*2)}${Math.floor(r()*2)}</text>`; }, 0);
      rep(120, y=>{ const pts = [0,1,2,3].map(()=>[f1(10+r()*100), f1(y+r()*100)]); s+=pts.map((a,k)=>pts.slice(k+1).map(b=>`<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}" stroke="#9ff5e8" stroke-width="1" opacity=".5"/>`).join("")).join("") + pts.map(a=>`<circle class="blink" cx="${a[0]}" cy="${a[1]}" r="4" fill="#9ff5e8"/>`).join(""); });
      break;
    case 8: // orbit: satellites over the curve of the Earth
      rep(40, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${y}" r="${f1(.6+r())}" fill="#fff" opacity=".7"/>`; }, 0);
      rep(200, y=>{ s+=`<g transform="translate(60 ${y+60}) rotate(${f1((r()-.5)*40)})"><rect x="-8" y="-8" width="16" height="16" fill="#c9c9c9"/><rect x="-40" y="-5" width="28" height="10" fill="#2a4a8a" stroke="#9fd8ff"/><rect x="12" y="-5" width="28" height="10" fill="#2a4a8a" stroke="#9fd8ff"/><path d="M0 8 v8" stroke="#c9c9c9" stroke-width="2"/><circle class="blink" cy="18" r="2" fill="#ff5a5a"/></g>`; });
      break;
    case 9: // the whole planet, without borders
      rep(40, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${y}" r="${f1(.6+r())}" fill="#fff" opacity=".7"/>`; }, 0);
      rep(320, y=>{ s+=`<circle cx="60" cy="${y+100}" r="48" fill="#1a5a9a"/><path d="M30 ${y+80} q14 -12 28 -2 q8 14 -6 22 q-18 4 -22 -20z M66 ${y+104} q16 -8 24 6 q-4 18 -20 14z" fill="#3a9a4a"/><ellipse cx="60" cy="${y+100}" rx="48" ry="48" fill="none" stroke="#9fd8ff" stroke-width="3" opacity=".5"/><path d="M24 ${y+78} q36 -20 72 0" stroke="#fff" stroke-width="5" fill="none" opacity=".5"/>`; }, 40);
      break;
  }
  return vwall(s, len, side);
}
/* the dove of peace: it picks up an olive branch, a blue beret and a treaty scroll, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#ffe08a" : "#f8f8f4", line = gold ? "#b8861a" : "#8a96a8";
  const s = `<g class="av-hover">
    <path d="M-22 6 l-14 -4 l4 8 l-6 6 l14 -2z" fill="${body}" stroke="${line}" stroke-width="1.4"/>
    <ellipse cx="0" cy="6" rx="22" ry="14" fill="${body}" stroke="${line}" stroke-width="1.6"/>
    <path class="av-tip" d="M-6 0 q-6 -26 16 -30 q-2 14 6 22 q-10 10 -22 8z" fill="${body}" stroke="${line}" stroke-width="1.4"/>
    <path d="M0 -12 q4 4 6 10 M4 -20 q4 6 6 12" stroke="${line}" stroke-width="1" fill="none" opacity=".7"/>
    <circle cx="20" cy="-4" r="9" fill="${body}" stroke="${line}" stroke-width="1.6"/>
    <g class="av-blink"><circle cx="23" cy="-6" r="2" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a2a"}"/></g>
    <path d="M28 -4 l7 2 l-7 2z" fill="#ffb03a"/>
    ${level >= 2 ? `<path d="M34 -2 q8 2 12 10" stroke="#4a7a2a" stroke-width="1.6" fill="none"/>` + [0,1,2,3].map(k=>`<ellipse cx="${f1(37+k*2.6)}" cy="${f1(1+k*2.2)}" rx="1.6" ry="3.6" transform="rotate(${-30 + k*10} ${f1(37+k*2.6)} ${f1(1+k*2.2)})" fill="#6aa83a"/>`).join("") : ""}
    ${level >= 4 ? `<path d="M12 -11 q8 -8 16 -1 q-8 -2 -16 1z" fill="#4a9ae8"/><circle cx="20" cy="-14" r="1.6" fill="#fff"/>` : ""}
    ${level >= 6 ? `<g transform="translate(-2 20)"><rect x="-10" y="-3" width="20" height="7" rx="1" fill="#f4ead0" stroke="#8a6a3a" stroke-width="1"/><circle cx="-10" cy=".5" r="3.5" fill="#e8d8b0" stroke="#8a6a3a" stroke-width="1"/><circle cx="10" cy=".5" r="3.5" fill="#e8d8b0" stroke="#8a6a3a" stroke-width="1"/><circle cx="0" cy="5" r="2.4" fill="#d03a3a"/></g>` : ""}
    <path d="M-2 19 v5 M4 19 v5" stroke="#ff9a7a" stroke-width="2" stroke-linecap="round"/>
    ${gold ? `<circle r="34" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<circle cx="100" cy="56" r="34" fill="#ffd25a" stroke="#fff2a8" stroke-width="2"/><ellipse cx="100" cy="56" rx="14" ry="34" fill="none" stroke="#b8861a" stroke-width="2"/><path d="M66 56 h68 M72 38 h56 M72 74 h56" stroke="#b8861a" stroke-width="2"/>`
    + [[30,30],[170,40],[40,94],[160,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="#fff2a8"/>`).join("") + `<path d="M64 30 q-14 -14 -6 -24 M136 30 q14 -14 6 -24" stroke="${c}" stroke-width="3" fill="none"/>`);
  if (t === "rootkit") return W(170,100,`<g transform="rotate(-30 85 50)"><rect x="60" y="30" width="50" height="22" rx="4" fill="#8a5a2a" stroke="${c}" stroke-width="2"/><rect x="82" y="52" width="6" height="40" fill="#6a4a2a"/></g><rect x="50" y="84" width="70" height="8" rx="2" fill="#6a4a2a"/>`);
  if (t === "trojan") return W(170,100,`<rect x="55" y="40" width="60" height="50" rx="4" fill="#e8eef8" stroke="${c}" stroke-width="2.5"/><rect x="73" y="37" width="24" height="6" fill="#2a3a5a"/><path d="M76 34 l3 -24 h14 l-3 24z" fill="#fff" stroke="${c}"/>`);
  if (t === "adware") return W(170,100,`<path d="M50 44 h16 l40 -22 v56 l-40 -22 h-16z" fill="#e8e2d0" stroke="${c}" stroke-width="2.5"/><path d="M116 34 q10 16 0 32 M124 26 q16 24 0 48" stroke="${c}" stroke-width="2.5" fill="none"/>`);
  if (t === "spam") return W(170,90,`<path d="M40 20 h90 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-60 l-14 14 v-14 h-16 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10z" fill="#f4f1ea" stroke="${c}" stroke-width="2"/><text x="85" y="49" text-anchor="middle" font-size="14" font-style="italic" fill="#5a5a5a" font-family="Georgia,serif">blah blah…</text>`);
  if (t === "blocked") return W(170,100,`<g transform="rotate(-8 85 50)"><rect x="20" y="30" width="130" height="40" rx="4" fill="none" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">SANCTIONS</text></g>`);
  return null;
}
registerSubject({
  key:"glopo", name:"Global Politics", theme:"A dove of peace rising from one voice to the whole planet", gemWord:"Superpower", gemTitle:"One in a Superpower", emoji:"🕊️",
  blurb:"You're a <b>dove</b> with one voice at the ballot box. Each prompt has many correct answers. <b>Obvious answers barely leave the polling station. Answers other players missed carry you higher</b>, through the town square, parliament and embassy row, a regional bloc, the United Nations, a global summit, cyberspace and orbit, until your voice reaches all 8.3 billion people on Earth.",
  noLevel:"SL and HL",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Superpower", rootkit:"Veto power", trojan:"Soft power", adware:"Majority vote", spam:"Talking point"}, blocked:"Vetoed", fw:"SANCTIONS",
  notes:{rootkit:"Veto power: very few players reached this.", trojan:"Soft power: not the usual answer.", adware:"A majority vote: correct and common.", spam:"A talking point everyone repeats first."},
  ladder:{gem:"One in a Superpower: almost no one thinks of it", rootkit:"Veto power: a rare answer", trojan:"Soft power: a strong, less common answer", adware:"Majority vote: correct and common", spam:"Talking point: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Rise ▲", inject:"Speak up", hint:"▲ rarer answers reach more people ▲", count:"counting the votes"},
  shout:t => ({gem:"HISTORIC AGREEMENT!", rootkit:"MOTION CARRIED!", blocked:"VETOED!"})[t],
  particles:["☮","★","⚖","✦"], particleColor:"#9fd8ff",
  meter:{label:"PEOPLE", fmt:fmtP, zone:fmtP, tick:fmtP, gain:(a,b)=>`reach ${fmtP(b)} people`},
  start:{bg:"linear-gradient(0deg,#04060e,#0a1020)", label:"Start · 1 voice", zone:"The polling station", color:"#9fd8ff"},
  endBg:"#02030a",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Beyond borders",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
