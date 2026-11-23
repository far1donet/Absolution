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
P("bi26","A1.1","Name a property of water that comes from hydrogen bonding.","Viscosity",[
  ["Cohesion",25,"cohesive"],["High specific heat capacity",15,"specific heat","heat capacity"],["Surface tension",15],["Adhesion",10],["High boiling point",10,"boiling point"],
  ["High latent heat of vaporisation",8,"latent heat","evaporation cools","sweating cools"],["Ice is less dense than water",6,"ice floats"],["Capillary action",4,"capillarity"],["Viscosity",.4]]),
P("bi27","A1.1","Name a living thing or process that relies on water's properties.","Basilisk lizard",[
  ["Sweating to cool down",20,"sweating","sweat"],["Transport in xylem",15,"xylem","transpiration"],["Transport in blood plasma",12,"blood","plasma"],["Pond skaters on the surface",10,"pond skater","water strider"],
  ["Fish surviving under ice",8,"fish under ice"],["Reactions in cytoplasm",8,"metabolism","cytoplasm"],["Seed germination",4,"germination"],["Basilisk lizard",.4,"jesus lizard"]]),
P("bi28","A1.2","Name a difference between DNA and RNA.","RNA can act as an enzyme",[
  ["Double-stranded vs single-stranded",30,"double stranded","single stranded","strands"],["Thymine vs uracil",25,"uracil","thymine"],["Deoxyribose vs ribose",20,"ribose","deoxyribose","sugar"],
  ["DNA stays in the nucleus",6,"nucleus","location"],["DNA is much longer",5,"longer","shorter","length"],["RNA is less stable",3,"stability","stable"],["Several types of RNA",3,"mrna trna rrna","types of rna"],
  ["RNA can act as an enzyme",.4,"ribozyme","ribozymes"]]),
P("bi29","A1.2","Name a base found in DNA or RNA.","Inosine",[["Adenine",25,"a"],["Thymine",20,"t"],["Guanine",18,"g"],["Cytosine",18,"c"],["Uracil",12,"u"],["Inosine",.4]],
  [[["phosphate","sugar","deoxyribose","ribose"],"That's part of a nucleotide, but not a base."]]),
P("bi30","A2.1","Name an idea or experiment about how the first cells arose.","LUCA",[
  ["Miller–Urey experiment",25,"miller urey","miller"],["RNA world",15,"rna world hypothesis"],["Hydrothermal vents",12,"deep sea vents","vents"],["Primordial soup",12],
  ["Self-replicating molecules",8,"self replication"],["Membranes forming vesicles",6,"vesicles","fatty acid membranes"],["Early atmosphere without oxygen",6,"reducing atmosphere","no oxygen"],
  ["Lightning or UV as energy",5,"lightning","uv"],["LUCA",.4,"last universal common ancestor"]], [], HL),
P("bi31","A2.1","Name evidence for the endosymbiotic theory.","Antibiotic sensitivity",[
  ["Own circular DNA",30,"own dna","circular dna"],["Double membrane",20],["70S ribosomes",15,"70s","bacteria like ribosomes"],["Divide by binary fission",12,"binary fission"],
  ["Similar size to bacteria",8,"size"],["Seen in chloroplasts too",4,"chloroplasts"],["Antibiotic sensitivity",.4,"antibiotics"]], [], HL),
P("bi32","A2.1","Name a feature shared by all living cells.","Same genetic code",[
  ["Cell membrane",30,"plasma membrane","membrane"],["DNA as genetic material",20,"dna","genetic material"],["Cytoplasm",15],["Ribosomes",15],["Use ATP",8,"atp"],
  ["Enzymes and metabolism",5,"enzymes","metabolism"],["Same genetic code",.4,"universal genetic code","universal code"]], [], HL),
P("bi33","A2.2","Name a difference between prokaryotic and eukaryotic cells.","Binary fission vs mitosis",[
  ["No nucleus in prokaryotes",35,"nucleus","nucleoid","no nucleus"],["No membrane-bound organelles",15,"organelles","membrane bound organelles"],["Prokaryotes are smaller",12,"size","smaller"],
  ["Circular DNA and plasmids",10,"plasmids","circular dna"],["70S vs 80S ribosomes",8,"70s","80s","ribosome size"],["Peptidoglycan cell wall",5,"peptidoglycan"],["DNA without histones",3,"histones","naked dna"],
  ["Binary fission vs mitosis",.4,"binary fission"]]),
P("bi34","A2.2","Name a type of microscope or microscopy technique.","Confocal microscopy",[
  ["Light microscope",30,"optical microscope","compound microscope"],["Electron microscope",20,"em"],["Transmission electron microscope",10,"tem"],["Scanning electron microscope",10,"sem"],
  ["Staining",6,"stains"],["Fluorescence microscopy",5,"fluorescent","immunofluorescence"],["Cryogenic electron microscopy",3,"cryo em","freeze fracture"],["Confocal microscopy",.4,"confocal"]]),
P("bi35","A2.3","Name a virus or a disease caused by a virus.","Lambda phage",[
  ["Influenza",20,"flu"],["COVID-19",20,"coronavirus","covid","sars cov 2"],["HIV",15,"aids"],["Measles",6],["Common cold",6,"cold","rhinovirus"],["Ebola",5],["Chickenpox",4,"varicella"],
  ["HPV",3],["Rabies",3],["Polio",2],["Herpes",2],["Lambda phage",.4,"bacteriophage lambda"]], [[["tuberculosis","tb","cholera","malaria","salmonella"],"That's caused by bacteria or a protist, not a virus."]], HL),
