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
P("ch23","S1.1","Name a mixture.","Amalgam",[
  ["Air",25],["Seawater",18,"salt water","sea water"],["Alloys like steel or brass",10,"alloy","alloys"],["Crude oil",8],["Soil",6],["Blood",4],["Milk",4],["Concrete",3],["Smoke",3],["Amalgam",.4]],
  [[["water","salt","sodium chloride","carbon dioxide","oxygen","gold"],"That's a pure element or compound, not a mixture."]]),
P("ch24","S1.2","Name an isotope.","Technetium-99m",[
  ["Carbon-14",25,"c14","carbon 14"],["Carbon-12",15,"c12","carbon 12"],["Uranium-235",12,"u235","uranium 235"],["Deuterium or tritium",10,"deuterium","tritium"],["Uranium-238",6,"u238"],
  ["Chlorine-35 / chlorine-37",6,"chlorine 35","chlorine 37"],["Cobalt-60",4,"cobalt 60"],["Iodine-131",4,"iodine 131"],["Oxygen-18",2,"oxygen 18"],["Technetium-99m",.4,"technetium","tc 99m"]]),
P("ch25","S1.2","Name a stage or use of mass spectrometry.","Time-of-flight",[
  ["Ionisation",20,"ionization"],["Acceleration",12],["Deflection",12],["Detection",12],["Relative abundance",10,"abundance"],["Mass-to-charge ratio",8,"m z","mass to charge"],
  ["Finding isotope ratios",8,"isotopes"],["Identifying compounds",6],["Time-of-flight",.4,"time of flight","tof"]]),
P("ch26","S1.3","Name a term about atomic emission spectra.","Paschen series",[
  ["Line spectrum",20,"line spectra"],["Electrons fall between levels",18,"electron transitions","electrons drop"],["Flame tests",12,"flame test"],["Hydrogen spectrum",12,"hydrogen"],
  ["Photons",8,"photon"],["Convergence limit",8,"convergence"],["E = hf",6,"e hf","planck"],["Lyman series",6,"lyman"],["Balmer series",6,"balmer"],["Paschen series",.4,"paschen"]]),
P("ch27","S1.3","Name a metal ion and its flame test colour.","Caesium (blue-violet)",[
  ["Sodium (yellow-orange)",25,"sodium","yellow"],["Lithium (crimson)",15,"lithium","crimson"],["Potassium (lilac)",15,"potassium","lilac"],["Copper (blue-green)",15,"copper","blue green"],
  ["Calcium (brick red)",10,"calcium","brick red"],["Strontium (red)",6,"strontium"],["Barium (apple green)",4,"barium","apple green"],["Caesium (blue-violet)",.4,"caesium","cesium"]]),
P("ch28","S1.4","Name a calculation that uses the mole.","Water of crystallisation",[
  ["Moles = mass ÷ molar mass",25,"n m m","mass over molar mass","moles from mass"],["Concentration = moles ÷ volume",20,"concentration","c n v"],["Percentage yield",15],
  ["Empirical formula",12],["Limiting reactant",10,"limiting reagent"],["Gas volumes",8,"molar volume"],["Atom economy",6],["Titration calculations",6,"titration"],
  ["Water of crystallisation",.4,"water of crystallization"]]),
P("ch29","S1.4","Name a substance and its molar mass.","Caffeine (194 g mol⁻¹)",[
  ["Water (18)",30,"water","h2o"],["Carbon dioxide (44)",15,"carbon dioxide","co2"],["Carbon (12)",10,"carbon"],["Sodium chloride (58.5)",10,"sodium chloride","nacl"],["Oxygen gas (32)",8,"oxygen","o2"],
  ["Glucose (180)",8,"glucose"],["Methane (16)",6,"methane"],["Caffeine (194 g mol⁻¹)",.4,"caffeine"]]),
P("ch30","S1.5","Name an assumption of the ideal gas model.","Collisions are instantaneous",[
  ["Particles have no volume",25,"negligible volume","no volume"],["No forces between particles",25,"no intermolecular forces","no attraction"],["Collisions are elastic",20,"elastic collisions","elastic"],
  ["Particles move randomly",15,"random motion"],["Average kinetic energy ∝ temperature",8,"kinetic energy","temperature"],["Collisions are instantaneous",.4,"instantaneous"]]),
