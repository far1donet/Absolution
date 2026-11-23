/* History — a time traveller crossing the timeline from the age of dinosaurs to the new generation.
   Syllabus: IB History (first assessment 2017 guide, current), Paper 1 prescribed subjects, Paper 2 world history topics, Paper 3 HL regional options. */
(function(){
const CATALOG = [
  {label:"History", units:[
    {code:"P1", name:"Prescribed subjects", topics:[["PS1","Military leaders"],["PS2","Conquest and its impact"],["PS3","The move to global war"],["PS4","Rights and protest"],["PS5","Conflict and intervention"]]},
    {code:"P2", name:"World history topics", topics:[["WT1","Society and economy (750–1400)"],["WT2","Causes and effects of medieval wars (750–1500)"],["WT3","Dynasties and rulers (750–1500)"],["WT4","Societies in transition (1400–1700)"],["WT5","Early modern states (1450–1789)"],["WT6","Causes and effects of early modern wars (1500–1750)"],["WT7","Origins, development and impact of industrialization (1750–2005)"],["WT8","Independence movements (1800–2000)"],["WT9","Evolution and development of democratic states (1848–2000)"],["WT10","Authoritarian states (20th century)"],["WT11","Causes and effects of 20th-century wars"],["WT12","The Cold War: superpower tensions and rivalries"]]},
    {code:"P3", name:"HL regional options", topics:[["HL1","History of Africa and the Middle East",HL],["HL2","History of the Americas",HL],["HL3","History of Asia and Oceania",HL],["HL4","History of Europe",HL]]},
  ]},
];

const PROMPTS = [
P("hi01","WT11","Name a cause of the First World War.","The 'blank cheque'",[
  ["Alliance system",25,"alliances","alliance"],["Assassination of Franz Ferdinand",20,"franz ferdinand","archduke","sarajevo","assassination"],["Militarism",18,"arms race"],
  ["Imperialism",15,"empires","colonies"],["Nationalism",15],["Naval race",5,"dreadnought","dreadnoughts"],["Schlieffen Plan",4,"schlieffen"],["Balkan crises",3,"balkans","balkan wars"],
  ["Moroccan crises",2,"morocco"],["The 'blank cheque'",.4,"blank cheque","blank check","july crisis"]]),
P("hi02","WT11","Name a cause of the Second World War.","Hossbach Memorandum",[
  ["Treaty of Versailles",22,"versailles"],["Hitler's aggression",15,"hitler","expansionism","lebensraum"],["Appeasement",15],["Invasion of Poland",12,"poland"],
  ["Failure of the League of Nations",10,"league of nations"],["Great Depression",8,"depression","wall street crash"],["Nazi-Soviet Pact",6,"nazi soviet pact","molotov ribbentrop"],
  ["Munich Agreement / Sudetenland",4,"munich","sudetenland","munich agreement"],["Japanese expansion",4,"manchuria","japan"],["Remilitarisation of the Rhineland",3,"rhineland"],
  ["Anschluss",3],["Hossbach Memorandum",.4,"hossbach"]]),
P("hi03","WT11","Name an effect of the First World War.","Mandates system",[
  ["Treaty of Versailles",20,"versailles"],["League of Nations",15],["Millions of deaths",10,"deaths","casualties"],["Collapse of empires",10,"fall of empires","ottoman empire collapsed","austria hungary collapsed"],
  ["Reparations and debt",8,"reparations","debt"],["Russian Revolution",6,"bolsheviks"],["Women won the vote",6,"womens suffrage","votes for women"],
  ["New nation states",5,"poland","czechoslovakia","yugoslavia","new countries"],["Spanish flu",4,"flu pandemic"],["Mandates system",.4,"mandates"]]),
P("hi04","WT11","Name a weapon, technology or type of warfare from 20th-century wars.","Radar",[
  ["Trench warfare",25,"trenches"],["Tanks",12,"tank"],["Atomic bomb",10,"nuclear weapons","atom bomb","hiroshima"],["Blitzkrieg",10],["Aircraft / bombing",8,"planes","bombers","bombing"],
  ["Guerrilla warfare",8,"guerrilla","guerilla"],["Submarines / U-boats",6,"u boats","submarines"],["Poison gas",5,"gas","mustard gas","chlorine gas"],["Machine guns",5,"machine gun"],
  ["Total war",5],["Radar",.4]]),
P("hi05","WT12","Name an event of the Cold War.","Able Archer 83",[
  ["Cuban Missile Crisis",25,"cuba","cuban missile crisis"],["Berlin Wall",18,"fall of the berlin wall","berlin wall built"],["Korean War",12,"korea"],["Vietnam War",12,"vietnam"],
  ["Berlin Blockade and Airlift",8,"berlin blockade","berlin airlift"],["Space race",6,"sputnik","moon landing"],["Arms race",5],["Soviet invasion of Afghanistan",3,"afghanistan"],
  ["Hungarian Uprising",3,"hungary 1956","hungarian revolution"],["Prague Spring",3,"czechoslovakia 1968"],["Able Archer 83",.4,"able archer"]]),
P("hi06","WT12","Name a Cold War leader.","Andropov",[
  ["Stalin",20],["Khrushchev",15,"krushchev"],["Kennedy",15,"jfk","john f kennedy"],["Gorbachev",15],["Reagan",12,"ronald reagan"],["Truman",8],["Mao",6,"mao zedong"],
  ["Eisenhower",5],["Nixon",5],["Brezhnev",4],["Castro",4,"fidel castro"],["Andropov",.4]]),
P("hi07","WT12","Name a Cold War policy or doctrine.","Rollback",[
  ["Containment",25],["Truman Doctrine",15,"truman doctrine"],["Marshall Plan",15,"marshall aid"],["Détente",10,"detente"],["Domino theory",8,"domino"],
  ["Glasnost / perestroika",6,"glasnost","perestroika"],["Brinkmanship",5],["Mutually assured destruction",5,"mad"],["Brezhnev Doctrine",4],["Reagan Doctrine",2],["Rollback",.4]]),
P("hi08","WT12","Name an alliance or international organization of the Cold War era.","ANZUS",[
  ["NATO",30],["Warsaw Pact",20],["United Nations",15,"un"],["Comecon",4],["EEC",5,"european economic community","eu"],["SEATO",3],["Non-Aligned Movement",3,"non aligned movement"],
  ["CENTO",1,"baghdad pact"],["OAS",1,"organization of american states"],["ANZUS",.4]]),
P("hi09","WT10","Name an authoritarian leader of the 20th century.","Salazar",[
  ["Hitler",30],["Stalin",25],["Mussolini",15],["Mao",12,"mao zedong"],["Franco",5],["Castro",4,"fidel castro"],["Perón",2,"peron"],["Pol Pot",2],["Kim Il-sung",2,"kim il sung"],
  ["Nasser",2],["Pinochet",2],["Salazar",.4]]),
P("hi10","WT10","Name a method authoritarian leaders used to keep power.","Concordat with the Church",[
  ["Propaganda",30],["Secret police",15,"gestapo","nkvd","ss","police state"],["Terror and purges",12,"purges","terror","great purge"],["Censorship",10],["Cult of personality",8,"personality cult"],
  ["Indoctrinating youth",6,"education","youth groups","hitler youth","komsomol"],["Banning opposition",6,"one party state","banning parties","removing opposition"],
  ["Camps / gulags",4,"gulag","gulags","concentration camps"],["Economic policies",3,"five year plans","jobs"],["Concordat with the Church",.4,"concordat","lateran treaty"]]),
P("hi11","WT10","Name a cause of the Russian Revolutions of 1917.","Kornilov affair",[
  ["Losses in the First World War",20,"ww1","first world war","world war 1"],["Weak rule of Tsar Nicholas II",15,"nicholas ii","tsar","the tsar"],["Food shortages",12,"bread","famine","hunger"],
  ["Lenin and the Bolsheviks",10,"lenin","bolsheviks"],["Rasputin",6],["Failures of the Provisional Government",6,"provisional government"],["Peasant poverty",5,"peasants","poverty"],
  ["1905 Revolution / Bloody Sunday",5,"bloody sunday","1905"],["April Theses",2],["Kornilov affair",.4,"kornilov"]]),
P("hi12","WT8","Name a leader of an independence movement.","Amílcar Cabral",[
  ["Gandhi",30,"mahatma gandhi"],["Nehru",8,"jawaharlal nehru"],["Ho Chi Minh",8],["Simón Bolívar",6,"bolivar","simon bolivar"],["Jinnah",6,"muhammad ali jinnah"],["Nkrumah",6,"kwame nkrumah"],
  ["Kenyatta",5,"jomo kenyatta"],["Sukarno",3],["Ben Bella",2,"algeria"],["Amílcar Cabral",.4,"amilcar cabral","cabral"]],
  [[["mandela","nelson mandela","martin luther king","mlk"],"They led a struggle for rights, not for independence from a colonial power. That fits Rights and protest (PS4)."]]),
P("hi13","WT8","Name a country that won independence in the 20th century.","Guinea-Bissau",[
  ["India",30],["Pakistan",8],["Kenya",8],["Ghana",6,"gold coast"],["Algeria",6],["Vietnam",6],["Indonesia",4],["Nigeria",4],["Ireland",4],["Bangladesh",3],["Israel",3],
  ["Zimbabwe",2],["Guinea-Bissau",.4,"guinea bissau"]]),
P("hi14","WT7","Name an invention or change from the Industrial Revolution.","Flying shuttle",[
  ["Steam engine",30,"steam","steam power"],["Railways",15,"trains","railway","steam train"],["Factories",12,"factory system"],["Urbanization",8,"urbanisation","cities grew"],
  ["Spinning jenny",8],["Telegraph",5],["Electricity",5],["Child labour",4,"child labor"],["Canals",4],["Steel (Bessemer process)",3,"steel","bessemer"],["Flying shuttle",.4]]),
P("hi15","WT7","Name a social effect of industrialization.","Chartism",[
  ["Urbanization",25,"urbanisation","growth of cities"],["Child labour",15,"child labor"],["Poor working conditions",12,"bad working conditions","long hours"],["Trade unions",8,"unions"],
  ["Pollution",8],["Slums and overcrowding",6,"slums","overcrowding"],["Disease (cholera)",6,"cholera","disease"],["New middle class",4,"middle class"],["Factory Acts",3,"factory reform"],
  ["Chartism",.4,"chartists"]]),
P("hi16","WT9","Name a feature of a democratic state.","Proportional representation",[
  ["Free elections",30,"elections","voting"],["Freedom of speech",15,"free speech"],["Multiple political parties",10,"multi party","opposition parties"],["Rule of law",10],
  ["Free press",8,"freedom of the press"],["Independent courts",6,"independent judiciary","courts"],["Constitution",6],["Separation of powers",5,"checks and balances"],
  ["Universal suffrage",4],["Proportional representation",.4,"pr"]]),
P("hi17","WT3","Name a medieval ruler or dynasty (750–1500).","Mansa Musa",[
  ["Charlemagne",15],["Genghis Khan",15,"chinggis khan"],["William the Conqueror",12,"william i"],["Tang dynasty",8,"tang"],["Song dynasty",6,"song"],["Abbasid Caliphate",6,"abbasids","abbasid"],
  ["Richard I",6,"richard the lionheart","richard i"],["Saladin",6],["Ming dynasty",6,"ming"],["Ottomans",4,"ottoman"],["Plantagenets",3],["Mansa Musa",.4]]),
P("hi18","PS3","Name an event in German, Italian or Japanese expansion (1931–1941).","Tripartite Pact",[
  ["Invasion of Manchuria",15,"manchuria","mukden incident"],["Anschluss",12,"austria"],["Invasion of Poland",12,"poland"],["Invasion of Abyssinia",10,"abyssinia","ethiopia"],
  ["Remilitarisation of the Rhineland",10,"rhineland"],["Sudetenland / Munich",10,"sudetenland","munich"],["Pearl Harbor",10,"pearl harbour"],["Marco Polo Bridge",4],
  ["Nanjing Massacre",4,"nanjing","nanking","rape of nanking"],["Invasion of Albania",2,"albania"],["Tripartite Pact",.4,"tripartite"]]),
P("hi19","PS4","Name a person or event from the US civil rights movement (1954–1965).","Fannie Lou Hamer",[
  ["Martin Luther King",30,"mlk","martin luther king jr"],["Rosa Parks",20],["Montgomery Bus Boycott",10,"bus boycott"],["Brown v. Board of Education",8,"brown v board","brown vs board"],
  ["March on Washington",6,"i have a dream"],["Malcolm X",6],["Little Rock Nine",5,"little rock"],["Civil Rights Act 1964",5,"civil rights act"],["Freedom Rides",4,"freedom riders"],
  ["Selma marches",4,"selma"],["Emmett Till",3],["Voting Rights Act 1965",3,"voting rights act"],["Fannie Lou Hamer",.4,"hamer"]]),
P("hi20","PS4","Name a law, person or event of apartheid South Africa (1948–1964).","Prohibition of Mixed Marriages Act",[
  ["Sharpeville massacre",15,"sharpeville"],["Pass laws",15,"pass books","passes"],["Nelson Mandela",12,"mandela"],["Group Areas Act",10],["ANC",10,"african national congress"],
  ["Bantu Education Act",6,"bantu education"],["Rivonia Trial",5,"rivonia"],["Defiance Campaign",4],["Freedom Charter",4],["Population Registration Act",4],
  ["Prohibition of Mixed Marriages Act",.4,"mixed marriages act"]]),
];

/* ---------------- world (sideways timeline) ---------------- */
const BANDS = [
  {name:"Age of dinosaurs",        zone:"Age of dinosaurs",        from:0,  to:40,  hue:25,  years:[-70e6,-66e6],  bg:["#2a1408","#3a1c0a"]},
  {name:"Stone Age",               zone:"Stone Age",               from:40, to:100, hue:35,  years:[-300000,-3500], bg:["#262236","#33304a"]},
  {name:"Ancient civilisations",   zone:"Ancient civilisations",   from:100,to:170, hue:45,  years:[-3500,-500],   bg:["#3a3050","#4a5a80"]},
  {name:"Classical world",         zone:"The classical world",     from:170,to:250, hue:200, years:[-500,750],     bg:["#4a5a80","#3a6aa0"]},
  {name:"Medieval world",          zone:"The medieval world",      from:250,to:320, hue:120, years:[750,1450],     bg:["#3a6aa0","#2a4a70"]},
  {name:"Early modern era",        zone:"The early modern era",    from:320,to:390, hue:210, years:[1450,1750],    bg:["#2a4a70","#4a6a8a"]},
  {name:"Revolutions & industry",  zone:"Revolutions & industry",  from:390,to:460, hue:30,  years:[1750,1900],    bg:["#5a5a5a","#4a4440"]},
  {name:"World wars",              zone:"The world wars",          from:460,to:530, hue:0,   years:[1900,1945],    bg:["#3a3030","#2a2020"]},
  {name:"Cold War",                zone:"The Cold War",            from:530,to:600, hue:210, years:[1945,1991],    bg:["#1a2a40","#10203a"]},
  {name:"New generation",          zone:"The new generation",      from:600,to:760, hue:280, years:[1991,2100],    bg:["#1a1a40","#30106a"]},
];
const FACT_YEARS = [
  [-68e6,"T. rex lived about 68 million years ago"],[-66.3e6,"an asteroid is about to end the age of dinosaurs"],
  [-250000,"early Homo sapiens make stone tools"],[-12000,"farming is about to begin"],
  [-3200,"writing begins in Mesopotamia"],[-2560,"the Great Pyramid of Giza is built"],[-1200,"the Bronze Age collapse"],
  [-27,"Augustus becomes the first Roman emperor"],[395,"the Roman Empire splits in two"],[618,"the Tang dynasty unites China"],
  [800,"Charlemagne is crowned emperor"],[1206,"Genghis Khan founds the Mongol Empire"],[1348,"the Black Death sweeps Europe"],
  [1492,"Columbus reaches the Americas"],[1648,"the Peace of Westphalia"],
  [1789,"the French Revolution"],[1830,"the first inter-city railway opens"],[1871,"Germany is unified"],
  [1914,"the First World War begins"],[1929,"the Wall Street Crash"],[1939,"the Second World War begins"],
  [1947,"the Truman Doctrine"],[1962,"the Cuban Missile Crisis"],[1989,"the Berlin Wall falls"],
  [1991,"the World Wide Web goes public"],[2007,"the smartphone era begins"],[2026,"you are here"],[2060,"the future is unwritten"],
];
const GY = 330;
function scene(i, len){
  const r = srand(733 + i*31); let s = "";
  const ground = ["#3a2a14","#4a3a24","#b08a50","#6a7a4a","#3f6a32","#2a5a8a","#3a3a3a","#4a3a2a","#3a4048","#2a2a4a"][i];
  s += `<rect x="0" y="${GY}" width="${len}" height="${420-GY}" fill="${ground}"/><rect x="0" y="${GY}" width="${len}" height="3" fill="rgb(255 255 255 / .12)"/>`;
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const sil = "rgb(10 8 14 / .78)";
  switch(i){
    case 0: each(340, x=>{ s+=`<path d="M${x} ${GY} l80 -150 h24 l80 150z" fill="#2a1a12"/><path d="M${x+80} ${GY-150} h24 l-6 22 h-12z" fill="#ff6a2a"/><circle cx="${x+92}" cy="${GY-180}" r="26" fill="#5a4a4a" opacity=".5" class="drift"/>`; }, 40);
      each(300, x=>{ s+=`<path d="M${x} ${GY} q4 -50 30 -56 q40 -6 60 0 q14 -60 34 -100 q8 -10 14 0 q-14 40 -20 110 q10 16 6 46 h-14 v-24 h-50 v24 h-14 q-8 -20 -10 -40 q-20 6 -36 40z" fill="${sil}"/>`; }, 200); break;
    case 1: each(280, x=>{ s+=`<path d="M${x} ${GY} q60 -120 140 0z" fill="#2a2018"/><path d="M${x+52} ${GY} q18 -50 36 0z" fill="#0a0806"/><path d="M${x+170} ${GY} l10 -26 l10 26z" fill="#ff8a2a" class="blink"/>`; }, 40);
      each(360, x=>{ s+=`<path d="M${x} ${GY-10} q0 -70 60 -76 q60 -4 70 40 q6 24 -6 36 h-14 v-14 h-60 v14 h-18 q-10 -10 -18 0 q-4 10 -14 0z" fill="${sil}"/><path d="M${x+6} ${GY-40} q-20 20 -6 40" stroke="#eee" stroke-width="4" fill="none"/>`; }, 200); break;
    case 2: each(260, x=>{ const w=180+r()*80; s+=`<path d="M${f1(x)} ${GY} l${f1(w/2)} ${f1(-w*.62)} l${f1(w/2)} ${f1(w*.62)}z" fill="#c8a060"/><path d="M${f1(x+w/2)} ${f1(GY-w*.62)} l${f1(w/2)} ${f1(w*.62)} h-${f1(w*.2)}z" fill="#a8824a"/>`; }, 40); break;
    case 3: each(300, x=>{ s+=`<path d="M${x} ${GY-130} h180 l-90 -40z" fill="#e8e2d0"/><rect x="${x}" y="${GY-132}" width="180" height="10" fill="#d8d2c0"/>`; for (let k=0;k<6;k++) s+=`<rect x="${x+8+k*30}" y="${GY-122}" width="14" height="112" fill="#efe8d8"/>`; s+=`<rect x="${x-6}" y="${GY-12}" width="192" height="12" fill="#d8d2c0"/>`; }, 40); break;
    case 4: each(320, x=>{ s+=`<rect x="${x}" y="${GY-110}" width="160" height="110" fill="#6a6a70"/>`; [0,128].forEach(o=>{ s+=`<rect x="${x+o-6}" y="${GY-170}" width="44" height="170" fill="#7a7a80"/>`; for (let k=0;k<4;k++) s+=`<rect x="${x+o-6+k*12}" y="${GY-182}" width="8" height="12" fill="#7a7a80"/>`; });
      for (let k=0;k<7;k++) s+=`<rect x="${x+40+k*12}" y="${GY-122}" width="8" height="12" fill="#6a6a70"/>`; s+=`<path d="M${x+66} ${GY} v-46 q14 -18 28 0 v46z" fill="#2a1a10"/><path d="M${x+150} ${GY-170} v-40 l26 10 l-26 10" fill="#c83a3a" stroke="#c83a3a"/>`; }, 40); break;
    case 5: each(300, x=>{ s+=`<path d="M${x} ${GY-10} h170 l-20 40 h-130z" fill="#5a3a1a"/><rect x="${x+82}" y="${GY-170}" width="6" height="170" fill="#4a2a10"/><path d="M${x+30} ${GY-150} q50 30 0 110 h100 q-50 -80 0 -110z" fill="#f0e8d0"/><path d="M${x+88} ${GY-175} l30 8 l-30 8z" fill="#c83a3a"/>`; }, 40); break;
    case 6: each(240, x=>{ s+=`<rect x="${x}" y="${GY-90}" width="150" height="90" fill="#5a3a30"/><path d="M${x} ${GY-90} l30 -24 v24 l30 -24 v24 l30 -24 v24 l30 -24 v24z" fill="#5a3a30"/><rect x="${x+120}" y="${GY-190}" width="18" height="100" fill="#4a2a20"/>`;
      for (let k=0;k<3;k++) s+=`<circle class="drift" style="animation-delay:${-k*2}s" cx="${x+129+k*14}" cy="${GY-205-k*22}" r="${14+k*6}" fill="#9a9a9a" opacity=".45"/>`; }, 40); break;
    case 7: s+=`<path d="M0 ${GY+20} h${len}" stroke="#2a1a10" stroke-width="20"/>`; each(60, x=>{ s+=`<path d="M${x} ${GY-14} l10 -10 l10 10 l10 -10 l10 10" stroke="#888" stroke-width="2" fill="none"/>`; }, 20);
      each(320, x=>{ s+=`<rect x="${x}" y="${GY-40}" width="90" height="30" rx="6" fill="#4a5a3a"/><rect x="${x+20}" y="${GY-62}" width="44" height="22" fill="#4a5a3a"/><rect x="${x+64}" y="${GY-56}" width="56" height="6" fill="#4a5a3a"/>`; for (let k=0;k<5;k++) s+=`<circle cx="${x+10+k*18}" cy="${GY-8}" r="8" fill="#2a2a2a"/>`;
        s+=`<path d="M${x+160} ${GY-240} h70 M${x+170} ${GY-230} h50 M${x+195} ${GY-246} v20" stroke="#aaa" stroke-width="5"/>`; }, 80); break;
    case 8: each(300, x=>{ s+=`<rect x="${x}" y="${GY-70}" width="120" height="70" fill="#8a8a8a"/><path d="M${x} ${GY-70} h120" stroke="#666" stroke-width="6"/><path d="M${x+190} ${GY} v-160 l14 -30 l14 30 v160z" fill="#e0e0e0"/><path d="M${x+190} ${GY} l-16 20 h16z M${x+218} ${GY} l16 20 h-16z" fill="#c83a3a"/>`;
      s+=`<path d="M${x+60} ${GY-160} a24 24 0 0 1 48 0z" fill="none" stroke="#ccc" stroke-width="4"/>`; }, 40); break;
    case 9: each(110, x=>{ const w=50+r()*30, hh=150+r()*170; s+=`<rect x="${f1(x)}" y="${f1(GY-hh)}" width="${f1(w)}" height="${f1(hh)}" fill="hsl(260 30% ${18+r()*10}%)"/>`; for (let k=10;k<hh-10;k+=18) for (let c=8;c<w-8;c+=14) if (r()<.5) s+=`<rect x="${f1(x+c)}" y="${f1(GY-hh+k)}" width="7" height="9" fill="#9fe8ff"/>`; }, 30);
      each(420, x=>{ s+=`<rect x="${x}" y="${GY-200}" width="5" height="200" fill="#ddd"/><g class="vspin" style="transform-origin:${x+2.5}px ${GY-200}px;animation:spin 6s linear infinite"><path d="M${x+2.5} ${GY-200} l-4 -60 h8z M${x+2.5} ${GY-200} l52 30 l-4 7z M${x+2.5} ${GY-200} l-52 30 l4 7z" fill="#eee"/></g>`; }, 200); break;
  }
  return hscene(s, len);
}
function avatar(level, hue){
  const c = `hsl(${hue} 90% 70%)`;
  const s = `<circle cx="16" cy="-6" r="${f1(7+level*.3)}" fill="hsl(${hue} 90% 60% / .35)" stroke="${c}" class="blink"/>
    <circle cx="0" cy="-22" r="7" fill="${c}"/><path d="M0 -15 v20 M0 -8 l-11 8 M0 -8 l13 2 M0 5 l-9 17 M0 5 l9 17" stroke="${c}" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M-8 -26 q8 -10 16 0" stroke="#fff" stroke-width="2" fill="none"/>`;
  return avatarSVG(s);
}
function yearAt(p){
  const b = BANDS.find(x => p >= x.from && p < x.to) || BANDS[BANDS.length-1];
  const k = Math.min(1, Math.max(0, (p - b.from) / (b.to - b.from)));
  return b.years[0] + (b.years[1] - b.years[0]) * k;
}
function fmtYear(y){
  if (y <= -1e6) return `${Math.round(-y/1e6)} million BCE`;
  if (y < 0) return `${Math.round(-y).toLocaleString()} BCE`;
  return `${Math.round(y)} CE`;
}
function ptsForYear(y){
  const b = BANDS.find(x => y >= x.years[0] && y < x.years[1]) || BANDS[BANDS.length-1];
  return b.from + (y - b.years[0]) / (b.years[1] - b.years[0]) * (b.to - b.from);
}
const FACTS = [[-30,"set the dial · pull the lever"], ...FACT_YEARS.map(([y,t]) => [Math.round(ptsForYear(y)), `${fmtYear(y)}: ${t}`])];
registerSubject({
  key:"hist", name:"History", theme:"A time traveller crossing the ages", gemWord:"Millennium", gemTitle:"One in a Millennium", emoji:"⏳",
  blurb:"You're a time traveller standing among the dinosaurs. Each prompt has many correct answers. <b>Obvious answers barely move the clock. Answers other players missed carry you across the ages</b>, past pyramids, castles, factories and the Cold War, to the new generation.",
  axis:"right", arrow:"▶", arc:true,
  tiers:{gem:"One in a Millennium", rootkit:"Lost scroll", trojan:"Archive", adware:"Chronicle", spam:"Textbook"}, blocked:"Lost in time", fw:"TIME LOCK",
  verbs:{cta:"Travel ▶", inject:"Go", hint:"▶ rarer answers travel further in time ▶", count:"warming up the time machine"},
  particles:["⧗","✦","·"], particleColor:"#c9a3ff",
  meter:{label:"YEAR", fmt:p=>fmtYear(yearAt(p)), zone:p=>fmtYear(yearAt(p)), tick:p=>fmtYear(yearAt(p)), gain:(a,b)=>`travel to ${fmtYear(yearAt(b))}`},
  start:{bg:"linear-gradient(90deg,#140a04,#2a1408)", label:"Start · 70 million BCE", zone:"The time machine", color:"#ffb36a",
    deco:len=>hscene(`<rect x="0" y="${GY}" width="${len}" height="${420-GY}" fill="#3a2a14"/><rect x="${len-260}" y="${GY-150}" width="90" height="150" rx="10" fill="#2a2a4a" stroke="#c9a3ff" stroke-width="3"/><circle cx="${len-215}" cy="${GY-110}" r="22" fill="none" stroke="#c9a3ff" stroke-width="3" class="blink"/>`, len)},
  endBg:"linear-gradient(90deg,#30106a,#0a0420)",
  bands:BANDS, facts:FACTS, deco:scene, avatar,
  catalog:CATALOG, prompts:PROMPTS,
});
})();