P("bi36","A2.3","Name a step in a virus's lytic cycle.","Host DNA is broken down",[
  ["Attachment",25,"attach","adsorption"],["Injection of viral genes",20,"injection","entry","penetration"],["Replication of viral DNA",15,"replication"],["Making viral proteins",10,"protein synthesis"],
  ["Assembly",12,"assembly of new viruses"],["Lysis and release",15,"lysis","release","cell bursts"],["Host DNA is broken down",.4,"host dna destroyed"]], [], HL),
P("bi37","A3.1","Name a kingdom or domain of life.","Chromista",[
  ["Animals",20,"animalia"],["Plants",18,"plantae"],["Fungi",15],["Bacteria",15],["Archaea",8],["Protists",8,"protoctista","protista"],["Eukarya",6,"eukaryotes"],["Chromista",.4]]),
P("bi38","A3.1","Name a way to define or tell apart species.","Ring species",[
  ["They can interbreed",35,"interbreed","fertile offspring","breeding"],["DNA comparison",15,"dna","genetic"],["Physical features",15,"morphology","appearance"],["Binomial name",8,"binomial"],
  ["Reproductive isolation",6],["Behaviour",4,"behavior"],["Ring species",.4]]),
P("bi39","A3.1","Name a method for estimating biodiversity or population size.","Kick sampling",[
  ["Quadrats",25,"quadrat"],["Capture–mark–recapture",20,"mark recapture","lincoln index"],["Transects",15,"transect"],["Simpson's diversity index",10,"simpsons index","diversity index"],
  ["Pitfall traps",6],["Camera traps",4],["Sweep nets",4],["Environmental DNA",2,"edna"],["Kick sampling",.4]]),
P("bi40","A3.2","Name a level in the classification hierarchy.","Tribe",[
  ["Kingdom",20],["Species",20],["Genus",15],["Family",12],["Order",10],["Class",10],["Phylum",10],["Domain",6],["Tribe",.4]], [], HL),
P("bi41","A3.2","Name a term used in cladistics.","Synapomorphy",[
  ["Clade",25],["Cladogram",25],["Common ancestor",15],["Node",8],["Homologous traits",6,"homologous"],["Outgroup",4],["Analogous traits",4,"analogous"],["Parsimony",3],["Synapomorphy",.4]], [], HL),
P("bi42","A3.2","Name evidence used to classify organisms.","Ribosomal RNA sequences",[
  ["DNA sequences",30,"dna"],["Anatomy",20,"morphology","structure"],["Amino acid sequences",12,"protein sequences"],["Fossils",10],["Embryology",6],["Biochemistry",4],["Ribosomal RNA sequences",.4,"rrna"]], [], HL),
P("bi43","A4.1","Name a piece of evidence for evolution.","Ring species",[
  ["Fossils",30,"fossil record"],["DNA comparisons",15,"dna"],["Homologous structures",15,"pentadactyl limb","homologous"],["Antibiotic resistance",8],["Vestigial structures",8,"appendix","vestigial"],
  ["Selective breeding",6],["Comparative embryology",5,"embryology"],["Peppered moth",4],["Ring species",.4]]),
P("bi44","A4.1","Name a way a new species can form.","Allochronic speciation",[
  ["Geographic isolation",30,"allopatric","physical barrier","geographical isolation"],["Reproductive isolation",15],["Behavioural isolation",8,"courtship","mating rituals"],["Sympatric speciation",8,"sympatric"],
  ["Polyploidy",6],["Adaptive radiation",6],["Temporal isolation",5,"different breeding seasons"],["Hybridisation",3,"hybridization"],["Allochronic speciation",.4,"allochronic"]]),
P("bi45","A4.1","Name an example of evolution happening.","Italian wall lizards",[
  ["Antibiotic-resistant bacteria",25,"mrsa","antibiotic resistance"],["Peppered moth",20],["Darwin's finches",15,"finches","galapagos finches"],["Pesticide resistance",8],["Selective breeding of dogs",6,"dogs"],
  ["Galapagos tortoises",4,"tortoises"],["Cichlid fish",3,"cichlids"],["Italian wall lizards",.4,"wall lizards"]]),
P("bi46","A4.2","Name a way to conserve biodiversity.","Assisted gene flow",[
  ["Nature reserves",25,"national parks","reserves"],["Captive breeding",15,"zoos"],["Seed banks",12],["Anti-poaching laws",8,"anti poaching"],["Reforestation",8,"planting trees"],
  ["Wildlife corridors",6,"corridors"],["Reducing pollution",6],["Rewilding",4],["Trade bans (CITES)",3,"cites"],["Assisted gene flow",.4]]),
P("bi47","A4.2","Name an endangered or threatened species.","Kākāpō",[
  ["Tiger",15],["Giant panda",15,"panda"],["Rhinoceros",12,"rhino"],["Orangutan",10],["Mountain gorilla",8,"gorilla"],["Snow leopard",6],["Asian elephant",6,"elephant"],["Sea turtles",6,"turtle"],
  ["Axolotl",2],["Vaquita",2],["Kākāpō",.4,"kakapo"]]),
