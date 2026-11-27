/* Dance — a pointe shoe spins across the world's dance floors: from the rehearsal studio onto the ballet stage, through
   the ballroom, the flamenco tablao and a street battle, into Rio's carnival, a temple courtyard, a Bollywood set and a
   K-pop arena, and finally into the cosmic dance among the stars. Rarer answers spin more pirouettes.
   Syllabus: IB Dance (composition and analysis, world dance studies and performance), with the elements of dance,
   choreography, dance history and safe practice. */
(function(){
const CATALOG = [
  {label:"Composition and analysis", units:[
    {code:"E", name:"The language of dance", topics:[["E.1","Elements of dance"],["E.2","Movement vocabulary and technique"]]},
    {code:"C", name:"Choreography and analysis", topics:[["C.1","Choreographic devices and structures"],["C.2","Choreographers and dance works"]]},
  ]},
  {label:"World dance studies", units:[
    {code:"W", name:"World dance", topics:[["W.1","World dance styles"],["W.2","Dance in cultural context"],["D.1","Dance history"]]},
  ]},
  {label:"Performance", units:[
    {code:"P", name:"Performing dance", topics:[["P.1","Technical and expressive skills"],["P.2","Production and accompaniment"],["S.1","Safe dance practice"]]},
  ]},
];

const PROMPTS = [
/* ---------- E.1 Elements of dance ---------- */
P("da001","E.1","Name one of the elements of dance.","Kinesphere",[
  ["Space",16],["Time",14],["Energy",12,"dynamics","effort"],["Body",12],["Action",10,"movement"],["Relationships",10,"relationship"],["Levels",6,"level"],["Direction",5],["Pathways",4,"pathway"],["Rhythm",4],["Tempo",3],["Shape",3],["Kinesphere",.4]]),
P("da002","E.1","Name a basic dance action.","Transference of weight",[
  ["Jump",18,"jumping"],["Turn",16,"turning","spin"],["Travel",12,"travelling","traveling"],["Gesture",10,"gestures"],["Stillness",10,"pause"],["Fall",6,"falling"],["Balance",6],["Roll",5,"rolling"],["Leap",5],["Kick",4],["Slide",3],["Lift",3],
  ["Transference of weight",.4,"weight transfer","transfer of weight"]]),
P("da003","E.1","Name a type of relationship between dancers.","Overlap",[
  ["Unison",18],["Canon",14],["Mirroring",12,"mirror"],["Contact",10,"contact work"],["Lead and follow",8,"leading and following"],["Contrast",6],["Question and answer",6,"call and response"],["Complement",5,"complementary"],["Counterpoint",4],["Meeting and parting",4],["Lifts",4,"support"],["Shadowing",3],["Overlap",.4]]),
/* ---------- E.2 Movement vocabulary and technique ---------- */
P("da004","E.2","Name a ballet term.","Cabriole",[
  ["Plié",16,"plie"],["Pirouette",16],["Arabesque",12],["Jeté",8,"jete","grand jete"],["Relevé",6,"releve"],["Tendu",6,"battement tendu"],["Pas de deux",6],["Chassé",4,"chasse"],["Fouetté",4,"fouette"],["Port de bras",4],["Attitude",3],["Sauté",3,"saute"],["Entrechat",3],["Cabriole",.4]]),
P("da005","E.2","Name a technique or principle of modern or contemporary dance.","Countertechnique",[
  ["Contraction and release",18,"contraction","graham technique"],["Fall and recovery",12,"humphrey technique"],["Release technique",10,"release"],["Contact improvisation",10],["Floorwork",8,"floor work"],["Cunningham technique",6,"cunningham"],["Limón technique",5,"limon technique","limon"],
  ["Horton technique",4,"horton"],["Suspension",4],["Spirals",3,"spiral"],["Gaga",3],["Flying Low",2,"flying low"],["Countertechnique",.4]]),
/* ---------- C.1 Choreographic devices and structures ---------- */
P("da006","C.1","Name a choreographic device.","Chance procedures",[
  ["Motif",16,"motif and development"],["Repetition",14],["Canon",10],["Unison",10],["Retrograde",6,"reverse"],["Accumulation",6],["Fragmentation",5],["Climax",5],["Contrast",5],["Highlights",4],["Embellishment",3],["Inversion",3],["Instrumentation",3],["Chance procedures",.4,"chance"]]),
P("da007","C.1","Name a choreographic structure.","Palindrome",[
  ["Binary",16,"binary form","ab"],["Ternary",16,"ternary form","aba"],["Narrative",14,"story","narrative structure"],["Rondo",10,"rondo form"],["Theme and variation",8,"theme and variations"],["Episodic",6],["Chance",4,"chance structure"],["Collage",4],["Abstract",4],["Cyclic",3,"circular"],["Palindrome",.4,"palindromic"]]),
P("da008","C.1","Name a type of stimulus for choreography.","A tactile stimulus",[
  ["Music",18,"auditory","sound","a song"],["A picture",12,"visual","image","artwork","painting"],["A poem",10,"poetry"],["A story",10,"stories"],["An idea or theme",10,"idea","ideational","theme"],["An emotion",6,"emotion","feelings"],["Nature",6],["An object",5,"prop"],["A historical event",4,"history"],
  ["A photograph",4,"photo"],["A kinaesthetic stimulus",3,"kinaesthetic","kinesthetic","movement"],["A tactile stimulus",.4,"tactile","touch"]]),
P("da009","C.1","Name a way to develop or vary a dance motif.","Change the plane",[
  ["Change the level",16,"levels","level"],["Change the speed",14,"speed","tempo"],["Change the direction",12,"direction"],["Change the size",10,"size","bigger","smaller"],["Change the dynamics",8,"dynamics","energy"],["Retrograde",6,"reverse"],["Add a jump or turn",6,"add a jump","add a turn"],
  ["Use a different body part",5,"instrumentation","body part"],["Repetition",4,"repeat"],["Fragmentation",3],["Embellishment",3],["Change the rhythm",3,"rhythm"],["Change the plane",.4,"plane"]]),
/* ---------- C.2 Choreographers and dance works ---------- */
P("da010","C.2","Name a famous choreographer.","Lin Hwai-min",[
  ["Martha Graham",16,"graham"],["George Balanchine",12,"balanchine"],["Pina Bausch",10,"bausch"],["Merce Cunningham",10,"cunningham"],["Alvin Ailey",8,"ailey"],["Marius Petipa",8,"petipa"],["Matthew Bourne",6,"bourne"],["Bob Fosse",5,"fosse"],
  ["Twyla Tharp",4,"tharp"],["Akram Khan",4,"khan"],["Jerome Robbins",4,"robbins"],["Crystal Pite",3,"pite"],["Hofesh Shechter",3,"shechter"],["Lin Hwai-min",.4,"lin hwai min","cloud gate"]]),
P("da011","C.2","Name a famous ballet or dance work.","Les Noces",[
  ["Swan Lake",20],["The Nutcracker",16,"nutcracker"],["Giselle",8],["The Rite of Spring",8,"rite of spring"],["Sleeping Beauty",8,"the sleeping beauty"],["Romeo and Juliet",6],["Revelations",4],["Café Müller",4,"cafe muller"],["Coppélia",4,"coppelia"],
  ["Don Quixote",3],["Appalachian Spring",3],["Lamentation",3],["Rosas danst Rosas",2],["Les Noces",.4]]),
/* ---------- W.1 World dance styles ---------- */
P("da012","W.1","Name a dance style from anywhere in the world.","Gumboot dance",[
  ["Ballet",16],["Hip-hop",14,"hip hop"],["Salsa",8],["Flamenco",8],["Tango",8],["Contemporary",6,"contemporary dance"],["Tap",6,"tap dance"],["Jazz",5,"jazz dance"],["Bharatanatyam",5],["Kathak",4],["Samba",4],["Irish dance",4,"irish dancing","riverdance"],
  ["Capoeira",3],["Hula",3],["Haka",3],["Butoh",2],["Gumboot dance",.4,"gumboot","gumboot dancing"]]),
P("da013","W.1","Name a hip-hop or street dance style.","Memphis jookin",[
  ["Breaking",22,"breakdance","breakdancing","b boying","bboying"],["Popping",14],["Locking",12],["Krumping",10,"krump"],["Waacking",6,"whacking"],["Voguing",6,"vogue"],["House",5,"house dance"],["Tutting",4],["Animation",3],["Litefeet",3],["Turfing",2],["Memphis jookin",.4,"jookin","gangsta walk"]]),
P("da014","W.1","Name a classical Indian dance form.","Sattriya",[
  ["Bharatanatyam",30,"bharata natyam"],["Kathak",24],["Odissi",12],["Kathakali",10],["Kuchipudi",8],["Manipuri",6],["Mohiniyattam",4,"mohiniattam"],["Sattriya",.4,"sattriya nritya"]]),
/* ---------- W.2 Dance in cultural context ---------- */
P("da015","W.2","Name a purpose of dance in society.","Trance",[
  ["Celebration",16],["Entertainment",14],["Religious worship",12,"religion","worship","ritual"],["Storytelling",10,"telling stories"],["Social bonding",10,"socialising","socializing","community"],["Expressing emotion",8,"expression","emotion"],["Courtship",6,"romance"],
  ["Exercise",6,"fitness","health"],["Ceremony",5,"weddings","funerals"],["Passing on history",4,"education","tradition"],["Protest",4],["War dances",3,"war"],["Healing",2],["Trance",.4,"spirit possession"]]),
P("da016","W.2","Name a dance linked to a festival or celebration.","Bon Odori",[
  ["Samba at Carnival",16,"samba","carnival"],["The lion dance",14,"lion dance","chinese new year"],["The dragon dance",10,"dragon dance"],["Garba",8,"navratri","dandiya"],["Bhangra",8,"vaisakhi"],["Maypole dancing",6,"maypole","may day"],["Morris dancing",5,"morris"],
  ["The hora",5,"hora"],["Dabke",4],["Ceilidh dancing",4,"ceilidh"],["Powwow dances",3,"powwow"],["Bon Odori",.4,"obon"]]),
/* ---------- D.1 Dance history ---------- */
P("da017","D.1","Name a key moment or figure in dance history.","Loie Fuller's serpentine dance",[
  ["The Rite of Spring premiere",12,"rite of spring riot","1913"],["Louis XIV's Royal Academy of Dance",10,"louis xiv","academie royale de danse"],["The Ballets Russes",10,"ballets russes","diaghilev"],["Isadora Duncan",10,"duncan"],["Martha Graham's modern dance",10,"martha graham"],
  ["The birth of hip-hop in the Bronx",10,"hip hop in the bronx","the bronx"],["Michael Jackson's moonwalk",8,"moonwalk","michael jackson"],["Romantic ballet",6,"giselle","la sylphide"],["Judson Dance Theater",4,"postmodern dance","judson"],["Fred Astaire's film musicals",4,"fred astaire","astaire"],
  ["Alvin Ailey's Revelations",3,"revelations"],["TikTok dance trends",3,"tiktok"],["Loie Fuller's serpentine dance",.4,"loie fuller","serpentine dance"]]),
P("da018","D.1","Name a famous dancer.","Uday Shankar",[
  ["Rudolf Nureyev",14,"nureyev"],["Mikhail Baryshnikov",12,"baryshnikov"],["Michael Jackson",10],["Anna Pavlova",8,"pavlova"],["Margot Fonteyn",8,"fonteyn"],["Fred Astaire",8,"astaire"],["Misty Copeland",8,"copeland"],["Gene Kelly",6,"kelly"],
  ["Vaslav Nijinsky",5,"nijinsky"],["Josephine Baker",4,"baker"],["Carlos Acosta",4,"acosta"],["Gregory Hines",3,"hines"],["Sylvie Guillem",3,"guillem"],["Uday Shankar",.4,"shankar"]]),
/* ---------- P.1 Technical and expressive skills ---------- */
P("da019","P.1","Name a technical skill in dance.","Proprioception",[
  ["Balance",16],["Flexibility",14],["Strength",12],["Coordination",10],["Control",10],["Alignment",8,"posture"],["Stamina",6,"endurance"],["Extension",5],["Timing",5],["Spatial awareness",5],["Accuracy",4],["Agility",3],["Mobility",3],["Proprioception",.4]]),
P("da020","P.1","Name an expressive skill in dance.","Breath",[
  ["Facial expression",18,"facial expressions"],["Focus",14,"eye focus","eye line"],["Projection",12],["Musicality",12],["Emphasis",8],["Phrasing",6],["Communicating the choreographic intent",5,"communication of intent","intent"],["Sensitivity to other dancers",5,"sensitivity","awareness of others"],
  ["Dynamics",5,"energy"],["Commitment",3],["Breath",.4,"breathing","use of breath"]]),
/* ---------- P.2 Production and accompaniment ---------- */
P("da021","P.2","Name a production element of a dance performance.","A Marley floor",[
  ["Lighting",18],["Costume",18,"costumes"],["Music",14,"accompaniment","sound"],["Set",8,"set design","scenery"],["Props",8],["Projection",6,"video","film"],["Make-up",5,"makeup"],["Staging",5,"performance space"],["Masks",3],["A Marley floor",.4,"marley","marley floor","dance floor"]]),
P("da022","P.2","Name a type of accompaniment for dance.","Found sound",[
  ["Recorded music",18,"music","recorded"],["Live music",14,"live"],["Silence",12],["Percussion",10,"drums","drumming"],["Body percussion",8,"clapping","stamping"],["Spoken word",6,"voice","poetry"],["Electronic music",5,"electronic"],["Orchestra",5,"orchestral"],["Song",4,"singing"],
  ["Natural sounds",3,"nature sounds"],["Sound collage",3,"soundscape"],["Found sound",.4,"found sounds"]]),
/* ---------- S.1 Safe dance practice ---------- */
P("da023","S.1","Name a part of a safe warm-up or cool-down.","Neuromuscular activation",[
  ["Pulse raiser",18,"raising the heart rate","raise the pulse","cardio"],["Stretching",16,"stretches","dynamic stretching"],["Mobilization",12,"mobilising joints","joint mobilisation","mobilisation"],["Static stretching",8,"static stretches"],["Gradually lowering the heart rate",6,"lowering the heart rate","slow down"],
  ["Breathing",6,"breathing exercises"],["Light jogging",5,"jogging"],["Rehearsing movements",4,"practising movements","marking"],["Hydration",4,"drinking water","water"],["Shoulder and ankle rolls",3,"rolls"],["Neuromuscular activation",.4,"activation"]]),
P("da024","S.1","Name a common dance injury.","Dancer's fracture",[
  ["Sprained ankle",18,"ankle sprain","sprain"],["Muscle strain",14,"pulled muscle","strain"],["Shin splints",10],["Stress fracture",8],["Tendinitis",8,"tendonitis","achilles tendinitis"],["Knee injury",8,"knee"],["Lower back pain",6,"back pain","back injury"],["Hip injury",4,"hip"],
  ["Blisters",4],["Bunions",3],["Plantar fasciitis",2],["Dancer's fracture",.4,"dancer s fracture","fifth metatarsal fracture"]]),
];

/* ================= the world's dance floors (sideways) ================= */
const BANDS = [
  {name:"The rehearsal studio",  zone:"The rehearsal studio",  from:0,  to:40,  hue:200, bg:["#141822","#1a1e2a"]},
  {name:"The ballet stage",      zone:"The ballet stage",      from:40, to:100, hue:340, bg:["#1a1e2a","#2a1020"]},
  {name:"The ballroom",          zone:"The ballroom",          from:100,to:170, hue:45,  bg:["#2a1020","#2a2014"]},
  {name:"The flamenco tablao",   zone:"The flamenco tablao",   from:170,to:250, hue:0,   bg:["#2a2014","#2a0e0e"]},
  {name:"The street battle",     zone:"The street battle",     from:250,to:320, hue:280, bg:["#1a1a22","#22182a"]},
  {name:"The carnival",          zone:"The carnival in Rio",   from:320,to:390, hue:50,  bg:["#22182a","#0e2a20"]},
  {name:"The temple courtyard",  zone:"The temple courtyard",  from:390,to:460, hue:30,  bg:["#0e2a20","#2a1a0e"]},
  {name:"The Bollywood set",     zone:"The Bollywood set",     from:460,to:530, hue:320, bg:["#2a1a0e","#2a0e22"]},
  {name:"The K-pop arena",       zone:"The K-pop arena",       from:530,to:600, hue:280, bg:["#100a20","#140a28"]},
  {name:"The cosmic dance",      zone:"The cosmic dance",      from:600,to:760, hue:260, bg:["#0a0618","#04020c"]},
];
// pirouettes at each band boundary: up to Odile's 32 fouettés in Swan Lake
const KNOTS = [[0,1],[40,1.5],[100,2],[170,3],[250,4],[320,6],[390,8],[460,12],[530,16],[600,24],[760,32]];
function spins(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(32, Math.max(1, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0)))))); } }
}
function fmtS(p){ const n = spins(p); return `${n} pirouette${n === 1 ? "" : "s"}`; }
const FACTS = [
  [-30,"5, 6, 7, 8!"],[12,"ballet terms are French because Louis XIV founded the Royal Academy of Dance (1661)"],[30,"dancers warm up at the barre"],
  [60,"Pierre Beauchamp set down ballet's five positions of the feet"],[85,"Swan Lake premiered in Moscow in 1877"],[115,"the waltz once shocked people because couples held each other close"],[150,"ballroom dances are judged on posture, timing and footwork"],
  [190,"flamenco comes from Andalusia, in southern Spain"],[225,"duende: the mysterious, intense spirit of flamenco"],[265,"breaking was born in the Bronx in the 1970s"],[300,"breaking was an Olympic sport at Paris 2024"],
  [340,"Rio's samba schools spend all year preparing for Carnival"],[372,"capoeira mixes dance and martial arts, from Afro-Brazilian roots"],[410,"Bharatanatyam tells stories through mudras: hand gestures"],[445,"Kathak dancers wear ankle bells called ghungroo"],
  [480,"Bollywood films often stop for huge song-and-dance numbers"],[515,"Indian classical dance traces its roots to the Natya Shastra"],[550,"K-pop idols often train for years before they debut"],[585,"Michael Jackson first moonwalked on TV in 1983"],
  [625,"Shiva Nataraja's cosmic dance creates and destroys the universe"],[670,"dance like nobody's watching"],[720,"Odile spins 32 fouettés in Act III of Swan Lake"],
];
const GR = 340;
function scene(i, len){
  const r = srand(9871 + i*59); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#8a6a4a","#5a3a2a","#a8783a","#6a3a1a","#3a3a3a","#c8a060","#a87a4a","#c86a2a","#1a1430","#14102a"][i];
  s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/>`;
  const dancer = (x, y, c, pose) => `<g transform="translate(${x} ${y})"><circle cy="-62" r="9" fill="#e8c8a8"/><path d="M0 -52 v30" stroke="${c}" stroke-width="7" stroke-linecap="round"/>${pose}</g>`;
  switch(i){
    case 0: // the rehearsal studio: mirrors and a barre
      each(160, x=>{ s+=`<rect x="${x}" y="40" width="140" height="${GR-60}" fill="#9fb8d8" opacity=".25" stroke="#c8d8e8" stroke-width="3"/><path d="M${x+20} 60 l40 60 M${x+70} 50 l30 50" stroke="#fff" stroke-width="2" opacity=".3"/>`; }, 20);
      s += `<path d="M0 ${GR-110} H${len}" stroke="#c8a070" stroke-width="7"/>`; each(160, x=>{ s+=`<path d="M${x} ${GR-110} v-14 M${x} ${GR-110} v20" stroke="#8a8a9a" stroke-width="3"/>`; }, 40);
      break;
    case 1: // the ballet stage: red curtains, footlights and a tutu
      each(260, x=>{ s+=`<path d="M${x} 0 q20 ${GR*.5} 0 ${GR} h70 q-14 -${GR*.5} 0 -${GR}z" fill="#8a0a1e"/><path d="M${x+190} 0 q-20 ${GR*.5} 0 ${GR} h-70 q14 -${GR*.5} 0 -${GR}z" fill="#8a0a1e"/>`
        + dancer(x+130, GR, "#f4d8e8", `<ellipse cy="-24" rx="24" ry="5" fill="#fff" stroke="#f4b8d8"/><path d="M-2 -22 l-6 22 M2 -22 l26 -18" stroke="#f4d8e8" stroke-width="4" stroke-linecap="round"/><path d="M0 -48 l-20 -16 M0 -48 l18 -20" stroke="#f4d8e8" stroke-width="3" stroke-linecap="round"/>`); }, 20);
      each(30, x=>{ s+=`<circle cx="${x}" cy="${GR+6}" r="4" fill="#ffd25a"/>`; }, 10);
      break;
    case 2: // the ballroom: chandeliers, parquet and waltzing couples
      each(260, x=>{ s+=`<path d="M${x+60} 0 v30" stroke="#d4af37" stroke-width="2"/><path d="M${x+30} 40 q30 26 60 0" stroke="#d4af37" stroke-width="3" fill="none"/>` + [0,1,2,3,4].map(k=>`<circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${x+30+k*15}" cy="${46+(k%4 ? 8 : 0)}" r="4" fill="#fff8d0"/>`).join("")
        + `<g class="swt" style="animation-duration:3s;transform-origin:${x+160}px ${GR}px">` + dancer(x+150, GR, "#1a1a2a", `<path d="M-2 -22 l-8 22 M2 -22 l6 22" stroke="#1a1a2a" stroke-width="4"/>`) + dancer(x+172, GR, "#c8102e", `<path d="M0 -24 l-18 24 h36z" fill="#c8102e"/>`) + `</g>`; }, 20);
      for (let x = 0; x < len; x += 30) s+=`<path d="M${x} ${GR} l15 ${420-GR} M${x+15} ${GR} l-15 ${420-GR}" stroke="#7a5a2a" stroke-width="1" opacity=".5"/>`;
      break;
    case 3: // the flamenco tablao: polka dots, a guitarist and a flouncing dress
      each(40, x=>{ s+=`<circle cx="${x}" cy="${f1(40 + r()*200)}" r="8" fill="#c8102e" opacity=".35"/>`; }, 10);
      each(280, x=>{ s+=`<rect x="${x}" y="${GR-56}" width="30" height="6" fill="#4a2a10"/><path d="M${x+4} ${GR-50} v50 M${x+26} ${GR-50} v50" stroke="#4a2a10" stroke-width="4"/><circle cx="${x+15}" cy="${GR-100}" r="9" fill="#e8c8a8"/><path d="M${x+15} ${GR-90} v34" stroke="#1a1a1a" stroke-width="8"/><ellipse cx="${x+30}" cy="${GR-70}" rx="16" ry="10" fill="#c8904a"/><path d="M${x+40} ${GR-74} l30 -18" stroke="#6a4a2a" stroke-width="3"/>`
        + dancer(x+150, GR, "#c8102e", `<path d="M0 -26 q-30 14 -24 26 q24 6 48 0 q6 -12 -24 -26z" fill="#c8102e"/><path d="M-6 -24 q-26 16 -16 24" stroke="#fff" stroke-width="2" fill="none"/><path d="M0 -48 l-14 -22 M0 -48 l14 -22" stroke="#e8c8a8" stroke-width="3" stroke-linecap="round"/><circle cy="-74" r="5" fill="#c8102e"/>`); }, 30);
      break;
    case 4: // the street battle: graffiti, a boombox and a cardboard floor
      each(200, x=>{ s+=`<rect x="${x}" y="60" width="180" height="${GR-60}" fill="#2a2a34"/><text x="${x+90}" y="${f1(140 + r()*60)}" text-anchor="middle" font-size="34" font-weight="700" fill="hsl(${Math.floor(r()*360)} 80% 60%)" font-family="Chakra Petch,sans-serif" transform="rotate(-6 ${x+90} 160)">${["BREAK","POP","LOCK","KRUMP","FLOW"][Math.floor(r()*5)]}</text>`; }, 10);
      each(320, x=>{ s+=`<rect x="${x}" y="${GR-40}" width="64" height="40" rx="5" fill="#1a1a1a"/><circle cx="${x+16}" cy="${GR-20}" r="11" fill="#3a3a3a" stroke="#8a8a8a" stroke-width="2"/><circle cx="${x+48}" cy="${GR-20}" r="11" fill="#3a3a3a" stroke="#8a8a8a" stroke-width="2"/>`
        + `<rect x="${x+90}" y="${GR}" width="120" height="16" fill="#c8a060"/>` + `<g transform="translate(${x+150} ${GR-76}) rotate(180)">` + dancer(0, 0, "#3a8ae8", `<path d="M0 -22 l-14 -20 M0 -22 l14 -20" stroke="#3a8ae8" stroke-width="4"/>`) + `</g>`; }, 60);
      break;
    case 5: // the carnival: feathered headdresses, a float and confetti
      each(30, x=>{ s+=`<rect x="${x}" y="${f1(20 + r()*260)}" width="5" height="9" fill="hsl(${Math.floor(r()*360)} 85% 60%)" transform="rotate(${f1(r()*90)} ${x} 100)"/>`; }, 5);
      each(220, x=>{ s+= [0,1,2,3,4,5,6].map(k=>`<path d="M${x+60} ${GR-110} q${-60+k*20} -70 ${-48+k*16} -110" stroke="hsl(${40+k*40} 90% 60%)" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")
        + dancer(x+60, GR, "#ffd25a", `<path d="M-2 -22 l-10 22 M2 -22 l14 18" stroke="#e8c8a8" stroke-width="4"/><path d="M0 -48 l-20 -10 M0 -48 l20 -14" stroke="#e8c8a8" stroke-width="3"/>`); }, 30);
      break;
    case 6: // the temple courtyard: carved columns, oil lamps and ankle bells
      each(180, x=>{ s+=`<rect x="${x}" y="40" width="30" height="${GR-40}" fill="#a8784a"/>` + [0,1,2,3,4].map(k=>`<rect x="${x-4}" y="${60+k*56}" width="38" height="10" fill="#8a5a2a"/>`).join("")
        + `<path d="M${x+90} ${GR-12} q10 -14 20 0z" fill="#d4af37"/><path class="blink" d="M${x+100} ${GR-14} q-4 -8 0 -16 q4 8 0 16z" fill="#ffb03a"/><circle cx="${x+100}" cy="${GR-20}" r="18" fill="#ffb03a" opacity=".12"/>`; }, 20);
      each(360, x=>{ s+= dancer(x, GR, "#c8102e", `<path d="M-2 -24 q-14 6 -18 24 M2 -24 q14 6 18 24" stroke="#c8102e" stroke-width="5" fill="none"/><path d="M0 -48 l-18 -4 l-4 -8 M0 -48 l18 -4 l4 -8" stroke="#c89a7a" stroke-width="3"/>` + [-18,-14,14,18].map(dx=>`<circle cx="${dx}" cy="-2" r="2" fill="#d4af37"/>`).join("")); }, 140);
      break;
    case 7: // the Bollywood set: marigold garlands and a line of dancers
      each(30, x=>{ s+=`<circle cx="${x}" cy="${f1(30 + 18*Math.sin(x/40))}" r="7" fill="#ff9a1a"/>`; }, 5);
      each(60, x=>{ const c = ["#ff3a8a","#ffd25a","#3ac0ff","#3ee089"][Math.floor(x/60)%4]; s+= dancer(x, GR, c, `<path d="M0 -24 l-14 24 h28z" fill="${c}"/><path d="M0 -48 l-16 -14 M0 -48 l16 -14" stroke="#c89a7a" stroke-width="3"/>`); }, 30);
      break;
    case 8: // the K-pop arena: stage lights, screens and a sea of lightsticks
      each(240, x=>{ s+=`<rect x="${x}" y="40" width="200" height="110" rx="6" fill="#0a0a1a" stroke="#c86aff" stroke-width="3"/>` + dancer(x+100, 140, "#c86aff", `<path d="M-2 -22 l-10 22 M2 -22 l10 22" stroke="#c86aff" stroke-width="4"/><path d="M0 -48 l-18 -16 M0 -48 l18 6" stroke="#c86aff" stroke-width="3"/>`)
        + `<path d="M${x+40} 160 L${x} ${GR} M${x+160} 160 L${x+200} ${GR}" stroke="#fff8d0" stroke-width="16" opacity=".08"/>`; }, 20);
      each(16, x=>{ s+=`<path d="M${x} ${GR+40} v-18" stroke="#2a2a3a" stroke-width="3"/><circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${x}" cy="${GR+20}" r="4" fill="hsl(${280 + Math.floor(r()*80)} 90% 65%)"/>`; }, 4);
      break;
    case 9: // the cosmic dance: stars, a ringed planet and Nataraja's ring of fire
      for (let k = 0; k < len/10; k++) s+=`<circle cx="${f1(r()*len)}" cy="${f1(r()*GR)}" r="${f1(.5 + r()*1.4)}" fill="#fff" opacity="${f1(.3 + r()*.6)}"/>`;
      each(360, x=>{ s+=`<circle cx="${x}" cy="160" r="70" fill="none" stroke="#ff8a1a" stroke-width="4" opacity=".7"/>` + Array.from({length: 16}, (_, k)=>{ const a = k/16*6.283; return `<path class="blink" style="animation-delay:-${f1(r()*2)}s" d="M${f1(x + Math.cos(a)*70)} ${f1(160 + Math.sin(a)*70)} l${f1(Math.cos(a)*10)} ${f1(Math.sin(a)*10)}" stroke="#ffd25a" stroke-width="3"/>`; }).join("")
        + `<g transform="translate(${x} 250)">` + dancer(0, 0, "#3a8ae8", `<path d="M-2 -22 l-12 22 M2 -22 l18 -10" stroke="#3a8ae8" stroke-width="4"/><path d="M0 -48 l-20 -6 M0 -48 l18 -16 M0 -48 l-14 14 M0 -48 l16 10" stroke="#3a8ae8" stroke-width="3"/>`) + `</g>`; }, 120);
      each(500, x=>{ s+=`<circle cx="${x}" cy="70" r="20" fill="#c8a8ff"/><ellipse cx="${x}" cy="70" rx="36" ry="8" fill="none" stroke="#e8d8ff" stroke-width="2"/>`; }, 300);
      break;
  }
  return hscene(s, len);
}
/* the pointe shoe: it earns a tutu, a flower, flowing ribbons and a tiara, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, satin = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 70% 80%)` : "#f8c8d8", line = gold ? "#8a6a1a" : "#c8889a";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    ${level >= 2 ? `<ellipse cy="10" rx="30" ry="7" fill="#fff" opacity=".85" stroke="#f4b8d8" stroke-width="1.5"/><ellipse cy="8" rx="26" ry="5" fill="#ffe8f4" opacity=".9"/>` : ""}
    <path d="M-14 -20 q-4 26 6 40 q8 8 16 0 q10 -14 6 -40 q-14 -8 -28 0z" fill="${satin}" stroke="${line}" stroke-width="1.8"/>
    <path d="M-12 -18 q12 -6 24 0 q-12 8 -24 0z" fill="#fff" opacity=".6"/>
    <circle cx="-5" cy="-4" r="3.4" fill="#fff"/><circle cx="5" cy="-4" r="3.4" fill="#fff"/>
    <g class="av-blink"><circle cx="-4.6" cy="-3.6" r="1.8" fill="#2a0a1a"/><circle cx="5.4" cy="-3.6" r="1.8" fill="#2a0a1a"/></g>
    <path d="M-4 5 q4 4 8 0" stroke="#8a2a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path class="swt" style="animation-duration:2s" d="M-12 -14 q-16 6 -14 24 M12 -14 q16 6 14 24" stroke="${level >= 4 ? "#ff7ab8" : satin}" stroke-width="${level >= 4 ? 3 : 2}" fill="none" stroke-linecap="round"/>
    ${level >= 3 ? `<g transform="translate(14 -22)"><circle r="5" fill="#ff5a8a"/><circle r="2" fill="#ffd25a"/></g>` : ""}
    ${level >= 6 ? `<path d="M-12 -24 l3 -8 l4 5 l5 -9 l5 9 l4 -5 l3 8z" fill="#e8e8f4" stroke="#9a9ab8" stroke-width="1"/>` : ""}
    ${level >= 1 ? `<text class="blink" x="20" y="-28" font-size="11" fill="#ff9ad5">✦</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<g class="vspin" style="animation-duration:4s;transform-origin:100px 55px">` + [0,1,2,3,4,5].map(k=>`<path d="M100 55 q${f1(Math.cos(k*1.047)*40)} ${f1(Math.sin(k*1.047)*40 - 20)} ${f1(Math.cos(k*1.047)*44)} ${f1(Math.sin(k*1.047)*44)}" stroke="${c}" stroke-width="3" fill="none"/>`).join("") + `</g><circle cx="100" cy="55" r="10" fill="#ffd25a"/>`
    + [[30,26],[170,30],[36,94],[166,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M30 80 q55 -90 110 0" stroke="${c}" stroke-width="3" fill="none" stroke-dasharray="6 4"/><circle cx="85" cy="36" r="8" fill="${c}"/><path d="M85 44 l-24 -6 M85 44 l24 -6 M85 44 v16 l-20 10 M85 60 l20 10" stroke="${c}" stroke-width="3"/>`);
  if (t === "trojan") return W(170,100,`<circle cx="85" cy="24" r="8" fill="${c}"/><path d="M85 32 v26 M85 58 l-12 26 M85 58 l18 -8 M85 40 l-20 -12 M85 40 l20 -12" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`);
  if (t === "adware") return W(170,100,[0,1,2].map(k=>`<circle cx="${55+k*30}" cy="28" r="7" fill="${c}"/><path d="M${55+k*30} 35 v24 M${55+k*30} 59 l-8 20 M${55+k*30} 59 l8 20 M${55+k*30} 42 l-12 -10 M${55+k*30} 42 l12 -10" stroke="${c}" stroke-width="2.4"/>`).join(""));
  if (t === "spam") return W(170,90,`<path d="M60 60 q10 -20 20 0 q10 20 20 0 q10 -20 20 0" stroke="${c}" stroke-width="3" fill="none" stroke-dasharray="4 4"/>`);
  if (t === "blocked") return W(170,100,`<rect x="30" y="26" width="110" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="20" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">TRIPPED!</text>`);
  return null;
}
registerSubject({
  key:"dance", name:"Dance", theme:"A pointe shoe spinning across the world's dance floors", gemWord:"Pirouette", gemTitle:"One in a Pirouette", emoji:"🩰",
  blurb:"You're a <b>pointe shoe</b> at the barre in a rehearsal studio. Each prompt has many correct answers. <b>Obvious answers barely leave the studio. Answers other dancers missed spin you further</b>, onto the ballet stage, through the ballroom, the flamenco tablao and a street battle, into Rio's carnival, a temple courtyard, a Bollywood set and a K-pop arena, and on into the cosmic dance among the stars.",
  noLevel:"SL and HL",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Pirouette", rootkit:"Grand jeté", trojan:"Solo", adware:"Corps de ballet", spam:"Shuffle"}, blocked:"Two left feet", fw:"TRIPPED!",
  notes:{rootkit:"A grand jeté: very few dancers leapt this far.", trojan:"A solo: not the usual answer.", adware:"The corps de ballet: correct and common.", spam:"A shuffle: what everyone does first."},
  ladder:{gem:"One in a Pirouette: almost no one thinks of it", rootkit:"Grand jeté: a rare answer", trojan:"Solo: a strong, less common answer", adware:"Corps de ballet: correct and common", spam:"Shuffle: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Dance ▶", inject:"Dance", hint:"▶ rarer answers spin more pirouettes ▶", count:"counting the beats"},
  shout:t => ({gem:"PERFECT PIROUETTE!", rootkit:"GRAND JETÉ!", blocked:"TWO LEFT FEET!"})[t],
  particles:["✦","❀","♪","◆"], particleColor:"#ff9ad5",
  meter:{label:"PIROUETTES", fmt:fmtS, zone:fmtS, tick:fmtS, gain:(a,b)=>`spin ${fmtS(b)}`},
  start:{bg:"linear-gradient(90deg,#10141c,#141822)", label:"Start · first position", zone:"At the barre", color:"#ff9ad5"},
  endBg:"linear-gradient(90deg,#04020c,#020108)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"The last bow",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
