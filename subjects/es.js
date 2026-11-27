/* Spanish ab initio — a chilli pepper travels the Spanish-speaking world, from a tapas bar in Madrid through
   Barcelona, Andalusia and the Canary Islands, across the Atlantic to Mexico, Cuba, Colombia, Peru and the salt
   flats of Bolivia, all the way to Patagonia. It gets hotter as it goes: green, then orange, then red, then gold.
   Answers must be in Spanish: typing the English word tells you the Spanish one. Words from Spain and Latin America
   both count (coche, carro and auto; ordenador and computadora).
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

/* Spanish answers are matched without their article: "el padre", "un padre", "mi padre" and "padre" all count */
const ART = /^\s*(?:el|la|los|las|un|una|unos|unas|mi|mis|tu|tus|su|sus|nuestro|nuestra|nuestros|nuestras|vuestro|vuestra|vuestros|vuestras|lo)\s+/i;
const esPre = s => String(s).replace(ART, "");
const nrm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim().replace(/^(a|an|the) /,"").replace(/ /g,"");
/* SP(id, topic, question, gem, [[spanish, english, weight, ...other Spanish forms]]) */
function SP(id, spec, q, gem, items, o = {}){
  const ans = items.map(([es, en, w, ...al]) => {
    const all = [...new Set([es, ...al].flatMap(f => [f, esPre(f)]))];
    const same = !en || nrm(en) === nrm(esPre(es));
    return [same ? es : `${es} (${en})`, w, ...all];
  });
  const g = ans[items.findIndex(it => it[0] === gem)];
  if (!g) throw new Error("es: gem missing in " + id);
  const spanish = new Set(ans.flatMap(a => [a[0], ...a.slice(2)]).map(nrm));
  const traps = [], seen = new Set();
  items.forEach(([es, en]) => { if (!en) return;
    en.split(" / ").filter(e => !spanish.has(nrm(e)) && !seen.has(nrm(e))).forEach(e => { seen.add(nrm(e)); traps.push([[e], `Answer in Spanish! “${e}” is “${esPre(es)}”.`]); }); });
  const p = P(id, spec, q, g[0], ans, [...traps, ...(o.traps || [])]);
  p.pre = esPre;
  return p;
}