P("bi48","B1.1","Name a job lipids do in the body.","Making vitamin D",[
  ["Energy storage",30,"energy","store energy"],["Insulation",15,"heat insulation"],["Cell membranes",15,"membranes","phospholipids"],["Steroid hormones",10,"hormones","steroids"],
  ["Protecting organs",8,"cushioning","protection"],["Myelin sheath",3,"myelin"],["Waterproofing",3],["Buoyancy",2],["Making vitamin D",.4,"vitamin d"]]),
P("bi49","B1.1","Name a bond or reaction that builds or breaks carbohydrates and lipids.","α-1,6 glycosidic branch",[
  ["Condensation",25,"condensation reaction"],["Hydrolysis",25],["Glycosidic bond",15,"glycosidic"],["Ester bond",12,"ester"],["Dehydration synthesis",6],
  ["α-1,6 glycosidic branch",.4,"1 6 glycosidic","branching","alpha 1 6"]], [[["peptide bond","peptide"],"Peptide bonds join amino acids in proteins, not sugars or lipids."]]),
P("bi50","B1.2","Name a level of protein structure, or a bond that holds proteins together.","Hydrophobic interactions",[
  ["Primary structure",20,"primary"],["Secondary structure",18,"secondary"],["Tertiary structure",18,"tertiary"],["Quaternary structure",12,"quaternary"],["Peptide bonds",10,"peptide bond"],
  ["Hydrogen bonds",6],["Disulfide bridges",6,"disulphide bridges","disulfide"],["Alpha helix",4],["Beta pleated sheet",4,"beta sheet"],["Ionic bonds",2],["Hydrophobic interactions",.4,"hydrophobic"]]),
P("bi51","B1.2","Name something that can denature a protein.","Whisking",[
  ["High temperature",40,"heat","temperature"],["Extreme pH",30,"ph","acid","alkali"],["Heavy metal ions",4,"heavy metals"],["Alcohol or solvents",4,"alcohol","organic solvents"],
  ["High salt concentration",3,"salt"],["Radiation",2],["Whisking",.4,"mechanical agitation"]]),
P("bi52","B2.1","Name a component of the cell membrane.","Aquaporins",[
  ["Phospholipids",30,"phospholipid bilayer"],["Proteins",18,"membrane proteins"],["Cholesterol",12],["Glycoproteins",8],["Channel proteins",8,"channels"],["Carrier proteins",6,"carriers"],
  ["Glycolipids",4],["Receptors",4],["Aquaporins",.4]]),
P("bi53","B2.1","Name a factor that affects the rate of diffusion.","Fick's law",[
  ["Concentration gradient",30,"concentration difference"],["Temperature",20],["Surface area",18],["Distance / membrane thickness",12,"distance","thickness","diffusion distance"],
  ["Size of the molecule",6,"molecule size"],["Lipid solubility",4],["Fick's law",.4,"ficks law"]]),
P("bi54","B2.2","Name an organelle involved in making or exporting proteins.","Signal recognition particle",[
  ["Ribosomes",30,"ribosome"],["Rough ER",20,"rough endoplasmic reticulum","rer"],["Golgi apparatus",18,"golgi"],["Vesicles",12,"vesicle"],["Nucleus",8],["Nuclear pores",4],["Cell membrane",3],
  ["Signal recognition particle",.4,"srp"]]),
P("bi55","B2.2","Name a benefit of compartmentalisation in cells.","Separates transcription from translation",[
  ["Keeps enzymes and substrates concentrated",25,"concentration","concentrated"],["Keeps incompatible reactions apart",20,"separate reactions","separation"],
  ["Protects the cell from digestive enzymes",12,"lysosomes","protection"],["Allows different pH in each compartment",8,"ph"],["More membrane area for reactions",8,"membrane area"],
  ["Separates transcription from translation",.4,"transcription","translation"]]),
P("bi56","B2.2","Name a structure found in plant cells but not animal cells.","Amyloplast",[
  ["Chloroplast",35,"chloroplasts"],["Cell wall",30],["Large permanent vacuole",25,"vacuole","large vacuole"],["Plasmodesmata",4],["Amyloplast",.4]],
  [[["mitochondria","nucleus","ribosomes","cell membrane"],"Both plant and animal cells have that."]]),
P("bi57","B2.3","Name a specialised human cell.","Type I pneumocyte",[
  ["Red blood cell",20,"erythrocyte"],["Neuron",18,"nerve cell"],["Sperm cell",15,"sperm"],["Muscle cell",12,"muscle fibre"],["Egg cell",8,"ovum","egg"],["White blood cell",8,"phagocyte","lymphocyte"],
  ["Ciliated cell",4,"ciliated"],["Rod or cone cell",3,"rod cell","cone cell"],["Type I pneumocyte",.4,"pneumocyte","type 1 pneumocyte"]],
  [[["stem cell","stem cells"],"Stem cells are unspecialised: they haven't differentiated yet."],[["root hair","guard cell","palisade"],"That's a plant cell. The prompt wants a human one."]]),
P("bi58","B2.3","Name a source or a use of stem cells.","Stargardt's disease treatment",[
  ["Embryos",25,"embryonic","embryonic stem cells"],["Bone marrow",20],["Umbilical cord blood",15,"umbilical cord","cord blood"],["Treating leukaemia",8,"leukemia","leukaemia"],
  ["Repairing damaged tissue",8,"repair","regeneration"],["Adult stem cells",6],["Induced pluripotent stem cells",5,"ips","ips cells"],["Researching diseases",4,"research"],["Stargardt's disease treatment",.4,"stargardt","stargardts"]]),
