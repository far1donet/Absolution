/* Design Technology — a lightbulb idea travels the whole life of a product: from the sketchbook to the workshop, the
   model shop, the CAD lab and the 3D printer, through user testing and the production line, to the warehouse, the
   shops and finally the recycling plant, where it comes back round. Rarer answers make more units.
   Syllabus: IB Design technology (first assessment 2027): Design in theory, Design in practice and Design in
   context, plus the design project. */
(function(){
const CATALOG = [
  {label:"Theme A · Design in theory", units:[
    {code:"A", name:"Design in theory", topics:[["A.1","Human factors and ergonomics"],["A.2","Materials and their properties"],["A.3","Modelling and prototyping"]]},
  ]},
  {label:"Theme B · Design in practice", units:[
    {code:"B", name:"Design in practice", topics:[["B.1","User-centred design"],["B.2","Manufacturing processes"],["B.3","Designing and communicating ideas"]]},
  ]},
  {label:"Theme C · Design in context", units:[
    {code:"C", name:"Design in context", topics:[["C.1","Sustainability and the circular economy"],["C.2","Innovation and classic design"],["C.3","Commercial production"]]},
  ]},
  {label:"The design project", units:[
    {code:"X", name:"The design project", topics:[["X.1","The design project"]]},
  ]},
];

const PROMPTS = [
/* ---------- A.1 Human factors ---------- */
P("dt001","A.1","Name a human factor designers consider.","Proxemics",[
  ["Ergonomics",20],["Anthropometrics",15,"anthropometric data","body measurements"],["Comfort",10],["Safety",10],["Physiological factors",8,"physiological"],["Psychological factors",8,"psychological"],["Accessibility",6,"inclusive design"],
  ["Ease of use",6,"usability"],["Fatigue",4],["Reach",4],["Posture",4],["Proxemics",.4,"personal space"]]),
P("dt002","A.1","Name a body measurement used in anthropometrics.","Popliteal height",[
  ["Height",20,"stature"],["Arm length",12,"arm reach","reach"],["Hand size",10,"hand length"],["Head circumference",8],["Sitting height",8],["Shoulder width",6],["Leg length",6],["Eye height",5],["Body mass",5,"weight","mass"],
  ["Hip breadth",4,"hip width"],["Grip diameter",3],["Popliteal height",.4,"popliteal"]]),
P("dt003","A.1","Name a psychological factor that affects how people experience a product.","Affordance",[
  ["Colour",15,"color"],["Lighting",10,"light"],["Sound",10,"noise"],["Perception",8],["Smell",6],["Temperature",6],["Texture",6],["Mood",5],["Taste",4],["Stress",4],["Alertness",3],["Memory",3],["Affordance",.4,"affordances"]]),
/* ---------- A.2 Materials ---------- */
P("dt004","A.2","Name a material property.","Creep",[
  ["Strength",15,"tensile strength"],["Hardness",12],["Toughness",10],["Density",10],["Elasticity",8],["Conductivity",8,"thermal conductivity","electrical conductivity"],["Plasticity",6],["Malleability",6],["Ductility",6],["Brittleness",5],
  ["Stiffness",5,"young s modulus"],["Corrosion resistance",4],["Creep",.4]]),
P("dt005","A.2","Name a group or type of material.","Graphene",[
  ["Metals",15,"metal"],["Plastics",15,"polymers","plastic"],["Timber",12,"wood"],["Ceramics",8],["Glass",8],["Composites",8,"composite"],["Textiles",8,"fabric"],["Paper and card",6,"paper","cardboard"],["Smart materials",6,"smart"],
  ["Natural materials",4],["Bioplastics",3,"bioplastic"],["Graphene",.4]]),
P("dt006","A.2","Name a smart material.","Electrorheological fluid",[
  ["Shape memory alloys",20,"nitinol","shape memory alloy","sma"],["Thermochromic pigments",15,"thermochromic"],["Photochromic materials",12,"photochromic"],["Piezoelectric materials",10,"piezoelectric"],["Quantum tunnelling composite",6,"qtc"],
  ["Shape memory polymers",6,"shape memory polymer"],["Self-healing materials",5,"self healing"],["Magnetorheological fluid",4,"mr fluid"],["Hydrogels",3,"hydrogel"],["Electroluminescent materials",3,"electroluminescent"],["Electrorheological fluid",.4,"er fluid"]]),
/* ---------- A.3 Modelling ---------- */
P("dt007","A.3","Name a type of model or prototype.","A Wizard of Oz prototype",[
  ["A CAD model",15,"cad","computer model","digital model"],["A sketch",12,"sketches"],["A 3D-printed model",12,"3d print","3d printed model"],["A physical scale model",10,"scale model","physical model"],["A mock-up",8,"mockup"],["A working prototype",8,"functional prototype"],
  ["A card model",6,"cardboard model"],["An appearance model",6],["A rendering",4,"render"],["A wireframe",4],["A virtual reality model",3,"vr model"],["A storyboard",3],["A Wizard of Oz prototype",.4,"wizard of oz"]]),
P("dt008","A.3","Name a CAD program or digital-design technique.","Generative design",[
  ["Fusion 360",10,"fusion"],["SketchUp",8],["AutoCAD",8],["SolidWorks",8],["Tinkercad",6],["Rendering",6],["Onshape",5],["Extrusion",5,"extrude"],["Assembly modelling",4,"assembly"],["Finite element analysis",4,"fea"],["Surface modelling",4],
  ["Parametric modelling",4,"parametric"],["Generative design",.4]]),
/* ---------- B.1 User-centred design ---------- */
P("dt009","B.1","Name a method of user research.","Cultural probes",[
  ["Interviews",18],["Surveys",15,"questionnaires"],["Observation",12],["Focus groups",10],["User testing",10,"usability testing"],["Personas",8],["Empathy maps",6,"empathy map"],["Journey maps",5,"user journey","customer journey"],
  ["Ethnography",4],["Diary studies",3,"diaries"],["A/B testing",3,"ab testing"],["Cultural probes",.4]]),
P("dt010","B.1","Name a stage of design thinking or the design process.","Iterate",[
  ["Empathize",20,"empathise","empathy"],["Define",18],["Ideate",18,"ideation"],["Prototype",18,"prototyping"],["Test",18,"testing"],["Discover",4],["Develop",4],["Deliver",3],["Iterate",.4,"iteration"]]),
/* ---------- B.2 Manufacturing ---------- */
P("dt011","B.2","Name a manufacturing process.","Electrical discharge machining",[
  ["Injection moulding",15,"injection molding"],["3D printing",15,"additive manufacturing"],["Casting",10],["CNC machining",10,"cnc","milling","turning"],["Laser cutting",10],["Welding",6],["Forging",6],["Vacuum forming",6],
  ["Blow moulding",5,"blow molding"],["Extrusion",5],["Stamping",4,"pressing"],["Thermoforming",3],["Electrical discharge machining",.4,"edm"]]),
P("dt012","B.2","Name a scale of production.","Mass customization",[
  ["One-off production",25,"one off","bespoke","craft production","job production"],["Batch production",25,"batch"],["Mass production",25,"mass"],["Continuous flow production",10,"continuous production","continuous flow","continuous"],
  ["Mass customization",.4,"mass customisation"]]),
P("dt013","B.2","Name a way of joining materials.","Ultrasonic welding",[
  ["Adhesives",15,"glue","gluing","adhesive"],["Screws",12,"screw"],["Nuts and bolts",10,"bolts"],["Welding",10],["Nails",8],["Rivets",6],["Soldering",6],["Wood joints",6,"dovetail","mortise and tenon","dowel"],["Snap fits",4,"snap fit"],
  ["Stitching",4,"sewing"],["Brazing",3],["Ultrasonic welding",.4]]),
/* ---------- B.3 Designing and communicating ---------- */
P("dt014","B.3","Name a way designers communicate ideas.","A sectional view",[
  ["Sketches",18,"sketching"],["Orthographic drawings",12,"orthographic","technical drawing","orthographic projection"],["CAD renders",10,"renders","rendering"],["Isometric drawings",10,"isometric"],["Exploded views",8,"exploded view"],["Physical models",8,"models"],
  ["Annotations",6],["Storyboards",5],["Presentations",5],["Flowcharts",4],["Perspective drawings",4,"perspective"],["A sectional view",.4,"section","cross section","sectional view"]]),
P("dt015","B.3","Name an area covered in a design specification.","Manufacture",[
  ["Function",18],["Aesthetics",15],["Cost",15],["Materials",12],["Safety",10],["Size",10],["Customer",8,"user","target market"],["Environment",6,"sustainability"],["Ergonomics",5],["Durability",4],["Maintenance",3],["Manufacture",.4,"manufacturing"]]),
/* ---------- C.1 Sustainability ---------- */
P("dt016","C.1","Name one of the 'R's of sustainable design.","Rot",[
  ["Reduce",22],["Recycle",22],["Reuse",20],["Repair",10],["Rethink",8],["Refuse",6],["Repurpose",5,"upcycle"],["Remanufacture",3],["Rot",.4,"compost"]]),
P("dt017","C.1","Name a stage of a product's life cycle.","Cradle to cradle",[
  ["Raw materials",15,"extraction","raw material extraction"],["Manufacturing",15,"production"],["Use",12,"use phase"],["Disposal",12,"end of life","landfill"],["Distribution",10,"transport"],["Recycling",10],["Design",6],["Packaging",5],["Maintenance",3],
  ["Cradle to cradle",.4,"c2c"]]),
P("dt018","C.1","Name a principle or strategy of the circular economy.","Industrial symbiosis",[
  ["Designing out waste",18,"zero waste","design out waste"],["Keeping products in use",15,"longevity","durability"],["Recycling",12],["Repair",10],["Regenerating natural systems",8,"regenerate"],["Remanufacturing",6],["Modular design",5,"modularity"],
  ["Sharing",5,"sharing economy"],["Leasing",4,"product as a service"],["Biodegradable materials",4,"biodegradable"],["Industrial symbiosis",.4]]),
/* ---------- C.2 Innovation and classic design ---------- */
P("dt019","C.2","Name a type of innovation.","Frugal innovation",[
  ["Disruptive innovation",18,"disruptive"],["Incremental innovation",15,"incremental"],["Radical innovation",12,"radical"],["Technology push",6],["Market pull",6],["Process innovation",6,"process"],["Product innovation",6],["Architectural innovation",5],
  ["Open innovation",4],["Sustainable innovation",4],["Frugal innovation",.4,"jugaad"]]),
P("dt020","C.2","Name a design classic.","The Monobloc chair",[
  ["The Coca-Cola bottle",12,"coke bottle","coca cola bottle"],["The iPhone",12,"iphone"],["The Eames lounge chair",8,"eames chair"],["The Mini",8,"mini cooper"],["The Volkswagen Beetle",8,"vw beetle","beetle"],["The London Underground map",6,"tube map"],
  ["The Swiss Army knife",6,"swiss army knife"],["The Lego brick",6,"lego"],["The Anglepoise lamp",5,"anglepoise"],["The Bic Cristal pen",5,"bic pen","biro"],["The Dyson vacuum cleaner",4,"dyson"],["The Barcelona chair",4],["The Juicy Salif",3,"juicy salif","starck lemon squeezer"],
  ["The Panton chair",3],["The Monobloc chair",.4,"monobloc"]]),
P("dt021","C.2","Name a famous designer.","Charlotte Perriand",[
  ["James Dyson",15,"dyson"],["Jony Ive",12,"jonathan ive"],["Dieter Rams",10,"rams"],["Philippe Starck",8,"starck"],["Charles and Ray Eames",8,"eames","charles eames","ray eames"],["Zaha Hadid",6,"hadid"],["Coco Chanel",5,"chanel"],
  ["Frank Lloyd Wright",5],["Le Corbusier",5],["Marc Newson",3,"newson"],["Naoto Fukasawa",2,"fukasawa"],["Charlotte Perriand",.4,"perriand"]]),
/* ---------- C.3 Commercial production ---------- */
P("dt022","C.3","Name a way automation or robotics is used in manufacturing.","Cobots",[
  ["Robot arms",18,"robotic arms","robots","industrial robots"],["Assembly lines",15,"assembly line","conveyor belts"],["CNC machines",10,"cnc"],["Welding robots",8],["Automated quality control",8,"quality control","inspection"],["Packaging",6],["Painting robots",5,"spray painting"],
  ["Automated warehouses",5,"warehouse robots"],["Pick and place",4],["Computer-integrated manufacturing",4,"cim"],["3D printing",4],["Cobots",.4,"collaborative robots"]]),
P("dt023","C.3","Name a production system or quality approach.","Poka-yoke",[
  ["Just in time",15,"jit","just-in-time"],["Lean production",12,"lean manufacturing","lean"],["Quality control",10],["Total quality management",10,"tqm"],["Quality assurance",8],["Six Sigma",6],["Kanban",5],["Kaizen",5,"continuous improvement"],
  ["Flexible manufacturing",4,"fms"],["Poka-yoke",.4,"poka yoke","mistake proofing","error proofing"]]),
P("dt024","C.3","Name a type of intellectual property protection.","Trade dress",[
  ["A patent",25,"patent","patents"],["Copyright",20],["A trademark",18,"trademark","trademarks","logo"],["A registered design",10,"registered design","design right","design registration"],["A trade secret",6,"trade secret","trade secrets"],["Licensing",4,"licence","license"],
  ["Creative Commons",3],["Trade dress",.4]]),
/* ---------- X.1 The design project ---------- */
P("dt025","X.1","Name something to include in a design project.","A Gantt chart",[
  ["Research",15],["A design brief",12,"brief","design brief"],["A specification",12,"design specification","specification"],["Ideas and sketches",10,"ideas","sketches"],["Prototypes",10,"models","prototype"],["User testing",8,"testing"],["Evaluation",8],
  ["Feedback from users",6,"feedback"],["The final solution",6,"final design","final solution"],["Iterations",5,"iteration"],["A user persona",4,"persona"],["Analysis of existing products",4,"existing products","product analysis"],["A Gantt chart",.4,"gantt","gantt chart"]]),
];

/* ================= the life of a product (sideways) ================= */
const BANDS = [
  {name:"The drawing board",    zone:"The drawing board",    from:0,  to:40,  hue:210, bg:["#14223e","#1a2a4a"]},
  {name:"The workshop",         zone:"The workshop",         from:40, to:100, hue:30,  bg:["#1a2a4a","#5a4a3a"]},
  {name:"The model shop",       zone:"The model shop",       from:100,to:170, hue:200, bg:["#5a4a3a","#3a4a5a"]},
  {name:"The CAD lab",          zone:"The CAD lab",          from:170,to:250, hue:205, bg:["#3a4a5a","#0e1a2e"]},
  {name:"The 3D printer",       zone:"The 3D printer",       from:250,to:320, hue:160, bg:["#0e1a2e","#1a2e2e"]},
  {name:"User testing",         zone:"User testing",         from:320,to:390, hue:280, bg:["#1a2e2e","#2a2a4a"]},
  {name:"The production line",  zone:"The production line",  from:390,to:460, hue:30,  bg:["#2a2a4a","#3a3a3a"]},
  {name:"The warehouse",        zone:"The warehouse",        from:460,to:530, hue:35,  bg:["#3a3a3a","#4a3a2a"]},
  {name:"The shops",            zone:"The shops",            from:530,to:600, hue:330, bg:["#4a3a2a","#2a3a5a"]},
  {name:"The recycling plant",  zone:"The recycling plant",  from:600,to:760, hue:120, bg:["#2a3a5a","#1a3a2a"]},
];
// units made at each band boundary: a one-off idea becomes a billion products
const KNOTS = [[0,1],[40,1],[100,3],[170,10],[250,50],[320,200],[390,10000],[460,1e6],[530,1e7],[600,1e8],[760,1e9]];
function units(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1){ const t = (Math.max(p, 0) - p0) / (p1 - p0); return Math.min(1e9, Math.round(Math.exp(Math.log(y0) + t * (Math.log(y1) - Math.log(y0))))); } }
}
function fmtU(p){ const u = units(p); if (u >= 1e9) return "1 billion units"; if (u >= 1e6) return `${(u / 1e6).toFixed(u >= 1e7 ? 0 : 1)} million units`; return `${u.toLocaleString("en-GB")} unit${u === 1 ? "" : "s"}`; }
const FACTS = [
  [-30,"every product starts as an idea"],[12,"design is iteration: sketch, test, improve"],[30,"form follows function · Louis Sullivan"],
  [60,"measure twice, cut once"],[90,"anthropometric data: design for the 5th to the 95th percentile"],[125,"card and foam models are quick and cheap"],[155,"a prototype tests one idea at a time"],
  [190,"CAD lets you change a design in seconds"],[230,"orthographic drawings show the front, side and top"],[265,"3D printers build objects layer by layer"],[300,"rapid prototyping speeds up iteration"],
  [340,"watch real people use your product"],[372,"empathize · define · ideate · prototype · test"],[410,"Henry Ford's moving assembly line (1913) made the Model T cheap"],[445,"robots weld, paint and assemble"],
  [480,"just in time: stock arrives exactly when it's needed"],[515,"packaging protects, informs and sells"],[550,"the market decides if a design succeeds"],[585,"good design is as little design as possible · Dieter Rams"],
  [625,"in a circular economy, waste becomes a resource"],[670,"recycled aluminium uses about 95% less energy than new aluminium"],[720,"design for disassembly"],
];
const GR = 340;
function scene(i, len){
  const r = srand(8231 + i*29); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#1e3050","#6a5a4a","#5a6a7a","#1a2a3e","#2a3a3a","#3a3a5a","#4a4a4a","#5a4a3a","#c8c0b8","#3a5a3a"][i];
  s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/>`;
  switch(i){
    case 0: // the drawing board: a blueprint grid, white sketches and annotations
      for (let y = 20; y < GR; y += 24) s += `<path d="M0 ${y} H${len}" stroke="#9fc8e8" stroke-width="1" opacity=".25"/>`; for (let x = 0; x < len; x += 24) s += `<path d="M${x} 0 V${GR}" stroke="#9fc8e8" stroke-width="1" opacity=".18"/>`;
      each(170, x=>{ s+=`<g stroke="#e8f0ff" stroke-width="2" fill="none" opacity=".85"><path d="M${x} ${GR-60} q20 -60 60 -50 q30 10 20 50 z"/><path d="M${x+20} ${GR-80} l20 -40"/><circle cx="${x+40}" cy="${GR-130}" r="10"/></g><path d="M${x+90} ${GR-110} l30 -20" stroke="#ffd25a" stroke-width="1.5"/><text x="${x+120}" y="${GR-132}" font-size="15" fill="#ffd25a" font-family="Caveat,cursive">${["grip?","lighter!","v2","ergonomic","cheaper?"][Math.floor(r()*5)]}</text>`; }, 20);
      break;
    case 1: // the workshop: a workbench with tools
      s += `<rect x="0" y="${GR-90}" width="${len}" height="14" fill="#8a5a2a"/>`;
      each(140, x=>{ s+=`<rect x="${x+10}" y="${GR-76}" width="10" height="76" fill="#6a4a2a"/><path d="M${x+40} ${GR-110} l40 -6 l4 12 l-40 6z" fill="#c9c9c9"/><rect x="${x+76}" y="${GR-120}" width="16" height="26" rx="3" fill="#e8443a"/><path d="M${x+100} ${GR-96} v-30 l10 -6 l10 6 v30" stroke="#4a4a4a" stroke-width="5" fill="none"/>`; }, 20);
      s += `<rect x="0" y="40" width="${len}" height="150" fill="#5a4a3a" opacity=".5"/>`;
      each(36, x=>{ s+=`<path d="M${x} 60 v${f1(40+r()*60)}" stroke="#c9c9c9" stroke-width="3"/>`; }, 10);
      break;
    case 2: // the model shop: card and foam models
      each(130, x=>{ const h = f1(40+r()*80); s+=`<path d="M${x} ${GR} v-${h} l30 -16 l30 16 v${h}z" fill="#e8dcc0" stroke="#8a7a5a" stroke-width="2"/><path d="M${x+30} ${f1(GR-h-16)} v${h}" stroke="#8a7a5a" stroke-width="1.5"/><circle cx="${x+90}" cy="${GR-26}" r="24" fill="#9fd8ff" opacity=".7" stroke="#5a8ab8"/>`; }, 20);
      break;
    case 3: // the CAD lab: screens with wireframes
      each(170, x=>{ s+=`<rect x="${x}" y="${GR-170}" width="130" height="90" rx="6" fill="#0a1424" stroke="#3ac0ff" stroke-width="2"/><g stroke="#3ac0ff" stroke-width="1.4" fill="none"><path d="M${x+40} ${GR-110} l24 -14 l24 14 l-24 14z M${x+40} ${GR-110} v24 l24 14 v-24 M${x+88} ${GR-110} v24 l-24 14"/></g><path d="M${x+60} ${GR-80} v30 M${x+40} ${GR-50} h40" stroke="#5a6a7a" stroke-width="6"/>`; }, 30);
      for (let y = GR+10; y < 420; y += 14) s += `<path d="M0 ${y} H${len}" stroke="#3ac0ff" stroke-width=".6" opacity=".3"/>`;
      break;
    case 4: // the 3D printer: frames printing objects layer by layer
      each(200, x=>{ s+=`<rect x="${x}" y="${GR-200}" width="140" height="200" fill="none" stroke="#c9c9c9" stroke-width="4"/><rect x="${x+50}" y="${GR-160}" width="40" height="16" fill="#3a3a3a"/><path d="M${x+70} ${GR-144} v10" stroke="#ff8a1a" stroke-width="3"/>`
        + Array.from({length: 8}, (_, k) => `<rect x="${x+40+k%2*2}" y="${GR-20-k*9}" width="${60-k*3}" height="8" fill="hsl(${160+k*6} 70% 50%)"/>`).join(""); }, 30);
      break;
    case 5: // user testing: people trying a prototype, with clipboards
      each(180, x=>{ s+=`<circle cx="${x+30}" cy="${GR-120}" r="14" fill="#e8c8a8"/><rect x="${x+16}" y="${GR-104}" width="28" height="60" rx="8" fill="${["#3a8ae8","#e8443a","#3ac08a"][Math.floor(r()*3)]}"/><path d="M${x+22} ${GR-44} v44 M${x+38} ${GR-44} v44" stroke="#2a2a3a" stroke-width="6"/>`
        + `<rect x="${x+60}" y="${GR-100}" width="40" height="50" fill="#f4f0e8" stroke="#5a5a5a"/><path d="M${x+66} ${GR-86} h28 M${x+66} ${GR-76} h22 M${x+66} ${GR-66} h26" stroke="#3a8ae8" stroke-width="2"/><path d="M${x+68} ${GR-58} l4 4 l8 -8" stroke="#3ee089" stroke-width="2" fill="none"/>`; }, 30);
      break;
    case 6: // the production line: a conveyor belt and robot arms
      s += `<rect x="0" y="${GR-50}" width="${len}" height="16" fill="#2a2a2a"/>`;
      each(24, x=>{ s+=`<circle cx="${x}" cy="${GR-42}" r="6" fill="#5a5a5a"/>`; }, 10);
      each(60, x=>{ s+=`<rect x="${x}" y="${GR-74}" width="30" height="24" rx="4" fill="#ffd25a" stroke="#8a6a1a"/>`; }, 20);
      each(220, x=>{ s+=`<rect x="${x}" y="${GR-34}" width="30" height="34" fill="#ff8a1a"/><g class="av-hover"><path d="M${x+15} ${GR-34} L${x+40} ${GR-130} L${x+90} ${GR-110}" stroke="#ff8a1a" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M${x+90} ${GR-110} l10 18 M${x+90} ${GR-110} l-6 20" stroke="#4a4a4a" stroke-width="4"/></g>`; }, 60);
      break;
    case 7: // the warehouse: shelves stacked with boxes
      each(110, x=>{ for (let k=0; k<4; k++){ s+=`<rect x="${x}" y="${GR-60-k*60}" width="90" height="6" fill="#ff8a1a"/>`; for (let j=0; j<3; j++) if (r()<.85) s+=`<rect x="${x+4+j*29}" y="${GR-54-k*60-26}" width="26" height="26" fill="#c8a06a" stroke="#8a6a3a"/>`; } s+=`<path d="M${x} ${GR} v-${4*60+10} M${x+90} ${GR} v-${4*60+10}" stroke="#3a6ae8" stroke-width="5"/>`; }, 20);
      break;
    case 8: // the shops: shelves of products and price tags
      each(160, x=>{ s+=`<rect x="${x}" y="${GR-200}" width="140" height="200" fill="#f4f0e8"/>` + [0,1,2].map(k=>`<rect x="${x}" y="${GR-60-k*60}" width="140" height="6" fill="#c9c9c9"/>` + [0,1,2,3].map(j=>`<rect x="${x+8+j*32}" y="${GR-60-k*60-34}" width="24" height="34" rx="3" fill="hsl(${Math.floor(r()*360)} 60% 55%)"/>`).join("")).join("") + `<rect x="${x+50}" y="${GR-230}" width="40" height="22" fill="#e8443a"/><text x="${x+70}" y="${GR-214}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">SALE</text>`; }, 20);
      break;
    case 9: // the recycling plant: sorting bins and the recycling loop
      each(160, x=>{ [["#3a8ae8","PAPER"],["#f4d03a","PLASTIC"],["#3ac08a","GLASS"]].forEach(([c,t],k)=>{ s+=`<rect x="${x+k*46}" y="${GR-70}" width="40" height="70" rx="4" fill="${c}"/><text x="${x+k*46+20}" y="${GR-40}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">${t}</text>`; }); }, 20);
      each(320, x=>{ s+=`<g class="vspin" style="animation-duration:10s;transform-origin:${x+80}px ${GR-180}px"><path d="M${x+80} ${GR-230} a50 50 0 0 1 45 70" stroke="#3ee089" stroke-width="10" fill="none"/><path d="M${x+125} ${GR-160} a50 50 0 0 1 -90 0" stroke="#3ee089" stroke-width="10" fill="none"/><path d="M${x+35} ${GR-160} a50 50 0 0 1 45 -70" stroke="#3ee089" stroke-width="10" fill="none"/></g>`; }, 100);
      break;
  }
  return hscene(s, len);
}
/* the lightbulb idea: it gets safety goggles, a pencil, a hard hat and a wrench, then shines gold */
function avatar(level, hue){
  const gold = level >= 8, glass = gold ? "#ffe58a" : "#fff8d0", line = gold ? "#b8861a" : "#8a8a6a";
  const s = `<g class="av-rock">
    <circle r="${level >= 5 ? 30 : 0}" cy="-6" fill="hsl(${hue} 90% 60%)" opacity=".18"/>
    <path d="M-16 -6 a17 17 0 1 1 32 0 q-2 8 -8 14 q-2 3 -2 8 h-12 q0 -5 -2 -8 q-6 -6 -8 -14z" fill="${glass}" stroke="${line}" stroke-width="1.8"/>
    <path d="M-4 16 v-10 q4 -6 8 0 v10" stroke="#e0ad2a" stroke-width="1.6" fill="none"/>
    <rect x="-7" y="16" width="14" height="5" rx="1" fill="#9a9aa8"/><rect x="-7" y="21" width="14" height="5" rx="1" fill="#7a7a88"/><path d="M-4 26 h8 l-2 4 h-4z" fill="#5a5a68"/>
    <circle cx="-6" cy="-12" r="3.4" fill="#fff"/><circle cx="6" cy="-12" r="3.4" fill="#fff"/>
    <g class="av-blink"><circle cx="-5.6" cy="-11.6" r="1.8" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/><circle cx="6.4" cy="-11.6" r="1.8" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/></g>
    <path d="M-4 -4 q4 3 8 0" stroke="#5a5a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${level >= 2 ? `<rect x="-12" y="-16" width="24" height="8" rx="4" fill="#9fd8ff" opacity=".55" stroke="#3a6a9a" stroke-width="1.2"/><path d="M-12 -12 h-4 M12 -12 h4" stroke="#3a6a9a" stroke-width="1.4"/>` : ""}
    ${level >= 3 ? `<path d="M14 -26 l10 -12" stroke="#f4d03a" stroke-width="3.4" stroke-linecap="round"/><path d="M24 -38 l2 -3" stroke="#e8a0a0" stroke-width="3.4" stroke-linecap="round"/>` : ""}
    ${level >= 4 ? `<path d="M-14 -24 q14 -16 28 0z" fill="#ffd25a" stroke="#b8861a" stroke-width="1.2"/><rect x="-16" y="-25" width="32" height="3" rx="1" fill="#ffd25a"/>` : ""}
    ${level >= 6 ? `<g transform="translate(24 10) rotate(35)"><rect x="-2" y="-2" width="4" height="18" fill="#9a9aa8"/><path d="M-6 -2 a6 6 0 1 1 12 0 l-3 -1 v-3 h-6 v3z" fill="#9a9aa8"/></g>` : ""}
    ${level >= 1 ? `<path class="blink" d="M-26 -14 h-6 M26 -14 h6 M0 -40 v-6 M-18 -32 l-4 -4 M18 -32 l4 -4" stroke="#ffd25a" stroke-width="2" stroke-linecap="round"/>` : ""}
    ${gold ? `<circle r="35" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<rect x="50" y="20" width="100" height="70" fill="#1a3a7a" stroke="${c}" stroke-width="2"/>` + [0,1,2,3,4].map(k=>`<path d="M${60+k*20} 20 v70 M50 ${32+k*12} h100" stroke="#9fd8ff" stroke-width=".8" opacity=".5"/>`).join("")
    + `<path d="M70 70 l20 -30 l20 20 l20 -26" stroke="#fff" stroke-width="2.4" fill="none"/><circle cx="130" cy="34" r="5" fill="#ffd25a"/>` + [[30,26],[170,34],[36,96],[166,98]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M60 86 l6 -40 h38 l6 40z" fill="#c8102e" stroke="${c}" stroke-width="2"/><path d="M66 46 q20 -30 38 0" stroke="${c}" stroke-width="3" fill="none"/><rect x="72" y="86" width="26" height="6" fill="${c}"/>`);
  if (t === "trojan") return W(170,100,`<rect x="50" y="20" width="70" height="60" fill="#f4f0e8" stroke="${c}" stroke-width="2"/><circle cx="85" cy="50" r="16" fill="#ffd25a" stroke="${c}" stroke-width="2"/><text x="85" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#5a3a08">®</text>`);
  if (t === "adware") return W(170,100,`<rect x="60" y="24" width="50" height="56" rx="4" fill="#e8dcc0" stroke="${c}" stroke-width="2"/><path d="M70 40 h30 M70 52 h22" stroke="#8a7a5a" stroke-width="3"/>`);
  if (t === "spam") return W(170,90,`<path d="M50 60 q20 -40 40 -10 q14 20 30 -20" stroke="${c}" stroke-width="3" fill="none"/><path d="M48 70 l60 -50" stroke="#c9c9c9" stroke-width="4"/>`);
  if (t === "blocked") return W(170,100,`<rect x="30" y="26" width="110" height="48" rx="4" fill="#fff" stroke="#e8443a" stroke-width="4"/><text x="85" y="58" text-anchor="middle" font-size="20" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">RECALL</text>`);
  return null;
}
registerSubject({
  key:"dt", name:"Design Technology", theme:"A bright idea travelling the whole life of a product", gemWord:"Blueprint", gemTitle:"One in a Blueprint", emoji:"💡",
  blurb:"You're a <b>bright idea</b> on a drawing board. Each prompt has many correct answers. <b>Obvious answers barely leave the page. Answers other designers missed take you further</b>, through the workshop, the model shop, the CAD lab and the 3D printer, into user testing and down the production line, to the warehouse, the shops and the recycling plant, until a billion units have been made.",
  noLevel:"SL and HL",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Blueprint", rootkit:"Design classic", trojan:"Patented", adware:"Prototype", spam:"Rough sketch"}, blocked:"Design flaw", fw:"RECALL",
  notes:{rootkit:"A design classic: very few designers got this far.", trojan:"Patented: not the usual answer.", adware:"A prototype: correct and common.", spam:"A rough sketch: what everyone draws first."},
  ladder:{gem:"One in a Blueprint: almost no one thinks of it", rootkit:"Design classic: a rare answer", trojan:"Patented: a strong, less common answer", adware:"Prototype: correct and common", spam:"Rough sketch: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Build ▶", inject:"Make it", hint:"▶ rarer answers make more units ▶", count:"testing the prototype"},
  shout:t => ({gem:"EUREKA!", rootkit:"DESIGN CLASSIC!", blocked:"PRODUCT RECALL!"})[t],
  particles:["⚙","✦","▲","●"], particleColor:"#ffd25a",
  meter:{label:"UNITS MADE", fmt:fmtU, zone:fmtU, tick:fmtU, gain:(a,b)=>`make ${fmtU(b)}`},
  start:{bg:"linear-gradient(90deg,#0e1a30,#14223e)", label:"Start · 1 idea", zone:"A blank blueprint", color:"#9fd8ff"},
  endBg:"linear-gradient(90deg,#1a3a2a,#0a1a0a)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"The circular economy",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