const PROMPTS = [
/* ---------- Identities ---------- */
SP("es01","I.1","Name a Spanish adjective that describes someone's personality.","despistado",[
  ["simpático","nice / friendly",20,"simpática","simpatico","simpatica"],["inteligente","intelligent / clever",15,"listo","lista"],["divertido","fun / funny",15,"divertida","gracioso","graciosa"],["tímido","shy",10,"tímida","timido","timida"],
  ["amable","kind",10],["perezoso","lazy",8,"perezosa","vago","vaga","flojo","floja"],["trabajador","hard-working",8,"trabajadora"],["serio","serious",6,"seria"],["hablador","chatty / talkative",5,"habladora"],
  ["antipático","unfriendly",5,"antipática","antipatico","antipatica"],["generoso","generous",4,"generosa"],["egoísta","selfish",3,"egoista"],["terco","stubborn",2,"terca","testarudo","testaruda","cabezota"],
  ["majo","lovely (in Spain)",2,"maja"],["despistado","absent-minded",.4,"despistada"]]),
SP("es02","I.1","Name a Spanish word for describing what someone looks like.","las pecas",[
  ["alto","tall",18,"alta"],["bajo","short",15,"baja","chaparro","chaparra"],["el pelo","hair",12,"pelo","el cabello","cabello"],["los ojos","eyes",12,"ojos"],["rubio","blond / blonde",10,"rubia","güero","güera"],
  ["moreno","dark-haired / dark-skinned",8,"morena"],["guapo","good-looking / handsome",8,"guapa","lindo","linda","bonito","bonita"],["delgado","slim / thin",6,"delgada","flaco","flaca"],
  ["las gafas","glasses",5,"gafas","los lentes","lentes","los anteojos","anteojos"],["pelirrojo","red-haired / ginger",4,"pelirroja"],["la barba","beard",4,"barba"],["rizado","curly",3,"rizada","crespo","crespa"],
  ["liso","straight (hair)",2,"lisa","lacio","lacia"],["las pecas","freckles",.4,"pecas"]]),
SP("es03","I.2","Name a family member in Spanish.","el bisabuelo",[
  ["la madre","mother / mum",22,"madre","mamá","mama"],["el padre","father / dad",22,"padre","papá","papa"],["el hermano","brother",18,"hermano"],["la hermana","sister",18,"hermana"],
  ["la abuela","grandmother",10,"abuela","abuelita"],["el abuelo","grandfather",10,"abuelo","abuelito"],["el tío","uncle",6,"tío","tio"],["la tía","aunt",6,"tía","tia"],["el primo","cousin",6,"primo","la prima","prima"],
  ["la hija","daughter",4,"hija"],["el hijo","son",4,"hijo"],["el sobrino","nephew",2,"sobrino"],["la sobrina","niece",2,"sobrina"],["el hermanastro","stepbrother / half-brother",2,"hermanastro","hermanastra","medio hermano","media hermana"],
  ["el padrastro","stepfather",2,"padrastro","la madrastra","madrastra"],["el bisabuelo","great-grandfather",.4,"bisabuelo","la bisabuela","bisabuela"]]),
SP("es04","I.2","Name a Spanish word or phrase about friendship and relationships.","la media naranja",[
  ["el amigo","friend",25,"amigo","la amiga","amiga","los amigos"],["el mejor amigo","best friend",12,"mejor amigo","la mejor amiga","mejor amiga"],["el novio","boyfriend",10,"novio"],["la novia","girlfriend",10,"novia"],
  ["llevarse bien","to get on well",8,"me llevo bien","nos llevamos bien"],["pelearse","to argue / to fight",6,"discutir","nos peleamos"],["la boda","wedding",6,"boda","el casamiento","casamiento"],["casarse","to get married",5],
  ["el matrimonio","marriage",3,"matrimonio"],["la confianza","trust",4,"confianza"],["el compañero","classmate / partner",4,"compañero","la compañera","compañera"],["soltero","single",2,"soltera"],
  ["la media naranja","other half / soulmate",.4,"media naranja","el alma gemela","alma gemela"]]),
SP("es05","I.3","Name a food in Spanish.","el mole",[
  ["el pan","bread",18,"pan"],["el queso","cheese",15,"queso"],["la manzana","apple",12,"manzana"],["el pollo","chicken",10,"pollo"],["el arroz","rice",10,"arroz"],["la tortilla","omelette / tortilla",10,"tortilla"],
  ["la paella","paella",8,"paella"],["el pescado","fish",8,"pescado"],["la carne","meat",8,"carne"],["el huevo","egg",6,"huevo","los huevos","huevos"],["los tacos","tacos",6,"taco","tacos"],
  ["las patatas","potatoes / chips",6,"patatas","las papas","papas","patatas fritas","papas fritas"],["el jamón","ham",5,"jamón","jamon","jamón serrano"],["la naranja","orange",4,"naranja"],
  ["el plátano","banana",4,"plátano","platano","la banana","banana"],["los churros","churros",4,"churro","churros"],["las empanadas","empanadas",3,"empanada","empanadas"],["el gazpacho","gazpacho",2,"gazpacho"],
  ["el mole","Mexican chilli and chocolate sauce",.4,"mole"]]),
SP("es06","I.3","Name a drink in Spanish.","la horchata",[
  ["el agua","water",20,"agua"],["el café","coffee",15,"café","cafe"],["la leche","milk",12,"leche"],["el zumo de naranja","orange juice",10,"zumo","el jugo","jugo","jugo de naranja"],["el té","tea",10,"té","te"],
  ["el chocolate caliente","hot chocolate",8,"chocolate caliente","chocolate"],["el vino","wine",6,"vino"],["la limonada","lemonade",5,"limonada"],["el refresco","soft drink / fizzy drink",5,"refresco","la gaseosa","gaseosa"],
  ["la cerveza","beer",4,"cerveza"],["el batido","milkshake / smoothie",3,"batido","el licuado","licuado"],["la sangría","sangria",3,"sangría","sangria"],["el mate","mate (herbal tea)",2,"mate","yerba mate"],
  ["la horchata","tiger-nut milk drink",.4,"horchata"]]),
SP("es07","I.4","Name a part of the body in Spanish.","la muñeca",[
  ["la cabeza","head",20,"cabeza"],["la mano","hand",15,"mano","las manos"],["el brazo","arm",12,"brazo"],["la pierna","leg",12,"pierna"],["el pie","foot",10,"pie","los pies"],["el ojo","eye",8,"ojo"],
  ["la boca","mouth",8,"boca"],["la nariz","nose",8,"nariz"],["el estómago","stomach",6,"estómago","estomago","la barriga","barriga","la panza","panza"],["la espalda","back",6,"espalda"],["el dedo","finger / toe",5,"dedo","los dedos"],
  ["la rodilla","knee",4,"rodilla"],["el corazón","heart",4,"corazón","corazon"],["el cuello","neck",3,"cuello"],["los dientes","teeth",3,"dientes","el diente","diente"],["la oreja","ear",3,"oreja","el oído","oído","oido"],
  ["la muñeca","wrist",.4,"muñeca","muneca"]]),
SP("es08","I.4","Name a Spanish word or phrase about health or staying healthy.","el botiquín",[
  ["la salud","health",15,"salud","sano","sana"],["hacer ejercicio","to exercise",15,"el ejercicio","ejercicio","hacer deporte"],["dormir bien","to sleep well",10,"dormir"],["beber agua","to drink water",8,"tomar agua"],
  ["el médico","doctor",10,"médico","medico","la médica","el doctor","doctor","la doctora"],["estar enfermo","to be ill",8,"enfermo","enferma"],["me duele","it hurts",8,"duele","me duele la cabeza","tengo dolor","el dolor"],
  ["la fiebre","fever / temperature",5,"fiebre"],["la gripe","flu",5,"gripe","la gripa","gripa"],["el hospital","hospital",4,"hospital"],["la farmacia","pharmacy / chemist's",4,"farmacia"],
  ["una dieta equilibrada","balanced diet",3,"dieta equilibrada","la dieta","dieta","comida sana"],["el estrés","stress",3,"estrés","estres"],["el botiquín","first-aid kit",.4,"botiquín","botiquin"]]),
/* ---------- Experiences ---------- */
SP("es09","E.1","Name a Spanish verb for something in your daily routine.","madrugar",[
  ["levantarse","to get up",18,"me levanto"],["despertarse","to wake up",12,"me despierto"],["ducharse","to shower",12,"me ducho","bañarse","me baño"],["desayunar","to have breakfast",12,"desayuno"],
  ["vestirse","to get dressed",8,"me visto"],["almorzar","to have lunch",8,"comer","como","almuerzo"],["cenar","to have dinner",8,"ceno"],["acostarse","to go to bed",8,"me acuesto"],
  ["lavarse los dientes","to brush your teeth",6,"cepillarse los dientes","me lavo los dientes"],["ir al colegio","to go to school",6,"voy al colegio","ir a la escuela","voy a la escuela","ir al instituto"],
  ["hacer los deberes","to do homework",5,"hacer la tarea","los deberes","deberes","la tarea","tarea"],["peinarse","to brush or comb your hair",3,"me peino"],["dormir la siesta","to have a nap",3,"la siesta","siesta"],
  ["madrugar","to get up early",.4,"madrugo"]]),
SP("es10","E.1","Name a household chore in Spanish.","tender la ropa",[
  ["limpiar","to clean",15,"limpiar la casa","limpio"],["hacer la cama","to make the bed",12,"hago la cama"],["lavar los platos","to wash the dishes",12,"fregar los platos","fregar","lavar la vajilla"],
  ["cocinar","to cook",10,"hacer la comida","cocino"],["poner la mesa","to set the table",8,"pongo la mesa"],["pasar la aspiradora","to vacuum / to hoover",8,"aspirar","la aspiradora"],
  ["ordenar mi habitación","to tidy my room",8,"ordenar","ordenar el cuarto","recoger mi cuarto","arreglar mi cuarto","ordenar mi cuarto"],["sacar la basura","to take out the rubbish",8,"la basura"],
  ["planchar","to iron",4,"plancho"],["barrer","to sweep",4],["hacer la compra","to do the shopping",5,"hacer las compras"],["lavar la ropa","to do the washing",4,"hacer la colada","poner la lavadora"],
  ["pasear al perro","to walk the dog",3,"sacar al perro"],["tender la ropa","to hang out the washing",.4,"tender"]]),
SP("es11","E.2","Name a hobby or free-time activity in Spanish.","jugar al mus",[
  ["jugar al fútbol","to play football",18,"el fútbol","fútbol","futbol","jugar fútbol","jugar a fútbol"],["leer","to read",12,"la lectura","leo"],["escuchar música","to listen to music",12,"la música","escuchar musica"],
  ["ver la tele","to watch TV",10,"ver la televisión","ver television","la tele","la televisión"],["bailar","to dance",8,"el baile","bailo"],["nadar","to swim",8,"la natación","natacion","nado"],
  ["jugar a los videojuegos","to play video games",8,"los videojuegos","videojuegos","jugar videojuegos"],["salir con amigos","to go out with friends",6,"salir","salir con mis amigos"],["ir al cine","to go to the cinema",6,"el cine","cine"],
  ["dibujar","to draw",4,"pintar","el dibujo"],["montar en bici","to ride a bike",4,"montar en bicicleta","andar en bici","el ciclismo"],["tocar la guitarra","to play the guitar",4,"tocar un instrumento","tocar el piano","la guitarra"],
  ["cocinar","to cook",3],["hacer senderismo","to go hiking",2,"el senderismo","senderismo"],["el ajedrez","chess",2,"ajedrez","jugar al ajedrez"],["jugar al mus","to play mus (a card game)",.4,"el mus","mus"]]),
SP("es12","E.2","Name a sport in Spanish.","la pelota vasca",[
  ["el fútbol","football / soccer",25,"fútbol","futbol"],["el baloncesto","basketball",15,"baloncesto","el básquetbol","básquetbol","basquetbol","el básquet","basquet"],["el tenis","tennis",12,"tenis"],
  ["la natación","swimming",10,"natación","natacion"],["el ciclismo","cycling",6,"ciclismo"],["el atletismo","athletics",5,"atletismo"],["el voleibol","volleyball",5,"voleibol","el vóley","voley","balonvolea"],
  ["el béisbol","baseball",5,"béisbol","beisbol"],["el balonmano","handball",4,"balonmano"],["el boxeo","boxing",3,"boxeo"],["el pádel","padel",4,"pádel","padel"],["el golf","golf",3,"golf"],["el rugby","rugby",2,"rugby"],
  ["el esquí","skiing",3,"esquí","esqui","esquiar"],["la pelota vasca","Basque pelota / jai alai",.4,"pelota vasca","el frontón","frontón","fronton"]]),
SP("es13","E.3","Name something you might pack or need on holiday, in Spanish.","el chubasquero",[
  ["la maleta","suitcase",18,"maleta","la valija","valija"],["el pasaporte","passport",15,"pasaporte"],["el bañador","swimsuit",10,"bañador","el traje de baño","traje de baño","la malla"],
  ["la crema solar","sun cream",10,"crema solar","el protector solar","protector solar","el bloqueador","bloqueador"],["las gafas de sol","sunglasses",10,"gafas de sol","los lentes de sol","lentes de sol","anteojos de sol"],
  ["la toalla","towel",8,"toalla"],["el billete","ticket",8,"billete","el boleto","boleto","el pasaje"],["la cámara","camera",6,"cámara","camara"],["el mapa","map",5,"mapa"],["el dinero","money",5,"dinero","la plata"],
  ["el móvil","mobile phone",5,"móvil","movil","el celular","celular"],["el cargador","charger",3,"cargador"],["la mochila","backpack / rucksack",5,"mochila"],["las chanclas","flip-flops",3,"chanclas","las chancletas","chancletas","las sandalias"],
  ["el impermeable","raincoat",3,"impermeable"],["el chubasquero","cagoule",.4,"chubasquero"]]),
SP("es14","E.3","Name a place to stay or visit on holiday, in Spanish.","el parador",[
  ["el hotel","hotel",20,"hotel"],["la playa","beach",18,"playa"],["el camping","campsite",10,"camping","acampar"],["el museo","museum",10,"museo"],["la montaña","mountains",8,"montaña","montana","las montañas"],
  ["el albergue","hostel",6,"albergue","el hostal","hostal"],["el apartamento","apartment / flat",6,"apartamento","el departamento"],["la piscina","swimming pool",6,"piscina","la alberca","alberca","la pileta","pileta"],
  ["el castillo","castle",5,"castillo"],["la catedral","cathedral",4,"catedral"],["el parque temático","theme park",4,"parque temático","parque de atracciones"],["la isla","island",4,"isla"],["el pueblo","village / town",3,"pueblo"],
  ["el parador","historic state-run hotel",.4,"parador"]]),
SP("es15","E.4","Name a festival or celebration in the Spanish-speaking world.","el Inti Raymi",[
  ["la Navidad","Christmas",20,"Navidad"],["el Día de Muertos","Day of the Dead",18,"Día de Muertos","dia de muertos","el Día de los Muertos","dia de los muertos"],["la Semana Santa","Holy Week / Easter",12,"Semana Santa","la Pascua"],
  ["el cumpleaños","birthday",10,"cumpleaños","cumpleanos"],["la Nochevieja","New Year's Eve",8,"Nochevieja","el Año Nuevo","año nuevo","fin de año"],["el Día de Reyes","Three Kings' Day / Epiphany",8,"Día de Reyes","los Reyes Magos","reyes magos","reyes"],
  ["La Tomatina","tomato fight",6,"Tomatina"],["Las Fallas","Valencia's fire festival",5,"Fallas"],["San Fermín","Pamplona's festival",4,"san fermin","los Sanfermines","sanfermines"],
  ["la quinceañera","fifteenth-birthday party",4,"quinceañera","quinceanera","los quince","fiesta de quince"],["la Feria de Abril","Seville's April Fair",3,"Feria de Abril","la feria"],["el carnaval","carnival",4,"carnaval"],
  ["el Inti Raymi","Inca festival of the sun",.4,"Inti Raymi"]]),
SP("es16","E.4","Name a Spanish word for something at a party or celebration.","el papel picado",[
  ["la fiesta","party",20,"fiesta"],["el regalo","present / gift",15,"regalo","los regalos"],["la tarta","cake",12,"tarta","el pastel","pastel","la torta","torta"],["las velas","candles",8,"velas","la vela"],
  ["la música","music",8,"música","musica"],["los globos","balloons",8,"globos","el globo"],["la piñata","piñata",8,"piñata","pinata"],["el baile","dancing / dance",6,"baile","bailar"],
  ["los fuegos artificiales","fireworks",6,"fuegos artificiales"],["las uvas","grapes (eaten at New Year)",4,"uvas","las doce uvas","doce uvas"],["el disfraz","fancy dress / costume",4,"disfraz","los disfraces"],
  ["la invitación","invitation",3,"invitación","invitacion"],["el desfile","parade",3,"desfile"],["el papel picado","cut-paper banners",.4,"papel picado"]]),
/* ---------- Human ingenuity ---------- */
SP("es17","H.1","Name a means of transport in Spanish.","la guagua",[
  ["el coche","car",20,"coche","el carro","carro","el auto","auto"],["el autobús","bus",18,"autobús","autobus","el bus","bus","el camión","el colectivo","colectivo"],["el tren","train",15,"tren"],
  ["el avión","plane",12,"avión","avion"],["la bicicleta","bike / bicycle",10,"bicicleta","la bici","bici"],["el metro","underground / subway",8,"metro","el subte","subte"],["el barco","boat / ship",8,"barco"],
  ["a pie","on foot",6,"ir a pie","caminar","andar"],["la moto","motorbike",6,"moto","la motocicleta","motocicleta"],["el taxi","taxi",5,"taxi"],["el tranvía","tram",3,"tranvía","tranvia"],
  ["el patinete","scooter",3,"patinete","el monopatín","monopatín","monopatin"],["el teleférico","cable car",2,"teleférico","teleferico"],["la guagua","bus (Canaries and Caribbean)",.4,"guagua"]]),
SP("es18","H.1","Name a Spanish word or phrase you'd use when travelling by public transport.","el andén",[
  ["el billete","ticket",20,"billete","el boleto","boleto","el pasaje","pasaje"],["la estación","station",15,"estación","estacion"],["la parada","stop",10,"parada","la parada de autobús"],["el horario","timetable",8,"horario"],
  ["de ida y vuelta","return",8,"ida y vuelta"],["de ida","single / one-way",6,"solo ida"],["el retraso","delay",6,"retraso","con retraso"],["la salida","departure",6,"salida","salir"],["la llegada","arrival",6,"llegada","llegar"],
  ["el asiento","seat",5,"asiento"],["el aeropuerto","airport",5,"aeropuerto"],["perder el tren","to miss the train",3,"perder el autobús"],["la taquilla","ticket office",3,"taquilla","la boletería","boletería","boleteria"],
  ["el andén","platform",.4,"andén","anden"]]),
SP("es19","H.2","Name a type of film, show or programme in Spanish.","la zarzuela",[
  ["la comedia","comedy",15,"comedia"],["la película de terror","horror film",12,"de terror","terror","la película de miedo","película de miedo"],["la película de acción","action film",12,"de acción","acción","accion"],
  ["los dibujos animados","cartoons",10,"dibujos animados","las caricaturas","caricaturas"],["la telenovela","soap opera",10,"telenovela","el culebrón","culebrón","culebron"],["el documental","documentary",8,"documental"],
  ["las noticias","the news",8,"noticias","el telediario","telediario","el noticiero","noticiero"],["el concurso","game show / quiz show",6,"concurso"],["la serie","series",8,"serie","las series"],
  ["la película romántica","romantic film",6,"romántica","romantica","película de amor"],["la ciencia ficción","science fiction",5,"ciencia ficción","ciencia ficcion"],["el reality","reality show",3,"reality","reality show"],
  ["el musical","musical",3,"musical"],["la zarzuela","Spanish light opera",.4,"zarzuela"]]),
SP("es20","H.2","Name a singer, band, actor or film-maker from the Spanish-speaking world.","Luis Buñuel",[
  ["Shakira",null,20],["Bad Bunny",null,18],["Rosalía",null,10,"rosalia"],["Enrique Iglesias",null,8],["Penélope Cruz",null,8,"penelope cruz"],["Antonio Banderas",null,8,"banderas"],
  ["Pedro Almodóvar",null,6,"almodóvar","almodovar"],["Guillermo del Toro",null,6,"del toro"],["Karol G",null,5],["Ricky Martin",null,5],["Luis Fonsi",null,5,"fonsi","Despacito"],["Gael García Bernal",null,4,"gael garcia bernal"],
  ["Celia Cruz",null,4],["Selena",null,3,"Selena Quintanilla"],["Luis Buñuel",null,.4,"buñuel","bunuel"]]),
SP("es21","H.3","Name a kind of media or a media word in Spanish.","la prensa rosa",[
  ["el periódico","newspaper",18,"periódico","periodico","el diario","diario"],["la televisión","television / TV",15,"televisión","television","la tele","tele"],["las redes sociales","social media",15,"redes sociales","las redes"],
  ["la radio","radio",10,"radio"],["la revista","magazine",10,"revista"],["las noticias","news",10,"noticias"],["el anuncio","advert / advertisement",8,"anuncio","la publicidad","publicidad","el comercial"],
  ["el periodista","journalist",6,"periodista","la periodista"],["el titular","headline",4,"titular"],["el blog","blog",3,"blog","el bloguero","bloguero","bloguera"],["el pódcast","podcast",3,"pódcast","podcast"],
  ["el influencer","influencer",3,"influencer","los influencers"],["las noticias falsas","fake news",3,"noticias falsas","los bulos","bulos","el bulo"],["la prensa rosa","celebrity gossip press",.4,"prensa rosa"]]),
SP("es22","H.3","Name a Spanish verb you'd use about the media or the internet.","tuitear",[
  ["leer","to read",15],["ver","to watch",12,"mirar"],["escuchar","to listen",10],["publicar","to post / to publish",10,"subir","colgar"],["compartir","to share",10],["buscar","to search",8,"buscar en internet","googlear"],
  ["descargar","to download",8,"bajar"],["navegar","to surf",6,"navegar por internet"],["chatear","to chat online",6],["comentar","to comment",5],["seguir","to follow",5,"sigo"],["informar","to inform / to report",4],
  ["dar me gusta","to like (a post)",3,"me gusta","dar like"],["tuitear","to tweet",.4,"twittear"]]),
SP("es23","H.4","Name a piece of technology in Spanish.","el ratón",[
  ["el móvil","mobile phone",20,"móvil","movil","el celular","celular","el teléfono","teléfono","telefono"],["el ordenador","computer",18,"ordenador","la computadora","computadora","el computador","computador"],
  ["el portátil","laptop",10,"portátil","portatil","la laptop","laptop"],["la tableta","tablet",10,"tableta","la tablet","tablet"],["internet","internet",8],["la consola","games console",6,"consola","la videoconsola","videoconsola"],
  ["los auriculares","headphones",6,"auriculares","los audífonos","audífonos","audifonos","los cascos","cascos"],["la pantalla","screen",6,"pantalla"],["el teclado","keyboard",4,"teclado"],["la impresora","printer",4,"impresora"],
  ["el cargador","charger",4,"cargador"],["la inteligencia artificial","artificial intelligence / AI",4,"inteligencia artificial","la IA","IA"],["el robot","robot",3,"robot"],["el wifi","wifi",3,"wifi","la red wifi"],
  ["el ratón","mouse",.4,"ratón","raton"]]),
SP("es24","H.4","Name an advantage or disadvantage of technology, in Spanish.","la brecha digital",[
  ["la comunicación","communication",15,"comunicación","comunicacion","comunicarse"],["la información","information",12,"información","informacion"],["es útil","it's useful",12,"útil","util"],["es rápido","it's fast",8,"rápido","rapido"],
  ["la adicción","addiction",10,"adicción","adiccion","adicto","enganchado"],["el ciberacoso","cyberbullying",8,"ciberacoso","el acoso","acoso"],["la privacidad","privacy",6,"privacidad"],
  ["perder el tiempo","to waste time",8,"la pérdida de tiempo","pérdida de tiempo","perdida de tiempo"],["el aislamiento","isolation",4,"aislamiento","aislado"],["es peligroso","it's dangerous",5,"peligroso","el peligro","peligro"],
  ["las clases en línea","online learning",4,"clases en línea","aprender en línea","clases online"],["el sedentarismo","inactivity",3,"sedentarismo","sedentario"],["la brecha digital","digital divide",.4,"brecha digital"]]),
/* ---------- Social organization ---------- */
SP("es25","S.1","Name a place in a town in Spanish.","el estanco",[
  ["la tienda","shop",15,"tienda"],["el supermercado","supermarket",15,"supermercado","el súper"],["el parque","park",15,"parque"],["el restaurante","restaurant",10,"restaurante"],["la biblioteca","library",8,"biblioteca"],
  ["la plaza","square",8,"plaza","la plaza mayor"],["la iglesia","church",8,"iglesia"],["el cine","cinema",8,"cine"],["el hospital","hospital",6,"hospital"],["el mercado","market",6,"mercado"],["la panadería","bakery",5,"panadería","panaderia"],
  ["la estación","station",5,"estación","estacion"],["el polideportivo","sports centre",4,"polideportivo","el centro deportivo","centro deportivo"],["el ayuntamiento","town hall",3,"ayuntamiento","la alcaldía","alcaldía","alcaldia"],
  ["el centro comercial","shopping centre / mall",5,"centro comercial"],["el estanco","tobacconist's",.4,"estanco"]]),
SP("es26","S.1","Name a Spanish word for describing your neighbourhood or giving directions.","la glorieta",[
  ["a la derecha","on the right / to the right / right",15,"derecha","gira a la derecha","dobla a la derecha"],["a la izquierda","on the left / to the left / left",15,"izquierda","gira a la izquierda","dobla a la izquierda"],
  ["todo recto","straight on",10,"todo derecho","sigue recto"],["cerca","near / close",10,"cerca de"],["lejos","far",8,"lejos de"],["tranquilo","quiet / calm",8,"tranquila"],["ruidoso","noisy",6,"ruidosa"],["la calle","street",8,"calle"],
  ["el barrio","neighbourhood",8,"barrio"],["al lado de","next to",5,"al lado"],["enfrente de","opposite",4,"enfrente"],["la esquina","corner",4,"esquina"],["el semáforo","traffic lights",3,"semáforo","semaforo"],
  ["la glorieta","roundabout",.4,"glorieta","la rotonda","rotonda"]]),
SP("es27","S.2","Name a school subject in Spanish.","el latín",[
  ["las matemáticas","maths",20,"matemáticas","matematicas","las mates","mates"],["el inglés","English",15,"inglés","ingles"],["la historia","history",12,"historia"],["las ciencias","science",10,"ciencias","la ciencia"],
  ["la educación física","PE",8,"educación física","educacion fisica","la gimnasia","gimnasia"],["el español","Spanish",8,"español","espanol","la lengua","lengua","el castellano","castellano"],["la geografía","geography",8,"geografía","geografia"],
  ["la biología","biology",6,"biología","biologia"],["la química","chemistry",6,"química","quimica"],["la física","physics",6,"física","fisica"],["el arte","art",6,"arte","el dibujo","dibujo"],["la música","music",5,"música","musica"],
  ["la informática","ICT / computing",5,"informática","informatica","la tecnología","tecnología","tecnologia"],["el francés","French",4,"francés","frances"],["el latín","Latin",.4,"latín","latin"]]),
SP("es28","S.2","Name a Spanish word for something at school or in the classroom.","el sacapuntas",[
  ["el profesor","teacher",18,"profesor","la profesora","profesora","el maestro","maestro","la maestra","maestra"],["el alumno","pupil / student",12,"alumno","la alumna","alumna","el estudiante","estudiante"],["el libro","book",12,"libro"],
  ["el bolígrafo","pen",10,"bolígrafo","boligrafo","el boli","boli","la pluma","pluma"],["el lápiz","pencil",10,"lápiz","lapiz"],["la mochila","school bag",8,"mochila"],["la pizarra","board / whiteboard",8,"pizarra","el pizarrón","pizarrón","pizarron"],
  ["el cuaderno","exercise book / notebook",8,"cuaderno"],["el examen","exam / test",8,"examen","la prueba"],["los deberes","homework",8,"deberes","la tarea","tarea"],["el recreo","break time",5,"recreo"],["el horario","timetable",4,"horario"],
  ["la regla","ruler",4,"regla"],["el uniforme","uniform",3,"uniforme"],["la goma","rubber / eraser",3,"goma","la goma de borrar","el borrador"],["el sacapuntas","pencil sharpener",.4,"sacapuntas"]]),
SP("es29","S.3","Name a job in Spanish.","el albañil",[
  ["el médico","doctor",18,"médico","medico","la médica","el doctor","doctor","la doctora"],["el profesor","teacher",18,"profesor","la profesora","profesora","el maestro","la maestra"],["el abogado","lawyer",10,"abogado","la abogada","abogada"],
  ["el enfermero","nurse",10,"enfermero","la enfermera","enfermera"],["el policía","police officer",10,"policía","policia","la policía"],["el ingeniero","engineer",8,"ingeniero","la ingeniera","ingeniera"],
  ["el camarero","waiter",8,"camarero","la camarera","camarera","el mesero","mesero","la mesera"],["el bombero","firefighter",6,"bombero","la bombera"],["el cocinero","cook / chef",6,"cocinero","la cocinera","cocinera","el chef","chef"],
  ["el dependiente","shop assistant",5,"dependiente","la dependienta","dependienta"],["el periodista","journalist",4,"periodista"],["el veterinario","vet",4,"veterinario","la veterinaria","veterinaria"],
  ["el agricultor","farmer",4,"agricultor","el granjero","granjero","la granjera"],["el fontanero","plumber",3,"fontanero","el plomero","plomero"],["el albañil","builder / bricklayer",.4,"albañil","albanil"]]),
SP("es30","S.3","Name a Spanish word about working life or applying for a job.","el enchufe",[
  ["el trabajo","work / job",20,"trabajo","trabajar","el empleo","empleo"],["el sueldo","salary / wages",12,"sueldo","el salario","salario"],["la oficina","office",10,"oficina"],["la entrevista","interview",10,"entrevista"],
  ["el jefe","boss",8,"jefe","la jefa","jefa"],["el currículum","CV",8,"currículum","curriculum","el currículo","el CV"],["la empresa","company",8,"empresa","la compañía"],["el paro","unemployment",5,"paro","el desempleo","desempleo","en paro"],
  ["los compañeros de trabajo","colleagues",5,"compañeros de trabajo","los colegas","colegas"],["las prácticas","work experience / internship",5,"prácticas","practicas"],["a tiempo parcial","part-time",4,"tiempo parcial","media jornada"],
  ["a tiempo completo","full-time",3,"tiempo completo","jornada completa"],["el enchufe","connections (string-pulling)",.4,"enchufe"]]),
SP("es31","S.4","Name a social issue in Spanish.","la España vaciada",[
  ["la pobreza","poverty",20,"pobreza"],["el racismo","racism",12,"racismo"],["el desempleo","unemployment",10,"desempleo","el paro","paro"],["la desigualdad","inequality",10,"desigualdad"],["las drogas","drugs",8,"drogas"],
  ["el machismo","sexism / machismo",8,"machismo","el sexismo","sexismo"],["la violencia","violence",8,"violencia"],["la inmigración","immigration",8,"inmigración","inmigracion","la migración","migración"],
  ["las personas sin hogar","homelessness",6,"sin hogar","los sin techo","sin techo"],["el acoso escolar","bullying",6,"acoso escolar","el bullying","bullying"],["la discriminación","discrimination",5,"discriminación","discriminacion"],
  ["el hambre","hunger",4,"hambre"],["la España vaciada","rural depopulation",.4,"España vaciada","la despoblación","despoblación","despoblacion"]]),
SP("es32","S.4","Name a Spanish word for a way to help others or improve society.","el comercio justo",[
  ["ayudar","to help",20,"la ayuda","ayuda"],["el voluntariado","volunteering",15,"voluntariado","el voluntario","voluntario","la voluntaria","hacer voluntariado"],["donar","to donate",10,"la donación","donación","donacion"],
  ["la igualdad","equality",10,"igualdad"],["la educación","education",8,"educación","educacion"],["respetar","to respect",6,"el respeto","respeto"],["la ONG","NGO / charity",8,"ONG","la organización benéfica","organización benéfica"],
  ["proteger","to protect",5,"la protección"],["la tolerancia","tolerance",4,"tolerancia"],["la solidaridad","solidarity",4,"solidaridad"],["el comercio justo","fair trade",.4,"comercio justo"]]),
/* ---------- Sharing the planet ---------- */
SP("es33","P.1","Name a Spanish expression for the weather.","está despejado",[
  ["hace sol","it's sunny",20,"hay sol","el sol"],["hace calor","it's hot",18,"calor"],["hace frío","it's cold",15,"hace frio","frío","frio"],["llueve","it's raining",15,"está lloviendo","esta lloviendo","la lluvia","lluvia"],
  ["nieva","it's snowing",10,"está nevando","la nieve","nieve"],["hace viento","it's windy",10,"hay viento","el viento","viento"],["hace buen tiempo","the weather's good",8,"buen tiempo"],["hace mal tiempo","the weather's bad",8,"mal tiempo"],
  ["está nublado","it's cloudy",8,"nublado","hay nubes"],["hay tormenta","there's a storm",5,"la tormenta","tormenta"],["hay niebla","it's foggy",4,"la niebla","niebla"],["graniza","it's hailing",2,"el granizo","granizo"],
  ["está despejado","the sky's clear",.4,"despejado"]]),
SP("es34","P.1","Name an extreme weather event or natural disaster in Spanish.","la DANA",[
  ["el terremoto","earthquake",18,"terremoto","el sismo","sismo","el temblor"],["el huracán","hurricane",15,"huracán","huracan"],["la inundación","flood",15,"inundación","inundacion","las inundaciones"],
  ["el incendio forestal","forest fire / wildfire",12,"incendio forestal","el incendio","incendio","los incendios"],["la sequía","drought",10,"sequía","sequia"],["la erupción volcánica","volcanic eruption",8,"erupción","erupcion","el volcán","volcán"],
  ["la ola de calor","heatwave",8,"ola de calor"],["el tsunami","tsunami",5,"tsunami","el maremoto","maremoto"],["el tornado","tornado",5,"tornado"],["la tormenta","storm",5,"tormenta"],["la avalancha","avalanche",3,"avalancha","el alud","alud"],
  ["el deslizamiento de tierra","landslide",3,"deslizamiento","el deslave","deslave","corrimiento de tierras"],["la DANA","cut-off low (torrential-rain storm)",.4,"DANA","la gota fría","gota fria"]]),
SP("es35","P.2","Name a geographical feature in Spanish.","el altiplano",[
  ["la montaña","mountain",18,"montaña","montana","el monte"],["el río","river",18,"río","rio"],["el mar","sea",15,"mar"],["la playa","beach",12,"playa"],["el lago","lake",10,"lago"],["la isla","island",8,"isla"],
  ["el bosque","forest / wood",8,"bosque"],["el desierto","desert",8,"desierto"],["el volcán","volcano",6,"volcán","volcan"],["la selva","jungle / rainforest",6,"selva"],["la costa","coast",5,"costa"],["el valle","valley",4,"valle"],
  ["la cascada","waterfall",4,"cascada","la catarata","catarata"],["la cordillera","mountain range",3,"cordillera","la sierra","sierra"],["el altiplano","high plateau",.4,"altiplano"]]),
SP("es36","P.2","Name a country where Spanish is an official language.","Guinea Ecuatorial",[
  ["España","Spain",20,"espana"],["México","Mexico",20,"mexico","Méjico"],["Argentina","Argentina",12],["Colombia","Colombia",12],["Perú","Peru",8],["Chile","Chile",8],["Cuba","Cuba",6],["Venezuela","Venezuela",6],
  ["Ecuador","Ecuador",4],["Bolivia","Bolivia",4],["Uruguay","Uruguay",3],["Paraguay","Paraguay",3],["Guatemala","Guatemala",3],["Costa Rica","Costa Rica",3],["Panamá","Panama",3],["Honduras","Honduras",2],
  ["El Salvador","El Salvador",2],["Nicaragua","Nicaragua",2],["la República Dominicana","Dominican Republic",2,"República Dominicana","republica dominicana"],["Puerto Rico","Puerto Rico",2],
  ["Guinea Ecuatorial","Equatorial Guinea",.4]]),
SP("es37","P.3","Name an environmental problem in Spanish.","los microplásticos",[
  ["la contaminación","pollution",20,"contaminación","contaminacion"],["el cambio climático","climate change",18,"cambio climático","cambio climatico","el calentamiento global","calentamiento global"],
  ["la basura","rubbish / waste",10,"basura","los residuos","residuos"],["la deforestación","deforestation",10,"deforestación","deforestacion","la tala de árboles"],["el plástico","plastic",8,"plástico","plastico","los plásticos"],
  ["la contaminación del aire","air pollution",6,"contaminación del aire","la polución","polución","polucion","el smog","smog"],["la extinción de especies","extinction",5,"extinción","extincion","especies en peligro"],
  ["el efecto invernadero","greenhouse effect",5,"efecto invernadero"],["la capa de ozono","ozone layer",3,"capa de ozono"],["la escasez de agua","water shortage",3,"escasez de agua","la falta de agua"],["los microplásticos","microplastics",.4,"microplásticos","microplasticos"]]),
SP("es38","P.3","Name a Spanish verb or phrase for protecting the environment.","compostar",[
  ["reciclar","to recycle",25,"el reciclaje","reciclaje"],["ahorrar energía","to save energy",12,"ahorrar","ahorrar agua","ahorrar energia"],["apagar las luces","to switch off the lights",10,"apagar","apagar la luz"],
  ["usar el transporte público","to use public transport",10,"el transporte público","transporte público","transporte publico"],["ir en bici","to cycle",6,"ir en bicicleta"],["reutilizar","to reuse",8,"reusar"],["reducir","to reduce",6],
  ["plantar árboles","to plant trees",6,"plantar","plantar arboles"],["cuidar el planeta","to look after the planet",5,"proteger la naturaleza","cuidar la naturaleza"],["usar menos plástico","to use less plastic",4,"menos plástico","bolsas reutilizables"],
  ["la energía solar","solar energy",4,"energía solar","energia solar","las energías renovables","energías renovables","renovables"],["compostar","to compost",.4,"el compost","compost","hacer compost"]]),
SP("es39","P.4","Name a global issue in Spanish.","el analfabetismo",[
  ["la guerra","war",18,"guerra","el conflicto","conflicto"],["la pobreza","poverty",15,"pobreza"],["el hambre","hunger",12,"hambre","la hambruna"],["el cambio climático","climate change",12,"cambio climático","cambio climatico"],
  ["los refugiados","refugees",8,"refugiados","el refugiado"],["la desigualdad","inequality",8,"desigualdad"],["los derechos humanos","human rights",8,"derechos humanos"],["la migración","migration",6,"migración","migracion","la inmigración"],
  ["la pandemia","pandemic",6,"pandemia","las enfermedades"],["el terrorismo","terrorism",4,"terrorismo"],["el agua potable","clean drinking water",4,"agua potable"],["el trabajo infantil","child labour",3,"trabajo infantil"],
  ["el analfabetismo","illiteracy",.4,"analfabetismo"]]),
SP("es40","P.4","Name an international organization, or a word for global cooperation, in Spanish.","los Objetivos de Desarrollo Sostenible",[
  ["la ONU","the UN / United Nations",18,"ONU","las Naciones Unidas","Naciones Unidas"],["la paz","peace",12,"paz"],["la Unión Europea","the EU / European Union",12,"Unión Europea","union europea","la UE"],["la Cruz Roja","the Red Cross",10,"Cruz Roja"],
  ["la ayuda humanitaria","humanitarian aid",8,"ayuda humanitaria"],["la cooperación","cooperation",6,"cooperación","cooperacion"],["UNICEF","UNICEF",6,"el UNICEF"],["Médicos Sin Fronteras","Doctors Without Borders",5,"medicos sin fronteras","MSF"],
  ["la OMS","the WHO / World Health Organization",5,"OMS","la Organización Mundial de la Salud"],["la globalización","globalization",4,"globalización","globalizacion"],["Amnistía Internacional","Amnesty International",3,"amnistia internacional"],
  ["los Objetivos de Desarrollo Sostenible","Sustainable Development Goals / SDGs",.4,"Objetivos de Desarrollo Sostenible","los ODS","ODS"]]),
/* ---------- Grammar ---------- */
SP("es41","G.1","Name a Spanish verb that is irregular in the present tense.","caber",[
  ["ser","to be",22,"soy","es"],["ir","to go",18,"voy"],["tener","to have",15,"tengo"],["estar","to be (states and places)",12,"estoy"],["hacer","to do / to make",10,"hago"],["poder","to be able / can",8,"puedo"],
  ["querer","to want",8,"quiero"],["decir","to say",6,"digo"],["salir","to go out",5,"salgo"],["venir","to come",5,"vengo"],["poner","to put",4,"pongo"],["dormir","to sleep",4,"duermo"],["saber","to know (facts)",4,"sé"],
  ["conocer","to know (people and places)",3,"conozco"],["oír","to hear",2,"oir","oigo"],["caber","to fit",.4,"quepo"]]),
SP("es42","G.1","Name a Spanish tense or verb form.","el pluscuamperfecto",[
  ["el presente","present",22,"presente"],["el pretérito indefinido","preterite / simple past",15,"pretérito indefinido","indefinido","el pretérito","pretérito","preterito"],["el futuro","future",12,"futuro","futuro simple"],
  ["el imperfecto","imperfect",10,"imperfecto","pretérito imperfecto"],["el pretérito perfecto","present perfect",8,"pretérito perfecto","perfecto"],["el futuro próximo","near future",8,"futuro próximo","futuro proximo","ir a + infinitivo"],
  ["el condicional","conditional",6,"condicional"],["el imperativo","imperative / command",6,"imperativo"],["el gerundio","gerund",5,"gerundio","presente continuo"],["el infinitivo","infinitive",5,"infinitivo"],
  ["el subjuntivo","subjunctive",3,"subjuntivo"],["el participio","past participle",3,"participio"],["el pluscuamperfecto","pluperfect",.4,"pluscuamperfecto"]]),
SP("es43","G.2","Name a Spanish connective (linking word).","no obstante",[
  ["y","and",20],["pero","but",18],["porque","because",18],["también","also / too",10,"tambien"],["entonces","so / then",8],["además","furthermore / besides",8,"ademas"],["sin embargo","however",8],["después","afterwards / later",6,"despues","luego"],
  ["o","or",5],["por eso","that's why",5,"por lo tanto"],["cuando","when",5],["aunque","although",4],["mientras","while",3],["por un lado","on the one hand",3,"por otro lado"],["no obstante","nevertheless",.4]]),
SP("es44","G.2","Name a Spanish phrase for giving an opinion.","a mi modo de ver",[
  ["me gusta","I like",22,"me gustan"],["creo que","I think that / I believe",15,"creo"],["pienso que","I think",12,"pienso"],["en mi opinión","in my opinion",12,"en mi opinion"],["me encanta","I love",10,"me encantan"],
  ["no me gusta","I don't like",10,"no me gustan"],["odio","I hate",6,"detesto"],["prefiero","I prefer",8],["me parece","it seems to me",5,"me parece que"],["para mí","for me",5,"para mi"],["estoy de acuerdo","I agree",5,"de acuerdo"],
  ["me interesa","it interests me",3],["desde mi punto de vista","from my point of view",3,"a mi parecer"],["a mi modo de ver","the way I see it",.4]]),
SP("es45","G.3","Name a Spanish word or phrase for how often you do something.","cada dos por tres",[
  ["siempre","always",20],["a veces","sometimes",18],["nunca","never",15,"jamás","jamas"],["todos los días","every day",12,"todos los dias","cada día","cada dia","a diario"],
  ["a menudo","often",8,"con frecuencia","frecuentemente","muchas veces"],["normalmente","normally / usually",8,"generalmente","por lo general"],["de vez en cuando","from time to time",6],["una vez a la semana","once a week",5,"una vez por semana"],
  ["casi nunca","hardly ever",5],["rara vez","rarely",3,"raramente"],["cada dos por tres","every five minutes (idiom)",.4]]),
SP("es46","G.3","Name a Spanish word for a time of day or a time expression.","la madrugada",[
  ["hoy","today",15],["mañana","tomorrow",15,"manana"],["ayer","yesterday",12],["la tarde","afternoon / evening",10,"por la tarde"],["la noche","night",10,"por la noche"],["el fin de semana","weekend",10,"fin de semana"],
  ["ahora","now",6],["más tarde","later",5,"mas tarde"],["la semana","week",5,"la semana que viene","la próxima semana"],["por la mañana","in the morning",8],["el mediodía","midday / noon",4,"mediodía","mediodia"],["anoche","last night",4],
  ["pasado mañana","the day after tomorrow",3,"pasado manana"],["la medianoche","midnight",3,"medianoche"],["la madrugada","the early hours",.4,"madrugada"]]),
SP("es47","G.4","Name a Spanish question word.","¿adónde?",[
  ["¿qué?","what?",20,"qué","que"],["¿dónde?","where?",15,"dónde","donde"],["¿cuándo?","when?",12,"cuándo","cuando"],["¿quién?","who?",12,"quién","quien","quiénes"],["¿cómo?","how?",12,"cómo","como"],
  ["¿por qué?","why?",12,"por qué","por que"],["¿cuánto?","how much? / how many?",8,"cuánto","cuanto","cuántos","cuánta","cuántas"],["¿cuál?","which?",6,"cuál","cual","cuáles"],["¿de dónde?","where from?",3,"de dónde","de donde"],
  ["¿adónde?","where to?",.4,"adónde","adonde"]]),
SP("es48","G.4","Name a Spanish preposition.","tras",[
  ["en","in / on",20],["de","of / from",18],["con","with",15],["a","to / at",12],["para","for / in order to",12],["por","by / through",10],["sin","without",8],["entre","between",6],["sobre","about / on top of",6],
  ["desde","since",5],["hasta","until / as far as",5],["delante de","in front of",4,"delante"],["detrás de","behind",4,"detrás","detras de"],["debajo de","under / underneath",4,"debajo","bajo"],["encima de","on top",3,"encima"],
  ["hacia","towards",2],["tras","after",.4]]),
];