P("bi59","B2.3","Name an adaptation of a red blood cell or a sperm cell.","Carbonic anhydrase",[
  ["No nucleus",20],["Biconcave shape",18,"biconcave"],["Haemoglobin",15,"hemoglobin"],["Tail (flagellum)",15,"tail","flagellum"],["Many mitochondria",10,"mitochondria"],["Acrosome",8],["Flexible",5],
  ["Carbonic anhydrase",.4]]),
P("bi60","B3.1","Name a feature of a good gas exchange surface.","Surfactant",[
  ["Large surface area",35,"surface area"],["Thin",25,"short diffusion distance","thin walls"],["Moist",12],["Good blood supply",12,"capillaries","blood supply"],["Ventilation",8,"steep gradient"],
  ["Permeable",4],["Surfactant",.4]]),
P("bi61","B3.1","Name a step in breathing in.","Abdominal muscles relax",[
  ["Diaphragm contracts",30,"diaphragm","diaphragm flattens"],["External intercostal muscles contract",20,"intercostal muscles","ribs move up and out","ribs"],
  ["Chest volume increases",18,"volume increases","thorax volume"],["Pressure in lungs falls",15,"pressure decreases","pressure falls"],["Air rushes in",10,"air flows in"],["Abdominal muscles relax",.4]]),
P("bi62","B3.2","Name a component of blood.","Fibrinogen",[
  ["Red blood cells",25,"rbc","erythrocytes"],["White blood cells",20,"wbc","leukocytes"],["Plasma",20],["Platelets",15],["Haemoglobin",4,"hemoglobin"],["Antibodies",3],["Fibrinogen",.4]]),
P("bi63","B3.2","Name a difference between arteries and veins.","Pulmonary vessels reverse the oxygen rule",[
  ["Thick vs thin walls",25,"thick walls","thin walls","wall thickness"],["Veins have valves",20,"valves"],["High vs low pressure",15,"pressure"],["Away from vs towards the heart",15,"direction","away from the heart"],
  ["Narrow vs wide lumen",10,"lumen"],["More elastic tissue in arteries",6,"elastic"],["Oxygenated vs deoxygenated",6,"oxygen","oxygenated"],["Pulse",2],["Pulmonary vessels reverse the oxygen rule",.4,"pulmonary artery","pulmonary vein"]]),
P("bi64","B3.2","Name a structure or process in plant transport.","Casparian strip",[
  ["Xylem",25],["Phloem",20],["Transpiration",18],["Stomata",10,"stoma"],["Root hairs",6,"root hair cells"],["Translocation",6],["Guard cells",4],["Cohesion–tension",3,"cohesion tension"],["Casparian strip",.4]]),
P("bi65","B3.3","Name a type of muscle or a type of joint.","Saddle joint",[
  ["Skeletal muscle",20,"skeletal"],["Cardiac muscle",18,"cardiac"],["Smooth muscle",15,"smooth"],["Ball and socket joint",15,"ball and socket","hip","shoulder"],["Hinge joint",12,"hinge","elbow","knee"],
  ["Synovial joint",6,"synovial"],["Pivot joint",4,"pivot"],["Saddle joint",.4,"saddle"]], [], HL),
P("bi66","B3.3","Name a step in muscle contraction.","Myosin heads re-cock",[
  ["Nerve impulse arrives",10,"action potential","impulse"],["Calcium ions released",20,"calcium","calcium ions"],["Tropomyosin moves aside",4,"tropomyosin"],["Myosin binds to actin",18,"cross bridge","cross bridges"],
  ["Power stroke",15],["ATP detaches myosin",12,"atp"],["Sarcomere shortens",10,"sarcomere","sliding filament"],["Myosin heads re-cock",.4,"recock","re cock"]], [], HL),
P("bi67","B4.1","Name an adaptation of a desert plant or animal.","Metabolic water",[
  ["Spines instead of leaves",15,"spines"],["Thick waxy cuticle",15,"waxy","cuticle"],["Stores water",15,"water storage","hump","succulent"],["Long or wide roots",12,"long roots","deep roots"],
  ["Nocturnal",10,"active at night"],["Big ears to lose heat",6,"large ears","fennec"],["Concentrated urine",6],["Few stomata",5],["CAM photosynthesis",2,"cam"],["Metabolic water",.4,"kangaroo rat"]]),
P("bi68","B4.1","Name a biome or type of habitat.","Hydrothermal vent",[
  ["Rainforest",20,"tropical rainforest","jungle"],["Desert",18],["Tundra",10],["Grassland / savanna",10,"grassland","savanna","savannah"],["Coral reef",8],["Ocean",8,"marine"],["Taiga",6,"boreal forest"],
  ["Temperate forest",6,"woodland"],["Wetland",4,"marsh"],["Mangrove",2],["Hydrothermal vent",.4]]),
P("bi69","B4.1","Name an abiotic factor.","Fire frequency",[
  ["Temperature",25],["Light",20,"light intensity","sunlight"],["Water",15,"rainfall"],["pH",8],["Soil nutrients",8,"soil","minerals"],["Wind",6],["Salinity",4,"salt"],["Oxygen",4],["Humidity",4],["Fire frequency",.4,"fire"]],
  [[["predators","predation","competition","disease","food"],"That's a biotic factor: it comes from living things."]]),