P("ch31","S1.5","Name a condition where real gases stop behaving ideally.","Near the critical point",[
  ["High pressure",35],["Low temperature",30],["Strong intermolecular forces",15,"polar molecules","hydrogen bonding","polar"],["Large molecules",8],["Close to condensing",6,"near boiling point"],
  ["Near the critical point",.4,"critical point"]]),
P("ch32","S2.1","Name a property of ionic compounds.","Cleave along planes",[
  ["High melting point",30,"high boiling point"],["Conduct when molten or dissolved",25,"conduct when molten","conduct in solution"],["Brittle",15],["Soluble in water",12,"soluble"],
  ["Don't conduct as solids",10,"insulator when solid"],["Form crystal lattices",8,"crystals","lattice"],["Cleave along planes",.4,"cleavage"]]),
P("ch33","S2.1","Name a common ion and its charge.","Thiosulfate (S₂O₃²⁻)",[
  ["Sodium (Na⁺)",20,"sodium","sodium ion"],["Chloride (Cl⁻)",18,"chloride"],["Hydroxide (OH⁻)",10,"hydroxide"],["Oxide (O²⁻)",10,"oxide"],["Magnesium (Mg²⁺)",8,"magnesium"],["Sulfate (SO₄²⁻)",8,"sulfate","sulphate"],
  ["Nitrate (NO₃⁻)",6,"nitrate"],["Ammonium (NH₄⁺)",6,"ammonium"],["Carbonate (CO₃²⁻)",6,"carbonate"],["Thiosulfate (S₂O₃²⁻)",.4,"thiosulfate","thiosulphate"]]),
P("ch34","S2.2","Name a covalent molecule.","Sulfur hexafluoride",[
  ["Water",25,"h2o"],["Carbon dioxide",20,"co2"],["Methane",15,"ch4"],["Ammonia",10,"nh3"],["Oxygen",8,"o2"],["Hydrogen chloride",6,"hcl"],["Nitrogen",6,"n2"],["Glucose",4],["Ethanol",4],
  ["Sulfur hexafluoride",.4,"sf6"]], [[["sodium chloride","nacl","magnesium oxide","salt"],"That's ionic, not covalent."]]),
P("ch35","S2.3","Name an alloy.","Nitinol",[
  ["Steel",30],["Brass",20],["Bronze",18],["Solder",8],["Stainless steel",8],["Amalgam",4],["Duralumin",3],["Pewter",3],["Nitinol",.4]]),
P("ch36","S2.3","Name something that makes metallic bonding stronger.","d-electron contribution",[
  ["More delocalised electrons",30,"delocalized electrons","more electrons"],["Higher ion charge",25,"charge","greater charge"],["Smaller ions",20,"smaller radius","smaller"],["Closer packing",6],
  ["d-electron contribution",.4,"d electrons"]]),
P("ch37","S2.4","Name a type of structure or bonding model for a solid.","Hydrogen-bonded network (ice)",[
  ["Giant ionic lattice",20,"giant ionic","ionic lattice"],["Giant covalent",20,"giant covalent","macromolecular"],["Simple molecular",20,"simple covalent","molecular"],["Metallic lattice",15,"metallic","giant metallic"],
  ["Polymer",8,"polymers"],["Nanomaterials",4],["Hydrogen-bonded network (ice)",.4,"ice"]]),
P("ch38","S2.4","Name a polymer or a plastic.","Bakelite",[
  ["Polythene",25,"polyethene","polyethylene"],["PVC",15,"polyvinyl chloride"],["Polystyrene",12],["Nylon",10],["PET",8,"polyester"],["Polypropene",6,"polypropylene"],["Kevlar",4],["PTFE (Teflon)",4,"ptfe","teflon"],
  ["Rubber",4],["Bakelite",.4]]),
P("ch39","S3.1","Name a property of transition metals.","Ligand field splitting",[
  ["Coloured compounds",25,"colored","colour","color"],["Variable oxidation states",25,"variable oxidation","oxidation states"],["Act as catalysts",20,"catalysts","catalyst"],["Form complex ions",12,"complex ions","complexes"],
  ["Magnetic",6,"paramagnetic"],["High density",4],["Ligand field splitting",.4,"crystal field","d orbital splitting"]]),
