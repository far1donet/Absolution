/* Chemistry — zooming into matter, from the lab bench to quarks. The meter shows the scale in metres.
   Syllabus: IB Chemistry (first assessment 2025), Structure 1–3 and Reactivity 1–3. */
(function(){
const CATALOG = [
  {label:"Structure", units:[
    {code:"S1", name:"Models of the particulate nature of matter", topics:[["S1.1","Introduction to the particulate nature of matter"],["S1.2","The nuclear atom"],["S1.3","Electron configurations"],["S1.4","Counting particles by mass: the mole"],["S1.5","Ideal gases"]]},
    {code:"S2", name:"Models of bonding and structure", topics:[["S2.1","The ionic model"],["S2.2","The covalent model"],["S2.3","The metallic model"],["S2.4","From models to materials"]]},
    {code:"S3", name:"Classification of matter", topics:[["S3.1","The periodic table: classification of elements"],["S3.2","Functional groups: classification of organic compounds"]]},
  ]},
  {label:"Reactivity", units:[
    {code:"R1", name:"What drives chemical reactions?", topics:[["R1.1","Measuring enthalpy changes"],["R1.2","Energy cycles in reactions"],["R1.3","Energy from fuels"],["R1.4","Entropy and spontaneity",HL]]},
    {code:"R2", name:"How much, how fast and how far?", topics:[["R2.1","How much? The amount of chemical change"],["R2.2","How fast? The rate of chemical change"],["R2.3","How far? The extent of chemical change"]]},
    {code:"R3", name:"What are the mechanisms of chemical change?", topics:[["R3.1","Proton transfer reactions"],["R3.2","Electron transfer reactions"],["R3.3","Electron sharing reactions"],["R3.4","Electron-pair sharing reactions"]]},
  ]},
];

const PROMPTS = [
P("ch01","S1.1","Name a state of matter or a change of state.","Bose–Einstein condensate",[
  ["Solid",20],["Liquid",18],["Gas",18],["Melting",8],["Boiling / evaporation",8,"boiling","evaporation","evaporating"],["Freezing",6,"solidifying"],["Condensation",6,"condensing"],
  ["Sublimation",5],["Plasma",4],["Deposition",2],["Bose–Einstein condensate",.4,"bose einstein condensate","bec"]]),
P("ch02","S1.1","Name a technique for separating a mixture.","Recrystallisation",[
  ["Filtration",25,"filtering","filter"],["Distillation",20,"simple distillation"],["Chromatography",15,"paper chromatography"],["Evaporation / crystallisation",12,"crystallisation","crystallization","evaporation"],
  ["Fractional distillation",6],["Separating funnel",3,"separatory funnel"],["Decanting",3,"decantation"],["Centrifuge",3,"centrifugation"],["Magnet",2,"magnetic separation"],
  ["Recrystallisation",.4,"recrystallization"]]),
P("ch03","S1.2","Name a subatomic particle or a term describing the atom.","Positron",[
  ["Proton",25,"protons"],["Neutron",20,"neutrons"],["Electron",20,"electrons"],["Nucleus",10],["Isotope",8,"isotopes"],["Atomic number",6,"proton number"],["Mass number",5,"nucleon number"],
  ["Electron shell",3,"shell","energy level"],["Quark",2,"quarks"],["Positron",.4]]),
P("ch04","S1.3","Name a sub-level, orbital or rule used in electron configurations.","Electron spin",[
  ["s orbital",20,"s","s sublevel"],["p orbital",18,"p","p sublevel"],["d orbital",12,"d","d sublevel"],["Energy levels / shells",10,"shells","energy levels"],["Aufbau principle",8,"aufbau"],
  ["f orbital",6,"f","f sublevel"],["Pauli exclusion principle",6,"pauli","pauli exclusion"],["Hund's rule",6,"hund","hunds rule"],["Ionisation energy",5,"ionization energy"],
  ["Emission spectrum",4,"line spectrum","emission spectra"],["Electron spin",.4,"spin"]]),
P("ch05","S1.4","Name a quantity or unit used with the mole.","Molality",[
  ["Mole",20,"mol","moles"],["Avogadro's constant",18,"avogadro","avogadros number","avogadro constant"],["Molar mass",15,"g mol","grams per mole"],["Concentration",10,"molarity","mol dm 3"],
  ["Mass",8,"grams"],["Volume",6,"dm3","cm3"],["Relative atomic mass",4,"ar","relative atomic mass"],["Molar volume",4,"22 7","24 dm3"],["Empirical formula",4],["Molecular formula",3],
  ["Molality",.4]]),
P("ch06","S1.5","Name a gas law, or a variable in the ideal gas equation.","Compressibility factor",[
  ["Pressure",20],["Volume",18],["Temperature (K)",18,"temperature","kelvin"],["Amount (moles)",10,"moles","n","amount"],["Gas constant R",8,"r","gas constant","8 31"],
  ["Boyle's law",8,"boyle","boyles law"],["Charles's law",6,"charles","charles law","charless law"],["Ideal gas equation",6,"pv nrt","pvnrt","ideal gas law"],["Gay-Lussac's law",3,"gay lussac","pressure law"],
  ["Avogadro's law",2,"avogadros law"],["Compressibility factor",.4,"z factor"]]),
P("ch07","S2.1","Name an ionic compound.","Caesium fluoride",[
  ["Sodium chloride",35,"nacl","salt","table salt"],["Magnesium oxide",10,"mgo"],["Calcium carbonate",8,"caco3","limestone","chalk"],["Potassium chloride",6,"kcl"],["Sodium hydroxide",6,"naoh"],
  ["Copper sulfate",5,"cuso4","copper ii sulfate","copper sulphate"],["Calcium chloride",5,"cacl2"],["Lithium fluoride",3,"lif"],["Ammonium nitrate",3],["Aluminium oxide",3,"al2o3","aluminum oxide"],
  ["Caesium fluoride",.4,"csf","cesium fluoride"]],
  [[["water","h2o","carbon dioxide","co2","methane","ch4","glucose","ammonia"],"That's a covalent compound: its atoms share electrons rather than forming ions."]]),
P("ch08","S2.2","Name an intermolecular force.","Halogen bonding",[
  ["Hydrogen bonding",30,"hydrogen bonds","h bonds"],["London dispersion forces",20,"london forces","dispersion forces","london dispersion","instantaneous dipole"],
  ["Dipole–dipole forces",15,"dipole dipole","permanent dipole"],["Van der Waals forces",15,"van der waals","vdw"],["Ion–dipole",3,"ion dipole"],["Dipole–induced dipole",2,"dipole induced dipole"],
  ["Halogen bonding",.4,"halogen bond"]],
  [[["covalent","ionic","metallic","covalent bond","ionic bond"],"That's a bond inside a substance, not a force between molecules."]]),
P("ch09","S2.2","Name a molecular shape from VSEPR theory.","Square pyramidal",[
  ["Linear",25],["Tetrahedral",20],["Trigonal planar",15],["Bent / V-shaped",12,"bent","v shaped","angular"],["Trigonal pyramidal",12,"pyramidal"],["Octahedral",6],
  ["Trigonal bipyramidal",5],["Square planar",3],["See-saw",1.5,"seesaw","see saw"],["T-shaped",1.5,"t shaped"],["Square pyramidal",.4]]),
P("ch10","S2.3","Name a property of metals.","They form alloys",[
  ["Conduct electricity",30,"electrical conductivity","conductive","conductor","good conductor"],["Conduct heat",15,"thermal conductivity","heat conductor"],["Malleable",15,"malleability"],
  ["Ductile",10,"ductility"],["Shiny",10,"lustrous","lustre","luster"],["High melting point",6,"high melting points"],["Delocalised electrons",4,"delocalized electrons","sea of electrons"],
  ["Strong",4,"high tensile strength"],["Sonorous",3],["They form alloys",.4,"alloys","alloy"]]),
P("ch11","S2.4","Name a form (allotrope) of carbon.","Lonsdaleite",[
  ["Diamond",30],["Graphite",28],["Graphene",15],["Fullerene / buckyball",8,"fullerene","buckminsterfullerene","buckyball","c60"],["Carbon nanotubes",6,"nanotubes","nanotube"],
  ["Amorphous carbon (charcoal)",3,"charcoal","amorphous carbon","soot"],["Lonsdaleite",.4]]),
P("ch12","S3.1","Name a group or family in the periodic table.","Chalcogens",[
  ["Alkali metals",25,"group 1"],["Halogens",22,"group 17","group 7"],["Noble gases",20,"group 18","group 0"],["Alkaline earth metals",12,"group 2"],["Transition metals",12,"d block","transition elements"],
  ["Metalloids",3],["Lanthanides",3],["Actinides",2],["Pnictogens",1,"group 15"],["Chalcogens",.4,"group 16"]]),
P("ch13","S3.1","Name a trend across or down the periodic table.","Effective nuclear charge",[
  ["Atomic radius",25,"atomic size","radius"],["Ionisation energy",20,"ionization energy","first ionisation energy"],["Electronegativity",20],["Reactivity",10],
  ["Metallic character",5],["Electron affinity",5],["Melting point",4],["Ionic radius",3],["Effective nuclear charge",.4,"shielding"]]),
P("ch14","S3.2","Name a functional group or homologous series.","Thiol",[
  ["Alcohol (hydroxyl)",18,"alcohol","alcohols","hydroxyl","oh group"],["Alkane",15,"alkanes"],["Alkene",15,"alkenes"],["Carboxylic acid",10,"carboxyl"],["Ketone",8,"carbonyl"],
  ["Aldehyde",8],["Ester",6,"esters"],["Amine",5,"amino"],["Halogenoalkane",4,"haloalkane"],["Amide",3],["Ether",2],["Arene (benzene ring)",2,"arene","phenyl","benzene ring"],
  ["Nitrile",1],["Thiol",.4]]),
P("ch15","R1.1","Name an exothermic or endothermic process.","Thermite reaction",[
  ["Combustion",30,"burning"],["Respiration",10],["Neutralisation",10,"neutralization"],["Photosynthesis",10],["Melting",8,"melting ice"],["Evaporation",6,"boiling"],
  ["Thermal decomposition",6,"decomposition"],["Hand warmers",4,"heat pack"],["Instant cold packs",4,"cold pack","dissolving ammonium nitrate"],["Thermite reaction",.4,"thermite"]]),
P("ch16","R1.3","Name a fuel.","Methanol",[
  ["Natural gas (methane)",20,"methane","natural gas","gas"],["Petrol",18,"gasoline"],["Coal",15],["Hydrogen",10],["Diesel",8],["Ethanol",8,"bioethanol"],["Wood",5],
  ["Propane / butane",5,"propane","butane","lpg"],["Kerosene",3,"jet fuel","paraffin"],["Biodiesel",3,"biofuel"],["Uranium",2],["Methanol",.4]]),
P("ch17","R2.2","Name a factor that affects the rate of a reaction.","Ionic strength",[
  ["Temperature",30,"heat"],["Concentration",25],["Surface area",18,"particle size"],["Catalyst",15,"catalysts","enzymes"],["Pressure",8],["Light",2],["Nature of reactants",2],
  ["Ionic strength",.4]]),
P("ch18","R2.3","Name a term about chemical equilibrium.","ΔG° = −RT ln K",[
  ["Le Chatelier's principle",25,"le chatelier","le chateliers principle"],["Dynamic equilibrium",18,"dynamic"],["Equilibrium constant (K)",15,"kc","k","equilibrium constant"],
  ["Reversible reaction",12,"reversible"],["Position of equilibrium",6,"position"],["Forward and backward rates are equal",6,"rates equal","equal rates"],
  ["Closed system",4],["Reaction quotient (Q)",2,"q","reaction quotient"],["ΔG° = −RT ln K",.4,"gibbs","rt ln k","g rt ln k"]]),
P("ch19","R3.1","Name an acid or a base.","Hydrofluoric acid",[
  ["Hydrochloric acid",25,"hcl"],["Sulfuric acid",18,"h2so4","sulphuric acid"],["Sodium hydroxide",15,"naoh"],["Nitric acid",10,"hno3"],["Ammonia",8,"nh3"],
  ["Ethanoic acid",6,"acetic acid","vinegar"],["Citric acid",4],["Calcium hydroxide",3,"limewater","slaked lime"],["Potassium hydroxide",3,"koh"],["Carbonic acid",2],["Phosphoric acid",2],
  ["Hydrofluoric acid",.4,"hf"]]),
P("ch20","R3.1","Name a term about acids and bases.","Amphiprotic",[
  ["pH",25],["Neutralisation",15,"neutralization"],["Indicator",10,"litmus","universal indicator","phenolphthalein"],["Titration",10],["Brønsted–Lowry",8,"bronsted lowry","proton donor","proton acceptor"],
  ["Buffer",6],["Conjugate acid / base",6,"conjugate","conjugate acid","conjugate base"],["Strong / weak acid",6,"strong acid","weak acid"],["Salt",4],["Ka / pKa",3,"ka","pka"],
  ["Amphiprotic",.4,"amphoteric"]]),
P("ch21","R3.2","Name a term about redox.","Disproportionation",[
  ["Oxidation",25],["Reduction",25],["Oxidising agent",10,"oxidizing agent","oxidant"],["Reducing agent",8,"reductant"],["OIL RIG",8,"oilrig"],["Oxidation state",8,"oxidation number"],
  ["Electrolysis",6],["Half equation",4,"half equations"],["Voltaic cell",4,"galvanic cell","electrochemical cell"],["Rusting / corrosion",4,"rusting","corrosion","rust"],
  ["Anode / cathode",4,"anode","cathode","electrode"],["Disproportionation",.4]]),
P("ch22","R3.3","Name a type of organic reaction or mechanism.","Homolytic fission",[
  ["Combustion",15],["Substitution",15],["Addition",15],["Polymerisation",8,"polymerization"],["Elimination",6],["Free-radical substitution",6,"free radical","radical substitution"],
  ["Nucleophilic substitution",5,"sn1","sn2","nucleophilic"],["Esterification / condensation",5,"esterification","condensation"],["Electrophilic addition",4,"electrophilic"],["Oxidation",4],
  ["Hydrolysis",3],["Cracking",3],["Homolytic fission",.4,"homolytic"]]),
];

/* ---------------- world ---------------- */
const BANDS = [
  {name:"Lab bench",          zone:"The lab bench",        from:0,  to:40,  hue:200, bg:["#16202a","#111a22"]},
  {name:"Inside the beaker",  zone:"Inside the beaker",    from:40, to:100, hue:190, bg:["#0a2230","#071a26"]},
  {name:"Crystal lattice",    zone:"A crystal lattice",    from:100,to:170, hue:210, bg:["#0d1830","#0a1326"]},
  {name:"Molecules",          zone:"Molecules",            from:170,to:250, hue:150, bg:["#08221b","#061a14"]},
  {name:"Chemical bonds",     zone:"Chemical bonds",       from:250,to:320, hue:45,  bg:["#1f1a08","#171306"]},
  {name:"A single atom",      zone:"A single atom",        from:320,to:390, hue:265, bg:["#140c28","#0f091f"]},
  {name:"Electron orbitals",  zone:"Electron orbitals",    from:390,to:460, hue:300, bg:["#1f0a24","#17071b"]},
  {name:"The nucleus",        zone:"The nucleus",          from:460,to:530, hue:15,  bg:["#240e08","#1b0a06"]},
  {name:"Protons & neutrons", zone:"Protons & neutrons",   from:530,to:600, hue:355, bg:["#26080c","#1d0609"]},
  {name:"Quarks",             zone:"Quarks & gluons",      from:600,to:760, hue:330, bg:["#200716","#0a0207"]},
];
const FACTS = [
  [-30,"everything here is built from about 118 elements"],[-14,"put on your goggles"],
  [12,"a beaker of water holds about 10²⁵ molecules"],[30,"1 mole = 6.02 × 10²³ particles"],
  [55,"dissolving spreads solute particles through the solvent"],[85,"concentration is measured in mol dm⁻³"],
  [112,"sodium chloride forms a giant ionic lattice"],[150,"ions are held by electrostatic attraction"],
  [185,"water is bent, with a bond angle of 104.5°"],[225,"intermolecular forces hold molecules together"],
  [265,"a covalent bond is a shared pair of electrons"],[300,"double bonds are shorter and stronger than single bonds"],
  [335,"an atom is about 10⁻¹⁰ m across"],[370,"most of an atom is empty space"],
  [405,"s orbitals are spheres, p orbitals are dumbbells"],[440,"electrons fill orbitals in order of energy"],
  [480,"the nucleus holds 99.9% of an atom's mass"],[515,"the nucleus is about 100,000 times smaller than the atom"],
  [550,"protons and neutrons are called nucleons"],[580,"isotopes differ only in their number of neutrons"],
  [625,"each proton is made of three quarks"],[660,"up, up, down makes a proton"],[690,"gluons hold quarks together"],[735,"10⁻¹⁸ m: the edge of what we can measure"],
];
function wall(i, len, side){
  const r = srand(331 + i*19 + (side==="r"?7:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn) => { for (let y=30; y<len-20; y+=step) fn(y); };
  const ball = (x,y,rad,col) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${rad}" fill="${col}" stroke="rgb(255 255 255 / .35)" stroke-width="1"/>`;
  switch(i){
    case 0: rep(170, y=>{ const x=f1(20+r()*30); s+=`<path d="M${x} ${y} h24 v30 l22 46 a6 6 0 0 1 -6 9 h-56 a6 6 0 0 1 -6 -9 l22 -46 z" fill="hsl(${h} 30% 60% / .12)" stroke="hsl(${h} 50% 75%)" stroke-width="2"/><path d="M${x-14} ${y+62} h52 l10 20 a6 6 0 0 1 -6 9 h-60 a6 6 0 0 1 -6 -9 z" fill="hsl(${(h+120)%360} 70% 55% / .6)"/>`; }); break;
    case 1: rep(26, y=>{ const x=f1(10+r()*100), rr=f1(3+r()*9); s+=`<circle class="drift" style="animation-delay:${f1(-r()*9)}s" cx="${x}" cy="${y}" r="${rr}" fill="none" stroke="hsl(${h} 80% 75% / .7)" stroke-width="1.5"/>`; }); break;
    case 2: for (let y=12; y<len; y+=24) for (let x=12; x<120; x+=24){ const big=((x+y)/24)%2===0; s+=ball(x, y, big?9:5.5, big?`hsl(${h} 70% 60%)`:`hsl(130 70% 55%)`); }
      for (let y=12; y<len; y+=24) s+=`<path d="M12 ${y}H108" stroke="rgb(255 255 255 / .12)"/>`; break;
    case 3: rep(110, y=>{ const x=f1(30+r()*40); s+=`<path d="M${x-26} ${y+16} L${x} ${y} L${x+26} ${y+16}" stroke="#cfe" stroke-width="3" fill="none"/>`+ball(x,y,13,"#e8443a")+ball(x-26,y+16,8,"#f0f0f0")+ball(x+26,y+16,8,"#f0f0f0");
      const y2=y+60, x2=f1(25+r()*50); s+=`<path d="M${x2-28} ${y2}H${x2+28}" stroke="#cfe" stroke-width="3"/><path d="M${x2-28} ${y2+5}H${x2+28}" stroke="#cfe" stroke-width="3"/>`+ball(x2,y2+2,10,"#555")+ball(x2-30,y2+2,11,"#e8443a")+ball(x2+30,y2+2,11,"#e8443a"); }); break;
    case 4: rep(120, y=>{ const x=60; s+=ball(x-22,y,16,`hsl(${h} 60% 40%)`)+ball(x+22,y,16,`hsl(${(h+180)%360} 60% 45%)`)+`<ellipse cx="${x}" cy="${y}" rx="34" ry="22" fill="none" stroke="hsl(${h} 90% 70% / .5)" stroke-dasharray="3 4"/><circle cx="${x}" cy="${y-6}" r="3.5" fill="#fff6b0"/><circle cx="${x}" cy="${y+6}" r="3.5" fill="#fff6b0"/>`; }); break;
    case 5: rep(200, y=>{ const x=60; s+=ball(x,y+70,8,"#ff7a5a"); [22,38,54].forEach((rr,k)=>{ s+=`<circle cx="${x}" cy="${y+70}" r="${rr}" fill="none" stroke="hsl(${h} 80% 70% / .55)"/>`; for (let e=0;e<[2,8,4][k];e++){ const a=e/[2,8,4][k]*6.283+k; s+=`<circle cx="${f1(x+Math.cos(a)*rr)}" cy="${f1(y+70+Math.sin(a)*rr)}" r="3" fill="#bfe8ff"/>`; } }); }); break;
    case 6: rep(160, y=>{ const x=60; s+=`<circle cx="${x}" cy="${y+40}" r="16" fill="hsl(${h} 80% 60% / .25)" stroke="hsl(${h} 80% 70%)"/>`; [0,60,120].forEach((a,k)=> s+=`<g transform="rotate(${a} ${x} ${y+40})"><ellipse cx="${x}" cy="${y+12}" rx="11" ry="24" fill="hsl(${(h+k*40)%360} 80% 60% / .3)" stroke="hsl(${(h+k*40)%360} 80% 70%)"/><ellipse cx="${x}" cy="${y+68}" rx="11" ry="24" fill="hsl(${(h+k*40)%360} 80% 60% / .3)" stroke="hsl(${(h+k*40)%360} 80% 70%)"/></g>`); }); break;
    case 7: rep(110, y=>{ const x=60; for (let k=0;k<12;k++){ const a=k*2.4, rr=4+k*2.2; s+=ball(x+Math.cos(a)*rr, y+Math.sin(a)*rr, 9, k%2?"#ff5a4a":"#9aa6b0"); } }); break;
    case 8: rep(120, y=>{ const x=f1(40+r()*40), col=r()<.5?"#ff5a4a":"#8a96a0"; s+=`<circle cx="${x}" cy="${y}" r="30" fill="${col}" fill-opacity=".35" stroke="${col}" stroke-width="2"/>`; [[-10,-8,"#ff4040"],[10,-8,"#40ff70"],[0,10,"#4080ff"]].forEach(([dx,dy,c])=> s+=`<circle cx="${x+dx}" cy="${y+dy}" r="6" fill="${c}"/>`); }); break;
    case 9: rep(110, y=>{ const x=f1(40+r()*40); const q=[[x-18,y+10,"#ff4040"],[x+18,y+10,"#40ff70"],[x,y-18,"#4080ff"]];
      for (let k=0;k<3;k++){ const [x1,y1]=q[k], [x2,y2]=q[(k+1)%3]; s+=`<path d="M${x1} ${y1} Q${f1((x1+x2)/2+(y2-y1)*.3)} ${f1((y1+y2)/2-(x2-x1)*.3)} ${x2} ${y2}" stroke="#ffe066" stroke-width="2" fill="none" stroke-dasharray="4 3" class="flow"/>`; }
      q.forEach(([a,b,c])=> s+=`<circle cx="${f1(a)}" cy="${f1(b)}" r="8" fill="${c}" class="blink" style="animation-delay:${f1(r()*1.5)}s"/>`); }); break;
  }
  return vwall(s, len, side);
}
function avatar(level, hue){
  const rr=9+level*.4; let s=`<circle r="${rr}" fill="hsl(${hue} 70% 45%)" stroke="hsl(${hue} 95% 75%)" stroke-width="2"/>`;
  [0,60,120].forEach((a,k)=>{ s+=`<g transform="rotate(${a})"><ellipse rx="${f1(rr+15)}" ry="${f1(7+level*.3)}" fill="none" stroke="hsl(${hue} 90% 70%)" stroke-width="1.6"/><circle cx="${f1(rr+15)}" cy="0" r="3.2" fill="#e9fbff"/></g>`; });
  return avatarSVG(`<g class="vspin">${s}</g>`);
}
const ex = p => -1 - Math.round(p*17/700);
registerSubject({
  key:"chem", name:"Chemistry", theme:"Zooming into matter, down to quarks", gemWord:"Mole", gemTitle:"One in a Mole", emoji:"⚗️",
  blurb:"You're a nanoprobe on a lab bench. Each prompt has many correct answers. <b>Obvious answers barely zoom in. Answers other players missed take you smaller and smaller</b>, through solutions, lattices, molecules, atoms and nuclei, down to quarks.",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Mole", rootkit:"Isotope", trojan:"Catalyst", adware:"Solution", spam:"Tap water"}, blocked:"No reaction", fw:"ACTIVATION BARRIER",
  verbs:{cta:"Zoom in ▼", inject:"React", hint:"▼ rarer answers zoom further in ▼", count:"zooming in"},
  particles:["e⁻","p⁺","n"], particleColor:"#9fe8ff",
  meter:{label:"SCALE", fmt:p=>`10${sup(ex(p))} m`, zone:p=>`10${sup(ex(p))} <span style="text-transform:none">m</span>`, tick:p=>`10${sup(ex(p))}`, gain:(a,b)=>{ const d=ex(a)-ex(b); return d>0 ? `zoom in ×10${sup(d)}` : "zoom in a little"; }},
  start:{bg:"linear-gradient(#1b232b,#182028 70%,#16202a)", label:'Start · 10⁰ <span style="text-transform:none">m</span>', zone:"The chemistry lab", color:"#9fd8ff"},
  zone0:46, endBg:"#0a0207",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar,
  extras:({pos})=>`<div class="coreglow" style="top:${pos(690)}px;--glow:rgb(255 80 180 / .25)"></div><div class="floor" style="top:${pos(760)}px;--fc:#ff6ac8;background:linear-gradient(#2a0620,#0a0207)"></div>`,
  catalog:CATALOG, prompts:PROMPTS,
});
})();