P("bi70","B4.2","Name a mode of nutrition.","Holozoic nutrition",[
  ["Autotroph",20,"producer","autotrophic"],["Heterotroph",18,"heterotrophic","consumer"],["Herbivore",10],["Carnivore",10],["Omnivore",8],["Saprotroph",6,"decomposer","saprotrophic"],
  ["Parasite",6,"parasitic"],["Chemoautotroph",2,"chemosynthesis"],["Mixotroph",2],["Holozoic nutrition",.4,"holozoic"]]),
P("bi71","B4.2","Name a type of relationship between two species.","Amensalism",[
  ["Predation",25,"predator prey"],["Competition",18],["Mutualism",15],["Parasitism",15],["Commensalism",8],["Herbivory",6],["Amensalism",.4]]),
P("bi72","B4.2","Name an adaptation for catching food or avoiding being eaten.","Autotomy",[
  ["Camouflage",25],["Sharp teeth or claws",15,"teeth","claws"],["Speed",10],["Venom or poison",10,"venom","poison"],["Warning colours",8,"warning colouration","aposematism"],
  ["Mimicry",6],["Spines or shells",6,"spines","shell"],["Pack hunting",4,"hunting in packs"],["Echolocation",4],["Autotomy",.4,"dropping a tail"]]),
P("bi73","C1.1","Name a term about how enzymes work.","Allosteric site",[
  ["Active site",30],["Substrate",20],["Lock and key",15,"lock and key model"],["Induced fit",10],["Activation energy",10],["Enzyme–substrate complex",8,"enzyme substrate complex"],
  ["Denaturation",6,"denatured"],["Specificity",4,"specific"],["Allosteric site",.4,"allosteric"]]),
P("bi74","C1.2","Name a product of anaerobic respiration.","Regenerated NAD+",[
  ["Lactate",30,"lactic acid"],["Ethanol",20,"alcohol"],["Carbon dioxide (in yeast)",15,"carbon dioxide","co2"],["A little ATP",15,"atp","2 atp"],["Regenerated NAD+",.4,"nad","nad+"]]),
P("bi75","C1.2","Name something the body uses ATP for.","Phosphorylating glucose",[
  ["Muscle contraction",30,"muscles","movement"],["Active transport",20],["Protein synthesis",10],["Nerve impulses",10,"sodium potassium pump"],["Cell division",5],["Keeping warm",5,"heat"],
  ["DNA replication",4],["Phosphorylating glucose",.4,"glycolysis"]]),
P("bi76","C1.3","Name a limiting factor of photosynthesis.","Wavelength of light",[
  ["Light intensity",35,"light"],["Carbon dioxide concentration",30,"co2","carbon dioxide"],["Temperature",25],["Water",5],["Amount of chlorophyll",3,"chlorophyll"],["Wavelength of light",.4,"wavelength","colour of light"]]),
P("bi77","C1.3","Name a pigment or a stage of photosynthesis.","Xanthophyll",[
  ["Chlorophyll",30],["Light-dependent reactions",20,"light dependent"],["Calvin cycle",15,"light independent","light independent reactions"],["Photolysis",10,"splitting water"],
  ["Carotenoids",6,"carotene"],["Chlorophyll a and b",4],["Photosystems",4,"photosystem"],["Xanthophyll",.4]]),
P("bi78","C2.1","Name a type of chemical signal or receptor.","Quorum sensing",[
  ["Hormone",25,"hormones"],["Neurotransmitter",20,"neurotransmitters"],["Receptor",15,"receptors"],["Steroid hormone",6],["Peptide hormone",6],["Cytokines",6],["G-protein coupled receptor",4,"gpcr"],
  ["Second messenger",4],["Quorum sensing",.4]], [], HL),
P("bi79","C2.1","Name an endocrine gland.","Parathyroid",[
  ["Pancreas",25],["Pituitary",20,"pituitary gland"],["Thyroid",15],["Adrenal glands",15,"adrenal"],["Ovaries",8],["Testes",8],["Hypothalamus",4],["Pineal gland",2,"pineal"],["Parathyroid",.4]], [], HL),
P("bi80","C2.1","Name a term about cell signalling inside the cell.","IP3",[
  ["Signal transduction",15,"transduction"],["Ligand",15],["cAMP",20,"cyclic amp"],["Calcium ions",12,"calcium"],["Amplification",6],["Kinase cascade",4,"kinases","phosphorylation cascade"],
  ["Insulin receptor",4],["IP3",.4,"inositol trisphosphate"]], [], HL),
P("bi81","C2.2","Name a part of the nervous system.","Glial cells",[
  ["Brain",30],["Spinal cord",25],["Nerves",12],["Neurons",8],["Central nervous system",8,"cns"],["Peripheral nervous system",6,"pns"],["Reflex arc",4],["Glial cells",.4,"glia"]]),
P("bi82","C2.2","Name a type of neuron or a part of a reflex arc.","Muscle spindle",[
  ["Sensory neuron",25,"sensory"],["Motor neuron",22,"motor"],["Relay neuron",15,"relay","interneuron"],["Receptor",12],["Effector",10],["Stimulus",6],["Response",6],["Muscle spindle",.4]]),
