/* World Religions — a small lamp goes on pilgrimage: from the crossroads where many paths begin, past the ghats of
   Varanasi, the Western Wall, the Bodhi tree, the Jain temples of Palitana, a Taoist mountain, a cathedral, a mosque,
   the Golden Temple and the Bahá'í gardens on Mount Carmel, roughly in the order the religions began. Rarer answers
   light more lamps. Only buildings and landscapes are drawn, never holy figures.
   Syllabus: IB World religions (SL): introductions to the nine religions, key concepts in studying religion and the
   investigative study. */
(function(){
const CATALOG = [
  {label:"Religions of South Asia", units:[
    {code:"R", name:"South Asian religions", topics:[["R.1","Hinduism"],["R.2","Buddhism"],["R.3","Sikhism"],["R.4","Jainism"]]},
  ]},
  {label:"Abrahamic religions", units:[
    {code:"A", name:"Abrahamic religions", topics:[["R.5","Judaism"],["R.6","Christianity"],["R.7","Islam"]]},
  ]},
  {label:"Taoism and the Bahá'í Faith", units:[
    {code:"T", name:"Taoism and the Bahá'í Faith", topics:[["R.8","Taoism"],["R.9","The Bahá'í Faith"]]},
  ]},
  {label:"Studying religion", units:[
    {code:"S", name:"Studying religion", topics:[["S.1","Key concepts and the investigative study"]]},
  ]},
];

const PROMPTS = [
/* ---------- R.1 Hinduism ---------- */
P("re001","R.1","Name a Hindu deity.","Ardhanarishvara",[
  ["Shiva",18,"siva"],["Vishnu",16],["Ganesha",14,"ganesh","ganapati"],["Krishna",12],["Brahma",10],["Lakshmi",8,"laxmi"],["Rama",8,"ram"],["Durga",6],["Hanuman",6],["Kali",5],["Saraswati",4],["Parvati",4],["Murugan",2,"kartikeya","skanda"],
  ["Ardhanarishvara",.4,"ardhanari"]]),
P("re002","R.1","Name a key Hindu concept or sacred text.","Lila",[
  ["Karma",16],["Dharma",14],["Reincarnation",10,"samsara","rebirth"],["Moksha",10,"liberation"],["The Bhagavad Gita",10,"bhagavad gita","gita"],["The Vedas",8,"vedas","rig veda"],["Atman",6,"soul"],["Brahman",6],["Ahimsa",5,"non violence"],
  ["The Ramayana",5,"ramayana"],["The Mahabharata",5,"mahabharata"],["The Upanishads",4,"upanishads"],["Puja",4,"worship"],["Lila",.4,"leela","divine play"]]),
P("re003","R.1","Name a Hindu festival.","Thaipusam",[
  ["Diwali",28,"deepavali"],["Holi",22],["Navratri",10],["Raksha Bandhan",6,"rakhi"],["Janmashtami",6,"krishna janmashtami"],["Ganesh Chaturthi",6],["Dussehra",5,"vijayadashami"],["Maha Shivaratri",4,"shivaratri"],["Durga Puja",4],["Kumbh Mela",4],
  ["Pongal",3],["Onam",3],["Makar Sankranti",2,"sankranti"],["Thaipusam",.4]]),
/* ---------- R.2 Buddhism ---------- */
P("re004","R.2","Name a key Buddhist teaching.","Dependent origination",[
  ["The Four Noble Truths",20,"four noble truths"],["The Eightfold Path",16,"noble eightfold path","eightfold path"],["Nirvana",12,"nibbana","enlightenment"],["Karma",8],["The Middle Way",8,"middle way"],["Dukkha",6,"suffering"],["Anicca",5,"impermanence"],
  ["Anatta",5,"no self","not self"],["The Three Jewels",5,"three jewels","triple gem"],["The Five Precepts",5,"five precepts"],["Rebirth",4],["Karuna",3,"compassion"],["Dependent origination",.4,"pratityasamutpada","dependent arising"]]),
P("re005","R.2","Name a Buddhist tradition, school or practice.","Shingon",[
  ["Meditation",18,"samatha"],["Theravada",14],["Mahayana",12],["Zen",10,"chan"],["Tibetan Buddhism",8,"vajrayana","tibetan"],["Mindfulness",8],["Chanting",6,"mantras"],["Pure Land",5,"pure land buddhism"],["Monastic life",4,"monks","the sangha","sangha"],
  ["Pilgrimage",3],["Mandalas",3,"sand mandala","mandala"],["Nichiren",2],["Shingon",.4]]),
/* ---------- R.3 Sikhism ---------- */
P("re006","R.3","Name a key Sikh belief, practice or symbol.","Miri and Piri",[
  ["The Five Ks",16,"five ks","5 ks"],["Langar",14,"free kitchen","community kitchen"],["The Guru Granth Sahib",12,"guru granth sahib","adi granth"],["The gurdwara",10,"gurdwara"],["Seva",8,"selfless service"],["The Khalsa",8,"khalsa"],
  ["The turban",6,"dastar","turban"],["Ik Onkar",5,"one god","ik onkar"],["Equality",5,"equality of all"],["Kara",4,"steel bracelet"],["Simran",3,"remembering god"],["Vaisakhi",3,"baisakhi"],["Miri and Piri",.4,"miri piri"]]),
P("re007","R.3","Name one of the Sikh Gurus.","Guru Har Krishan",[
  ["Guru Nanak",34,"nanak","guru nanak dev"],["Guru Gobind Singh",22,"gobind singh"],["Guru Arjan",8,"arjan","guru arjan dev"],["Guru Tegh Bahadur",6,"tegh bahadur"],["The Guru Granth Sahib",6,"guru granth sahib"],["Guru Angad",4,"angad"],
  ["Guru Amar Das",4,"amar das"],["Guru Ram Das",4,"ram das"],["Guru Hargobind",3,"hargobind","har gobind"],["Guru Har Rai",2,"har rai"],["Guru Har Krishan",.4,"har krishan","harkrishan"]]),
/* ---------- R.4 Jainism ---------- */
P("re008","R.4","Name a key Jain belief or practice.","Syadvada",[
  ["Ahimsa",24,"non violence","nonviolence"],["Karma",10],["Vegetarianism",10,"vegetarian"],["Aparigraha",8,"non attachment","non possession"],["The Three Jewels",8,"three jewels","right faith right knowledge right conduct"],["Anekantavada",6,"many sidedness"],
  ["Moksha",5,"liberation"],["Fasting",5],["Monasticism",4,"monks and nuns"],["Satya",3,"truthfulness"],["Syadvada",.4]]),
P("re009","R.4","Name a Jain tirthankara, sect or festival.","Neminatha",[
  ["Mahavira",26,"lord mahavira","vardhamana"],["Digambara",12],["Svetambara",12,"shvetambara"],["Paryushana",10],["Parshvanatha",8,"parshva","parshvanath"],["Rishabhanatha",6,"adinatha","rishabha"],["Mahavir Jayanti",6],["Das Lakshana",3,"daslakshan"],
  ["Neminatha",.4,"nemi","neminath"]]),
/* ---------- R.5 Judaism ---------- */
P("re010","R.5","Name a Jewish festival or holy day.","Shemini Atzeret",[
  ["Passover",18,"pesach"],["Yom Kippur",14],["Hanukkah",14,"chanukah"],["Shabbat",12,"sabbath","shabbos"],["Rosh Hashanah",12],["Sukkot",8],["Purim",6],["Shavuot",5],["Simchat Torah",3],["Tisha B'Av",2,"tisha b av"],["Tu BiShvat",2,"tu bishvat"],
  ["Shemini Atzeret",.4]]),
P("re011","R.5","Name a key Jewish belief, text or practice.","Midrash",[
  ["The Torah",20,"torah"],["The Ten Commandments",10,"ten commandments"],["The synagogue",8,"synagogue"],["Kosher food laws",8,"kosher","kashrut"],["The Talmud",8,"talmud"],["The Tanakh",6,"tanakh","hebrew bible"],["The Shema",6,"shema"],
  ["The covenant",6,"covenant"],["Bar and Bat Mitzvah",6,"bar mitzvah","bat mitzvah"],["Monotheism",5,"one god"],["Mitzvot",4,"commandments","mitzvah"],["Tikkun olam",3,"repairing the world"],["Tzedakah",3,"charity"],["Midrash",.4]]),
/* ---------- R.6 Christianity ---------- */
P("re012","R.6","Name a Christian denomination or tradition.","The Church of the East",[
  ["Roman Catholic",22,"catholic","catholicism"],["Protestant",14,"protestantism"],["Eastern Orthodox",10,"orthodox","greek orthodox","russian orthodox"],["Anglican",8,"church of england","episcopal"],["Baptist",6],["Methodist",6],["Lutheran",6],["Pentecostal",5],
  ["Presbyterian",4],["Evangelical",4],["Quaker",3,"society of friends","quakers"],["Coptic Orthodox",3,"coptic","oriental orthodox"],["Mennonite",2],["The Church of the East",.4,"church of the east","assyrian church of the east"]]),
P("re013","R.6","Name a Christian sacrament, festival or practice.","Candlemas",[
  ["Easter",16],["Christmas",16],["Baptism",12],["Holy Communion",10,"eucharist","communion","mass","lord s supper"],["Prayer",8],["Lent",6],["Confirmation",5],["Pentecost",4],["Advent",4],["Good Friday",4],["Confession",3,"reconciliation"],["Pilgrimage",3],["Marriage",2,"matrimony"],
  ["Candlemas",.4,"presentation of the lord"]]),
/* ---------- R.7 Islam ---------- */
P("re014","R.7","Name a key Islamic belief, practice or text.","Ihsan",[
  ["The Qur'an",18,"quran","koran","the quran","qur an"],["The Five Pillars",14,"five pillars"],["Salah",10,"prayer","salat","namaz"],["Sawm",8,"fasting","fasting in ramadan"],["Hajj",8,"pilgrimage to mecca"],["Zakat",8,"almsgiving","charity"],["Shahada",8,"declaration of faith"],
  ["Tawhid",5,"oneness of god","oneness of allah"],["Hadith",4],["The mosque",4,"mosque","masjid"],["Sunnah",3],["Halal",3],["Ummah",2,"community"],["Ihsan",.4]]),
P("re015","R.7","Name an Islamic festival, branch or holy city.","Isra and Mi'raj",[
  ["Ramadan",18],["Eid al-Fitr",14,"eid al fitr","eid"],["Eid al-Adha",10,"eid al adha","bakri eid"],["Mecca",12,"makkah"],["Sunni",8,"sunni islam"],["Shia",8,"shia islam","shiite"],["Medina",6,"madinah"],["Sufism",5,"sufi"],["Jerusalem",4,"al aqsa"],
  ["Laylat al-Qadr",3,"laylat al qadr","night of power"],["Ashura",3],["Mawlid",2,"mawlid al nabi"],["Isra and Mi'raj",.4,"isra and miraj","night journey","isra and mi raj"]]),
/* ---------- R.8 Taoism ---------- */
P("re016","R.8","Name a key Taoist concept, text or practice.","Pu",[
  ["The Tao",18,"tao","dao","the way"],["Yin and yang",16,"yin yang","yin","yang"],["Wu wei",12,"effortless action","non action"],["The Tao Te Ching",12,"tao te ching","daodejing"],["Qi",8,"chi"],["Tai chi",6,"taiji","tai chi chuan"],["Harmony with nature",6,"nature","harmony"],
  ["Qigong",4],["Feng shui",3],["De",3,"virtue","te"],["The Zhuangzi",3,"zhuangzi"],["Immortality",2,"immortals"],["Pu",.4,"the uncarved block","uncarved block"]]),
P("re017","R.8","Name a Taoist figure, deity or symbol.","Zhang Daoling",[
  ["Laozi",28,"lao tzu","lao tse"],["The yin-yang symbol",16,"taijitu","yin yang symbol"],["Zhuangzi",12,"chuang tzu"],["The Eight Immortals",10,"eight immortals"],["The Jade Emperor",8,"jade emperor"],["The Three Pure Ones",4,"three pure ones","sanqing"],["Mazu",4],
  ["The Queen Mother of the West",3,"xiwangmu"],["Guan Yu",2],["Zhang Daoling",.4,"zhang ling","celestial masters"]]),
/* ---------- R.9 The Bahá'í Faith ---------- */
P("re018","R.9","Name a key Bahá'í belief or figure.","Progressive revelation",[
  ["Bahá'u'lláh",22,"baha u llah","bahaullah","baha ullah"],["The unity of humanity",14,"unity of humanity","oneness of humanity"],["The Báb",10,"the bab","bab"],["The oneness of God",8,"oneness of god","one god"],["The unity of religion",8,"unity of religion","oneness of religion"],
  ["ʻAbdu'l-Bahá",6,"abdul baha","abdu l baha"],["Equality of women and men",6,"gender equality","equality"],["Universal education",4,"education"],["World peace",4,"peace"],["Harmony of science and religion",4,"science and religion"],["Progressive revelation",.4]]),
P("re019","R.9","Name a Bahá'í holy place, text or festival.","Ayyám-i-Há",[
  ["Haifa",16,"bahai world centre","mount carmel"],["The Shrine of the Báb",10,"shrine of the bab"],["The Kitáb-i-Aqdas",10,"kitab i aqdas","kitab aqdas","most holy book"],["Naw-Rúz",10,"naw ruz","nowruz","bahai new year"],["Ridván",8,"ridvan"],["The Lotus Temple",8,"lotus temple"],
  ["Bahjí",4,"bahji","akka","acre"],["The Hidden Words",4,"hidden words"],["The Nineteen-Day Fast",4,"the fast","nineteen day fast"],["The Kitáb-i-Íqán",3,"kitab i iqan","book of certitude"],["Ayyám-i-Há",.4,"ayyam i ha","intercalary days"]]),
/* ---------- S.1 Key concepts and the investigative study ---------- */
P("re020","S.1","Name a religious practice found in many religions.","Circumambulation",[
  ["Prayer",22],["Fasting",14],["Pilgrimage",12],["Meditation",10],["Festivals",8,"celebrations"],["Charity",8,"giving"],["Worship",6],["Chanting",5,"singing","hymns"],["Rites of passage",5,"weddings","funerals"],["Reading scripture",4,"scripture"],
  ["Dietary laws",3,"food laws"],["Wearing religious symbols",2,"symbols"],["Circumambulation",.4,"walking around","pradakshina","tawaf"]]),
P("re021","S.1","Name a kind of sacred place or building.","Derasar",[
  ["Temple",20,"mandir"],["Church",16],["Mosque",16,"masjid"],["Synagogue",12],["Gurdwara",10],["Cathedral",6],["Shrine",5],["Monastery",5],["Stupa",3],["Pagoda",3],["Sacred river",2,"ganges","river"],["Sacred mountain",2,"mountain"],["Derasar",.4,"jain temple"]]),
P("re022","S.1","Name a method for researching a religious community.","Methodological agnosticism",[
  ["Interviews",20,"interview"],["Observation",16,"observing"],["Visiting a place of worship",12,"visits","site visit"],["Reading sacred texts",10,"texts","scripture"],["Surveys",8,"questionnaires"],["Participant observation",6,"taking part"],["Academic books",6,"books","journals"],
  ["Documentaries",4],["Ethnography",3],["Comparing sources",3],["Methodological agnosticism",.4,"bracketing beliefs"]]),
P("re023","S.1","Name a big question or theme that religions address.","Theodicy",[
  ["Life after death",18,"afterlife","what happens after death"],["The nature of God",12,"god","the divine"],["Suffering",10,"why we suffer"],["How to live",10,"morality","ethics"],["Creation",8,"origins","creation of the world"],["The meaning of life",8,"purpose"],
  ["Love and compassion",6,"compassion","love"],["Salvation or liberation",6,"salvation","liberation"],["Community",4],["Justice",4],["Peace",4],["Theodicy",.4,"problem of evil"]]),
];

/* ================= the pilgrimage (sideways) ================= */
const BANDS = [
  {name:"The crossroads",        zone:"The crossroads",              from:0,  to:40,  hue:40,  bg:["#1a1612","#201a14"]},
  {name:"The ghats of Varanasi", zone:"The ghats of Varanasi",       from:40, to:100, hue:30,  bg:["#2a160e","#3a1e10"]},
  {name:"The Western Wall",      zone:"The Western Wall",            from:100,to:170, hue:45,  bg:["#1e2438","#2a2e44"]},
  {name:"The Bodhi tree",        zone:"The Bodhi tree",              from:170,to:250, hue:100, bg:["#1a2a1a","#1e3220"]},
  {name:"The Jain temples",      zone:"The Jain temples of Palitana",from:250,to:320, hue:200, bg:["#24304a","#2a3858"]},
  {name:"The Taoist mountain",   zone:"The Taoist mountain",         from:320,to:390, hue:160, bg:["#1a2a2e","#22343a"]},
  {name:"The cathedral",         zone:"The cathedral",               from:390,to:460, hue:240, bg:["#16142a","#1e1a34"]},
  {name:"The mosque",            zone:"The mosque",                  from:460,to:530, hue:190, bg:["#0e2030","#10283a"]},
  {name:"The Golden Temple",     zone:"The Golden Temple",           from:530,to:600, hue:45,  bg:["#141a30","#1a2038"]},
  {name:"The Bahá'í gardens",    zone:"The Bahá'í gardens",          from:600,to:760, hue:120, bg:["#0e1a2a","#08101c"]},
];
// lamps lit at each band boundary: one small light becomes a million
const KNOTS = [[0,1],[40,3],[100,10],[170,40],[250,150],[320,600],[390,2500],[460,10000],[530,40000],[600,150000],[760,1e6]];
function lamps(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(1e6, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtL(p){ const n = lamps(p); if (n >= 1e6) return "1 million lamps"; return `${n.toLocaleString("en-GB")} lamp${n === 1 ? "" : "s"} lit`; }
const FACTS = [
  [-30,"every journey begins with a single step"],[12,"religions answer life's biggest questions in many different ways"],[30,"studying religion means listening carefully and respectfully"],
  [60,"Varanasi on the Ganges is one of the world's oldest continuously inhabited cities"],[85,"Diwali, the festival of lights, is celebrated by Hindus, Sikhs and Jains"],[115,"the Western Wall is the holiest place where Jews are able to pray"],[150,"Shabbat runs from sunset on Friday to nightfall on Saturday"],
  [190,"the Buddha is said to have reached enlightenment under the Bodhi tree at Bodh Gaya"],[225,"Buddhism teaches the Middle Way between luxury and hardship"],[265,"Palitana's sacred hill holds hundreds of Jain temples"],[300,"some Jain monks gently sweep the ground ahead so as not to harm insects"],
  [340,"the Tao Te Ching is traditionally credited to Laozi"],[370,"the Wudang Mountains are a sacred centre of Taoism"],[410,"Christianity has the most followers of any religion"],[445,"rose windows tell stories in stained glass"],
  [480,"Muslims pray five times a day, facing Mecca"],[515,"mosques are often decorated with calligraphy and geometric patterns"],[550,"the Golden Temple's langar serves free meals to anyone, every day"],[585,"Sikhs believe in one God and the equality of all people"],
  [625,"the Bahá'í World Centre is in Haifa, on Mount Carmel"],[670,"Bahá'í Houses of Worship have nine sides and are open to people of every faith"],[720,"the journey continues"],
];
const GR = 340;
function scene(i, len){
  const r = srand(10301 + i*61); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#6a5a3a","#a8784a","#c8b48a","#5a4a2a","#d8d0c0","#4a5a4a","#5a5a6a","#d8c8a8","#e8e0c8","#5a8a4a"][i];
  s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/>`;
  const flame = (x, y, k) => `<path class="blink" style="animation-delay:-${f1(k)}s" d="M${x} ${y} q-4 -8 0 -16 q4 8 0 16z" fill="#ffb03a"/><circle cx="${x}" cy="${y-6}" r="10" fill="#ffd27a" opacity=".15"/>`;
  switch(i){
    case 0: // the crossroads: signposts pointing many ways at dawn
      s += `<circle cx="${f1(len*.6)}" cy="${GR}" r="90" fill="#ffb03a" opacity=".25"/>`;
      each(260, x=>{ s+=`<path d="M${x} ${GR} v-150" stroke="#6a4a2a" stroke-width="7"/>` + [0,1,2].map(k=>`<path d="M${x} ${GR-140+k*34} h${k%2 ? -70 : 70} l${k%2 ? -10 : 10} 10 l${k%2 ? 10 : -10} 10 h${k%2 ? 70 : -70}z" fill="#c8a070" stroke="#6a4a2a" stroke-width="2"/>`).join(""); }, 40);
      s += `<path d="M0 ${GR+30} Q${len*.5} ${GR+10} ${len} ${GR+40}" stroke="#c8b080" stroke-width="16" fill="none" opacity=".6"/>`;
      break;
    case 1: // the ghats of Varanasi: steps down to the river and floating lamps
      for (let k = 0; k < 6; k++) s+=`<rect x="0" y="${GR-120+k*20}" width="${len}" height="20" fill="${k%2 ? "#b8885a" : "#a8784a"}"/>`;
      each(300, x=>{ s+=`<path d="M${x} ${GR-120} v-70 l30 -50 l30 50 v70z" fill="#c86a3a"/><path d="M${x+30} ${GR-240} v-16" stroke="#ff8a1a" stroke-width="3"/><path d="M${x+30} ${GR-256} l14 5 l-14 5z" fill="#ff8a1a"/>`; }, 60);
      s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="#3a5a7a"/>`; each(46, x=>{ s+=`<path d="M${x-8} ${GR+30} q8 8 16 0z" fill="#e8a858"/>` + flame(x, GR+28, r()*2); }, 20);
      break;
    case 2: // the Western Wall: great stones with folded prayer notes
      for (let y = 40, row = 0; y < GR; y += 34, row++) for (let x = (row % 2) * -40; x < len; x += 80) s+=`<rect x="${x+2}" y="${y+2}" width="76" height="30" rx="3" fill="${r() < .5 ? "#d8c8a0" : "#c8b890"}"/>`;
      each(24, x=>{ s+=`<rect x="${x}" y="${f1(60 + r()*240)}" width="6" height="4" fill="#fff" transform="rotate(${f1(-20 + r()*40)} ${x} 150)"/>`; }, 10);
      each(140, x=>{ s+=`<path d="M${x} ${GR-30} q6 -20 12 0 M${x+3} ${GR-38} q12 -18 18 4" stroke="#3a6a2a" stroke-width="3" fill="none"/>`; }, 70);
      break;
    case 3: // the Bodhi tree: a great fig with heart-shaped leaves and prayer flags
      each(360, x=>{ s+=`<path d="M${x} ${GR} q-10 -80 0 -150 q10 80 30 150z" fill="#6a4a2a"/>` + Array.from({length: 26}, ()=>{ const lx = f1(x + 10 + (r()-.5)*220), ly = f1(80 + r()*130); return `<path d="M${lx} ${ly} q-8 -8 0 -14 q8 6 0 14 l0 8" fill="#3a8a3a" stroke="#2a6a2a" stroke-width="1"/>`; }).join("")
        + `<path d="M${x-120} 110 q120 40 260 0" stroke="#c8c0b0" stroke-width="1" fill="none"/>` + [0,1,2,3,4,5,6,7].map(k=>`<rect x="${x-110+k*32}" y="${f1(114+Math.sin(k)*6)}" width="16" height="20" fill="${["#3a6ae8","#f4f4f4","#e8443a","#3ac04a","#ffd25a"][k%5]}"/>`).join(""); }, 120);
      break;
    case 4: // the Jain temples of Palitana: white marble spires with flags
      each(130, x=>{ const h = f1(140 + r()*80); s+=`<path d="M${x} ${GR} v-60 h100 v60z" fill="#f4f0e8"/><path d="M${x+20} ${GR-60} q30 -${h} 60 0z" fill="#f8f4ec" stroke="#d8d0c0" stroke-width="2"/><path d="M${x+50} ${f1(GR-60-h*.5)} v-30" stroke="#8a6a3a" stroke-width="2"/><path d="M${x+50} ${f1(GR-90-h*.5)} l22 6 l-22 6z" fill="#e8443a"/>`
        + [0,1,2].map(k=>`<rect x="${x+14+k*28}" y="${GR-48}" width="14" height="24" rx="7" fill="#c8c0b0"/>`).join(""); }, 30);
      break;
    case 5: // the Taoist mountain: misty peaks, a temple roof and a turning yin-yang
      each(300, x=>{ s+=`<path d="M${x-60} ${GR} L${x+40} 70 L${x+140} ${GR}z" fill="#3a5a5a"/><path d="M${x+20} 110 L${x+40} 70 L${x+60} 110z" fill="#e8f0f0" opacity=".6"/>`
        + `<g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${x+40}" cy="200" rx="90" ry="14" fill="#e8f0f0" opacity=".25"/></g>`
        + `<path d="M${x+150} ${GR-60} q50 -30 100 0z" fill="#8a1a1a"/><rect x="${x+165}" y="${GR-60}" width="70" height="60" fill="#c8302a"/><rect x="${x+190}" y="${GR-40}" width="20" height="40" fill="#2a1a0a"/>`; }, 40);
      each(420, x=>{ const cx = x, cy = 90, R = 22; s+=`<g class="vspin" style="animation-duration:14s;transform-origin:${cx}px ${cy}px"><circle cx="${cx}" cy="${cy}" r="${R}" fill="#f4f0e8"/><path d="M${cx} ${cy-R} a${R} ${R} 0 0 1 0 ${2*R} a${R/2} ${R/2} 0 0 1 0 ${-R} a${R/2} ${R/2} 0 0 0 0 ${-R}z" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy-R/2}" r="3" fill="#1a1a1a"/><circle cx="${cx}" cy="${cy+R/2}" r="3" fill="#f4f0e8"/></g>`; }, 240);
      break;
    case 6: // the cathedral: gothic arches, a rose window and candles
      each(240, x=>{ s+=`<path d="M${x} ${GR} v-190 q50 -80 100 0 v190z" fill="#2a2840" stroke="#5a5a7a" stroke-width="3"/><circle cx="${x+50}" cy="${GR-200}" r="34" fill="#1a1a3a" stroke="#8a8ab8" stroke-width="3"/>`
        + Array.from({length: 8}, (_, k)=>{ const a = k*0.785; return `<path d="M${x+50} ${GR-200} L${f1(x+50+Math.cos(a)*30)} ${f1(GR-200+Math.sin(a)*30)}" stroke="#8a8ab8" stroke-width="2"/><circle cx="${f1(x+50+Math.cos(a+.39)*20)}" cy="${f1(GR-200+Math.sin(a+.39)*20)}" r="6" fill="${["#e8443a","#3a6ae8","#ffd25a","#3ac08a"][k%4]}" opacity=".8"/>`; }).join("")
        + [0,1,2].map(k=>`<rect x="${x+120+k*24}" y="${GR-40}" width="8" height="40" fill="#f4ead0"/>` + flame(x+124+k*24, GR-40, k*.3)).join(""); }, 30);
      break;
    case 7: // the mosque: domes, minarets and geometric tiles
      each(340, x=>{ s+=`<rect x="${x}" y="${GR-110}" width="200" height="110" fill="#e8e0d0"/><path d="M${x+50} ${GR-110} q50 -110 100 0z" fill="#3a8ab8"/><path d="M${x+100} ${GR-164} v-18" stroke="#d4af37" stroke-width="3"/><path d="M${x+94} ${GR-190} a6 6 0 1 0 10 6 a5 5 0 1 1 -10 -6z" fill="#d4af37"/>`
        + `<rect x="${x+220}" y="${GR-230}" width="20" height="230" fill="#e8e0d0"/><path d="M${x+216} ${GR-230} q14 -30 28 0z" fill="#3a8ab8"/><rect x="${x+214}" y="${GR-160}" width="32" height="6" fill="#d8d0c0"/>`
        + Array.from({length: 8}, (_, k)=>`<g transform="translate(${x+14+k*24} ${GR-60})"><path d="M0 -9 L9 0 L0 9 L-9 0z M-6 -6 h12 v12 h-12z" fill="none" stroke="#2a6a9a" stroke-width="1.5"/></g>`).join("")
        + `<path d="M${x+80} ${GR} v-44 q20 -24 40 0 v44z" fill="#2a4a6a"/>`; }, 30);
      break;
    case 8: // the Golden Temple: a golden shrine on a still pool of water
      s += `<rect x="0" y="${GR-60}" width="${len}" height="60" fill="#3a6a9a"/>`;
      each(400, x=>{ s+=`<rect x="${x}" y="${GR-160}" width="160" height="100" fill="#e8b830"/><path d="M${x+40} ${GR-160} q40 -70 80 0z" fill="#ffd25a"/>` + [0,1,2,3].map(k=>`<path d="M${x+18+k*42} ${GR-120} v-20 q8 -14 16 0 v20" fill="#c89a2a"/>`).join("")
        + `<path d="M${x+80} ${GR-194} v-16" stroke="#d4af37" stroke-width="3"/><circle cx="${x+80}" cy="${GR-212}" r="3" fill="#d4af37"/><rect x="${x-120}" y="${GR-80}" width="120" height="14" fill="#f4f0e8"/>`
        + `<rect x="${x}" y="${GR-58}" width="160" height="40" fill="#e8b830" opacity=".35"/>`; }, 100);
      break;
    case 9: // the Bahá'í gardens: terraces down Mount Carmel, cypress trees and a golden dome
      for (let k = 0; k < 7; k++) s+=`<path d="M0 ${GR-20-k*36} H${len}" stroke="#4a8a3a" stroke-width="20" opacity="${f1(.5 + k*.06)}"/><path d="M0 ${GR-30-k*36} H${len}" stroke="#e8e0c8" stroke-width="2"/>`;
      each(70, x=>{ s+=`<path d="M${x} ${GR} q-6 -30 0 -60 q6 30 0 60z" fill="#2a5a2a"/>`; }, 20);
      each(460, x=>{ s+=`<rect x="${x}" y="${GR-200}" width="80" height="60" fill="#f4f0e8"/><path d="M${x+10} ${GR-200} q30 -60 60 0z" fill="#ffd25a"/>` + [0,1,2,3].map(k=>`<rect x="${x+8+k*18}" y="${GR-190}" width="8" height="40" fill="#d8d0c0"/>`).join(""); }, 200);
      for (let k = 0; k < len/14; k++) s+=`<circle cx="${f1(r()*len)}" cy="${f1(r()*60)}" r="${f1(.5 + r()*1.2)}" fill="#fff" opacity="${f1(.3 + r()*.5)}"/>`;
      break;
  }
  return hscene(s, len);
}
/* the lamp: it gathers a glow, a flower garland, a small book and a ring of stars, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, clay = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 50% 60%)` : "#c8784a", line = gold ? "#8a6a1a" : "#6a3a1a";
  const s = `<g class="av-rock">
    <circle r="${level >= 2 ? 32 : 0}" fill="#ffd27a" opacity="${level >= 5 ? .22 : .12}"/>
    <path class="blink" d="M14 -12 q-6 -12 0 -26 q6 14 0 26z" fill="#ffb03a"/><path d="M14 -14 q-3 -6 0 -12 q3 6 0 12z" fill="#fff8d0"/>
    <path d="M-22 -4 q22 -10 40 -6 l6 -2 q-2 6 -6 8 q-4 22 -20 22 q-18 0 -20 -22z" fill="${clay}" stroke="${line}" stroke-width="1.8"/>
    <path d="M-18 -2 q18 -8 34 -4" stroke="${line}" stroke-width="1" fill="none" opacity=".6"/>
    <circle cx="-6" cy="6" r="3.2" fill="#fff"/><circle cx="4" cy="6" r="3.2" fill="#fff"/>
    <g class="av-blink"><circle cx="-5.6" cy="6.4" r="1.7" fill="#2a1408"/><circle cx="4.4" cy="6.4" r="1.7" fill="#2a1408"/></g>
    <path d="M-5 12 q4 3 8 0" stroke="#2a1408" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    ${level >= 3 ? `<path d="M-20 18 q20 10 36 0" stroke="#ff9a1a" stroke-width="4" fill="none" stroke-dasharray="3 2" stroke-linecap="round"/>` : ""}
    ${level >= 4 ? `<g transform="translate(-28 -10) rotate(-12)"><rect x="-8" y="-6" width="16" height="12" rx="1" fill="#8a2a1a"/><path d="M0 -6 v12" stroke="#f4ead0" stroke-width="1.2"/><path d="M-6 -3 h4 M2 -3 h4" stroke="#d4af37" stroke-width="1"/></g>` : ""}
    ${level >= 6 ? Array.from({length: 6}, (_, k)=>{ const a = -2.6 + k*.42; return `<text x="${f1(Math.cos(a)*30)}" y="${f1(Math.sin(a)*30 + 3)}" text-anchor="middle" font-size="7" fill="#ffd27a">✦</text>`; }).join("") : ""}
    ${level >= 1 ? `<text class="blink" x="-26" y="-20" font-size="10" fill="#ffd27a">✧</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  const lamp = (x, y, sc) => `<g transform="translate(${x} ${y}) scale(${sc})"><path d="M-14 0 q14 -6 26 -4 l4 -1 q-1 4 -4 5 q-3 14 -13 14 q-12 0 -13 -14z" fill="#c8784a"/><path class="blink" d="M10 -6 q-4 -8 0 -16 q4 8 0 16z" fill="#ffb03a"/></g>`;
  if (t === "gem") return W(200,110,Array.from({length: 11}, (_, k)=>lamp(20 + k*16, 70 - Math.abs(k-5)*6, .8)).join("") + `<circle cx="100" cy="40" r="30" fill="#ffd27a" opacity=".2"/>`
    + [[30,22],[170,26]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,lamp(60, 60, 1.2) + lamp(85, 50, 1.2) + lamp(110, 60, 1.2) + `<circle cx="85" cy="40" r="30" fill="${c}" opacity=".15"/>`);
  if (t === "trojan") return W(170,100,lamp(72, 60, 1.3) + lamp(100, 60, 1.3));
  if (t === "adware") return W(170,100,lamp(85, 60, 1.6));
  if (t === "spam") return W(170,90,`<circle class="blink" cx="85" cy="45" r="5" fill="${c}"/><circle cx="85" cy="45" r="14" fill="${c}" opacity=".15"/>`);
  if (t === "blocked") return W(170,100,`<rect x="22" y="26" width="126" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">SNUFFED</text>`);
  return null;
}
registerSubject({
  key:"rel", name:"World Religions", theme:"A small lamp on a pilgrimage past the world's sacred places", gemWord:"Thousand Lamps", gemTitle:"One in a Thousand Lamps", emoji:"🪔",
  blurb:"You're a <b>small lamp</b> at a crossroads where many paths begin. Each prompt has many correct answers. <b>Obvious answers light a candle or two. Answers others missed light many more</b> as you travel past the ghats of Varanasi, the Western Wall, the Bodhi tree, the Jain temples of Palitana, a Taoist mountain, a cathedral, a mosque and the Golden Temple, to the Bahá'í gardens on Mount Carmel.",
  noLevel:"SL only",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Thousand Lamps", rootkit:"Radiant", trojan:"Glowing", adware:"Lit", spam:"Spark"}, blocked:"Snuffed out", fw:"SNUFFED",
  notes:{rootkit:"Radiant: very few pilgrims came this far.", trojan:"Glowing: not the usual answer.", adware:"Lit: correct and common.", spam:"A spark: what everyone says first."},
  ladder:{gem:"One in a Thousand Lamps: almost no one thinks of it", rootkit:"Radiant: a rare answer", trojan:"Glowing: a strong, less common answer", adware:"Lit: correct and common", spam:"Spark: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Journey ▶", inject:"Light", hint:"▶ rarer answers light more lamps ▶", count:"walking the path"},
  shout:t => ({gem:"ILLUMINATED!", rootkit:"RADIANT!", blocked:"SNUFFED OUT!"})[t],
  particles:["✦","✧","★","•"], particleColor:"#ffd27a",
  meter:{label:"LAMPS LIT", fmt:fmtL, zone:fmtL, tick:fmtL, gain:(a,b)=>`light ${fmtL(b)}`},
  start:{bg:"linear-gradient(90deg,#120e0a,#1a1612)", label:"Start · 1 lamp", zone:"The crossroads", color:"#ffd27a"},
  endBg:"linear-gradient(90deg,#08101c,#04060c)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"The night sky",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
