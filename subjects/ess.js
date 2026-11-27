/* Environmental systems and societies — a seed grows into a tree that climbs from the soil through the forest layers,
   past the clouds and the ozone layer, until it can see the whole Earth. Rarer answers grow it taller and store more carbon.
   Syllabus: IB Environmental systems and societies (first assessment 2026), topics 1–8 and the HL lenses (law,
   economics and ethics), which are marked HL. */
(function(){
const CATALOG = [
  {label:"Foundation and ecology", units:[
    {code:"1", name:"Foundation", topics:[["1.1","Perspectives"],["1.2","Systems"],["1.3","Sustainability"]]},
    {code:"2", name:"Ecology", topics:[["2.1","Individuals, populations, communities and ecosystems"],["2.2","Energy and biomass in ecosystems"],["2.3","Biogeochemical cycles"],["2.4","Climate and biomes"],["2.5","Zonation, succession and change in ecosystems"]]},
    {code:"3", name:"Biodiversity and conservation", topics:[["3.1","Biodiversity and evolution"],["3.2","Human impact on biodiversity"],["3.3","Conservation and regeneration"]]},
  ]},
  {label:"Water, land and atmosphere", units:[
    {code:"4", name:"Water", topics:[["4.1","Water systems"],["4.2","Water access, use and security"],["4.3","Aquatic food production systems"],["4.4","Water pollution"]]},
    {code:"5", name:"Land", topics:[["5.1","Soil"],["5.2","Agriculture and food"]]},
    {code:"6", name:"Atmosphere and climate change", topics:[["6.1","Introduction to the atmosphere"],["6.2","Climate change: causes and impacts"],["6.3","Climate change: mitigation and adaptation"],["6.4","Stratospheric ozone"]]},
  ]},
  {label:"Resources and people", units:[
    {code:"7", name:"Natural resources", topics:[["7.1","Natural resource use"],["7.2","Energy sources, uses and management"],["7.3","Solid waste"]]},
    {code:"8", name:"Human populations and urban systems", topics:[["8.1","Human populations"],["8.2","Urban systems and urban planning"],["8.3","Urban air pollution"]]},
  ]},
  {label:"HL lenses", units:[
    {code:"HL", name:"HL lenses", topics:[["HL.a","Environmental law",HL],["HL.b","Environmental economics",HL],["HL.c","Environmental ethics",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- 1 Foundation ---------- */
P("es001","1.1","Name an environmental value system or perspective.","Gaia hypothesis",[
  ["Ecocentrism",25,"ecocentric","ecocentrist"],["Anthropocentrism",20,"anthropocentric"],["Technocentrism",18,"technocentric","technocentrist"],["Deep ecology",6,"deep ecologists"],
  ["Cornucopian",5,"cornucopians"],["Environmental managers",5,"environmental manager"],["Stewardship",4,"stewards"],["Self-reliance soft ecologists",3,"soft ecologists"],["Gaia hypothesis",.4,"gaia","lovelock"]]),
P("es002","1.1","Name an event, book or person that shaped the environmental movement.","Great Smog of London",[
  ["Silent Spring",20,"rachel carson","carson"],["Greta Thunberg",10,"thunberg","greta"],["Chernobyl",12,"chernobyl disaster"],["Minamata disease",8,"minamata"],["Earth Day",8],
  ["Bhopal disaster",8,"bhopal"],["Exxon Valdez oil spill",6,"exxon valdez","oil spill"],["Rio Earth Summit",6,"earth summit","rio 1992"],["An Inconvenient Truth",5,"al gore","inconvenient truth"],
  ["Brundtland Report",4,"brundtland","our common future"],["Chipko movement",4,"chipko"],["Love Canal",3],["Great Smog of London",.4,"great smog","london smog","1952 smog"]]),
P("es003","1.2","Name a feature or type of system studied in ESS.","Emergent properties",[
  ["Open system",20,"open"],["Closed system",15,"closed"],["Isolated system",10,"isolated"],["Feedback loops",8,"feedback","positive feedback","negative feedback"],["Inputs",8,"input"],["Outputs",8,"output"],
  ["Stores",8,"storages","store"],["Flows",8,"flow"],["Transfers",6,"transfer"],["Transformations",6,"transformation"],["Equilibrium",6,"steady state equilibrium","stable equilibrium"],["Emergent properties",.4,"emergent property","emergence"]]),
P("es004","1.2","Name an example of an environmental feedback loop or tipping point.","Daisyworld",[
  ["Ice–albedo feedback",20,"ice albedo","melting ice","albedo"],["Predator–prey cycle",15,"predator prey","predator and prey"],["Permafrost thaw",12,"permafrost","methane release"],["Amazon dieback",8,"amazon","rainforest dieback"],
  ["Coral bleaching",6,"coral reefs"],["Population and food supply",6,"food supply"],["Ocean circulation collapse",4,"thermohaline","amoc","gulf stream"],["Body temperature regulation",4,"thermoregulation","homeostasis"],
  ["Daisyworld",.4,"daisy world"]]),
P("es005","1.3","Name a model or measure of sustainability.","Biocapacity",[
  ["Ecological footprint",20,"footprint"],["Planetary boundaries",12,"planetary boundary"],["Carbon footprint",10],["Doughnut economics",10,"doughnut","raworth"],["Natural capital",10],
  ["Sustainable Development Goals",8,"sdgs","sdg"],["Environmental impact assessment",6,"eia"],["Water footprint",6],["Triple bottom line",6],["Circular economy",6],["Biocapacity",.4,"biological capacity"]]),
P("es006","1.3","Name one of the nine planetary boundaries.","Novel entities",[
  ["Climate change",20,"climate"],["Biosphere integrity",15,"biodiversity loss","biodiversity","biosphere"],["Ocean acidification",12,"acidification"],["Stratospheric ozone depletion",10,"ozone","ozone depletion"],
  ["Freshwater use",10,"freshwater","water use","freshwater change"],["Land-system change",10,"land use","land system change","deforestation"],["Biogeochemical flows",10,"nitrogen","phosphorus","nitrogen and phosphorus"],
  ["Atmospheric aerosol loading",3,"aerosols","aerosol loading"],["Novel entities",.4,"chemical pollution","plastics and chemicals"]]),
/* ---------- 2 Ecology ---------- */
P("es007","2.1","Name an ecological term for the level at which organisms are grouped or live.","Ecotone",[
  ["Habitat",20],["Population",15],["Niche",15,"ecological niche"],["Community",12],["Ecosystem",12],["Species",10],["Biome",6],["Fundamental niche",4],["Realized niche",4,"realised niche"],
  ["Ecotone",.4,"transition zone"]]),
P("es008","2.1","Name a type of interaction between species.","Amensalism",[
  ["Predation",20,"predator prey","predators"],["Competition",18,"interspecific competition"],["Mutualism",15,"mutualistic"],["Parasitism",12,"parasites"],["Herbivory",10,"herbivores","grazing"],
  ["Commensalism",8],["Disease",4,"pathogens"],["Amensalism",.4]]),
P("es009","2.1","Name a limiting factor for a population.","Nesting sites",[
  ["Food",20,"food supply"],["Water",15],["Space",12,"territory"],["Light",10,"sunlight"],["Predators",10,"predation"],["Disease",10],["Temperature",8],["Nutrients",6,"minerals"],
  ["Competition",6],["Shelter",5],["Nesting sites",.4,"nest sites"]]),
P("es010","2.2","Name a trophic level or feeding role in a food chain.","Chemoautotroph",[
  ["Producer",25,"producers","plants"],["Primary consumer",18,"herbivore","herbivores"],["Secondary consumer",15,"carnivore","carnivores"],["Decomposer",12,"decomposers","fungi","bacteria"],
  ["Tertiary consumer",10],["Detritivore",6,"detritivores","earthworms"],["Apex predator",6,"top predator"],["Autotroph",5,"autotrophs"],["Heterotroph",5,"heterotrophs"],["Omnivore",4,"omnivores"],
  ["Chemoautotroph",.4,"chemosynthetic bacteria","chemosynthesis"]]),
P("es011","2.2","Name a reason energy is lost between trophic levels.","Death without being eaten",[
  ["Respiration",25,"cellular respiration"],["Heat",15,"heat loss"],["Not all of an organism is eaten",15,"not eaten","bones","parts not eaten"],["Not all food is digested",15,"egestion","faeces","feces","indigestible"],
  ["Excretion",8,"urine"],["Movement",6,"energy for movement"],["Death without being eaten",.4,"dies without being eaten","death","dead organisms"]]),
P("es012","2.2","Name a measure of productivity or energy flow in an ecosystem.","Net secondary productivity",[
  ["Gross primary productivity",20,"gpp"],["Net primary productivity",20,"npp"],["Biomass",12],["Pyramid of energy",8,"pyramid of productivity","energy pyramid"],["Secondary productivity",8,"gross secondary productivity","gsp"],
  ["Pyramid of biomass",6],["Pyramid of numbers",6],["Ecological efficiency",6,"transfer efficiency","10% rule"],["Net secondary productivity",.4,"nsp"]]),
P("es013","2.3","Name a process in the carbon cycle.","Methanogenesis",[
  ["Photosynthesis",25],["Respiration",20],["Combustion",15,"burning","burning fossil fuels"],["Decomposition",12,"decay"],["Ocean absorption",8,"dissolving","diffusion into oceans"],
  ["Feeding",6,"consumption","eating"],["Fossilization",5,"fossilisation","fossil fuel formation"],["Sedimentation",4,"limestone formation","calcification"],["Weathering",3],["Methanogenesis",.4]]),
P("es014","2.3","Name a process in the nitrogen cycle.","Anammox",[
  ["Nitrogen fixation",25,"fixation","nitrogen fixing bacteria"],["Nitrification",18],["Denitrification",15],["Ammonification",12,"decomposition"],["Lightning",6],["Absorption by plants",6,"assimilation","uptake by plants"],
  ["Haber process",6,"fertiliser production","artificial fixation"],["Leaching",4],["Anammox",.4,"anaerobic ammonium oxidation"]]),
P("es015","2.4","Name a biome.","Chaparral",[
  ["Tropical rainforest",25,"rainforest"],["Desert",18,"hot desert"],["Tundra",12],["Savanna",10,"savannah"],["Temperate forest",10,"deciduous forest","temperate deciduous forest"],["Taiga",8,"boreal forest","coniferous forest"],
  ["Grassland",8,"temperate grassland","prairie","steppe"],["Coral reef",5,"coral reefs"],["Mangrove",3,"mangroves"],["Chaparral",.4,"mediterranean scrub"]]),
P("es016","2.4","Name a factor that determines where biomes are found.","Hadley cell",[
  ["Temperature",25],["Precipitation",25,"rainfall"],["Latitude",12],["Insolation",8,"sunlight","solar radiation"],["Altitude",6],["Soil type",5,"soil"],["Distance from the sea",4,"continentality"],
  ["Atmospheric circulation",4,"tricellular model","global circulation"],["Hadley cell",.4,"hadley cells"]]),
P("es017","2.5","Name a stage or idea in ecological succession.","Hydrosere",[
  ["Pioneer species",20,"pioneers"],["Climax community",18,"climax"],["Primary succession",15],["Secondary succession",15],["Seral stages",8,"sere","seral"],["Lichens",6,"lichen"],
  ["Plagioclimax",6],["Mosses",5,"moss"],["Hydrosere",.4,"hydroseral"]]),
P("es018","2.5","Name a cause of change in ecosystems, or a type of zonation.","Trophic cascade",[
  ["Fire",12,"wildfire"],["Human activity",12,"humans"],["Altitudinal zonation",10,"altitude zonation","altitude"],["Shoreline zonation",10,"rocky shore zonation","coastal zonation"],["Climate change",10],
  ["Deforestation",8],["Invasive species",8],["Volcanic eruption",6,"volcano"],["Grazing",5],["Trophic cascade",.4,"wolves in yellowstone"]]),
/* ---------- 3 Biodiversity and conservation ---------- */
P("es019","3.1","Name a type or measure of biodiversity.","Phylogenetic diversity",[
  ["Species diversity",20],["Genetic diversity",18],["Habitat diversity",15,"ecosystem diversity"],["Simpson's diversity index",12,"simpson","simpsons index"],["Species richness",10,"richness"],
  ["Evenness",6,"species evenness"],["Phylogenetic diversity",.4]]),
P("es020","3.1","Name a mechanism of evolution or speciation.","Adaptive radiation",[
  ["Natural selection",25,"survival of the fittest"],["Isolation",12,"reproductive isolation"],["Geographical isolation",10,"allopatric speciation","allopatric"],["Mutation",10,"mutations"],
  ["Adaptation",6],["Plate tectonics",6,"continental drift"],["Sympatric speciation",5,"sympatric"],["Mass extinction",4],["Adaptive radiation",.4]]),
P("es021","3.2","Name a cause of biodiversity loss.","Edge effects",[
  ["Habitat destruction",25,"habitat loss","habitat fragmentation"],["Climate change",12],["Pollution",10],["Overexploitation",10,"overhunting","overharvesting"],["Invasive species",10,"alien species"],
  ["Deforestation",10],["Poaching",8],["Overfishing",6],["Disease",4],["Edge effects",.4,"edge effect"]]),
P("es022","3.2","Name an endangered or extinct species.","Northern white rhino",[
  ["Tiger",12,"tigers"],["Polar bear",10],["Orangutan",10,"orangutans"],["Giant panda",10,"panda"],["Dodo",10],["Black rhino",8,"rhino","rhinoceros"],["Mountain gorilla",6,"gorilla"],
  ["Snow leopard",5],["Sea turtle",5,"turtle","hawksbill turtle"],["Passenger pigeon",4],["Blue whale",4],["Vaquita",3],["Amur leopard",3],["Northern white rhino",.4]]),
P("es023","3.2","Name a category on the IUCN Red List.","Not evaluated",[
  ["Critically endangered",18],["Endangered",18],["Extinct",15],["Vulnerable",15],["Least concern",10],["Extinct in the wild",10],["Near threatened",8],["Data deficient",4],["Not evaluated",.4]]),
P("es024","3.3","Name a conservation strategy.","Debt-for-nature swaps",[
  ["Protected areas",20,"national parks","nature reserves","reserves"],["Captive breeding",15,"breeding programmes"],["Wildlife corridors",10,"corridors"],["Seed banks",8,"seed bank"],["Zoos",8,"zoo"],
  ["Legislation",8,"cites","laws"],["Reintroduction",8,"reintroducing species"],["Habitat restoration",8,"restoration"],["Rewilding",6],["Ecotourism",5],["Debt-for-nature swaps",.4,"debt for nature"]]),
P("es025","3.3","Name a feature of a well-designed nature reserve.","The SLOSS debate",[
  ["Large size",20,"large","big"],["Wildlife corridors",15,"corridors"],["Buffer zones",12,"buffer zone"],["Circular shape",10,"round","circular"],["Small edge effect",8,"edge effects","low edge to area ratio"],
  ["Connected to other reserves",6,"connected","networks of reserves"],["Variety of habitats",6,"habitat diversity"],["Low human disturbance",5,"few roads"],["The SLOSS debate",.4,"sloss","single large or several small"]]),
/* ---------- 4 Water ---------- */
P("es026","4.1","Name a process in the hydrological (water) cycle.","Throughflow",[
  ["Evaporation",25],["Condensation",18],["Precipitation",18,"rain","rainfall"],["Transpiration",12],["Infiltration",10],["Surface runoff",8,"runoff","overland flow"],["Groundwater flow",6],
  ["Percolation",5],["Sublimation",3],["Advection",3],["Throughflow",.4]]),
P("es027","4.1","Name a store of water on Earth.","Living organisms",[
  ["Oceans",30,"sea","seas","ocean"],["Ice caps and glaciers",20,"ice caps","glaciers","ice sheets","ice"],["Groundwater",15,"aquifers"],["Lakes",10],["Rivers",8],["Atmosphere",6,"clouds","water vapour"],
  ["Soil moisture",4,"soil"],["Permafrost",3],["Living organisms",.4,"biomass","biosphere"]]),
P("es028","4.2","Name a way of increasing water supply or reducing water use.","Fog harvesting",[
  ["Desalination",15],["Rainwater harvesting",15,"rainwater collection"],["Reservoirs",15,"dams","dam"],["Drip irrigation",12,"efficient irrigation"],["Greywater recycling",8,"greywater","grey water"],
  ["Water meters",6,"metering"],["Fixing leaks",6,"leaks"],["Low-flow toilets and showers",6,"low flow","water saving devices"],["Water transfer schemes",6,"water transfer"],["Cloud seeding",3],["Fog harvesting",.4,"fog nets","fog catching"]]),
P("es029","4.2","Name a reason global water use is rising.","Cooling data centres",[
  ["Population growth",20,"population"],["Agriculture and irrigation",18,"irrigation","farming","agriculture"],["Industry",12,"industrialisation"],["Rising living standards",12,"wealth","development"],
  ["Urbanization",10,"urbanisation","cities"],["Meat-rich diets",6,"meat","diet"],["Hotter climate",6,"climate change"],["Tourism",4],["Cooling data centres",.4,"data centres","data centers"]]),
P("es030","4.3","Name a sustainable fishing or aquaculture practice.","Integrated multi-trophic aquaculture",[
  ["Fishing quotas",20,"quotas","catch limits"],["Marine protected areas",15,"mpas","marine reserves"],["Larger mesh sizes",12,"mesh size","bigger nets"],["MSC certification",8,"marine stewardship council","msc"],
  ["Seasonal bans",8,"closed seasons"],["No-take zones",6,"no take zones"],["Pole-and-line fishing",6,"pole and line","line fishing"],["Sustainable aquaculture",6,"fish farming","aquaculture"],
  ["Bycatch reduction devices",5,"turtle excluder devices"],["Integrated multi-trophic aquaculture",.4,"imta"]]),
P("es031","4.3","Name a problem caused by unsustainable fishing or aquaculture.","Fishing down the food web",[
  ["Overfishing",25,"collapse of fish stocks","fish stock collapse","depleted stocks"],["Bycatch",15],["Seabed damage from trawling",12,"bottom trawling","trawling"],["Disease spreading from fish farms",8,"disease","sea lice"],
  ["Pollution from fish farms",8,"fish farm waste","pollution"],["Mangrove destruction for shrimp farms",6,"shrimp farms","mangroves"],["Ghost nets",6,"lost nets"],["Fishing down the food web",.4,"fishing down"]]),
P("es032","4.4","Name a type or source of water pollution.","Pharmaceuticals in rivers",[
  ["Sewage",18],["Fertilizer runoff",18,"fertiliser","fertilizers","nitrates","agricultural runoff"],["Oil spills",12,"oil"],["Plastics",12,"plastic"],["Industrial waste",10,"heavy metals","mercury","lead"],
  ["Pesticides",8],["Thermal pollution",6,"hot water"],["Microplastics",6],["Acid mine drainage",3],["Pharmaceuticals in rivers",.4,"pharmaceuticals","drugs in water"]]),
P("es033","4.4","Name a stage or effect of eutrophication.","Positive feedback",[
  ["Algal bloom",25,"algae","algal blooms"],["Nutrient enrichment",15,"nitrates","phosphates","excess nutrients"],["Oxygen depletion",15,"low oxygen","hypoxia","less oxygen"],["Fish death",12,"fish die","dead fish"],
  ["Dead zones",8,"dead zone"],["More decomposition by bacteria",8,"decomposers","bacteria"],["Light blocked from plants",8,"less light","plants die"],["Higher BOD",5,"biochemical oxygen demand","bod"],
  ["Positive feedback",.4,"positive feedback loop"]]),
/* ---------- 5 Land ---------- */
P("es034","5.1","Name a component of soil or a soil horizon.","Mycorrhizae",[
  ["Organic matter",18,"humus"],["Minerals",15,"mineral particles","sand","silt","clay"],["Water",10],["Air",10],["Living organisms",8,"organisms","earthworms","biota"],["A horizon",8,"topsoil"],
  ["O horizon",6,"leaf litter","litter layer"],["B horizon",6,"subsoil"],["C horizon",4,"weathered rock"],["Bedrock",4,"parent material"],["Mycorrhizae",.4,"mycorrhiza","fungal networks"]]),
P("es035","5.1","Name a cause of soil degradation or a way to conserve soil.","Gabions",[
  ["Overgrazing",15],["Erosion",12,"soil erosion"],["Deforestation",12],["Salinization",10,"salinisation"],["Terracing",10,"terraces"],["Contour ploughing",8,"contour plowing"],["Crop rotation",6],
  ["Cover crops",6],["Windbreaks",6,"shelter belts"],["No-till farming",5,"no till","zero tillage"],["Desertification",5],["Gabions",.4]]),
P("es036","5.2","Name a type of farming system.","Vertical farming",[
  ["Subsistence",15,"subsistence farming"],["Intensive",15,"intensive farming"],["Commercial",12,"commercial farming"],["Extensive",12,"extensive farming"],["Organic",10,"organic farming"],
  ["Arable",8,"arable farming","crops"],["Pastoral",8,"pastoral farming","livestock"],["Mixed",6,"mixed farming"],["Shifting cultivation",5,"slash and burn"],["Hydroponics",4],["Agroforestry",4],
  ["Permaculture",4],["Vertical farming",.4,"vertical farms"]]),
P("es037","5.2","Name a way to make food production more sustainable.","Regenerative grazing",[
  ["Eating less meat",15,"less meat","vegetarian diet","plant based diet"],["Reducing food waste",15,"less food waste","food waste"],["Organic farming",10,"organic"],["Integrated pest management",8,"ipm"],
  ["Crop rotation",8],["Agroforestry",6],["Local food",6,"buying local"],["GM crops",6,"genetically modified crops","gm"],["Drip irrigation",5],["Cultured meat",4,"lab grown meat"],["Insect protein",4,"eating insects"],
  ["Regenerative grazing",.4,"holistic grazing","regenerative agriculture"]]),
/* ---------- 6 Atmosphere and climate change ---------- */
P("es038","6.1","Name a gas in the atmosphere.","Krypton",[
  ["Nitrogen",25,"n2"],["Oxygen",25,"o2"],["Carbon dioxide",18,"co2"],["Argon",8],["Water vapour",8,"water vapor"],["Methane",6,"ch4"],["Ozone",5,"o3"],["Neon",2],["Helium",2],["Krypton",.4]]),
P("es039","6.1","Name a layer of the atmosphere.","Tropopause",[
  ["Troposphere",25],["Stratosphere",25],["Mesosphere",15],["Thermosphere",15],["Exosphere",10],["Ozone layer",8,"ozone"],["Ionosphere",4],["Tropopause",.4]]),
P("es040","6.2","Name a human source of carbon dioxide or methane emissions.","Biomass burning",[
  ["Burning fossil fuels",20,"fossil fuels","coal","oil","cars","power stations"],["Cattle",18,"livestock","cows"],["Deforestation",12],["Rice paddies",10,"rice"],["Landfill",10,"landfill sites"],
  ["Cement production",6,"cement"],["Gas leaks",6,"fracking","natural gas leaks"],["Draining wetlands",3,"peatland drainage"],["Biomass burning",.4,"burning wood","wood burning"]]),
P("es041","6.2","Name an impact of climate change on ecosystems.","Trophic mismatch",[
  ["Coral bleaching",20],["Species shifting their range",15,"species migration","range shifts","migration"],["Melting sea ice",12,"sea ice","polar bears"],["Ocean acidification",12,"acidification"],
  ["Extinction",10,"species extinction"],["Wildfires",8,"forest fires"],["Sea level rise",8,"rising sea levels"],["Changes in timing of seasons",6,"phenology","earlier spring"],["Spread of pests and diseases",6,"pests"],
  ["Trophic mismatch",.4,"timing mismatch"]]),
P("es042","6.3","Name a climate change mitigation strategy.","Direct air capture",[
  ["Renewable energy",25,"solar","wind","renewables"],["Reforestation",15,"planting trees","afforestation"],["Carbon capture and storage",12,"ccs","carbon capture"],["Carbon tax",8],["Energy efficiency",8,"insulation"],
  ["Electric vehicles",8,"evs","electric cars"],["Nuclear power",6,"nuclear"],["Paris Agreement",6],["Geoengineering",4],["Carbon offsetting",4,"offsetting"],["Direct air capture",.4,"dac"]]),
P("es043","6.3","Name a climate change adaptation strategy.","Floating gardens",[
  ["Sea walls",18,"flood defences","flood defenses","levees"],["Drought-resistant crops",12,"drought resistant crops"],["Early warning systems",10,"warning systems"],["Managed retreat",8,"relocation"],
  ["Mangrove restoration",8,"mangroves"],["Water storage",8,"reservoirs","rainwater harvesting"],["Flood-proof buildings",6,"stilts","raised houses"],["Changing planting dates",4,"planting dates"],["Insurance",4],
  ["Floating gardens",.4,"floating farms"]]),
P("es044","6.4","Name an ozone-depleting substance, or a fact about ozone depletion.","Polar stratospheric clouds",[
  ["CFCs",30,"chlorofluorocarbons","cfc"],["Montreal Protocol",15,"montreal"],["Ozone hole over Antarctica",12,"ozone hole","antarctica"],["More UV radiation",10,"uv","ultraviolet"],["Halons",10,"halon"],
  ["Skin cancer",8,"cataracts"],["Chlorine free radicals",6,"chlorine","free radicals"],["Methyl bromide",4],["Aerosol sprays",4,"aerosols"],["HCFCs",3,"hcfc"],["Polar stratospheric clouds",.4,"stratospheric clouds"]]),
P("es045","6.4","Name a way to protect people from UV radiation, or to help the ozone layer recover.","Kigali Amendment",[
  ["Sunscreen",20,"sun cream","suncream","sunblock"],["Phasing out CFCs",15,"banning cfcs","cfc ban"],["Hats and sunglasses",10,"hats","sunglasses","covering skin"],["Montreal Protocol",10],
  ["CFC alternatives",8,"hfcs","alternatives"],["Safe disposal of old fridges",8,"recycling fridges","fridge disposal"],["Avoiding the midday sun",6,"shade","avoiding sun"],["UV index warnings",4,"uv index"],
  ["Kigali Amendment",.4,"kigali"]]),
/* ---------- 7 Natural resources ---------- */
P("es046","7.1","Name a type of natural resource or natural capital.","Natural income",[
  ["Renewable resources",15,"renewable"],["Non-renewable resources",15,"non renewable"],["Forests",10,"timber"],["Fossil fuels",10,"coal","oil","gas"],["Minerals",8,"metals"],["Fresh water",8,"water"],
  ["Soil",6],["Fish stocks",6,"fish"],["Ecosystem services",6],["Replenishable resources",6,"replenishable","groundwater"],["Natural income",.4,"sustainable yield"]]),
P("es047","7.1","Name an ecosystem service.","Nutrient cycling",[
  ["Pollination",20],["Carbon storage",12,"carbon sequestration","carbon sink"],["Water purification",12,"clean water","filtering water"],["Flood protection",10,"flood regulation"],["Food",10,"food provision"],
  ["Climate regulation",8],["Timber",6,"wood"],["Recreation and tourism",6,"recreation","tourism"],["Soil formation",5],["Medicine",5,"medicines"],["Cultural and spiritual value",4,"spiritual","cultural services"],
  ["Nutrient cycling",.4]]),
P("es048","7.2","Name a renewable energy source.","Ocean thermal energy conversion",[
  ["Solar",25,"solar power","solar panels"],["Wind",25,"wind power","wind turbines"],["Hydroelectric",15,"hydro","hydropower","hep"],["Geothermal",10],["Tidal",8,"tidal power"],["Biomass",8],
  ["Wave",5,"wave power"],["Biofuels",5,"biofuel"],["Hydrogen",3,"green hydrogen"],["Ocean thermal energy conversion",.4,"otec"]]),
P("es049","7.2","Name a factor affecting a country's choice of energy sources.","Stranded assets",[
  ["Availability of resources",20,"availability","resources","natural resources"],["Cost",15,"price"],["Energy security",10,"security"],["Technology",10],["Climate and geography",10,"geography","climate"],
  ["Environmental concerns",10,"environment","pollution"],["Politics",6,"government policy","politics"],["Public opinion",5],["Population",4],["Stranded assets",.4]]),
P("es050","7.3","Name a strategy for managing solid domestic waste.","Anaerobic digestion",[
  ["Recycling",25],["Composting",15,"compost"],["Landfill",15],["Incineration",12,"burning"],["Reducing",10,"reduce","waste reduction"],["Reusing",10,"reuse"],["Waste-to-energy",6,"energy from waste"],
  ["Bans on single-use plastics",6,"plastic bag ban","single use plastic ban"],["Deposit return schemes",5,"bottle deposits"],["Anaerobic digestion",.4,"biogas"]]),
P("es051","7.3","Name a problem caused by solid waste.","Ghost nets",[
  ["Ocean plastic",20,"plastic in the ocean","marine plastic"],["Methane from landfill",15,"landfill methane","methane"],["Leachate",12,"leachate pollution","groundwater pollution"],["Litter",10],
  ["Toxic e-waste",8,"e waste","electronic waste"],["Air pollution from incineration",8,"dioxins","incineration"],["Great Pacific Garbage Patch",6,"garbage patch"],["Microplastics",6],["Pests and disease",5,"rats"],
  ["Ghost nets",.4,"lost fishing nets"]]),
/* ---------- 8 Human populations and urban systems ---------- */
P("es052","8.1","Name a factor affecting birth rates.","Pension provision",[
  ["Education of women",15,"female education","women s education"],["Contraception",15,"family planning"],["Economic development",10,"wealth","income"],["Religion",10],["Government policy",10,"one child policy","population policy"],
  ["Infant mortality",10,"healthcare","child mortality"],["Cost of raising children",8,"cost of children"],["Women working",6,"female employment","careers"],["Urbanization",6,"urbanisation"],
  ["Pension provision",.4,"pensions","old age security"]]),
P("es053","8.1","Name a model or measure of human population.","Rule of 70",[
  ["Demographic transition model",20,"dtm","demographic transition"],["Population pyramid",18,"age sex pyramid","pyramid"],["Crude birth rate",10,"birth rate","cbr"],["Total fertility rate",10,"fertility rate","tfr"],
  ["Doubling time",8],["Natural increase",8,"natural increase rate"],["Dependency ratio",6],["Malthusian theory",6,"malthus"],["Boserup's theory",4,"boserup"],["Rule of 70",.4,"rule of seventy"]]),
P("es054","8.2","Name a feature of a sustainable city.","15-minute city",[
  ["Public transport",20,"buses","trams","metro"],["Green spaces",15,"parks"],["Renewable energy",10,"solar panels"],["Cycle lanes",10,"cycling","bike lanes"],["Recycling",8],["Green roofs",8,"green walls"],
  ["Energy-efficient buildings",8,"energy efficient buildings","insulation"],["Mixed-use development",6,"mixed use"],["Urban farming",5,"local food","rooftop gardens"],["Smart grids",4,"smart grid"],
  ["15-minute city",.4,"15 minute city","fifteen minute city"]]),
P("es055","8.2","Name a problem caused by rapid urbanization.","Light pollution",[
  ["Slums",20,"informal settlements","shanty towns"],["Traffic congestion",15,"congestion","traffic"],["Air pollution",15],["Urban heat island",10,"heat island"],["Urban sprawl",10,"sprawl"],["Waste",8,"rubbish"],
  ["Water shortages",6,"water"],["Loss of green space",6,"loss of farmland"],["Flooding",6,"surface runoff","impermeable surfaces"],["Light pollution",.4]]),
P("es056","8.3","Name an urban air pollutant.","PAN",[
  ["Particulate matter",20,"pm2.5","pm10","pm2 5","particulates","soot"],["Nitrogen oxides",15,"nox","no2","nitrogen dioxide"],["Sulfur dioxide",12,"sulphur dioxide","so2"],["Carbon monoxide",12,"co"],
  ["Ground-level ozone",10,"tropospheric ozone","ozone"],["Smog",10,"photochemical smog"],["VOCs",5,"volatile organic compounds"],["Lead",4],["PAN",.4,"peroxyacetyl nitrate"]]),
P("es057","8.3","Name a way to reduce urban air pollution.","Photocatalytic paving",[
  ["Electric vehicles",15,"electric cars","evs"],["Congestion charges",12,"congestion charge"],["Low emission zones",12,"ulez","clean air zones"],["Public transport",12],["Catalytic converters",10],
  ["Cycling",8,"cycle lanes"],["Planting trees",8,"trees"],["Banning coal burning",6,"ban coal"],["Smokeless fuels",4],["Car-free days",4,"car free days"],["Photocatalytic paving",.4,"photocatalytic","smog eating concrete"]]),
/* ---------- HL lenses ---------- */
P("es058","HL.a","Name an international environmental agreement or law.","Escazú Agreement",[
  ["Paris Agreement",20,"paris accord"],["Kyoto Protocol",15,"kyoto"],["Montreal Protocol",15,"montreal"],["CITES",10],["Convention on Biological Diversity",6,"cbd"],["Ramsar Convention",6,"ramsar"],
  ["UNCLOS",4,"law of the sea"],["Basel Convention",4,"basel"],["Rio Declaration",4,"rio"],["Antarctic Treaty",4],["Escazú Agreement",.4,"escazu agreement","escazu"]], [], HL),
P("es059","HL.a","Name a legal principle or approach in environmental law.","Common but differentiated responsibilities",[
  ["Polluter pays principle",20,"polluter pays"],["Precautionary principle",18,"precaution"],["Environmental impact assessment",12,"eia"],["Rights of nature",8,"legal personhood for rivers"],
  ["Intergenerational equity",6],["Sustainable development",6],["Ecocide",4],["Prevention principle",4],["Common but differentiated responsibilities",.4,"cbdr"]], [], HL),
P("es060","HL.b","Name an economic tool for environmental management.","Natural capital accounting",[
  ["Carbon tax",20,"pollution tax"],["Cap and trade",15,"emissions trading","tradable permits"],["Subsidies for renewables",12,"subsidies","green subsidies"],["Cost–benefit analysis",8,"cost benefit analysis"],
  ["Payment for ecosystem services",8,"pes"],["Valuing ecosystem services",8,"valuation"],["Green GDP",6],["Deposit return schemes",6],["Pigouvian tax",4,"pigovian tax"],["Natural capital accounting",.4]], [], HL),
P("es061","HL.b","Name a concept from environmental economics.","Environmental Kuznets curve",[
  ["Externalities",20,"externality","negative externality"],["Tragedy of the commons",18,"commons"],["Natural capital",10],["Circular economy",10],["Doughnut economics",8,"doughnut"],
  ["Discounting the future",6,"discount rate","discounting"],["Green growth",6],["Degrowth",4],["Steady-state economy",4,"steady state economy"],["Environmental Kuznets curve",.4,"kuznets curve","kuznets"]], [], HL),
P("es062","HL.c","Name an ethical position or principle about the environment.","Rights of future generations",[
  ["Intrinsic value",15],["Instrumental value",15],["Environmental justice",10,"climate justice"],["Biocentrism",10,"biocentric"],["Ecocentrism",10,"ecocentric"],["Anthropocentrism",10,"anthropocentric"],
  ["Stewardship",8],["Animal rights",6,"animal welfare"],["Land ethic",5,"leopold","aldo leopold"],["Deep ecology",5],["Rights of future generations",.4,"future generations","intergenerational justice"]], [], HL),
P("es063","HL.c","Name an example of environmental injustice.","Standing Rock",[
  ["Climate change hitting poorer countries hardest",15,"climate injustice","poorer countries suffer most"],["Flint water crisis",12,"flint"],["Toxic waste dumped in poor areas",12,"toxic waste","waste dumping"],
  ["Indigenous land rights violations",10,"indigenous land","indigenous peoples"],["E-waste exported to developing countries",10,"e waste exports","agbogbloshie"],["Bhopal disaster",8,"bhopal"],
  ["Oil pollution in the Niger Delta",8,"niger delta","ogoni"],["Cancer Alley",5,"louisiana"],["Standing Rock",.4,"dakota access pipeline","standing rock sioux"]], [], HL),
];

/* ================= the growing tree (upwards) ================= */
const BANDS = [
  {name:"Underground",       zone:"Roots and soil",          from:0,  to:40,  hue:30,  bg:["#2a1c10","#22180e"]},
  {name:"Forest floor",      zone:"The forest floor",        from:40, to:100, hue:90,  bg:["#22180e","#1c2412"]},
  {name:"Shrub layer",       zone:"The shrub layer",         from:100,to:170, hue:110, bg:["#1c2412","#16301a"]},
  {name:"Understory",        zone:"The understory",          from:170,to:250, hue:130, bg:["#16301a","#133a24"]},
  {name:"The canopy",        zone:"The canopy",              from:250,to:320, hue:140, bg:["#133a24","#1a4a2c"]},
  {name:"Emergent layer",    zone:"The emergent layer",      from:320,to:390, hue:160, bg:["#1a4a2c","#2a5a6a"]},
  {name:"The clouds",        zone:"The water cycle",         from:390,to:460, hue:200, bg:["#2a5a6a","#3a6a90"]},
  {name:"The troposphere",   zone:"The troposphere",         from:460,to:530, hue:210, bg:["#3a6a90","#24407a"]},
  {name:"The ozone layer",   zone:"The ozone layer",         from:530,to:600, hue:265, bg:["#24407a","#1a1a4a"]},
  {name:"Earthrise",         zone:"Earthrise",               from:600,to:760, hue:195, bg:["#1a1a4a","#04040e"]},
];
const FACTS = [
  [-30,"every forest starts with a single seed"],[12,"a teaspoon of soil holds more microbes than there are people on Earth"],[30,"fungi link tree roots into a 'wood wide web'"],
  [60,"decomposers return nutrients to the soil"],[90,"only about 10% of energy passes to the next trophic level"],[120,"ferns were here before the dinosaurs"],[155,"pioneer species start succession on bare ground"],
  [190,"tropical rainforests hold over half of all land species"],[230,"a keystone species holds an ecosystem together"],[265,"the canopy is home to most rainforest life"],
  [300,"a mature tree can absorb about 20 kg of CO₂ a year"],[340,"emergent trees can tower over 70 m"],[372,"trees pump water into the air through transpiration"],
  [410,"a water molecule spends about 9 days in the atmosphere"],[445,"the Amazon makes some of its own rain"],[480,"about 78% of the air is nitrogen and 21% oxygen"],
  [515,"CO₂ has risen from 280 ppm to over 420 ppm since 1750"],[550,"the ozone layer absorbs most of the Sun's harmful UV"],[585,"the Montreal Protocol is healing the ozone hole"],
  [620,"Earthrise, 1968: the photo that launched Earth Day"],[665,"there is no planet B"],[720,"the whole biosphere, seen at once"],
];
function wall(i, len, side){
  const r = srand(673 + i*29 + (side==="r"?17:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: // soil horizons, roots, worms and fungal threads
      s += `<rect width="120" height="${len}" fill="#3a2614"/>`;
      rep(14, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${y}" r="${f1(1+r()*2.4)}" fill="#5a3a1a" opacity=".7"/>`; }, 0);
      rep(120, y=>{ s+=`<path d="M${f1(20+r()*80)} ${y} q-20 40 4 80 q10 20 -6 40" stroke="#c9a26a" stroke-width="3" fill="none"/><path class="sw" d="M${f1(10+r()*90)} ${y+60} q8 -6 16 0 q8 6 16 0" stroke="#e8889a" stroke-width="5" fill="none" stroke-linecap="round"/>`
        + `<path d="M0 ${y+30} q30 ${f1(r()*20-10)} 60 0 t60 0" stroke="#f4ead0" stroke-width="1" fill="none" opacity=".35"/>`; });
      break;
    case 1: // forest floor: leaf litter, mushrooms and beetles
      rep(90, y=>{ for (let k=0;k<4;k++) s+=`<ellipse cx="${f1(r()*120)}" cy="${f1(y+r()*40)}" rx="9" ry="4" fill="hsl(${f1(20+r()*30)} 60% ${f1(30+r()*15)}%)" transform="rotate(${f1(r()*180)} 60 ${y})" opacity=".8"/>`;
        s+=`<path d="M${f1(20+r()*70)} ${y+60} v-14" stroke="#f4ead0" stroke-width="4"/><path d="M${f1(10+r()*70)} ${y+46} q12 -16 24 0z" fill="#c0392b"/><circle cx="${f1(18+r()*70)}" cy="${y+40}" r="2" fill="#fff"/>`; });
      rep(200, y=>{ s+=`<g class="swim" style="animation-delay:-${f1(r()*5)}s"><ellipse cx="60" cy="${y+80}" rx="7" ry="5" fill="#1a3a6a"/><path d="M60 ${y+75} v10" stroke="#0a1a3a"/></g>`; }, 60);
      break;
    case 2: // shrub layer: ferns and a deer
      rep(110, y=>{ const x = f1(20+r()*80); s+=`<g class="sw" style="animation-delay:-${f1(r()*4)}s">` + [-1,1].map(k=>[0,1,2,3].map(j=>`<path d="M${x} ${y+90} q${k*(14+j*6)} ${-30-j*14} ${k*(28+j*8)} ${-40-j*18}" stroke="#4a9a3a" stroke-width="3" fill="none"/>`).join("")).join("") + `</g>`; });
      rep(260, y=>{ s+=`<g transform="translate(30 ${y+40})"><ellipse cx="30" cy="20" rx="26" ry="12" fill="#a8703a"/><path d="M50 12 l10 -20 l8 2 l-6 20z" fill="#a8703a"/><path d="M56 -8 l-6 -12 M62 -8 l6 -12" stroke="#6a4a2a" stroke-width="2"/><path d="M12 30 v18 M22 30 v18 M40 30 v18 M48 30 v18" stroke="#a8703a" stroke-width="4"/></g>`; }, 100);
      break;
    case 3: // understory: young trees and birds
      rep(140, y=>{ const x = f1(30+r()*60); s+=`<path d="M${x} ${y+140} V${y+40}" stroke="#6a4a2a" stroke-width="6"/><ellipse cx="${x}" cy="${y+40}" rx="34" ry="28" fill="hsl(${f1(110+r()*30)} 45% 32%)"/>`
        + `<path class="fly" style="animation-delay:-${f1(r()*6)}s" d="M${f1(10+r()*90)} ${y+10} q6 -6 12 0 q6 -6 12 0" stroke="#ffd25a" stroke-width="2.4" fill="none"/>`; });
      break;
    case 4: // the canopy: dense crowns, a toucan and a monkey
      rep(60, y=>{ s+=`<ellipse cx="${f1(r()*120)}" cy="${y}" rx="${f1(30+r()*24)}" ry="${f1(20+r()*12)}" fill="hsl(${f1(115+r()*35)} 50% ${f1(24+r()*12)}%)"/>`; }, 0);
      rep(240, y=>{ s+=`<g transform="translate(50 ${y+60})"><ellipse rx="12" ry="9" fill="#1a1a1a"/><path d="M8 -4 q20 -2 24 6 q-12 4 -24 2z" fill="#ff9d2e"/><circle cx="6" cy="-4" r="2" fill="#fff"/></g>`
        + `<g class="sw" style="animation-delay:-${f1(r()*3)}s"><path d="M80 ${y+120} q10 30 -6 50" stroke="#6a4a2a" stroke-width="4" fill="none"/><circle cx="76" cy="${y+176}" r="9" fill="#8a5a2a"/></g>`; }, 80);
      break;
    case 5: // emergent layer: giant trunks rising above, and an eagle
      rep(220, y=>{ s+=`<path d="M50 ${y+220} V${y+60}" stroke="#5a3a1a" stroke-width="10"/><ellipse cx="50" cy="${y+50}" rx="50" ry="24" fill="#2a6a3a"/>`
        + `<path class="fly" style="animation-delay:-${f1(r()*6)}s" d="M${f1(10+r()*60)} ${y+130} q14 -12 28 0 q14 -12 28 0" stroke="#3a2a1a" stroke-width="4" fill="none"/>`; });
      break;
    case 6: // the clouds: rain falling and the water cycle
      rep(110, y=>{ s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${f1(30+r()*60)}" cy="${y}" rx="44" ry="18" fill="#e8f0f8" opacity=".55"/><ellipse cx="${f1(40+r()*50)}" cy="${y-10}" rx="30" ry="16" fill="#f4f8fc" opacity=".55"/></g>`
        + [0,1,2,3,4].map(k=>`<path d="M${f1(20+k*18+r()*6)} ${y+22} l-4 14" stroke="#9fd8ff" stroke-width="2" opacity=".7"/>`).join(""); });
      break;
    case 7: // the troposphere: CO₂ and CH₄ molecules and a plane
      rep(70, y=>{ const x = f1(20+r()*80), m = r()<.65; s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s">` + (m ? `<circle cx="${x}" cy="${y}" r="7" fill="#3a3a3a"/><circle cx="${f1(+x-13)}" cy="${y}" r="6" fill="#e8443a"/><circle cx="${f1(+x+13)}" cy="${y}" r="6" fill="#e8443a"/>`
        : `<circle cx="${x}" cy="${y}" r="7" fill="#3a3a3a"/>` + [[-9,-7],[9,-7],[-9,7],[9,7]].map(([dx,dy])=>`<circle cx="${f1(+x+dx)}" cy="${f1(y+dy)}" r="4" fill="#f4f4f4"/>`).join("")) + `</g>`; }, 30);
      rep(320, y=>{ s+=`<g class="fly"><path d="M20 ${y+40} h70 l14 -6 l-14 -4 h-70z" fill="#e8f0f8"/><path d="M50 ${y+36} l-14 -18 h10 l20 18z" fill="#c9d4e0"/></g>`; }, 120);
      break;
    case 8: // the ozone layer: O₃ molecules absorbing UV rays
      rep(80, y=>{ const x = f1(20+r()*80); s+=`<g class="blink" style="animation-duration:${f1(2+r()*2)}s"><circle cx="${x}" cy="${y}" r="6" fill="#7ad8ff"/><circle cx="${f1(+x-11)}" cy="${y+8}" r="6" fill="#7ad8ff"/><circle cx="${f1(+x+11)}" cy="${y+8}" r="6" fill="#7ad8ff"/></g>`; }, 30);
      rep(140, y=>{ s+=`<path d="M${f1(r()*120)} ${y} l14 20 l-10 4 l14 20" stroke="#c98bff" stroke-width="2.5" fill="none" opacity=".75"/>`; }, 60);
      break;
    case 9: // Earthrise: stars and the blue planet
      rep(30, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${f1(y+r()*30)}" r="${f1(.8+r()*1.6)}" fill="#fff" class="${r()<.35?"blink":""}"/>`; });
      rep(420, y=>{ s+=`<circle cx="60" cy="${y+80}" r="46" fill="#1a5aa8"/><path d="M30 ${y+60} q14 -10 26 4 q-6 14 -24 10z M64 ${y+90} q16 -6 22 10 q-12 14 -26 4z" fill="#3a9a4a"/><ellipse cx="60" cy="${y+80}" rx="46" ry="46" fill="none" stroke="#9fd8ff" stroke-width="3" opacity=".6"/>`; }, 100);
      break;
  }
  return vwall(s, len, side);
}
/* the tree: a sprouting seed that grows leaves, flowers, fruit, and finally a golden crown */
function avatar(level, hue){
  const gold = level >= 8, leaf = gold ? "#ffd25a" : `hsl(${115 + level*3} 55% 42%)`, n = Math.min(7, 2 + level);
  const leaves = Array.from({length: n}, (_, k) => { const a = -Math.PI/2 + (k - (n-1)/2) * .42, R = 14 + level*.8;
    return `<ellipse cx="${f1(Math.cos(a)*R)}" cy="${f1(-6 + Math.sin(a)*R)}" rx="${f1(7 + level*.35)}" ry="${f1(4.4 + level*.2)}" transform="rotate(${f1(a*180/Math.PI)} ${f1(Math.cos(a)*R)} ${f1(-6 + Math.sin(a)*R)})" fill="${leaf}" stroke="#1a3a12" stroke-width="1"/>`; }).join("");
  const s = `<g class="av-rock"><path d="M-16 22 q16 -8 32 0 q-4 8 -16 8 q-12 0 -16 -8z" fill="#6a4a2a"/>
    <path d="M0 22 V-6" stroke="#6a4a2a" stroke-width="${f1(3 + level*.35)}" stroke-linecap="round"/>
    ${leaves}
    ${level >= 4 ? [0,1,2].map(k=>`<circle class="blink" style="animation-delay:-${k*.4}s" cx="${[-12,12,0][k]}" cy="${[-10,-12,-26][k]}" r="3" fill="#ff8ad5"/>`).join("") : ""}
    ${level >= 6 ? `<circle cx="-8" cy="2" r="3.4" fill="#e8443a"/><circle cx="9" cy="0" r="3.4" fill="#e8443a"/>` : ""}
    <circle cx="-4" cy="10" r="2.6" fill="#fff"/><circle cx="4" cy="10" r="2.6" fill="#fff"/><g class="av-blink"><circle cx="-3.6" cy="10.4" r="1.3" fill="#1a1a1a"/><circle cx="4.4" cy="10.4" r="1.3" fill="#1a1a1a"/></g>
    <path d="M-3 15 q3 2.4 6 0" stroke="#1a1a1a" stroke-width="1.2" fill="none"/>
    ${gold ? `<path d="M-10 -34 l5 6 5 -8 5 8 5 -6 -2 10 h-16z" fill="#ffd25a" stroke="#fff2a8"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<circle cx="100" cy="56" r="44" fill="#1a5aa8" stroke="${c}" stroke-width="3"/><path d="M70 40 q16 -12 30 4 q-8 16 -28 12z M104 66 q20 -8 26 12 q-14 16 -30 4z" fill="#3a9a4a"/><ellipse cx="100" cy="56" rx="54" ry="16" fill="none" stroke="${c}" stroke-width="2" class="blink"/>`);
  if (t === "rootkit") return W(170,100,`<path d="M85 96 V40" stroke="#5a3a1a" stroke-width="8"/><ellipse cx="85" cy="34" rx="46" ry="28" fill="${c}"/><path d="M60 30 l10 -10 M100 24 l8 -12" stroke="#fff" stroke-opacity=".4" stroke-width="3"/>`);
  if (t === "trojan") return W(170,100,`<path d="M85 96 V54" stroke="#5a3a1a" stroke-width="6"/><ellipse cx="85" cy="44" rx="30" ry="20" fill="${c}"/>`);
  if (t === "adware") return W(170,100,`<path d="M85 96 V64" stroke="#5a3a1a" stroke-width="4"/><ellipse cx="74" cy="60" rx="12" ry="7" fill="${c}" transform="rotate(-30 74 60)"/><ellipse cx="96" cy="58" rx="12" ry="7" fill="${c}" transform="rotate(30 96 58)"/>`);
  if (t === "spam") return W(170,90,`<ellipse cx="85" cy="70" rx="12" ry="8" fill="#a8703a"/><path d="M85 64 q4 -14 12 -16" stroke="${c}" stroke-width="3" fill="none"/>`);
  if (t === "blocked") return W(170,100,`<rect x="20" y="70" width="130" height="14" rx="4" fill="#6a4a2a"/><circle cx="40" cy="77" r="8" fill="#c9a26a" stroke="#6a4a2a" stroke-width="2"/><path d="M60 64 l70 -40" stroke="#5a3a1a" stroke-width="5"/><text x="120" y="40" font-size="14" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">TIMBER</text>`);
  return null;
}
const carbon = p => Math.pow(10, p*12/700);
function fmtC(v){ const u = [["Gt",1e12],["Mt",1e9],["kt",1e6],["t",1e3]].find(([,d]) => v >= d); if (!u) return (v < 10 ? v.toFixed(1) : Math.round(v)) + " kg"; const n = v / u[1]; return (n < 10 ? n.toFixed(1) : Math.round(n)) + " " + u[0]; }
registerSubject({
  key:"ess", name:"Environmental Systems and Societies", theme:"A seed growing into a tree that rises to see the whole Earth", gemWord:"Biosphere", gemTitle:"One in a Biosphere", emoji:"🌱",
  blurb:"You're a seed in the soil. Each prompt has many correct answers. <b>Obvious answers barely sprout. Answers other players missed grow you taller and store more carbon</b>, up through the forest floor, the canopy and the emergent giants, through the clouds and the ozone layer, until you see Earthrise.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Biosphere", rootkit:"Keystone species", trojan:"Old growth", adware:"Sapling", spam:"Seedling"}, blocked:"Felled", fw:"DEFORESTATION",
  notes:{rootkit:"A keystone answer: very few players found it.", trojan:"Deep-rooted. Most people don't reach this one.", adware:"A healthy answer, but a common one.", spam:"The first answer everyone grows."},
  ladder:{gem:"Hardly anyone on Earth gives this answer", rootkit:"A keystone answer: very rare", trojan:"Old growth: a strong, less common answer", adware:"A sapling: correct and fairly common", spam:"A seedling: the answer everyone gives first", blocked:"Not an accepted answer"},
  verbs:{cta:"Grow ▲", inject:"Plant", hint:"▲ rarer answers grow taller and store more carbon ▲", count:"photosynthesizing"},
  shout:t => ({gem:"BIODIVERSITY!", rootkit:"KEYSTONE!", blocked:"TIMBER!"})[t],
  particles:["✿","❀","•","~"], particleColor:"#8be08b",
  meter:{label:"CARBON", fmt:p=>fmtC(carbon(p)), zone:p=>fmtC(carbon(p)) + ' <span style="text-transform:none">CO₂</span>', tick:p=>fmtC(carbon(p)), gain:(a,b)=>`store ${fmtC(carbon(b))} of carbon`},
  start:{bg:"linear-gradient(0deg,#140c06,#2a1c10)", label:"Start · 1 kg", zone:"A seed in the soil", color:"#8be08b"},
  endBg:"#02020a",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  extras:({pos, WMAX})=>{ const bottom = pos(0) + 40, top = pos(WMAX - 10); return `<div class="es-trunk" style="top:${top}px;height:${bottom-top}px" aria-hidden="true"></div>`; },
  beyond:"Beyond the biosphere",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
