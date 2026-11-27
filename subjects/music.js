/* Music — a quaver rises up the range of hearing: from the lowest organ pipes past the double bass, the cello, the
   guitar and the piano, through the choir, the violins, the flutes and the birdsong to the very edge of hearing.
   Rarer answers climb to higher pitches. The meter shows the frequency and its note name.
   Syllabus: IB Music (first assessment 2022): the four areas of inquiry, musical elements and processes, and the HL
   contemporary music-maker. */
(function(){
const CATALOG = [
  {label:"Musical elements", units:[
    {code:"F", name:"Elements and instruments", topics:[["F.1","Dynamics, texture and timbre"],["F.2","Pitch, harmony and tonality"],["F.3","Rhythm, tempo and structure"],["F.4","Instruments and voices"]]},
  ]},
  {label:"Areas of inquiry", units:[
    {code:"A", name:"Areas of inquiry", topics:[["A.1","Music for sociocultural and political expression"],["A.2","Music for listening and performance"],["A.3","Music for dramatic impact, movement and entertainment"],["A.4","Music technology in the electronic and digital age"]]},
  ]},
  {label:"Musical processes and the HL extension", units:[
    {code:"P", name:"Exploring, experimenting and presenting", topics:[["P.1","Creating and performing"]]},
    {code:"H", name:"The contemporary music-maker", topics:[["H.1","The contemporary music-maker",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- F.1 Dynamics, texture and timbre ---------- */
P("mu001","F.1","Name an element of music.","Silence",[
  ["Pitch",14],["Rhythm",14],["Dynamics",12,"volume","loudness"],["Tempo",10,"speed"],["Melody",10,"tune"],["Harmony",8,"chords"],["Timbre",8,"tone colour","tone color","sonority"],["Texture",8],["Structure",6,"form"],
  ["Tonality",4,"key"],["Metre",4,"meter","time signature"],["Articulation",3],["Silence",.4,"rests"]]),
P("mu002","F.1","Name a dynamic marking or term.","Morendo",[
  ["Forte",18,"f","loud"],["Piano",18,"p","soft","quiet"],["Crescendo",14,"cresc"],["Diminuendo",10,"dim"],["Fortissimo",8,"ff"],["Pianissimo",8,"pp"],["Mezzo-forte",6,"mezzo forte","mf"],["Mezzo-piano",5,"mezzo piano","mp"],
  ["Decrescendo",4,"decresc"],["Sforzando",4,"sfz"],["Fortepiano",2,"fp"],["Morendo",.4]]),
P("mu003","F.1","Name a type of musical texture or way parts fit together.","Hocket",[
  ["Monophonic",16,"monophony"],["Homophonic",14,"homophony"],["Polyphonic",14,"polyphony"],["Melody and accompaniment",10,"melody and accompaniment texture"],["Counterpoint",8,"contrapuntal"],["Unison",6],["Canon",6,"round"],
  ["Heterophonic",5,"heterophony"],["Imitation",4],["Call and response",4],["Drone",4],["Hocket",.4]]),
/* ---------- F.2 Pitch, harmony and tonality ---------- */
P("mu004","F.2","Name a type of scale or mode.","Hirajoshi",[
  ["Major",20,"major scale"],["Minor",18,"minor scale","natural minor"],["Chromatic",10,"chromatic scale"],["Pentatonic",10,"pentatonic scale"],["Blues scale",8,"blues"],["Harmonic minor",6],["Melodic minor",5],["Whole-tone",5,"whole tone","whole tone scale"],
  ["Dorian",4,"dorian mode"],["Mixolydian",3,"mixolydian mode"],["Octatonic",2,"diminished scale"],["Raga",2,"ragas"],["Maqam",2,"maqamat"],["Hirajoshi",.4,"hirajoshi scale"]]),
P("mu005","F.2","Name a type of chord or cadence.","Tierce de Picardie",[
  ["Major chord",14,"major triad"],["Minor chord",12,"minor triad"],["Perfect cadence",12,"authentic cadence","v i"],["Plagal cadence",8,"amen cadence","iv i"],["Imperfect cadence",8,"half cadence"],["Interrupted cadence",6,"deceptive cadence"],
  ["Seventh chord",6,"dominant seventh","7th chord"],["Diminished chord",5,"diminished"],["Augmented chord",4,"augmented"],["Power chord",4],["Suspended chord",4,"sus chord","sus4"],["Tierce de Picardie",.4,"picardy third"]]),
/* ---------- F.3 Rhythm, tempo and structure ---------- */
P("mu006","F.3","Name an Italian tempo marking.","Grave",[
  ["Allegro",18],["Andante",14],["Adagio",14],["Presto",10],["Largo",8],["Moderato",8],["Lento",6],["Vivace",5],["Allegretto",4],["Rallentando",4,"rall"],["Accelerando",4,"accel"],["Ritardando",3,"rit"],["Rubato",2],["Grave",.4]]),
P("mu007","F.3","Name a musical form or structure.","Arch form",[
  ["Verse-chorus",16,"verse chorus","verse and chorus"],["Binary form",12,"binary","ab"],["Ternary form",12,"ternary","aba"],["Rondo",10,"rondo form"],["Theme and variations",8,"variations"],["Sonata form",8,"sonata"],["Strophic",6,"strophic form"],
  ["Twelve-bar blues",6,"12 bar blues","twelve bar blues"],["Through-composed",4,"through composed"],["Fugue",4],["Minuet and trio",3,"minuet"],["Ritornello",2,"ritornello form"],["Arch form",.4,"abcba"]]),
P("mu008","F.3","Name a rhythmic device or feature.","Clave",[
  ["Syncopation",20,"syncopated"],["Ostinato",12,"riff"],["Triplets",10,"triplet"],["Dotted rhythm",8,"dotted rhythms","dotted notes"],["Swing",8,"swung rhythm","swing rhythm"],["Polyrhythm",6,"polyrhythms"],["Cross-rhythm",4,"cross rhythm"],["Hemiola",4],
  ["Augmentation",3],["Diminution",3],["Backbeat",3],["Rubato",3],["Clave",.4,"son clave","clave rhythm"]]),
P("mu009","F.3","Name a time signature or type of metre.","Aksak",[
  ["4/4",20,"common time","four four"],["3/4",16,"three four","waltz time"],["6/8",10,"six eight"],["2/4",8,"two four"],["Simple time",6,"simple metre"],["Compound time",6,"compound metre"],["5/4",5,"five four"],["7/8",4,"seven eight"],
  ["12/8",4,"twelve eight"],["Cut time",3,"2/2","alla breve"],["Irregular metre",3,"irregular time","odd time"],["Aksak",.4,"aksak rhythm"]]),
/* ---------- F.4 Instruments and voices ---------- */
P("mu010","F.4","Name an instrument of the symphony orchestra.","Wagner tuba",[
  ["Violin",18],["Cello",12],["Flute",10],["Trumpet",10],["Clarinet",8],["Viola",6],["Double bass",6,"contrabass"],["Oboe",6],["French horn",6,"horn"],["Trombone",5],["Timpani",5,"kettle drums"],["Bassoon",4],["Tuba",4],["Harp",4],
  ["Piccolo",3],["Cor anglais",2,"english horn"],["Celesta",2],["Wagner tuba",.4]]),
P("mu011","F.4","Name a musical instrument from beyond the Western orchestra.","Hardanger fiddle",[
  ["Sitar",14],["Tabla",10],["Djembe",10],["Bagpipes",8],["Didgeridoo",8],["Steelpan",8,"steel drum","steel pan"],["Erhu",6],["Koto",6],["Kora",5],["Oud",5],["Shamisen",4],["Mbira",4,"thumb piano","kalimba"],["Balalaika",4],["Shakuhachi",3],["Pipa",3],["Charango",2],
  ["Hardanger fiddle",.4,"hardingfele"]]),
P("mu012","F.4","Name a type of singing voice.","Castrato",[
  ["Soprano",22],["Alto",16,"contralto"],["Tenor",16],["Bass",14],["Mezzo-soprano",8,"mezzo soprano","mezzo"],["Baritone",8],["Countertenor",4],["Treble",4,"boy soprano"],["Coloratura soprano",3,"coloratura"],["Bass-baritone",2,"bass baritone"],["Castrato",.4,"castrati"]]),
/* ---------- A.1 Sociocultural and political expression ---------- */
P("mu013","A.1","Name a genre or tradition of protest music.","Toyi-toyi",[
  ["Folk protest songs",16,"folk","protest songs","protest folk"],["Hip-hop",14,"rap","hip hop"],["Punk",12,"punk rock"],["Reggae",10],["Spirituals",8,"negro spirituals"],["Freedom songs",8,"civil rights songs","we shall overcome"],["Blues",6],
  ["National anthems",5,"anthems","anthem"],["Afrobeat",5],["Nueva canción",4,"nueva cancion"],["Grime",3],["Toyi-toyi",.4,"toyi toyi"]]),
P("mu014","A.1","Name a musician known for political or social messages.","Mercedes Sosa",[
  ["Bob Dylan",16,"dylan"],["Bob Marley",14,"marley"],["Nina Simone",10,"simone"],["John Lennon",10,"lennon"],["Kendrick Lamar",8,"kendrick"],["Billie Holiday",6,"holiday"],["Fela Kuti",6,"fela"],["Woody Guthrie",5,"guthrie"],
  ["Joan Baez",4,"baez"],["Public Enemy",4],["Pete Seeger",3,"seeger"],["Miriam Makeba",3,"makeba"],["Victor Jara",3,"jara"],["Rage Against the Machine",3,"ratm"],["Mercedes Sosa",.4,"sosa"]]),
/* ---------- A.2 Listening and performance ---------- */
P("mu015","A.2","Name a classical composer.","Hildegard of Bingen",[
  ["Wolfgang Amadeus Mozart",18,"mozart"],["Ludwig van Beethoven",18,"beethoven"],["Johann Sebastian Bach",14,"bach","j s bach"],["Frédéric Chopin",8,"chopin","frederic chopin"],["Pyotr Tchaikovsky",8,"tchaikovsky"],["Antonio Vivaldi",8,"vivaldi"],
  ["Joseph Haydn",5,"haydn"],["George Frideric Handel",5,"handel"],["Franz Schubert",4,"schubert"],["Johannes Brahms",4,"brahms"],["Claude Debussy",4,"debussy"],["Igor Stravinsky",3,"stravinsky"],["Giuseppe Verdi",3,"verdi"],["Clara Schumann",2,"clara"],
  ["Hildegard of Bingen",.4,"hildegard"]]),
P("mu016","A.2","Name a period or style of Western classical music.","Ars Nova",[
  ["Baroque",20],["Classical",18,"classical period"],["Romantic",16,"romantic period","romanticism"],["Renaissance",10],["Medieval",8],["Twentieth century",8,"20th century","modern"],["Impressionism",5,"impressionist"],["Minimalism",4,"minimalist"],
  ["Contemporary",4],["Expressionism",3,"serialism"],["Neoclassicism",2,"neoclassical"],["Ars Nova",.4]]),
P("mu017","A.2","Name a type of musical ensemble.","A consort",[
  ["Orchestra",20,"symphony orchestra"],["Choir",14,"chorus"],["Rock band",10,"band"],["String quartet",10],["Jazz band",8,"big band"],["Brass band",6],["Concert band",5,"wind band","wind orchestra"],["Chamber orchestra",4],["Piano trio",3],
  ["Gamelan",3],["Mariachi",3],["Barbershop quartet",3,"barbershop"],["Steel band",2],["A consort",.4,"consort","viol consort"]]),
/* ---------- A.3 Dramatic impact, movement and entertainment ---------- */
P("mu018","A.3","Name a type of music for drama, screen or dance.","Gagaku",[
  ["Film score",20,"film music","soundtrack"],["Opera",16],["Musical theatre",14,"musicals","musical"],["Ballet",10],["Video game music",10,"game music"],["Incidental music",5],["Dance music",5,"edm"],["Jingles",4,"jingle","advert music"],["Operetta",3],["TV themes",3,"tv theme"],
  ["Gagaku",.4]]),
P("mu019","A.3","Name a dance style with its own music.","Gavotte",[
  ["Waltz",16],["Tango",14],["Salsa",12],["Samba",8],["Flamenco",8],["Hip-hop",8,"hip hop","breakdance"],["Disco",6],["Swing",5,"jive","lindy hop"],["Bhangra",5],["Foxtrot",4],["Polka",4],["Reggaeton",4],["Minuet",3],["Gavotte",.4]]),
P("mu020","A.3","Name a famous opera or musical.","Dido and Aeneas",[
  ["Les Misérables",14,"les miserables","les mis"],["Hamilton",12],["The Phantom of the Opera",12,"phantom of the opera"],["The Magic Flute",8,"magic flute","die zauberflote"],["Carmen",8],["West Side Story",8],["The Lion King",6,"lion king"],["La Bohème",5,"la boheme"],
  ["Wicked",5],["The Sound of Music",5,"sound of music"],["Madama Butterfly",4],["Don Giovanni",3],["Aida",3],["Porgy and Bess",3],["Dido and Aeneas",.4]]),
/* ---------- A.4 Music technology ---------- */
P("mu021","A.4","Name a piece of music technology.","Mellotron",[
  ["Synthesizer",16,"synth"],["DAW",14,"digital audio workstation","logic","ableton","garageband","fl studio"],["Microphone",12,"mic"],["MIDI keyboard",8,"midi","midi controller"],["Drum machine",8],["Sampler",6],["Mixing desk",6,"mixer","mixing console"],
  ["Auto-Tune",5,"autotune"],["Loop pedal",4,"looper"],["Effects pedal",4,"guitar pedal"],["Turntables",4,"decks","record player"],["Audio interface",3],["Theremin",2],["Mellotron",.4]]),
P("mu022","A.4","Name an electronic music genre or technique.","Granular synthesis",[
  ["Sampling",16],["EDM",12,"electronic dance music"],["House",10,"house music"],["Techno",10],["Looping",8,"loops"],["Remixing",8,"remix"],["Dubstep",6],["Drum and bass",6,"dnb","jungle"],["Synth-pop",4,"synthpop"],["Trance",4],
  ["Ambient",3,"ambient music"],["Musique concrète",2,"musique concrete"],["Granular synthesis",.4,"granular"]]),
P("mu023","A.4","Name an audio effect or production technique.","Gated reverb",[
  ["Reverb",18,"reverberation"],["Echo",12,"delay"],["Distortion",10,"overdrive","fuzz"],["Compression",8,"compressor"],["EQ",8,"equalization","equalisation"],["Panning",6,"stereo"],["Auto-Tune",6,"pitch correction","autotune"],["Chorus",4],
  ["Multitracking",4,"overdubbing","layering"],["Flanger",3,"flanging"],["Phaser",3],["Sidechain compression",3,"sidechain","ducking"],["Gated reverb",.4,"gated drums"]]),
/* ---------- P.1 Creating and performing ---------- */
P("mu024","P.1","Name a way to develop a musical idea.","Liquidation",[
  ["Repetition",16,"repeat"],["Sequence",12],["Variation",12,"varying"],["Transposition",8,"transposing"],["Inversion",8,"inverting"],["Imitation",6],["Modulation",6,"changing key"],["Retrograde",5,"backwards"],["Augmentation",4],["Diminution",4],
  ["Ornamentation",4,"ornaments"],["Fragmentation",3],["Reharmonization",3,"new chords","reharmonisation"],["Liquidation",.4]]),
P("mu025","P.1","Name something musicians work on when practising.","Audiation",[
  ["Technique",14],["Rhythm",12,"timing"],["Intonation",10,"tuning","pitch"],["Scales",10,"scales and arpeggios"],["Dynamics",8],["Phrasing",8],["Expression",6,"interpretation"],["Sight-reading",5,"sight reading"],["Breathing",4,"breath control"],["Posture",4],
  ["Memorization",4,"memorising","memorizing"],["Articulation",3],["Stage presence",3,"performance skills"],["Audiation",.4]]),
/* ---------- H.1 The contemporary music-maker (HL) ---------- */
P("mu026","H.1","Name a way musicians share their music today.","Sync licensing",[
  ["Streaming",20,"spotify","apple music"],["YouTube",14],["Social media",12,"tiktok","instagram"],["Live concerts",10,"concerts","gigs"],["Festivals",8,"music festivals"],["Radio",6],["Vinyl and CDs",5,"vinyl","cds","albums"],["SoundCloud",4],["Bandcamp",3],
  ["Livestreams",3,"livestreaming"],["Busking",3],["Sync licensing",.4,"sync","sync deals"]],
  [], HL),
P("mu027","H.1","Name a way musicians collaborate.","A cypher",[
  ["Featuring another artist",16,"features","feature","featured artist"],["Forming a band",12,"band"],["Co-writing songs",10,"co writing","songwriting"],["Working with a producer",10,"producer","producers"],["Remixes",8,"remix"],["Online collaboration",6,"remote collaboration"],
  ["Session musicians",5],["Cross-genre collaboration",4,"cross genre"],["Writing for film or dance",4,"film","dance"],["Jamming",4,"jam sessions"],["Sampling",3],["A cypher",.4,"cypher","cipher"]],
  [], HL),
];

/* ================= the range of hearing (up) ================= */
const BANDS = [
  {name:"The organ pipes",       zone:"The organ pipes",       from:0,  to:40,  hue:40,  bg:["#0e0a06","#16100a"]},
  {name:"The double bass",       zone:"The double bass",       from:40, to:100, hue:25,  bg:["#16100a","#1e140c"]},
  {name:"The cello",             zone:"The cello",             from:100,to:170, hue:20,  bg:["#1e140c","#1a1020"]},
  {name:"The guitar",            zone:"The guitar",            from:170,to:250, hue:200, bg:["#1a1020","#10182a"]},
  {name:"The piano",             zone:"The piano",             from:250,to:320, hue:0,   bg:["#10182a","#141420"]},
  {name:"The choir",             zone:"The choir",             from:320,to:390, hue:280, bg:["#141420","#1e1430"]},
  {name:"The violins",           zone:"The violins",           from:390,to:460, hue:30,  bg:["#1e1430","#20140e"]},
  {name:"The flutes",            zone:"The flutes and piccolos", from:460,to:530, hue:200, bg:["#20140e","#0e1a2a"]},
  {name:"The birdsong",          zone:"The birdsong",          from:530,to:600, hue:120, bg:["#0e1a2a","#0e2418"]},
  {name:"The edge of hearing",   zone:"The edge of hearing",   from:600,to:760, hue:180, bg:["#0e2418","#04060c"]},
];
// frequency at each band boundary (Hz): from the lowest organ C to the edge of human hearing
const KNOTS = [[0,16.35],[40,41.2],[100,65.4],[170,130.8],[250,261.6],[320,523.3],[390,1046.5],[460,2093],[530,4186],[600,8000],[760,20000]];
function hz(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(20000, Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0)))); } }
}
function at(f){   // the height where a frequency sits
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (f <= y1 || k === KNOTS.length - 1) return Math.round(p0 + (Math.log(f) - Math.log(y0)) / (Math.log(y1) - Math.log(y0)) * (p1 - p0)); }
}
const NOTES = ["C","C♯","D","E♭","E","F","F♯","G","A♭","A","B♭","B"];
function fmtH(p){ const f = hz(p), m = Math.round(12 * Math.log2(f / 440) + 69), note = NOTES[((m % 12) + 12) % 12] + (Math.floor(m / 12) - 1);
  return `${f >= 1000 ? (f / 1000).toFixed(f >= 9950 ? 0 : 1) + "k" : Math.round(f)} Hz · ${note}`; }
const FACTS = [
  [-30,"every note is a vibration"],[12,"the lowest organ pipes play about 16 Hz: felt more than heard"],[at(45),"the double bass's lowest string is E1, about 41 Hz"],[at(55),"double bass parts sound an octave lower than written"],
  [at(75),"the cello's range is often compared to the human voice"],[at(110),"Bach wrote six suites for solo cello"],[at(150),"a guitar's strings are tuned E A D G B E"],[at(210),"the electric guitar took over popular music in the 1950s"],
  [at(262),"middle C is about 262 Hz"],[at(440),"A4 = 440 Hz: the standard tuning pitch"],[at(620),"a soprano can sing up to about C6 (1,047 Hz)"],[at(900),"Allegri's Miserere is famous for its soaring high C"],
  [at(1300),"Stradivari made his violins about 300 years ago"],[at(1800),"the violin's E string is the highest of the string family"],[at(2600),"the piccolo plays an octave above the flute"],[at(3500),"the piano's top note, C8, is about 4,186 Hz"],
  [at(5000),"much birdsong sits between 2,000 and 8,000 Hz"],[at(7000),"Messiaen built whole pieces from birdsong"],[at(10000),"hi-hats and cymbals shimmer up here"],[at(15000),"many adults can't hear above about 15,000 Hz"],[at(19000),"human hearing tops out at about 20,000 Hz"],
];
function wall(i, len, side){
  const r = srand(8461 + i*47 + (side==="r"?29:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const body = (y, w, h, c) => `<path d="M60 ${y} q${-w*.5} 0 ${-w*.5} ${h*.22} q0 ${h*.12} ${w*.12} ${h*.18} q${-w*.2} ${h*.06} ${-w*.2} ${h*.3} q0 ${h*.3} ${w*.58} ${h*.3} q${w*.58} 0 ${w*.58} ${-h*.3} q0 ${-h*.24} ${-w*.2} ${-h*.3} q${w*.12} ${-h*.06} ${w*.12} ${-h*.18} q0 ${-h*.22} ${-w*.5} ${-h*.22}z" fill="${c}" stroke="#2a1606" stroke-width="2"/>`;
  switch(i){
    case 0: // the organ pipes: tall silver pipes of every length
      for (let x = 8; x < 116; x += 14){ const h = f1(len * (.3 + r() * .5)); s+=`<rect x="${x}" y="${f1(len - h)}" width="11" height="${h}" fill="#c9c9d6"/><rect x="${x}" y="${f1(len - h)}" width="4" height="${h}" fill="#e8e8f4"/><path d="M${x} ${f1(len - h + 40)} h11 l-3 8 h-5z" fill="#2a2a34"/>`; }
      rep(260, y=>{ s+=`<text x="60" y="${y+40}" text-anchor="middle" font-size="30" fill="#ffd25a" opacity=".5">♫</text>`; }, 30);
      break;
    case 1: // the double bass: big bodies with f-holes and thick strings
      rep(240, y=>{ s+= body(y+40, 84, 170, "#8a4a1a") + `<rect x="56" y="${y}" width="8" height="70" fill="#1a1a1a"/><path d="M52 ${y+90} q-4 20 0 40 M68 ${y+90} q4 20 0 40" stroke="#1a0a00" stroke-width="2.4" fill="none"/>` + [0,1,2,3].map(k=>`<path d="M${55+k*3.4} ${y} V${y+200}" stroke="#e8d8a8" stroke-width="1.2"/>`).join("") + `<rect x="50" y="${y+150}" width="20" height="6" fill="#1a1a1a"/>`; });
      break;
    case 2: // the cello: bodies with bows across the strings
      rep(200, y=>{ s+= body(y+30, 62, 130, "#a8581e") + `<rect x="57" y="${y}" width="6" height="60" fill="#1a1a1a"/>` + [0,1,2,3].map(k=>`<path d="M${56.5+k*2.4} ${y} V${y+150}" stroke="#e8d8a8" stroke-width="1"/>`).join("")
        + `<path d="M8 ${y+130} L112 ${y+96}" stroke="#5a3a1a" stroke-width="3"/><path d="M10 ${y+134} L112 ${y+100}" stroke="#f4ead0" stroke-width="1.2"/>`; });
      break;
    case 3: // the guitar: bodies with sound holes and fretted necks
      rep(190, y=>{ s+= body(y+60, 70, 110, ["#d89a4a","#c8303a","#3a6ae8","#1a1a1a"][Math.floor(r()*4)]) + `<circle cx="60" cy="${y+112}" r="11" fill="#1a0a00"/><rect x="55" y="${y}" width="10" height="72" fill="#5a3a1a"/>` + [0,1,2,3,4].map(k=>`<path d="M55 ${y+10+k*12} h10" stroke="#c9c9c9" stroke-width="1"/>`).join("")
        + [0,1,2,3,4,5].map(k=>`<path d="M${56.5+k*1.4} ${y} V${y+150}" stroke="#f4f4f4" stroke-width=".6"/>`).join(""); });
      break;
    case 4: // the piano: a keyboard running up the wall
      for (let y = 0, k = 0; y < len; y += 18, k++){ s+=`<rect x="10" y="${y}" width="100" height="17" fill="#f8f6f0" stroke="#5a5a5a" stroke-width="1"/>`; if ([0,1,3,4,5].includes(k % 7)) s+=`<rect x="10" y="${y+11}" width="60" height="12" fill="#14141a"/>`; }
      break;
    case 5: // the choir: singers in robes with open mouths and music
      rep(110, y=>{ [0,1].forEach(k=>{ const x = 34 + k*52; s+=`<circle cx="${x}" cy="${y+20}" r="13" fill="${["#e8c8a8","#c89a7a","#8a5a3a"][Math.floor(r()*3)]}"/><ellipse cx="${x}" cy="${y+26}" rx="4" ry="5" fill="#3a0a0a"/><path d="M${x-18} ${y+80} q0 -46 18 -46 q18 0 18 46z" fill="#6a2a8a"/><path d="M${x-10} ${y+36} l10 12 l10 -12" fill="#f4f4f4"/><rect x="${x-12}" y="${y+50}" width="24" height="14" fill="#1a1a1a"/>`; });
        s+=`<text class="blink" style="animation-delay:-${f1(r()*2)}s" x="${f1(50+r()*20)}" y="${y+8}" font-size="16" fill="#ffd25a">♪</text>`; }, 10);
      break;
    case 6: // the violins: small bodies, scrolls and bows
      rep(150, y=>{ s+= body(y+34, 44, 86, "#c06a1a") + `<circle cx="60" cy="${y+8}" r="6" fill="none" stroke="#5a2a0a" stroke-width="3"/><rect x="58" y="${y+12}" width="4" height="30" fill="#1a1a1a"/><path d="M53 ${y+70} q-3 10 0 18 M67 ${y+70} q3 10 0 18" stroke="#1a0a00" stroke-width="1.6" fill="none"/>`
        + `<path d="M14 ${y+60} L106 ${y+110}" stroke="#5a3a1a" stroke-width="2.4"/>`; });
      break;
    case 7: // the flutes and piccolos: silver tubes with keys
      rep(90, y=>{ const long = r() < .6, x0 = long ? 10 : 30, w = long ? 100 : 60; s+=`<rect x="${x0}" y="${y}" width="${w}" height="9" rx="4" fill="#d8d8e4" stroke="#8a8a9a"/>` + Array.from({length: long ? 7 : 4}, (_, k)=>`<circle cx="${x0+18+k*12}" cy="${y+4.5}" r="3" fill="#b8b8c8" stroke="#6a6a7a" stroke-width=".8"/>`).join("") + `<ellipse cx="${x0+7}" cy="${y+4.5}" rx="3" ry="2" fill="#2a2a34"/>`; }, 10);
      break;
    case 8: // the birdsong: birds on branches, singing
      rep(150, y=>{ s+=`<path d="M0 ${y+60} q60 -16 120 8" stroke="#5a3a1a" stroke-width="5" fill="none"/>` + [0,1,2].map(k=>`<ellipse cx="${f1(18+k*24+r()*30)}" cy="${y+42}" rx="${f1(12+r()*4)}" ry="9" fill="${["#e8443a","#3a8ae8","#ffd25a","#8a6a4a"][Math.floor(r()*4)]}"/><circle cx="${f1(26+k*24)}" cy="${y+38}" r="1.6" fill="#1a1a1a"/>`).join("")
        + `<text class="blink" style="animation-delay:-${f1(r()*2)}s" x="${f1(30+r()*60)}" y="${y+12}" font-size="14" fill="#9ff5a8">♫</text>`; });
      break;
    case 9: // the edge of hearing: shimmering cymbals and ever-finer waves
      rep(150, y=>{ s+=`<ellipse cx="60" cy="${y+30}" rx="44" ry="7" fill="#d8b84a" stroke="#8a6a1a" stroke-width="1.5"/><circle cx="60" cy="${y+29}" r="5" fill="#b8982a"/><path d="M60 ${y+30} v40" stroke="#5a5a5a" stroke-width="2"/>`
        + [0,1,2].map(k=>{ const n = 6 + k*6, w = 112/n; return `<path d="M4 ${y+90+k*14} ${Array.from({length: n}, ()=>`q${f1(w/4)} -6 ${f1(w/2)} 0 t${f1(w/2)} 0`).join(" ")}" stroke="#9ff5e8" stroke-width="1.4" fill="none" opacity="${f1(.7-k*.2)}"/>`; }).join(""); });
      break;
  }
  return vwall(s, len, side);
}
/* the quaver: it earns headphones, a sharp, a baton and a beamed partner, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, ink = gold ? "#ffd25a" : level >= 5 ? `hsl(${hue} 80% 62%)` : "#f4f4f8", line = gold ? "#8a6a1a" : "#3a3a4a";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 32 : 0}" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <rect x="9" y="-30" width="5" height="40" rx="2" fill="${ink}" stroke="${line}" stroke-width="1"/>
    <path d="M13 -30 q16 6 14 22 q-4 -10 -14 -12z" fill="${ink}" stroke="${line}" stroke-width="1"/>
    <ellipse cx="0" cy="12" rx="15" ry="11" transform="rotate(-20 0 12)" fill="${ink}" stroke="${line}" stroke-width="1.6"/>
    <circle cx="-5" cy="10" r="3.4" fill="#fff"/><circle cx="5" cy="8" r="3.4" fill="#fff"/>
    <g class="av-blink"><circle cx="-4.6" cy="10.4" r="1.8" fill="#0a0a14"/><circle cx="5.4" cy="8.4" r="1.8" fill="#0a0a14"/></g>
    <path d="M-4 16 q5 4 10 -1" stroke="#0a0a14" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<path d="M-16 6 q0 -20 16 -22 q16 0 18 16" stroke="#3a3a4a" stroke-width="3" fill="none"/><rect x="-20" y="4" width="7" height="12" rx="3" fill="#e8443a"/><rect x="15" y="0" width="7" height="12" rx="3" fill="#e8443a"/>` : ""}
    ${level >= 3 ? `<text x="-30" y="-6" font-size="14" font-weight="700" fill="#ffd25a" font-family="Georgia,serif">♯</text>` : ""}
    ${level >= 4 ? `<g transform="translate(-24 26)"><ellipse rx="6" ry="4.5" transform="rotate(-20)" fill="${ink}" stroke="${line}"/><rect x="4" y="-22" width="3" height="22" fill="${ink}" stroke="${line}" stroke-width=".6"/><path d="M7 -22 L35 -50" stroke="${ink}" stroke-width="3"/></g>` : ""}
    ${level >= 6 ? `<path d="M22 14 L36 -4" stroke="#f4f4f4" stroke-width="2" stroke-linecap="round"/><circle cx="22" cy="14" r="2.4" fill="#8a5a2a"/>` : ""}
    ${level >= 1 ? `<text class="blink" x="22" y="-28" font-size="11" fill="#9ff5e8">♪</text>` : ""}
    ${gold ? `<circle r="36" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,[0,1,2,3,4].map(k=>`<path d="M30 ${30+k*12} H170" stroke="${c}" stroke-width="1.5"/>`).join("") + `<text x="56" y="76" text-anchor="middle" font-size="44" fill="${c}">♫</text>`
    + [[90,66],[112,54],[134,48],[156,42]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="7" ry="5" transform="rotate(-20 ${x} ${y})" fill="#ffd25a"/><path d="M${x+6} ${y} v-28" stroke="#ffd25a" stroke-width="2"/>`).join("") + `<path d="M96 38 L118 26 L140 20 L162 14" stroke="#ffd25a" stroke-width="4"/>`);
  if (t === "rootkit") return W(170,100,`<path d="M40 80 q45 -60 90 0" stroke="${c}" stroke-width="4" fill="none"/><text x="85" y="62" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">ENCORE</text>`);
  if (t === "trojan") return W(170,100,`<ellipse cx="70" cy="64" rx="12" ry="9" transform="rotate(-20 70 64)" fill="${c}"/><path d="M81 62 v-40" stroke="${c}" stroke-width="3"/><path d="M81 22 q18 8 14 26" stroke="${c}" stroke-width="3" fill="none"/>`);
  if (t === "adware") return W(170,100,`<ellipse cx="66" cy="66" rx="10" ry="8" transform="rotate(-20 66 66)" fill="${c}"/><ellipse cx="104" cy="58" rx="10" ry="8" transform="rotate(-20 104 58)" fill="${c}"/><path d="M75 64 v-38 M113 56 v-38" stroke="${c}" stroke-width="3"/><path d="M75 26 L113 18" stroke="${c}" stroke-width="6"/>`);
  if (t === "spam") return W(170,90,`<ellipse cx="85" cy="56" rx="12" ry="9" transform="rotate(-20 85 56)" fill="none" stroke="${c}" stroke-width="3"/><path d="M96 54 v-36" stroke="${c}" stroke-width="3"/>`);
  if (t === "blocked") return W(170,100,`<rect x="30" y="26" width="110" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="20" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">OFF KEY</text>`);
  return null;
}
registerSubject({
  key:"music", name:"Music", theme:"A quaver rising up the range of hearing", gemWord:"Symphony", gemTitle:"One in a Symphony", emoji:"🎵",
  blurb:"You're a <b>quaver</b> at the bottom of the organ pipes. Each prompt has many correct answers. <b>Obvious answers barely raise the pitch. Answers other musicians missed send you higher</b>, past the double bass, the cello, the guitar and the piano, through the choir, the violins, the flutes and the birdsong, to the very edge of human hearing.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Symphony", rootkit:"Encore", trojan:"Solo", adware:"Chorus", spam:"Jingle"}, blocked:"Wrong note", fw:"OFF KEY",
  notes:{rootkit:"An encore: very few musicians got this high.", trojan:"A solo: not the usual answer.", adware:"The chorus: correct and common.", spam:"A jingle: what everyone hums first."},
  ladder:{gem:"One in a Symphony: almost no one thinks of it", rootkit:"Encore: a rare answer", trojan:"Solo: a strong, less common answer", adware:"Chorus: correct and common", spam:"Jingle: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Play ▲", inject:"Play", hint:"▲ rarer answers hit higher notes ▲", count:"tuning up"},
  shout:t => ({gem:"STANDING OVATION!", rootkit:"ENCORE!", blocked:"OFF KEY!"})[t],
  particles:["♪","♫","♩","♬"], particleColor:"#9ff5e8",
  meter:{label:"PITCH", fmt:fmtH, zone:fmtH, tick:fmtH, gain:(a,b)=>`rise to ${fmtH(b)}`},
  start:{bg:"linear-gradient(0deg,#060402,#0e0a06)", label:"Start · 16 Hz", zone:"The lowest note", color:"#ffd25a"},
  endBg:"#04060c",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Beyond hearing",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
