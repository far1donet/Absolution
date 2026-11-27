/* Film — a clapperboard rides a dolly track across the studio backlot: from the script room and the casting call,
   past the Western set, the sci-fi set and the green screen, through the sound stage and the editing suite, down the
   red carpet into the cinema and on to the film festival. Rarer answers shoot more frames, until a feature is done.
   Syllabus: IB Film (first assessment 2019): reading film, contextualizing film, exploring film production roles,
   the assessment tasks and the HL collaborative film project. */
(function(){
const CATALOG = [
  {label:"Reading film", units:[
    {code:"R", name:"Film elements", topics:[["R.1","Mise-en-scène and lighting"],["R.2","Cinematography"],["R.3","Editing"],["R.4","Sound and music"]]},
  ]},
  {label:"Contextualizing film", units:[
    {code:"C", name:"Contexts", topics:[["C.1","Genres and conventions"],["C.2","Film movements, history and world cinema"],["C.3","Film theory and cultural context"]]},
  ]},
  {label:"Exploring film production roles", units:[
    {code:"P", name:"Production", topics:[["P.1","Production roles"],["P.2","Pre-production and screenwriting"]]},
  ]},
  {label:"Analysis and the HL project", units:[
    {code:"A", name:"Analysing film", topics:[["A.1","Textual analysis and narrative"]]},
    {code:"H", name:"Collaborative film project", topics:[["H.1","The collaborative film project",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- R.1 Mise-en-scène and lighting ---------- */
P("fm001","R.1","Name an element of mise-en-scène.","Frontality",[
  ["Setting",18,"location","set"],["Costume",14,"costumes","costume design"],["Props",12,"prop"],["Lighting",12],["Make-up",8,"makeup","hair and make up"],["Acting",8,"performance","actors"],["Set design",6,"production design"],["Colour",6,"color","colour palette"],
  ["Blocking",5,"staging","positioning"],["Composition",4,"framing"],["Space",3,"use of space"],["Frontality",.4]]),
P("fm002","R.1","Name a lighting technique or style.","Day for night",[
  ["Three-point lighting",18,"three point lighting"],["Low-key lighting",14,"low key"],["High-key lighting",12,"high key"],["Backlighting",8,"back light","backlight"],["Key light",8],["Fill light",6],["Natural light",6,"natural lighting","available light"],
  ["Chiaroscuro",5],["Silhouette",5],["Hard light",4,"hard lighting"],["Soft light",4,"soft lighting"],["Practical lighting",3,"practicals"],["Rembrandt lighting",3,"rembrandt"],["Underlighting",3,"under lighting"],["Day for night",.4,"nuit americaine"]]),
/* ---------- R.2 Cinematography ---------- */
P("fm003","R.2","Name a type of camera shot.","A choker",[
  ["Close-up",20,"close up","cu"],["Wide shot",14,"long shot","ws","full shot"],["Medium shot",12,"mid shot","ms"],["Extreme close-up",10,"extreme close up","ecu"],["Establishing shot",8],["Over-the-shoulder shot",8,"over the shoulder","ots"],
  ["Point-of-view shot",6,"point of view","pov"],["Two-shot",5,"two shot"],["Extreme long shot",5,"extreme wide shot"],["Insert shot",3,"insert"],["Cowboy shot",3,"american shot"],["Master shot",3],["A choker",.4,"choker","choker close up"]]),
P("fm004","R.2","Name a camera movement.","Snorricam",[
  ["Pan",18,"panning"],["Tilt",14,"tilting"],["Tracking shot",14,"tracking","dolly","dolly shot"],["Zoom",10,"zoom in","zoom out"],["Crane shot",8,"crane","jib"],["Handheld",8,"hand held","shaky cam"],["Steadicam",6,"gimbal"],
  ["Dolly zoom",5,"vertigo effect","zolly"],["Whip pan",4,"swish pan"],["Aerial shot",4,"drone shot","aerial"],["Arc shot",3,"arc"],["Pedestal",2,"ped"],["Snorricam",.4,"body mounted camera"]]),
P("fm005","R.2","Name a camera angle.","Tatami shot",[
  ["High angle",22,"high angle shot"],["Low angle",22,"low angle shot"],["Eye level",14,"eye level shot"],["Bird's-eye view",10,"bird s eye","birds eye view","bird s eye view"],["Dutch angle",10,"canted angle","dutch tilt","dutch"],["Worm's-eye view",6,"worm s eye","worms eye view","worm s eye view"],
  ["Overhead shot",5,"overhead","top shot"],["Aerial view",4,"aerial angle"],["Tatami shot",.4,"tatami"]]),
/* ---------- R.3 Editing ---------- */
P("fm006","R.3","Name an editing technique or transition.","An axial cut",[
  ["Cut",14,"straight cut","hard cut"],["Fade",12,"fade out","fade in","fade to black"],["Dissolve",10,"cross dissolve"],["Jump cut",10],["Match cut",8,"graphic match"],["Cross-cutting",8,"parallel editing","intercutting"],["Montage",8],
  ["Wipe",6],["Shot/reverse shot",6,"shot reverse shot"],["Cutaway",5],["Smash cut",4],["L-cut",3,"j cut","split edit"],["Iris",2,"iris in","iris out"],["An axial cut",.4,"axial cut"]]),
P("fm007","R.3","Name an editing principle or effect.","The Rule of Six",[
  ["The 180-degree rule",20,"180 degree rule","180 rule"],["Continuity editing",14,"continuity","invisible editing"],["The Kuleshov effect",12,"kuleshov effect","kuleshov"],["Montage theory",8,"soviet montage","eisenstein"],["Pacing",8,"rhythm","tempo"],["Match on action",8,"cutting on action"],
  ["Eyeline match",6,"eyeline"],["The 30-degree rule",5,"30 degree rule"],["Ellipsis",4,"time compression"],["Shot/reverse shot",4,"shot reverse shot"],["The Rule of Six",.4,"rule of six","murch"]]),
/* ---------- R.4 Sound and music ---------- */
P("fm008","R.4","Name a type of film sound.","Walla",[
  ["Dialogue",18],["Music",14,"score","soundtrack"],["Sound effects",12,"sfx"],["Diegetic sound",12,"diegetic"],["Non-diegetic sound",10,"non diegetic","nondiegetic"],["Ambient sound",8,"ambience","atmos","background noise"],["Voice-over",6,"voiceover","narration"],
  ["Foley",6],["Silence",5],["Sound bridge",3],["Leitmotif",3],["Room tone",2],["Walla",.4,"crowd murmur"]]),
P("fm009","R.4","Name a famous film composer.","Toru Takemitsu",[
  ["John Williams",22,"williams"],["Hans Zimmer",18,"zimmer"],["Ennio Morricone",12,"morricone"],["Bernard Herrmann",6,"herrmann"],["Howard Shore",6,"shore"],["Danny Elfman",5,"elfman"],["Joe Hisaishi",5,"hisaishi"],["Ludwig Göransson",4,"goransson","ludwig goransson"],
  ["Alan Silvestri",4,"silvestri"],["James Horner",4,"horner"],["Jerry Goldsmith",3,"goldsmith"],["Hildur Guðnadóttir",3,"hildur gudnadottir","gudnadottir"],["Max Steiner",2,"steiner"],["Toru Takemitsu",.4,"takemitsu"]]),
/* ---------- C.1 Genres and conventions ---------- */
P("fm010","C.1","Name a film genre.","Giallo",[
  ["Action",14],["Comedy",14],["Horror",14],["Drama",12],["Science fiction",10,"sci fi","scifi"],["Romance",8,"romantic comedy","rom com"],["Thriller",8],["Western",5,"westerns"],["Musical",4],["Animation",4,"animated"],
  ["Documentary",3],["Fantasy",3],["Film noir",3,"noir"],["Crime",3,"gangster"],["War",2,"war film"],["Giallo",.4]]),
P("fm011","C.1","Name a convention of the horror genre.","The Lewton bus",[
  ["Jump scares",20,"jump scare"],["Dark settings",12,"darkness","dark"],["The final girl",10,"final girl"],["An isolated location",8,"isolation","isolated location","cabin in the woods"],["A monster or villain",8,"monster","villain","killer"],["Eerie music",8,"music","ominous music","creepy music"],
  ["Low-key lighting",6,"low key lighting","shadows"],["A haunted house",5,"haunted house"],["Gore",5,"blood"],["Point-of-view shots",4,"pov shots","killer s pov"],["False scares",4,"false scare","cat scare"],["The Lewton bus",.4,"lewton bus"]]),
/* ---------- C.2 Film movements, history and world cinema ---------- */
P("fm012","C.2","Name a film movement.","Cinéma du look",[
  ["German Expressionism",16,"expressionism"],["Italian Neorealism",14,"neorealism"],["French New Wave",14,"nouvelle vague","new wave"],["Soviet Montage",10,"soviet montage movement"],["Film noir",8,"noir"],["Dogme 95",6,"dogme","dogma 95"],
  ["New Hollywood",6,"american new wave"],["Classical Hollywood",5,"golden age of hollywood","studio system"],["Surrealism",4,"surrealist cinema"],["Third Cinema",3],["Iranian New Wave",3],["Cinema Novo",2],["Mumblecore",2],["Cinéma du look",.4,"cinema du look"]]),
P("fm013","C.2","Name an influential film director.","Alice Guy-Blaché",[
  ["Alfred Hitchcock",16,"hitchcock"],["Steven Spielberg",14,"spielberg"],["Stanley Kubrick",10,"kubrick"],["Christopher Nolan",10,"nolan"],["Martin Scorsese",8,"scorsese"],["Quentin Tarantino",8,"tarantino"],["Akira Kurosawa",6,"kurosawa"],["Orson Welles",5,"welles"],
  ["Hayao Miyazaki",5,"miyazaki"],["Bong Joon-ho",4,"bong joon ho","bong"],["Federico Fellini",3,"fellini"],["Ingmar Bergman",3,"bergman"],["Jean-Luc Godard",3,"godard"],["Agnès Varda",3,"agnes varda","varda"],["Satyajit Ray",3,"ray"],["Greta Gerwig",3,"gerwig"],
  ["Wong Kar-wai",2,"wong kar wai"],["Alice Guy-Blaché",.4,"alice guy","alice guy blache"]]),
P("fm014","C.2","Name a landmark moment or film in cinema history.","Roundhay Garden Scene",[
  ["The Lumière brothers' first screening",16,"lumiere brothers","lumiere","first film screening","workers leaving the factory","arrival of a train"],["The Jazz Singer",12,"first talkie","talkies","the coming of sound"],["Citizen Kane",10],["A Trip to the Moon",8,"le voyage dans la lune","melies"],
  ["Star Wars",8],["Toy Story",8,"first cgi feature"],["Technicolor",6,"the wizard of oz","colour film"],["Jurassic Park",6,"cgi"],["Battleship Potemkin",5],["Steamboat Willie",4],["The Great Train Robbery",3],["Streaming",3,"netflix"],["Roundhay Garden Scene",.4,"roundhay garden","le prince"]]),
P("fm015","C.2","Name a national film industry or world cinema.","Kannywood",[
  ["Hollywood",20,"american cinema"],["Bollywood",16,"hindi cinema","indian cinema"],["Nollywood",10,"nigerian cinema"],["Korean cinema",8,"korean"],["Japanese cinema",8,"japanese","anime"],["French cinema",8,"french"],["Chinese cinema",6,"chinese"],
  ["Hong Kong cinema",5,"hong kong"],["Italian cinema",4,"italian"],["Iranian cinema",4,"iranian"],["Mexican cinema",3,"mexican"],["Tollywood",3,"telugu cinema"],["Kannywood",.4,"hausa cinema"]]),
/* ---------- C.3 Film theory and cultural context ---------- */
P("fm016","C.3","Name a film theory or critical approach.","Suture theory",[
  ["Auteur theory",20,"auteur"],["Feminist film theory",14,"the male gaze","male gaze","feminist"],["Formalism",10],["Realism",8,"bazin"],["Psychoanalytic film theory",8,"psychoanalytic","freudian"],["Genre theory",8],["Marxist film theory",5,"marxist"],
  ["Semiotics",5],["Reception theory",4,"spectatorship","audience theory"],["Postcolonial theory",4,"postcolonial"],["Queer theory",3],["Apparatus theory",2],["Suture theory",.4,"suture"]]),
P("fm017","C.3","Name a factor that shapes a film's cultural context.","The Hays Code",[
  ["Historical events",16,"history","war"],["Politics",14,"political climate"],["Social values",10,"society","values"],["Religion",8],["Censorship",8],["Budget",6,"economics","money","funding"],["Technology",6],["Gender roles",6,"gender"],
  ["National identity",5,"nationality","culture"],["The studio system",4,"film industry","studios"],["Audience expectations",4,"audience"],["Globalization",3,"globalisation"],["The Hays Code",.4,"hays code","production code"]]),
P("fm018","C.3","Name a famous film festival or award.","FESPACO",[
  ["The Oscars",20,"oscars","academy awards"],["Cannes Film Festival",18,"cannes","palme d or"],["Venice Film Festival",10,"venice","golden lion"],["Berlin Film Festival",8,"berlinale","berlin","golden bear"],["Sundance",8,"sundance film festival"],["BAFTAs",8,"bafta","baftas"],
  ["Golden Globes",6],["Toronto International Film Festival",5,"tiff","toronto"],["Tribeca",3],["Busan International Film Festival",3,"busan"],["FESPACO",.4,"ouagadougou"]]),
/* ---------- P.1 Production roles ---------- */
P("fm019","P.1","Name a film production role.","Best boy",[
  ["Director",18],["Screenwriter",12,"writer","scriptwriter"],["Cinematographer",10,"director of photography","dop","camera operator"],["Editor",10,"film editor"],["Producer",10],["Actor",8,"actress","cast"],["Sound designer",6,"sound recordist","sound mixer"],
  ["Production designer",5,"art director","set designer"],["Costume designer",4],["Composer",4],["Gaffer",3],["Grip",3],["Script supervisor",2],["Casting director",2],["Boom operator",2],["Best boy",.4]]),
P("fm020","P.1","Name a job a cinematographer does.","Creating a LUT",[
  ["Framing shots",20,"framing","composition","camera angles"],["Lighting",18,"lighting the scene"],["Camera movement",12,"moving the camera"],["Choosing lenses",10,"lenses","lens"],["Exposure",6,"setting exposure","aperture"],["Focus",6,"pulling focus"],
  ["Creating the look",6,"colour","the look","visual style"],["Shot lists",5,"planning shots"],["Choosing the camera",4,"camera choice","film stock"],["Working with the director",4,"collaborating with the director"],["Creating a LUT",.4,"lut","look up table"]]),
/* ---------- P.2 Pre-production and screenwriting ---------- */
P("fm021","P.2","Name a pre-production document or task.","An animatic",[
  ["Screenplay",18,"script"],["Storyboard",16,"storyboards","storyboarding"],["Shot list",10],["Budget",8],["Casting",8,"auditions"],["Location scouting",8,"recce","scouting"],["Call sheet",5,"call sheets"],["Production schedule",5,"schedule","shooting schedule"],
  ["Treatment",4,"synopsis"],["Mood board",4,"moodboard"],["Risk assessment",3],["Release forms",2,"location release","consent forms"],["An animatic",.4,"animatic"]]),
P("fm022","P.2","Name a screenwriting term or element.","MacGuffin",[
  ["Dialogue",14],["Three-act structure",14,"three act structure","three acts"],["Scene heading",8,"slugline","int ext"],["Action lines",6,"action","scene description"],["Logline",8],["Inciting incident",8],["Climax",8],["Character arc",8,"arc"],
  ["Plot point",5,"turning point"],["Subtext",4],["Parenthetical",3],["Transitions",3,"cut to","fade in"],["Beat",2,"beats"],["MacGuffin",.4,"mcguffin"]]),
/* ---------- A.1 Textual analysis and narrative ---------- */
P("fm023","A.1","Name something to analyse in a film extract.","Aspect ratio",[
  ["Camera shots",14,"shots","cinematography","camera"],["Editing",12],["Sound",12,"music"],["Lighting",10],["Mise-en-scène",10,"mise en scene"],["Performance",6,"acting"],["Colour",6,"color"],["Narrative",6,"story","plot"],
  ["Themes",5,"theme"],["Genre conventions",5,"genre"],["Cultural context",4,"context"],["Symbolism",4,"symbols","motifs"],["Pacing",3,"rhythm"],["Aspect ratio",.4,"aspect ratios"]]),
P("fm024","A.1","Name a narrative technique used in film.","The Rashomon effect",[
  ["Flashback",20,"flashbacks"],["Non-linear narrative",12,"non linear","nonlinear"],["Voice-over narration",10,"voice over","voiceover","narration"],["Plot twist",10,"twist"],["Foreshadowing",8],["Cliffhanger",6],["Unreliable narrator",6],["Flash-forward",5,"flash forward"],
  ["Parallel storylines",4,"parallel narrative","multiple storylines"],["Breaking the fourth wall",4,"fourth wall"],["In medias res",3],["Frame narrative",3,"framing device","story within a story"],["The Rashomon effect",.4,"rashomon effect","rashomon"]]),
/* ---------- H.1 The collaborative film project (HL) ---------- */
P("fm025","H.1","Name a stage of making a film.","Pick-up shots",[
  ["Pre-production",22,"pre production","planning"],["Production",20,"filming","shooting","principal photography"],["Post-production",20,"post production","editing"],["Development",10,"writing","idea"],["Distribution",8],["Exhibition",5,"screening","release"],["Marketing",4,"promotion","trailer"],
  ["Pick-up shots",.4,"pick ups","pickups","reshoots"]],
  [], HL),
P("fm026","H.1","Name a term or tradition used on a film set.","The Abby Singer shot",[
  ["Action!",20,"action"],["Cut!",18,"cut"],["Take",10,"takes"],["Rolling",8,"roll camera","camera rolling"],["Clapperboard",8,"slate","clapper"],["That's a wrap",8,"wrap","it s a wrap","that s a wrap"],["Golden hour",5,"magic hour"],["Speed",4],
  ["Blocking",4],["The martini shot",3,"martini shot","martini"],["Room tone",3],["Craft services",2,"craft service","crafty"],["The Abby Singer shot",.4,"abby singer"]],
  [], HL),
];

/* ================= the studio backlot (sideways) ================= */
const BANDS = [
  {name:"The script room",     zone:"The script room",     from:0,  to:40,  hue:40,  bg:["#1a1612","#201a14"]},
  {name:"The casting call",    zone:"The casting call",    from:40, to:100, hue:300, bg:["#201a14","#221a2a"]},
  {name:"The Western set",     zone:"The Western set",     from:100,to:170, hue:30,  bg:["#3a2414","#5a3418"]},
  {name:"The sci-fi set",      zone:"The sci-fi set",      from:170,to:250, hue:190, bg:["#0e1a2a","#101428"]},
  {name:"The green screen",    zone:"The green screen",    from:250,to:320, hue:120, bg:["#0e2a14","#123018"]},
  {name:"The sound stage",     zone:"The sound stage",     from:320,to:390, hue:260, bg:["#16141e","#1a1626"]},
  {name:"The editing suite",   zone:"The editing suite",   from:390,to:460, hue:210, bg:["#10141e","#141826"]},
  {name:"The red carpet",      zone:"The red carpet",      from:460,to:530, hue:350, bg:["#1a0e14","#22101a"]},
  {name:"The cinema",          zone:"The cinema",          from:530,to:600, hue:0,   bg:["#0e0a0e","#120a10"]},
  {name:"The film festival",   zone:"The film festival",   from:600,to:760, hue:45,  bg:["#0a0e22","#06081a"]},
];
// frames shot at each band boundary: 24 frames a second, up to a two-hour feature
const KNOTS = [[0,1],[40,2],[100,6],[170,24],[250,120],[320,720],[390,2880],[460,14400],[530,43200],[600,129600],[760,172800]];
function frames(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(172800, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtF(p){ const n = frames(p), s = n / 24; const f = `${n.toLocaleString("en-GB")} frame${n === 1 ? "" : "s"}`;
  return n < 24 ? f : s < 60 ? `${f} · ${Math.round(s)} s` : s < 3600 ? `${f} · ${Math.round(s / 60)} min` : `${f} · ${(s / 3600).toFixed(1)} h`; }
const FACTS = [
  [-30,"24 frames make one second of film"],[12,"FADE IN: every film starts as a script"],[30,"one page of screenplay is about one minute of screen time"],
  [60,"a casting director may see hundreds of actors for one role"],[85,"the Kuleshov effect: the same face reads differently after different shots"],[115,"John Ford shot his Westerns in Monument Valley"],[150,"High Noon (1952) plays out almost in real time"],
  [190,"2001: A Space Odyssey (1968) made its effects without computers"],[225,"Star Wars (1977) led to the founding of ILM"],[265,"green screen: anything green can be replaced"],[300,"Jurassic Park (1993) mixed CGI with animatronics"],
  [340,"foley artists make footsteps, punches and rain by hand"],[372,"foley is named after Jack Foley, a Universal sound pioneer"],[410,"the 180-degree rule keeps the audience oriented"],[445,"Eisenstein: meaning comes from the collision of shots"],
  [480,"the first Academy Awards ceremony was in 1929"],[515,"India makes more feature films each year than any other country"],[550,"cinema began with the Lumière brothers' screening in Paris (1895)"],[585,"the audience supposedly ducked at the Lumières' oncoming train"],
  [625,"the Cannes Film Festival was first held in 1946"],[670,"the Palme d'Or is a golden palm leaf"],[720,"that's a wrap!"],
];
const GR = 340;
function scene(i, len){
  const r = srand(7351 + i*43); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#3a2a1a","#2a2230","#c8904a","#3a4a5a","#1e6a2a","#2a2a34","#1a1e2a","#c8102e","#2a0e12","#2a2a2a"][i];
  s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/>`;
  switch(i){
    case 0: // the script room: desks, typewriters and flying pages
      each(190, x=>{ s+=`<rect x="${x}" y="${GR-70}" width="120" height="10" fill="#6a4424"/><path d="M${x+10} ${GR-60} v60 M${x+110} ${GR-60} v60" stroke="#4a2e18" stroke-width="6"/>`
        + `<rect x="${x+30}" y="${GR-96}" width="60" height="26" rx="4" fill="#2a2a2a"/><rect x="${x+38}" y="${GR-124}" width="44" height="30" fill="#f4f0e4"/><path d="M${x+42} ${GR-114} h30 M${x+42} ${GR-106} h24" stroke="#5a5a5a" stroke-width="1.5"/>`
        + `<g class="drift" style="animation-delay:-${f1(r()*4)}s"><g transform="translate(${x+150} ${f1(80+r()*120)}) rotate(${f1(-20+r()*40)})"><rect x="-22" y="-28" width="44" height="56" fill="#f4f0e4"/><text y="-14" text-anchor="middle" font-size="7" font-family="Courier New,monospace" fill="#2a2a2a">${["FADE IN:","INT. NIGHT","CUT TO:","EXT. DAY"][Math.floor(r()*4)]}</text><path d="M-16 -4 h32 M-16 4 h26 M-16 12 h30" stroke="#8a8a8a" stroke-width="1.2"/></g></g>`; }, 20);
      break;
    case 1: // the casting call: a queue of hopefuls and a wall of headshots
      each(70, x=>{ const h = f1(60+r()*24); s+=`<circle cx="${x+20}" cy="${f1(GR-h-14)}" r="12" fill="#3a3046"/><rect x="${x+8}" y="${f1(GR-h)}" width="24" height="${h}" rx="8" fill="#3a3046"/>`; }, 30);
      each(120, x=>{ s+=`<rect x="${x}" y="70" width="40" height="52" fill="#f4f0e4"/><circle cx="${x+20}" cy="90" r="9" fill="#c8a888"/><rect x="${x+10}" y="102" width="20" height="14" fill="#8a6aa8"/>`; }, 20);
      each(320, x=>{ s+=`<rect x="${x}" y="160" width="90" height="26" rx="4" fill="#ffd25a"/><text x="${x+45}" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#2a1a08" font-family="Chakra Petch,sans-serif">AUDITIONS</text>`; }, 140);
      break;
    case 2: // the Western set: a saloon front, cacti and a tumbleweed
      s += `<circle cx="${f1(len*.7)}" cy="80" r="40" fill="#ffd25a" opacity=".85"/>`;
      each(320, x=>{ s+=`<rect x="${x}" y="${GR-170}" width="150" height="170" fill="#8a5a2a"/><rect x="${x-6}" y="${GR-190}" width="162" height="30" fill="#6a4020"/><text x="${x+75}" y="${GR-169}" text-anchor="middle" font-size="16" font-weight="700" fill="#f4e0b0" font-family="Georgia,serif">SALOON</text>`
        + `<rect x="${x+55}" y="${GR-80}" width="40" height="50" fill="#4a2a10"/><path d="M${x+55} ${GR-80} l20 10 l20 -10" stroke="#c8904a" stroke-width="2" fill="none"/><rect x="${x+15}" y="${GR-140}" width="30" height="30" fill="#2a1a0a"/><rect x="${x+105}" y="${GR-140}" width="30" height="30" fill="#2a1a0a"/>`; }, 30);
      each(240, x=>{ s+=`<path d="M${x} ${GR} v-80 a10 10 0 0 1 20 0 v80z M${x} ${GR-46} h-14 v-24 a7 7 0 0 1 14 0 M${x+20} ${GR-36} h14 v-20 a7 7 0 0 0 -14 0" fill="#3a7a3a"/>`; }, 200);
      s += `<g class="vspin" style="animation-duration:3s;transform-origin:${f1(len*.4)}px ${GR-18}px"><circle cx="${f1(len*.4)}" cy="${GR-18}" r="18" fill="none" stroke="#a87a4a" stroke-width="3" stroke-dasharray="6 4"/><circle cx="${f1(len*.4)}" cy="${GR-18}" r="10" fill="none" stroke="#a87a4a" stroke-width="2"/></g>`;
      break;
    case 3: // the sci-fi set: metal corridor panels, portholes and lasers
      each(110, x=>{ s+=`<rect x="${x}" y="40" width="100" height="${GR-40}" fill="#2a3a4a" stroke="#5a7a9a" stroke-width="2"/><circle cx="${x+50}" cy="120" r="26" fill="#05081a" stroke="#9fd8ff" stroke-width="3"/>`
        + Array.from({length:4}, ()=>`<circle cx="${f1(x+34+r()*32)}" cy="${f1(104+r()*32)}" r="1.2" fill="#fff"/>`).join("") + `<rect x="${x+20}" y="${GR-90}" width="60" height="8" fill="#3ac0ff" class="blink"/>`; }, 10);
      each(260, x=>{ s+=`<path d="M${x} ${GR-140} l120 30" stroke="#ff3a5a" stroke-width="3" class="blink"/>`; }, 90);
      break;
    case 4: // the green screen: a green wall with tracking markers and a camera
      s += `<rect x="0" y="20" width="${len}" height="${GR-20}" fill="#1ea84a"/>`;
      each(80, x=>{ s+=`<path d="M${x} ${f1(80+r()*180)} m-8 0 h16 m-8 -8 v16" stroke="#fff" stroke-width="2.4"/>`; }, 20);
      each(300, x=>{ s+=`<path d="M${x+20} ${GR} l20 -70 l20 70 M${x+40} ${GR} v-70" stroke="#2a2a2a" stroke-width="4"/><rect x="${x+14}" y="${GR-104}" width="52" height="34" rx="4" fill="#2a2a2a"/><circle cx="${x+70}" cy="${GR-87}" r="10" fill="#1a1a1a" stroke="#5a5a5a" stroke-width="3"/><circle class="blink" cx="${x+22}" cy="${GR-98}" r="3" fill="#ff3a3a"/>`; }, 80);
      break;
    case 5: // the sound stage: boom mics and foley props
      each(220, x=>{ s+=`<path d="M${x} ${GR} v-150 l90 -40" stroke="#5a5a6a" stroke-width="4" fill="none"/><rect x="${x+86}" y="${GR-206}" width="34" height="12" rx="6" fill="#8a8a9a" transform="rotate(25 ${x+100} ${GR-200})"/>`
        + `<ellipse cx="${x+130}" cy="${GR-20}" rx="16" ry="10" fill="#6a4a2a"/><ellipse cx="${x+166}" cy="${GR-20}" rx="16" ry="10" fill="#6a4a2a"/><rect x="${x+110}" y="${GR-60}" width="70" height="20" fill="#8a8070"/>`
        + [0,1,2].map(k=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x+150+k*10} ${GR-120-k*6} q10 ${16+k*4} 0 ${32+k*8}" stroke="#c8b8ff" stroke-width="2" fill="none"/>`).join(""); }, 30);
      break;
    case 6: // the editing suite: monitors with timelines and hanging film
      each(200, x=>{ s+=`<rect x="${x}" y="${GR-160}" width="140" height="90" rx="5" fill="#0a0e18" stroke="#3a4a6a" stroke-width="3"/>` + [0,1,2,3].map(k=>`<rect x="${x+10+f1(r()*20)}" y="${GR-140+k*16}" width="${f1(40+r()*70)}" height="10" fill="${["#3ac0ff","#ff8a1a","#3ee089","#c8b8ff"][k]}"/>`).join("") + `<path d="M${x+60} ${f1(GR-150)} v74" stroke="#ff3a3a" stroke-width="2"/>`
        + `<path d="M${x+70} ${GR-70} v40 M${x+40} ${GR-30} h60" stroke="#3a3a4a" stroke-width="6"/>`; }, 20);
      each(160, x=>{ s+=`<rect x="${x}" y="20" width="22" height="${f1(60+r()*80)}" fill="#1a1a1a"/>` + Array.from({length:6},(_,k)=>`<rect x="${x+3}" y="${26+k*12}" width="4" height="6" fill="#5a5a5a"/><rect x="${x+15}" y="${26+k*12}" width="4" height="6" fill="#5a5a5a"/>`).join(""); }, 120);
      break;
    case 7: // the red carpet: velvet ropes and camera flashes
      each(90, x=>{ s+=`<rect x="${x}" y="${GR-60}" width="8" height="60" fill="#d4af37"/><circle cx="${x+4}" cy="${GR-62}" r="6" fill="#d4af37"/><path d="M${x+4} ${GR-50} q41 26 82 0" stroke="#8a0a2a" stroke-width="6" fill="none"/>`; }, 20);
      each(110, x=>{ const y = f1(60+r()*160); s+=`<circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${x}" cy="${y}" r="14" fill="#fff" opacity=".85"/><circle cx="${x}" cy="${y}" r="30" fill="#fff" opacity=".12"/>`; }, 40);
      break;
    case 8: // the cinema: rows of seats facing a glowing screen
      each(420, x=>{ s+=`<rect x="${x}" y="40" width="300" height="150" fill="#e8e8f4" opacity=".9"/><path d="M${x+400} 112 L${x+300} 40 L${x+300} 190 L${x+400} 118z" fill="#fff8d0" opacity=".16"/><circle class="blink" cx="${x+400}" cy="115" r="6" fill="#fff"/>`; }, 40);
      for (let row = 0; row < 3; row++) each(40, x=>{ s+=`<rect x="${x}" y="${GR-90+row*30}" width="32" height="34" rx="6" fill="#8a1a2a"/><rect x="${x+2}" y="${GR-96+row*30}" width="28" height="10" rx="4" fill="#a82a3a"/>`; }, 10 + row*20);
      break;
    case 9: // the film festival: searchlights, palm trees and banners
      each(300, x=>{ s+=`<g class="swt" style="animation-duration:5s;transform-origin:${x+40}px ${GR}px;animation-delay:-${f1(r()*5)}s"><path d="M${x+40} ${GR} L${x+10} 0 L${x+70} 0z" fill="#fff8d0" opacity=".14"/></g>`; }, 40);
      each(240, x=>{ s+=`<path d="M${x} ${GR} q8 -80 2 -150" stroke="#6a4a2a" stroke-width="8" fill="none"/>` + [[-52,14],[-40,-8],[0,-26],[40,-8],[52,14]].map(([dx,dy])=>`<path d="M${x+2} ${GR-150} q${f1(dx*.5)} -22 ${dx} ${dy}" stroke="#3a8a3a" stroke-width="6" fill="none" stroke-linecap="round"/>`).join(""); }, 120);
      each(260, x=>{ s+=`<rect x="${x}" y="${GR-120}" width="40" height="90" fill="#d4af37"/><path d="M${x+20} ${GR-100} q-10 14 0 30 q10 -16 0 -30z" fill="#fff8d0"/>`; }, 60);
      break;
  }
  return hscene(s, len);
}
/* the clapperboard: it earns a beret, a megaphone, a film reel and sunglasses, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, slate = gold ? "#d4af37" : "#1a1a1a", stripe = gold ? "#fff3c0" : "#f4f4f4";
  const stripes = [0,1,2,3].map(k=>`<path d="M${-22+k*12} -24 l8 0 l-6 8 l-8 0z" fill="${stripe}"/>`).join("");
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <rect x="-24" y="-14" width="48" height="36" rx="3" fill="${slate}" stroke="${gold ? "#8a6a1a" : "#4a4a4a"}" stroke-width="1.6"/>
    <path d="M-20 4 h40 M-20 12 h40" stroke="${gold ? "#8a6a1a" : "#5a5a5a"}" stroke-width="1"/>
    <g class="swt" style="animation-duration:1.6s;transform-origin:-24px -16px"><rect x="-24" y="-24" width="48" height="8" fill="${slate}" stroke="${gold ? "#8a6a1a" : "#4a4a4a"}" stroke-width="1.2"/>${stripes}</g>
    <circle cx="-9" cy="-4" r="5" fill="#fff"/><circle cx="9" cy="-4" r="5" fill="#fff"/>
    <g class="av-blink"><circle cx="-8.4" cy="-3.6" r="2.4" fill="#0a0a14"/><circle cx="9.6" cy="-3.6" r="2.4" fill="#0a0a14"/></g>
    <path d="M-6 8 q6 5 12 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<path d="M-18 -26 q16 -14 32 -4 q-2 4 -8 4 h-24z" fill="#c8102e"/><circle cx="-2" cy="-34" r="2" fill="#c8102e"/>` : ""}
    ${level >= 3 ? `<g transform="translate(30 6) rotate(-15)"><path d="M-4 -4 l14 -6 v20 l-14 -6z" fill="#e8e8f0" stroke="#5a5a6a"/><rect x="-8" y="-4" width="5" height="8" fill="#ffd25a"/></g>` : ""}
    ${level >= 4 ? `<g transform="translate(-30 14)"><circle r="9" fill="#2a2a2a" stroke="#9a9aa8" stroke-width="1.5"/>${[0,1,2,3,4].map(k=>{ const a = k*1.2566; return `<circle cx="${f1(Math.cos(a)*5)}" cy="${f1(Math.sin(a)*5)}" r="2" fill="#9a9aa8"/>`; }).join("")}</g>` : ""}
    ${level >= 6 ? `<path d="M-16 -8 h13 v5 q-6 4 -13 0z M3 -8 h13 v5 q-6 4 -13 0z" fill="#0a0a14"/><path d="M-3 -7 h6" stroke="#0a0a14" stroke-width="1.6"/>` : ""}
    ${level >= 1 ? `<text class="blink" x="20" y="-30" font-size="11" fill="#ffd25a">★</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<path d="M100 14 l12 26 l28 3 l-21 19 l6 28 l-25 -14 l-25 14 l6 -28 l-21 -19 l28 -3z" fill="#ffd25a" stroke="${c}" stroke-width="3"/>`
    + `<rect x="20" y="90" width="160" height="14" fill="#1a1a1a"/>` + Array.from({length:10},(_,k)=>`<rect x="${26+k*16}" y="93" width="8" height="8" fill="#fff"/>`).join("")
    + [[30,26],[170,30]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<circle cx="85" cy="50" r="34" fill="#2a2a2a" stroke="${c}" stroke-width="3"/>` + [0,1,2,3,4].map(k=>{ const a = k*1.2566; return `<circle cx="${f1(85+Math.cos(a)*18)}" cy="${f1(50+Math.sin(a)*18)}" r="7" fill="#5a5a5a"/>`; }).join("") + `<circle cx="85" cy="50" r="5" fill="${c}"/>`);
  if (t === "trojan") return W(170,100,`<path d="M60 80 q-20 -30 4 -60 M110 80 q20 -30 -4 -60" stroke="${c}" stroke-width="4" fill="none"/>` + [0,1,2,3].map(k=>`<ellipse cx="${56+k*2}" cy="${70-k*14}" rx="6" ry="3" fill="${c}"/><ellipse cx="${114-k*2}" cy="${70-k*14}" rx="6" ry="3" fill="${c}"/>`).join("") + `<text x="85" y="56" text-anchor="middle" font-size="10" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">SELECTION</text>`);
  if (t === "adware") return W(170,100,`<path d="M62 40 l8 50 h30 l8 -50z" fill="#fff" stroke="#e8243a" stroke-width="2"/><path d="M68 40 v50 M85 40 v50 M102 40 v50" stroke="#e8243a" stroke-width="5"/>` + [0,1,2,3,4].map(k=>`<circle cx="${66+k*9}" cy="${34-(k%2)*6}" r="7" fill="#fff4c0" stroke="${c}"/>`).join(""));
  if (t === "spam") return W(170,90,`<rect x="50" y="26" width="70" height="38" rx="3" fill="#ffd25a" stroke="${c}" stroke-width="2"/><path d="M98 26 v38" stroke="#8a6a1a" stroke-dasharray="3 3"/><text x="74" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#5a3a08" font-family="Chakra Petch,sans-serif">ADMIT 1</text>`);
  if (t === "blocked") return W(170,100,`<rect x="40" y="26" width="90" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="60" text-anchor="middle" font-size="24" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">CUT!</text>`);
  return null;
}
registerSubject({
  key:"film", name:"Film", theme:"A clapperboard rolling across the studio backlot", gemWord:"Blockbuster", gemTitle:"One in a Blockbuster", emoji:"🎬",
  blurb:"You're a <b>clapperboard</b> in the script room. Each prompt has many correct answers. <b>Obvious answers barely roll the camera. Answers other filmmakers missed shoot more frames</b>, past the casting call, the Western set, the sci-fi set and the green screen, through the sound stage and the editing suite, down the red carpet and into the cinema, until a whole feature film is in the can.",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Blockbuster", rootkit:"Cult classic", trojan:"Festival pick", adware:"Matinee", spam:"Trailer"}, blocked:"Flop", fw:"CUT!",
  notes:{rootkit:"A cult classic: very few filmmakers got this far.", trojan:"A festival pick: not the usual answer.", adware:"A matinee: correct and common.", spam:"The trailer: what everyone sees first."},
  ladder:{gem:"One in a Blockbuster: almost no one thinks of it", rootkit:"Cult classic: a rare answer", trojan:"Festival pick: a strong, less common answer", adware:"Matinee: correct and common", spam:"Trailer: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Action ▶", inject:"Shoot", hint:"▶ rarer answers shoot more frames ▶", count:"rolling the camera"},
  shout:t => ({gem:"THAT'S A WRAP!", rootkit:"CULT CLASSIC!", blocked:"CUT!"})[t],
  particles:["★","▶","●","◆"], particleColor:"#ffd25a",
  meter:{label:"FRAMES SHOT", fmt:fmtF, zone:fmtF, tick:fmtF, gain:(a,b)=>`shoot ${fmtF(b)}`},
  start:{bg:"linear-gradient(90deg,#120e0a,#1a1612)", label:"Start · 1 frame", zone:"A blank page", color:"#ffd25a"},
  endBg:"linear-gradient(90deg,#06081a,#020308)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"The director's cut",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