P("bi83","C3.1","Name an organ in the human body.","Thymus",[
  ["Heart",20],["Brain",18],["Lungs",15,"lung"],["Liver",12],["Kidneys",10,"kidney"],["Stomach",8],["Skin",5],["Pancreas",4],["Intestines",4,"intestine","small intestine"],["Spleen",2],["Thymus",.4]]),
P("bi84","C3.1","Name an example of body systems working together.","Gut–brain axis",[
  ["Fight or flight",20,"adrenaline"],["Exercise",20,"heart and lungs"],["Digestion and circulation",12],["Temperature control",10,"thermoregulation"],["Blood glucose control",10],
  ["Breathing rate control",8,"carbon dioxide sensing"],["Reflexes",6],["Gut–brain axis",.4,"gut brain axis"]]),
P("bi85","C3.2","Name a type of pathogen.","Viroids",[
  ["Virus",30,"viruses"],["Bacteria",30,"bacterium"],["Fungi",15,"fungus"],["Protists",10,"protozoa","protist"],["Parasitic worms",4,"worms"],["Prions",3,"prion"],["Viroids",.4,"viroid"]]),
P("bi86","C3.2","Name a way infectious diseases spread.","Mother to baby",[
  ["Airborne droplets",25,"coughing","sneezing","air","droplets"],["Direct contact",15,"touch","touching"],["Contaminated food or water",15,"food","water"],["Vectors",12,"mosquitoes","insects"],
  ["Blood and body fluids",10,"blood","body fluids"],["Sexual contact",6],["Contaminated surfaces",6,"surfaces","fomites"],["Mother to baby",.4,"vertical transmission"]]),
P("bi87","C4.1","Name a factor that limits population growth.","Allee effect",[
  ["Food supply",25,"food"],["Predation",18,"predators"],["Disease",15],["Competition",12],["Space",8,"territory"],["Water",8],["Weather",6,"climate"],["Allee effect",.4]]),
P("bi88","C4.1","Name a phase of a population growth curve, or a related term.","Overshoot",[
  ["Carrying capacity",25],["Exponential phase",20,"exponential","log phase"],["Lag phase",15,"lag"],["Plateau",15,"stationary phase"],["Sigmoid curve",10,"s curve","sigmoid"],
  ["Limiting factors",6],["Death phase",4,"decline"],["Overshoot",.4]]),
P("bi89","C4.1","Name an invasive species.","Brown tree snake",[
  ["Cane toad",20],["Grey squirrel",12,"gray squirrel"],["Rabbits in Australia",12,"rabbits"],["Japanese knotweed",8],["Rats",6],["Zebra mussel",6],["Lionfish",6],["Burmese python",5],
  ["Kudzu",4],["Brown tree snake",.4]]),
P("bi90","C4.2","Name a process in the carbon cycle.","Peat formation",[
  ["Photosynthesis",25],["Respiration",25],["Combustion",15,"burning"],["Decomposition",15,"decay"],["Fossilisation",6,"fossil fuels"],["Feeding",6,"consumption"],["Dissolving in oceans",3,"oceans"],
  ["Peat formation",.4,"peat"]]),
P("bi91","C4.2","Name a reason energy is lost between trophic levels.","Energy passes to decomposers",[
  ["Heat from respiration",30,"heat","respiration"],["Not all parts are eaten",20,"bones","not eaten"],["Undigested food",15,"faeces","feces","egestion"],["Movement",8],["Excretion",8,"urine"],
  ["Energy passes to decomposers",.4,"decomposers"]]),
P("bi92","D1.1","Name an enzyme or molecule involved in DNA replication.","Single-strand binding proteins",[
  ["DNA polymerase",30,"polymerase"],["Helicase",25],["Ligase",15,"dna ligase"],["Free nucleotides",10,"nucleotides"],["Primase",8],["RNA primer",4,"primer"],["Topoisomerase",2,"gyrase"],
  ["Single-strand binding proteins",.4,"ssb","single strand binding"]]),
P("bi93","D1.1","Name a feature of DNA replication.","Proofreading",[
  ["Semi-conservative",35,"semiconservative","semi conservative"],["Complementary base pairing",20,"base pairing"],["Leading and lagging strands",10,"leading strand","lagging strand"],
  ["Okazaki fragments",8,"okazaki"],["Happens in S phase",6,"s phase","interphase"],["5′ to 3′ direction",6,"5 to 3"],["Replication fork",6],["Proofreading",.4,"proof reading"]]),
P("bi94","D1.1","Name a technique that copies or analyses DNA.","Southern blotting",[
  ["PCR",35,"polymerase chain reaction"],["Gel electrophoresis",25,"electrophoresis"],["DNA profiling",15,"dna fingerprinting"],["DNA sequencing",10,"sequencing"],["Taq polymerase",4,"taq"],
  ["Southern blotting",.4,"southern blot"]]),
P("bi95","D1.2","Name a feature of the genetic code.","Wobble",[
  ["Triplet code (codons)",30,"triplet","codons","codon"],["Degenerate",15,"redundant"],["Universal",15],["Start codon (AUG)",10,"aug","start codon"],["Stop codons",10,"stop codon"],
  ["Non-overlapping",6,"non overlapping"],["64 codons",4],["Wobble",.4,"wobble hypothesis"]]),