/* ================= across the Spanish-speaking world (sideways) ================= */
const BANDS = [
  {name:"Madrid",            zone:"Madrid",                    from:0,  to:40,  hue:10,  bg:["#3a1408","#5a2410"]},
  {name:"Barcelona",         zone:"Barcelona",                 from:40, to:100, hue:200, bg:["#5a2410","#1a3a5a"]},
  {name:"Andalucía",         zone:"Andalucía",                 from:100,to:170, hue:30,  bg:["#1a3a5a","#c8743a"]},
  {name:"Las Islas Canarias",zone:"Las Islas Canarias y el Atlántico", from:170,to:250, hue:200, bg:["#c8743a","#2a6a9a"]},
  {name:"México",            zone:"México",                    from:250,to:320, hue:320, bg:["#2a6a9a","#7a1a5a"]},
  {name:"Cuba",              zone:"Cuba y el Caribe",          from:320,to:390, hue:175, bg:["#7a1a5a","#1a8a8a"]},
  {name:"Colombia",          zone:"Colombia",                  from:390,to:460, hue:110, bg:["#1a8a8a","#2a6a2a"]},
  {name:"Perú",              zone:"Perú y los Andes",          from:460,to:530, hue:40,  bg:["#2a6a2a","#6a7a8a"]},
  {name:"Bolivia y Chile",   zone:"El Salar de Uyuni",         from:530,to:600, hue:330, bg:["#6a7a8a","#9ac8f0"]},
  {name:"Patagonia",         zone:"La Patagonia",              from:600,to:760, hue:195, bg:["#9ac8f0","#d8eefa"]},
];
// rough kilometres travelled from Madrid at each band boundary
const KNOTS = [[0,0],[40,505],[100,1350],[170,2700],[250,11200],[320,13000],[390,15450],[460,17750],[530,18750],[600,20000],[760,22750]];
function kmAt(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1) return y0 + (Math.max(p, 0) - p0) * (y1 - y0) / (p1 - p0); }
}
const dots = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");     // Spanish style: 22.750
const fmtK = p => `${dots(kmAt(p))} km`;
const FACTS = [
  [-30,"¡Hola! You start at a tapas bar in Madrid"],[12,"Madrid is about 650 m above sea level"],[30,"about 500 million people speak Spanish as their first language"],
  [60,"Barcelona: Gaudí's Sagrada Família has been under construction since 1882"],[90,"in Catalonia people speak Catalan as well as Spanish"],
  [125,"the Alhambra in Granada was a palace of Al-Andalus"],[155,"el flamenco comes from Andalusia"],[190,"el Teide, on Tenerife, is Spain's highest peak (3.715 m)"],
  [230,"Columbus stopped in the Canary Islands on his way across the Atlantic in 1492"],[265,"Mexico has more Spanish speakers than any other country"],[300,"el Día de Muertos: families welcome back the spirits of the dead"],
  [340,"in Cuba, Puerto Rico and the Canaries a bus is a guagua"],[372,"Havana's old town is a UNESCO World Heritage Site"],[410,"Colombia is famous for coffee and for Gabriel García Márquez"],
  [445,"Cartagena's walled city is on the Caribbean coast"],[480,"Machu Picchu was built by the Incas in the 15th century"],[515,"millions of people in the Andes speak Quechua as well as Spanish"],
  [550,"el Salar de Uyuni is the largest salt flat in the world"],[585,"the Atacama Desert in Chile is one of the driest places on Earth"],[625,"in Argentina and Uruguay people say vos instead of tú"],
  [670,"the Perito Moreno glacier in Patagonia"],[720,"Ushuaia calls itself el fin del mundo: the end of the world"],
];
const GR = 340;
function scene(i, len){
  const r = srand(733 + i*41); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#7a3a1a","#8a5a3a","#c8a060","#3a3020","#a85a2a","#c8b080","#3a6a2a","#4a5a3a","#f4f4f0","#5a6a5a"][i];
  if (i !== 3 && i !== 8) s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/><path d="M0 ${GR} H${len}" stroke="rgb(255 255 255 / .2)" stroke-width="2"/>`;
  const palm = (x, h) => `<path d="M${x} ${GR} q6 ${-h/2} 2 ${-h}" stroke="#6a4a2a" stroke-width="7" fill="none"/>` + [-60,-25,10,45,80].map(a=>`<path d="M${x+2} ${GR-h} q${f1(Math.cos(a*Math.PI/180)*30)} ${f1(Math.sin(a*Math.PI/180)*18 - 12)} ${f1(Math.cos(a*Math.PI/180)*52)} ${f1(Math.sin(a*Math.PI/180)*30 + 6)}" stroke="#2a8a3a" stroke-width="6" fill="none" stroke-linecap="round"/>`).join("");
  switch(i){
    case 0: // Madrid: apartment blocks with iron balconies, and red and yellow bunting
      each(150, x=>{ const h = f1(170+r()*60), c = ["#d8a060","#e8c890","#c8704a","#f0dcb0"][Math.floor(r()*4)];
        s+=`<rect x="${x}" y="${f1(GR-h)}" width="130" height="${h}" fill="${c}"/>`;
        for (let wy = GR-h+20; wy < GR-40; wy += 46) for (let wx = x+14; wx < x+120; wx += 38){ s+=`<rect x="${wx}" y="${f1(wy)}" width="22" height="30" fill="#2a3a2a"/><rect x="${wx-3}" y="${f1(wy+26)}" width="28" height="3" fill="#1a1a1a"/><path d="M${wx-3} ${f1(wy+18)} h28 M${wx+2} ${f1(wy+18)} v8 M${wx+9} ${f1(wy+18)} v8 M${wx+16} ${f1(wy+18)} v8" stroke="#1a1a1a" stroke-width="1.5"/>`; }
        s+=`<path d="M${x} 70 q65 26 130 0" stroke="#5a3a1a" stroke-width="1.5" fill="none"/>` + [0,1,2,3,4].map(k=>`<path d="M${x+10+k*26} ${f1(74+Math.sin((k+.5)/5*Math.PI)*12)} l10 0 l-5 12z" fill="${k%2?"#ffc400":"#c60b1e"}"/>`).join(""); }, 20);
      s += `<rect x="30" y="${GR-70}" width="110" height="36" rx="4" fill="#c60b1e"/><text x="85" y="${GR-45}" text-anchor="middle" font-size="18" font-weight="700" fill="#ffc400" font-family="Georgia,serif">TAPAS</text>`;
      break;
    case 1: // Barcelona: the spires of the Sagrada Família and Gaudí's broken-tile mosaics
      each(380, x=>{ [0,1,2,3].forEach(k=>{ const h = 220 + (k===1||k===2?50:0), cx = x+30+k*36;
        s+=`<path d="M${cx-14} ${GR-60} L${cx-10} ${GR-h} q10 -24 20 0 L${cx+14} ${GR-60}z" fill="#c8a878" stroke="#8a6a4a" stroke-width="1.5"/>` + [0,1,2,3,4].map(j=>`<ellipse cx="${cx}" cy="${GR-90-j*30}" rx="3" ry="6" fill="#5a3a2a"/>`).join("") + `<circle cx="${cx}" cy="${GR-h-14}" r="5" fill="#ffd25a"/>`; });
        s+=`<rect x="${x}" y="${GR-60}" width="170" height="60" fill="#b8986a"/>`; }, 40);
      each(30, x=>{ s+=`<rect x="${x}" y="${GR+8}" width="${f1(10+r()*14)}" height="${f1(8+r()*10)}" fill="${["#2a7ac0","#e8b030","#3ab060","#e8e2d0","#c0392b"][Math.floor(r()*5)]}" transform="rotate(${f1((r()-.5)*30)} ${x} ${GR+12})"/>`; }, 4);
      break;
    case 2: // Andalucía: horseshoe arches of the Alhambra and orange trees
      s += `<rect x="0" y="${GR-170}" width="${len}" height="170" fill="#f0e2c4"/>`;
      each(90, x=>{ s+=`<path d="M${x} ${GR} V${GR-80} a28 30 0 1 1 56 0 V${GR}z" fill="#3a2414"/><path d="M${x-4} ${GR-86} a32 34 0 1 1 64 0" stroke="#b8743a" stroke-width="4" fill="none"/>`
        + `<path d="M${x-10} ${GR-150} h76" stroke="#2a7a9a" stroke-width="6" stroke-dasharray="6 4"/>`; }, 20);
      each(260, x=>{ s+=`<path d="M${x+40} ${GR} V${GR-40}" stroke="#6a4a2a" stroke-width="6"/><circle cx="${x+40}" cy="${GR-58}" r="26" fill="#2a7a3a"/>` + [0,1,2,3,4,5].map(()=>`<circle cx="${f1(x+22+r()*36)}" cy="${f1(GR-74+r()*30)}" r="4" fill="#ff9a1a"/>`).join(""); }, 70);
      break;
    case 3: { // Las Canarias: Mount Teide and palms, then the Atlantic with a caravel
      const shore = len * .35;
      s += `<rect x="0" y="${GR}" width="${f1(shore)}" height="${420-GR}" fill="#3a3020"/><rect x="${f1(shore)}" y="${GR-6}" width="${f1(len-shore)}" height="${426-GR}" fill="#1a5a8a"/>`
        + `<path d="M20 ${GR} L${f1(shore*.45)} ${GR-230} L${f1(shore*.9)} ${GR}z" fill="#5a4a3a"/><path d="M${f1(shore*.45-34)} ${GR-170} L${f1(shore*.45)} ${GR-230} L${f1(shore*.45+34)} ${GR-170} q-17 10 -34 0 q-17 10 -34 0z" fill="#f4f4f4"/>`
        + palm(f1(shore*.85), 120) + palm(f1(shore*.7), 100);
      for (let x = shore; x < len; x += 40) s += `<path class="wave" d="M${f1(x)} ${GR+10} q10 -6 20 0 t20 0" stroke="#cfe8ff" stroke-width="2" fill="none" opacity=".6"/>`;
      const sx = f1(shore + (len - shore) * .55);
      s += `<g class="fl"><path d="M${sx} ${GR-4} h120 l-16 24 h-90z" fill="#6a3a1a"/><path d="M${+sx+40} ${GR-4} v-110 M${+sx+82} ${GR-4} v-90" stroke="#4a2a10" stroke-width="4"/><path d="M${+sx+16} ${GR-100} h48 v60 h-48z M${+sx+62} ${GR-84} h40 v50 h-40z" fill="#f4ead0"/><path d="M${+sx+34} ${GR-80} h12 M${+sx+40} ${GR-86} v12" stroke="#c0392b" stroke-width="4"/></g>`;
    } break;
    case 4: // México: a stepped pyramid, papel picado, cacti and marigolds
      each(420, x=>{ for (let k=0; k<5; k++) s+=`<rect x="${x+k*22}" y="${GR-40-k*36}" width="${260-k*44}" height="40" fill="${k%2?"#a87a4a":"#9a6a3a"}"/>`; s+=`<rect x="${x+110}" y="${GR-214}" width="40" height="34" fill="#7a4a2a"/>`; }, 40);
      each(90, x=>{ s+=`<path d="M${x} 40 q45 14 90 0" stroke="#3a2a1a" stroke-width="1" fill="none"/><path d="M${x+8} ${f1(44)} h30 v34 l-6 -5 l-6 5 l-6 -5 l-6 5 l-6 -5z" fill="${["#ff3a8a","#ffb02e","#3ac0ff","#8a3aff","#3ae08a"][Math.floor(r()*5)]}" opacity=".9"/><circle cx="${x+23}" cy="58" r="5" fill="#000" opacity=".25"/>`; }, 0);
      each(200, x=>{ s+=`<path d="M${x+150} ${GR} V${GR-70} q0 -12 10 -12 q10 0 10 12 V${GR}z M${x+150} ${GR-40} h-12 v-24 q0 -8 6 -8 q6 0 6 8z" fill="#3a8a3a"/>` + [0,1,2].map(k=>`<circle cx="${x+20+k*20}" cy="${GR-6}" r="7" fill="#ff9a1a"/><circle cx="${x+20+k*20}" cy="${GR-6}" r="3" fill="#e86a0a"/>`).join(""); }, 30);
      break;
    case 5: // Cuba: pastel colonial houses, palms and classic cars
      each(140, x=>{ const c = ["#7ad8d0","#f0b0c8","#f4e08a","#a8d8f0","#f0c890"][Math.floor(r()*5)];
        s+=`<rect x="${x}" y="${GR-150}" width="130" height="150" fill="${c}"/><rect x="${x-4}" y="${GR-156}" width="138" height="10" fill="#fff" opacity=".8"/>` + [0,1,2].map(k=>`<path d="M${x+12+k*40} ${GR} V${GR-50} a14 14 0 0 1 28 0 V${GR}" fill="#5a4a3a"/>`).join(""); }, 20);
      each(320, x=>{ const c = ["#e8443a","#3ab0e8","#f4d03a","#7ae0a0"][Math.floor(r()*4)];
        s+=`<g><path d="M${x} ${GR-16} q4 -20 30 -22 l20 -16 h50 l24 16 q28 2 30 22z" fill="${c}"/><rect x="${x+54}" y="${GR-52}" width="40" height="14" fill="#cfe8ff" opacity=".8"/><circle cx="${x+32}" cy="${GR-14}" r="11" fill="#1a1a1a"/><circle cx="${x+120}" cy="${GR-14}" r="11" fill="#1a1a1a"/><circle cx="${x+32}" cy="${GR-14}" r="4" fill="#c9c9c9"/><circle cx="${x+120}" cy="${GR-14}" r="4" fill="#c9c9c9"/></g>`; }, 60);
      each(500, x=>{ s+=palm(x+250, 170); }, 0);
      break;
    case 6: // Colombia: rows of coffee on green hills and colourful balconied houses
      s += `<path d="M0 ${GR} Q${f1(len*.25)} ${GR-160} ${f1(len*.5)} ${GR-60} T${len} ${GR-120} V${GR}z" fill="#2a7a3a"/>`;
      each(24, x=>{ const y = GR - 20 - r()*80; s+=`<circle cx="${x}" cy="${f1(y)}" r="7" fill="#1a5a2a"/><circle cx="${x+3}" cy="${f1(y+2)}" r="2" fill="#d0202a"/>`; }, 10);
      each(170, x=>{ const c = ["#f4c430","#e85a8a","#3a9ae8","#f08a3a","#8ad05a"][Math.floor(r()*5)];
        s+=`<rect x="${x}" y="${GR-110}" width="100" height="110" fill="${c}"/><rect x="${x+10}" y="${GR-80}" width="80" height="10" fill="#6a3a1a"/>` + [0,1,2,3].map(k=>`<path d="M${x+14+k*20} ${GR-80} v-20" stroke="#6a3a1a" stroke-width="2"/>`).join("") + `<circle cx="${x+86}" cy="${GR-108}" r="10" fill="#d02a8a" opacity=".9"/><rect x="${x+38}" y="${GR-40}" width="24" height="40" fill="#5a3a1a"/>`; }, 60);
      break;
    case 7: // Perú: Machu Picchu's terraces, a sharp green peak and llamas
      each(480, x=>{ s+=`<path d="M${x+200} ${GR-60} L${x+290} ${GR-290} L${x+380} ${GR-60}z" fill="#3a6a3a"/>`;
        for (let k=0; k<6; k++) s+=`<rect x="${x+k*12}" y="${GR-30-k*26}" width="${300-k*24}" height="26" fill="${k%2?"#5a8a3a":"#4a7a34"}" stroke="#8a8a7a" stroke-width="2"/>`;
        [0,1,2].forEach(k=>{ s+=`<path d="M${x+60+k*60} ${GR-170} h44 v-30 l-22 -14 l-22 14z" fill="#9a9a8a" stroke="#6a6a5a"/><path d="M${x+76+k*60} ${GR-170} v-14 l6 -4 l6 4 v14z" fill="#3a3a3a"/>`; }); }, 20);
      each(240, x=>{ s+=`<g transform="translate(${x+120} ${GR})"><ellipse cx="0" cy="-30" rx="22" ry="12" fill="#f4ead8"/><path d="M14 -34 v-30 q0 -6 6 -6 q6 0 6 6 v4 h-6 v26" fill="#f4ead8"/><path d="M-14 -20 v20 M-6 -20 v20 M6 -20 v20 M14 -20 v20" stroke="#e8dcc0" stroke-width="5"/><path d="M-14 -38 h28" stroke="#d02a5a" stroke-width="4"/></g>`; }, 100);
      break;
    case 8: // the Salar de Uyuni: a white salt flat mirroring the sky, volcanoes and flamingos
      s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="#e8f4fc"/><rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="#9ac8f0" opacity=".45"/>`;
      each(300, x=>{ s+=`<path d="M${x} ${GR} L${x+80} ${GR-110} L${x+160} ${GR}z" fill="#8a6a7a"/><path d="M${x+60} ${GR-82} L${x+80} ${GR-110} L${x+100} ${GR-82}z" fill="#fff"/><path d="M${x} ${GR} L${x+80} ${GR+90} L${x+160} ${GR}z" fill="#8a6a7a" opacity=".25"/>`; }, 20);
      each(110, x=>{ const y = GR + 10 + r()*30; s+=`<g transform="translate(${x} ${f1(y)})"><path d="M0 0 v-30 M4 0 v-30" stroke="#ff7aa8" stroke-width="2"/><ellipse cx="2" cy="-36" rx="12" ry="8" fill="#ff8ab0"/><path d="M10 -40 q8 -14 0 -22 q-4 -4 -6 2" stroke="#ff8ab0" stroke-width="3" fill="none"/><path d="M4 -62 l-6 4" stroke="#1a1a1a" stroke-width="2"/></g>`; }, 40);
      break;
    case 9: // Patagonia: the jagged Fitz Roy, a glacier wall and penguins
      each(420, x=>{ s+=`<path d="M${x} ${GR} L${x+60} ${GR-170} L${x+80} ${GR-130} L${x+110} ${GR-260} L${x+140} ${GR-150} L${x+170} ${GR-200} L${x+230} ${GR}z" fill="#6a7080"/><path d="M${x+96} ${GR-200} L${x+110} ${GR-260} L${x+124} ${GR-200}z M${x+52} ${GR-146} L${x+60} ${GR-170} L${x+70} ${GR-150}z" fill="#fff"/>`
        + `<path d="M${x+240} ${GR} V${GR-100} l20 -8 l20 6 l20 -10 l20 8 l20 -6 l20 10 V${GR}z" fill="#cfeaff"/><path d="M${x+250} ${GR-80} v70 M${x+280} ${GR-90} v80 M${x+310} ${GR-84} v74 M${x+340} ${GR-90} v80" stroke="#7ab8e8" stroke-width="3"/>`; }, 20);
      each(130, x=>{ s+=`<g transform="translate(${x+60} ${GR})"><ellipse cy="-16" rx="9" ry="16" fill="#1a1a2a"/><ellipse cx="2" cy="-14" rx="5" ry="11" fill="#fff"/><circle cy="-34" r="7" fill="#1a1a2a"/><path d="M6 -34 l7 2 l-7 2z" fill="#ffb03a"/><circle cx="3" cy="-36" r="1.4" fill="#fff"/></g>`; }, 50);
      break;
  }
  return hscene(s, len);
}
/* the chilli: green, then orange, then red, then gold as it heats up; sunglasses, a carnation and a guitar on the way */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#e0ad2a" : level >= 4 ? "#e53935" : level >= 2 ? "#ff9800" : "#5cb85c";
  const line = gold ? "#8a5a08" : level >= 4 ? "#8a1010" : level >= 2 ? "#a85a00" : "#2a6a2a";
  const s = `<g class="av-rock">
    ${level >= 6 ? `<g transform="translate(-6 -18) rotate(-24)"><ellipse cx="0" cy="8" rx="9" ry="10" fill="#c8843a" stroke="#6a3a10" stroke-width="1.2"/><circle cx="0" cy="8" r="3" fill="#3a1a08"/><rect x="-2" y="-22" width="4" height="22" fill="#6a3a10"/><path d="M-1 -20 v16 M1 -20 v16" stroke="#f4ead0" stroke-width=".5"/></g>` : ""}
    ${level >= 2 ? `<path class="blink" d="M-30 2 q-10 -4 -14 2 q6 1 4 5 q6 -2 10 -1z" fill="#ffb03a" opacity=".8"/>` : ""}
    <path d="M-26 -4 C-26 -16 0 -16 14 -9 C25 -4 31 4 34 13 C22 10 6 13 -8 13 C-20 13 -26 6 -26 -4 Z" fill="${body}" stroke="${line}" stroke-width="1.8"/>
    <path d="M-18 -8 q14 -6 30 2" stroke="#fff" stroke-width="2.4" fill="none" opacity=".35" stroke-linecap="round"/>
    <path d="M-27 -5 q-3 -5 2 -9 q4 -2 7 2 q3 -5 7 -1 q-2 6 -8 8z" fill="#3a8a2a" stroke="#1a5a1a" stroke-width="1"/><path d="M-24 -10 q-4 -10 -12 -12" stroke="#3a8a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${level >= 4 ? `<g transform="translate(-34 -22)"><circle r="6" fill="#d0103a"/><path d="M-4 -3 q4 -4 8 0 M-5 1 q5 -3 10 0 M-3 4 q3 -2 6 0" stroke="#8a0020" stroke-width="1" fill="none"/></g>` : ""}
    <circle cx="-8" cy="-2" r="4.4" fill="#fff"/><circle cx="3" cy="-2" r="4.4" fill="#fff"/>
    <g class="av-blink"><circle cx="-7.4" cy="-1.6" r="2.2" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/><circle cx="3.6" cy="-1.6" r="2.2" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/></g>
    ${level >= 3 ? `<path d="M-14 -4 h11 v4 q0 4 -5 4 q-6 0 -6 -6z M0 -4 h11 v4 q0 4 -5 4 q-6 0 -6 -6z" fill="#111"/><path d="M-3 -3 h3 M-16 -4 h2" stroke="#111" stroke-width="1.6"/>` : ""}
    <path d="M-6 5 q4 4 8 0" stroke="${line}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${gold ? `<circle r="34" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,120,`<path d="M100 8 v18" stroke="#8a6a3a" stroke-width="2"/>` + [0,1,2,3,4].map(k=>{ const a = -90 + k*72, ax = 100 + Math.cos(a*Math.PI/180)*44, ay = 64 + Math.sin(a*Math.PI/180)*44;
      return `<path d="M${f1(100 + Math.cos((a-30)*Math.PI/180)*18)} ${f1(64 + Math.sin((a-30)*Math.PI/180)*18)} L${f1(ax)} ${f1(ay)} L${f1(100 + Math.cos((a+30)*Math.PI/180)*18)} ${f1(64 + Math.sin((a+30)*Math.PI/180)*18)}z" fill="${["#ff3a8a","#ffb02e","#3ac0ff","#8a3aff","#3ae08a"][k]}"/><path d="M${f1(ax)} ${f1(ay)} l${f1(Math.cos(a*Math.PI/180)*10)} ${f1(Math.sin(a*Math.PI/180)*10)}" stroke="${c}" stroke-width="3"/>`; }).join("")
    + `<circle cx="100" cy="64" r="22" fill="#ffd25a" stroke="#fff2a8" stroke-width="2"/>` + [[30,30],[170,40],[40,100],[160,104]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="#fff2a8"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M85 84 L30 30 a78 78 0 0 1 110 0z" fill="#c60b1e" stroke="${c}" stroke-width="2.5"/>` + [0,1,2,3,4,5,6].map(k=>`<path d="M85 84 L${f1(85+Math.cos((-135+k*15)*Math.PI/180)*76)} ${f1(84+Math.sin((-135+k*15)*Math.PI/180)*76)}" stroke="#ffc400" stroke-width="1.5"/>`).join(""));
  if (t === "trojan") return W(170,100,`<g transform="rotate(-30 85 50)"><ellipse cx="70" cy="60" rx="24" ry="20" fill="#c8843a" stroke="${c}" stroke-width="2"/><circle cx="70" cy="58" r="6" fill="#3a1a08"/><rect x="92" y="54" width="60" height="8" fill="#6a3a10"/><rect x="148" y="50" width="12" height="16" rx="2" fill="#3a1a08"/></g>`);
  if (t === "adware") return W(170,100,`<g transform="rotate(-20 60 50)"><ellipse cx="60" cy="34" rx="16" ry="20" fill="#ffb02e" stroke="${c}" stroke-width="2"/><rect x="57" y="52" width="6" height="34" fill="#6a3a10"/></g><g transform="rotate(20 110 50)"><ellipse cx="110" cy="34" rx="16" ry="20" fill="#3ac0ff" stroke="${c}" stroke-width="2"/><rect x="107" y="52" width="6" height="34" fill="#6a3a10"/></g>`);
  if (t === "spam") return W(170,90,`<path d="M40 20 h90 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-60 l-14 14 v-14 h-16 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10z" fill="#f4f1ea" stroke="${c}" stroke-width="2"/><text x="85" y="49" text-anchor="middle" font-size="16" font-style="italic" fill="#5a5a5a" font-family="Georgia,serif">pues…</text>`);
  if (t === "blocked") return W(170,100,`<path d="M20 40 q65 50 130 0" stroke="#c8a060" stroke-width="6" fill="none"/><path d="M20 40 l-6 -20 M150 40 l6 -20" stroke="#6a4a2a" stroke-width="4"/><text x="85" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">SIESTA</text><text class="blink" x="120" y="30" font-size="16" font-weight="700" fill="#9fd8ff" font-family="Georgia,serif">Zzz</text>`);
  return null;
}
registerSubject({
  key:"es", name:"Spanish ab initio", theme:"A chilli pepper travelling the Spanish-speaking world", gemWord:"Piñata", gemTitle:"One in a Piñata", emoji:"🌶️",
  blurb:"You're a little green chilli in a tapas bar in Madrid. Each prompt has many correct answers, <b>in Spanish</b>. <b>Obvious answers barely get you out of the bar. Answers other players missed send you across the world</b>, through Barcelona, Andalusia and the Canary Islands, over the Atlantic to Mexico, Cuba, Colombia, Peru and the salt flats of Bolivia, all the way to Patagonia, getting hotter as you go. Words from Spain and Latin America both count.",
  noLevel:"SL · ab initio",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Piñata", rootkit:"¡Increíble!", trojan:"¡Muy bien!", adware:"Vale", spam:"Pues…"}, blocked:"¡Ay, no!", fw:"SIESTA",
  notes:{rootkit:"¡Increíble! Very few players found this one.", trojan:"¡Muy bien! Not the usual answer.", adware:"Vale. Fairly common, but not the first thing people say.", spam:"Pues… everyone says this one first."},
  verbs:{cta:"¡Vamos! ▶", inject:"¡Dale!", hint:"▶ answer in Spanish · rarer answers travel further ▶", count:"calentando motores"},
  shout:t => ({gem:"¡OLÉ, OLÉ, OLÉ!", rootkit:"¡QUÉ PICANTE!", trojan:"¡OLÉ!", blocked:"¡AY, CARAMBA!"})[t],
  particles:["¡","¿","ñ","✦"], particleColor:"#ffb03a",
  meter:{label:"KILÓMETROS", fmt:fmtK, zone:fmtK, tick:fmtK, gain:(a,b)=>`travel ${dots(Math.max(0, kmAt(b) - kmAt(a)))} km`},
  start:{bg:"linear-gradient(90deg,#1a0804,#3a1408)", label:"Start · 0 km", zone:"Un bar de tapas en Madrid", color:"#ffc400",
    deco:len=>hscene(`<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="#5a2a10"/><rect x="40" y="${GR-90}" width="${len-80}" height="90" fill="#7a3a1a"/><rect x="30" y="${GR-98}" width="${len-60}" height="12" fill="#a8743a"/>`
      + Array.from({length: Math.max(1, Math.floor((len-120)/70))}, (_, k) => `<ellipse cx="${80+k*70}" cy="${GR-104}" rx="22" ry="6" fill="#f4ead0"/><circle cx="${74+k*70}" cy="${GR-110}" r="5" fill="${["#c60b1e","#ffc400","#3a8a2a"][k%3]}"/><circle cx="${86+k*70}" cy="${GR-109}" r="4" fill="#d8a060"/>`).join("")
      + `<text x="${len/2}" y="70" text-anchor="middle" font-size="30" font-family="Caveat,cursive" fill="#ffc400">Bar · Tapas · Raciones</text>`, len)},
  endBg:"linear-gradient(90deg,#d8eefa,#ffffff)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"La Antártida",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