P("ch40","S3.2","Name an alkane or an alkene.","Cyclohexane",[
  ["Methane",25],["Ethane",15],["Ethene",15,"ethylene"],["Propane",12],["Butane",10],["Propene",8,"propylene"],["Pentane",4],["Hexane",4],["Octane",3],["Cyclohexane",.4]]),
P("ch41","S3.2","Name a type of isomerism, or a rule for naming organic compounds.","Conformational isomers",[
  ["Structural isomers",25,"structural"],["Stereoisomers",15,"stereoisomerism"],["Cis–trans (E/Z) isomers",15,"cis trans","e z","geometric"],["IUPAC naming",10,"iupac"],["Optical isomers",10,"optical","enantiomers"],
  ["Chain isomers",6],["Position isomers",6,"positional"],["Functional group isomers",4],["Conformational isomers",.4,"conformers"]]),
P("ch42","R1.1","Name equipment used to measure an enthalpy change.","Insulating jacket",[
  ["Thermometer",30,"temperature probe"],["Polystyrene cup",20,"coffee cup","styrofoam cup"],["Measuring cylinder",10],["Spirit burner",8],["Balance",8,"scales"],["Lid",8],["Bomb calorimeter",6],
  ["Data logger",6],["Insulating jacket",.4,"insulation","lagging"]]),
P("ch43","R1.1","Name a term used in enthalpy calculations.","Extrapolating back for heat loss",[
  ["q = mcΔT",25,"mc delta t","mcat","q mct"],["ΔH (enthalpy change)",15,"enthalpy change","delta h"],["Specific heat capacity",15,"shc"],["Exothermic",10],["Endothermic",10],["Heat loss",8],
  ["Standard conditions",6],["Extrapolating back for heat loss",.4,"extrapolation"]]),
P("ch44","R1.2","Name a way to find an enthalpy change you can't measure directly.","Kirchhoff's equation",[
  ["Hess's law",35,"hess","hesss law"],["Bond enthalpies",25,"bond energies"],["Enthalpies of formation",15,"formation"],["Enthalpies of combustion",12,"combustion"],["Born–Haber cycle",6,"born haber"],
  ["Kirchhoff's equation",.4,"kirchhoff"]]),
P("ch45","R1.2","Name a standard enthalpy change.","Electron affinity",[
  ["Combustion",25,"enthalpy of combustion"],["Formation",25,"enthalpy of formation"],["Neutralisation",12,"neutralization"],["Atomisation",8,"atomization"],["Lattice enthalpy",8,"lattice"],
  ["Hydration",6],["Solution",6,"enthalpy of solution"],["Bond dissociation",6,"bond enthalpy"],["Electron affinity",.4]]),
P("ch46","R1.2","Name a reason experimental enthalpy values differ from data-book values.","Heat capacity of the apparatus",[
  ["Heat loss",30,"heat lost to surroundings"],["Incomplete combustion",20],["Bond enthalpies are averages",20,"average bond enthalpies","averages"],["Non-standard conditions",10],["Evaporation",6],
  ["Heat capacity of the apparatus",.4,"apparatus absorbs heat"]]),
P("ch47","R1.3","Name a product of burning a fuel.","Particulates (PM2.5)",[
  ["Carbon dioxide",35,"co2"],["Water",30,"water vapour","h2o"],["Carbon monoxide",12,"co"],["Soot",10,"carbon"],["Nitrogen oxides",6,"nox","nitrogen dioxide"],["Sulfur dioxide",6,"so2"],
  ["Particulates (PM2.5)",.4,"particulates","pm2 5"]]),
P("ch48","R1.3","Name an advantage or a problem of a fuel.","Biofuels compete with food crops",[
  ["Releases CO₂",25,"climate change","global warming","co2"],["High energy density",15,"lots of energy"],["Non-renewable",15,"runs out"],["Acid rain",8,"sulfur dioxide"],["Cheap",8],
  ["Easy to store and transport",6,"easy to transport"],["Renewable (biofuels)",6,"renewable"],["Carbon monoxide poisoning",5],["Biofuels compete with food crops",.4,"land use"]]),
P("ch49","R1.4","Name a term about entropy or spontaneity.","Microstates",[
  ["Entropy",25,"s"],["Gibbs free energy",20,"gibbs","free energy"],["Spontaneous",15,"spontaneity"],["Disorder",10],["ΔG = ΔH − TΔS",10,"g h ts","delta g"],["Second law of thermodynamics",6,"second law"],
  ["Feasibility",6,"feasible"],["Microstates",.4]], [], HL),