P("bi96","D1.2","Name where transcription or translation happens, or what carries the message between them.","Polysome",[
  ["Nucleus",30],["Ribosome",25,"ribosomes"],["Cytoplasm",15],["mRNA",15,"messenger rna"],["Nuclear pore",6,"nuclear pores"],["Rough ER",6,"rough endoplasmic reticulum"],["Polysome",.4,"polyribosome"]]),
P("bi97","D1.3","Name a type of mutation.","Inversion",[
  ["Substitution",25,"point mutation"],["Insertion",20],["Deletion",20],["Frameshift",10],["Silent mutation",6,"silent"],["Nonsense mutation",5,"nonsense"],["Missense mutation",5,"missense"],
  ["Chromosome mutation",4],["Duplication",2],["Inversion",.4]]),
P("bi98","D1.3","Name a cause of mutations.","Aflatoxin",[
  ["UV radiation",25,"uv","sunlight"],["Ionising radiation",15,"x rays","gamma rays","radiation"],["Chemicals in tobacco smoke",15,"smoking","tobacco","cigarettes"],["Copying errors",12,"replication errors","random errors"],
  ["Viruses",6,"virus"],["Benzene",3],["Mustard gas",2],["Aflatoxin",.4]]),
P("bi99","D1.3","Name a use of gene editing or genetic technology.","Gene drives",[
  ["CRISPR",30,"crispr cas9"],["GM crops",15,"genetically modified crops"],["Gene therapy",15,"treating genetic diseases"],["Insulin made by bacteria",10,"insulin"],["Golden rice",6],
  ["Disease-resistant animals",4],["Gene drives",.4,"gene drive"]], [], ),
P("bi100","D2.1","Name a difference between mitosis and meiosis.","Independent assortment",[
  ["Identical vs varied daughter cells",20,"identical","genetically different","variation"],["Diploid vs haploid",18,"haploid","diploid"],["Two vs four cells",15,"number of cells","four cells"],
  ["One vs two divisions",20,"number of divisions","two divisions"],["Body cells vs gametes",12,"gametes","body cells"],["Crossing over",8],["Independent assortment",.4]]),
P("bi101","D2.1","Name a reason cells divide by mitosis.","Clonal expansion of lymphocytes",[
  ["Growth",35],["Repair",30,"healing"],["Replacing old cells",15,"replacement"],["Asexual reproduction",10],["Clonal expansion of lymphocytes",.4,"clonal expansion"]],
  [[["gametes","making gametes","sex cells"],"Gametes are made by meiosis, not mitosis."]]),
P("bi102","D2.2","Name a way gene expression is controlled.","RNA interference",[
  ["Transcription factors",20],["DNA methylation",15,"methylation"],["Histone modification",15,"histones","acetylation"],["Epigenetics",12],["Promoters",10,"promoter"],["Operons",6,"lac operon"],
  ["Enhancers",4],["mRNA breakdown",4,"mrna degradation"],["RNA interference",.4,"rnai"]], [], HL),
P("bi103","D2.2","Name an environmental factor that can change gene expression.","Temperature in Himalayan rabbits",[
  ["Diet",20,"food"],["Temperature",15],["Stress",10],["Smoking",8],["Light",8],["Exercise",6],["Pollution",5],["Temperature in Himalayan rabbits",.4,"himalayan rabbit"]], [], HL),
P("bi104","D2.2","Name an example of epigenetics or differential gene expression.","Genomic imprinting",[
  ["Cell differentiation",30,"differentiation"],["Identical twins becoming different",15,"identical twins","twins"],["Queen bees vs workers",8,"royal jelly","queen bee"],
  ["X-inactivation in calico cats",8,"x inactivation","calico cat"],["Dutch Hunger Winter",3,"dutch famine"],["Agouti mice",3],["Genomic imprinting",.4,"imprinting"]], [], HL),
P("bi105","D2.3","Name a term about osmosis or water potential.","Crenation",[
  ["Hypotonic",15],["Hypertonic",15],["Isotonic",15],["Water potential",12],["Turgid",10,"turgor"],["Plasmolysis",8,"plasmolysed"],["Solute potential",6],["Pressure potential",6],["Flaccid",6],
  ["Lysis",4],["Crenation",.4,"crenated"]]),
P("bi106","D2.3","Name what happens to a cell in a solution of different water potential.","Contractile vacuole pumps water out",[
  ["Animal cell bursts",25,"bursts","lysis"],["Plant cell becomes turgid",20,"turgid"],["Animal cell shrivels",15,"shrinks","shrivels"],["Plant cell plasmolyses",15,"plasmolysis"],
  ["Water moves in",10],["Water moves out",10],["Contractile vacuole pumps water out",.4,"contractile vacuole"]]),
P("bi107","D2.3","Name a situation where water potential matters in the body or in plants.","Oral rehydration therapy",[
  ["Root hairs absorbing water",20,"root hairs"],["Kidneys reabsorbing water",15,"kidneys"],["Turgor keeping plants upright",15,"turgor"],["Isotonic saline drips",10,"saline drip","iv drip"],
  ["Wilting",8],["Opening stomata",6,"stomata"],["Drinking seawater dehydrates you",4,"seawater"],["Oral rehydration therapy",.4,"ors"]]),
P("bi108","D3.1","Name a part of the human reproductive system.","Epididymis",[
  ["Ovaries",15,"ovary"],["Testes",15,"testicles"],["Uterus",15,"womb"],["Oviduct",10,"fallopian tube"],["Penis",6],["Vagina",6],["Cervix",5],["Placenta",4],["Sperm duct",4,"vas deferens"],
  ["Prostate gland",3,"prostate"],["Epididymis",.4]]),
