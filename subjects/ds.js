/* Digital Society — a post goes viral: it climbs from your phone through the group chat, the classroom, the
   neighbourhood and the city, into the newsroom and onto the trending page, up the cell towers and through the
   cloud to the satellites, until everyone on Earth has seen it. Rarer answers get more views.
   Syllabus: IB Digital society (first assessment 2024): concepts, content (data, algorithms, computers, media,
   networks and the internet, artificial intelligence, robots and autonomous technologies), contexts, the HL
   extension (challenges and interventions) and the inquiry project. */
(function(){
const CATALOG = [
  {label:"Concepts and contexts", units:[
    {code:"2", name:"Concepts", topics:[["2.1","Concepts: change, power, identity and values"]]},
    {code:"4", name:"Contexts", topics:[["4.1","Contexts: health, politics, the economy and culture"]]},
  ]},
  {label:"Content", units:[
    {code:"3", name:"Digital systems", topics:[["3.1","Data"],["3.2","Algorithms"],["3.3","Computers"],["3.4","Media"],["3.5","Networks and the internet"],["3.6","Artificial intelligence"],["3.7","Robots and autonomous technologies"]]},
  ]},
  {label:"HL extension", units:[
    {code:"5", name:"Challenges and interventions", topics:[["5.1","Challenges and interventions",HL]]},
  ]},
  {label:"The inquiry project", units:[
    {code:"I", name:"The inquiry project", topics:[["I.1","Inquiry, sources and stakeholders"]]},
  ]},
];

const PROMPTS = [
/* ---------- 2.1 Concepts ---------- */
P("ds001","2.1","Name a way digital technology has changed everyday life.","The quantified self",[
  ["Communication",20,"messaging","texting","social media"],["Online shopping",14,"e commerce","ecommerce","shopping"],["Remote work",10,"working from home","work"],["Online learning",8,"education","e learning"],["Streaming",8,"entertainment","netflix"],["Online banking",6,"banking","mobile banking"],
  ["News",6,"online news"],["Navigation",5,"gps","maps"],["Online dating",4,"dating"],["Telemedicine",4,"healthcare","online doctors"],["Cashless payments",4,"contactless","digital payments"],["Smart homes",3,"smart home"],["The quantified self",.4,"quantified self","self tracking","lifelogging"]]),
P("ds002","2.1","Name an ethical issue raised by digital technology.","The right to be forgotten",[
  ["Privacy",22],["Surveillance",12,"monitoring"],["Bias",10,"discrimination","algorithmic bias"],["Misinformation",10,"fake news","disinformation"],["Security",8,"cybersecurity","hacking"],["The digital divide",8,"digital divide","inequality","access"],["Freedom of expression",6,"free speech","freedom of speech"],
  ["Censorship",5],["Consent",4],["Accountability",4,"responsibility"],["Intellectual property",4,"copyright","piracy"],["Addiction",4,"screen time"],["Transparency",3],["The right to be forgotten",.4,"right to be forgotten","right to erasure"]]),
/* ---------- 3.1 Data ---------- */
P("ds003","3.1","Name a type of personal data.","Keystroke dynamics",[
  ["Name",14,"full name"],["Address",12,"home address"],["Date of birth",10,"birthday","age"],["Phone number",10],["Email address",8,"email"],["Location",8,"location data","gps location"],["Photos",6,"photographs","images"],["Health records",6,"health data","medical records"],
  ["Biometric data",6,"fingerprints","face","facial data","biometrics"],["Browsing history",5,"search history"],["Bank details",5,"financial data","credit card"],["IP address",3],["Purchase history",3],["Keystroke dynamics",.4,"typing pattern","keystroke"]]),
P("ds004","3.1","Name a law, right or principle that protects personal data.","Habeas data",[
  ["GDPR",22,"general data protection regulation"],["Consent",12,"informed consent"],["The right to erasure",8,"right to erasure","right to be forgotten"],["The right of access",8,"right of access","subject access request"],["Data minimization",6,"data minimisation"],["Data protection laws",8,"data protection act","data protection"],
  ["Encryption",6],["Privacy by design",5],["Purpose limitation",4],["CCPA",4,"california consumer privacy act"],["COPPA",3,"children s online privacy protection act"],["Data portability",3,"right to data portability"],["Habeas data",.4]]),
/* ---------- 3.2 Algorithms ---------- */
P("ds005","3.2","Name an everyday use of algorithms.","Content ID",[
  ["Recommendations",20,"recommendation systems","recommended videos","netflix recommendations"],["Search engines",15,"google search","search"],["Social media feeds",12,"feeds","for you page","timeline"],["Navigation",8,"gps","sat nav","route finding"],["Targeted advertising",8,"targeted ads","ads","advertising"],
  ["Spam filters",6,"spam filter"],["Credit scoring",5,"loans"],["Dating apps",4,"matching"],["Dynamic pricing",4,"surge pricing","pricing"],["Facial recognition",4,"face id"],["Predictive text",3,"autocorrect"],["Fraud detection",3],["Content ID",.4,"copyright matching"]]),
P("ds006","3.2","Name a problem with algorithms.","Automation bias",[
  ["Bias",22,"algorithmic bias","discrimination"],["Filter bubbles",14,"filter bubble"],["Echo chambers",12,"echo chamber"],["Lack of transparency",10,"black box","opacity","transparency"],["Spreading misinformation",8,"misinformation","fake news"],["Addiction",6,"addictive design","engagement"],
  ["Privacy",5],["Errors",4,"mistakes"],["Accountability",4,"who is responsible"],["Manipulation",4],["Polarization",4,"polarisation"],["Automation bias",.4]]),
/* ---------- 3.3 Computers ---------- */
P("ds007","3.3","Name a type of computing device.","Neuromorphic chip",[
  ["Smartphone",20,"phone","mobile phone"],["Laptop",15],["Desktop computer",12,"desktop","pc"],["Tablet",10,"ipad"],["Smartwatch",8,"wearable"],["Games console",6,"console","playstation","xbox"],["Server",6],["Supercomputer",4],["Smart speaker",4,"alexa"],
  ["Embedded system",4,"embedded"],["IoT device",3,"internet of things"],["Quantum computer",3],["Mainframe",2],["Neuromorphic chip",.4,"neuromorphic computer","neuromorphic"]]),
P("ds008","3.3","Name an environmental impact of computers.","Embodied carbon",[
  ["E-waste",24,"electronic waste","ewaste"],["Energy use",16,"electricity","power consumption","energy"],["Carbon emissions",12,"co2","emissions","greenhouse gases"],["Mining for metals",10,"mining","rare earth metals","conflict minerals","cobalt"],["Water use",6,"water","cooling"],
  ["Planned obsolescence",6,"obsolescence"],["Toxic chemicals",5,"toxic waste","lead","mercury"],["Data centres",4,"data centers"],["Embodied carbon",.4,"embodied emissions"]]),
/* ---------- 3.4 Media ---------- */
P("ds009","3.4","Name a type of digital media.","Machinima",[
  ["Social media",20],["Video streaming",14,"streaming","youtube","netflix"],["Podcasts",10,"podcast"],["Video games",10,"games"],["Memes",8,"meme"],["Blogs",6,"blog"],["News websites",6,"online news"],["E-books",5,"ebooks"],["Digital music",5,"music streaming","spotify"],
  ["Livestreams",4,"livestreaming","twitch"],["Virtual reality",4,"vr"],["Vlogs",3,"vlog"],["Deepfakes",3,"deepfake"],["Machinima",.4]]),
P("ds010","3.4","Name a way to spot or fight misinformation.","The SIFT method",[
  ["Fact-checking",22,"fact check","fact checking"],["Checking the source",16,"check the source","source","reliable sources"],["Cross-checking other sources",10,"other sources","cross checking","corroborate"],["Reverse image search",8,"reverse image"],["Media literacy",8,"digital literacy","education"],
  ["Checking the date",5,"date"],["Content moderation",5,"moderation"],["Warning labels",5,"labels","community notes"],["Lateral reading",4],["Prebunking",3,"inoculation"],["The SIFT method",.4,"sift"]]),
/* ---------- 3.5 Networks and the internet ---------- */
P("ds011","3.5","Name a part of the internet's physical infrastructure.","An internet exchange point",[
  ["Servers",16,"server"],["Routers",14,"router"],["Undersea cables",12,"submarine cables","undersea cable"],["Data centres",12,"data centers","data centre"],["Fibre-optic cables",8,"fibre optic","fiber optic","cables"],["Cell towers",8,"phone masts","masts","cell tower"],
  ["Satellites",6,"satellite"],["Wi-Fi access points",5,"wifi","access points","wi fi"],["Switches",4,"switch"],["Modems",4,"modem"],["Internet service providers",4,"isp","isps"],["An internet exchange point",.4,"internet exchange point","ixp"]]),
P("ds012","3.5","Name a cybersecurity threat.","SIM swapping",[
  ["Phishing",20],["Malware",14],["Viruses",10,"virus"],["Ransomware",10],["Hacking",8,"hackers"],["DDoS attacks",6,"ddos","denial of service"],["Identity theft",6],["Spyware",5],["Trojans",4,"trojan","trojan horse"],["Worms",3,"worm"],
  ["Social engineering",4],["Data breaches",4,"data breach"],["Weak passwords",3,"password cracking"],["SIM swapping",.4,"sim swap"]]),
P("ds013","3.5","Name a type of network.","A sneakernet",[
  ["The internet",20,"internet"],["LAN",15,"local area network"],["WAN",12,"wide area network"],["Wi-Fi",10,"wifi","wireless network","wlan"],["Mobile network",8,"cellular network","4g","5g"],["VPN",6,"virtual private network"],["PAN",5,"personal area network","bluetooth"],
  ["Intranet",4],["Peer-to-peer",4,"p2p","peer to peer"],["MAN",3,"metropolitan area network"],["Mesh network",3,"mesh"],["The dark web",3,"dark web","tor","darknet"],["A sneakernet",.4,"sneakernet"]]),
/* ---------- 3.6 Artificial intelligence ---------- */
P("ds014","3.6","Name a use of artificial intelligence.","Protein folding",[
  ["Chatbots",20,"chatbot","chatgpt"],["Self-driving cars",12,"driverless cars","autonomous vehicles"],["Facial recognition",10,"face recognition"],["Voice assistants",10,"siri","alexa","virtual assistants"],["Medical diagnosis",8,"diagnosis","healthcare"],["Translation",8,"google translate"],
  ["Image generation",6,"ai art","generating images"],["Recommendations",5,"recommendation systems"],["Fraud detection",4],["Playing games",4,"chess","alphago"],["Weather forecasting",3,"forecasting"],["Spam filtering",3,"spam filters"],["Protein folding",.4,"alphafold"]]),
P("ds015","3.6","Name a concern about artificial intelligence.","Model collapse",[
  ["Job losses",20,"unemployment","automation","jobs"],["Bias",14,"discrimination"],["Deepfakes",10,"deepfake"],["Privacy",8],["Misinformation",8,"fake news"],["Cheating",6,"plagiarism","academic honesty"],["Lack of transparency",5,"black box"],["Hallucinations",5,"making things up","errors"],
  ["Copyright",4,"intellectual property"],["Autonomous weapons",4,"killer robots"],["Accountability",3,"responsibility"],["Energy use",3,"environmental impact"],["Existential risk",3,"superintelligence","ai takeover"],["Model collapse",.4]]),
P("ds016","3.6","Name a type or technique of artificial intelligence.","Federated learning",[
  ["Machine learning",22,"ml"],["Neural networks",14,"neural network"],["Deep learning",10],["Generative AI",10,"generative"],["Large language models",8,"llm","llms","large language model"],["Computer vision",6,"image recognition"],["Natural language processing",6,"nlp"],
  ["Reinforcement learning",4],["Supervised learning",4],["Unsupervised learning",3],["Expert systems",3,"expert system"],["Narrow AI",3,"weak ai"],["Federated learning",.4]]),
/* ---------- 3.7 Robots and autonomous technologies ---------- */
P("ds017","3.7","Name a type of robot or autonomous technology.","Swarm robots",[
  ["Robot arms",14,"industrial robots","factory robots"],["Self-driving cars",14,"driverless cars","autonomous cars"],["Drones",14,"drone"],["Robot vacuum cleaners",10,"roomba","robot vacuum"],["Surgical robots",8,"robotic surgery","da vinci"],["Humanoid robots",6,"humanoid"],
  ["Delivery robots",5],["Warehouse robots",5],["Military drones",4,"autonomous weapons"],["Mars rovers",4,"rover","perseverance"],["Social robots",3,"companion robots"],["Exoskeletons",3,"exoskeleton"],["Swarm robots",.4,"swarm robotics","robot swarms"]]),
P("ds018","3.7","Name an issue raised by robots and autonomous technologies.","The uncanny valley",[
  ["Job losses",22,"unemployment","jobs"],["Safety",14,"accidents"],["Responsibility for accidents",10,"responsibility","accountability","liability"],["Hacking",8,"cybersecurity"],["Lethal autonomous weapons",8,"killer robots","autonomous weapons"],["Privacy",6,"surveillance"],
  ["Dependence",4,"over reliance"],["Cost",4],["Loss of human contact",4,"loneliness"],["Bias",3],["The trolley problem",3,"trolley problem"],["The uncanny valley",.4,"uncanny valley"]]),
/* ---------- 4.1 Contexts ---------- */
P("ds019","4.1","Name a way digital technology is used in healthcare.","Digital twins",[
  ["Telemedicine",18,"online doctors","video appointments","telehealth"],["Electronic health records",12,"health records","medical records"],["Fitness trackers",10,"fitbit","smartwatches","wearables"],["Health apps",10,"apps"],["Robotic surgery",8,"surgical robots"],["AI diagnosis",8,"diagnosis"],
  ["Contact tracing",6,"contact tracing apps"],["Medical imaging",5,"mri","scans","x rays"],["Remote monitoring",4],["3D-printed prosthetics",4,"prosthetics","3d printing"],["Online appointment booking",3,"booking"],["Digital twins",.4,"digital twin"]]),
P("ds020","4.1","Name a way digital technology affects politics.","Computational propaganda",[
  ["Social media campaigns",16,"campaigning","online campaigns"],["Misinformation",14,"fake news","disinformation"],["Online petitions",8,"petitions"],["Election interference",8,"interference","foreign interference"],["Microtargeting",6,"targeted ads","political ads"],["Surveillance",8],
  ["Censorship",6,"internet shutdowns"],["Online activism",6,"hashtag activism","activism"],["E-voting",4,"electronic voting","online voting"],["Bots",4,"troll farms"],["Whistleblowing",3,"leaks","wikileaks"],["Hacktivism",3],["Computational propaganda",.4]]),
P("ds021","4.1","Name a way digital technology affects the economy or work.","Ghost work",[
  ["Remote work",16,"working from home"],["E-commerce",14,"online shopping","ecommerce"],["The gig economy",12,"gig economy","uber","delivery apps"],["Automation",12,"job losses"],["Cryptocurrency",6,"bitcoin","crypto"],["Online banking",5,"fintech"],
  ["Digital marketing",5,"online advertising"],["Cashless payments",5,"contactless"],["Platform economy",4,"platforms"],["Freelancing",4,"freelance"],["Data as a commodity",3,"data economy","selling data"],["The attention economy",3,"attention economy"],["Ghost work",.4]]),
P("ds022","4.1","Name a cultural effect of digital technology.","Digital folklore",[
  ["Memes",18,"meme culture"],["Influencer culture",14,"influencers"],["Global culture",10,"globalization","globalisation","k pop"],["Cancel culture",8],["Emoji",6,"emojis"],["Selfies",6,"selfie culture"],["Online communities",6,"fandoms","communities"],
  ["Streaming music",5,"streaming"],["New slang",5,"internet slang","language change"],["Remix culture",3,"remixes"],["Viral challenges",3,"challenges","tiktok trends"],["Digital folklore",.4,"creepypasta","internet folklore"]]),
/* ---------- 5.1 Challenges and interventions (HL) ---------- */
P("ds023","5.1","Name a global challenge involving digital technology.","Data colonialism",[
  ["The digital divide",22,"digital divide","unequal access"],["Misinformation",12,"fake news"],["Cybercrime",10,"cyber attacks"],["Surveillance",8,"mass surveillance"],["E-waste",8,"electronic waste"],["Online hate",6,"hate speech","cyberbullying"],
  ["Mental health",6,"social media addiction"],["Privacy",5],["Censorship",4,"internet shutdowns"],["Climate impact of data centres",3,"energy use","emissions"],["Election interference",3],["Data colonialism",.4]],
  [], HL),
P("ds024","5.1","Name an intervention that addresses a digital challenge.","Data trusts",[
  ["Laws and regulation",18,"regulation","laws","gdpr","digital services act"],["Digital literacy education",14,"digital literacy","education","media literacy"],["Content moderation",10,"moderation"],["Fact-checking",8,"fact checking"],["Encryption",6],["Public Wi-Fi and broadband",6,"broadband","public wifi","internet access"],
  ["Right to repair",4],["Age verification",4],["Open-source software",4,"open source"],["Ethical AI guidelines",4,"ai regulation","ai act"],["Parental controls",3],["Data trusts",.4,"data trust"]],
  [], HL),
/* ---------- I.1 The inquiry project ---------- */
P("ds025","I.1","Name a type of source for a digital society inquiry.","Terms of service",[
  ["News articles",18,"news","newspapers"],["Academic journals",12,"journals","research papers","studies"],["Interviews",10,"interview"],["Surveys",8,"questionnaires"],["Government reports",8,"government data"],["NGO reports",5,"reports"],
  ["Documentaries",6,"documentary"],["Social media posts",5,"social media"],["Books",5],["Statistics",5,"data"],["Podcasts",3],["Company reports",3,"press releases"],["Terms of service",.4,"terms and conditions","privacy policy"]]),
P("ds026","I.1","Name a stakeholder affected by a digital system.","Data brokers",[
  ["Users",20,"customers","consumers"],["Companies",14,"tech companies","businesses"],["Governments",12,"government"],["Children",8,"young people","teenagers"],["Employees",6,"workers"],["Parents",6],["Schools",5,"teachers"],["Developers",5,"programmers"],
  ["Advertisers",5],["Content creators",4,"influencers"],["Regulators",3],["Content moderators",3,"moderators"],["Data brokers",.4,"data broker"]]),
];

/* ================= going viral (up) ================= */
const BANDS = [
  {name:"Your phone",         zone:"Your phone",          from:0,  to:40,  hue:200, bg:["#10141e","#141a2a"]},
  {name:"The group chat",     zone:"The group chat",      from:40, to:100, hue:140, bg:["#141a2a","#122222"]},
  {name:"The classroom",      zone:"The classroom",       from:100,to:170, hue:40,  bg:["#122222","#22201a"]},
  {name:"The neighbourhood",  zone:"The neighbourhood",   from:170,to:250, hue:30,  bg:["#22201a","#1a1e2e"]},
  {name:"The city",           zone:"The city",            from:250,to:320, hue:210, bg:["#1a1e2e","#141428"]},
  {name:"The newsroom",       zone:"The newsroom",        from:320,to:390, hue:0,   bg:["#141428","#2a1418"]},
  {name:"The trending page",  zone:"The trending page",   from:390,to:460, hue:330, bg:["#2a1418","#2a1430"]},
  {name:"The cell towers",    zone:"The cell towers",     from:460,to:530, hue:190, bg:["#2a1430","#101e30"]},
  {name:"The cloud",          zone:"The cloud",           from:530,to:600, hue:200, bg:["#101e30","#0a1022"]},
  {name:"The satellites",     zone:"The satellites",      from:600,to:760, hue:240, bg:["#0a1022","#03040c"]},
];
// views at each band boundary: one view becomes everyone on Earth
const KNOTS = [[0,1],[40,5],[100,30],[170,200],[250,2000],[320,50000],[390,1e6],[460,2e7],[530,3e8],[600,2e9],[760,8e9]];
function views(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(8e9, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtV(p){ const v = views(p); if (v >= 1e9) return `${(v / 1e9).toFixed(v >= 7.95e9 ? 0 : 1)} billion views`; if (v >= 1e6) return `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1)} million views`; return `${v.toLocaleString("en-GB")} view${v === 1 ? "" : "s"}`; }
const FACTS = [
  [-30,"every post starts with one view"],[12,"more than 5 billion people are online"],[30,"the first text message said 'Merry Christmas' (1992)"],
  [60,"WhatsApp handled about 100 billion messages a day in 2020"],[85,"Shigetaka Kurita designed the first popular emoji set (1999)"],[115,"about a third of the world is still offline: the digital divide"],[150,"Tim Berners-Lee invented the World Wide Web (1989)"],
  [190,"your phone is far more powerful than Apollo 11's guidance computer"],[225,"smart cities use sensors to manage traffic and energy"],[265,"false news spread faster than true news on Twitter (MIT, 2018)"],[300,"the first YouTube video: 'Me at the zoo' (2005)"],
  [340,"Chris Messina proposed the hashtag in 2007"],[370,"recommendation algorithms decide much of what you watch"],[410,"your phone hands over between cell towers as you move"],[440,"5G carries far more data than 4G"],
  [480,"'the cloud' is really other people's computers, in data centres"],[510,"data centres use about 1.5% of the world's electricity"],[550,"almost all intercontinental data travels through undersea cables"],[580,"GDPR (2018) gave Europeans rights over their personal data"],
  [625,"Sputnik 1 (1957) was the first artificial satellite"],[670,"Starlink has thousands of satellites in low Earth orbit"],[720,"8 billion people, one network"],
];
function wall(i, len, side){
  const r = srand(6271 + i*41 + (side==="r"?23:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const hues = [200, 330, 140, 40, 280, 10, 180];
  switch(i){
    case 0: // your phone: a home screen of app icons with notification badges
      rep(52, y=>{ [0,1,2].map(k=>{ const x = 14+k*34, h = hues[Math.floor(r()*hues.length)]; s+=`<rect x="${x}" y="${y}" width="26" height="26" rx="7" fill="hsl(${h} 70% 55%)"/><rect x="${x+6}" y="${y+6}" width="14" height="14" rx="3" fill="#fff" opacity=".35"/>`; if (r() < .25) s+=`<circle cx="${x+25}" cy="${y+2}" r="6" fill="#ff3a4a"/><text x="${x+25}" y="${y+5.5}" text-anchor="middle" font-size="8" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">${1+Math.floor(r()*9)}</text>`; }); }, 10);
      break;
    case 1: // the group chat: bubbles left and right, and someone typing
      rep(64, y=>{ const me = r() < .5, w = f1(46+r()*34), x = me ? 112-w : 8;
        s+=`<rect x="${x}" y="${y}" width="${w}" height="26" rx="12" fill="${me ? "#2ec46a" : "#3a4458"}"/><text x="${f1(+x + w/2)}" y="${y+17}" text-anchor="middle" font-size="11" fill="#fff" font-family="Chakra Petch,sans-serif">${["lol","omg","fr??","brb","ok!","no way","same","haha"][Math.floor(r()*8)]}</text>`;
        if (r() < .3) s+=`<rect x="8" y="${y+34}" width="40" height="18" rx="9" fill="#3a4458"/>${[0,1,2].map(k=>`<circle class="blink" style="animation-delay:${k*.2}s" cx="${18+k*10}" cy="${y+43}" r="2.6" fill="#c8d0e0"/>`).join("")}`; }, 10);
      break;
    case 2: // the classroom: desks with laptops and a whiteboard
      rep(170, y=>{ s+=`<rect x="14" y="${y}" width="92" height="56" rx="3" fill="#f4f4f0" stroke="#8a8a8a" stroke-width="3"/><text x="60" y="${y+24}" text-anchor="middle" font-size="10" fill="#2a5ab8" font-family="Caveat,cursive">wifi password?</text><path d="M24 ${y+38} q20 -8 40 0" stroke="#e8443a" stroke-width="2" fill="none"/>`
        + `<rect x="20" y="${y+110}" width="80" height="8" fill="#8a5a2a"/><path d="M28 ${y+118} v40 M92 ${y+118} v40" stroke="#6a4424" stroke-width="5"/><path d="M36 ${y+110} l6 -28 h36 l6 28z" fill="#2a2a3a"/><rect x="45" y="${y+86}" width="30" height="18" fill="#3ac0ff" opacity=".8"/>`; });
      break;
    case 3: // the neighbourhood: houses broadcasting Wi-Fi
      rep(150, y=>{ const c = ["#c86a4a","#e8c88a","#8aa8c8","#a8c88a"][Math.floor(r()*4)];
        s+=`<path d="M24 ${y+70} l36 -30 l36 30z" fill="#6a3a2a"/><rect x="30" y="${y+70}" width="60" height="50" fill="${c}"/><rect x="40" y="${y+82}" width="14" height="14" fill="#ffe58a"/><rect x="66" y="${y+92}" width="14" height="28" fill="#4a2a1a"/>`
          + [0,1,2].map(k=>`<path class="blink" style="animation-delay:${k*.25}s" d="M${46-k*8} ${y+30-k*8} q${14+k*8} ${-12-k*4} ${28+k*16} 0" stroke="#3ac0ff" stroke-width="2.4" fill="none"/>`).join(""); });
      break;
    case 4: // the city: skyscrapers with lit windows and a billboard
      rep(220, y=>{ s+=`<rect x="16" y="${y}" width="40" height="200" fill="#2a3048"/><rect x="62" y="${y+40}" width="44" height="160" fill="#22283e"/>`;
        for (let wy = y+8; wy < y+196; wy += 14) for (let k = 0; k < 3; k++){ if (r() < .55) s+=`<rect x="${22+k*12}" y="${wy}" width="7" height="8" fill="#ffd25a" opacity=".85"/>`; if (wy > y+44 && r() < .5) s+=`<rect x="${68+k*13}" y="${wy}" width="7" height="8" fill="#9fd8ff" opacity=".8"/>`; }
        s+=`<rect x="20" y="${y+100}" width="80" height="34" rx="3" fill="#ff3a8a" stroke="#fff" stroke-width="1.5"/><text x="60" y="${y+123}" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">#${["viral","trend","fyp","news"][Math.floor(r()*4)]}</text>`; });
      break;
    case 5: // the newsroom: TV screens with breaking news
      rep(130, y=>{ s+=`<rect x="14" y="${y}" width="92" height="64" rx="4" fill="#0a0a14" stroke="#5a5a6a" stroke-width="3"/><circle cx="60" cy="${y+26}" r="12" fill="#e8c8a8"/><rect x="46" y="${y+38}" width="28" height="16" fill="#2a3a6a"/><rect x="14" y="${y+46}" width="92" height="14" fill="#e8243a"/>`
        + `<text x="60" y="${y+57}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">BREAKING NEWS</text><circle class="blink" cx="96" cy="${y+10}" r="3" fill="#ff3a3a"/>`; });
      break;
    case 6: // the trending page: hashtags, flames and rising numbers
      rep(120, y=>{ s+=`<text x="${f1(28+r()*30)}" y="${y+40}" font-size="${f1(30+r()*18)}" font-weight="700" fill="#ff4fd8" opacity=".5" font-family="Chakra Petch,sans-serif">#</text>`
        + `<path d="M86 ${y+70} q-14 -16 -2 -34 q2 12 10 14 q4 -10 0 -20 q18 14 8 40z" fill="#ff8a1a"/><path d="M90 ${y+70} q-6 -8 0 -18 q8 8 4 18z" fill="#ffd25a"/>`
        + `<path d="M20 ${y+100} l10 -14 l10 14 M30 ${y+86} v24" stroke="#3ee089" stroke-width="3" fill="none"/><text x="46" y="${y+106}" font-size="11" fill="#3ee089" font-family="Chakra Petch,sans-serif">+${(1+Math.floor(r()*99))}k</text>`; });
      break;
    case 7: // the cell towers: a lattice mast and pulsing signals
      s+=`<path d="M48 0 V${len} M72 0 V${len}" stroke="#9aa0a8" stroke-width="3"/>`; for (let y=0; y<len; y+=24) s+=`<path d="M48 ${y} L72 ${y+24} M72 ${y} L48 ${y+24}" stroke="#7a8088" stroke-width="1.5"/>`;
      rep(160, y=>{ s+=`<rect x="40" y="${y}" width="10" height="26" fill="#e8e8f0"/><rect x="70" y="${y}" width="10" height="26" fill="#e8e8f0"/><circle class="blink" cx="60" cy="${y+40}" r="3" fill="#ff3a3a"/>`
        + [1,2,3].map(k=>`<path class="blink" style="animation-delay:${k*.3}s" d="M${36-k*8} ${y-6-k*2} q-${6+k*2} ${19+k*2} 0 ${38+k*4} M${84+k*8} ${y-6-k*2} q${6+k*2} ${19+k*2} 0 ${38+k*4}" stroke="#3ac0ff" stroke-width="2" fill="none"/>`).join(""); });
      break;
    case 8: // the cloud: server racks floating in clouds
      rep(190, y=>{ s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><path d="M10 ${y+60} q0 -26 26 -24 q10 -22 36 -10 q24 -8 30 16 q18 6 10 22 h-92 q-14 -2 -10 -4z" fill="#e8f0ff" opacity=".25"/></g>`
        + `<rect x="34" y="${y+70}" width="52" height="90" rx="3" fill="#1a2234" stroke="#5a6a8a" stroke-width="2"/>` + [0,1,2,3,4].map(k=>`<rect x="38" y="${y+76+k*17}" width="44" height="12" fill="#0e1422"/><circle class="blink" style="animation-delay:${f1(r()*1.5)}s" cx="44" cy="${y+82+k*17}" r="2" fill="${r()<.8?"#3ee089":"#ffb03a"}"/><path d="M52 ${y+82+k*17} h24" stroke="#3a4a6a" stroke-width="2"/>`).join(""); });
      break;
    case 9: // the satellites: stars and orbiting satellites
      for (let k=0; k<len/12; k++) s+=`<circle cx="${f1(r()*120)}" cy="${f1(r()*len)}" r="${f1(.5+r()*1.3)}" fill="#fff" opacity="${f1(.3+r()*.6)}"/>`;
      rep(200, y=>{ const x = f1(30+r()*60); s+=`<g transform="translate(${x} ${y+60}) rotate(${f1(-20+r()*40)})"><rect x="-8" y="-6" width="16" height="12" fill="#c9c9d6"/><rect x="-34" y="-5" width="24" height="10" fill="#2a4a9a" stroke="#9fb8ff" stroke-width="1"/><rect x="10" y="-5" width="24" height="10" fill="#2a4a9a" stroke="#9fb8ff" stroke-width="1"/><path d="M0 -6 v-8" stroke="#c9c9d6" stroke-width="1.5"/><circle class="blink" cy="-15" r="2" fill="#3ee089"/></g>`; });
      break;
  }
  return vwall(s, len, side);
}
/* the post: it collects a like, Wi-Fi bars, a verified tick and sunglasses, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, fill = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 80% 62%)` : "#3a8ae8", line = gold ? "#b8861a" : "#1a3a7a";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <path d="M-22 -18 h44 a8 8 0 0 1 8 8 v24 a8 8 0 0 1 -8 8 h-26 l-12 10 v-10 h-6 a8 8 0 0 1 -8 -8 v-24 a8 8 0 0 1 8 -8z" fill="${fill}" stroke="${line}" stroke-width="2"/>
    <circle cx="-8" cy="-4" r="4" fill="#fff"/><circle cx="8" cy="-4" r="4" fill="#fff"/>
    <g class="av-blink"><circle cx="-7.4" cy="-3.6" r="2" fill="#0a1430"/><circle cx="8.6" cy="-3.6" r="2" fill="#0a1430"/></g>
    <path d="M-6 6 q6 5 12 0" stroke="#0a1430" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<g transform="translate(-24 -22)"><circle r="8" fill="#ff3a5a"/><path d="M0 3 l-4 -4 a2.4 2.4 0 0 1 4 -3 a2.4 2.4 0 0 1 4 3z" fill="#fff"/></g>` : ""}
    ${level >= 3 ? [1,2,3].map(k=>`<path d="M${-k*5} ${-22-k*3} q${k*5} ${-k*4} ${k*10} 0" stroke="#3ac0ff" stroke-width="2" fill="none" stroke-linecap="round"/>`).join("") : ""}
    ${level >= 4 ? `<g transform="translate(24 -20)"><circle r="7" fill="#1d9bf0" stroke="#fff" stroke-width="1.5"/><path d="M-3 0 l2 2.4 l4 -4.4" stroke="#fff" stroke-width="1.8" fill="none"/></g>` : ""}
    ${level >= 6 ? `<path d="M-15 -7 h12 v5 q-6 4 -12 0z M3 -7 h12 v5 q-6 4 -12 0z" fill="#0a0a14"/><path d="M-3 -6 h6" stroke="#0a0a14" stroke-width="1.6"/>` : ""}
    ${level >= 1 ? `<text class="blink" x="20" y="18" font-size="10" font-weight="700" fill="#ff4fd8" font-family="Chakra Petch,sans-serif">♥</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<path d="M100 92 l-36 -34 a20 20 0 0 1 36 -26 a20 20 0 0 1 36 26z" fill="#ff3a5a" stroke="${c}" stroke-width="3"/><text x="100" y="62" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">1 GB</text>`
    + [[30,26],[170,30],[36,94],[166,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M85 88 q-30 -20 -10 -56 q4 18 14 20 q6 -16 0 -34 q30 24 16 70z" fill="#ff8a1a" stroke="${c}" stroke-width="2"/><path d="M88 88 q-10 -12 0 -28 q12 12 6 28z" fill="#ffd25a"/>`);
  if (t === "trojan") return W(170,100,`<circle cx="62" cy="50" r="9" fill="${c}"/><circle cx="108" cy="30" r="9" fill="${c}"/><circle cx="108" cy="70" r="9" fill="${c}"/><path d="M62 50 L108 30 M62 50 L108 70" stroke="${c}" stroke-width="4"/>`);
  if (t === "adware") return W(170,100,`<path d="M85 80 l-26 -24 a14 14 0 0 1 26 -20 a14 14 0 0 1 26 20z" fill="#ff3a5a" stroke="${c}" stroke-width="2"/>`);
  if (t === "spam") return W(170,90,`<path d="M50 45 q35 -30 70 0 q-35 30 -70 0z" fill="#e8e8f0" stroke="${c}" stroke-width="2"/><circle cx="85" cy="45" r="10" fill="#3a8ae8"/><path d="M128 40 l4 5 l8 -10 M136 40 l4 5 l8 -10" stroke="${c}" stroke-width="2.4" fill="none"/>`);
  if (t === "blocked") return W(170,100,`<rect x="14" y="26" width="142" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="57" text-anchor="middle" font-size="16" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">SHADOWBANNED</text>`);
  return null;
}
registerSubject({
  key:"ds", name:"Digital Society", theme:"A post going viral, from your phone to every screen on Earth", gemWord:"Gigabyte", gemTitle:"One in a Gigabyte", emoji:"📱",
  blurb:"You're a <b>post</b> on someone's phone. Each prompt has many correct answers. <b>Obvious answers get a few views. Answers other people missed make you go viral</b>, through the group chat, the classroom, the neighbourhood and the city, into the newsroom and onto the trending page, up the cell towers and through the cloud to the satellites, until everyone on Earth has seen you.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Gigabyte", rootkit:"Trending", trojan:"Shared", adware:"Liked", spam:"Seen"}, blocked:"Misinformation", fw:"SHADOWBANNED",
  notes:{rootkit:"Trending: very few people reached this many.", trojan:"Shared: not the usual answer.", adware:"Liked: correct and common.", spam:"Seen: what everyone scrolls past first."},
  ladder:{gem:"One in a Gigabyte: almost no one thinks of it", rootkit:"Trending: a rare answer", trojan:"Shared: a strong, less common answer", adware:"Liked: correct and common", spam:"Seen: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Post ▲", inject:"Post", hint:"▲ rarer answers get more views ▲", count:"refreshing the feed"},
  shout:t => ({gem:"IT'S GONE VIRAL!", rootkit:"TRENDING!", blocked:"FACT CHECK: FALSE!"})[t],
  particles:["♥","#","@","★"], particleColor:"#ff4fd8",
  meter:{label:"VIEWS", fmt:fmtV, zone:fmtV, tick:fmtV, gain:(a,b)=>`reach ${fmtV(b)}`},
  start:{bg:"linear-gradient(0deg,#080a12,#10141e)", label:"Start · 1 view", zone:"A brand-new post", color:"#3ac0ff"},
  endBg:"#03040c",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Everyone on Earth",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
