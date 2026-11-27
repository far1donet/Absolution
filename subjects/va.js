/* Visual Arts — a paintbrush climbs a gallery tower through art history: from charcoal and ochre in the cave, through
   Egypt, Greece, gilded medieval icons, Renaissance perspective, Baroque light, Impressionist sunshine, modernism and
   pop art, up to the digital frontier. Its palette grows from one colour to 16.7 million. Rarer answers climb higher.
   Syllabus: IB Visual arts (first assessment 2027): art-making forms, visual language, art in context, art-making as
   inquiry, and the portfolio, connections study (SL), artist project (HL) and resolved artworks. */
(function(){
const CATALOG = [
  {label:"Art-making forms", units:[
    {code:"F", name:"Art-making forms", topics:[["F.1","Two-dimensional forms"],["F.2","Three-dimensional forms"],["F.3","Lens-based, electronic and screen-based forms"]]},
  ]},
  {label:"Visual language", units:[
    {code:"E", name:"Visual language", topics:[["E.1","The formal elements"],["E.2","Principles and composition"],["E.3","Colour"]]},
  ]},
  {label:"Art in context", units:[
    {code:"H", name:"Art in context", topics:[["H.1","Movements and periods"],["H.2","Artists and artworks"],["H.3","Global and contemporary art"]]},
  ]},
  {label:"Art-making as inquiry", units:[
    {code:"C", name:"Inquiry and communication", topics:[["C.1","Analysing and interpreting art"],["C.2","Developing ideas, curating and exhibiting"]]},
    {code:"X", name:"Assessment", topics:[["X.1","The portfolio, connections study, artist project and resolved artworks"]]},
  ]},
];

const PROMPTS = [
/* ---------- F.1 Two-dimensional forms ---------- */
P("va001","F.1","Name a two-dimensional art form or medium.","Encaustic",[
  ["Painting",20],["Drawing",18],["Printmaking",12,"prints","printing"],["Watercolour",8,"watercolor","watercolours"],["Collage",8],["Oil painting",8,"oils","oil paint"],["Acrylic painting",6,"acrylic","acrylics"],
  ["Charcoal",5,"charcoal drawing"],["Screen printing",5,"screenprint","silkscreen"],["Etching",4],["Linocut",4,"lino print","lino"],["Pastel",4,"pastels"],["Ink",3,"pen and ink"],["Fresco",3],["Gouache",2],["Encaustic",.4,"wax painting"]]),
P("va002","F.1","Name a drawing or painting technique.","Sgraffito",[
  ["Shading",18],["Hatching",12],["Cross-hatching",10,"cross hatching","crosshatching"],["Blending",10],["Stippling",8],["Chiaroscuro",6],["Glazing",6],["Impasto",6],["Wet-on-wet",5,"wet on wet"],["Dry brush",4,"drybrush"],
  ["Sfumato",4],["Contour drawing",4,"contour"],["Scumbling",3],["Sgraffito",.4]]),
/* ---------- F.2 Three-dimensional forms ---------- */
P("va003","F.2","Name a three-dimensional art form.","Kintsugi",[
  ["Sculpture",25],["Ceramics",15,"pottery","clay"],["Installation",12,"installation art"],["Assemblage",6],["Carving",6,"wood carving","stone carving"],["Casting",5,"bronze casting","bronze"],["Textiles",5,"fibre art","weaving"],
  ["Jewellery",4,"jewelry"],["Architecture",4],["Land art",4,"earthworks"],["Kinetic sculpture",3,"kinetic art","mobiles"],["Glass art",3,"glassblowing","stained glass"],["Origami",3,"paper folding"],["Kintsugi",.4]]),
P("va004","F.2","Name a famous sculptor.","El Anatsui",[
  ["Michelangelo",25],["Auguste Rodin",18,"rodin"],["Donatello",8],["Gian Lorenzo Bernini",6,"bernini"],["Henry Moore",6,"moore"],["Alberto Giacometti",5,"giacometti"],["Barbara Hepworth",4,"hepworth"],["Louise Bourgeois",4,"bourgeois"],
  ["Constantin Brâncuși",4,"brancusi","constantin brancusi"],["Anish Kapoor",4,"kapoor"],["Antony Gormley",4,"gormley"],["Jeff Koons",3,"koons"],["Ai Weiwei",3],["El Anatsui",.4,"anatsui"]]),
/* ---------- F.3 Lens-based, electronic and screen-based ---------- */
P("va005","F.3","Name a lens-based, electronic or screen-based art form.","Projection mapping",[
  ["Photography",25,"photographs","photos"],["Film",15,"video","video art"],["Digital art",12,"digital painting","digital illustration"],["Animation",10],["Graphic design",6],["Photomontage",4],["Stop-motion",4,"stop motion","stop motion animation"],
  ["Virtual reality art",3,"vr art","vr"],["Generative art",3,"ai art","generative"],["Net art",2,"internet art"],["Projection mapping",.4,"projection"]]),
P("va006","F.3","Name a photography technique or term.","Cyanotype",[
  ["The rule of thirds",15,"rule of thirds"],["Depth of field",12],["Long exposure",8],["Exposure",8],["Aperture",8,"f stop"],["Shutter speed",8],["Composition",10],["Framing",6],["Black and white",6,"monochrome"],
  ["Double exposure",5],["Macro photography",4,"macro"],["Focus",4],["Leading lines",4],["Bokeh",3],["Cyanotype",.4]]),
/* ---------- E.1 Formal elements ---------- */
P("va007","E.1","Name one of the formal elements of art.","Value",[
  ["Colour",22,"color"],["Line",20],["Shape",15],["Texture",12],["Form",10],["Tone",8,"light and dark"],["Space",8],["Pattern",5],["Value",.4]]),
P("va008","E.1","Name a kind of line used in art.","Orthogonal lines",[
  ["Straight lines",15,"straight"],["Curved lines",15,"curved","curvy"],["Diagonal lines",10,"diagonal"],["Horizontal lines",10,"horizontal"],["Vertical lines",10,"vertical"],["Zigzag lines",8,"zigzag","zig zag"],["Wavy lines",6,"wavy"],
  ["Contour lines",6,"contour","outline"],["Broken lines",4,"dashed","broken"],["Thick and thin lines",4,"thick","thin"],["Gestural lines",4,"gestural","expressive lines"],["Implied lines",3,"implied"],["Orthogonal lines",.4,"orthogonals","orthogonal"]]),
/* ---------- E.2 Principles and composition ---------- */
P("va009","E.2","Name a principle of art or design.","The golden ratio",[
  ["Balance",18],["Contrast",18],["Emphasis",12,"focal point"],["Unity",10],["Movement",8],["Rhythm",8],["Proportion",8],["Harmony",6],["Symmetry",5],["Variety",5],["Scale",5],["Repetition",5],["The golden ratio",.4,"golden ratio","golden section","golden mean"]]),
P("va010","E.2","Name a compositional device.","Repoussoir",[
  ["The rule of thirds",20,"rule of thirds"],["Leading lines",12],["A focal point",12,"focal point"],["Symmetry",10],["Negative space",8],["Linear perspective",8,"perspective","vanishing point"],["Asymmetry",6],["Framing",6],
  ["Foreground and background",6,"foreground","background","middle ground"],["Triangular composition",4,"pyramid composition","triangle"],["Overlapping",3],["Repoussoir",.4]]),
/* ---------- E.3 Colour ---------- */
P("va011","E.3","Name a colour-theory term or colour relationship.","Simultaneous contrast",[
  ["Primary colours",20,"primary colors","primary","red yellow blue"],["Complementary colours",15,"complementary","complementary colors"],["Secondary colours",12,"secondary","secondary colors"],["Warm colours",10,"warm","warm colors"],
  ["Cool colours",10,"cool","cool colors"],["Analogous colours",8,"analogous"],["Tertiary colours",6,"tertiary"],["Hue",5],["Saturation",5,"intensity","chroma"],["Monochromatic",5,"monochrome"],["Tint",4],["Shade",4],["Triadic",3,"triad"],
  ["Simultaneous contrast",.4]]),
P("va012","E.3","Name a pigment or historic colour.","Tyrian purple",[
  ["Ultramarine",12,"lapis lazuli"],["Ochre",10,"yellow ochre","red ochre"],["Vermilion",6,"vermillion"],["Cadmium red",6,"cadmium","cadmium yellow"],["Prussian blue",6],["Titanium white",6],["Burnt sienna",6,"sienna","raw sienna"],
  ["Indigo",5],["Lead white",4],["Gold leaf",4,"gold"],["Carmine",3,"cochineal"],["Viridian",3],["International Klein Blue",3,"klein blue","ikb"],["Lamp black",3,"carbon black"],["Tyrian purple",.4]]),
/* ---------- H.1 Movements and periods ---------- */
P("va013","H.1","Name an art movement or period.","Suprematism",[
  ["Impressionism",20],["Cubism",15],["Surrealism",15],["The Renaissance",12,"renaissance"],["Pop art",10],["Expressionism",8],["Abstract Expressionism",6,"abstract expressionism"],["Baroque",6],["Romanticism",5],["Dada",5,"dadaism"],
  ["Post-Impressionism",5,"post impressionism"],["Realism",4],["Fauvism",4],["Minimalism",3],["Futurism",3],["Art Nouveau",3],["Suprematism",.4]]),
P("va014","H.1","Name a feature of Impressionist painting.","Japonisme",[
  ["Visible brushstrokes",18,"brushstrokes","loose brushwork","visible brush strokes"],["The effects of light",18,"light","changing light"],["Painting outdoors",12,"en plein air","plein air","outdoors"],["Scenes of modern life",10,"everyday scenes","modern life"],
  ["Bright colour",10,"bright colours","bright colors","colour"],["Capturing a fleeting moment",6,"fleeting moment","a moment"],["Movement",5],["Unmixed colour",4,"broken colour","pure colour"],["Short dabs of paint",4,"dabs"],["Japonisme",.4,"japanese prints"]]),
/* ---------- H.2 Artists and artworks ---------- */
P("va015","H.2","Name a painter from before 1900.","Artemisia Gentileschi",[
  ["Leonardo da Vinci",22,"da vinci","leonardo"],["Vincent van Gogh",15,"van gogh"],["Michelangelo",12],["Rembrandt",10],["Claude Monet",10,"monet"],["Raphael",6],["Caravaggio",6],["Johannes Vermeer",5,"vermeer"],
  ["Francisco Goya",4,"goya"],["Diego Velázquez",4,"velazquez"],["J. M. W. Turner",4,"turner"],["Katsushika Hokusai",4,"hokusai"],["Sandro Botticelli",4,"botticelli"],["Albrecht Dürer",3,"durer","albrecht durer"],
  ["Artemisia Gentileschi",.4,"gentileschi","artemisia"]]),
P("va016","H.2","Name a modern or contemporary artist born after 1880.","Lubaina Himid",[
  ["Pablo Picasso",22,"picasso"],["Frida Kahlo",15,"kahlo"],["Andy Warhol",12,"warhol"],["Salvador Dalí",12,"dali","salvador dali"],["Banksy",10],["Jackson Pollock",6,"pollock"],["Yayoi Kusama",6,"kusama"],["Jean-Michel Basquiat",5,"basquiat"],
  ["Georgia O'Keeffe",4,"o keeffe","okeeffe"],["Mark Rothko",4,"rothko"],["Ai Weiwei",4],["David Hockney",4,"hockney"],["Keith Haring",3,"haring"],["Marina Abramović",3,"abramovic","marina abramovic"],["Lubaina Himid",.4,"himid"]]),
P("va017","H.2","Name a famous painting.","The Arnolfini Portrait",[
  ["The Mona Lisa",25,"mona lisa","la gioconda"],["The Starry Night",18,"starry night"],["The Scream",10],["The Last Supper",8],["Guernica",8],["Girl with a Pearl Earring",6],["The Persistence of Memory",6,"melting clocks"],
  ["The Birth of Venus",5],["The Great Wave off Kanagawa",5,"the great wave","great wave"],["Water Lilies",4],["Sunflowers",4],["The Night Watch",3],["American Gothic",3],["Las Meninas",3],["The Arnolfini Portrait",.4,"arnolfini"]]),
/* ---------- H.3 Global and contemporary ---------- */
P("va018","H.3","Name an art tradition from outside Europe.","Madhubani painting",[
  ["Japanese woodblock prints",15,"ukiyo e","woodblock prints"],["Chinese ink painting",12,"ink wash painting","chinese calligraphy","calligraphy"],["Aboriginal dot painting",12,"aboriginal art","dot painting"],["Islamic geometric art",10,"islamic art","arabesque","islamic patterns"],
  ["Mexican muralism",8,"muralism","diego rivera"],["African masks",8,"masks"],["Indian miniature painting",6,"mughal miniatures","miniature painting"],["Māori carving",4,"maori carving","maori"],["Batik",4],["Kente cloth",3,"kente"],["Día de Muertos art",3,"calaveras","dia de muertos"],
  ["Henna",2,"mehndi"],["Madhubani painting",.4,"madhubani","mithila painting"]]),
P("va019","H.3","Name a feature or form of contemporary art.","Relational aesthetics",[
  ["Installation",15],["Conceptual art",15,"conceptual","ideas over objects"],["Performance art",10,"performance"],["Social and political issues",8,"activism","politics","political art"],["Street art",8,"graffiti"],["Digital media",8,"digital art"],["Video art",6],["Mixed media",6],
  ["Audience participation",5,"interactive","participation"],["Found objects",5,"readymades","readymade"],["Site-specific work",4,"site specific"],["Appropriation",4],["Relational aesthetics",.4]]),
/* ---------- C.1 Analysing and interpreting ---------- */
P("va020","C.1","Name an approach or question for analysing an artwork.","Iconography",[
  ["Formal analysis",15,"elements and principles","formal qualities"],["Context",15,"historical context","cultural context"],["Description",15,"describe","what can you see"],["Interpretation",12,"meaning","what does it mean"],["Judgement",8,"evaluation","judgment"],
  ["Materials and techniques",8,"materials","technique","techniques"],["The artist's intention",6,"intention","artist s intention"],["Symbolism",6,"symbols"],["Feldman's method",5,"feldman"],["Function",4,"purpose"],["Audience",4],["Iconography",.4,"panofsky"]]),
P("va021","C.2","Name a way an artist might find or develop ideas.","Automatic drawing",[
  ["Sketching",18,"sketches","sketchbook"],["Research",12],["Studying other artists",8,"artist research","influences"],["Mind maps",10,"mind mapping","brainstorming"],["Experimenting with materials",10,"experimenting","experimentation"],["Observational drawing",10,"observation","drawing from life"],
  ["Photography",6,"taking photos"],["Visiting galleries",6,"galleries","museums"],["Mood boards",6,"moodboard","mood board"],["Personal experience",5,"memories"],["Thumbnail sketches",4,"thumbnails"],["Collage",3],["Automatic drawing",.4,"automatism"]]),
/* ---------- C.2 Curating and exhibiting ---------- */
P("va022","C.2","Name something to consider when curating an exhibition.","Sightlines",[
  ["The theme",15,"theme","concept","curatorial rationale"],["Lighting",12,"light"],["The layout",12,"layout","arrangement","placement"],["The audience",10,"audience"],["Labels",8,"wall text","captions"],["Selection of works",6,"selection"],["Space",6],
  ["The visitor's route",5,"flow","route"],["How works relate to each other",5,"relationships between works","juxtaposition"],["Hanging height",4,"eye level"],["Wall colour",4,"wall color"],["Accessibility",3],["Sightlines",.4]]),
P("va023","C.2","Name a famous art museum or gallery.","The Zeitz MOCAA",[
  ["The Louvre",22,"louvre"],["MoMA",12,"museum of modern art"],["Tate Modern",10,"tate","the tate"],["The Metropolitan Museum of Art",10,"the met","met museum"],["The Uffizi",6,"uffizi"],["The Prado",6,"prado"],["The Guggenheim",6,"guggenheim"],
  ["The Rijksmuseum",5,"rijksmuseum"],["The National Gallery",5,"national gallery"],["The Musée d'Orsay",5,"orsay","musee d orsay"],["The Hermitage",4,"hermitage"],["The Vatican Museums",4,"vatican"],["The Getty",3,"getty"],["The Zeitz MOCAA",.4,"zeitz","mocaa"]]),
/* ---------- X.1 Assessment ---------- */
P("va024","X.1","Name a part of IB Visual Arts assessment.","Up to 15 screens",[
  ["The art-making inquiries portfolio",20,"portfolio","art making inquiries portfolio"],["Resolved artworks",18,"resolved artworks","selected resolved artworks"],["The connections study (SL)",10,"connections study"],["The artist project (HL)",10,"artist project"],
  ["A source list",3,"sources","bibliography"],["Up to 15 screens",.4,"15 screens","screens"]]),
P("va025","X.1","Name a way to document your art-making process.","A studio log",[
  ["A sketchbook",18,"sketchbook","visual journal","journal"],["Photos of work in progress",15,"photos","progress photos","photographs"],["Annotations",12,"notes","annotated"],["Reflective writing",10,"reflection","reflections"],["Material tests",6,"tests","experiments"],
  ["Artist research pages",6,"research"],["Screenshots",6],["Thumbnail sketches",5,"thumbnails"],["Video",4,"timelapse"],["Mind maps",4],["A timeline",3,"timeline"],["A studio log",.4,"studio diary","studio log"]]),
];

/* ================= the gallery tower (upwards, through art history) ================= */
const BANDS = [
  {name:"The cave",            zone:"The cave",                from:0,  to:40,  hue:25,  bg:["#1a0e06","#2a160a"]},
  {name:"Ancient Egypt",       zone:"Ancient Egypt",           from:40, to:100, hue:45,  bg:["#2a160a","#4a3418"]},
  {name:"Classical Greece",    zone:"Classical Greece",        from:100,to:170, hue:20,  bg:["#4a3418","#3a1a10"]},
  {name:"Medieval gold",       zone:"Medieval gold",           from:170,to:250, hue:220, bg:["#3a1a10","#1a1a4a"]},
  {name:"The Renaissance",     zone:"The Renaissance",         from:250,to:320, hue:30,  bg:["#1a1a4a","#4a3a2a"]},
  {name:"Baroque light",       zone:"Baroque light",           from:320,to:390, hue:35,  bg:["#4a3a2a","#0e0a06"]},
  {name:"Impressionism",       zone:"Impressionism",           from:390,to:460, hue:190, bg:["#0e0a06","#6a9ab8"]},
  {name:"Modernism",           zone:"Modernism",               from:460,to:530, hue:0,   bg:["#6a9ab8","#f4f0e8"]},
  {name:"Pop and street art",  zone:"Pop and street art",      from:530,to:600, hue:320, bg:["#f4f0e8","#2a0a3a"]},
  {name:"The digital frontier",zone:"The digital frontier",    from:600,to:760, hue:280, bg:["#2a0a3a","#05010e"]},
];
// colours on the palette at each band boundary: 1 in the cave, 16,777,216 (24-bit colour) on screens
const KNOTS = [[0,1],[40,3],[100,6],[170,12],[250,24],[320,64],[390,256],[460,4096],[530,65536],[600,1000000],[760,16777216]];
function colours(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(16777216, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
const fmtC = p => { const c = colours(p); return `${c.toLocaleString("en-GB")} colour${c === 1 ? "" : "s"}`; };
const FACTS = [
  [-30,"a blank wall, a stick of charcoal"],[12,"cave paintings at Lascaux are about 17,000 years old"],[30,"red ochre and charcoal: the first paints"],
  [60,"Egyptian figures: head and legs in profile, eye and shoulders facing you"],[90,"lapis lazuli was ground to make blue"],[125,"Greek potters painted red figures on black"],[155,"contrapposto: weight on one leg"],
  [190,"medieval icons glow with gold leaf"],[230,"stained glass turns light into colour"],[265,"Brunelleschi worked out linear perspective (about 1415)"],[300,"the vanishing point pulls your eye into the picture"],
  [340,"chiaroscuro: strong light against deep shadow"],[372,"Caravaggio lit his scenes like a spotlight"],[410,"Impressionists painted outdoors, en plein air"],[445,"paint in tubes (1841) let artists leave the studio"],
  [480,"Cubism shows many viewpoints at once"],[515,"Duchamp's Fountain (1917): is it art?"],[550,"pop art borrowed from adverts and comics"],[585,"street art turns walls into galleries"],
  [625,"screens mix red, green and blue light"],[670,"24-bit colour: 16,777,216 shades"],[720,"art keeps reinventing itself"],
];
function wall(i, len, side){
  const r = srand(6113 + i*31 + (side==="r"?13:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: // the cave: rock, handprints and ochre animals
      s += `<rect width="120" height="${len}" fill="#3a2414"/>`;
      rep(30, y=>{ s+=`<ellipse cx="${f1(r()*120)}" cy="${y}" rx="${f1(10+r()*20)}" ry="${f1(6+r()*10)}" fill="#4a3020" opacity=".7"/>`; }, 0);
      rep(160, y=>{ s+=`<g opacity=".8" transform="translate(${f1(20+r()*50)} ${y+40})"><path d="M0 0 q-2 -18 4 -20 q4 6 2 18 M8 0 q0 -24 6 -24 q4 8 0 24 M16 0 q2 -22 8 -20 q2 8 -4 20 M22 4 q8 -12 12 -8 q-2 8 -10 12" stroke="#c84a2a" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="14" cy="8" rx="12" ry="10" fill="#c84a2a"/></g>`
        + `<path d="M30 ${y+120} q20 -16 50 -6 q10 -8 14 0 l-4 8 q-30 8 -56 4z M44 ${y+126} v14 M74 ${y+124} v16" stroke="#1a0e06" stroke-width="3" fill="#a8542a" opacity=".85"/>`; });
      break;
    case 1: // ancient Egypt: a frieze of figures in profile and hieroglyphs
      s += `<rect width="120" height="${len}" fill="#d8b878"/>`;
      rep(150, y=>{ s+=`<g transform="translate(60 ${y+20})"><circle cx="0" cy="8" r="9" fill="#a8743a"/><path d="M-8 0 h14 v14 h-14z" fill="#1a1a1a"/><path d="M-6 18 h12 l4 40 h-20z" fill="#f4ead0"/><path d="M-4 58 v26 M4 58 v26" stroke="#a8743a" stroke-width="4"/><path d="M-6 26 l-14 16 M6 26 l14 -8" stroke="#a8743a" stroke-width="4"/></g>`
        + [0,1,2,3].map(k=>`<text x="${8+k*28}" y="${y+130}" font-size="18" fill="#2a5a8a">${["☥","◉","≈","▲","⌂"][Math.floor(r()*5)]}</text>`).join(""); });
      break;
    case 2: // classical Greece: black vases with red figures and a key pattern
      rep(24, y=>{ s+=`<path d="M8 ${y+18} v-14 h16 v10 h-8 v-4" stroke="#e8c8a8" stroke-width="2" fill="none"/><path d="M96 ${y+18} v-14 h16 v10 h-8 v-4" stroke="#e8c8a8" stroke-width="2" fill="none"/>`; }, 0);
      rep(170, y=>{ s+=`<path d="M44 ${y+10} h32 v8 q16 10 14 40 q-2 30 -22 42 h-16 q-20 -12 -22 -42 q-2 -30 14 -40z" fill="#1a1a1a"/><path d="M52 ${y+60} q8 -16 16 0 v20 h-16z" fill="#c8643a"/><circle cx="60" cy="${y+44}" r="6" fill="#c8643a"/><path d="M44 ${y+30} h32 M40 ${y+100} h40" stroke="#c8643a" stroke-width="2"/>`; });
      break;
    case 3: // medieval gold: icons with halos and stained glass
      rep(180, y=>{ s+=`<rect x="20" y="${y}" width="80" height="100" fill="#d4af37"/><circle cx="60" cy="${y+36}" r="20" fill="#ffe58a" stroke="#b8861a" stroke-width="2"/><circle cx="60" cy="${y+38}" r="10" fill="#c8a080"/><path d="M42 ${y+100} q18 -40 36 0z" fill="#1a3a8a"/>`
        + `<g transform="translate(60 ${y+150})">${Array.from({length:8},(_,k)=>`<path d="M0 0 L${f1(Math.cos(k*.785)*26)} ${f1(Math.sin(k*.785)*26)} L${f1(Math.cos(k*.785+.785)*26)} ${f1(Math.sin(k*.785+.785)*26)}z" fill="${["#c8102e","#1a3a8a","#e8b030","#2a8a3a"][k%4]}" stroke="#1a1a1a" stroke-width="2" opacity=".85"/>`).join("")}</g>`; });
      break;
    case 4: // the Renaissance: a perspective grid running to a vanishing point
      rep(220, y=>{ const vx = 60, vy = y+40; for (let k=0; k<=6; k++) s+=`<path d="M${vx} ${vy} L${k*20} ${y+200}" stroke="#d8c8a0" stroke-width="1.2" opacity=".6"/>`;
        for (let k=1; k<5; k++){ const yy = vy + (y+200-vy)*k*k/16; s+=`<path d="M0 ${f1(yy)} H120" stroke="#d8c8a0" stroke-width="1" opacity=".5"/>`; }
        s+=`<circle cx="${vx}" cy="${vy}" r="3" fill="#ffd25a"/><path d="M10 ${y+10} q50 -10 100 0" stroke="#8a6a3a" stroke-width="6" fill="none"/>`; });
      break;
    case 5: // Baroque light: a candle in deep shadow and a gilded frame
      rep(200, y=>{ s+=`<circle cx="60" cy="${y+60}" r="50" fill="#ffd27a" opacity=".12"/><rect x="54" y="${y+60}" width="12" height="44" fill="#f4ead0"/><path class="blink" d="M60 ${y+58} q-6 -10 0 -20 q6 10 0 20z" fill="#ffb03a"/>`
        + `<rect x="18" y="${y+120}" width="84" height="64" fill="none" stroke="#d4af37" stroke-width="6"/><rect x="26" y="${y+128}" width="68" height="48" fill="#2a1a0a"/><circle cx="48" cy="${y+148}" r="10" fill="#e8c8a8" opacity=".8"/>`; });
      break;
    case 6: // Impressionism: dabs of light, water lilies and a sun
      rep(14, y=>{ for (let x=4; x<120; x+=12) s+=`<ellipse cx="${f1(x+r()*6)}" cy="${f1(y+r()*6)}" rx="5" ry="2.4" transform="rotate(${f1(r()*60-30)} ${x} ${y})" fill="hsl(${f1(160+r()*80)} 50% ${f1(55+r()*20)}%)" opacity=".7"/>`; }, 0);
      rep(180, y=>{ s+=`<ellipse cx="40" cy="${y+60}" rx="18" ry="6" fill="#3a8a4a"/><circle cx="44" cy="${y+56}" r="5" fill="#ff8ab0"/><ellipse cx="84" cy="${y+110}" rx="16" ry="5" fill="#3a8a4a"/><circle cx="80" cy="${y+106}" r="4" fill="#fff6c8"/><circle cx="${f1(20+r()*80)}" cy="${y+150}" r="12" fill="#ffd25a" opacity=".6"/>`; });
      break;
    case 7: // modernism: a primary-colour grid and cubist shapes
      rep(160, y=>{ s+=`<rect x="10" y="${y}" width="100" height="120" fill="#f4f0e8" stroke="#111" stroke-width="5"/><path d="M50 ${y} V${y+120} M10 ${y+50} H110 M80 ${y+50} V${y+120}" stroke="#111" stroke-width="5"/><rect x="13" y="${y+3}" width="34" height="44" fill="#c8102e"/><rect x="83" y="${y+53}" width="24" height="64" fill="#1a3a9a"/><rect x="53" y="${y+93}" width="24" height="24" fill="#f4d03a"/>`
        + `<path d="M20 ${y+140} l30 -10 l10 20 l-20 10z M60 ${y+136} l24 4 l-6 22z" fill="#8a7a6a" stroke="#3a3a3a" stroke-width="2"/>`; });
      break;
    case 8: // pop and street art: Ben-Day dots, a speech bubble and spray paint
      rep(14, y=>{ for (let x=7; x<120; x+=14) s+=`<circle cx="${x + (y/14%2)*7}" cy="${y}" r="4" fill="#ff3a8a" opacity=".4"/>`; }, 0);
      rep(190, y=>{ s+=`<path d="M14 ${y+20} h92 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-56 l-14 14 v-14 h-22 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10z" fill="#fff" stroke="#111" stroke-width="3"/><text x="60" y="${y+55}" text-anchor="middle" font-size="22" font-weight="700" fill="#111" font-family="Chakra Petch,sans-serif">POP!</text>`
        + `<path d="M20 ${y+130} q20 -30 40 0 t40 0" stroke="#3ae08a" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="96" cy="${y+150}" r="4" fill="#3ae08a"/>`; });
      break;
    case 9: // the digital frontier: pixels and neon
      rep(12, y=>{ for (let x=0; x<120; x+=12) if (r()<.35) s+=`<rect x="${x}" y="${y}" width="11" height="11" fill="hsl(${Math.floor(r()*360)} 90% 60%)" opacity="${f1(.3+r()*.5)}"/>`; }, 0);
      rep(200, y=>{ s+=`<rect x="20" y="${y}" width="80" height="56" rx="4" fill="none" stroke="#c94ae8" stroke-width="3" class="blink"/><path d="M20 ${y+70} H100" stroke="#3ac0ff" stroke-width="3"/><text x="60" y="${y+36}" text-anchor="middle" font-size="18" font-weight="700" fill="#9ff5e8" font-family="IBM Plex Mono,monospace">RGB</text>`; });
      break;
  }
  return vwall(s, len, side);
}
/* the paintbrush: it gets a beret, paint splashes, a palette and a halo of colour, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, handle = gold ? "#e0ad2a" : "#c8843a", tip = `hsl(${hue} 85% 55%)`;
  const s = `<g class="av-rock" transform="rotate(-18)">
    <rect x="-5" y="2" width="10" height="34" rx="5" fill="${handle}" stroke="#5a3a10" stroke-width="1.4"/>
    ${level >= 3 ? `<circle cx="-2" cy="14" r="2" fill="#3ac0ff"/><circle cx="3" cy="24" r="1.6" fill="#ff3a8a"/><circle cx="-1" cy="30" r="1.8" fill="#f4d03a"/>` : ""}
    <rect x="-9" y="-16" width="18" height="20" rx="3" fill="${gold ? "#fff2a8" : "#c9ced6"}" stroke="#5a5a6a" stroke-width="1.4"/>
    <path d="M-9 -16 q-2 -14 9 -24 q11 10 9 24z" fill="${tip}" stroke="#2a2a2a" stroke-width="1.4"/>
    <path d="M-4 -18 q0 -10 4 -16 M3 -18 q1 -8 -1 -14" stroke="#fff" stroke-width="1.2" fill="none" opacity=".5"/>
    <circle cx="-3.6" cy="-7" r="3" fill="#fff"/><circle cx="3.6" cy="-7" r="3" fill="#fff"/>
    <g class="av-blink"><circle cx="-3.2" cy="-6.8" r="1.6" fill="${level >= 5 ? tip : "#1a1a1a"}"/><circle cx="4" cy="-6.8" r="1.6" fill="${level >= 5 ? tip : "#1a1a1a"}"/></g>
    <path d="M-3 -1 q3 3 6 0" stroke="#2a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<path d="M-13 -36 q13 -12 26 0 q-13 6 -26 0z" fill="#1a1a2a"/><circle cx="0" cy="-42" r="2" fill="#1a1a2a"/>` : ""}
    ${level >= 4 ? `<g transform="translate(-24 18) rotate(18)"><path d="M0 -10 q14 -4 16 8 q-2 10 -14 8 q-4 -4 -2 -6 q-4 -2 -6 2 q-6 -6 6 -12z" fill="#e8d0a0" stroke="#8a6a3a" stroke-width="1"/><circle cx="4" cy="-4" r="2" fill="#e8443a"/><circle cx="10" cy="-2" r="2" fill="#3a8ae8"/><circle cx="9" cy="4" r="2" fill="#f4d03a"/></g>` : ""}
    ${level >= 6 ? Array.from({length:6}, (_, k) => `<circle cx="${f1(Math.cos(k*1.047)*26)}" cy="${f1(-6+Math.sin(k*1.047)*26)}" r="2.6" fill="hsl(${k*60} 85% 60%)"/>`).join("") : ""}
  </g>${gold ? `<circle r="35" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,["#e8443a","#ff9a1a","#f4d03a","#3ac08a","#3a8ae8","#8a3ae8"].map((col,k)=>`<path d="M${30+k*4} 100 a${70-k*8} ${70-k*8} 0 0 1 ${140-k*16} 0" stroke="${col}" stroke-width="7" fill="none"/>`).join("")
    + [[30,24],[170,30],[100,14]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<rect x="40" y="14" width="90" height="72" fill="#d4af37" stroke="${c}" stroke-width="3"/><rect x="52" y="26" width="66" height="48" fill="#2a3a5a"/><circle cx="85" cy="50" r="12" fill="#ffd25a"/>`);
  if (t === "trojan") return W(170,100,`<rect x="50" y="20" width="70" height="56" fill="#f4f0e8" stroke="${c}" stroke-width="3"/><path d="M60 60 l14 -18 l12 12 l8 -8 l16 14z" fill="#3a8a4a"/><path d="M70 76 l-14 20 M100 76 l14 20" stroke="#8a6a3a" stroke-width="3"/>`);
  if (t === "adware") return W(170,100,`<rect x="55" y="16" width="60" height="70" fill="#fff" stroke="${c}" stroke-width="2"/><path d="M64 60 q10 -20 20 -4 q10 14 20 -10" stroke="#3a3a3a" stroke-width="2" fill="none"/>`);
  if (t === "spam") return W(170,90,`<path d="M50 50 q10 -30 30 -10 q14 14 30 -6 q10 20 -10 30 q-20 8 -30 -4 q-14 10 -20 -10z" fill="none" stroke="${c}" stroke-width="3"/>`);
  if (t === "blocked") return W(170,100,`<rect x="30" y="24" width="110" height="52" fill="#f4f4f4" stroke="#e8443a" stroke-width="3"/><path d="M36 40 q20 -10 40 0 t40 0 t20 0 M36 58 q20 -10 40 0 t40 0 t20 0" stroke="#fff" stroke-width="10" opacity=".9"/><text x="85" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">WHITEWASH</text>`);
  return null;
}
registerSubject({
  key:"va", name:"Visual Arts", theme:"A paintbrush climbing a gallery tower through art history", gemWord:"Rainbow", gemTitle:"One in a Rainbow", emoji:"🎨",
  blurb:"You're a <b>paintbrush</b> in a cave with a stick of charcoal. Each prompt has many correct answers. <b>Obvious answers barely leave the cave wall. Answers other artists missed carry you up through art history</b>, past Egypt, Greece, medieval gold, the Renaissance, Baroque light, Impressionism, modernism and pop art to the digital frontier, as your palette grows from 1 colour to 16.7 million.",
  noLevel:"SL and HL",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Rainbow", rootkit:"Museum piece", trojan:"Exhibited", adware:"Sketch", spam:"Doodle"}, blocked:"Smudge", fw:"WHITEWASH",
  notes:{rootkit:"A museum piece: very few artists got this far.", trojan:"Exhibited: not the usual answer.", adware:"A sketch: correct and common.", spam:"A doodle: what everyone draws first."},
  ladder:{gem:"One in a Rainbow: almost no one thinks of it", rootkit:"Museum piece: a rare answer", trojan:"Exhibited: a strong, less common answer", adware:"Sketch: correct and common", spam:"Doodle: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Paint ▲", inject:"Paint", hint:"▲ rarer answers add more colours ▲", count:"mixing the colours"},
  shout:t => ({gem:"A MASTERSTROKE!", rootkit:"BRAVO!", blocked:"SMUDGED!"})[t],
  particles:["●","✦","◆","✿"], particleColor:"#ff7ad9",
  meter:{label:"PALETTE", fmt:fmtC, zone:fmtC, tick:fmtC, gain:(a,b)=>`mix up to ${fmtC(b)}`},
  start:{bg:"linear-gradient(0deg,#0a0603,#1a0e06)", label:"Start · 1 colour", zone:"A stick of charcoal", color:"#e8a058"},
  endBg:"#05010e",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Beyond the frame",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
