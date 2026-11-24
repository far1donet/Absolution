/* French ab initio — a baguette grows taller and taller next to the Eiffel Tower, shouting "SACRÉ BLEU !"
   (louder for rarer answers). Answers must be in French: typing the English word tells you the French one.
   Syllabus: IB Language ab initio (first assessment 2020): five themes, twenty prescribed topics, SL only,
   plus a grammar toolkit that supports every theme. */
(function(){
const CATALOG = [
  {label:"Themes and prescribed topics", units:[
    {code:"I", name:"Identities", topics:[["I.1","Personal attributes"],["I.2","Personal relationships"],["I.3","Eating and drinking"],["I.4","Physical well-being"]]},
    {code:"E", name:"Experiences", topics:[["E.1","Daily routine"],["E.2","Leisure"],["E.3","Holidays"],["E.4","Festivals and celebrations"]]},
    {code:"H", name:"Human ingenuity", topics:[["H.1","Transport"],["H.2","Entertainment"],["H.3","Media"],["H.4","Technology"]]},
    {code:"S", name:"Social organization", topics:[["S.1","Neighbourhood"],["S.2","Education"],["S.3","The workplace"],["S.4","Social issues"]]},
    {code:"P", name:"Sharing the planet", topics:[["P.1","Climate"],["P.2","Physical geography"],["P.3","The environment"],["P.4","Global issues"]]},
  ]},
  {label:"Grammar toolkit (used in every theme)", units:[
    {code:"G", name:"Grammar", topics:[["G.1","Verbs and tenses"],["G.2","Connectives and opinions"],["G.3","Time, dates and frequency"],["G.4","Questions, prepositions and pronouns"]]},
  ]},
];

/* French answers are matched without their article: "le père", "un père" and "père" all count */
const ART = /^\s*(?:(?:le|la|les|un|une|des|du|au|aux|mon|ma|mes|ton|ta|tes|son|sa|ses|notre|nos|votre|vos|leur|leurs)\s+|(?:de la|de l'|de l’|l'|l’)\s*)/i;
const frPre = s => String(s).replace(ART, "");
const nrm = s => String(s).toLowerCase().replace(/œ/g,"oe").replace(/æ/g,"ae").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim().replace(/^(a|an|the) /,"").replace(/ /g,"");
/* FP(id, topic, question, gem, [[french, english, weight, ...other French forms]], {bi:true} accepts English too) */
function FP(id, spec, q, gem, items, o = {}){
  const ans = items.map(([fr, en, w, ...al]) => {
    const forms = [fr, ...al, ...(o.bi && en ? en.split(" / ") : [])];
    const all = [...new Set(forms.flatMap(f => [f, frPre(f)]))];
    const same = !en || nrm(en) === nrm(frPre(fr));
    return [same ? fr : `${fr} (${en})`, w, ...all];
  });
  const g = ans[items.findIndex(it => it[0] === gem)];
  if (!g) throw new Error("fr: gem missing in " + id);
  const french = new Set(ans.flatMap(a => [a[0], ...a.slice(2)]).map(nrm));
  const traps = [];
  if (!o.bi) items.forEach(([fr, en]) => { if (!en) return;
    en.split(" / ").filter(e => !french.has(nrm(e))).forEach(e => traps.push([[e], `Answer in French! “${e}” is “${frPre(fr)}”.`])); });
  const p = P(id, spec, q, g[0], ans, [...traps, ...(o.traps || [])]);
  p.pre = frPre;
  return p;
}

const PROMPTS = [
/* ---------- Identities ---------- */
FP("fr01","I.1","Name a French adjective that describes someone's personality.","débrouillard",[
  ["sympa","nice / friendly",20,"sympathique"],["gentil","kind",18,"gentille"],["intelligent","clever / intelligent",15,"intelligente"],["drôle","funny",12,"drole"],["timide","shy",8],
  ["sportif","sporty",8,"sportive"],["paresseux","lazy",8,"paresseuse"],["méchant","mean / nasty",6,"méchante"],["bavard","chatty / talkative",5,"bavarde"],["travailleur","hard-working",5,"travailleuse"],
  ["marrant","fun",4,"marrante"],["généreux","generous",4,"généreuse"],["sérieux","serious",4,"sérieuse"],["égoïste","selfish",3,"egoiste"],["têtu","stubborn",2,"têtue"],["débrouillard","resourceful",.4,"débrouillarde"]]),
FP("fr02","I.1","Name a French word for describing what someone looks like.","taches de rousseur",[
  ["grand","tall",18,"grande"],["petit","short / small",18,"petite"],["les cheveux","hair",12,"cheveux"],["les yeux","eyes",12,"yeux"],["blond","blonde / blond",10,"blonde"],["brun","brown-haired",8,"brune"],
  ["beau","handsome / beautiful",8,"belle"],["mince","slim",6],["joli","pretty",6,"jolie"],["des lunettes","glasses",5,"lunettes"],["roux","red-haired / ginger",4,"rousse"],["une barbe","beard",4,"barbe"],
  ["frisé","curly",3,"frisée","frisés"],["raide","straight (hair)",2],["taches de rousseur","freckles",.4,"des taches de rousseur"]]),
FP("fr03","I.1","Name a nationality in French.","malgache",[
  ["français","French",25,"française","francais"],["anglais","English",12,"anglaise"],["américain","American",10,"américaine"],["espagnol","Spanish",10,"espagnole"],["allemand","German",8,"allemande"],
  ["italien","Italian",8,"italienne"],["chinois","Chinese",5,"chinoise"],["canadien","Canadian",5,"canadienne"],["belge","Belgian",5],["suisse","Swiss",5],["japonais","Japanese",4,"japonaise"],
  ["marocain","Moroccan",4,"marocaine"],["algérien","Algerian",3,"algérienne"],["sénégalais","Senegalese",3,"sénégalaise"],["malgache","Malagasy",.4]]),
FP("fr04","I.2","Name a family member in French.","l'arrière-grand-mère",[
  ["la mère","mother / mum",22,"mère","maman"],["le père","father / dad",22,"père","papa"],["le frère","brother",18,"frère"],["la sœur","sister",18,"sœur","soeur"],["la grand-mère","grandmother",10,"grand-mère","grand mere","mamie","mémé"],
  ["le grand-père","grandfather",10,"grand-père","grand pere","papi","papy","pépé"],["l'oncle","uncle",6,"oncle"],["la tante","aunt",6,"tante"],["le cousin","cousin",6,"cousine"],["la fille","daughter",4,"fille"],["le fils","son",3,"fils"],
  ["le neveu","nephew",2,"neveu"],["la nièce","niece",2,"nièce"],["le demi-frère","half-brother / stepbrother",2,"demi-frère","demi frere","demi-sœur","demi-soeur"],["le beau-père","stepfather / father-in-law",2,"beau-père","belle-mère"],
  ["l'arrière-grand-mère","great-grandmother",.4,"arrière-grand-mère","arriere grand mere","arrière-grand-père","arriere grand pere"]]),
FP("fr05","I.2","Name a French word or phrase about friendship and relationships.","l'âme sœur",[
  ["l'ami","friend",25,"ami","amie","les amis"],["le copain","mate / boyfriend",12,"copain","copine"],["le meilleur ami","best friend",10,"meilleur ami","meilleure amie"],["s'entendre bien","to get on well",8,"s'entendre","on s'entend bien","je m'entends bien"],
  ["se disputer","to argue",6,"se dispute","on se dispute"],["le mariage","marriage / wedding",6,"mariage"],["le petit ami","boyfriend",6,"petit ami","petite amie"],["la confiance","trust",4,"confiance"],
  ["célibataire","single",2],["l'âme sœur","soulmate",.4,"âme sœur","ame soeur"]]),
FP("fr06","I.2","Name a French verb for something you do with friends or family.","bavarder",[
  ["sortir","to go out",15],["parler","to talk",12],["jouer","to play",12],["manger","to eat",10],["regarder un film","to watch a film",6,"regarder"],["aider","to help",6],["discuter","to chat / discuss",6],
  ["se promener","to go for a walk",5,"promener"],["faire du shopping","to go shopping",5,"faire les magasins"],["partager","to share",4],["voyager","to travel",4],["rigoler","to laugh / have a laugh",4,"rire"],
  ["se retrouver","to meet up",3,"retrouver"],["bavarder","to chatter",.4]]),
FP("fr07","I.3","Name a food in French.","les escargots",[
  ["le pain","bread",18,"pain"],["le fromage","cheese",18,"fromage"],["le croissant","croissant",15,"croissant"],["la baguette","baguette",12,"baguette"],["la pomme","apple",10,"pomme"],["le poulet","chicken",8,"poulet"],
  ["le gâteau","cake",8,"gateau"],["les frites","chips / fries",6,"frites"],["les pâtes","pasta",6,"pâtes","pates"],["le poisson","fish",6,"poisson"],["la crêpe","crepe / pancake",6,"crêpe","crepe"],["le riz","rice",4,"riz"],
  ["l'œuf","egg",4,"œuf","oeuf","les oeufs"],["le jambon","ham",4,"jambon"],["la fraise","strawberry",4,"fraise"],["le beurre","butter",3,"beurre"],["les escargots","snails",.4,"escargots","escargot"]]),
FP("fr08","I.3","Name a drink in French.","le diabolo menthe",[
  ["l'eau","water",20,"eau","eau minérale"],["le café","coffee",15,"café","cafe"],["le lait","milk",12,"lait"],["le thé","tea",10,"thé","the"],["le jus d'orange","orange juice",10,"jus d'orange","jus","jus de pomme"],
  ["le chocolat chaud","hot chocolate",8,"chocolat chaud"],["le vin","wine",8,"vin"],["le coca","cola / coke",6,"coca"],["la limonade","lemonade",4,"limonade"],["la bière","beer",4,"bière","biere"],["le sirop","cordial / syrup",1,"sirop"],
  ["le citron pressé","fresh lemon juice",1.5,"citron pressé"],["le diabolo menthe","mint lemonade",.4,"diabolo menthe","diabolo"]]),
FP("fr09","I.3","Name a meal, or a word you need at the table, in French.","l'apéritif",[
  ["le petit déjeuner","breakfast",20,"petit déjeuner","petit dejeuner","petit-déjeuner"],["le déjeuner","lunch",18,"déjeuner","dejeuner"],["le dîner","dinner",18,"dîner","diner"],["le goûter","afternoon snack",8,"goûter","gouter"],
  ["le repas","meal",8,"repas"],["la fourchette","fork",4,"fourchette"],["l'addition","the bill",4,"addition"],["la cuillère","spoon",3,"cuillère","cuillere"],["le couteau","knife",3,"couteau"],
  ["l'assiette","plate",3,"assiette"],["le verre","glass",3,"verre"],["l'apéritif","pre-dinner drinks",.4,"apéritif","apéro"]]),
FP("fr10","I.4","Name a part of the body in French.","l'orteil",[
  ["la tête","head",20,"tête","tete"],["le bras","arm",12,"bras"],["la main","hand",12,"main"],["la jambe","leg",12,"jambe"],["le pied","foot",10,"pied"],["les yeux","eyes",10,"yeux","œil","oeil"],
  ["le nez","nose",8,"nez"],["la bouche","mouth",8,"bouche"],["le dos","back",6,"dos"],["l'oreille","ear",6,"oreille"],["le ventre","stomach / tummy",6,"ventre"],["le doigt","finger",4,"doigt"],
  ["le genou","knee",4,"genou"],["le cœur","heart",3,"cœur","coeur"],["le cou","neck",3,"cou"],["l'épaule","shoulder",3,"épaule","epaule"],["l'orteil","toe",.4,"orteil","doigt de pied"]]),
FP("fr11","I.4","Name a way to stay healthy, in French.","faire de la randonnée",[
  ["faire du sport","to do sport",20,"sport"],["manger équilibré","to eat a balanced diet",12,"manger sain","bien manger","manger des fruits","manger des légumes"],["boire de l'eau","to drink water",10,"boire beaucoup d'eau"],
  ["dormir","to sleep",10,"dormir huit heures","bien dormir"],["ne pas fumer","not smoking",6,"arrêter de fumer"],["marcher","to walk",5,"la marche"],["nager","to swim",5,"la natation"],["éviter le sucre","to avoid sugar",4,"moins de sucre"],
  ["se détendre","to relax",3,"se relaxer"],["méditer","to meditate",2],["faire de la randonnée","to go hiking",.4,"la randonnée","randonnée"]]),
FP("fr12","I.4","Name an illness, a symptom or a health phrase in French.","la varicelle",[
  ["j'ai mal à la tête","I have a headache",15,"mal à la tête","mal a la tete"],["la grippe","flu",12,"grippe"],["le rhume","a cold",10,"rhume","enrhumé"],["la fièvre","fever / temperature",10,"fièvre","fievre"],
  ["malade","ill / sick",8],["j'ai mal au ventre","stomach ache",8,"mal au ventre"],["fatigué","tired",6,"fatiguée"],["la toux","cough",6,"toux","je tousse"],["mal à la gorge","sore throat",6,"j'ai mal à la gorge"],
  ["une allergie","allergy",3,"allergie"],["la varicelle","chickenpox",.4,"varicelle"]]),
/* ---------- Experiences ---------- */
FP("fr13","E.1","Name a reflexive verb from a daily routine.","s'endormir",[
  ["se lever","to get up",25,"je me lève","je me leve","me lever"],["se réveiller","to wake up",18,"je me réveille","me réveiller"],["s'habiller","to get dressed",12,"je m'habille","m'habiller"],["se laver","to wash",12,"je me lave","me laver"],
  ["se coucher","to go to bed",12,"je me couche","me coucher"],["se doucher","to shower",10,"je me douche","me doucher"],["se brosser les dents","to brush your teeth",10,"je me brosse les dents","se brosser"],
  ["se coiffer","to do your hair",4,"je me coiffe"],["se maquiller","to put on make-up",3,"je me maquille"],["se raser","to shave",3,"je me rase"],["se reposer","to rest",3,"je me repose"],["se dépêcher","to hurry",2,"je me dépêche"],
  ["s'endormir","to fall asleep",.4,"je m'endors","endormir"]]),
FP("fr14","E.1","Name a French sequencing or time word for describing a routine.","aussitôt",[
  ["ensuite","next / then",15],["puis","then",15],["d'abord","first",12,"dabord"],["après","after",10,"apres"],["le matin","in the morning",10,"matin"],["le soir","in the evening",10,"soir"],["enfin","finally",8],
  ["tous les jours","every day",8],["d'habitude","usually",6],["normalement","normally",5],["finalement","eventually / finally",4],["le week-end","at the weekend",4,"week-end","weekend"],["aussitôt","straight away",.4,"aussitot"]]),
FP("fr15","E.1","Name a household chore in French.","arroser les plantes",[
  ["faire la vaisselle","to do the washing-up",18,"la vaisselle"],["ranger ma chambre","to tidy my room",15,"ranger","ranger la chambre"],["faire le ménage","to do the housework",12,"le ménage"],["passer l'aspirateur","to vacuum",10,"l'aspirateur"],
  ["faire les courses","to do the shopping",10,"les courses"],["faire la cuisine","to cook",8,"cuisiner"],["mettre la table","to lay the table",8],["faire le lit","to make the bed",6,"faire mon lit"],["sortir la poubelle","to take out the bin",6,"sortir les poubelles"],
  ["faire la lessive","to do the laundry",4,"la lessive"],["promener le chien","to walk the dog",4],["repasser","to iron",2,"faire le repassage"],["arroser les plantes","to water the plants",.4,"arroser"]]),
FP("fr16","E.2","Name a hobby or leisure activity in French.","la pêche",[
  ["jouer au foot","to play football",18,"le foot","foot","jouer au football"],["jouer aux jeux vidéo","to play video games",12,"les jeux vidéo","jeux vidéo","jeux video"],["regarder la télé","to watch TV",10,"la télé","regarder la télévision"],
  ["lire","to read",10,"la lecture"],["écouter de la musique","to listen to music",10,"la musique","musique"],["la natation","swimming",10,"nager","natation"],["faire du vélo","cycling",8,"le vélo","velo"],["la danse","dancing",6,"danser","danse"],
  ["faire du shopping","shopping",6,"le shopping"],["jouer au tennis","playing tennis",6,"le tennis"],["le dessin","drawing",4,"dessiner","dessin"],["faire la cuisine","cooking",4,"cuisiner"],["l'équitation","horse riding",2,"équitation","faire du cheval"],
  ["la pêche","fishing",.4,"pêche","aller à la pêche"]]),
FP("fr17","E.2","Name a sport in French.","l'escrime",[
  ["le football","football",20,"football","foot"],["le tennis","tennis",12,"tennis"],["la natation","swimming",10,"natation"],["le basket","basketball",10,"basket","basket-ball"],["le rugby","rugby",6,"rugby"],["le cyclisme","cycling",6,"cyclisme"],
  ["le ski","skiing",6,"ski"],["l'équitation","horse riding",4,"équitation"],["la voile","sailing",3,"voile"],["l'athlétisme","athletics",3,"athlétisme"],["le judo","judo",3,"judo"],["le handball","handball",3,"handball","hand"],
  ["la pétanque","boules",2,"pétanque","petanque"],["l'escalade","climbing",2,"escalade"],["l'escrime","fencing",.4,"escrime"]]),
FP("fr18","E.2","Name a musical instrument in French.","la cornemuse",[
  ["la guitare","guitar",18,"guitare"],["le piano","piano",18,"piano"],["le violon","violin",12,"violon"],["la batterie","drums",10,"batterie"],["la flûte","flute",8,"flûte","flute"],["la trompette","trumpet",6,"trompette"],
  ["le saxophone","saxophone",4,"saxophone","saxo"],["la clarinette","clarinet",4,"clarinette"],["le violoncelle","cello",3,"violoncelle"],["l'accordéon","accordion",3,"accordéon","accordeon"],["la harpe","harp",2,"harpe"],["la cornemuse","bagpipes",.4,"cornemuse"]]),
FP("fr19","E.3","Name a type of holiday accommodation in French.","le camping-car",[
  ["l'hôtel","hotel",25,"hôtel","hotel"],["le camping","campsite",15,"camping"],["l'auberge de jeunesse","youth hostel",8,"auberge de jeunesse","auberge"],["le gîte","holiday cottage",6,"gîte","gite"],["la tente","tent",6,"tente"],
  ["l'appartement","apartment / flat",4,"appartement"],["la chambre d'hôte","bed and breakfast",4,"chambre d'hôte","chambre d'hotes"],["chez des amis","at friends' house",4,"chez des amis","chez mes grands-parents"],["la caravane","caravan",3,"caravane"],
  ["la villa","villa",3,"villa"],["le camping-car","campervan",.4,"camping-car","camping car"]]),
FP("fr20","E.3","Name something you do on holiday, in French.","faire de la plongée",[
  ["aller à la plage","to go to the beach",15,"la plage","plage"],["nager","to swim",12,"se baigner"],["se bronzer","to sunbathe",10,"bronzer"],["visiter des monuments","to visit monuments",10,"visiter","visiter des musées"],
  ["faire du ski","to go skiing",8,"skier"],["se reposer","to rest",8,"se détendre"],["prendre des photos","to take photos",6,"faire des photos"],["acheter des souvenirs","to buy souvenirs",6,"souvenirs"],
  ["faire du camping","to go camping",4],["faire de la randonnée","to go hiking",4,"randonnée"],["goûter la cuisine locale","to try local food",3,"goûter"],["faire de la plongée","to go diving",.4,"plongée","plonger"]]),
FP("fr21","E.3","Name a country to travel to, in French.","la Polynésie française",[
  ["la France","France",15,"France"],["l'Espagne","Spain",12,"Espagne"],["l'Angleterre","England",8,"Angleterre"],["les États-Unis","USA / United States",8,"États-Unis","etats unis"],["l'Italie","Italy",8,"Italie"],
  ["le Canada","Canada",6,"Canada"],["l'Allemagne","Germany",6,"Allemagne"],["la Suisse","Switzerland",4,"Suisse"],["la Belgique","Belgium",4,"Belgique"],["le Maroc","Morocco",4,"Maroc"],["le Japon","Japan",4,"Japon"],
  ["la Chine","China",3,"Chine"],["la Grèce","Greece",3,"Grèce","grece"],["le Sénégal","Senegal",2,"Sénégal","senegal"],["la Martinique","Martinique",2,"Martinique"],["la Polynésie française","French Polynesia",.4,"Polynésie française","polynesie","Tahiti"]]),
FP("fr22","E.4","Name a French or Francophone festival or celebration.","la Fête des Lumières",[
  ["Noël","Christmas",20,"noel"],["le 14 juillet","Bastille Day",15,"14 juillet","quatorze juillet","la fête nationale"],["Pâques","Easter",12,"paques"],["le Nouvel An","New Year",10,"Nouvel An","le jour de l'an","la Saint-Sylvestre"],
  ["la Fête de la musique","Music Day",6,"Fête de la musique"],["l'anniversaire","birthday",6,"anniversaire"],["la Saint-Valentin","Valentine's Day",5,"Saint-Valentin","saint valentin"],["le poisson d'avril","April Fool's Day",4,"poisson d'avril"],
  ["la Chandeleur","Candlemas (crêpe day)",4,"Chandeleur"],["Mardi gras","Shrove Tuesday",4,"mardi gras","le carnaval","carnaval"],["le mariage","wedding",4,"mariage"],["la Toussaint","All Saints' Day",3,"Toussaint"],
  ["l'Épiphanie","Epiphany",3,"Épiphanie","epiphanie","la fête des rois"],["la Fête des Lumières","Lyon Festival of Lights",.4,"Fête des Lumières","fete des lumieres"]]),
FP("fr23","E.4","Name a French word linked to celebrating.","la bûche de Noël",[
  ["le cadeau","present",20,"cadeau","cadeaux"],["la fête","party",15,"fête","fete"],["le gâteau","cake",12,"gâteau","gateau"],["les feux d'artifice","fireworks",8,"feux d'artifice","feu d'artifice"],["danser","to dance",6],
  ["la bougie","candle",6,"bougie"],["chanter","to sing",4],["le défilé","parade",4,"défilé","defile"],["les décorations","decorations",4,"décorations","decoration"],["les invités","guests",4,"invités","invite"],["le sapin","Christmas tree",4,"sapin"],
  ["la bûche de Noël","Yule log",.4,"bûche de Noël","buche de noel","bûche"]]),
FP("fr24","E.4","Name a dish or treat eaten at a French celebration.","les treize desserts",[
  ["les crêpes","crêpes / pancakes",15,"crêpes","crepes"],["la galette des rois","king cake",12,"galette des rois","galette"],["la dinde","turkey",8,"dinde"],["le foie gras","foie gras",8,"foie gras"],
  ["les chocolats","chocolates",6,"chocolats","chocolat"],["les œufs en chocolat","chocolate eggs",6,"œufs en chocolat","oeufs en chocolat"],["le champagne","champagne",6,"champagne"],["les huîtres","oysters",5,"huîtres","huitres"],
  ["le couscous","couscous",4,"couscous"],["les treize desserts","the thirteen desserts (Provence)",.4,"treize desserts","13 desserts"]]),
/* ---------- Human ingenuity ---------- */
FP("fr25","H.1","Name a means of transport in French.","le téléphérique",[
  ["la voiture","car",20,"voiture","en voiture"],["le train","train",15,"train","en train"],["le bus","bus",12,"bus","en bus","autobus"],["le vélo","bike",12,"vélo","velo","à vélo","la bicyclette"],["l'avion","plane",12,"avion","en avion"],
  ["le métro","underground / subway",10,"métro","metro"],["le bateau","boat",8,"bateau","en bateau"],["à pied","on foot",8,"a pied"],["la moto","motorbike",6,"moto"],["le taxi","taxi",4,"taxi"],["le tramway","tram",4,"tramway","tram"],
  ["le TGV","high-speed train",4,"TGV"],["la trottinette","scooter",3,"trottinette"],["le car","coach",2,"car","autocar"],["le téléphérique","cable car",.4,"téléphérique","telepherique"]]),
FP("fr26","H.1","Name a word you need at a French station or airport.","la correspondance",[
  ["le billet","ticket",20,"billet","ticket"],["la gare","station",12,"gare"],["un aller-retour","return ticket",8,"aller-retour","aller retour"],["la valise","suitcase",8,"valise"],["le quai","platform",8,"quai"],
  ["un aller simple","single ticket",6,"aller simple"],["le retard","delay",6,"retard","en retard"],["le départ","departure",6,"départ","depart"],["l'arrivée","arrival",6,"arrivée","arrivee"],["le guichet","ticket office",4,"guichet"],
  ["l'horaire","timetable",4,"horaire"],["le passeport","passport",4,"passeport"],["composter","to validate a ticket",2],["la correspondance","connection",.4,"correspondance"]]),
FP("fr27","H.1","Name a French phrase for giving directions or saying where something is.","au carrefour",[
  ["à gauche","left",15,"a gauche","tournez à gauche"],["à droite","right",15,"a droite","tournez à droite"],["tout droit","straight on",12,"allez tout droit"],["à côté de","next to",8,"a cote de"],["devant","in front of",6],
  ["derrière","behind",6,"derriere"],["près de","near",6,"pres de"],["dans","in",6],["loin de","far from",4],["en face de","opposite",4],["entre","between",4],["sous","under",4],["sur","on",4],
  ["au carrefour","at the crossroads",.4,"carrefour"]]),
FP("fr28","H.2","Name a type of film or TV programme in French.","le feuilleton",[
  ["la comédie","comedy",15,"comédie","comedie"],["le film d'horreur","horror film",10,"film d'horreur","horreur"],["le dessin animé","cartoon",10,"dessin animé","dessins animés"],["le film d'action","action film",10,"film d'action","action"],
  ["le documentaire","documentary",8,"documentaire"],["la série","series",8,"série","serie"],["le film romantique","romantic film",6,"film romantique","film d'amour"],["la science-fiction","science fiction",6,"science-fiction","science fiction","film de science-fiction"],
  ["la télé-réalité","reality TV",4,"télé-réalité","tele realite"],["le journal télévisé","the news",4,"journal télévisé","les infos","informations"],["le jeu télévisé","game show",4,"jeu télévisé"],["le film policier","crime film",4,"policier","film policier"],
  ["le film d'aventure","adventure film",4,"film d'aventure","aventure"],["le feuilleton","soap opera",.4,"feuilleton"]]),
FP("fr29","H.2","Name a place of entertainment in French.","la médiathèque",[
  ["le cinéma","cinema",20,"cinéma","cinema","ciné"],["le théâtre","theatre",12,"théâtre","theatre"],["le concert","concert",10,"concert"],["le musée","museum",10,"musée","musee"],["le parc d'attractions","theme park",8,"parc d'attractions"],
  ["la piscine","swimming pool",6,"piscine"],["le stade","stadium",6,"stade"],["la boîte de nuit","nightclub",4,"boîte de nuit","boite de nuit","discothèque"],["le zoo","zoo",4,"zoo"],["le bowling","bowling alley",3,"bowling"],
  ["la patinoire","ice rink",3,"patinoire"],["la médiathèque","media library",.4,"médiathèque","mediatheque"]]),
FP("fr30","H.2","Name a famous French-speaking singer, artist, film or comic.","Jacques Brel",[
  ["Édith Piaf","",15,"edith piaf","piaf"],["Stromae","",15],["Céline Dion","",10,"celine dion"],["Daft Punk","",8],["Aya Nakamura","",6],["Johnny Hallyday","",6],["Amélie","",6,"le fabuleux destin d'amélie poulain"],
  ["Astérix","",5,"asterix","astérix et obélix"],["Les Intouchables","",5,"intouchables"],["Tintin","",5],["Angèle","",4,"angele"],["Monet","",4,"claude monet"],["Zaz","",4],["Christine and the Queens","",3],["Louis de Funès","",2,"de funes"],
  ["Jacques Brel","",.4,"brel"]], {bi:true}),
FP("fr31","H.3","Name a type of media in French.","l'hebdomadaire",[
  ["le journal","newspaper",18,"journal","les journaux"],["les réseaux sociaux","social media",15,"réseaux sociaux","reseaux sociaux"],["la télévision","television",12,"télévision","télé","tele"],["la radio","radio",10,"radio"],
  ["internet","internet",8],["le magazine","magazine",6,"magazine","revue"],["la publicité","advertising",6,"publicité","pub"],["la presse","the press",4,"presse"],["le podcast","podcast",3,"podcast"],["le blog","blog",3,"blog"],
  ["l'affiche","poster",3,"affiche"],["l'hebdomadaire","weekly paper",.4,"hebdomadaire"]]),
FP("fr32","H.3","Name a French verb for something you do online.","se désabonner",[
  ["télécharger","to download",12,"telecharger"],["partager","to share",15],["publier","to post / publish",10,"poster"],["envoyer un message","to send a message",10,"envoyer"],["aimer","to like",10,"liker"],
  ["commenter","to comment",6],["s'abonner","to subscribe / follow",6,"abonner"],["chercher","to search",6,"rechercher"],["cliquer","to click",4],["bloquer","to block",3],["se désabonner","to unsubscribe / unfollow",.4,"désabonner"]]),
FP("fr33","H.3","Name an advantage or disadvantage of social media, in French.","l'infobésité",[
  ["rester en contact","to stay in touch",15,"rester en contact avec ses amis"],["c'est une perte de temps","it's a waste of time",10,"perte de temps"],["le harcèlement","bullying / harassment",10,"harcèlement","cyberharcèlement"],
  ["c'est addictif","it's addictive",10,"addictif","l'addiction"],["s'informer","to keep informed",6,"les informations"],["partager des photos","to share photos",6],["la vie privée","privacy",6,"vie privée"],["les fausses nouvelles","fake news",6,"fausses nouvelles","fake news"],
  ["rencontrer des gens","to meet people",4],["c'est dangereux","it's dangerous",4,"dangereux"],["l'infobésité","information overload",.4,"infobésité","infobesite"]]),
FP("fr34","H.4","Name a piece of technology in French.","la clé USB",[
  ["l'ordinateur","computer",20,"ordinateur","ordi"],["le portable","mobile phone",18,"portable","le téléphone","téléphone","smartphone"],["la tablette","tablet",10,"tablette"],["l'écran","screen",6,"écran","ecran"],
  ["la télévision","television",6,"télévision","télé"],["l'appareil photo","camera",6,"appareil photo"],["la console","games console",6,"console"],["l'imprimante","printer",4,"imprimante"],["le clavier","keyboard",4,"clavier"],
  ["la souris","mouse",4,"souris"],["le casque","headphones",4,"casque","les écouteurs"],["la montre connectée","smartwatch",2,"montre connectée"],["la clé USB","USB stick",.4,"clé USB","cle usb"]]),
FP("fr35","H.4","Name a French verb for using technology.","pirater",[
  ["télécharger","to download",15,"telecharger"],["envoyer","to send",12],["chercher","to search",8],["jouer","to play",8],["appeler","to call",8,"téléphoner"],["regarder","to watch",6],["écouter","to listen",6,"ecouter"],
  ["charger","to load / charge",6],["recharger","to recharge",4],["taper","to type",4],["enregistrer","to save / record",4],["imprimer","to print",4],["pirater","to hack",.4]]),
FP("fr36","H.4","Name something you can do with a smartphone, in French.","scanner un QR code",[
  ["appeler","to call",15,"téléphoner","passer un appel"],["envoyer des SMS","to send texts",12,"envoyer des textos","texto","sms"],["prendre des photos","to take photos",12,"photos"],["écouter de la musique","to listen to music",10],
  ["jouer","to play games",8,"jouer à des jeux"],["regarder des vidéos","to watch videos",8],["surfer sur internet","to surf the internet",6,"surfer"],["utiliser le GPS","to use GPS",4,"gps"],["faire des achats","to shop online",4,"acheter en ligne"],
  ["payer","to pay",3],["scanner un QR code","to scan a QR code",.4,"qr code"]]),
/* ---------- Social organization ---------- */
FP("fr37","S.1","Name a place in town in French.","la quincaillerie",[
  ["la boulangerie","bakery",15,"boulangerie"],["le supermarché","supermarket",12,"supermarché","supermarche"],["la bibliothèque","library",8,"bibliothèque","bibliotheque"],["le parc","park",8,"parc"],["la poste","post office",8,"poste"],
  ["la banque","bank",6,"banque"],["la gare","station",6,"gare"],["l'église","church",6,"église","eglise"],["la mairie","town hall",6,"mairie","l'hôtel de ville"],["la pharmacie","chemist",6,"pharmacie"],["le marché","market",6,"marché","marche"],
  ["le cinéma","cinema",6,"cinéma"],["l'hôpital","hospital",6,"hôpital","hopital"],["la piscine","swimming pool",4,"piscine"],["le commissariat","police station",3,"commissariat"],["la quincaillerie","hardware shop",.4,"quincaillerie"]]),
FP("fr38","S.1","Name a type of home or a room in French.","la mansarde",[
  ["la maison","house",15,"maison"],["l'appartement","flat / apartment",15,"appartement"],["la chambre","bedroom",12,"chambre"],["la cuisine","kitchen",10,"cuisine"],["la salle de bains","bathroom",10,"salle de bains","salle de bain"],
  ["le salon","living room",8,"salon"],["le jardin","garden",6,"jardin"],["la salle à manger","dining room",6,"salle à manger"],["le grenier","attic",3,"grenier"],["la cave","cellar",3,"cave"],["le garage","garage",3,"garage"],
  ["le HLM","council flat",2,"HLM"],["la mansarde","attic room",.4,"mansarde"]]),
FP("fr39","S.1","Name a French adjective to describe a town or neighbourhood.","branché",[
  ["tranquille","quiet / peaceful",12],["bruyant","noisy",10,"bruyante"],["propre","clean",8],["sale","dirty",8],["joli","pretty",8,"jolie"],["animé","lively",8,"animée","anime"],["grand","big",6,"grande"],["petit","small",6,"petite"],
  ["calme","calm",6],["moderne","modern",6],["historique","historic",5],["dangereux","dangerous",4,"dangereuse"],["pittoresque","picturesque",2],["branché","trendy",.4,"branchée","branche"]]),
FP("fr40","S.2","Name a school subject in French.","l'EMC",[
  ["les maths","maths",20,"maths","mathématiques","mathematiques"],["l'anglais","English",12,"anglais"],["le français","French",12,"français","francais"],["l'histoire","history",10,"histoire"],["la géographie","geography",8,"géographie","geo"],
  ["les sciences","science",8,"sciences"],["l'EPS","PE",6,"EPS","éducation physique","le sport"],["la musique","music",6,"musique"],["les arts plastiques","art",6,"arts plastiques","le dessin"],["l'informatique","computing",6,"informatique"],
  ["la chimie","chemistry",4,"chimie"],["la physique","physics",4,"physique"],["la biologie","biology",4,"biologie","SVT"],["l'espagnol","Spanish",4,"espagnol"],["la philosophie","philosophy",3,"philosophie","philo"],
  ["l'EMC","citizenship",.4,"EMC","enseignement moral et civique","instruction civique","éducation civique"]]),
FP("fr41","S.2","Name something in a classroom, in French.","le taille-crayon",[
  ["le stylo","pen",15,"stylo"],["le crayon","pencil",12,"crayon"],["le cahier","exercise book",12,"cahier"],["le livre","book",10,"livre"],["le tableau","board",10,"tableau"],["la table","table",6,"table"],["la chaise","chair",6,"chaise"],
  ["la règle","ruler",6,"règle","regle"],["la gomme","rubber / eraser",6,"gomme"],["la trousse","pencil case",6,"trousse"],["le sac","bag",4,"sac","cartable"],["la calculatrice","calculator",4,"calculatrice"],["l'ordinateur","computer",4,"ordinateur"],
  ["le taille-crayon","pencil sharpener",.4,"taille-crayon","taille crayon"]]),
FP("fr42","S.2","Name a word about the French school system.","le conseil de classe",[
  ["le lycée","sixth-form / high school",15,"lycée","lycee"],["le collège","secondary school (11–15)",12,"collège","college"],["le bac","baccalaureate",12,"bac","baccalauréat"],["l'école primaire","primary school",10,"école primaire","école"],
  ["la cantine","canteen",8,"cantine"],["la récré","break time",8,"récré","récréation","recre"],["le prof","teacher",8,"prof","professeur"],["l'élève","pupil",6,"élève","eleve"],["la rentrée","back to school",6,"rentrée","rentree"],
  ["le brevet","exam at 15",6,"brevet"],["la terminale","final year",4,"terminale"],["la seconde","first year of lycée",3,"seconde"],["l'internat","boarding school",2,"internat"],["le conseil de classe","class council",.4,"conseil de classe"]]),
FP("fr43","S.3","Name a job in French.","l'ébéniste",[
  ["le médecin","doctor",15,"médecin","medecin","docteur"],["le professeur","teacher",15,"professeur","prof","l'instituteur"],["l'avocat","lawyer",8,"avocat","avocate"],["l'infirmier","nurse",8,"infirmier","infirmière"],
  ["l'ingénieur","engineer",8,"ingénieur","ingenieur"],["le boulanger","baker",8,"boulanger","boulangère"],["le policier","police officer",6,"policier","policière","gendarme"],["le serveur","waiter",6,"serveur","serveuse"],
  ["le vendeur","shop assistant",6,"vendeur","vendeuse"],["le pompier","firefighter",5,"pompier"],["le dentiste","dentist",4,"dentiste"],["le coiffeur","hairdresser",4,"coiffeur","coiffeuse"],["le cuisinier","cook",4,"cuisinier","cuisinière","chef"],
  ["l'agriculteur","farmer",4,"agriculteur","fermier","fermière"],["le plombier","plumber",3,"plombier"],["l'ébéniste","cabinetmaker",.4,"ébéniste","ebeniste"]]),
FP("fr44","S.3","Name a French word about work or applying for a job.","le petit boulot",[
  ["le CV","CV",15,"CV","curriculum vitae"],["le salaire","salary / wages",12,"salaire"],["l'entretien","interview",10,"entretien"],["le stage","work experience / internship",10,"stage"],["le patron","boss",8,"patron","le chef"],
  ["le collègue","colleague",8,"collègue","collegue"],["le bureau","office",8,"bureau"],["l'emploi","job",8,"emploi","le travail","travail"],["à temps partiel","part-time",6,"temps partiel","travail à temps partiel"],
  ["la lettre de motivation","covering letter",6,"lettre de motivation"],["le chômage","unemployment",4,"chômage","chomage"],["le petit boulot","odd job / casual job",.4,"petit boulot","boulot"]]),
FP("fr45","S.3","Name a French adjective for a quality employers look for.","polyvalent",[
  ["travailleur","hard-working",15,"travailleuse"],["ponctuel","punctual",12,"ponctuelle"],["organisé","organised",10,"organisée","organise"],["motivé","motivated",10,"motivée","motive"],["responsable","responsible",8],
  ["poli","polite",6,"polie"],["honnête","honest",6,"honnete"],["sérieux","reliable / serious",6,"sérieuse"],["créatif","creative",5,"créative"],["patient","patient",4,"patiente"],["dynamique","dynamic",4],["polyvalent","versatile",.4,"polyvalente"]]),
FP("fr46","S.4","Name a social issue in French.","l'exclusion sociale",[
  ["la pauvreté","poverty",15,"pauvreté","pauvrete"],["le chômage","unemployment",12,"chômage","chomage"],["le racisme","racism",12,"racisme"],["le harcèlement","bullying / harassment",10,"harcèlement","harcelement"],
  ["les sans-abri","homeless people",10,"sans-abri","sans abri","SDF"],["la discrimination","discrimination",8,"discrimination"],["le sexisme","sexism",6,"sexisme"],["l'inégalité","inequality",6,"inégalité","les inégalités"],["la drogue","drugs",6,"drogue"],
  ["la violence","violence",6,"violence"],["l'alcoolisme","alcoholism",4,"alcoolisme"],["l'obésité","obesity",4,"obésité"],["l'exclusion sociale","social exclusion",.4,"exclusion sociale","exclusion"]]),
FP("fr47","S.4","Name a French phrase for a way to help other people.","parrainer un enfant",[
  ["faire du bénévolat","to volunteer",15,"bénévolat","benevolat","être bénévole"],["donner de l'argent","to give money",15,"donner"],["aider","to help",12,"aider les autres"],["faire un don","to make a donation",8,"un don"],
  ["travailler pour une association","to work for a charity",6,"une association","association"],["organiser une collecte","to organise a collection",4,"collecte"],["distribuer de la nourriture","to hand out food",4],["parrainer un enfant","to sponsor a child",.4,"parrainer"]]),
FP("fr48","S.4","Name a charity or organisation that helps people in France.","ATD Quart Monde",[
  ["les Restos du Cœur","",15,"restos du coeur","les restos"],["la Croix-Rouge","",15,"croix rouge","red cross"],["Médecins sans frontières","",12,"msf","medecins sans frontieres","doctors without borders"],["l'UNICEF","",6,"unicef"],
  ["Emmaüs","",6,"emmaus"],["le Secours populaire","",5,"secours populaire"],["Amnesty International","",4,"amnesty"],["le Téléthon","",4,"telethon"],["le Secours catholique","",3,"secours catholique"],["ATD Quart Monde","",.4,"atd"]], {bi:true}),
/* ---------- Sharing the planet ---------- */
FP("fr49","P.1","Name a French weather expression.","il grêle",[
  ["il fait beau","it's nice weather",20],["il pleut","it's raining",20],["il fait chaud","it's hot",15],["il fait froid","it's cold",15],["il neige","it's snowing",10],["il y a du vent","it's windy",10,"il fait du vent"],
  ["il y a du soleil","it's sunny",8,"il fait soleil"],["il fait mauvais","it's bad weather",8],["il y a des nuages","it's cloudy",6,"c'est nuageux","nuageux"],["il y a du brouillard","it's foggy",4,"brouillard"],
  ["il y a un orage","it's stormy",4,"orageux"],["il gèle","it's freezing",3,"il gele"],["il grêle","it's hailing",.4,"il grele"]]),
FP("fr50","P.1","Name a season or a weather noun in French.","le verglas",[
  ["l'été","summer",15,"été","ete"],["l'hiver","winter",15,"hiver"],["le printemps","spring",12,"printemps"],["l'automne","autumn",12,"automne"],["la pluie","rain",8,"pluie"],["la neige","snow",8,"neige"],["le soleil","sun",8,"soleil"],
  ["le vent","wind",6,"vent"],["le nuage","cloud",4,"nuage"],["l'orage","storm",4,"orage"],["la tempête","storm (gale)",3,"tempête","tempete"],["la canicule","heatwave",2,"canicule"],["le verglas","black ice",.4,"verglas"]]),
FP("fr51","P.1","Name a natural disaster in French.","la coulée de boue",[
  ["l'inondation","flood",15,"inondation","inondations"],["le tremblement de terre","earthquake",15,"tremblement de terre","séisme","seisme"],["l'ouragan","hurricane",10,"ouragan"],["la sécheresse","drought",8,"sécheresse","secheresse"],
  ["le feu de forêt","forest fire",8,"feu de forêt","incendie","incendie de forêt"],["le tsunami","tsunami",8,"tsunami"],["la tornade","tornado",6,"tornade"],["l'éruption volcanique","volcanic eruption",6,"éruption","eruption volcanique"],
  ["l'avalanche","avalanche",4,"avalanche"],["la canicule","heatwave",4,"canicule"],["le glissement de terrain","landslide",2,"glissement de terrain"],["la coulée de boue","mudslide",.4,"coulée de boue","coulee de boue"]]),
FP("fr52","P.2","Name a geographical feature in French.","la presqu'île",[
  ["la montagne","mountain",18,"montagne"],["la mer","sea",15,"mer"],["la forêt","forest",10,"forêt","foret"],["la plage","beach",10,"plage"],["la rivière","river",10,"rivière","riviere"],["le lac","lake",8,"lac"],["l'île","island",8,"île","ile"],
  ["le désert","desert",6,"désert","desert"],["la colline","hill",6,"colline"],["l'océan","ocean",6,"océan","ocean"],["le fleuve","major river",6,"fleuve"],["la vallée","valley",4,"vallée","vallee"],["le volcan","volcano",4,"volcan"],
  ["la falaise","cliff",3,"falaise"],["la presqu'île","peninsula",.4,"presqu'île","presqu ile","péninsule"]]),
FP("fr53","P.2","Name a French river, mountain range or region.","la Camargue",[
  ["la Seine","",15,"seine"],["les Alpes","",15,"alpes","the alps"],["la Loire","",10,"loire"],["le Mont Blanc","",10,"mont blanc","mont-blanc"],["les Pyrénées","",10,"pyrenees","pyrénées"],["le Rhône","",8,"rhone"],
  ["la Bretagne","",8,"bretagne","brittany"],["la Normandie","",8,"normandie","normandy"],["la Provence","",8,"provence"],["la Corse","",5,"corse","corsica"],["la Garonne","",4,"garonne"],["le Massif central","",4,"massif central"],
  ["les Vosges","",3,"vosges"],["le Jura","",2,"jura"],["la Camargue","",.4,"camargue"]], {bi:true}),
FP("fr54","P.2","Name a country where French is an official language.","le Vanuatu",[
  ["la France","France",20],["le Canada","Canada",15,"Québec","quebec"],["la Belgique","Belgium",12],["la Suisse","Switzerland",12],["le Sénégal","Senegal",6],["la Côte d'Ivoire","Ivory Coast",5,"cote d'ivoire"],
  ["le Luxembourg","Luxembourg",4],["Monaco","Monaco",4],["Haïti","Haiti",4],["le Cameroun","Cameroon",3],["Madagascar","Madagascar",3],["la RDC","DR Congo / Democratic Republic of the Congo",3,"RDC","république démocratique du congo","Congo"],
  ["le Mali","Mali",2],["le Vanuatu","Vanuatu",.4]],
  {bi:true, traps:[[["morocco","maroc","algeria","algérie","tunisia","tunisie","lebanon","liban"],"French is widely spoken there, but it isn't an official language."]]}),
FP("fr55","P.3","Name an environmental problem in French.","la désertification",[
  ["la pollution","pollution",20,"pollution"],["le réchauffement climatique","global warming",15,"réchauffement climatique","rechauffement climatique"],["le changement climatique","climate change",10,"changement climatique"],
  ["la déforestation","deforestation",10,"déforestation","deforestation"],["les déchets","waste / rubbish",8,"déchets","dechets"],["le plastique","plastic",6,"plastique"],["la pollution de l'air","air pollution",6,"pollution de l'air"],
  ["l'effet de serre","greenhouse effect",6,"effet de serre"],["les espèces menacées","endangered species",4,"espèces menacées","especes menacees"],["les pluies acides","acid rain",3,"pluies acides","pluie acide"],["la marée noire","oil spill",3,"marée noire","maree noire"],
  ["la désertification","desertification",.4,"désertification","desertification"]]),
FP("fr56","P.3","Name a way to protect the environment, in French.","covoiturer",[
  ["recycler","to recycle",20,"le recyclage","recyclage"],["éteindre la lumière","to turn off the light",10,"éteindre les lumières"],["prendre les transports en commun","to use public transport",10,"transports en commun"],
  ["aller à vélo","to cycle",8,"prendre le vélo"],["économiser l'eau","to save water",8],["trier les déchets","to sort the rubbish",8,"trier"],["planter des arbres","to plant trees",6],["acheter local","to buy local",4,"acheter bio","manger local"],
  ["utiliser des sacs réutilisables","to use reusable bags",4,"sacs réutilisables"],["prendre une douche au lieu d'un bain","to shower instead of bathing",4,"prendre une douche"],["composter","to compost",3],["covoiturer","to car-share",.4,"le covoiturage","covoiturage"]]),
FP("fr57","P.3","Name an animal in French.","le hérisson",[
  ["le chien","dog",20,"chien"],["le chat","cat",20,"chat"],["le cheval","horse",10,"cheval","chevaux"],["l'oiseau","bird",8,"oiseau"],["le poisson","fish",8,"poisson"],["le lapin","rabbit",6,"lapin"],["la vache","cow",6,"vache"],
  ["le cochon","pig",4,"cochon"],["la souris","mouse",4,"souris"],["le lion","lion",4,"lion"],["l'éléphant","elephant",4,"éléphant","elephant"],["le singe","monkey",4,"singe"],["l'ours","bear",4,"ours"],["la tortue","tortoise / turtle",3,"tortue"],
  ["le hérisson","hedgehog",.4,"hérisson","herisson"]]),
FP("fr58","P.4","Name a global issue in French.","la surpopulation",[
  ["la pauvreté","poverty",15,"pauvreté"],["la guerre","war",15,"guerre"],["la faim","hunger",12,"faim","la famine"],["le changement climatique","climate change",10,"changement climatique"],["le terrorisme","terrorism",8,"terrorisme"],
  ["l'immigration","immigration",6,"immigration","la migration"],["les droits de l'homme","human rights",6,"droits de l'homme","droits humains"],["les réfugiés","refugees",6,"réfugiés","refugies"],["l'accès à l'eau","access to water",4,"accès à l'eau"],
  ["la pandémie","pandemic",4,"pandémie","pandemie"],["le travail des enfants","child labour",4,"travail des enfants"],["la surpopulation","overpopulation",.4,"surpopulation"]]),
FP("fr59","P.4","Name an international organisation by its French name or initials.","l'OMC",[
  ["l'ONU","UN",20,"ONU","Nations unies"],["l'UE","EU",15,"UE","Union européenne"],["l'OTAN","NATO",8,"OTAN"],["l'OMS","WHO",8,"OMS","Organisation mondiale de la santé"],["l'UNESCO","UNESCO",6,"UNESCO"],
  ["la Croix-Rouge","Red Cross",6,"Croix-Rouge"],["MSF","Doctors Without Borders",6,"Médecins sans frontières"],["l'UNICEF","UNICEF",6,"UNICEF"],["la Francophonie","OIF",3,"Francophonie","Organisation internationale de la Francophonie"],
  ["le FMI","IMF",3,"FMI","Fonds monétaire international"],["l'OMC","WTO",.4,"OMC","Organisation mondiale du commerce"]]),
FP("fr60","P.4","Name a French word linked to rights, fairness or citizenship.","la laïcité",[
  ["la liberté","freedom / liberty",18,"liberté","liberte"],["l'égalité","equality",18,"égalité","egalite"],["la fraternité","fraternity / brotherhood",12,"fraternité","fraternite"],["la paix","peace",10,"paix"],["la justice","justice",8,"justice"],
  ["les droits","rights",8,"droits","droit"],["la tolérance","tolerance",6,"tolérance","tolerance"],["la solidarité","solidarity",6,"solidarité","solidarite"],["la démocratie","democracy",6,"démocratie","democratie"],["le vote","vote",4,"vote","voter"],
  ["la laïcité","secularism",.4,"laïcité","laicite"]]),
/* ---------- Grammar toolkit ---------- */
FP("fr61","G.1","Name an irregular French verb (infinitive).","naître",[
  ["être","to be",25,"etre"],["avoir","to have",25],["aller","to go",18],["faire","to do / make",15],["pouvoir","can / to be able",8],["vouloir","to want",8],["venir","to come",6],["prendre","to take",6],
  ["devoir","must / to have to",4],["savoir","to know (facts)",4],["voir","to see",4],["dire","to say",3],["mettre","to put",3],["boire","to drink",2],["naître","to be born",.4,"naitre"]],
  {traps:[[["manger","parler","jouer","regarder","finir","choisir","aimer"],"That one follows a regular pattern (-er or -ir)."]]}),
FP("fr62","G.1","Name a French verb that takes être in the passé composé.","décéder",[
  ["aller","to go",20,"je suis allé"],["venir","to come",12,"je suis venu"],["arriver","to arrive",10],["partir","to leave",10],["sortir","to go out",8],["entrer","to enter",6],["mourir","to die",6],["rester","to stay",6],
  ["tomber","to fall",6],["naître","to be born",4,"naitre"],["monter","to go up",4],["descendre","to go down",4],["retourner","to return",3],["devenir","to become",3],["revenir","to come back",3],["rentrer","to go home",3],
  ["tous les verbes pronominaux","all reflexive verbs",1,"verbes pronominaux","verbes réfléchis","se lever"],["décéder","to pass away",.4,"deceder"]],
  {traps:[[["avoir","faire","manger","prendre","voir","être","etre"],"That one takes avoir in the passé composé."]]}),
FP("fr63","G.1","Name a French tense or mood.","le futur antérieur",[
  ["le présent","present",20,"présent","present"],["le passé composé","perfect / past tense",20,"passé composé","passe compose"],["l'imparfait","imperfect",15,"imparfait"],["le futur simple","future",10,"futur simple","futur"],
  ["le futur proche","near future",8,"futur proche"],["le conditionnel","conditional",8,"conditionnel"],["l'impératif","imperative",6,"impératif","imperatif"],["le plus-que-parfait","pluperfect",4,"plus-que-parfait","plus que parfait"],
  ["le subjonctif","subjunctive",4,"subjonctif"],["le passé simple","past historic",3,"passé simple","passe simple"],["le futur antérieur","future perfect",.4,"futur antérieur","futur anterieur"]], {bi:true}),
FP("fr64","G.2","Name a French connective.","néanmoins",[
  ["mais","but",18],["et","and",15],["parce que","because",15],["donc","so / therefore",10],["aussi","also",8],["car","because / for",8],["puis","then",6],["alors","so / then",6],["cependant","however",6],
  ["ou","or",4],["par contre","on the other hand",4],["pourtant","yet / however",3],["bien que","although",2],["d'ailleurs","besides",2],["néanmoins","nevertheless",.4,"neanmoins"]]),
FP("fr65","G.2","Name a French phrase for giving an opinion.","je suis convaincu que",[
  ["je pense que","I think that",18,"je pense"],["à mon avis","in my opinion",18,"a mon avis"],["je crois que","I believe that",10,"je crois"],["je trouve que","I find that",10,"je trouve"],["j'adore","I love",8],
  ["je déteste","I hate",6,"je deteste"],["selon moi","according to me",6],["pour moi","for me",6],["d'après moi","in my view",4],["il me semble que","it seems to me that",2],["je suis convaincu que","I'm convinced that",.4,"je suis convaincue que","je suis convaincu"]]),
FP("fr66","G.2","Name a French adjective to say what you think of something.","époustouflant",[
  ["intéressant","interesting",15,"interessant","intéressante"],["ennuyeux","boring",12,"ennuyeuse"],["génial","great / brilliant",12,"geniale","genial"],["nul","rubbish",10,"nulle"],["super","super / great",8],
  ["difficile","difficult",8],["facile","easy",8],["amusant","fun",6,"amusante"],["chouette","nice / great",4],["passionnant","fascinating",3,"passionnante"],["barbant","dull",2,"barbante"],["époustouflant","breathtaking",.4,"epoustouflant","époustouflante"]]),
FP("fr67","G.3","Name a month in French.","thermidor",[
  ["janvier","January",8],["février","February",4,"fevrier"],["mars","March",4],["avril","April",4],["mai","May",4],["juin","June",4],["juillet","July",6],["août","August",4,"aout"],["septembre","September",4],
  ["octobre","October",3],["novembre","November",3],["décembre","December",6,"decembre"],["thermidor","a month of the French Revolutionary calendar",.4]]),
FP("fr68","G.3","Name a French word or phrase for a time of day.","l'aube",[
  ["midi","midday",15],["minuit","midnight",12],["le matin","morning",12,"matin"],["l'après-midi","afternoon",10,"après-midi","apres midi"],["le soir","evening",10,"soir"],["la nuit","night",8,"nuit"],
  ["et demie","half past",8],["et quart","quarter past",6],["moins le quart","quarter to",5],["l'aube","dawn",.4,"aube","l'aurore"]]),
FP("fr69","G.3","Name a French word for how often or when something happens.","désormais",[
  ["souvent","often",12],["toujours","always",12],["jamais","never",10,"ne jamais"],["parfois","sometimes",10],["tous les jours","every day",8],["quelquefois","sometimes (occasionally)",6],["rarement","rarely",6],
  ["une fois par semaine","once a week",6],["aujourd'hui","today",6,"aujourdhui"],["hier","yesterday",6],["demain","tomorrow",6],["désormais","from now on",.4,"desormais"]]),
FP("fr70","G.4","Name a French question word.","d'où",[
  ["qui","who",18],["où","where",15,"ou"],["que","what",15,"quoi","qu'est-ce que"],["quand","when",12],["comment","how",12],["pourquoi","why",12],["combien","how much / how many",10],["quel","which / what",8,"quelle","quels","quelles"],
  ["est-ce que","(yes/no question)",4],["lequel","which one",2,"laquelle"],["d'où","where from",.4,"d ou"]]),
FP("fr71","G.4","Name a French preposition.","parmi",[
  ["à","to / at",15,"a"],["de","of / from",12],["dans","in",12],["sur","on",10],["avec","with",10],["sous","under",8],["pour","for",8],["sans","without",6],["chez","at someone's house",6],
  ["entre","between",4],["devant","in front of",4],["derrière","behind",4,"derriere"],["après","after",4,"apres"],["avant","before",4],["pendant","during",3],["parmi","among",.4]]),
FP("fr72","G.4","Name a French pronoun.","dont",[
  ["je","I",15],["tu","you (informal)",12],["il","he / it",10],["elle","she / it",10],["nous","we",10],["vous","you (formal / plural)",10],["on","one / we",6],["ils","they (masculine)",6],["elles","they (feminine)",4],
  ["moi","me",4],["toi","you (stressed)",3],["me / te","me / you (object)",3,"me","te"],["le / la / les","him / her / them",3,"le","la","les"],["y","there",2],["en","some / of it",2],["dont","whose / of which",.4]]),
];

/* ================= a baguette in Paris ================= */
const BANDS = [
  {name:"La boulangerie",        zone:"La boulangerie · the bakery",        from:0,  to:40,  hue:36,  bg:["#3a2414","#4a2e18"]},
  {name:"La rue",                zone:"La rue · the street",               from:40, to:100, hue:28,  bg:["#4a2e18","#3a3a4a"]},
  {name:"Le café",               zone:"Le café",                            from:100,to:170, hue:0,   bg:["#3a3a4a","#4a4060"]},
  {name:"Les balcons",           zone:"Les balcons · the balconies",       from:170,to:250, hue:45,  bg:["#4a4060","#5a5a7a"]},
  {name:"Les toits de Paris",    zone:"Les toits de Paris · the rooftops", from:250,to:320, hue:210, bg:["#5a5a7a","#6a7aa0"]},
  {name:"Les quais de la Seine", zone:"Les quais de la Seine",             from:320,to:390, hue:150, bg:["#6a7aa0","#7a9ac0"]},
  {name:"L'Arc de Triomphe",     zone:"L'Arc de Triomphe",                  from:390,to:460, hue:40,  bg:["#7a9ac0","#8aaad0"]},
  {name:"Notre-Dame",            zone:"Notre-Dame",                        from:460,to:530, hue:220, bg:["#8aaad0","#c89a8a"]},
  {name:"Le ciel de Paris",      zone:"Le ciel de Paris · the sky",        from:530,to:600, hue:15,  bg:["#c89a8a","#6a4a7a"]},
  {name:"Le sommet",             zone:"Le sommet · the summit",            from:600,to:760, hue:270, bg:["#6a4a7a","#141030"]},
];
const len = p => 0.65 * Math.pow(507.7, p/700);          // 65 cm at the start, 330 m (the Eiffel Tower) at 700
function fmtM(m){
  if (m < 1) return Math.round(m*100) + " cm";
  if (m < 10) return m.toFixed(1).replace(".", ",") + " m";
  if (m < 1000) return Math.round(m).toLocaleString("fr-FR") + " m";
  return (m < 1e5 ? (m/1000).toFixed(1).replace(".", ",") : Math.round(m/1000).toLocaleString("fr-FR")) + " km";
}
const FACTS = [
  [-30,"une baguette fait environ 65 cm · a baguette is about 65 cm long"],[18,"la baguette est au patrimoine de l'UNESCO depuis 2022"],[48,"1 m · plus grande qu'un caniche · taller than a poodle"],
  [80,"les Français achètent environ 6 milliards de baguettes par an"],[108,"1,7 m · aussi grande qu'une personne · as tall as a person"],[140,"un café, une baguette et un croissant, s'il vous plaît"],
  [172,"3 m · plus grande qu'un bus parisien · taller than a Paris bus"],[204,"4 m · aussi grande qu'un réverbère · as tall as a street lamp"],[235,"Paris has about 2 million inhabitants"],
  [280,"les toits de Paris sont en zinc · Paris roofs are made of zinc"],[307,"10 m · un immeuble de trois étages · a three-storey building"],[350,"la Seine traverse Paris d'est en ouest"],
  [385,"20 m · aussi grande qu'un platane · as tall as a plane tree"],[430,"l'Arc de Triomphe honore les soldats de la Révolution et de l'Empire"],[488,"50 m · aussi grande que l'Arc de Triomphe !"],
  [503,"57 m · le premier étage de la tour Eiffel"],[524,"69 m · les tours de Notre-Dame"],[555,"Notre-Dame a rouvert ses portes en décembre 2024"],[582,"116 m · le deuxième étage de la tour Eiffel"],
  [620,"la tour Eiffel a été construite pour l'Exposition universelle de 1889"],[649,"210 m · la tour Montparnasse"],[680,"276 m · le sommet de la tour Eiffel"],
  [700,"330 m · AUSSI GRANDE QUE LA TOUR EIFFEL ! SACRÉ BLEU !"],[740,"plus grande que la tour Eiffel · taller than the Eiffel Tower"],
];
function wall(i, n, side){
  const r = srand(911 + i*37 + (side==="r"?13:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn) => { for (let y=20; y<n-20; y+=step) fn(y); };
  switch(i){
    case 0: rep(130, y=>{ s+=`<rect x="0" y="${y+80}" width="120" height="8" fill="#7a4a24"/>`; for (let k=0;k<4;k++) s+=`<rect x="${8+k*27}" y="${y+12}" width="12" height="68" rx="6" fill="#d9963e" transform="rotate(${k%2?6:-6} ${14+k*27} ${y+46})"/>`;
      s+=`<path d="M10 ${y+120} q20 -26 40 0 q-20 -8 -40 0z" fill="#e8b25a"/><path d="M62 ${y+120} q20 -26 40 0 q-20 -8 -40 0z" fill="#e8b25a"/>`; }); break;
    case 1: rep(220, y=>{ s+=`<circle cx="40" cy="${y+150}" r="20" fill="none" stroke="#2a2a2a" stroke-width="4"/><circle cx="96" cy="${y+150}" r="20" fill="none" stroke="#2a2a2a" stroke-width="4"/><path d="M40 ${y+150} l22 -30 h26 l8 30 M62 ${y+120} l-6 -12 h12" stroke="#c0392b" stroke-width="4" fill="none"/><rect x="60" y="${y+128}" width="30" height="14" rx="3" fill="#d9963e"/>`
      + `<ellipse cx="60" cy="${y+40}" rx="22" ry="16" fill="#f2f2f2"/><circle cx="82" cy="${y+28}" r="10" fill="#f2f2f2"/><circle cx="42" cy="${y+30}" r="9" fill="#f2f2f2"/><rect x="48" y="${y+52}" width="5" height="24" fill="#f2f2f2"/><rect x="68" y="${y+52}" width="5" height="24" fill="#f2f2f2"/><circle cx="85" cy="${y+26}" r="2" fill="#111"/>`; }); break;
    case 2: rep(200, y=>{ for (let k=0;k<6;k++) s+=`<rect x="${k*20}" y="${y}" width="20" height="34" fill="${k%2?"#c0392b":"#f4efe2"}"/>`; s+=`<path d="M0 ${y+34} q10 12 20 0 q10 12 20 0 q10 12 20 0 q10 12 20 0 q10 12 20 0 q10 12 20 0" fill="#c0392b"/>`
      + `<rect x="14" y="${y+60}" width="92" height="66" fill="#1a1a1a" stroke="#8a6a3a" stroke-width="4"/><text x="60" y="${y+84}" text-anchor="middle" font-family="Caveat,cursive" font-size="20" fill="#f4efe2">Menu</text><path d="M26 ${y+96} h68 M26 ${y+110} h50" stroke="#f4efe2" stroke-width="2" opacity=".6"/>`
      + `<rect x="0" y="${y+150}" width="120" height="4" fill="#d9c27a"/><rect x="50" y="${y+154}" width="6" height="30" fill="#2a2a2a"/>`; }); break;
    case 3: s+=`<rect width="120" height="${n}" fill="#d8ccb0" opacity=".16"/>`; rep(170, y=>{ s+=`<rect x="22" y="${y}" width="76" height="110" fill="#2a3a4a"/><rect x="26" y="${y+4}" width="32" height="102" fill="#9fc0d8" opacity=".35"/><rect x="62" y="${y+4}" width="32" height="102" fill="#9fc0d8" opacity=".35"/>`
      + `<rect x="8" y="${y}" width="14" height="110" fill="#4a6a4a"/><rect x="98" y="${y}" width="14" height="110" fill="#4a6a4a"/><rect x="4" y="${y+110}" width="112" height="6" fill="#1a1a1a"/>`
      + Array.from({length:12},(_,k)=>`<path d="M${8+k*9} ${y+116} v22" stroke="#1a1a1a" stroke-width="2"/>`).join("") + `<rect x="4" y="${y+136}" width="112" height="4" fill="#1a1a1a"/>`
      + Array.from({length:6},(_,k)=>`<circle cx="${14+k*18}" cy="${y+106}" r="5" fill="hsl(${r()*360} 70% 60%)"/>`).join(""); }); break;
    case 4: rep(150, y=>{ s+=`<path d="M0 ${y+120} L60 ${y+40} L120 ${y+120}z" fill="#6a7a90"/><path d="M0 ${y+120} L60 ${y+40} L120 ${y+120}" stroke="#9aaac0" stroke-width="3" fill="none"/>`
      + `<rect x="${f1(70+r()*20)}" y="${y+28}" width="14" height="40" fill="#b86a4a"/><rect x="${f1(30+r()*10)}" y="${y+76}" width="18" height="22" fill="#ffe08a" opacity=".85"/>`
      + `<ellipse cx="${f1(20+r()*80)}" cy="${y+18}" rx="8" ry="6" fill="#8a8a9a"/><circle cx="${f1(26+r()*80)}" cy="${y+14}" r="4" fill="#8a8a9a"/>`; }); break;
    case 5: rep(180, y=>{ s+=`<rect x="54" y="${y+60}" width="12" height="110" fill="#8a7a5a"/>`+[0,1,2,3].map(k=>`<circle cx="${f1(30+r()*60)}" cy="${f1(y+20+r()*70)}" r="${f1(22+r()*10)}" fill="hsl(${110+r()*30} 40% ${28+r()*12}%)"/>`).join("")
      + `<rect x="6" y="${y+150}" width="40" height="24" fill="#2a5a3a"/><path d="M6 ${y+150} l20 -10 l20 10" fill="#2a5a3a"/>`; }); break;
    case 6: { s+=`<rect width="120" height="${n}" fill="#e8dcc0" opacity=".08"/>`; const top = 40, base = n - 30;
      s+=`<rect x="${side==="l"?10:0}" y="${top}" width="110" height="${base-top}" fill="#e2d6b8"/><path d="M${side==="l"?120:0} ${base} V${top+220} q0 -160 ${side==="l"?-60:60} -170" fill="none" stroke="#c9b98f" stroke-width="10"/>`
      + `<rect x="${side==="l"?10:0}" y="${top}" width="110" height="40" fill="#cfc19c"/>` + Array.from({length:10},(_,k)=>`<rect x="${(side==="l"?16:6)+k*10}" y="${top+8}" width="6" height="24" fill="#b8a77d"/>`).join("")
      + `<path d="M${side==="l"?40:30} ${top+120} h50 v120 h-50z" fill="#d6c9a6" stroke="#b8a77d"/><circle cx="${side==="l"?65:55}" cy="${top+170}" r="14" fill="#b8a77d"/>`; } break;
    case 7: rep(380, y=>{ s+=`<rect x="20" y="${y+40}" width="80" height="300" fill="#b8aa8a"/><path d="M20 ${y+40} v-20 h80 v20" fill="#a8996e"/>`
      + [0,1,2].map(k=>`<path d="M${30+k*24} ${y+330} v-90 q10 -26 20 0 v90z" fill="#3a3a5a"/>`).join("") + `<circle cx="60" cy="${y+130}" r="30" fill="#3a4a8a" stroke="#d8ccb0" stroke-width="4"/>`
      + Array.from({length:8},(_,k)=>`<path d="M60 ${y+130} l${f1(Math.cos(k*Math.PI/4)*28)} ${f1(Math.sin(k*Math.PI/4)*28)}" stroke="#d8ccb0" stroke-width="2"/>`).join("")
      + `<path d="M30 ${y+40} v-40 l8 -16 l8 16 v40 M74 ${y+40} v-40 l8 -16 l8 16 v40" fill="#a8996e"/>`; }); break;
    case 8: rep(230, y=>{ s+=`<ellipse cx="${f1(30+r()*60)}" cy="${y+40}" rx="56" ry="18" fill="#fff" opacity=".35"/><ellipse cx="${f1(40+r()*40)}" cy="${y+34}" rx="34" ry="16" fill="#fff" opacity=".4"/>`
      + (r()<.5 ? `<path d="M60 ${y+110} a30 34 0 1 1 0.1 0z" fill="hsl(${r()*360} 70% 60%)" stroke="#fff" stroke-width="2"/><path d="M48 ${y+140} l6 26 h12 l6 -26" stroke="#5a3a1a" stroke-width="2" fill="none"/><rect x="52" y="${y+164}" width="16" height="12" fill="#8a5a2a"/>`
        : `<path d="M${f1(10+r()*40)} ${y+140} q10 -6 20 0 q10 -6 20 0" stroke="#2a2a3a" stroke-width="3" fill="none"/>`); }); break;
    case 9: rep(36, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${f1(y+r()*24)}" r="${f1(.8+r()*1.6)}" fill="#fff" class="${r()<.35?"blink":""}" style="animation-delay:${f1(r()*2)}s"/>`; });
      if (side==="r") s+=`<circle cx="70" cy="140" r="30" fill="#fff6d8"/><circle cx="82" cy="132" r="28" fill="#141030" opacity=".9"/>`; break;
  }
  return vwall(s, n, side);
}
/* the tip of the baguette: beret, eyes and a moustache */
function avatar(level, hue){
  const mouth = level >= 7 ? `<ellipse cx="0" cy="10" rx="4" ry="5" fill="#5a1a10"/>` : `<path d="M-4 9 q4 4 8 0" stroke="#5a1a10" stroke-width="2" fill="none"/>`;
  const s = `<path d="M-17 37 V-6 q0 -18 17 -18 q17 0 17 18 V37z" fill="#d9963e" stroke="#9a5a1e" stroke-width="2"/>
    <path d="M-10 -14 q10 -6 18 0 M-12 24 q12 -6 24 0" stroke="#f3cf8a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="0" cy="-22" rx="16" ry="6" fill="#1d2440"/><path d="M-12 -24 q12 -14 26 -2" fill="#1d2440"/><path d="M1 -31 v-5" stroke="#1d2440" stroke-width="3" stroke-linecap="round"/>
    ${level >= 4 ? `<circle cx="10" cy="-23" r="3" fill="#fff"/><circle cx="8" cy="-23" r="1.2" fill="#0055a4"/><circle cx="12" cy="-23" r="1.2" fill="#ef4135"/>` : ""}
    <circle cx="-6" cy="-6" r="3.6" fill="#fff"/><circle cx="6" cy="-6" r="3.6" fill="#fff"/><circle cx="-5.4" cy="-5.6" r="1.8" fill="#1a1a1a"/><circle cx="6.6" cy="-5.6" r="1.8" fill="#1a1a1a"/>
    <path d="M0 2 q-6 -3 -13 4 q6 -1 13 -1 q7 0 13 1 q-7 -7 -13 -4z" fill="#3a2414"/>${mouth}`;
  return avatarSVG(s);
}
/* how excited the baguette is: louder for rarer answers */
const SHOUT = {gem:"SACRÉÉÉ BLEUUU !!! MAGNIFIQUE !", rootkit:"SACRÉ BLEU !!!", trojan:"SACRÉ BLEU !", adware:"Sacré bleu !", spam:"sacré bleu…", blocked:"Zut alors…"};
function entity(t, c){
  const big = {gem:20, rootkit:22, trojan:19, adware:16, spam:13, blocked:15}[t], shake = t==="gem"||t==="rootkit" ? "fr-shake" : "";
  const eyes = t==="gem" ? `<path d="M-9 -6 l2 -5 l2 5 l-5 -3 h6z M3 -6 l2 -5 l2 5 l-5 -3 h6z" fill="#ffd85a"/>`
    : t==="spam" ? `<path d="M-10 -5 h7 M3 -5 h7" stroke="#1a1a1a" stroke-width="2.4"/>`
    : t==="blocked" ? `<path d="M-10 -7 l6 3 M10 -7 l-6 3" stroke="#1a1a1a" stroke-width="2.4"/><circle cx="-6" cy="-3" r="1.8" fill="#1a1a1a"/><circle cx="6" cy="-3" r="1.8" fill="#1a1a1a"/>`
    : `<circle cx="-6" cy="-5" r="4" fill="#fff"/><circle cx="6" cy="-5" r="4" fill="#fff"/><circle cx="-6" cy="-4.4" r="2" fill="#1a1a1a"/><circle cx="6" cy="-4.4" r="2" fill="#1a1a1a"/>`;
  const mouth = {gem:`<ellipse cx="0" cy="12" rx="8" ry="9" fill="#5a1a10"/>`, rootkit:`<ellipse cx="0" cy="11" rx="7" ry="8" fill="#5a1a10"/>`, trojan:`<ellipse cx="0" cy="10" rx="5" ry="6" fill="#5a1a10"/>`,
    adware:`<ellipse cx="0" cy="9" rx="3.5" ry="3.5" fill="#5a1a10"/>`, spam:`<path d="M-4 10 h8" stroke="#5a1a10" stroke-width="2.4"/>`, blocked:`<path d="M-5 12 q5 -5 10 0" stroke="#5a1a10" stroke-width="2.4" fill="none"/>`}[t];
  const tilt = t==="blocked" ? 24 : t==="spam" ? 8 : -6;
  const lines = t === "gem" ? ["SACRÉÉÉ BLEUUU !!!", "MAGNIFIQUE !"] : [SHOUT[t]];
  const longest = Math.max(...lines.map(l => l.length));
  const fs = Math.min(big, 206 / (longest * .64)), wide = Math.min(230, Math.round(longest * fs * .64 + 30));
  const bh = Math.round(lines.length * fs * 1.15 + 20), by = Math.max(4, Math.round(48 - bh/2)), W = 96 + wide;
  const flag = t==="gem" ? `<rect x="6" y="6" width="10" height="20" fill="#0055a4"/><rect x="16" y="6" width="10" height="20" fill="#fff"/><rect x="26" y="6" width="10" height="20" fill="#ef4135"/>` : "";
  const bg = t==="blocked" ? "#2a2f38" : "#fffaf0", ink = t==="blocked" ? "#b8c2cc" : t==="gem" ? "#0055a4" : "#c0392b";
  return `<svg width="${W}" height="104" viewBox="0 0 ${W} 104">${flag}
    <g class="${shake}" style="transform-origin:46px 60px"><g transform="translate(46 60) rotate(${tilt})">
      <rect x="-15" y="-30" width="30" height="76" rx="15" fill="#d9963e" stroke="${c}" stroke-width="2"/><path d="M-8 18 q8 -5 16 0 M-8 32 q8 -5 16 0" stroke="#f3cf8a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="0" cy="-30" rx="15" ry="6" fill="#1d2440"/><path d="M-11 -32 q11 -13 24 -2" fill="#1d2440"/>${eyes}<path d="M0 3 q-6 -3 -13 4 q6 -1 13 -1 q7 0 13 1 q-7 -7 -13 -4z" fill="#3a2414"/>${mouth}</g></g>
    <g class="${shake}"><rect x="90" y="${by}" width="${wide}" height="${bh}" rx="16" fill="${bg}" stroke="${c}" stroke-width="2.5"/>
      <path d="M92 ${by + bh/2 + 4} l-14 10 l18 -2z" fill="${bg}" stroke="${c}" stroke-width="2.5"/>
      <text x="${90 + wide/2}" y="${by + 10 + fs*.92}" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="${fs.toFixed(1)}" fill="${ink}">${lines.map((l,k)=>`<tspan x="${90 + wide/2}" dy="${k ? (fs*1.15).toFixed(1) : 0}">${l}</tspan>`).join("")}</text></g></svg>`;
}
/* a little Eiffel Tower in the corner, with the baguette measured against it */
const TOWER_SVG = `<svg viewBox="0 0 40 100" aria-hidden="true"><path d="M20 0 L21 8 L23 22 L26 42 L30 62 L36 100 H28 Q20 76 12 100 H4 L10 62 L14 42 L17 22 L19 8Z" fill="#8a6a4a"/><path d="M12 62 H28 M15 42 H25 M17.5 22 H22.5" stroke="#d8b27a" stroke-width="2.4"/></svg>`;
function gauge(at){
  let g = document.getElementById("gauge");
  if (!g){ g = document.createElement("div"); g.id = "gauge"; g.className = "fr-gauge"; g.innerHTML = `${TOWER_SVG}<i class="bg"><i></i></i><small></small>`; document.body.appendChild(g); }
  const m = len(at), pct = m / 330 * 100;
  g.querySelector(".bg i").style.height = Math.min(100, Math.max(1.5, pct)) + "%";
  g.classList.toggle("over", pct >= 100);
  g.querySelector("small").textContent = pct >= 100 ? `${(m/330).toFixed(1).replace(".", ",")}× la tour Eiffel` : `${pct < 1 ? pct.toFixed(1).replace(".", ",") : Math.round(pct)} % de la tour Eiffel`;
}
/* the Eiffel Tower itself: its floors sit at the heights the baguette reaches them (57 m, 116 m, 276 m, 330 m) */
function tower(pos){
  const top = pos(700), H = pos(300) - top, Wd = 220, cx = Wd/2;
  const yAt = p => (700 - p) * 14;
  const keys = [[0,1.5],[yAt(690),4],[yAt(680),9],[yAt(582),32],[yAt(503),58],[yAt(420),84],[H,110]];
  const hw = y => { for (let k=1; k<keys.length; k++) if (y <= keys[k][0]){ const [y0,w0] = keys[k-1], [y1,w1] = keys[k]; return w0 + (w1-w0) * (y-y0)/(y1-y0); } return 110; };
  let L = "", R = "";
  for (let y=0; y<=H; y+=40){ const w = hw(y); L += `${y?"L":"M"}${f1(cx-w)} ${y} `; R = `L${f1(cx+w)} ${y} ` + R; }
  const archTop = yAt(440);
  const outline = `${L}${R}Z M${cx-62} ${H} Q${cx} ${f1(archTop - (H-archTop)*.1)} ${cx+62} ${H}Z`;
  const floor = (p, extra) => { const y = yAt(p), w = hw(y) + extra; return `<rect x="${f1(cx-w)}" y="${f1(y-10)}" width="${f1(w*2)}" height="20" fill="#6a4a2a" stroke="#d8b27a" stroke-width="2"/>`; };
  let lights = ""; const r = srand(1889); for (let k=0; k<90; k++){ const y = r()*H, w = hw(y); lights += `<circle cx="${f1(cx + (r()*2-1)*w*.9)}" cy="${f1(y)}" r="${f1(1.5+r()*1.5)}" fill="#fff6c8" class="blink" style="animation-delay:${f1(r()*2)}s;animation-duration:${f1(.8+r()*1.4)}s"/>`; }
  return `<svg class="fr-tower" style="top:${top - 60}px;height:${H + 60}px" viewBox="0 -60 ${Wd} ${H + 60}" preserveAspectRatio="none" aria-hidden="true">
    <defs><pattern id="frLattice" width="14" height="22" patternUnits="userSpaceOnUse"><path d="M0 0 L14 22 M14 0 L0 22 M0 11 H14" stroke="#b8865a" stroke-width="1.1"/></pattern><clipPath id="frClip"><path d="${outline}" clip-rule="evenodd" fill-rule="evenodd"/></clipPath></defs>
    <path d="M${cx} -60 V0" stroke="#8a6a4a" stroke-width="4"/><circle cx="${cx}" cy="-60" r="6" fill="#ff5a4a" class="blink"/>
    <path d="${outline}" fill="rgb(70 46 28 / .35)" fill-rule="evenodd"/><rect width="${Wd}" height="${H}" fill="url(#frLattice)" clip-path="url(#frClip)" opacity=".75"/>
    <path d="${outline}" fill="none" stroke="#a07848" stroke-width="3" vector-effect="non-scaling-stroke"/>
    <path d="M${cx} 0 V${f1(archTop)}" stroke="#a07848" stroke-width="2" vector-effect="non-scaling-stroke" opacity=".6"/>
    ${floor(680, 6)}${floor(582, 10)}${floor(503, 14)}${lights}</svg>`;
}
registerSubject({
  key:"fr", name:"French ab initio", theme:"A baguette growing as tall as the Eiffel Tower", gemWord:"Baguette", gemTitle:"One in a Baguette", emoji:"🥖",
  blurb:"You're a 65 cm baguette in a Paris bakery. Each prompt has many correct answers, <b>in French</b>. <b>Obvious answers barely make you grow. Answers other players missed make you shoot up</b>, past poodles, cafés, rooftops and Notre-Dame, until you're taller than the Eiffel Tower. And the rarer the answer, the louder you shout <i>SACRÉ BLEU !</i>",
  noLevel:"SL · ab initio",
  axis:"up", arrow:"▲", avX:"50%",
  tiers:{gem:"One in a Baguette", rootkit:"Magnifique", trojan:"Très bien", adware:"Pas mal", spam:"Bof"}, blocked:"Zut alors", fw:"RASSIS",
  notes:{rootkit:"Magnifique ! Very few players found this one.", trojan:"Très bien ! Not the usual answer.", adware:"Pas mal. Fairly common, but not the first thing people say.", spam:"Bof. Everyone says this one first."},
  verbs:{cta:"Grandir ▲", inject:"Allez !", hint:"▲ answer in French · rarer answers grow taller ▲", count:"le four chauffe"},
  particles:["✦","•","♥","✿"], particleColor:"#ffd27a",
  meter:{label:"LONGUEUR", fmt:p=>fmtM(len(p)), zone:p=>fmtM(len(p)), tick:p=>fmtM(len(p)), gain:(a,b)=>`grow to ${fmtM(len(b))}`},
  start:{bg:"linear-gradient(0deg,#1a0e06,#3a2414)", label:"Start · 65 cm", zone:"La boulangerie", color:"#ffd27a",
    deco:n=>`<svg width="100%" height="${n}" aria-hidden="true"><rect x="0" y="300" width="100%" height="${n-300}" fill="#5a3418"/><rect x="0" y="296" width="100%" height="10" fill="#8a5a2a"/>`
      + `<rect x="0" y="306" width="100%" height="60" fill="#e8dcc0" opacity=".08"/><text x="50%" y="40" text-anchor="middle" font-family="Caveat,cursive" font-size="34" fill="#ffd27a">Boulangerie · Pâtisserie</text>`
      + [8,20,74,86].map((x,k)=>`<svg x="${x}%" y="${150 + (k%2)*40}" overflow="visible"><path d="M-30 0 q30 -34 60 0 q-30 -10 -60 0z" fill="#e8b25a"/><path d="M-20 -10 l6 6 M-6 -16 l4 8 M8 -14 l2 8" stroke="#a86a2a" stroke-width="2"/></svg>`).join("")
      + `<rect x="30%" y="275" width="40%" height="22" rx="6" fill="#c9a06a" opacity=".55"/></svg>`},
  endBg:"#0a0820",
  bands:BANDS, facts:FACTS, deco:(i,n)=>wall(i,n,"l")+wall(i,n,"r"), avatar, entity, gauge,
  shout:t=>SHOUT[t],
  extras:({pos, L})=>`${tower(pos)}<div class="baguette" style="bottom:${L - (pos(0) + 300)}px" aria-hidden="true"></div>`,
  beyond:"Au-dessus des nuages",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