P("bi109","D3.1","Name a hormone that controls the menstrual cycle.","Inhibin",[
  ["Oestrogen",30,"estrogen"],["Progesterone",25],["FSH",18,"follicle stimulating hormone"],["LH",15,"luteinising hormone","luteinizing hormone"],["hCG",2],["Inhibin",.4]]),
P("bi110","D3.1","Name a difference between sexual and asexual reproduction.","Cost of finding a mate",[
  ["Two parents vs one",30,"parents","one parent"],["Variation vs clones",30,"variation","clones","identical offspring"],["Gametes involved",12,"gametes","fertilisation"],["Meiosis vs mitosis",10],
  ["Asexual is faster",8,"speed","faster"],["Cost of finding a mate",.4,"finding a mate"]]),
P("bi111","D3.2","Name a genetic disorder.","Marfan syndrome",[
  ["Cystic fibrosis",25],["Sickle cell anaemia",18,"sickle cell","sickle cell anemia"],["Haemophilia",12,"hemophilia"],["Down syndrome",12],["Huntington's disease",10,"huntingtons"],
  ["Colour blindness",6,"color blindness"],["Duchenne muscular dystrophy",3,"duchenne"],["PKU",2,"phenylketonuria"],["Tay–Sachs",2,"tay sachs"],["Marfan syndrome",.4,"marfan"]]),
P("bi112","D3.2","Name a pattern of inheritance.","Mitochondrial inheritance",[
  ["Dominant and recessive",25,"complete dominance","dominant","recessive"],["Codominance",15],["Sex-linked",15,"sex linked","x linked"],["Multiple alleles (ABO)",10,"multiple alleles","blood groups"],
  ["Polygenic",10],["Incomplete dominance",6],["Autosomal",4],["Mitochondrial inheritance",.4]]),
P("bi113","D3.3","Name a way the body warms up or cools down.","Brown fat",[
  ["Sweating",25],["Shivering",20],["Vasodilation",15],["Vasoconstriction",12],["Hairs stand on end",8,"goosebumps","piloerection"],["Behaviour",6,"clothes","shade"],["Raising metabolic rate",4,"metabolism"],
  ["Brown fat",.4,"thermogenesis"]]),
P("bi114","D4.1","Name a source of variation in a population.","Gene flow",[
  ["Mutation",30],["Crossing over",15],["Independent assortment",12],["Random fertilisation",12,"random fertilization"],["Sexual reproduction",10],["Environment",6],["Gene flow",.4,"migration"]]),
P("bi115","D4.1","Name a type of selection.","Kin selection",[
  ["Natural selection",25],["Artificial selection",20,"selective breeding"],["Sexual selection",15],["Directional selection",10,"directional"],["Stabilising selection",8,"stabilizing"],
  ["Disruptive selection",6,"disruptive"],["Kin selection",.4]]),
P("bi116","D4.2","Name a stage or type of ecological succession.","Deflected succession",[
  ["Primary succession",25,"primary"],["Secondary succession",20,"secondary"],["Pioneer species",18,"pioneer"],["Climax community",15,"climax"],["Lichens and mosses",8,"lichens","mosses"],
  ["Seral stages",4,"sere"],["Deflected succession",.4,"plagioclimax"]]),
P("bi117","D4.2","Name a sign that an ecosystem is unstable.","Trophic cascade",[
  ["Loss of biodiversity",25,"biodiversity loss"],["Population crashes",15],["Invasive species spreading",12,"invasive species"],["Algal blooms",10,"eutrophication"],["Soil erosion",8],
  ["Desertification",6],["Dead zones",4],["Trophic cascade",.4]]),
P("bi118","D4.2","Name something an ecosystem needs to stay stable.","Keystone species",[
  ["Energy from the Sun",25,"sunlight","energy"],["Nutrient cycling",20,"recycling nutrients"],["Biodiversity",15],["Producers",10],["Decomposers",10],["Water",6],["Keystone species",.4]]),
P("bi119","D4.3","Name an effect of climate change on living things.","Turtle sex ratios",[
  ["Coral bleaching",20],["Melting sea ice",18,"polar bears","melting ice"],["Species moving towards the poles",12,"migration","range shifts"],["Extinctions",12,"extinction"],
  ["Earlier spring events",8,"phenology","earlier flowering"],["Ocean acidification",8],["Droughts",8],["Spread of diseases",4,"diseases spreading"],["Turtle sex ratios",.4,"turtles"]]),
P("bi120","D4.3","Name a human cause of climate change.","Rice paddies",[
  ["Burning fossil fuels",35,"fossil fuels","coal","oil"],["Deforestation",20],["Cattle farming",12,"cows","methane","livestock"],["Transport",8,"cars","planes"],["Landfill",4],["Cement production",3,"cement"],
  ["Rice paddies",.4,"rice"]]),
P("bi121","D4.3","Name a way to reduce climate change.","Restoring peatlands",[
  ["Renewable energy",30,"solar","wind","renewables"],["Planting trees",15,"reforestation"],["Electric vehicles",10,"electric cars"],["Energy efficiency",8],["Eating less meat",6,"less meat"],
  ["Carbon capture",6],["Public transport",6],["Better insulation",4,"insulation"],["Restoring peatlands",.4,"peatlands"]]),
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