P("ch50","R1.4","Name a change that increases entropy.","Expanding into a vacuum",[
  ["Melting",20],["Boiling",20,"evaporation"],["Dissolving",15],["A gas is produced",15,"gas produced"],["More moles of gas",10],["Mixing",8],["Heating",6],["Expanding into a vacuum",.4,"vacuum"]], [], HL),
P("ch51","R1.4","Name a factor that decides whether a reaction is spontaneous.","Coupling to another reaction",[
  ["Enthalpy change (ΔH)",25,"enthalpy","delta h"],["Entropy change (ΔS)",25,"entropy","delta s"],["Temperature",25],["Gibbs energy (ΔG)",15,"gibbs","delta g"],["Coupling to another reaction",.4,"coupling"]],
  [[["activation energy","catalyst","rate"],"That affects how fast a reaction goes, not whether it's spontaneous."]], HL),
P("ch52","R2.1","Name a way to measure the amount of a substance.","Back titration",[
  ["Weighing",25,"mass","balance"],["Titration",20],["Measuring gas volume",15,"gas volume","gas syringe"],["Concentration × volume",10,"concentration times volume"],["Gravimetric analysis",6,"gravimetric"],
  ["Spectroscopy",4,"colorimetry"],["Back titration",.4]]),
P("ch53","R2.1","Name a reason the actual yield is lower than the theoretical yield.","Product evaporates",[
  ["Reaction doesn't go to completion",25,"incomplete reaction"],["Losses when transferring",20,"transfer losses","spillage"],["Side reactions",15],["Reversible reaction",12,"equilibrium"],
  ["Impure reactants",10],["Product left on the filter paper",6,"filter paper"],["Product evaporates",.4,"evaporation"]]),
P("ch54","R2.1","Name a term about reacting quantities.","Titre",[
  ["Limiting reactant",25,"limiting reagent"],["Excess",20,"in excess"],["Stoichiometry",15],["Percentage yield",12],["Atom economy",10],["Mole ratio",10,"molar ratio"],["Titre",.4,"titre value"]]),
P("ch55","R2.2","Name a way to measure the rate of a reaction.","Colorimeter",[
  ["Gas syringe (gas volume)",25,"gas syringe","volume of gas"],["Loss in mass",20,"mass loss","balance"],["Colour change",12,"color change"],["Disappearing cross",12,"cross"],
  ["Time to finish",10,"timing"],["pH change",5,"ph"],["Conductivity",4],["Colorimeter",.4,"colorimetry","colourimeter"]]),
P("ch56","R2.2","Name a term from collision theory.","Rate-determining step",[
  ["Activation energy",30],["Successful collisions",20],["Collision frequency",15,"frequency of collisions"],["Energy of collisions",10],["Orientation",8,"correct orientation"],
  ["Maxwell–Boltzmann distribution",8,"maxwell boltzmann"],["Rate-determining step",.4,"rate determining step"]]),
P("ch57","R2.3","Name a change that shifts the position of an equilibrium.","Changing the solvent",[
  ["Temperature",30],["Concentration",25],["Pressure",20],["Removing a product",10,"removing product"],["Changing the solvent",.4,"solvent"]],
  [[["catalyst","adding a catalyst"],"A catalyst speeds up both directions equally, so the position doesn't move."]]),
P("ch58","R2.3","Name an industrial process that relies on equilibrium.","Deacon process",[
  ["Haber process",35,"haber","ammonia"],["Contact process",25,"contact","sulfuric acid"],["Ostwald process",8,"ostwald","nitric acid"],["Steam reforming",6],["Making methanol",4,"methanol"],["Deacon process",.4,"deacon"]]),
P("ch59","R3.1","Name an everyday acid or alkali.","Methanoic acid in ant stings",[
  ["Vinegar",20],["Lemon juice",18,"lemon","citrus"],["Stomach acid",12],["Baking soda",10,"bicarbonate"],["Bleach",8],["Soap",8],["Toothpaste",6],["Antacid tablets",6,"antacid"],["Cola",4],
  ["Methanoic acid in ant stings",.4,"ant sting","formic acid"]]),
