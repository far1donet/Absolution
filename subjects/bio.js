/* Biology — a virus burrowing into the human body, from skin to DNA.
   Syllabus: IB Biology (first assessment 2025), themes A–D. Prompts lean towards the human body.
   Prompt format: P(id, spec, question, gem, [[label, popularity weight, ...aliases]], traps, hl) */
(function(){
const CATALOG = [
  {label:"Theme A · Unity and diversity", units:[
    {code:"A1", name:"Molecules", topics:[["A1.1","Water"],["A1.2","Nucleic acids"]]},
    {code:"A2", name:"Cells", topics:[["A2.1","Origins of cells",HL],["A2.2","Cell structure"],["A2.3","Viruses",HL]]},
    {code:"A3", name:"Organisms", topics:[["A3.1","Diversity of organisms"],["A3.2","Classification and cladistics",HL]]},
    {code:"A4", name:"Ecosystems", topics:[["A4.1","Evolution and speciation"],["A4.2","Conservation of biodiversity"]]},
  ]},
  {label:"Theme B · Form and function", units:[
    {code:"B1", name:"Molecules", topics:[["B1.1","Carbohydrates and lipids"],["B1.2","Proteins"]]},
    {code:"B2", name:"Cells", topics:[["B2.1","Membranes and membrane transport"],["B2.2","Organelles and compartmentalization"],["B2.3","Cell specialization"]]},
    {code:"B3", name:"Organisms", topics:[["B3.1","Gas exchange"],["B3.2","Transport"],["B3.3","Muscle and motility",HL]]},
    {code:"B4", name:"Ecosystems", topics:[["B4.1","Adaptation to environment"],["B4.2","Ecological niches"]]},
  ]},
  {label:"Theme C · Interaction and interdependence", units:[
    {code:"C1", name:"Molecules", topics:[["C1.1","Enzymes and metabolism"],["C1.2","Cell respiration"],["C1.3","Photosynthesis"]]},
    {code:"C2", name:"Cells", topics:[["C2.1","Chemical signalling",HL],["C2.2","Neural signalling"]]},
    {code:"C3", name:"Organisms", topics:[["C3.1","Integration of body systems"],["C3.2","Defence against disease"]]},
    {code:"C4", name:"Ecosystems", topics:[["C4.1","Populations and communities"],["C4.2","Transfers of energy and matter"]]},
  ]},
  {label:"Theme D · Continuity and change", units:[
    {code:"D1", name:"Molecules", topics:[["D1.1","DNA replication"],["D1.2","Protein synthesis"],["D1.3","Mutations and gene editing"]]},
    {code:"D2", name:"Cells", topics:[["D2.1","Cell and nuclear division"],["D2.2","Gene expression",HL],["D2.3","Water potential"]]},
    {code:"D3", name:"Organisms", topics:[["D3.1","Reproduction"],["D3.2","Inheritance"],["D3.3","Homeostasis"]]},
    {code:"D4", name:"Ecosystems", topics:[["D4.1","Natural selection"],["D4.2","Stability and change"],["D4.3","Climate change"]]},
  ]},
];

const PROMPTS = [
P("bi01","A1.1","Name a property of water that matters for life.","Capillary action",[
  ["Good solvent",25,"solvent","universal solvent","dissolves things"],["High specific heat capacity",15,"specific heat capacity","high heat capacity","heat capacity"],
  ["Cohesion",15,"cohesive"],["Adhesion",10,"adhesive"],["Hydrogen bonding",10,"hydrogen bonds","h bonds"],["Polarity",8,"polar","dipole"],
  ["Surface tension",6],["Ice floats",4,"ice is less dense","density","floats"],["Cooling by evaporation",4,"sweating","evaporation","latent heat","latent heat of vaporisation"],
  ["Transparent",2,"transparency"],["Capillary action",.4,"capillarity"]]),
P("bi02","A1.2","Name a feature of DNA's structure.","Major and minor grooves",[
  ["Double helix",30,"helix","double stranded"],["Nucleotides",8,"nucleotide"],["Deoxyribose sugar",8,"deoxyribose","sugar"],["Phosphate group",8,"phosphate"],
  ["Hydrogen bonds between bases",8,"hydrogen bonds","hydrogen bonding"],["Complementary base pairing",6,"base pairing","complementary","a t c g","a pairs with t"],
  ["Adenine",5],["Thymine",5],["Guanine",5],["Cytosine",5],["Sugar-phosphate backbone",4,"backbone","sugar phosphate backbone"],
  ["Antiparallel strands",2,"antiparallel"],["Major and minor grooves",.4,"major groove","minor groove","grooves"]]),
P("bi03","A2.2","Name an organelle found in a human cell.","Peroxisome",[
  ["Nucleus",30],["Mitochondria",25,"mitochondrion"],["Ribosome",12,"ribosomes"],["Cell membrane",10,"plasma membrane","membrane"],
  ["Endoplasmic reticulum",6,"er","rough er","smooth er","rough endoplasmic reticulum","smooth endoplasmic reticulum"],["Golgi apparatus",5,"golgi","golgi body"],
  ["Lysosome",4,"lysosomes"],["Vesicle",2,"vesicles"],["Centriole",1.5,"centrioles","centrosome"],["Nucleolus",1.5],["Peroxisome",.4]],
  [[["cell wall","chloroplast","chloroplasts","large vacuole","permanent vacuole"],"Human (animal) cells don't have that. It's found in plant cells."]]),
P("bi04","A2.3","Name a feature of viruses.","Reverse transcriptase",[
  ["Need a host cell to reproduce",25,"host cell","host","need a host","replicate inside cells","can't reproduce alone"],["Genetic material (DNA or RNA)",15,"dna","rna","genetic material","genome"],
  ["Protein coat (capsid)",15,"capsid","protein coat"],["Not made of cells",8,"acellular","not cells","not living"],["Very small",6,"tiny","smaller than bacteria"],
  ["Lipid envelope",6,"envelope","enveloped"],["Spike proteins",6,"spikes","spike protein"],["Lytic cycle",6,"lytic"],["Lysogenic cycle",4,"lysogenic"],
  ["Mutate quickly",4,"mutation","mutations","mutate"],["Bacteriophage",2,"phage"],["Reverse transcriptase",.4,"retrovirus","retroviruses"]], [], HL),
P("bi05","B1.1","Name a carbohydrate or a lipid.","Chitin",[
  ["Glucose",25],["Starch",12],["Triglycerides / fats",10,"fat","fats","triglyceride","triglycerides","lipid"],["Glycogen",8],["Sucrose",6,"table sugar"],
  ["Cholesterol",6],["Phospholipids",6,"phospholipid"],["Cellulose",6],["Lactose",4],["Fructose",4],["Fatty acids",3,"fatty acid"],["Maltose",2],
  ["Steroids",2,"steroid"],["Chitin",.4]]),
P("bi06","B1.2","Name a job that proteins do in the body.","Cell adhesion",[
  ["Enzymes",25,"enzyme","catalysts","speed up reactions"],["Structure (collagen, keratin)",12,"structure","structural","collagen","keratin"],
  ["Hormones",10,"insulin","hormone"],["Antibodies",10,"antibody","immunity"],["Transport (haemoglobin)",10,"haemoglobin","hemoglobin","transport","carry oxygen"],
  ["Muscle contraction",6,"actin","myosin","movement","muscles"],["Receptors",4,"receptor"],["Membrane channels and pumps",4,"channels","channel proteins","pumps"],
  ["Storage",2],["Cell adhesion",.4,"adhesion"]]),
P("bi07","B2.1","Name a way substances cross a cell membrane.","Pinocytosis",[
  ["Diffusion",30,"simple diffusion"],["Osmosis",22],["Active transport",18,"active"],["Facilitated diffusion",10,"facilitated"],["Endocytosis",6],["Exocytosis",5],
  ["Protein pumps",3,"pump","pumps","sodium potassium pump"],["Channel proteins",3,"channels","channel"],["Phagocytosis",2],["Pinocytosis",.4]]),
P("bi08","B3.1","Name a structure in the human gas exchange system.","Type II pneumocytes",[
  ["Lungs",30,"lung"],["Alveoli",15,"alveolus"],["Trachea",15,"windpipe"],["Bronchi",10,"bronchus"],["Diaphragm",8],["Bronchioles",6,"bronchiole"],
  ["Nose / mouth",4,"nose","mouth","nasal cavity"],["Intercostal muscles",3,"intercostal","rib muscles"],["Capillaries",2,"capillary"],["Larynx",2],["Pleural membranes",1,"pleura"],
  ["Type II pneumocytes",.4,"type 2 pneumocytes","pneumocytes","surfactant"]]),
P("bi09","B3.2","Name a part of the human circulatory system.","Coronary arteries",[
  ["Heart",30],["Arteries",15,"artery"],["Veins",12,"vein"],["Capillaries",10,"capillary"],["Blood",8],["Red blood cells",6,"rbc","erythrocytes"],
  ["Atria / ventricles",4,"atrium","atria","ventricle","ventricles"],["Aorta",4],["Valves",3,"valve","heart valves"],["Plasma",3],["Vena cava",2],
  ["Pulmonary artery",1.5,"pulmonary vein","pulmonary"],["Coronary arteries",.4,"coronary artery","coronary"]]),
P("bi10","B3.3","Name a structure involved in muscle contraction or movement.","Titin",[
  ["Muscles",14,"muscle","skeletal muscle"],["Actin",14],["Myosin",14],["Tendons",10,"tendon"],["Sarcomere",8,"sarcomeres"],["ATP",6],["Joints",6,"joint","synovial joint"],
  ["Ligaments",6,"ligament"],["Antagonistic pairs",5,"antagonistic","biceps and triceps","biceps","triceps"],["Bones",5,"bone","skeleton"],["Calcium ions",4,"calcium"],
  ["Troponin / tropomyosin",2,"troponin","tropomyosin"],["Titin",.4]], [], HL),
P("bi11","C1.1","Name a factor that affects how fast an enzyme works.","Allosteric regulation",[
  ["Temperature",35,"heat"],["pH",30,"acidity"],["Substrate concentration",12,"substrate","amount of substrate"],["Enzyme concentration",8,"amount of enzyme"],
  ["Inhibitors",6,"inhibitor","competitive inhibition","non competitive inhibition"],["Cofactors / coenzymes",2,"cofactor","coenzyme","coenzymes"],["Allosteric regulation",.4,"allosteric"]],
  [[["denaturation","denatured"],"Denaturation is what happens when a factor like temperature or pH goes too far. Name the factor itself."]]),
P("bi12","C1.1","Name a human digestive enzyme.","Enterokinase",[
  ["Amylase",30,"salivary amylase"],["Protease",15],["Lipase",15],["Pepsin",8],["Trypsin",5],["Lactase",5],["Maltase",3],["Sucrase",2],["Chymotrypsin",1],["Enterokinase",.4,"enteropeptidase"]],
  [[["bile"],"Bile emulsifies fat, but it isn't an enzyme."]]),
P("bi13","C1.2","Name something involved in cell respiration.","Chemiosmosis",[
  ["Glucose",25],["Oxygen",20],["ATP",15],["Carbon dioxide",10,"co2"],["Mitochondria",8,"mitochondrion"],["Water",6],["Glycolysis",5],
  ["Krebs cycle",4,"krebs","citric acid cycle"],["Lactate (anaerobic)",4,"lactic acid","lactate","anaerobic"],["Pyruvate",2],["Electron transport chain",2,"etc","electron transport"],
  ["Chemiosmosis",.4,"atp synthase"]]),
P("bi14","C1.3","Name something needed for, or produced by, photosynthesis.","Rubisco",[
  ["Sunlight",25,"light","light energy","sun"],["Carbon dioxide",20,"co2"],["Water",15],["Chlorophyll",12],["Glucose",10,"sugar"],["Oxygen",10],["Chloroplasts",6,"chloroplast"],
  ["ATP",2],["Calvin cycle",2,"light independent reactions"],["Rubisco",.4]]),
P("bi15","C2.2","Name a part of a neuron or a step in a nerve impulse.","Saltatory conduction",[
  ["Axon",20],["Synapse",12,"synapses"],["Dendrites",15,"dendrite"],["Cell body",10],["Myelin sheath",10,"myelin"],["Neurotransmitter",8,"acetylcholine","neurotransmitters"],
  ["Action potential",8],["Resting potential",4],["Depolarisation",4,"depolarization"],["Repolarisation",3,"repolarization"],["Node of Ranvier",3,"nodes of ranvier"],
  ["Sodium-potassium pump",2,"sodium potassium pump"],["Saltatory conduction",.4,"saltatory"]]),
P("bi16","C3.1","Name an organ system in the human body.","Lymphatic system",[
  ["Circulatory",20,"cardiovascular","circulation"],["Respiratory",18],["Digestive",18],["Nervous",15],["Skeletal",8],["Muscular",6],["Immune",5],["Endocrine",5,"hormonal"],
  ["Urinary / excretory",4,"excretory","urinary","renal"],["Reproductive",4],["Integumentary (skin)",2,"integumentary","skin"],["Lymphatic system",.4,"lymphatic"]]),
P("bi17","C3.2","Name a way the body defends itself against disease.","Memory cells",[
  ["Skin",25,"skin barrier"],["White blood cells",20,"wbc","white cells","leukocytes"],["Antibodies",15,"antibody"],["Mucus",8,"mucous membranes"],["Stomach acid",6,"acid"],
  ["Phagocytes",6,"phagocytosis","macrophages","macrophage"],["Vaccination",5,"vaccine","vaccines","immunisation"],["Lymphocytes",4,"b cells","t cells","b lymphocytes","t lymphocytes"],
  ["Blood clotting",4,"clotting","platelets","clots"],["Fever",3],["Cilia",3],["Tears / lysozyme",1.5,"tears","lysozyme"],["Memory cells",.4,"memory b cells","immunological memory"]],
  [[["antibiotics","antibiotic"],"Antibiotics are medicine, not the body's own defence, and they don't work on viruses."]]),
P("bi18","D1.2","Name a molecule, structure or stage involved in protein synthesis.","Spliceosome",[
  ["DNA",20],["mRNA",18,"messenger rna"],["Ribosome",15,"ribosomes"],["tRNA",12,"transfer rna"],["Amino acids",10,"amino acid"],["Codon",6,"codons"],
  ["Transcription",5],["Translation",5],["Anticodon",4,"anticodons"],["RNA polymerase",4],["Peptide bond",2,"peptide bonds"],["Spliceosome",.4,"splicing","introns"]]),
P("bi19","D2.1","Name a stage of mitosis or meiosis.","Prometaphase",[
  ["Prophase",25],["Metaphase",20],["Anaphase",18],["Telophase",15],["Interphase",8],["Cytokinesis",8],["Crossing over",3,"crossing over"],["Prometaphase",.4]]),
P("bi20","D3.2","Name a term used in genetics and inheritance.","Epistasis",[
  ["Allele",15,"alleles"],["Gene",15,"genes"],["Dominant",12],["Recessive",12],["Genotype",10],["Phenotype",10],["Homozygous",6],["Heterozygous",6],
  ["Punnett square",6,"punnet square"],["Codominance",3,"codominant"],["Sex-linked",2,"sex linked","x linked"],["Epistasis",.4]]),
P("bi21","D3.3","Name something the human body keeps constant (homeostasis).","Calcium levels",[
  ["Body temperature",35,"temperature","temp"],["Blood glucose",25,"glucose","blood sugar","sugar"],["Water balance",12,"water","osmoregulation","water levels"],
  ["Blood pH",6,"ph"],["Carbon dioxide level",6,"co2","carbon dioxide"],["Blood pressure",5],["Oxygen level",4,"oxygen"],["Salt / ion levels",3,"salt","sodium","ions"],
  ["Calcium levels",.4,"calcium"]]),
P("bi22","D3.3","Name a hormone.","Secretin",[
  ["Insulin",30],["Adrenaline",18,"epinephrine"],["Testosterone",10],["Oestrogen",10,"estrogen"],["Glucagon",8],["Thyroxine",4,"thyroid hormone"],["ADH",4,"antidiuretic hormone","vasopressin"],
  ["Progesterone",4],["Cortisol",4],["Melatonin",2],["Growth hormone",2],["FSH / LH",2,"fsh","lh"],["Oxytocin",1.5],["Leptin",1.5],["Secretin",.4]]),
P("bi23","D4.1","Name an idea that is part of natural selection.","Genetic drift",[
  ["Variation",20],["Survival of the fittest",18,"fittest survive"],["Adaptation",15,"adaptations","adapted"],["Competition",8,"struggle for survival"],["Mutation",8,"mutations"],
  ["Reproduction / passing on genes",8,"reproduce","offspring","pass on genes","pass on alleles"],["Inheritance",6,"inherited","heritable"],["Overproduction",5,"more offspring than survive"],
  ["Antibiotic resistance",5,"bacteria resistance","resistant bacteria"],["Speciation",3,"new species"],["Genetic drift",.4]]),
P("bi24","A4.2","Name a threat to biodiversity.","Light pollution",[
  ["Habitat loss / deforestation",30,"deforestation","habitat loss","habitat destruction"],["Climate change",18,"global warming"],["Pollution",12,"plastic","plastic pollution"],
  ["Invasive species",8,"alien species","non native species"],["Overhunting / overfishing",8,"poaching","overhunting","overfishing","hunting"],["Urbanisation",4,"urbanization","cities"],
  ["Monoculture farming",3,"monoculture","agriculture"],["Disease",3],["Light pollution",.4]]),
P("bi25","C4.2","Name a term about food chains or energy transfer.","Detritivore",[
  ["Producer",25,"producers","autotroph"],["Consumer",15,"consumers","heterotroph"],["Decomposer",10,"decomposers"],["Trophic level",8,"trophic levels"],["Herbivore",8],["Carnivore",8],
  ["Primary / secondary consumer",6,"primary consumer","secondary consumer","tertiary consumer"],["Apex predator",4,"top predator"],["Biomass",4],["Energy lost as heat",4,"heat loss","10 percent rule"],
  ["Detritivore",.4,"detritivores"]]),
];

/* ---------------- world ---------------- */
const BANDS = [
  {name:"Skin",            zone:"The skin",               from:0,  to:40,  hue:20,  bg:["#3a1f1a","#2a1512"]},
  {name:"Bloodstream",     zone:"The bloodstream",        from:40, to:100, hue:355, bg:["#2b070c","#22050a"]},
  {name:"Immune system",   zone:"Immune system",          from:100,to:170, hue:200, bg:["#0b1a26","#08131d"]},
  {name:"Heart",           zone:"The heart",              from:170,to:250, hue:345, bg:["#2a0812","#1f060d"]},
  {name:"Lungs",           zone:"Lungs & alveoli",        from:250,to:320, hue:330, bg:["#26101c","#1c0b15"]},
  {name:"Nervous system",  zone:"Nervous system",         from:320,to:390, hue:265, bg:["#140c26","#0f091d"]},
  {name:"Muscle tissue",   zone:"Muscle tissue",          from:390,to:460, hue:10,  bg:["#2a0d0a","#200907"]},
  {name:"Cell membrane",   zone:"The cell membrane",      from:460,to:530, hue:45,  bg:["#221b08","#191406"]},
  {name:"Cytoplasm",       zone:"Cytoplasm & organelles", from:530,to:600, hue:160, bg:["#062019","#041712"]},
  {name:"Nucleus & DNA",   zone:"Nucleus · DNA",          from:600,to:760, hue:290, bg:["#1d0a24","#0b040e"]},
];
const FACTS = [
  [-30,"a single sneeze can spray thousands of droplets"],[-14,"you drift in on a droplet of air"],
  [12,"skin is the body's largest organ"],[30,"the outer skin layer replaces itself about every month"],
  [55,"an adult has about 5 litres of blood"],[80,"red blood cells carry oxygen bound to haemoglobin"],
  [112,"white blood cells hunt down pathogens"],[140,"antibodies are proteins made by B lymphocytes"],[160,"phagocytes engulf invaders whole"],
  [185,"the heart beats about 100,000 times a day"],[215,"arteries carry blood away from the heart"],[238,"valves stop blood flowing backwards"],
  [262,"hundreds of millions of alveoli give a huge surface area"],[295,"oxygen diffuses across walls one cell thick"],
  [335,"some nerve impulses travel at over 100 m/s"],[365,"synapses pass signals with neurotransmitters"],
  [405,"muscles contract when actin and myosin filaments slide"],[440,"every contraction uses ATP"],
  [475,"the membrane is a phospholipid bilayer"],[510,"membrane proteins act as channels and pumps"],
  [545,"mitochondria make most of the cell's ATP"],[575,"ribosomes build proteins from amino acids"],
  [622,"a human body cell holds 46 chromosomes"],[652,"DNA is a double helix of complementary bases"],[682,"A pairs with T, C pairs with G"],[730,"you can't get deeper than the genome"],
];
function wall(i, len, side){
  const r = srand(211 + i*17 + (side==="r"?3:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn) => { for (let y=20; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: for (let y=0; y<len; y+=26) for (let x=((y/26)%2)*20-10; x<120; x+=40) s+=`<rect x="${x}" y="${y}" width="36" height="22" rx="9" fill="hsl(${h} 45% ${f1(26+r()*8)}%)" stroke="hsl(${h} 50% 45%)"/>`;
      rep(160, y=>{ s+=`<path d="M${f1(30+r()*60)} ${y} q${f1(r()*20-10)} 60 0 120" stroke="#1a0e08" stroke-width="2.5" fill="none"/>`; }); break;
    case 1: rep(46, y=>{ const x=f1(14+r()*80), rot=f1(r()*60-30); s+=`<g class="drift" style="animation-delay:${f1(-r()*9)}s"><ellipse cx="${x}" cy="${y}" rx="17" ry="11" transform="rotate(${rot} ${x} ${y})" fill="#c8283a" stroke="#ff5a66" stroke-width="1.5"/><ellipse cx="${x}" cy="${y}" rx="8" ry="4.5" transform="rotate(${rot} ${x} ${y})" fill="#8f1424"/></g>`; }); break;
    case 2: rep(110, y=>{ const x=f1(30+r()*50); s+=`<circle cx="${x}" cy="${y}" r="20" fill="hsl(${h} 30% 80% / .15)" stroke="hsl(${h} 60% 75%)" stroke-width="1.5"/><path d="M${x-9} ${y-3} q5 -9 9 0 q5 9 9 0" stroke="hsl(270 60% 70%)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      const ax=f1(10+r()*90), ay=y+62; s+=`<path d="M${ax} ${ay+12} v-10 l-7 -8 M${ax} ${ay+2} l7 -8" stroke="#7fd0ff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`; }); break;
    case 3: for (let k=0; k<5; k++){ let d=`M${12+k*22} 0`; for (let y=0; y<len; y+=40) d+=` q${k%2?10:-10} 20 0 40`; s+=`<path d="${d}" stroke="hsl(${h} 60% ${35+k*4}%)" stroke-width="12" fill="none" stroke-linecap="round" opacity=".85"/>`; }
      rep(60, y=>{ s+=`<path d="M4 ${y}h112" stroke="hsl(${h} 40% 18%)" stroke-width="1.5"/>`; });
      rep(260, y=>{ s+=`<path class="beat" d="M60 ${y+30} c-30 -30 -50 10 0 40 c50 -30 30 -70 0 -40z" fill="hsl(${h} 80% 55%)" opacity=".9"/>`; }); break;
    case 4: rep(120, y=>{ const cx=f1(55+r()*20); s+=`<path d="M${cx} ${y-40} v30" stroke="hsl(${h} 50% 60%)" stroke-width="5"/>`;
      for (let k=0; k<7; k++){ const a=k/7*6.283; s+=`<circle cx="${f1(cx+Math.cos(a)*22)}" cy="${f1(y+12+Math.sin(a)*22)}" r="13" fill="hsl(${h} 50% 30% / .7)" stroke="hsl(${h} 70% 65%)" stroke-width="1.5"/>`; }
      s+=`<circle cx="${cx}" cy="${y+12}" r="12" fill="hsl(${h} 50% 30% / .7)" stroke="hsl(${h} 70% 65%)" stroke-width="1.5"/>`; }); break;
    case 5: rep(170, y=>{ const x=f1(40+r()*30); s+=`<circle cx="${x}" cy="${y}" r="12" fill="hsl(${h} 50% 30%)" stroke="hsl(${h} 85% 70%)" stroke-width="2"/>`;
      for (let k=0; k<5; k++){ const a=k/5*6.283; s+=`<path d="M${x} ${y} l${f1(Math.cos(a)*26)} ${f1(Math.sin(a)*26)} l${f1(Math.cos(a+.6)*12)} ${f1(Math.sin(a+.6)*12)}" stroke="hsl(${h} 85% 70%)" stroke-width="2" fill="none"/>`; }
      s+=`<path d="M${x} ${y+12} V${y+150}" stroke="hsl(${h} 85% 70%)" stroke-width="3" class="flow"/>`;
      for (let m=0; m<3; m++) s+=`<rect x="${x-5}" y="${y+30+m*38}" width="10" height="28" rx="5" fill="hsl(${h} 30% 80% / .5)"/>`; }); break;
    case 6: for (let k=0; k<4; k++){ s+=`<rect x="${8+k*28}" y="0" width="24" height="${len}" rx="10" fill="hsl(${h} 55% 28%)"/>`; for (let y=0; y<len; y+=12) s+=`<path d="M${8+k*28} ${y}h24" stroke="hsl(${h} 50% 18%)" stroke-width="3"/>`; } break;
    case 7: for (let y=6; y<len; y+=14) s+=`<circle cx="18" cy="${y}" r="6" fill="hsl(${h} 85% 60%)"/><path d="M24 ${y-2}h30M24 ${y+2}h30M66 ${y-2}h30M66 ${y+2}h30" stroke="hsl(${h} 50% 70%)" stroke-width="1.5"/><circle cx="102" cy="${y}" r="6" fill="hsl(${h} 85% 60%)"/>`;
      rep(150, y=>{ s+=`<rect x="44" y="${y}" width="32" height="56" rx="12" fill="hsl(200 60% 45%)" stroke="hsl(200 80% 70%)"/>`; }); break;
    case 8: rep(130, y=>{ const x=f1(20+r()*30); s+=`<ellipse cx="${x+30}" cy="${y}" rx="38" ry="18" fill="hsl(${h} 50% 22%)" stroke="hsl(${h} 80% 60%)" stroke-width="2"/><path d="M${x} ${y} l8 -10 l8 20 l8 -20 l8 20 l8 -20 l8 20 l8 -10" stroke="hsl(${h} 80% 60%)" stroke-width="1.5" fill="none"/>`;
      for (let k=0; k<6; k++) s+=`<circle cx="${f1(r()*110+5)}" cy="${f1(y+40+r()*50)}" r="3" fill="hsl(${h} 90% 75%)"/>`; }); break;
    case 9: { let a="M60 0", b="M60 0", rungs=""; for (let y=0; y<len; y+=10){ const t=y/60*Math.PI, x1=f1(60+Math.sin(t)*34), x2=f1(60-Math.sin(t)*34); a+=` L${x1} ${y}`; b+=` L${x2} ${y}`;
        if (y%20===0) rungs+=`<path d="M${x1} ${y}H${x2}" stroke="hsl(${(y/20%4)*80} 80% 65%)" stroke-width="3"/>`; }
      s += rungs + `<path d="${a}" stroke="hsl(${h} 85% 70%)" stroke-width="4" fill="none"/><path d="${b}" stroke="hsl(190 85% 65%)" stroke-width="4" fill="none"/>`; } break;
  }
  return vwall(s, len, side);
}
function avatar(level, hue){
  const n=6+level, r=13+level*.5; let s="";
  for (let i=0; i<n; i++){ const a=i/n*6.283, c=Math.cos(a), si=Math.sin(a);
    s+=`<line x1="${f1(c*r)}" y1="${f1(si*r)}" x2="${f1(c*(r+9))}" y2="${f1(si*(r+9))}" stroke="hsl(${hue} 80% 65%)" stroke-width="2.2"/><circle cx="${f1(c*(r+10))}" cy="${f1(si*(r+10))}" r="3.4" fill="hsl(${hue} 95% 72%)"/>`; }
  const hex = Array.from({length:6},(_,i)=>{ const a=i/6*6.283+.52; return `${f1(Math.cos(a)*r)},${f1(Math.sin(a)*r)}`; }).join(" ");
  s+=`<polygon points="${hex}" fill="hsl(${hue} 55% 16%)" stroke="hsl(${hue} 90% 66%)" stroke-width="2.4"/><path d="M${f1(-r*.5)} 0 q${f1(r*.25)} ${f1(-r*.5)} ${f1(r*.5)} 0 t${f1(r*.5)} 0" stroke="hsl(${(hue+60)%360} 90% 70%)" stroke-width="2.2" fill="none"/>`;
  return avatarSVG(`<g class="vspin">${s}</g>`);
}
const UMs = p => Math.round(p*10).toLocaleString();
registerSubject({
  key:"bio", name:"Biology", theme:"A virus burrowing through the human body", gemWord:"Genome", gemTitle:"One in a Genome", emoji:"🧬",
  blurb:"You're a virus on a sneeze. Each prompt has many correct answers. <b>Common answers barely get past the skin. Answers other players missed carry you deeper</b>, through the blood, heart, lungs and nerves, into a cell's nucleus and its DNA.",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Genome", rootkit:"Mutation", trojan:"Infection", adware:"Fever", spam:"Sniffle"}, blocked:"Neutralised", fw:"IMMUNE BARRIER",
  verbs:{cta:"Burrow ▼", inject:"Infect", hint:"▼ rarer answers burrow deeper ▼", count:"burrowing"},
  particles:["A","T","C","G"], particleColor:"#ff7ab8",
  meter:{label:"DEPTH", fmt:p=>UMs(p)+" µm", zone:p=>UMs(p)+' <span style="text-transform:none">µm</span>', tick:p=>UMs(p), gain:(a,b)=>`burrow ${UMs(b-a)} µm`},
  start:{bg:"linear-gradient(#162433,#1f2230 70%,#3a1f1a)", label:'Start · 0 <span style="text-transform:none">µm</span>', zone:"Outside the body", color:"#9ad0ff"},
  zone0:46, endBg:"#0b040e",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar,
  extras:({pos})=>`<div class="coreglow" style="top:${pos(690)}px;--glow:rgb(200 80 255 / .25)"></div><div class="floor" style="top:${pos(760)}px;--fc:#c86bff;background:linear-gradient(#24062e,#0b040e)"></div>`,
  catalog:CATALOG, prompts:PROMPTS,
});
})();
