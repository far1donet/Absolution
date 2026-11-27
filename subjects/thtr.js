/* Theatre — a theatre mask rises through the playhouse: from the trap room under the stage, through the orchestra pit,
   onto the stage and into the wings, up past the stalls, the dress circle and the upper circle, through the fly tower
   and the lighting grid to the highest seats of all: the gods. Rarer answers play to bigger audiences.
   Syllabus: IB Theatre (first assessment 2024): theatre traditions, practitioners and texts; creating, performing,
   directing and designing; and the HL solo theatre piece. */
(function(){
const CATALOG = [
  {label:"Contexts: traditions, theorists and texts", units:[
    {code:"T", name:"Theatre in context", topics:[["T.1","World theatre traditions"],["T.2","Theatre practitioners and theorists"],["T.3","Plays, playwrights and genres"]]},
  ]},
  {label:"Processes: performing, directing and designing", units:[
    {code:"P", name:"Performing and directing", topics:[["P.1","Acting and performance skills"],["P.2","Directing and production roles"]]},
    {code:"D", name:"Design", topics:[["D.1","Set, costume and props"],["D.2","Lighting and sound"]]},
  ]},
  {label:"Creating and presenting", units:[
    {code:"C", name:"Creating theatre", topics:[["C.1","Devising and collaborative creation"],["S.1","Staging and theatre spaces"]]},
    {code:"H", name:"HL extension", topics:[["H.1","The solo theatre piece",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- T.1 World theatre traditions ---------- */
P("th001","T.1","Name a world theatre tradition.","Kutiyattam",[
  ["Greek tragedy",16,"ancient greek theatre","greek theatre"],["Commedia dell'arte",14,"commedia dell arte","commedia"],["Noh",10,"noh theatre"],["Kabuki",10],["Shakespearean theatre",8,"elizabethan theatre","elizabethan"],["Beijing opera",8,"peking opera","chinese opera"],
  ["Kathakali",6],["Bunraku",5,"japanese puppet theatre"],["Wayang kulit",4,"shadow puppetry","shadow puppets"],["Melodrama",4],["Mime",3],["Topeng",2,"balinese masked dance"],["Kutiyattam",.4,"koodiyattam"]]),
P("th002","T.1","Name a stock character or convention of commedia dell'arte.","Tartaglia",[
  ["Arlecchino",18,"harlequin"],["Pantalone",14,"pantaloon"],["Il Dottore",10,"the doctor","dottore"],["Columbina",8,"columbine"],["Pulcinella",8,"punch"],["The lovers",6,"innamorati","lovers"],["Il Capitano",6,"the captain","capitano"],
  ["Brighella",5],["Zanni",5],["Masks",8,"half masks"],["Lazzi",5,"lazzo"],["Improvisation",6,"improvised scenarios"],["Tartaglia",.4]]),
P("th003","T.1","Name a feature of ancient Greek theatre.","Ekkyklema",[
  ["The chorus",18,"chorus"],["Masks",16,"mask"],["The amphitheatre",10,"amphitheatre","theatron"],["Catharsis",8],["Tragedy",8],["Comedy",6],["The skene",6,"skene"],["The orchestra",5,"orchestra"],["Deus ex machina",5,"the crane","mechane"],
  ["Messenger speeches",4,"messenger"],["The festival of Dionysus",4,"dionysia","dionysus"],["Satyr plays",3,"satyr play"],["Hubris",3],["Ekkyklema",.4,"eccyclema"]]),
/* ---------- T.2 Practitioners and theorists ---------- */
P("th004","T.2","Name a theatre practitioner or theorist.","Zeami",[
  ["Konstantin Stanislavski",20,"stanislavski","stanislavsky"],["Bertolt Brecht",18,"brecht"],["Antonin Artaud",10,"artaud"],["Jerzy Grotowski",8,"grotowski"],["Augusto Boal",8,"boal"],["Peter Brook",6,"brook"],["Jacques Lecoq",5,"lecoq"],
  ["Vsevolod Meyerhold",4,"meyerhold"],["Frantic Assembly",4],["Complicité",3,"complicite"],["Michael Chekhov",3],["Anne Bogart",3,"bogart","viewpoints"],["Tadashi Suzuki",2,"suzuki"],["Zeami",.4,"zeami motokiyo"]]),
P("th005","T.2","Name a technique from Stanislavski's system.","Communion",[
  ["The magic if",18,"magic if"],["Given circumstances",14],["Emotion memory",12,"emotional memory","affective memory","emotional recall"],["Objectives",10,"objective","tasks"],["Super-objective",8,"super objective"],["Subtext",6],["Units",5,"units and objectives","bits"],
  ["Through-line",5,"through line","through line of action"],["Circles of attention",4,"circles of concentration"],["The method of physical actions",4,"method of physical actions","physical actions"],["Tempo-rhythm",3,"tempo rhythm"],["Relaxation",3],["Communion",.4]]),
P("th006","T.2","Name a technique of Brecht's epic theatre.","Historicization",[
  ["The alienation effect",20,"alienation","verfremdungseffekt","v effekt","distancing"],["Breaking the fourth wall",12,"direct address"],["Placards",10,"signs","captions"],["Gestus",8,"gest"],["Narration",8,"narrator"],["Multi-roling",6,"multi role","multirole"],
  ["Songs",5,"music","song"],["Episodic structure",5,"episodic","montage"],["Visible stage machinery",4,"exposed lighting","bare stage"],["Speaking stage directions",3,"third person","stage directions"],["Bright white light",3,"white light"],["Historicization",.4,"historicisation"]]),
/* ---------- T.3 Plays, playwrights and genres ---------- */
P("th007","T.3","Name a playwright.","Kālidāsa",[
  ["William Shakespeare",22,"shakespeare"],["Arthur Miller",10,"miller"],["Tennessee Williams",8,"williams"],["Henrik Ibsen",8,"ibsen"],["Anton Chekhov",8,"chekhov"],["Samuel Beckett",8,"beckett"],["Sophocles",6],["Oscar Wilde",6,"wilde"],
  ["Molière",5,"moliere"],["Euripides",4],["Caryl Churchill",4,"churchill"],["August Wilson",3],["Lorraine Hansberry",3,"hansberry"],["Federico García Lorca",3,"lorca","garcia lorca"],["Wole Soyinka",3,"soyinka"],["Harold Pinter",3,"pinter"],["Kālidāsa",.4,"kalidasa"]]),
P("th008","T.3","Name a famous play.","Death and the King's Horseman",[
  ["Hamlet",16],["Romeo and Juliet",12],["Macbeth",12],["Death of a Salesman",8],["Waiting for Godot",8],["A Doll's House",6,"a doll s house","dolls house"],["Oedipus Rex",6,"oedipus","oedipus the king"],["The Crucible",6,"crucible"],
  ["A Streetcar Named Desire",5,"streetcar named desire"],["The Importance of Being Earnest",5,"importance of being earnest"],["Mother Courage and Her Children",4,"mother courage"],["Antigone",4],["Medea",3],["The Cherry Orchard",3,"cherry orchard"],["A Raisin in the Sun",3,"raisin in the sun"],
  ["Death and the King's Horseman",.4,"death and the king s horseman"]]),
P("th009","T.3","Name a genre or style of theatre.","Grand Guignol",[
  ["Tragedy",14],["Comedy",14],["Musical theatre",12,"musical","musicals"],["Farce",8],["Physical theatre",8],["Theatre of the Absurd",8,"absurdism","absurd"],["Naturalism",6,"realism"],["Epic theatre",6],["Melodrama",5],["Verbatim theatre",4,"verbatim"],
  ["Pantomime",4,"panto"],["Immersive theatre",4,"immersive"],["Expressionism",3],["Forum theatre",3,"theatre of the oppressed"],["Grand Guignol",.4]]),
/* ---------- P.1 Acting and performance skills ---------- */
P("th010","P.1","Name an acting or vocal skill.","Laban efforts",[
  ["Projection",14],["Facial expression",12,"facial expressions"],["Gesture",10,"gestures"],["Diction",8,"articulation","enunciation"],["Pace",8,"tempo"],["Pitch",6],["Tone",6,"tone of voice"],["Pause",6,"pauses","timing"],["Posture",6],["Movement",6],
  ["Eye contact",5],["Characterization",5,"characterisation"],["Proxemics",4,"use of space"],["Emphasis",3,"stress"],["Breath control",3,"breathing"],["Laban efforts",.4,"laban","laban movement"]]),
P("th011","P.1","Name a way an actor can show a character's status on stage.","The status see-saw",[
  ["Levels",16,"height","standing over"],["Posture",14,"body language"],["Eye contact",10,"holding eye contact"],["Stillness",8,"being still"],["Use of space",8,"proxemics","taking up space"],["Voice",8,"volume","tone"],["Pace of speech",6,"speaking slowly","pace"],
  ["Costume",5],["Gesture",5,"gestures"],["Stage position",5,"centre stage","downstage"],["Who sits and who stands",4,"sitting","standing"],["Touch",3],["The status see-saw",.4,"status see saw","keith johnstone"]]),
/* ---------- P.2 Directing and production roles ---------- */
P("th012","P.2","Name a responsibility of a theatre director.","Table work",[
  ["Casting",16,"auditions"],["Blocking",14,"staging"],["Creating a concept",12,"vision","concept","interpretation"],["Running rehearsals",10,"rehearsals"],["Working with designers",8,"designers"],["Giving notes",6,"notes","feedback"],["Coaching actors",6,"directing actors"],
  ["Choosing the play",5,"choosing the script"],["Pacing the show",4,"pace"],["The technical rehearsal",4,"tech rehearsal","tech"],["Table work",.4,"table read","script analysis"]]),
P("th013","P.2","Name a stage management or backstage role.","Call boy",[
  ["Stage manager",18,"sm"],["Deputy stage manager",10,"dsm"],["Assistant stage manager",8,"asm"],["Lighting operator",8,"lighting technician"],["Sound operator",8,"sound technician"],["Stagehand",8,"crew","stage crew"],["Props master",6,"props manager","props"],
  ["Dresser",5,"wardrobe"],["Fly operator",4,"flyman","flies"],["Prompter",4,"prompt"],["Front of house manager",4,"front of house","usher"],["Call boy",.4,"callboy"]]),
/* ---------- D.1 Set, costume and props ---------- */
P("th014","D.1","Name an element of theatre design.","Scenography",[
  ["Set",18,"set design","scenery"],["Costume",16,"costumes","costume design"],["Lighting",16,"lighting design"],["Sound",12,"sound design"],["Props",8,"properties"],["Make-up",6,"makeup"],["Masks",4],["Projection",4,"video","projections"],["Puppetry",3,"puppets"],
  ["Hair and wigs",3,"wigs"],["Special effects",3,"effects","smoke"],["Scenography",.4]]),
P("th015","D.1","Name a type of stage set or scenery.","Periaktoi",[
  ["Box set",14],["Minimalist set",12,"minimalist","bare stage"],["Naturalistic set",10,"realistic set"],["Flats",10,"flat"],["Backdrop",8,"backcloth","cyclorama"],["Composite set",6,"split set"],["Revolve",6,"revolving stage","turntable"],
  ["Trucks",5,"wagons","truck"],["Rostra",5,"platforms","rostrum"],["Gauze",4,"scrim"],["Projection",4,"projected scenery"],["Periaktoi",.4,"periaktos"]]),
/* ---------- D.2 Lighting and sound ---------- */
P("th016","D.2","Name a stage light or lighting effect.","Pepper's ghost",[
  ["Spotlight",16,"spot"],["Follow spot",10,"followspot"],["Blackout",10],["Floodlight",8,"flood"],["Fresnel",6],["Profile spot",6,"profile","ellipsoidal"],["Gobo",6],["Colour gels",6,"gels","coloured gels","filters"],["Wash",5,"general wash"],
  ["Fade",5,"fades"],["Strobe",4],["Par can",3,"par"],["Backlight",3,"backlighting"],["Pepper's ghost",.4,"pepper s ghost","peppers ghost"]]),
P("th017","D.2","Name a way sound is used in theatre.","Binaural sound",[
  ["Sound effects",20,"sfx"],["Music",16,"live music","recorded music"],["Underscoring",8,"underscore"],["Soundscapes",8,"soundscape"],["Atmosphere",8,"ambient sound","ambience"],["Scene transitions",6,"transitions"],["Microphones",5,"radio mics"],
  ["Silence",5],["Voice-over",4,"voiceover"],["Live foley",3,"foley"],["Binaural sound",.4,"binaural","headphones"]]),
/* ---------- C.1 Devising and collaborative creation ---------- */
P("th018","C.1","Name a drama or devising exercise.","Chair duets",[
  ["Improvisation",16,"improv"],["Hot-seating",14,"hot seating"],["Freeze frames",12,"tableaux","tableau","still images"],["Thought-tracking",8,"thought tracking"],["Role on the wall",6],["Mirror exercise",6,"mirroring"],["Conscience alley",6,"thought tunnel"],
  ["Character walks",4],["Status games",4],["Gibberish",3],["Viewpoints",3],["Chair duets",.4,"chair duet"]]),
P("th019","C.1","Name a starting point (stimulus) for devised theatre.","Overheard conversations",[
  ["A photograph",14,"photo","image"],["A poem",12,"poetry"],["A news story",12,"news","newspaper article"],["A piece of music",10,"music","song"],["An object",8,"prop"],["A painting",8,"artwork"],["A myth or legend",6,"myth","legend","folk tale"],
  ["A historical event",6,"history"],["A quotation",5,"quote"],["A personal story",5,"personal experience"],["A place",4,"location"],["Overheard conversations",.4,"overheard conversation","eavesdropping"]]),
/* ---------- S.1 Staging and theatre spaces ---------- */
P("th020","S.1","Name a type of stage or performance space.","Hanamichi",[
  ["Proscenium arch",18,"proscenium","end on"],["Thrust stage",14,"thrust"],["Theatre in the round",12,"in the round","arena"],["Traverse",8,"traverse stage"],["Black box",6,"studio theatre"],["Promenade",6,"promenade theatre"],["Site-specific",6,"site specific"],
  ["Amphitheatre",5,"open air"],["Immersive",3,"immersive space"],["Street theatre",3,"street"],["Hanamichi",.4]]),
P("th021","S.1","Name an area of the stage.","Vomitory",[
  ["Centre stage",16,"center stage"],["Upstage",14],["Downstage",14],["Stage left",12],["Stage right",12],["The wings",8,"wings"],["The apron",6,"apron"],["Backstage",5],["The orchestra pit",4,"orchestra pit","pit"],["The fly tower",3,"fly tower","flies"],
  ["The trap",3,"trapdoor","trap room"],["Vomitory",.4,"vom","voms"]]),
P("th022","S.1","Name a famous theatre or theatre district.","Teatro Olimpico",[
  ["Shakespeare's Globe",18,"the globe","globe theatre","shakespeare s globe"],["Broadway",16],["The West End",14,"west end"],["Sydney Opera House",8],["The National Theatre",6,"national theatre"],["The Royal Shakespeare Theatre",5,"rsc","royal shakespeare company"],
  ["Edinburgh Festival Fringe",5,"edinburgh fringe","the fringe"],["Theatre of Epidaurus",4,"epidaurus"],["Comédie-Française",3,"comedie francaise"],["Moscow Art Theatre",3],["Kabuki-za",3,"kabukiza"],["The Old Vic",3,"old vic"],["Abbey Theatre",2],["Teatro Olimpico",.4]]),
/* ---------- H.1 The solo theatre piece (HL) ---------- */
P("th023","H.1","Name a type of solo performance.","Rakugo",[
  ["Monologue",20,"monologues"],["One-person show",14,"one person show","one man show","one woman show"],["Stand-up comedy",12,"stand up","standup"],["Mime",8],["Storytelling",8],["Spoken word",6,"slam poetry"],["Performance art",5],
  ["Solo physical theatre",5,"physical theatre"],["Clowning",4,"clown"],["Solo puppetry",3,"puppetry"],["Rakugo",.4]],
  [], HL),
P("th024","H.1","Name a way a solo performer can engage an audience.","Complicité",[
  ["Direct address",18,"talking to the audience"],["Eye contact",12],["Audience participation",10,"participation","interaction"],["Humour",10,"humor","comedy"],["Storytelling",8,"story"],["Physicality",6,"movement"],["Multi-roling",6,"multi role","multirole"],
  ["Silence",5,"pauses","pause"],["Surprise",4,"shock"],["Changing pace",4,"pace"],["Props",3],["Complicité",.4,"complicite"]],
  [], HL),
];

/* ================= the playhouse (up) ================= */
const BANDS = [
  {name:"The trap room",        zone:"The trap room",        from:0,  to:40,  hue:30,  bg:["#0a0806","#120c08"]},
  {name:"The orchestra pit",    zone:"The orchestra pit",    from:40, to:100, hue:45,  bg:["#120c08","#18100c"]},
  {name:"The stage",            zone:"The stage",            from:100,to:170, hue:30,  bg:["#18100c","#221810"]},
  {name:"The wings",            zone:"The wings",            from:170,to:250, hue:0,   bg:["#0e0c10","#120e14"]},
  {name:"The stalls",           zone:"The stalls",           from:250,to:320, hue:350, bg:["#120e14","#2a0e14"]},
  {name:"The dress circle",     zone:"The dress circle",     from:320,to:390, hue:45,  bg:["#2a0e14","#2a1414"]},
  {name:"The upper circle",     zone:"The upper circle",     from:390,to:460, hue:350, bg:["#2a1414","#1e0e18"]},
  {name:"The fly tower",        zone:"The fly tower",        from:460,to:530, hue:30,  bg:["#1e0e18","#100c10"]},
  {name:"The lighting grid",    zone:"The lighting grid",    from:530,to:600, hue:50,  bg:["#100c10","#0c0a14"]},
  {name:"The gods",             zone:"The gods",             from:600,to:760, hue:45,  bg:["#0c0a14","#1a1430"]},
];
// audience size at each band boundary: from one person to the 14,000 seats of Epidaurus
const KNOTS = [[0,1],[40,3],[100,12],[170,40],[250,120],[320,300],[390,700],[460,1500],[530,3000],[600,6000],[760,14000]];
function aud(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(14000, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtA(p){ const n = aud(p); return n === 1 ? "an audience of 1" : `${n.toLocaleString("en-GB")} in the audience`; }
const FACTS = [
  [-30,"break a leg!"],[12,"trapdoors let ghosts and demons rise onto the stage"],[30,"the Globe's stage trap was nicknamed 'hell'"],
  [60,"Wagner's theatre at Bayreuth hid the orchestra under the stage"],[85,"musicals need a live band in the pit"],[115,"'upstage' comes from stages that sloped up away from the audience"],[150,"glow tape marks where actors stand in a blackout"],
  [190,"never say 'Macbeth' in a theatre: call it 'the Scottish play'"],[225,"the stage manager calls every cue"],[265,"the fourth wall is the invisible wall between stage and audience"],[300,"Elizabethan audiences standing in the yard were called groundlings"],
  [340,"boxes let the rich be seen as much as they saw the show"],[370,"applause can mean bravo, encore or a standing ovation"],[410,"the upper circle is also called the balcony"],[440,"opera glasses help you see from the back"],
  [480,"the fly tower can hide whole scenes above the stage"],[510,"deus ex machina: a god lowered onto the stage by a crane"],[550,"coloured gels set the mood of stage lighting"],[580,"a ghost light is left burning in an empty theatre"],
  [625,"'the gods' are the highest, cheapest seats"],[670,"the ancient theatre of Epidaurus seats about 14,000 people"],[720,"take a bow!"],
];
function wall(i, len, side){
  const r = srand(9173 + i*53 + (side==="r"?31:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const seats = (y, c, n, w) => Array.from({length: n}, (_, k)=>`<rect x="${f1(8 + k*(104/n))}" y="${y}" width="${f1(104/n - 3)}" height="${w}" rx="3" fill="${c}"/><rect x="${f1(8 + k*(104/n))}" y="${y-6}" width="${f1(104/n - 3)}" height="7" rx="3" fill="${c}" opacity=".8"/>`).join("");
  switch(i){
    case 0: // the trap room: beams, ropes and a trapdoor lift
      for (let x = 10; x < 120; x += 36) s+=`<rect x="${x}" y="0" width="12" height="${len}" fill="#3a2414"/>`;
      rep(170, y=>{ s+=`<rect x="0" y="${y}" width="120" height="12" fill="#4a2e18"/><rect x="30" y="${y+40}" width="60" height="70" fill="#2a1a0e" stroke="#6a4424" stroke-width="2"/><path d="M60 ${y+12} v28" stroke="#c8b080" stroke-width="2"/>`
        + `<rect x="14" y="${y+124}" width="92" height="18" fill="#ffd25a"/><text x="60" y="${y+137}" text-anchor="middle" font-size="9" font-weight="700" fill="#2a1a0a" font-family="Chakra Petch,sans-serif">MIND YOUR HEAD</text>`; });
      break;
    case 1: // the orchestra pit: music stands with little lamps
      rep(110, y=>{ [0,1].forEach(k=>{ const x = 32 + k*56; s+=`<path d="M${x} ${y+70} v-40" stroke="#2a2a2a" stroke-width="3"/><rect x="${x-18}" y="${y+12}" width="36" height="24" fill="#1a1a1a" transform="rotate(-8 ${x} ${y+24})"/><rect x="${x-14}" y="${y+16}" width="28" height="16" fill="#f4ead0" transform="rotate(-8 ${x} ${y+24})"/><circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${x}" cy="${y+8}" r="3" fill="#ffd25a"/><circle cx="${x}" cy="${y+20}" r="16" fill="#ffd25a" opacity=".08"/>`; }); }, 10);
      break;
    case 2: // the stage: floorboards, glow-tape marks and footlights
      for (let x = 0; x < 120; x += 14) s+=`<rect x="${x}" y="0" width="13" height="${len}" fill="#5a3a1e"/>`;
      rep(90, y=>{ const x = f1(20 + r()*70); s+=`<path d="M${x} ${y} h12 M${f1(+x + 6)} ${y-6} v12" stroke="#c8ff5a" stroke-width="3" class="blink" style="animation-delay:-${f1(r()*3)}s"/>`; }, 20);
      rep(140, y=>{ s+=`<path d="M104 ${y} h12 v20 h-12z" fill="#2a2a2a"/><circle cx="104" cy="${y+10}" r="12" fill="#ffd25a" opacity=".2"/>`; }, 60);
      break;
    case 3: // the wings: black masking legs, cue lights and a prop table
      for (let x = 0; x < 120; x += 30) s+=`<rect x="${x}" y="0" width="22" height="${len}" fill="#0a0a0c"/><path d="M${x+6} 0 V${len} M${x+14} 0 V${len}" stroke="#16161a" stroke-width="3"/>`;
      rep(180, y=>{ s+=`<rect x="20" y="${y}" width="80" height="54" fill="#3a2a1a" stroke="#6a4a2a"/><path d="M30 ${y+10} h20 M60 ${y+10} h28 M30 ${y+30} h24 M64 ${y+30} h24" stroke="#f4f4f4" stroke-width="2"/><rect x="34" y="${y+14}" width="12" height="10" fill="#c8303a"/><circle cx="76" cy="${y+40}" r="6" fill="#d4af37"/>`
        + `<circle class="blink" cx="40" cy="${y+90}" r="6" fill="#ff3a3a"/><circle class="blink" style="animation-delay:.8s" cx="60" cy="${y+90}" r="6" fill="#3ee089"/><text x="60" y="${y+116}" text-anchor="middle" font-size="9" font-weight="700" fill="#c8c8d0" font-family="Chakra Petch,sans-serif">STANDBY</text>`; }, 30);
      break;
    case 4: // the stalls: rows of red velvet seats
      rep(30, y=>{ s+= seats(y, "#9a1a2a", 4, 18); }, 10);
      break;
    case 5: // the dress circle: a gilded balcony front and curtained boxes
      rep(200, y=>{ s+=`<rect x="0" y="${y}" width="120" height="30" fill="#d4af37"/>` + [0,1,2,3,4].map(k=>`<ellipse cx="${12+k*24}" cy="${y+15}" rx="8" ry="10" fill="none" stroke="#8a6a1a" stroke-width="2"/>`).join("")
        + `<path d="M20 ${y+50} h80 v80 h-80z" fill="#1a0a0e"/><path d="M20 ${y+50} q20 40 0 80 M100 ${y+50} q-20 40 0 80" fill="#8a0a1e"/><path d="M20 ${y+50} h80" stroke="#d4af37" stroke-width="4"/><circle cx="60" cy="${y+98}" r="8" fill="#e8c8a8"/>`; });
      break;
    case 6: // the upper circle: steep rows with tiny heads and opera glasses
      rep(26, y=>{ s+= seats(y, "#7a1424", 6, 14); if (r() < .35){ const x = f1(16 + r()*86); s+=`<circle cx="${x}" cy="${y-8}" r="5" fill="${["#e8c8a8","#c89a7a","#8a5a3a"][Math.floor(r()*3)]}"/>`; } }, 10);
      rep(240, y=>{ s+=`<g transform="translate(60 ${y})"><circle cx="-6" r="5" fill="#2a2a2a" stroke="#d4af37" stroke-width="1.5"/><circle cx="6" r="5" fill="#2a2a2a" stroke="#d4af37" stroke-width="1.5"/><path d="M0 4 v14" stroke="#d4af37" stroke-width="1.5"/></g>`; }, 100);
      break;
    case 7: // the fly tower: ropes, counterweights and hanging flats
      for (let x = 14; x < 120; x += 18) s+=`<path d="M${x} 0 V${len}" stroke="#c8b080" stroke-width="1.6"/>`;
      rep(130, y=>{ const k = Math.floor(r()*5), x = 8 + k*18; s+=`<rect x="${x}" y="${y}" width="${f1(30 + r()*40)}" height="${f1(50 + r()*40)}" fill="${["#3a5a8a","#5a8a4a","#8a5a3a","#6a4a7a"][Math.floor(r()*4)]}" stroke="#2a2a2a" stroke-width="2"/><rect x="104" y="${y+30}" width="12" height="26" fill="#4a4a54"/>`; }, 20);
      break;
    case 8: // the lighting grid: lanterns on bars, with coloured beams
      rep(120, y=>{ s+=`<rect x="0" y="${y}" width="120" height="6" fill="#3a3a44"/>` + [0,1,2].map(k=>{ const x = 18 + k*38, c = ["#ff4a6a","#4a8aff","#ffd25a","#3ee089","#c86aff"][Math.floor(r()*5)]; return `<rect x="${x-7}" y="${y+6}" width="14" height="20" rx="2" fill="#1a1a1a"/><path d="M${x-6} ${y+26} L${x-22} ${y+100} L${x+22} ${y+100} L${x+6} ${y+26}z" fill="${c}" opacity=".18"/><circle cx="${x}" cy="${y+26}" r="4" fill="${c}"/>`; }).join(""); }, 10);
      break;
    case 9: // the gods: a painted ceiling, chandeliers and gilded stars
      rep(60, y=>{ s+=`<text x="${f1(10 + r()*100)}" y="${y}" font-size="${f1(8 + r()*8)}" fill="#d4af37" opacity="${f1(.4 + r()*.5)}">★</text>`; }, 10);
      rep(220, y=>{ s+=`<path d="M60 ${y} v30" stroke="#d4af37" stroke-width="2"/><path d="M30 ${y+40} q30 30 60 0" stroke="#d4af37" stroke-width="3" fill="none"/>` + [0,1,2,3,4].map(k=>`<circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${30+k*15}" cy="${y+40+(k%4 ? 10 : 0)}" r="4" fill="#fff8d0"/><path d="M${30+k*15} ${y+46+(k%4 ? 10 : 0)} l-3 8 h6z" fill="#e8f0ff" opacity=".7"/>`).join("") + `<circle cx="60" cy="${y+50}" r="34" fill="#fff8d0" opacity=".08"/>`; }, 60);
      break;
  }
  return vwall(s, len, side);
}
/* the theatre mask: it earns a ruff, a rose, a crown and its tragic twin, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, face = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 70% 82%)` : "#f4ead8", line = gold ? "#8a6a1a" : "#8a7a5a";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    ${level >= 2 ? `<g transform="translate(0 20)">${Array.from({length: 9}, (_, k)=>`<ellipse cx="${-16+k*4}" cy="0" rx="4" ry="6" fill="#fff" stroke="#c8c0b0" stroke-width=".8"/>`).join("")}</g>` : ""}
    <path d="M-20 -16 q20 -12 40 0 q4 26 -20 38 q-24 -12 -20 -38z" fill="${face}" stroke="${line}" stroke-width="1.8"/>
    <path d="M-13 -7 q5 -6 10 0 q-5 4 -10 0z M3 -7 q5 -6 10 0 q-5 4 -10 0z" fill="#1a0e0a"/>
    <g class="av-blink"><circle cx="-8" cy="-7" r="1.6" fill="#fff"/><circle cx="8" cy="-7" r="1.6" fill="#fff"/></g>
    <path d="M-10 6 q10 12 20 0 q-10 5 -20 0z" fill="#8a1a1a"/>
    <path d="M-17 -12 q4 -4 9 -3 M17 -12 q-4 -4 -9 -3" stroke="${line}" stroke-width="1.4" fill="none"/>
    ${level >= 3 ? `<g transform="translate(26 14) rotate(30)"><path d="M0 0 v18" stroke="#3a7a3a" stroke-width="2"/><circle cy="-2" r="5" fill="#c8102e"/><path d="M-3 -2 q3 -5 6 0" stroke="#8a0a1a" fill="none"/></g>` : ""}
    ${level >= 4 ? `<path d="M-14 -20 l4 -10 l5 6 l5 -9 l5 9 l5 -6 l4 10z" fill="#ffd25a" stroke="#b8861a" stroke-width="1"/>` : ""}
    ${level >= 6 ? `<g transform="translate(-28 10) scale(.45)"><path d="M-20 -16 q20 -12 40 0 q4 26 -20 38 q-24 -12 -20 -38z" fill="#c8d0e0" stroke="#5a6a8a" stroke-width="3"/><path d="M-13 -5 q5 -4 10 2 M3 -3 q5 -6 10 -2" stroke="#1a1a2a" stroke-width="3" fill="none"/><path d="M-9 12 q9 -10 18 0" stroke="#1a1a2a" stroke-width="3" fill="none"/></g>` : ""}
    ${level >= 1 ? `<text class="blink" x="20" y="-24" font-size="11" fill="#ffcf6a">★</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<path d="M100 10 L60 100 L140 100z" fill="#fff8d0" opacity=".25"/><circle cx="100" cy="12" r="8" fill="#fff8d0"/><path d="M80 70 q20 -12 40 0 q4 22 -20 30 q-24 -8 -20 -30z" fill="#ffd25a" stroke="${c}" stroke-width="2"/>`
    + [[30,26],[170,30],[36,94],[166,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M40 20 q20 50 0 70 M130 20 q-20 50 0 70" fill="#8a0a1e"/><path d="M40 20 h90" stroke="#d4af37" stroke-width="6"/><text x="85" y="62" text-anchor="middle" font-size="22" fill="${c}">★</text>`);
  if (t === "trojan") return W(170,100,`<path d="M65 30 q20 -10 40 0 q4 24 -20 34 q-24 -10 -20 -34z" fill="#f4ead8" stroke="${c}" stroke-width="2"/><path d="M75 52 q10 8 20 0" stroke="#8a1a1a" stroke-width="2" fill="none"/>`);
  if (t === "adware") return W(170,100,Array.from({length: 4}, (_, k)=>`<circle cx="${55+k*20}" cy="40" r="8" fill="#e8c8a8"/><rect x="${47+k*20}" y="50" width="16" height="30" rx="5" fill="${c}"/>`).join(""));
  if (t === "spam") return W(170,90,`<path d="M70 30 q15 -8 30 0 q3 18 -15 26 q-18 -8 -15 -26z" fill="none" stroke="${c}" stroke-width="2" stroke-dasharray="4 3"/>`);
  if (t === "blocked") return W(170,100,`<rect x="34" y="26" width="102" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="20" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">BOOED!</text>`);
  return null;
}
registerSubject({
  key:"thtr", name:"Theatre", theme:"A theatre mask rising through the playhouse to the gods", gemWord:"Spotlight", gemTitle:"One in a Spotlight", emoji:"🎭",
  blurb:"You're a <b>theatre mask</b> waiting in the trap room under the stage. Each prompt has many correct answers. <b>Obvious answers barely get you on stage. Answers other actors missed play to bigger houses</b>, up through the orchestra pit, onto the stage and into the wings, past the stalls, the dress circle and the upper circle, through the fly tower and the lighting grid, to the highest seats of all: the gods.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Spotlight", rootkit:"Showstopper", trojan:"Leading role", adware:"Ensemble", spam:"Understudy"}, blocked:"Missed cue", fw:"BOOED!",
  notes:{rootkit:"A showstopper: very few actors got this far.", trojan:"A leading role: not the usual answer.", adware:"The ensemble: correct and common.", spam:"The understudy: what everyone says first."},
  ladder:{gem:"One in a Spotlight: almost no one thinks of it", rootkit:"Showstopper: a rare answer", trojan:"Leading role: a strong, less common answer", adware:"Ensemble: correct and common", spam:"Understudy: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Perform ▲", inject:"Perform", hint:"▲ rarer answers play to bigger audiences ▲", count:"waiting in the wings"},
  shout:t => ({gem:"BRAVISSIMO!", rootkit:"SHOWSTOPPER!", blocked:"MISSED CUE!"})[t],
  particles:["★","✦","♦","☾"], particleColor:"#ffcf6a",
  meter:{label:"AUDIENCE", fmt:fmtA, zone:fmtA, tick:fmtA, gain:(a,b)=>`play to ${fmtA(b)}`},
  start:{bg:"linear-gradient(0deg,#050403,#0a0806)", label:"Start · 1 person", zone:"An empty house", color:"#ffcf6a"},
  endBg:"#1a1430",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Curtain call",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