P("ch60","R3.2","Name a use of electrolysis.","Refining silver",[
  ["Extracting aluminium",25,"aluminium","aluminum"],["Electroplating",20,"plating"],["Purifying copper",15,"copper"],["Making chlorine",12,"chlorine","brine"],["Splitting water into hydrogen",10,"hydrogen"],
  ["Anodising",4,"anodizing"],["Refining silver",.4,"silver"]]),
P("ch61","R3.2","Name a part of a voltaic (galvanic) cell.","Standard hydrogen electrode",[
  ["Salt bridge",20],["Anode",20],["Cathode",20],["Electrolyte",12],["Electrodes",10,"electrode"],["Wire",8,"external circuit"],["Half-cells",6,"half cell"],["Voltmeter",6],
  ["Standard hydrogen electrode",.4,"she","hydrogen electrode"]]),
P("ch62","R3.3","Name a term about free-radical reactions.","Ozone depletion by CFC radicals",[
  ["Free radical",25,"radical","radicals"],["Initiation",15],["Propagation",15],["Termination",12],["Homolytic fission",15,"homolytic"],["UV light",10,"uv"],["Chain reaction",6],
  ["Ozone depletion by CFC radicals",.4,"ozone","cfcs"]]),
P("ch63","R3.3","Name a type of polymerisation or a monomer.","Ring-opening polymerisation",[
  ["Addition polymerisation",25,"addition polymerization","addition"],["Condensation polymerisation",20,"condensation polymerization","condensation"],["Ethene",15,"ethylene"],["Monomer",12],
  ["Amino acids",6],["Diols and dicarboxylic acids",4,"diol","dicarboxylic acid"],["Ring-opening polymerisation",.4,"ring opening"]]),
P("ch64","R3.4","Name a term about electron-pair sharing reactions.","Transition state",[
  ["Nucleophile",25],["Electrophile",25],["Lewis acid",12],["Lewis base",12],["Curly arrows",10,"curly arrow"],["Carbocation",6],["Heterolytic fission",6,"heterolytic"],["Coordinate (dative) bond",6,"dative","coordinate bond"],
  ["Transition state",.4]]),
P("ch65","R3.4","Name a nucleophile.","Thiolate ion",[
  ["Hydroxide ion",30,"hydroxide","oh"],["Water",18,"h2o"],["Ammonia",15,"nh3"],["Cyanide ion",10,"cyanide","cn"],["Halide ions",8,"halide","chloride","bromide"],["Alcohols",4,"alcohol"],["Thiolate ion",.4,"thiolate"]]),
P("ch66","R3.4","Name an electrophile, or a reaction that involves one.","Friedel–Crafts acylation",[
  ["Bromine adding to an alkene",20,"bromine","bromine water"],["Electrophilic addition",15],["H⁺ ion",15,"h+","proton"],["Nitronium ion (NO₂⁺)",15,"nitronium","no2+"],["Hydrogen bromide",8,"hbr"],
  ["Electrophilic substitution of benzene",10,"electrophilic substitution","nitration"],["Carbocation",6],["Friedel–Crafts acylation",.4,"friedel crafts"]]),
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
  const rr=9+level*.4; let s=`<circle class="av-core" r="${rr}" fill="hsl(${hue} 70% 45%)" stroke="hsl(${hue} 95% 75%)" stroke-width="2"/>`;
  [0,60,120].forEach((a,k)=>{ const rx=f1(rr+15), ry=f1(7+level*.3); s+=`<g transform="rotate(${a})"><ellipse rx="${rx}" ry="${ry}" fill="none" stroke="hsl(${hue} 90% 70%)" stroke-width="1.6"/><circle r="3.2" fill="#e9fbff"><animateMotion dur="${(1.3+k*.4).toFixed(1)}s" begin="-${k*.5}s" repeatCount="indefinite" path="M${rx} 0 A${rx} ${ry} 0 1 1 -${rx} 0 A${rx} ${ry} 0 1 1 ${rx} 0"/></circle></g>`; });
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
  extras:({pos, WMAX})=>`<div class="coreglow" style="top:${pos(690)}px;--glow:rgb(255 80 180 / .25)"></div><div class="floor" style="top:${pos(WMAX)}px;--fc:#ff6ac8;background:linear-gradient(#2a0620,#0a0207)"></div>`,
  beyond:"Quantum foam",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
