/* Geography — a pirate ship sails across the map. Rarer answers sail further, past sharks, sirens, sea serpents,
   ghost ships and the kraken, to where the map says "here be dragons".
   Syllabus: IB Geography (first assessment 2019): core units 1–3 (SL and HL), HL core extension units 4–6, options A–G. */
(function(){
const CATALOG = [
  {label:"Core · Geographic perspectives (SL and HL)", units:[
    {code:"1", name:"Changing population", topics:[["1.1","Population and economic development patterns"],["1.2","Changing populations and places"],["1.3","Challenges and opportunities"]]},
    {code:"2", name:"Global climate: vulnerability and resilience", topics:[["2.1","The causes of global climate change"],["2.2","The consequences of global climate change"],["2.3","Responding to global climate change"]]},
    {code:"3", name:"Global resource consumption and security", topics:[["3.1","Global trends in consumption"],["3.2","Impacts of changing trends in resource consumption"],["3.3","Resource stewardship"]]},
  ]},
  {label:"HL core extension · Global interactions", units:[
    {code:"4", name:"Power, places and networks", topics:[["4.1","Global interactions and global power",HL],["4.2","Global networks and flows",HL],["4.3","Human and physical influences on global interactions",HL]]},
    {code:"5", name:"Human development and diversity", topics:[["5.1","Development opportunities",HL],["5.2","Changing identities and cultures",HL],["5.3","Local responses to global interactions",HL]]},
    {code:"6", name:"Global risks and resilience", topics:[["6.1","Geopolitical and economic risks",HL],["6.2","Environmental risks",HL],["6.3","Local and global resilience",HL]]},
  ]},
  {label:"Options · Geographic themes (SL two, HL three)", units:[
    {code:"A", name:"Freshwater", topics:[["A.1","Drainage basin hydrology and geomorphology"],["A.2","Flooding and flood mitigation"],["A.3","Water scarcity and water quality"],["A.4","Water management futures"]]},
    {code:"B", name:"Oceans and coastal margins", topics:[["B.1","Ocean–atmosphere interactions"],["B.2","Interactions between oceans and coastal places"],["B.3","Managing coastal margins"],["B.4","Ocean management futures"]]},
    {code:"C", name:"Extreme environments", topics:[["C.1","The characteristics of extreme environments"],["C.2","Physical processes and landscapes"],["C.3","Managing extreme environments"],["C.4","Extreme environments' futures"]]},
    {code:"D", name:"Geophysical hazards", topics:[["D.1","Geophysical systems"],["D.2","Geophysical hazard risks"],["D.3","Hazard risk and vulnerability"],["D.4","Future resilience and adaptation"]]},
    {code:"E", name:"Leisure, tourism and sport", topics:[["E.1","Changing leisure patterns"],["E.2","Tourism and sport at the local and national scale"],["E.3","Tourism and sport at the international scale"],["E.4","Managing tourism and sport for the future"]]},
    {code:"F", name:"The geography of food and health", topics:[["F.1","Measuring food and health"],["F.2","Food systems and the spread of diseases"],["F.3","Stakeholders in food and health"],["F.4","Future health and food security and sustainability"]]},
    {code:"G", name:"Urban environments", topics:[["G.1","The variety of urban environments"],["G.2","Changing urban systems"],["G.3","Urban environmental and social stresses"],["G.4","Building sustainable urban systems for the future"]]},
  ]},
];

const PROMPTS = [
/* ---------- 1 Changing population ---------- */
P("gg001","1.1","Name a factor that affects where people live (population distribution).","Colonial settlement history",[
  ["Climate",20,"temperature","rainfall","weather"],["Water supply",15,"water","rivers","access to water","fresh water"],["Jobs / economic opportunities",15,"jobs","employment","work","economic opportunities","industry"],
  ["Relief / altitude",12,"relief","altitude","mountains","terrain","topography","flat land"],["Soil fertility",10,"soil","fertile soil","fertile land","farmland"],["Natural resources",8,"resources","minerals","raw materials"],
  ["Transport links",8,"transport","roads","accessibility"],["Coastline / ports",5,"coast","ports","sea access"],["Services",4,"schools","hospitals","healthcare","education"],
  ["Political stability or conflict",4,"conflict","war","political stability","stability"],["Disease risk",2,"disease","malaria"],["Core–periphery pattern",1.5,"core periphery","core and periphery"],
  ["Colonial settlement history",.4,"colonialism","colonial history","colonisation"]]),
P("gg002","1.1","Name a demographic indicator.","Net reproduction rate",[
  ["Birth rate",20,"crude birth rate","cbr"],["Death rate",18,"crude death rate","cdr","mortality rate"],["Fertility rate",15,"total fertility rate","tfr"],["Life expectancy",15],
  ["Infant mortality rate",12,"infant mortality","imr"],["Natural increase",8,"natural increase rate","rate of natural increase","natural change"],["Dependency ratio",8],["Population density",6,"density"],
  ["Maternal mortality rate",4,"maternal mortality"],["Sex ratio",3,"gender ratio"],["Median age",3],["Under-5 mortality",3,"child mortality","under five mortality"],["Doubling time",1],
  ["Net reproduction rate",.4,"nrr"]]),
P("gg003","1.1","Name a stage or feature of the demographic transition model (DTM).","Epidemiological transition",[
  ["Stage 1: high stationary",15,"stage 1","stage one","high stationary"],["Stage 2: early expanding",15,"stage 2","stage two","early expanding"],["Stage 3: late expanding",12,"stage 3","stage three","late expanding"],
  ["Stage 4: low stationary",12,"stage 4","stage four","low stationary"],["Stage 5: declining",8,"stage 5","stage five","declining","natural decrease"],["Falling death rate",8,"death rate falls","death rates fall"],
  ["Falling birth rate",8,"birth rate falls","birth rates fall"],["Natural increase",6],["Population explosion",3,"rapid growth"],
  ["Epidemiological transition",.4,"epidemiologic transition"]]),
P("gg004","1.1","Name a megacity (more than 10 million people).","Chengdu",[
  ["Tokyo",25],["Delhi",15,"new delhi"],["Shanghai",12],["Mumbai",10,"bombay"],["New York",8,"new york city","nyc"],["São Paulo",8,"sao paulo"],["Mexico City",8],["Beijing",8],
  ["Cairo",6],["Dhaka",5],["Lagos",5],["Jakarta",4],["Karachi",4],["Istanbul",4],["Kolkata",3,"calcutta"],["Buenos Aires",3],["Manila",3,"metro manila"],["Osaka",3],["Moscow",3],
  ["Los Angeles",3,"la"],["Seoul",3],["London",3],["Bangkok",2],["Paris",2],["Guangzhou",2],["Shenzhen",2],["Chongqing",2],["Rio de Janeiro",2,"rio"],["Kinshasa",1.5],["Lima",1.5],
  ["Lahore",1.5],["Bengaluru",1.5,"bangalore"],["Chennai",1,"madras"],["Hyderabad",1],["Tianjin",1],["Chengdu",.4]]),
P("gg005","1.2","Name a cause of migration (a push or pull factor).","Chain migration",[
  ["Jobs / employment",25,"jobs","employment","work","job opportunities"],["War / conflict",18,"war","conflict","violence"],["Higher wages",8,"wages","better pay","money","income"],["Poverty",8],
  ["Persecution",8,"discrimination","religious persecution"],["Natural disasters",8,"disaster","hazards","earthquakes","floods"],["Better education",8,"education","schools"],["Better healthcare",6,"healthcare","health care"],
  ["Family reunion",6,"family","joining family"],["Safety / political freedom",6,"safety","freedom","political freedom"],["Better quality of life",6,"quality of life","standard of living"],["Climate change",5],
  ["Famine / food shortage",4,"famine","food shortage","hunger"],["Chain migration",.4,"migrant networks","diaspora networks"]]),
P("gg006","1.2","Name a type of migration.","Transhumance",[
  ["Rural–urban",15,"rural to urban","rural urban"],["Internal",15,"internal migration"],["International",15,"international migration","emigration","immigration"],["Forced",12,"involuntary","forced migration"],
  ["Voluntary",12,"voluntary migration"],["Economic",8,"economic migration","labour migration"],["Refugees / asylum",8,"refugee","refugees","asylum","asylum seekers"],["Seasonal",5],
  ["Temporary",3],["Permanent",3],["Counter-urbanisation",3,"urban to rural","counterurbanisation","counter urbanization"],["Step migration",2],["Return migration",2],
  ["Internally displaced people",2,"idp","idps","internally displaced"],["Circular migration",1],["Transhumance",.4]]),
P("gg007","1.3","Name a consequence of an ageing population.","Grey vote",[
  ["Higher pension costs",25,"pensions","pension costs"],["Pressure on healthcare",20,"healthcare costs","health care","pressure on hospitals"],["Smaller workforce",15,"labour shortage","labor shortage","fewer workers","shrinking workforce"],
  ["Higher dependency ratio",12,"dependency ratio","elderly dependency","old age dependency"],["Higher taxes",8,"taxes"],["Raised retirement age",6,"retirement age","later retirement"],["More care homes needed",5,"care homes","social care"],
  ["Immigration to fill jobs",4,"immigration","migrant workers"],["Silver economy",3,"grey pound","silver spending","grey economy"],["Fewer schools needed",3,"school closures"],
  ["Grandparents providing childcare",2,"grandparents","volunteering"],["Grey vote",.4,"grey power","older voters"]]),
P("gg008","1.3","Name a population policy or strategy a government might use.","Graduate Mothers' Scheme",[
  ["One-child policy",25,"one child policy","china one child"],["Family planning / contraception",15,"family planning","contraception","free contraception"],["Baby bonus / child benefits",10,"baby bonus","child benefit","cash incentives"],
  ["Immigration policy",8,"immigration","points based immigration","points system"],["Educating women",8,"female education","education for women","girls education"],["Two- or three-child policy",8,"two child policy","three child policy"],
  ["Paid parental leave",6,"parental leave","maternity leave"],["Raising the retirement age",5,"retirement age"],["Pro-natalist policy",4,"pro natalist","pronatalist"],["Anti-natalist policy",4,"anti natalist","antinatalist"],
  ["Free childcare",4,"childcare"],["Tax breaks for families",3,"tax breaks"],["Sterilisation campaigns",1.5,"sterilisation","sterilization"],["Graduate Mothers' Scheme",.4,"graduate mothers scheme","singapore graduate mothers"]]),
P("gg009","1.3","Name a way gender inequality shows up in population or development data.","Gap in land ownership",[
  ["Gender pay gap",15,"pay gap","wage gap","lower pay"],["Lower female literacy",15,"female literacy","literacy"],["Sex ratio imbalance",10,"sex ratio","missing women","more boys"],
  ["Child marriage",8,"early marriage"],["Lower female school enrolment",8,"girls out of school","school enrolment","education gap"],["Maternal mortality",8],["Fewer women in parliament",5,"political representation","women in politics"],
  ["Sex-selective abortion",5,"female infanticide","sex selective abortion"],["Gender Inequality Index",4,"gii"],["Unpaid care work",3,"housework","unpaid work"],["Women outliving men",3,"life expectancy gap"],
  ["Gap in land ownership",.4,"land ownership","land rights"]]),
P("gg010","1.3","Name a challenge or opportunity created by rapid population growth.","Youth bulge",[
  ["Housing shortages / slums",15,"housing shortage","slums","informal settlements","housing"],["Unemployment",12],["Food shortages",12,"food shortage","famine"],["Water shortages",10,"water shortage"],
  ["Overcrowding",10],["Pressure on schools",8,"schools","education"],["Pressure on healthcare",8,"healthcare","hospitals"],["Deforestation",6],["Pollution",6],["Traffic congestion",5,"congestion","traffic"],
  ["Demographic dividend",4,"large workforce","more workers"],["High youth dependency",4,"young dependents","youth dependency"],["Youth bulge",.4]]),
/* ---------- 2 Global climate ---------- */
P("gg011","2.1","Name a greenhouse gas.","Nitrogen trifluoride",[
  ["Carbon dioxide",30,"co2"],["Methane",20,"ch4"],["Water vapour",12,"water vapor","h2o","water"],["Nitrous oxide",8,"n2o"],["Ozone",4,"o3"],["CFCs",4,"chlorofluorocarbons","cfc"],
  ["HFCs",2,"hydrofluorocarbons"],["Sulfur hexafluoride",1,"sf6","sulphur hexafluoride"],["Nitrogen trifluoride",.4,"nf3"]],
  [[["oxygen","nitrogen","argon","hydrogen"],"That gas doesn't trap infrared radiation, so it isn't a greenhouse gas."]]),
P("gg012","2.1","Name a human activity that adds to the enhanced greenhouse effect.","Draining peatlands",[
  ["Burning fossil fuels",30,"fossil fuels","burning coal","burning oil","coal","driving cars","cars","power stations"],["Deforestation",20,"cutting down trees","logging"],["Cattle farming",12,"livestock","cows","beef","farming animals"],
  ["Industry",6,"factories"],["Flying",5,"aviation","planes","air travel"],["Fertiliser use",5,"fertilizer","fertilisers"],["Rice paddies",5,"rice","rice farming"],["Landfill",5,"rubbish","waste"],
  ["Cement production",3,"cement"],["Draining peatlands",.4,"peat drainage","draining peat","peatlands"]]),
P("gg013","2.1","Name a natural factor that changes the global energy balance.","Aerosols / global dimming",[
  ["Volcanic eruptions",15,"volcanoes","volcanic ash"],["Solar output",15,"solar radiation","sun","solar variation","sunspots","solar activity"],["Albedo",10,"reflectivity"],
  ["Milankovitch cycles",8,"orbital changes","eccentricity","obliquity","precession","axial tilt"],["Ocean currents",8,"currents"],["El Niño",6,"el nino","enso","la nina"],["Clouds",6,"cloud cover"],
  ["Water vapour",5,"water vapor"],["Ice cover",4,"ice","snow cover"],["Continental drift",2,"plate tectonics"],["Aerosols / global dimming",.4,"aerosols","global dimming"]]),
P("gg014","2.1","Name a positive feedback loop in the climate system.","Amazon dieback",[
  ["Ice–albedo feedback",20,"ice albedo","melting ice","albedo","sea ice melting"],["Permafrost thaw",18,"permafrost","methane from permafrost","thawing permafrost"],["Water vapour feedback",12,"water vapour","water vapor"],
  ["Forest dieback / wildfires",8,"wildfires","forest fires","forest dieback"],["Warmer oceans absorb less CO2",6,"ocean co2","oceans absorb less carbon"],["Methane hydrates",3,"clathrates","clathrate gun"],
  ["Cloud feedback",3,"clouds"],["Amazon dieback",.4,"amazon"]]),
P("gg015","2.2","Name a consequence of global climate change.","AMOC slowdown",[
  ["Sea level rise",25,"rising sea levels","sea levels rising"],["Melting glaciers and ice caps",18,"melting ice","melting glaciers","ice caps melting","melting ice caps"],["More extreme weather",15,"extreme weather","storms","hurricanes"],
  ["Droughts",10,"drought"],["Flooding",10,"floods"],["Coral bleaching",8],["Heatwaves",8,"heat waves"],["Biodiversity loss",6,"extinction","species extinction"],["Crop failure",6,"food shortages","lower crop yields"],
  ["Wildfires",6,"forest fires"],["Ocean acidification",5,"acidification"],["Climate refugees",4,"migration","climate migrants"],["Spread of disease",4,"malaria spreading","disease"],
  ["Permafrost thaw",3,"permafrost"],["Shifting biomes",2,"species migration"],["AMOC slowdown",.4,"gulf stream weakening","thermohaline slowdown","amoc"]]),
P("gg016","2.2","Name a group of people or a place especially vulnerable to climate change.","Glacier-fed Himalayan communities",[
  ["Low-lying islands",20,"maldives","tuvalu","kiribati","small island states","islands"],["The poor / low-income countries",12,"poor people","lics","poverty","developing countries"],["Bangladesh",10],
  ["Subsistence farmers",10,"farmers"],["Coastal cities",10,"coastal communities","coasts"],["Arctic communities",6,"inuit","arctic"],["The elderly",6,"elderly","old people"],["The Sahel",6,"sahel"],
  ["Indigenous peoples",5,"indigenous"],["Slum dwellers",4,"slums"],["Women",3],["Children",3],["The Netherlands",2,"netherlands"],["Venice",2],["Mega-deltas",1,"deltas","nile delta","mekong delta"],
  ["Glacier-fed Himalayan communities",.4,"himalayan communities","glacier fed communities","himalaya"]]),
P("gg017","2.2","Name an impact of climate change on the oceans.","Deoxygenation",[
  ["Sea level rise",25,"rising sea levels"],["Ocean warming",15,"warming","warmer oceans"],["Ocean acidification",15,"acidification"],["Coral bleaching",15],["Melting sea ice",10,"sea ice"],
  ["Fish moving to new areas",6,"fish migration","fish stocks moving"],["Changing currents",6,"currents","gulf stream"],["Stronger tropical storms",6,"hurricanes","stronger storms"],["Thermal expansion",4],
  ["Deoxygenation",.4,"dead zones","less oxygen"]]),
P("gg018","2.3","Name a mitigation strategy for climate change.","Biochar",[
  ["Renewable energy",25,"solar","wind","solar power","wind power","renewables"],["Planting trees",15,"afforestation","reforestation","trees"],["Carbon tax",10],["Carbon capture and storage",8,"ccs","carbon capture"],
  ["Electric cars",8,"electric vehicles","evs"],["Public transport",6],["Energy efficiency",6,"insulation"],["Nuclear power",5,"nuclear"],["Carbon trading",5,"emissions trading","cap and trade"],
  ["Paris Agreement",4],["Eating less meat",4,"vegetarian diet","less meat"],["Geoengineering",3,"solar radiation management"],["Reducing deforestation (REDD+)",3,"redd","redd+","stopping deforestation"],["Biochar",.4]]),
P("gg019","2.3","Name an adaptation strategy for climate change.","Saltwater-tolerant rice",[
  ["Sea walls / flood defences",20,"sea walls","flood defences","flood defenses","levees"],["Drought-resistant crops",12,"drought resistant crops"],["Early warning systems",8,"warning systems"],
  ["Water storage / reservoirs",8,"reservoirs","water storage"],["Rainwater harvesting",6],["Managed retreat",6,"relocation","moving people"],["Houses on stilts",6,"stilts","raising buildings"],
  ["Mangrove planting",5,"mangroves"],["Floating houses or gardens",4,"floating houses","floating gardens","floating farms"],["Insurance",4],["Changing crops or planting dates",4,"crop rotation","changing crops"],
  ["Cooling centres",3,"air conditioning"],["Desalination",3],["Saltwater-tolerant rice",.4,"salt tolerant crops","salt tolerant rice"]]),
P("gg020","2.3","Name an international agreement or body that deals with climate change.","Glasgow Climate Pact",[
  ["Paris Agreement",30,"paris accord","paris"],["Kyoto Protocol",20,"kyoto"],["IPCC",12,"intergovernmental panel on climate change"],["COP summits",12,"cop","cop26","cop21","cop28","cop29","cop30"],
  ["UNFCCC",8],["Montreal Protocol",5,"montreal"],["Earth Summit (Rio 1992)",3,"rio summit","earth summit"],["Green Climate Fund",2],["Copenhagen Accord",1.5,"copenhagen"],["Loss and damage fund",1.5,"loss and damage"],
  ["Glasgow Climate Pact",.4,"glasgow pact"]]),
/* ---------- 3 Resources ---------- */
P("gg021","3.1","Name a measure of development or well-being.","Genuine Progress Indicator",[
  ["GDP per capita",25,"gdp","gross domestic product"],["HDI",20,"human development index"],["GNI per capita",10,"gni","gross national income"],["Life expectancy",10],["Literacy rate",8,"literacy"],
  ["Infant mortality",4],["Gender Inequality Index",4,"gii"],["Gini coefficient",4,"gini"],["Ecological footprint",4],["Multidimensional Poverty Index",3,"mpi"],["Happy Planet Index",3],
  ["Gross National Happiness",3,"bhutan"],["Social Progress Index",2],["Genuine Progress Indicator",.4,"gpi"]]),
P("gg022","3.1","Name a way rising wealth changes what people consume.","Nutrition transition",[
  ["Eating more meat",20,"more meat","meat"],["More car ownership",15,"more cars","cars"],["More energy use",15,"more energy","electricity"],["More waste",8,"waste"],["More water use",10,"water"],
  ["More flying and tourism",8,"flying","tourism","holidays"],["More electronics",6,"phones","gadgets"],["More processed food",5,"processed food","fast food"],["Bigger homes and air conditioning",5,"air conditioning","bigger houses"],
  ["Nutrition transition",.4]]),
P("gg023","3.1","Name an energy source.","Tar sands",[
  ["Coal",15],["Oil",15,"petroleum"],["Solar",15,"solar power"],["Wind",15,"wind power"],["Natural gas",12,"gas"],["Nuclear",10,"nuclear power","uranium"],["Hydroelectric",10,"hydro","hydropower","hep"],
  ["Geothermal",6],["Biomass / biofuels",6,"biomass","biofuel","biofuels"],["Tidal",4],["Wave",3],["Hydrogen",3],["Fuelwood",2,"firewood","wood"],["Tar sands",.4,"oil sands"]]),
P("gg024","3.2","Name a cause of water insecurity.","Virtual water exports",[
  ["Drought",20,"low rainfall","droughts"],["Over-abstraction",12,"overuse","over abstraction","overuse of groundwater"],["Pollution",12,"water pollution"],["Population growth",10],["Climate change",10],
  ["Lack of infrastructure (economic scarcity)",8,"economic water scarcity","lack of infrastructure","poverty"],["Irrigation",6,"agriculture"],["Conflict over rivers",4,"water conflict","conflict"],
  ["Saltwater intrusion",3,"salinisation"],["Glacier melt",2,"glaciers melting"],["Virtual water exports",.4,"virtual water"]]),
P("gg025","3.2","Name a consequence of food insecurity.","Kwashiorkor",[
  ["Malnutrition",20,"undernutrition"],["Starvation / famine",15,"starvation","famine","hunger"],["Stunting",10,"stunted growth"],["Child mortality",6,"children dying"],["Disease",6,"illness"],
  ["Migration",6],["Conflict / food riots",6,"food riots","riots","conflict"],["Lower productivity",4,"less able to work"],["Wasting",4],["Obesity from cheap food",2,"obesity"],["Kwashiorkor",.4]]),
P("gg026","3.2","Name an example of the water–food–energy nexus (where one resource affects another).","Solar-powered irrigation",[
  ["Irrigation needs energy",15,"irrigation pumps","pumping water"],["Biofuels use farmland",15,"biofuels"],["Hydroelectric dams affect water and farming",15,"dams","hydroelectric","hep dams"],
  ["Power stations need cooling water",10,"cooling water","power stations"],["Desalination needs energy",8,"desalination"],["Fracking uses water",5,"fracking"],["Fertiliser production needs gas",4,"fertiliser","fertilizer"],
  ["Solar-powered irrigation",.4,"solar irrigation","solar pumps"]]),
P("gg027","3.3","Name a resource stewardship strategy.","Biomimicry",[
  ["Recycling",25],["Reducing waste",12,"reduce","waste reduction"],["Reusing",10,"reuse"],["Renewable energy",10,"renewables"],["Circular economy",8],["Water conservation",8,"saving water"],
  ["Sustainable Development Goals",6,"sdgs","sdg"],["Sustainable farming",6,"organic farming"],["Cradle-to-cradle design",3,"cradle to cradle"],["Carbon offsetting",3,"offsetting"],["Fair trade",3],
  ["Biomimicry",.4]]),
P("gg028","3.3","Name one of the UN Sustainable Development Goals.","Partnerships for the goals",[
  ["No poverty",20,"end poverty","poverty"],["Zero hunger",18,"end hunger","hunger"],["Quality education",12,"education"],["Good health and well-being",12,"health","good health"],
  ["Clean water and sanitation",12,"clean water","sanitation"],["Gender equality",10],["Climate action",10,"climate"],["Affordable and clean energy",6,"clean energy"],["Life below water",4],["Life on land",4],
  ["Decent work and economic growth",4,"decent work"],["Reduced inequalities",3,"reduced inequality"],["Sustainable cities and communities",3,"sustainable cities"],
  ["Responsible consumption and production",2,"responsible consumption"],["Industry, innovation and infrastructure",2,"industry innovation and infrastructure","innovation"],["Peace, justice and strong institutions",2,"peace and justice","peace"],
  ["Partnerships for the goals",.4,"partnerships"]]),
P("gg029","3.3","Name a theory or view about population and resources.","Doughnut economics",[
  ["Malthus",25,"malthusian","thomas malthus","malthusian theory"],["Boserup",20,"boserupian","ester boserup","necessity is the mother of invention"],["Neo-Malthusian / Club of Rome",6,"neo malthusian","club of rome"],
  ["Limits to Growth",4],["Ehrlich: The Population Bomb",3,"ehrlich","population bomb"],["Resource optimists (Julian Simon)",3,"julian simon","cornucopian","optimists"],["Planetary boundaries",3],["Tipping points",3],
  ["Doughnut economics",.4,"kate raworth","raworth","doughnut"]]),
/* ---------- 4 Power, places and networks (HL) ---------- */
P("gg030","4.1","Name a global superpower or emerging power.","Indonesia",[
  ["USA",25,"united states","america","us"],["China",25],["Russia",12],["India",10],["European Union",6,"eu"],["Brazil",5],["Japan",5],["United Kingdom",4,"uk","britain"],["Germany",4],["France",3],
  ["Saudi Arabia",2],["South Africa",1],["Indonesia",.4]], [], HL),
P("gg031","4.1","Name a global or regional grouping of countries.","Shanghai Cooperation Organisation",[
  ["United Nations",20,"un"],["European Union",18,"eu"],["NATO",12],["G7",8,"g8"],["G20",8],["BRICS",8],["ASEAN",6],["African Union",5,"au"],["OPEC",5],["WTO",5,"world trade organization"],
  ["Commonwealth",3],["Mercosur",3],["USMCA / NAFTA",3,"usmca","nafta"],["OECD",2],["Shanghai Cooperation Organisation",.4,"sco"]], [], HL),
P("gg032","4.1","Name a measure of a country's global participation.","AT Kearney Globalization Index",[
  ["Trade (exports and imports)",20,"trade","exports","imports"],["Foreign direct investment",15,"fdi"],["KOF Globalisation Index",10,"kof","kof index"],["Migration",10],["Remittances",8],
  ["Internet users",8,"internet access","internet"],["Tourism",6,"tourist arrivals"],["Membership of global organisations",4,"membership"],["Data flows",3],["AT Kearney Globalization Index",.4,"at kearney","kearney"]], [], HL),
P("gg033","4.2","Name a type of global flow.","Reshoring",[
  ["Trade / goods",20,"trade","goods","products"],["Money / finance",15,"money","finance","capital"],["Migration / people",15,"migration","people"],["Information / data",12,"data","information"],
  ["Remittances",8],["Foreign direct investment",8,"fdi"],["Tourism",6],["Aid",6],["Ideas and culture",5,"culture","ideas"],["Illegal flows",3,"drugs","people trafficking","smuggling"],["Reshoring",.4]], [], HL),
P("gg034","4.2","Name a transnational corporation (TNC).","Glencore",[
  ["Apple",20],["Nike",15],["McDonald's",15,"mcdonalds"],["Coca-Cola",12,"coke"],["Amazon",12],["Samsung",10],["Google",10,"alphabet"],["Toyota",8],["Microsoft",8],["Unilever",5],["Nestlé",5,"nestle"],
  ["Shell",5],["Walmart",5],["Starbucks",5],["Tata",3],["Huawei",3],["Inditex / Zara",3,"zara","inditex"],["IKEA",3],["Volkswagen",3,"vw"],["H&M",2,"h and m"],["BP",2],["Foxconn",2],["Glencore",.4]], [], HL),
P("gg035","4.2","Name a type of international aid.","Conditional cash transfers",[
  ["Bilateral aid",15,"bilateral"],["Multilateral aid",15,"multilateral"],["Emergency / humanitarian aid",15,"emergency aid","humanitarian aid","disaster relief"],["Development aid",10,"long term aid","development"],
  ["Tied aid",10,"tied"],["NGO / charity aid",10,"ngo","charity","voluntary aid"],["Loans",6],["Food aid",5],["Debt relief",4],["Military aid",4],["Microfinance",3,"microcredit"],
  ["Conditional cash transfers",.4,"cash transfers"]], [], HL),
P("gg036","4.3","Name a factor that has sped up globalisation.","Time–space compression",[
  ["The internet",25,"internet"],["Cheap air travel",10,"air travel","planes","flights"],["Containerisation",10,"container ships","shipping containers","shipping"],["Free trade agreements",10,"free trade","trade agreements"],
  ["Mobile phones",8,"smartphones","phones"],["TNCs",6,"multinationals"],["WTO",5],["Financial deregulation",3,"deregulation"],["English as a global language",3,"english"],["Fall of the Iron Curtain",3,"end of the cold war"],
  ["Time–space compression",.4,"time space compression","shrinking world"]], [], HL),
P("gg037","4.3","Name something that slows or resists globalisation.","Data localisation laws",[
  ["Tariffs / trade barriers",20,"tariffs","trade barriers"],["Protectionism",12],["Border controls",10,"borders","visas"],["Censorship",8,"great firewall","internet censorship"],["Nationalism",6],["Brexit",6],
  ["Sanctions",6,"embargoes"],["Physical barriers",5,"mountains","being landlocked","landlocked"],["Language barriers",4,"language"],["Pandemics",4,"covid","covid 19"],["Anti-globalisation movements",4,"protests","anti globalisation"],
  ["Trade wars",3,"trade war"],["Data localisation laws",.4,"data localisation","data localization"]], [], HL),
P("gg038","4.3","Name an environmental impact of global interactions.","Carbon leakage",[
  ["Emissions from transport",20,"carbon emissions","shipping emissions","air pollution","emissions"],["Deforestation for exports",12,"deforestation","palm oil"],["Pollution havens",8,"dirty industries moved","pollution haven"],
  ["E-waste dumping",8,"e waste","ewaste","electronic waste"],["Invasive species",6],["Plastic pollution",6,"plastic"],["Food miles",6],["Water use in exporting regions",4,"virtual water","water use"],["Carbon leakage",.4]], [], HL),
/* ---------- 5 Human development and diversity (HL) ---------- */
P("gg039","5.1","Name a way to reduce poverty or improve development.","Bolsa Família",[
  ["Education",20,"schools"],["Microfinance",10,"microcredit","microloans","grameen bank"],["Aid",10],["Fair trade",8],["Clean water",8,"water supply"],["Healthcare",8,"vaccines"],["Debt relief",6],
  ["Infrastructure",6,"roads","electricity"],["Jobs / FDI",6,"jobs","fdi","investment"],["Remittances",5],["Empowering women",5,"womens empowerment","gender equality"],["Mobile banking",3,"m pesa","mpesa"],["Land reform",2],
  ["Bolsa Família",.4,"bolsa familia","conditional cash transfers","cash transfers"]], [], HL),
P("gg040","5.1","Name a cause of inequality between countries.","Resource curse",[
  ["Colonialism",15,"colonial history","colonisation"],["Corruption",10],["Debt",10],["Unfair trade rules",10,"unfair trade","trade rules"],["Conflict",8,"war"],["Dependence on primary products",6,"primary products","commodities"],
  ["Poor education",6,"lack of education"],["Disease",6,"hiv","malaria"],["Natural hazards / climate",6,"hazards","climate","natural disasters"],["Being landlocked",6,"landlocked","geography"],["Lack of infrastructure",6,"infrastructure"],
  ["Brain drain",4],["Resource curse",.4,"paradox of plenty"]], [], HL),
P("gg041","5.1","Name an international organisation that funds or supports development.","New Development Bank",[
  ["World Bank",25],["IMF",20,"international monetary fund"],["UNDP",12,"un","united nations"],["UNICEF",8],["Oxfam",6],["WHO",6,"world health organization"],["Red Cross",5],["Gates Foundation",4,"bill and melinda gates foundation"],
  ["Save the Children",4],["Asian Development Bank",3,"adb"],["African Development Bank",2,"afdb"],["New Development Bank",.4,"brics bank","ndb"]], [], HL),
P("gg042","5.2","Name a way culture spreads around the world.","Online gaming communities",[
  ["Social media",20,"tiktok","instagram","youtube"],["Films / Hollywood",12,"films","movies","hollywood"],["Music",12],["Migration / diaspora",10,"migration","diaspora"],["The internet",8,"internet"],
  ["Tourism",8],["TNCs and brands",8,"brands","tncs"],["Food chains",6,"fast food","mcdonalds"],["Sport",6,"football"],["English language",5,"language","english"],["K-pop / Korean wave",4,"kpop","k pop","korean wave","hallyu"],
  ["Online gaming communities",.4,"online gaming","video games","gaming"]], [], HL),
P("gg043","5.2","Name a term for how cultures change through global interaction.","Creolisation",[
  ["Cultural diffusion",15,"diffusion"],["Cultural imperialism",10],["Homogenisation",10,"cultural homogenisation","homogenization"],["Hybridisation",8,"cultural hybridity","hybridization"],
  ["Glocalisation",8,"glocalization"],["Americanisation",8,"americanization"],["Westernisation",6,"westernization"],["McDonaldisation",6,"mcdonaldization"],["Acculturation",4],["Assimilation",4],
  ["Heterogenisation",3,"heterogenization","cultural heterogenisation"],["Creolisation",.4,"creolization"]], [], HL),
P("gg044","5.2","Name a diaspora (a community living outside its homeland).","Cape Verdean",[
  ["Indian",15,"indian diaspora","indians"],["Chinese",15,"chinese diaspora"],["Irish",10],["Jewish",10],["Mexican",8],["African",6,"african diaspora","black diaspora"],["Filipino",6,"philippine"],["Italian",5],
  ["Lebanese",4],["Armenian",4],["Polish",4],["Syrian",4],["Palestinian",3],["Turkish",3],["Somali",2],["Korean",2],["Cape Verdean",.4,"cape verde"]], [], HL),
P("gg045","5.3","Name a local or grassroots response to globalisation.","Slow Food movement",[
  ["Buying local",15,"local produce","shop local"],["Fair trade",15],["Protests / anti-globalisation movements",10,"protests","anti globalisation"],["Boycotts",8,"boycott"],["Farmers' markets",6,"farmers markets"],
  ["Trade unions / strikes",6,"unions","strikes"],["Ethical consumerism",6,"ethical shopping"],["NGOs / civil society",6,"ngos","civil society"],["Occupy movement",3,"occupy"],["Labour rights campaigns",3,"labour rights"],
  ["Local currencies",3,"local currency","bristol pound"],["Transition towns",2],["Slow Food movement",.4,"slow food"]], [], HL),
P("gg046","5.3","Name a way governments control the flow of goods, people or information.","Capital controls",[
  ["Tariffs",15],["Visas",10,"visa"],["Quotas",10],["Border walls",10,"walls","border fences"],["Internet censorship",10,"censorship","great firewall"],["Sanctions / embargoes",8,"sanctions","embargo","embargoes"],
  ["Immigration caps",6,"immigration limits","points based system"],["Subsidies",6],["Export bans",4],["Data laws",3,"gdpr"],["Capital controls",.4]], [], HL),
P("gg047","5.3","Name an ethical issue in global trade.","Greenwashing",[
  ["Child labour",20,"child labor"],["Sweatshops",18,"sweatshop"],["Low wages",12,"poor pay"],["Unsafe working conditions",8,"rana plaza","unsafe factories","working conditions"],["Environmental damage",8,"pollution"],
  ["Exploiting farmers",6,"low prices for farmers"],["Forced labour",5,"modern slavery","forced labor"],["Land grabbing",4,"land grabs"],["Conflict minerals",4,"blood diamonds"],["Tax avoidance",4,"tax havens"],["Greenwashing",.4]], [], HL),
/* ---------- 6 Global risks and resilience (HL) ---------- */
P("gg048","6.1","Name a geopolitical or economic risk to global interactions.","Chokepoint blockade",[
  ["War / conflict",15,"war","conflict"],["Financial crisis",12,"recession","economic crisis"],["Pandemic",10,"covid","covid 19"],["Terrorism",10],["Trade war",8,"tariffs"],["Cyber attacks",8,"cyber attack","hacking"],
  ["Supply chain disruption",8,"supply chains"],["Sanctions",5],["Oil price shock",5,"oil prices"],["Debt crisis",4],["Nuclear threat",4,"nuclear war"],["Chokepoint blockade",.4,"blocked canal","suez blockage","chokepoint"]], [], HL),
P("gg049","6.1","Name a shipping chokepoint or strategic strait.","Lombok Strait",[
  ["Suez Canal",25,"suez"],["Panama Canal",20,"panama"],["Strait of Hormuz",12,"hormuz"],["Strait of Malacca",10,"malacca"],["Strait of Gibraltar",8,"gibraltar"],["Bosphorus",6,"bosporus","turkish straits"],
  ["Bab-el-Mandeb",4,"bab el mandeb"],["English Channel",4,"strait of dover","dover"],["Taiwan Strait",3],["Cape of Good Hope",2],["Danish straits",1],["Lombok Strait",.4,"lombok"]], [], HL),
P("gg050","6.1","Name a global economic crisis.","Tequila crisis",[
  ["2008 financial crisis",25,"2008 crash","global financial crisis","credit crunch","2008"],["Great Depression",20,"wall street crash","1929 crash","1929"],["COVID-19 recession",12,"covid recession","covid"],
  ["1970s oil crisis",8,"oil crisis","1973 oil crisis"],["Asian financial crisis",6,"1997 asian financial crisis"],["Dot-com bubble",5,"dot com crash"],["Eurozone debt crisis",5,"euro crisis","greek debt crisis"],
  ["Black Monday 1987",3,"black monday"],["Tequila crisis",.4,"mexican peso crisis"]], [], HL),
P("gg051","6.2","Name a transboundary pollution problem.","Persistent organic pollutants",[
  ["Acid rain",20],["Ocean plastic",15,"plastic pollution","plastic"],["Air pollution / haze",10,"haze","smog","air pollution"],["Oil spills",10,"oil spill"],["Radioactive fallout",8,"chernobyl","fallout","nuclear fallout"],
  ["River pollution across borders",6,"river pollution"],["Ozone depletion",6,"ozone hole"],["E-waste",4,"e waste"],["Microplastics",3],["Persistent organic pollutants",.4,"pops","ddt"]], [], HL),
P("gg052","6.2","Name an environmental disaster that drew global attention.","Sandoz chemical spill",[
  ["Chernobyl",30],["Fukushima",20],["Deepwater Horizon",8,"bp oil spill","gulf oil spill"],["Bhopal",8],["Exxon Valdez",5],["Aral Sea",4],["Three Mile Island",3],["Love Canal",2],
  ["Baia Mare cyanide spill",1,"baia mare"],["Sandoz chemical spill",.4,"sandoz","rhine chemical spill"]], [], HL),
P("gg053","6.2","Name a global commons.","The deep seabed",[
  ["The oceans / high seas",20,"oceans","high seas","sea","ocean"],["The atmosphere",18,"atmosphere","air"],["Antarctica",12],["Outer space",8,"space"],["The internet / cyberspace",5,"internet","cyberspace"],
  ["The Arctic",4,"arctic"],["Biodiversity",3],["The climate",3,"climate"],["The deep seabed",.4,"deep seabed","seabed","the area","deep sea floor"]], [], HL),
P("gg054","6.3","Name a way to build resilience to global risks.","Seed vaults",[
  ["Early warning systems",10,"warning systems"],["International cooperation",10,"cooperation","treaties"],["Diversifying supply chains",12,"diversify","diverse supply chains"],["Insurance",8],["Emergency planning",8,"disaster planning"],
  ["Stockpiling",6,"stockpiles","reserves"],["Cybersecurity",6,"cyber security"],["Energy security / renewables",6,"renewables","energy security"],["Local food production",6,"local food"],["Reshoring",4],["Social safety nets",4,"welfare"],
  ["Seed vaults",.4,"svalbard seed vault","seed bank","seed banks"]], [], HL),
P("gg055","6.3","Name a technology that could reduce a global risk.","Direct air capture",[
  ["Renewable energy",15,"solar panels","wind turbines","renewables"],["Vaccines",12,"mrna vaccines"],["Carbon capture and storage",10,"ccs","carbon capture"],["GM crops",8,"genetically modified crops","gmo"],
  ["Desalination",6],["Satellites / GIS",6,"satellites","gis","remote sensing"],["Electric vehicles",6,"electric cars","evs"],["AI early warning",4,"ai","artificial intelligence"],["Smart grids",4],
  ["Vertical farming",4],["Lab-grown meat",4,"cultured meat","lab grown meat"],["Direct air capture",.4,"dac"]], [], HL),
P("gg056","6.3","Name a civil society group or NGO that campaigns on global issues.","Survival International",[
  ["Greenpeace",20],["Amnesty International",12,"amnesty"],["Oxfam",12],["WWF",12,"world wildlife fund","world wide fund for nature"],["Red Cross",10,"red crescent","icrc"],
  ["Médecins Sans Frontières",8,"msf","doctors without borders","medecins sans frontieres"],["Save the Children",6],["Extinction Rebellion",6,"xr"],["Friends of the Earth",4],["Human Rights Watch",4],
  ["Fridays for Future",4,"greta thunberg"],["Survival International",.4]], [], HL),
/* ---------- A Freshwater ---------- */
P("gg057","A.1","Name a store or flow in the drainage basin system.","Throughfall",[
  ["Precipitation",15,"rain","rainfall"],["Evaporation",12],["Infiltration",12],["Surface runoff",12,"runoff","overland flow","surface flow"],["Transpiration",10],["Throughflow",8],["Interception",8],
  ["Groundwater",8,"groundwater store","aquifer"],["Percolation",6],["Channel flow",6,"river flow","channel storage"],["Evapotranspiration",5],["Soil moisture",5,"soil water"],["Surface storage",3,"puddles","lakes"],
  ["Baseflow",3,"groundwater flow"],["Stemflow",2],["Throughfall",.4,"through fall","drip"]]),
P("gg058","A.1","Name a river landform.","Alluvial fan",[
  ["Meander",20,"meanders"],["Waterfall",18],["Ox-bow lake",15,"oxbow lake","oxbow"],["Floodplain",10,"flood plain"],["Delta",10],["Levee",8,"levees"],["V-shaped valley",8,"v shaped valley"],
  ["Gorge",6],["Interlocking spurs",4],["Braided channel",4,"braiding"],["Plunge pool",4],["Rapids",4],["Estuary",3],["Point bar",3,"slip off slope"],["River cliff",2],["Alluvial fan",.4]]),
P("gg059","A.1","Name a process of river erosion or transport.","Cavitation",[
  ["Hydraulic action",18],["Abrasion",15,"corrasion"],["Attrition",12],["Solution",12,"corrosion"],["Traction",10],["Saltation",10],["Suspension",10],["Cavitation",.4]]),
P("gg060","A.2","Name a factor that increases flood risk.","Antecedent rainfall",[
  ["Heavy rainfall",20,"intense rainfall","rain","storms"],["Urbanisation",15,"impermeable surfaces","concrete","tarmac","urbanization"],["Deforestation",12],["Saturated soil",10,"saturated ground"],
  ["Steep slopes",8,"steep relief"],["Snowmelt",8,"melting snow"],["Impermeable rock",6,"clay","granite"],["Building on floodplains",6,"floodplain development"],["High drainage density",3],["Channel straightening",3],
  ["Antecedent rainfall",.4,"previous rainfall"]]),
P("gg061","A.2","Name a feature of a storm hydrograph.","Bankfull discharge",[
  ["Peak discharge",15],["Lag time",15],["Rising limb",12],["Falling limb",12,"recession limb"],["Baseflow",10,"base flow"],["Peak rainfall",8],["Storm flow",5,"quickflow","quick flow"],
  ["Bankfull discharge",.4,"bankfull"]]),
P("gg062","A.2","Name a flood mitigation strategy.","Washlands",[
  ["Dams and reservoirs",15,"dams","dam","reservoirs"],["Levees / embankments",15,"levees","embankments"],["Afforestation",10,"planting trees"],["Floodplain zoning",10,"land use zoning","zoning"],
  ["Flood warnings",8,"warning systems"],["Flood walls",8],["Channel straightening / dredging",8,"dredging","channelisation","straightening"],["Wetland restoration",6,"wetlands"],["Diversion spillways",4,"spillways","flood relief channels"],
  ["Sandbags",4],["Flood insurance",3,"insurance"],["Sustainable urban drainage",3,"suds"],["Washlands",.4]]),
P("gg063","A.3","Name a cause of freshwater pollution.","Pharmaceutical residues",[
  ["Sewage",15,"raw sewage"],["Fertiliser runoff",15,"fertilizer","fertilisers","eutrophication","nitrates"],["Industrial waste",12,"factories","industry"],["Plastic",8,"plastics"],["Oil spills",6,"oil"],
  ["Pesticides",6],["Mining",4,"acid mine drainage"],["Acid rain",3],["Thermal pollution",2],["Pharmaceutical residues",.4,"medicines","drugs in water","pharmaceuticals"]]),
P("gg064","A.3","Name a type of water scarcity, or a way it is measured.","Grey water footprint",[
  ["Physical water scarcity",18,"physical scarcity"],["Economic water scarcity",18,"economic scarcity"],["Water stress",12],["Falkenmark indicator",8,"falkenmark"],["Water footprint",6],
  ["Water per person",4,"per capita water","water availability"],["Virtual water",4],["Grey water footprint",.4,"grey water"]]),
P("gg065","A.3","Name an impact of agriculture on water.","Nitrate vulnerable zones",[
  ["Over-abstraction for irrigation",15,"irrigation","over abstraction"],["Eutrophication",15,"algal blooms"],["Salinisation",12,"salinization","salt"],["Falling water tables",8,"lower water table"],
  ["Pesticide contamination",6,"pesticides"],["Silting from soil erosion",6,"soil erosion","siltation"],["Shrinking Aral Sea",4,"aral sea"],["Nitrate vulnerable zones",.4,"nvz"]]),
P("gg066","A.4","Name a large dam project.","Xiaolangdi Dam",[
  ["Three Gorges Dam",25,"three gorges"],["Hoover Dam",15,"hoover"],["Aswan High Dam",12,"aswan"],["Grand Ethiopian Renaissance Dam",8,"gerd"],["Itaipu Dam",5,"itaipu"],
  ["Sardar Sarovar (Narmada)",4,"narmada","sardar sarovar"],["Kariba Dam",3,"kariba"],["Belo Monte",2],["Atatürk Dam",2,"ataturk dam"],["Xiaolangdi Dam",.4,"xiaolangdi"]]),
P("gg067","A.4","Name a strategy for managing water sustainably.","Fog harvesting",[
  ["Rainwater harvesting",15],["Drip irrigation",12],["Desalination",10],["Water meters",8,"metering"],["Recycling grey water",8,"grey water","greywater","water recycling"],
  ["Integrated drainage basin management",6,"idbm","integrated management"],["Water pricing",5],["Wetland restoration",5],["Fixing leaks",5,"reducing leaks"],["Groundwater recharge",3],["Fog harvesting",.4,"fog nets"]]),
P("gg068","A.4","Name a river whose basin is shared by several countries.","Syr Darya",[
  ["Nile",20],["Mekong",12],["Danube",12],["Amazon",10],["Rhine",8],["Indus",8],["Tigris–Euphrates",8,"tigris","euphrates"],["Ganges–Brahmaputra",6,"ganges","brahmaputra"],["Colorado",5],
  ["Jordan",4],["Congo",4],["Niger",3],["Zambezi",3],["Syr Darya",.4,"amu darya"]]),
/* ---------- B Oceans and coastal margins ---------- */
P("gg069","B.1","Name an ocean current.","Oyashio",[
  ["Gulf Stream",25],["North Atlantic Drift",10,"north atlantic current"],["Humboldt Current",8,"peru current","humboldt"],["California Current",5],["Kuroshio",4],["Antarctic Circumpolar Current",4,"circumpolar"],
  ["Labrador Current",4,"labrador"],["Canary Current",3,"canary"],["Benguela Current",3,"benguela"],["East Australian Current",3],["Agulhas Current",2,"agulhas"],["Oyashio",.4]]),
P("gg070","B.1","Name an ocean–atmosphere phenomenon or process.","Southern Oscillation Index",[
  ["El Niño",25,"el nino","enso"],["La Niña",15,"la nina"],["Thermohaline circulation",10,"ocean conveyor belt","global conveyor belt","thermohaline"],["Tropical cyclones",8,"hurricanes","typhoons","cyclones"],
  ["Upwelling",8],["Ocean carbon sink",6,"carbon sink"],["Monsoon",5],["Walker circulation",4],["Indian Ocean Dipole",2],["Southern Oscillation Index",.4,"soi"]]),
P("gg071","B.1","Name a reason the oceans matter for the climate.","Biological pump",[
  ["Absorb carbon dioxide",20,"carbon sink","absorb co2"],["Store heat",15,"heat store","absorb heat"],["Move heat with currents",15,"currents","heat transfer"],["Supply moisture for rain",10,"evaporation","water vapour"],
  ["Fuel tropical storms",6,"hurricanes"],["Phytoplankton make oxygen",6,"phytoplankton","oxygen"],["Keep coasts mild",6,"maritime climate","moderate temperatures"],["Biological pump",.4]]),
P("gg072","B.2","Name a coastal landform.","Cuspate foreland",[
  ["Beach",15],["Cliff",15],["Arch",10],["Stack",10],["Spit",10],["Headland / bay",10,"headland","bay","headlands and bays"],["Cave",8],["Wave-cut platform",6,"wave cut platform"],["Sand dunes",6,"dunes"],
  ["Stump",5],["Tombolo",4],["Salt marsh",4,"saltmarsh"],["Bar",3],["Lagoon",3],["Cuspate foreland",.4]]),
P("gg073","B.2","Name a coastal process.","Salt crystallisation",[
  ["Longshore drift",18,"lsd"],["Hydraulic action",12],["Abrasion",12,"corrasion"],["Attrition",8],["Deposition",8],["Solution",6,"corrosion"],["Weathering",6,"freeze thaw"],["Swash and backwash",6,"swash","backwash"],
  ["Mass movement",4,"slumping","landslides"],["Constructive waves",4],["Destructive waves",4],["Wave refraction",3],["Salt crystallisation",.4,"salt weathering","salt crystallization"]]),
P("gg074","B.2","Name a coastal ecosystem.","Machair",[
  ["Coral reef",25,"coral reefs","coral"],["Mangroves",20,"mangrove"],["Salt marsh",10,"saltmarsh"],["Sand dunes",8,"dunes"],["Estuary",6,"estuaries"],["Rocky shore",5,"rock pools"],["Seagrass meadows",4,"seagrass"],
  ["Lagoon",3],["Kelp forest",3,"kelp"],["Machair",.4]]),
P("gg075","B.3","Name a hard engineering coastal defence.","Tetrapods",[
  ["Sea wall",25,"sea walls","seawall"],["Groynes",18,"groyne"],["Rock armour",12,"riprap","rip rap","rock armor","boulders"],["Gabions",8],["Revetments",8],["Breakwater",8],["Tidal barrier",4,"barrage"],
  ["Offshore reef",3,"artificial reef"],["Tetrapods",.4]]),
P("gg076","B.3","Name a soft engineering or management approach for coasts.","Shoreline Management Plan",[
  ["Beach nourishment",20,"beach replenishment"],["Managed retreat",15,"managed realignment"],["Dune regeneration",10,"dune fencing","marram grass"],["Mangrove planting",8,"mangroves"],
  ["Hold the line",6],["Do nothing",6,"no active intervention"],["Integrated coastal zone management",6,"iczm"],["Beach reprofiling",4],["Marsh creation",4,"salt marsh creation"],
  ["Shoreline Management Plan",.4,"smp"]]),
P("gg077","B.3","Name a competing use that causes conflict on coasts.","Exclusive Economic Zone disputes",[
  ["Tourism vs conservation",12,"tourism"],["Fishing",10,"fishing vs conservation"],["Housing development",8,"housing","development"],["Ports and shipping",6,"ports","shipping"],["Oil and gas drilling",6,"oil drilling","oil"],
  ["Fish farms",5,"aquaculture"],["Offshore wind farms",4,"wind farms"],["Military use",3,"military"],["Exclusive Economic Zone disputes",.4,"eez disputes","eez"]]),
P("gg078","B.4","Name a threat to ocean ecosystems.","Deep-sea mining",[
  ["Overfishing",20],["Plastic pollution",20,"plastic","plastics"],["Ocean acidification",10,"acidification"],["Coral bleaching",10],["Oil spills",8],["Sewage / nutrient runoff",6,"sewage","nutrients","eutrophication"],
  ["Dead zones",4],["Bottom trawling",4,"trawling"],["Ghost nets",3,"ghost fishing"],["Deep-sea mining",.4,"deep sea mining","seabed mining"]]),
P("gg079","B.4","Name a way to manage or protect the oceans.","High Seas Treaty",[
  ["Marine protected areas",15,"mpas","mpa","marine reserves"],["Fishing quotas",15,"quotas"],["Banning single-use plastic",10,"plastic bans","banning plastic"],["Beach and ocean clean-ups",6,"clean ups","cleanups"],
  ["Net mesh size rules",6,"mesh size"],["UNCLOS",5,"law of the sea"],["No-take zones",4,"no take zones"],["Exclusive Economic Zones",4,"eez"],["Sustainable seafood labels",4,"msc label","msc"],["High Seas Treaty",.4,"bbnj"]]),
P("gg080","B.4","Name a valuable resource from the oceans.","Methane hydrates",[
  ["Fish",25,"fishing","seafood"],["Oil and gas",15,"oil","gas"],["Tourism",6],["Shipping routes",6,"shipping"],["Salt",6],["Tidal and wave energy",4,"tidal energy","wave energy"],["Manganese nodules",4,"minerals","nodules"],
  ["Seaweed",3],["Desalinated water",3,"desalination"],["Medicines",2,"pharmaceuticals"],["Methane hydrates",.4,"gas hydrates"]]),
/* ---------- C Extreme environments ---------- */
P("gg081","C.1","Name a type of extreme environment.","Altiplano",[
  ["Hot desert",20,"desert","deserts","sahara"],["Polar / Antarctica",15,"polar","antarctica","arctic","cold environment"],["High mountains",12,"mountains","high altitude"],["Tundra",8],["Ice cap / glacier",6,"glacier","ice sheet"],
  ["Periglacial",4],["Semi-arid",4,"semi arid","steppe"],["Altiplano",.4]]),
P("gg082","C.1","Name a reason extreme environments are hard to live in.","Whiteout",[
  ["Extreme temperatures",20,"too hot","too cold","temperature"],["Lack of water",15,"no water","aridity"],["Thin air / low oxygen",10,"low oxygen","altitude sickness","thin air"],["Remote and inaccessible",10,"remote","inaccessible","isolation"],
  ["Lack of food",6],["Poor soils",6,"infertile soil"],["Short growing season",6],["Permafrost",4],["Strong winds",4,"wind"],["Polar night",3,"darkness"],["Whiteout",.4,"blizzards"]]),
P("gg083","C.1","Name a group of people living in an extreme environment.","Uros",[
  ["Inuit",20],["Bedouin",15],["Sherpa",12],["Sámi",8,"sami","lapps"],["Tuareg",8],["San",6,"bushmen"],["Aboriginal Australians",6,"aboriginal"],["Quechua",4],["Nenets",3],["Uros",.4]]),
P("gg084","C.2","Name a glacial or periglacial landform.","Kame",[
  ["Corrie",15,"cirque","cwm"],["U-shaped valley",15,"glacial trough","u shaped valley"],["Moraine",12],["Arête",10,"arete"],["Pyramidal peak",8,"horn"],["Drumlin",8],["Hanging valley",6],["Erratic",5],
  ["Tarn",4],["Roche moutonnée",4,"roche moutonnee"],["Esker",4],["Pingo",4],["Patterned ground",3],["Kame",.4]]),
P("gg085","C.2","Name a hot desert landform.","Zeugen",[
  ["Sand dunes",20,"dunes","dune"],["Oasis",10],["Mesa",10],["Butte",8],["Wadi",8],["Playa / salt lake",5,"playa","salt flat","salt lake"],["Barchan dune",4,"barchan"],["Inselberg",4],["Pedestal rock",4,"mushroom rock"],
  ["Yardang",3],["Alluvial fan",3],["Zeugen",.4]]),
P("gg086","C.2","Name a weathering or erosion process common in extreme environments.","Granular disintegration",[
  ["Freeze–thaw",25,"freeze thaw","frost shattering"],["Exfoliation",15,"onion skin weathering","onion skinning"],["Salt weathering",10,"salt crystallisation"],["Wind abrasion",8,"aeolian erosion","sandblasting"],
  ["Thermal fracture",6,"thermal expansion"],["Frost heave",4],["Block disintegration",3],["Chemical weathering",3],["Granular disintegration",.4]]),
P("gg087","C.3","Name an economic activity in extreme environments.","Bioprospecting",[
  ["Tourism",20],["Mining",20],["Oil and gas",15,"oil","gas"],["Herding / pastoralism",8,"herding","nomadic herding","pastoralism"],["Scientific research",8,"research"],["Solar farms",6,"solar power"],
  ["Fishing",4],["Hunting",3],["Military bases",3,"military"],["Bioprospecting",.4]]),
P("gg088","C.3","Name an extreme environment that attracts tourists.","Wadi Rum",[
  ["Mount Everest",15,"everest"],["Antarctica",15],["Sahara",15],["Iceland",8],["Lapland",6],["Death Valley",6],["Atacama",5],["Machu Picchu",5],["Svalbard",4],["Greenland",4],["Wadi Rum",.4]]),
P("gg089","C.3","Name a challenge of mining in an extreme environment.","Fly-in fly-out workforce",[
  ["Access and transport",15,"transport","access","remoteness"],["Environmental damage",12,"pollution","habitat loss"],["Extreme conditions for workers",12,"extreme temperatures","cold","heat"],["High costs",10,"expensive"],
  ["Water supply",8,"lack of water"],["Conflict with indigenous people",8,"indigenous land rights"],["Tailings and waste",6,"tailings"],["Permafrost damage",6,"permafrost"],["Fly-in fly-out workforce",.4,"fifo"]]),
P("gg090","C.4","Name a way climate change is affecting extreme environments.","Arctic amplification",[
  ["Melting glaciers",20,"glacier retreat","melting ice"],["Permafrost thaw",15,"thawing permafrost"],["Desertification",15],["Sea ice loss",12,"melting sea ice"],["Drought",6,"droughts"],
  ["New Arctic shipping routes",6,"northwest passage","northern sea route","shipping routes"],["Habitat loss",6,"polar bears"],["Glacial lake outburst floods",4,"gloFs","glofs","glof"],["Arctic amplification",.4]]),
P("gg091","C.4","Name a way to make life or work in extreme environments more sustainable.","Masdar City",[
  ["Solar power",15,"solar"],["Ecotourism",10,"eco tourism"],["Wind and other renewables",10,"wind","renewables","renewable energy"],["Water recycling",8,"recycling water"],["Visitor limits",8,"limiting tourists"],
  ["Antarctic Treaty",8],["Indigenous knowledge",6,"local knowledge"],["Insulated buildings",4,"insulation"],["Desalination",4],["Masdar City",.4,"masdar"]]),
P("gg092","C.4","Name a rule or agreement that protects an extreme environment.","Great Green Wall",[
  ["Antarctic Treaty",30],["Arctic Council",8],["Madrid Protocol",8,"environmental protocol"],["National parks",8,"national park"],["UNCCD",6,"desertification convention"],["UNESCO World Heritage",6,"world heritage"],
  ["Protected areas",4,"iucn"],["Svalbard Treaty",2],["Great Green Wall",.4]]),
/* ---------- D Geophysical hazards ---------- */
P("gg093","D.1","Name a type of plate boundary or plate process.","Triple junction",[
  ["Destructive / convergent",25,"destructive","convergent"],["Constructive / divergent",25,"constructive","divergent"],["Conservative / transform",20,"conservative","transform"],["Collision",12,"collision zone"],
  ["Subduction",8,"subduction zone"],["Sea-floor spreading",6,"seafloor spreading","ridge push"],["Slab pull",3],["Triple junction",.4]]),
P("gg094","D.1","Name a type of volcano or volcanic feature.","Maar",[
  ["Composite volcano",15,"stratovolcano","composite"],["Shield volcano",15,"shield"],["Caldera",8],["Crater",8],["Lava flow",8,"lava"],["Magma chamber",6],["Vent",5],["Fissure",4],["Cinder cone",4],
  ["Lava dome",4],["Geyser",4],["Hotspot",4,"hot spot"],["Fumarole",2],["Maar",.4]]),
P("gg095","D.1","Name a type of mass movement.","Sturzstrom",[
  ["Landslide",25,"landslides"],["Mudflow",12,"mudslide"],["Rockfall",12,"rock fall"],["Lahar",8],["Avalanche",6],["Soil creep",6,"creep"],["Slump",6,"rotational slip"],["Debris flow",4],["Solifluction",3],["Sturzstrom",.4]]),
P("gg096","D.2","Name a hazard caused by an earthquake.","Seiche",[
  ["Tsunami",20],["Ground shaking",15,"shaking"],["Building collapse",15,"collapsing buildings"],["Liquefaction",10],["Landslides",8],["Fires",8,"fire"],["Aftershocks",6],["Gas leaks",4],["Disease",3],["Seiche",.4]]),
P("gg097","D.2","Name a volcanic hazard.","Lateral blast",[
  ["Lava flows",20,"lava"],["Pyroclastic flows",15,"pyroclastic flow","nuee ardente"],["Ash fall",15,"ash","tephra"],["Lahars",10,"lahar","mudflows"],["Toxic gases",8,"gas","sulfur dioxide","carbon dioxide"],
  ["Volcanic bombs",6,"bombs"],["Jökulhlaup",3,"jokulhlaup"],["Tsunami",3],["Lateral blast",.4]]),
P("gg098","D.2","Name a famous earthquake or volcanic eruption.","Nevado del Ruiz 1985",[
  ["Tōhoku, Japan 2011",15,"tohoku","japan 2011","fukushima"],["Haiti 2010",12,"haiti"],["Vesuvius (Pompeii)",12,"vesuvius","pompeii"],["Indian Ocean 2004",10,"boxing day tsunami","2004 tsunami","sumatra"],
  ["Nepal 2015",8,"nepal","gorkha"],["Mount St Helens",8,"st helens"],["Turkey–Syria 2023",8,"turkey","syria","turkey syria"],["Krakatoa",6],["San Francisco 1906",5,"san francisco"],["Christchurch 2011",5,"christchurch"],
  ["Eyjafjallajökull 2010",5,"eyjafjallajokull"],["Pinatubo",4],["Kobe 1995",3,"kobe"],["Nevado del Ruiz 1985",.4,"nevado del ruiz","armero"]]),
P("gg099","D.3","Name a factor that makes people more vulnerable to geophysical hazards.","Marginalisation",[
  ["Poverty",20],["Poor-quality buildings",15,"building quality","poor buildings"],["High population density",12,"population density"],["No warning systems",8,"lack of warning"],["Informal settlements",6,"slums"],
  ["Weak or corrupt government",6,"corruption","weak government"],["Lack of awareness",6,"education","lack of education"],["Living on steep slopes",4,"steep slopes"],["Remoteness",4,"remote"],["Age",3,"elderly","children"],
  ["Marginalisation",.4,"marginalization"]]),
P("gg100","D.3","Name a scale, model or measure of hazard risk.","Disaster risk index",[
  ["Risk = hazard × vulnerability",15,"risk equation","hazard times vulnerability"],["Richter scale",15,"richter"],["Moment magnitude scale",10,"moment magnitude"],["Mercalli scale",8,"mercalli"],
  ["Volcanic Explosivity Index",8,"vei"],["Pressure and Release model",4,"par model","pressure and release"],["Deaths and economic losses",4,"death toll"],["Hazard event profile",3],["Park model",3,"disaster response curve"],
  ["Disaster risk index",.4]]),
P("gg101","D.3","Name a way scientists monitor volcanoes.","COSPEC",[
  ["Seismometers",20,"seismometer","seismographs","earthquakes"],["Gas sampling",10,"gas","sulfur dioxide levels"],["Tiltmeters",10,"tiltmeter","tilt"],["Satellite thermal imaging",8,"satellites","thermal imaging"],
  ["GPS",6],["Ground deformation (InSAR)",4,"insar","ground deformation"],["Drones",4],["Lava temperature",3],["COSPEC",.4,"correlation spectrometer"]]),
P("gg102","D.4","Name a way to reduce earthquake damage.","Automatic gas shut-off valves",[
  ["Earthquake-proof buildings",20,"aseismic buildings","earthquake resistant buildings"],["Earthquake drills",10,"drills"],["Building codes",10,"regulations"],["Base isolators",8,"rubber foundations","base isolation"],
  ["Cross-bracing",8,"cross bracing"],["Land-use zoning",8,"zoning"],["Early warning apps",8,"early warning"],["Emergency kits",6],["Retrofitting",6],["Tuned mass damper",3,"counterweight"],
  ["Automatic gas shut-off valves",.4,"gas shut off","smart gas meters"]]),
P("gg103","D.4","Name a way to reduce tsunami risk.","Tsunami stones",[
  ["Warning systems",20,"sirens","tsunami warning","early warning"],["Sea walls",12,"tsunami walls"],["Evacuation routes",10,"evacuation"],["Mangroves",6,"coastal forests"],["Education",6,"drills"],
  ["Land-use planning",5,"zoning"],["Vertical evacuation buildings",4,"vertical evacuation"],["DART buoys",3,"buoys"],["Tsunami stones",.4]]),
P("gg104","D.4","Name a group that responds to a geophysical disaster.","Volunteer search-and-rescue teams",[
  ["Government",15],["Emergency services",12,"fire service","ambulance","police"],["NGOs / charities",12,"ngos","charities"],["Red Cross",8,"red crescent"],["Local community",8,"locals"],["Military",6,"army"],
  ["Scientists",6],["United Nations",5,"un"],["Insurance companies",4,"insurers"],["Media",4],["Volunteer search-and-rescue teams",.4,"search and rescue","volunteers"]]),
/* ---------- E Leisure, tourism and sport ---------- */
P("gg105","E.1","Name a reason global tourism has grown.","Sharing economy (Airbnb)",[
  ["Cheap flights",20,"budget airlines","cheap air travel"],["Rising incomes",15,"more money","disposable income"],["More paid holidays",10,"paid leave","holidays"],["Internet booking",10,"online booking","internet"],
  ["Social media",8,"instagram"],["Better transport",6],["Package holidays",6],["Retired people travelling",4,"retirees","ageing population"],["Visa relaxation",3,"easier visas"],["Sharing economy (Airbnb)",.4,"airbnb","sharing economy"]]),
P("gg106","E.1","Name a type of tourism.","Pro-poor tourism",[
  ["Ecotourism",20,"eco tourism"],["Mass tourism",10],["Adventure tourism",10,"adventure"],["Cultural tourism",10,"cultural"],["Medical tourism",6,"medical"],["Dark tourism",6],["Sports tourism",6],
  ["Heritage tourism",6,"heritage"],["Beach tourism",6,"beach holidays"],["Agritourism",4,"agrotourism","farm stays"],["Voluntourism",4,"volunteer tourism"],["Space tourism",3],["Pro-poor tourism",.4]]),
P("gg107","E.1","Name a model or concept about tourist destinations.","Distance decay",[
  ["Butler's model",25,"butler","tourist area life cycle","talc","butler model"],["Carrying capacity",15],["Doxey's Irridex",12,"doxey","irridex"],["Honeypot",8,"honeypot site"],["Multiplier effect",8,"multiplier"],
  ["Pleasure periphery",8],["Leakage",6,"economic leakage"],["Plog's model",3,"plog","allocentric","psychocentric"],["Distance decay",.4]]),
P("gg108","E.2","Name a negative impact of tourism on a local area.","Touristification",[
  ["Traffic congestion",12,"congestion","traffic"],["Litter",12,"rubbish"],["Pollution",10],["Overcrowding",10,"crowds"],["Rising house prices",8,"house prices","second homes"],["Seasonal jobs",6,"seasonal unemployment"],
  ["Footpath erosion",6,"erosion"],["Loss of culture",6,"cultural erosion"],["Crime",4],["Water shortages",4],["Economic leakage",4,"leakage"],["Touristification",.4]]),
P("gg109","E.2","Name a benefit of hosting a major sporting event.","Soft power",[
  ["Jobs",15,"employment"],["Tourism",15,"tourists"],["New infrastructure",12,"infrastructure","stadiums","transport"],["Urban regeneration",10,"regeneration"],["Global image",10,"prestige","reputation"],
  ["Investment",8],["Legacy",6],["More people playing sport",6,"sports participation","inspiration"],["Soft power",.4]]),
P("gg110","E.2","Name a major international sporting event.","Dakar Rally",[
  ["Olympic Games",30,"olympics","olympic games"],["FIFA World Cup",25,"world cup","football world cup"],["Commonwealth Games",6],["Super Bowl",6],["Wimbledon",6],["Paralympics",6,"paralympic games"],
  ["Tour de France",4],["Cricket World Cup",4],["Rugby World Cup",4],["UEFA Euros",4,"euros","european championship"],["Formula 1 Grand Prix",4,"f1","grand prix","formula 1"],["Asian Games",2],["Dakar Rally",.4,"dakar"]]),
P("gg111","E.3","Name a destination struggling with overtourism.","Hallstatt",[
  ["Venice",20],["Barcelona",15],["Bali",8],["Machu Picchu",8],["Amsterdam",8],["Dubrovnik",6],["Santorini",6],["Maya Bay",4,"maya bay thailand"],["Mount Everest",4,"everest"],["Kyoto",4],["Paris",4],["Hallstatt",.4]]),
P("gg112","E.3","Name a reason sports players move between countries.","Bosman ruling",[
  ["Higher wages",20,"money","wages","pay"],["Better facilities",10],["Better coaching",8,"coaching"],["Scholarships",6,"university scholarships"],["Transfers",6,"transfer market"],["Fame and media",6,"fame"],
  ["Switching nationality",5,"citizenship","nationality"],["Bosman ruling",.4,"bosman"]]),
P("gg113","E.3","Name a way TNCs are involved in international tourism or sport.","Enclave tourism (all-inclusive resorts)",[
  ["Sponsorship",15],["Hotel chains",15,"hotels","hilton","marriott"],["Airlines",15],["Cruise companies",10,"cruises"],["Sportswear brands",10,"nike","adidas"],["Broadcasting rights",8,"tv rights"],
  ["Online booking sites",8,"booking com","expedia"],["Theme parks",6,"disney"],["Enclave tourism (all-inclusive resorts)",.4,"all inclusive","enclave tourism"]]),
P("gg114","E.4","Name a way to make tourism more sustainable.","Spreading visitors away from honeypots",[
  ["Ecotourism",20],["Visitor limits",12,"quotas","limiting visitors"],["Tourist taxes",12,"tourist tax"],["Community-based tourism",8,"community tourism"],["Off-season travel",6,"off peak"],["Public transport",6],
  ["Education",4],["Recycling",4],["Spreading visitors away from honeypots",.4,"dispersal","spreading visitors"]]),
P("gg115","E.4","Name a future trend in tourism or sport.","Last-chance tourism",[
  ["Esports",15,"e sports"],["Space tourism",12],["Virtual reality tourism",8,"vr tourism","virtual tourism"],["Staycations",8,"staycation"],["Ecotourism growth",8,"ecotourism"],["Medical tourism",6],["Growth of women's sport",6,"womens sport"],
  ["Digital nomads",6],["Shift to cooler destinations",4,"climate change"],["Smart tourism apps",4,"apps"],["Last-chance tourism",.4,"last chance tourism"]]),
P("gg116","E.4","Name a stakeholder in managing tourism.","UNESCO",[
  ["Local residents",15,"locals","residents"],["Tourists",15],["Government",12],["Hotels and businesses",12,"businesses","hotels"],["Tour operators",8],["Environmental groups",8],["Local council",6,"council"],
  ["Indigenous groups",5],["UN Tourism (UNWTO)",3,"unwto","un tourism"],["UNESCO",.4,"world heritage committee"]]),
/* ---------- F Food and health ---------- */
P("gg117","F.1","Name an indicator of food security or health.","Food Insecurity Experience Scale",[
  ["Life expectancy",15],["Calorie intake",12,"calories","daily calories"],["Infant mortality",12,"infant mortality rate"],["Malnutrition rate",8,"malnutrition"],["Obesity rate",8,"bmi","obesity"],["Global Hunger Index",6,"ghi"],
  ["Doctors per 1000 people",6,"doctors","doctors per person"],["Stunting",4],["DALYs",3,"disability adjusted life years"],["HALE",2,"healthy life expectancy"],["Prevalence of undernourishment",2,"undernourishment"],
  ["Food Insecurity Experience Scale",.4,"fies"]]),
P("gg118","F.1","Name a cause of hunger or famine.","Entitlement failure",[
  ["Drought",20],["War / conflict",15,"war","conflict"],["Poverty",15],["Crop failure",10,"failed harvests"],["High food prices",8,"food prices"],["Pests and locusts",6,"locusts","pests"],["Population growth",6],
  ["Floods",6,"flooding"],["Food waste",6],["Poor infrastructure",4,"transport"],["Government policy",4,"political decisions"],["Entitlement failure",.4,"amartya sen","sen"]]),
P("gg119","F.1","Name a non-communicable disease (often a 'disease of affluence').","Gout",[
  ["Heart disease",20,"cardiovascular disease","heart attack"],["Type 2 diabetes",20,"diabetes"],["Obesity",15],["Cancer",12],["Stroke",10],["High blood pressure",8,"hypertension"],["Alzheimer's",4,"dementia","alzheimers"],
  ["Depression",4],["Asthma",3],["Gout",.4]],
  [[["malaria","covid","flu","tuberculosis","cholera","hiv","measles"],"That's an infectious (communicable) disease."]]),
P("gg120","F.2","Name an infectious disease.","Schistosomiasis",[
  ["Malaria",20],["COVID-19",15,"covid","coronavirus"],["HIV/AIDS",15,"hiv","aids"],["Tuberculosis",10,"tb"],["Cholera",10],["Influenza",8,"flu"],["Measles",6],["Ebola",6],["Dengue",5,"dengue fever"],
  ["Polio",3],["Typhoid",3],["Smallpox",3],["Zika",3],["Schistosomiasis",.4,"bilharzia"]]),
P("gg121","F.2","Name a way diseases spread (a type of diffusion or vector).","Fomites",[
  ["Mosquitoes",20,"mosquito","insects","vectors"],["Contaminated water",15,"dirty water","water"],["Coughs and sneezes",15,"air","airborne","droplets"],["Direct contact",10,"contact","touch"],["Air travel",8,"flights"],
  ["Contagious diffusion",6],["Expansion diffusion",6],["Relocation diffusion",5],["Hierarchical diffusion",4],["From animals (zoonosis)",4,"zoonosis","animals","zoonotic"],["Contaminated food",4,"food"],["Fomites",.4,"surfaces"]]),
P("gg122","F.2","Name a way to increase food production.","Agroforestry",[
  ["GM crops",15,"genetically modified crops","gmos"],["Irrigation",15],["Fertilisers",15,"fertilizer","fertiliser"],["Green Revolution",10,"hyv","high yield varieties"],["Mechanisation",8,"machinery","tractors"],
  ["Pesticides",8],["Selective breeding",6],["Vertical farming",5],["Hydroponics",5],["Aquaculture",5,"fish farming"],["Land reclamation",4],["Agroforestry",.4]]),
P("gg123","F.3","Name a global health organisation or NGO.","Partners In Health",[
  ["World Health Organization",30,"who"],["Red Cross",10,"red crescent"],["Médecins Sans Frontières",10,"msf","doctors without borders","medecins sans frontieres"],["UNICEF",10],["World Food Programme",6,"wfp"],
  ["Gates Foundation",6,"bill and melinda gates foundation"],["FAO",4,"food and agriculture organization"],["Gavi",3,"vaccine alliance"],["The Global Fund",3,"global fund"],["CDC",3],["Partners In Health",.4,"pih"]]),
P("gg124","F.3","Name a way transnational food companies influence diets.","Contract farming",[
  ["Fast-food chains",20,"fast food","mcdonalds"],["Advertising",15,"marketing"],["Processed food",12,"ultra processed food"],["Sugary drinks",10,"coca cola","soft drinks"],["Supermarkets",10],["Palm oil",4],
  ["Global supply chains",4,"food miles"],["Controlling seed supply",4,"seeds","monsanto"],["Contract farming",.4]]),
P("gg125","F.3","Name a government health or food policy.","Salt reduction targets",[
  ["Sugar tax",20,"soda tax"],["Vaccination programmes",15,"vaccinations","vaccines"],["Free healthcare",10,"nhs","universal healthcare"],["School meals",8,"free school meals"],["Smoking bans",8,"smoking ban"],["Food subsidies",8,"subsidies"],
  ["Food labelling",6,"traffic light labels"],["Lockdowns / quarantine",6,"lockdown","quarantine"],["Public health campaigns",6,"campaigns"],["Salt reduction targets",.4,"salt reduction"]]),
P("gg126","F.4","Name an emerging challenge for global health.","Neglected tropical diseases",[
  ["Antibiotic resistance",20,"antimicrobial resistance","superbugs","amr"],["Pandemics",15,"pandemic"],["Obesity",10],["Ageing populations",8,"ageing"],["Climate change spreading disease",8,"climate change"],
  ["Mental health",6],["Vaccine hesitancy",6,"anti vaxxers"],["Zoonotic diseases",6,"zoonoses"],["Neglected tropical diseases",.4,"ntds"]]),
P("gg127","F.4","Name an alternative or future food source.","Precision fermentation",[
  ["Insects",20,"edible insects","crickets"],["Lab-grown meat",15,"cultured meat","lab grown meat"],["Plant-based meat",12,"plant based meat","beyond meat","impossible burger"],["Algae",8,"spirulina"],["Vertical farming",6],
  ["Mycoprotein",6,"quorn"],["Seaweed",6],["Aquaculture",5,"fish farming"],["GM crops",5,"gm"],["Precision fermentation",.4]]),
P("gg128","F.4","Name a way to reduce food waste.","Gleaning",[
  ["Food banks",15,"donating food","donating to food banks"],["Composting",12,"compost"],["Clearer date labels",8,"use by dates","best before labels"],["Selling 'ugly' produce",8,"wonky veg","ugly fruit"],["Better storage",8,"refrigeration","fridges"],
  ["Portion control",6,"smaller portions"],["Anaerobic digestion",4,"biogas"],["Food-sharing apps",4,"too good to go","apps"],["Gleaning",.4]]),
/* ---------- G Urban environments ---------- */
P("gg129","G.1","Name a zone or feature of a city.","Twilight zone",[
  ["CBD",20,"central business district","city centre","downtown"],["Suburbs",15,"suburb"],["Inner city",10],["Rural–urban fringe",10,"rural urban fringe","urban fringe"],["Slums / informal settlements",10,"slums","informal settlements","favelas","shanty towns"],
  ["Industrial zone",6,"industrial area"],["Green belt",6],["Edge city",3],["Gated community",3],["Gentrified area",3,"gentrified"],["Twilight zone",.4,"zone in transition"]]),
P("gg130","G.1","Name a model of urban structure.","McGee model",[
  ["Burgess model",20,"burgess","concentric zone","concentric rings"],["Hoyt model",15,"hoyt","sector model"],["Multiple nuclei model",10,"harris and ullman","multiple nuclei"],["Bid-rent theory",6,"bid rent"],
  ["Latin American city model",6,"griffin and ford","latin american model"],["Mann model",3,"mann"],["McGee model",.4,"mcgee","southeast asian city model"]]),
P("gg131","G.1","Name an urban process.","Exurbanisation",[
  ["Urbanisation",20,"urbanization"],["Suburbanisation",15,"suburbanization"],["Counter-urbanisation",12,"counterurbanisation","counter urbanization"],["Re-urbanisation",10,"reurbanisation","reurbanization"],
  ["Gentrification",10],["Urban sprawl",8,"sprawl"],["Urban regeneration",6,"regeneration"],["Studentification",2],["Exurbanisation",.4,"exurbanization"]]),
P("gg132","G.2","Name a cause of rapid urban growth in low- and middle-income countries.","Primate city effect",[
  ["Rural–urban migration",25,"rural urban migration","migration"],["Natural increase",15,"high birth rates"],["Jobs in cities",12,"jobs","employment"],["Better services",8,"schools","hospitals"],
  ["Mechanisation of farming",4,"mechanisation"],["Rural conflict or disasters",4,"conflict","drought"],["Primate city effect",.4,"primacy","primate city"]]),
P("gg133","G.2","Name a large informal settlement (slum).","Manshiyat Naser",[
  ["Dharavi",25],["Kibera",15],["Rocinha",12],["Orangi Town",6,"orangi"],["Makoko",5],["Cité Soleil",4,"cite soleil"],["Khayelitsha",4],["Ciudad Neza",4,"neza","nezahualcoyotl"],
  ["Manshiyat Naser",.4,"garbage city","manshiyat nasser"]]),
P("gg134","G.2","Name an urban transport system or solution.","Mobility as a Service",[
  ["Metro / subway",20,"metro","subway","underground","tube"],["Buses",15,"bus"],["Bus rapid transit",10,"brt","curitiba"],["Trams / light rail",10,"trams","tram","light rail"],["Congestion charge",10,"congestion charging"],
  ["Bike sharing",8,"cycle hire","bike hire","cycle lanes"],["Car-free zones",6,"pedestrianisation"],["Park and ride",6],["Cable cars",4,"medellin","metrocable"],["Mobility as a Service",.4,"maas"]]),
P("gg135","G.3","Name an urban environmental problem.","Photochemical smog",[
  ["Air pollution",25],["Traffic congestion",15,"congestion","traffic"],["Urban heat island",12,"heat island"],["Waste and litter",10,"waste","litter","rubbish"],["Noise pollution",8,"noise"],["Water pollution",6],
  ["Flooding",6,"flash floods"],["Loss of green space",6,"lack of green space"],["Light pollution",3],["Photochemical smog",.4,"smog"]]),
P("gg136","G.3","Name a cause of the urban heat island effect.","Low sky-view factor",[
  ["Dark surfaces absorb heat",20,"tarmac","concrete","dark surfaces","low albedo"],["Lack of vegetation",15,"fewer trees","no trees"],["Heat from cars and buildings",12,"waste heat","cars","heating"],
  ["Air conditioning",8],["Pollution traps heat",6,"pollution dome","pollution"],["Urban canyons",6,"tall buildings"],["Less evaporation",6,"less evapotranspiration"],["Low sky-view factor",.4,"sky view factor"]]),
P("gg137","G.3","Name a social problem in cities.","Food deserts",[
  ["Crime",20],["Homelessness",15],["Poverty",15],["Inequality",10],["Unemployment",8],["Overcrowding",8],["Segregation",6],["Displacement by gentrification",6,"gentrification","displacement"],
  ["Gang violence",4,"gangs"],["Drug use",4,"drugs"],["Food deserts",.4,"food desert"]]),
P("gg138","G.4","Name a feature of a sustainable city.","Sponge city design",[
  ["Renewable energy",15,"solar panels","wind turbines"],["Public transport",15],["Green roofs",15,"green roof","living roofs"],["Cycle lanes",10,"bike lanes","cycling"],["Parks and green space",10,"parks","green space"],
  ["Recycling",8],["Energy-efficient buildings",8,"energy efficient buildings","eco homes"],["Rainwater harvesting",6],["Car-free zones",6,"pedestrian zones"],["Smart grids",4],["Sponge city design",.4,"sponge city"]]),
P("gg139","G.4","Name a city known for sustainable or smart planning.","Vauban",[
  ["Curitiba",12],["Copenhagen",12],["Singapore",12],["Masdar City",10,"masdar"],["Amsterdam",6],["Songdo",6],["Vancouver",6],["Freiburg",5],["Oslo",4],["Stockholm",4],["Reykjavík",3,"reykjavik"],["Vauban",.4]]),
P("gg140","G.4","Name a strategy for managing urban growth.","Urban growth boundary",[
  ["Green belts",15,"green belt"],["New towns",12,"new town"],["Brownfield redevelopment",12,"brownfield sites","brownfield"],["Slum upgrading",10,"upgrading slums"],["Affordable housing",8,"social housing"],
  ["Urban regeneration",8,"regeneration"],["Site-and-service schemes",6,"site and service"],["Self-help schemes",6,"self help"],["Satellite cities",4],["Urban growth boundary",.4,"growth boundary"]]),
];

/* ================= the voyage ================= */
const BANDS = [
  {name:"Home port",          zone:"Home port",           from:0,  to:40,  hue:30,  bg:["#1b2a40","#24385a"]},
  {name:"Coral shallows",     zone:"The coral shallows",  from:40, to:100, hue:175, bg:["#24385a","#2a5a7a"]},
  {name:"Open sea",           zone:"The open sea",        from:100,to:170, hue:200, bg:["#2a5a7a","#2f6a8f"]},
  {name:"Shark waters",       zone:"Shark waters",        from:170,to:250, hue:210, bg:["#2f6a8f","#2a5070"]},
  {name:"The storm",          zone:"The storm",           from:250,to:320, hue:230, bg:["#2a5070","#141c2e"]},
  {name:"Siren rocks",        zone:"Siren rocks",         from:320,to:390, hue:290, bg:["#141c2e","#2a1f44"]},
  {name:"Sea serpent strait", zone:"Sea serpent strait",  from:390,to:460, hue:150, bg:["#2a1f44","#173a3a"]},
  {name:"The ghost fleet",    zone:"The ghost fleet",     from:460,to:530, hue:180, bg:["#173a3a","#1a2a2e"]},
  {name:"Kraken deep",        zone:"Kraken deep",         from:530,to:600, hue:330, bg:["#1a2a2e","#2a0f24"]},
  {name:"Here be dragons",    zone:"Here be dragons",     from:600,to:760, hue:40,  bg:["#2a0f24","#3a2408"]},
];
const LG = p => Math.round(p*30).toLocaleString();
const FACTS = [
  [-30,"hoist the sails · read the map · find the treasure"],[12,"latitude runs east–west · longitude runs north–south"],[30,"a league is about 3 nautical miles"],
  [60,"coral reefs cover under 1% of the ocean floor but hold a quarter of marine species"],[95,"the Gulf Stream carries warm water across the Atlantic"],[130,"the Pacific is bigger than all the land on Earth"],
  [165,"longshore drift moves sand along the coast"],[205,"sharks were here before trees were"],[240,"El Niño warms the eastern Pacific every few years"],
  [275,"a hurricane is a tropical cyclone in the Atlantic"],[300,"storm surge, not wind, causes most hurricane deaths"],[340,"the Mariana Trench is about 11 km deep"],
  [372,"sailors once mistook manatees for mermaids"],[410,"tsunamis cross oceans at jet-plane speed"],[445,"more than 80% of the ocean is still unmapped"],
  [485,"the Flying Dutchman: a ghost ship that can never make port"],[515,"thermohaline circulation: the ocean's slow conveyor belt"],[550,"giant squid can grow longer than a bus"],
  [585,"the kraken legend may come from giant squid sightings"],[620,"old maps marked the unknown: HIC SUNT DRACONES"],[667,"20,000 leagues under the sea"],[700,"X marks the spot"],[740,"off the edge of the map"],
];
const SEA = 318;
function scene(i, len){
  const r = srand(733 + i*31); let s = "";
  const water = ["#1f4d78","#1d7a8a","#1d5e8a","#1a4f78","#14304f","#1d2148","#123a3a","#163036","#2a1530","#3a2a10"][i];
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  // the sea, with its swell
  let d = `M0 ${SEA}`; for (let x=0; x<=len; x+=60) d += ` Q${x+30} ${SEA-7} ${x+60} ${SEA}`;
  s += `<path d="${d} V420 H0Z" fill="${water}"/>`;
  each(90, x=>{ s += `<path class="wave" style="animation-delay:-${f1(r()*2.4)}s" d="M${f1(x)} ${f1(SEA+20+r()*70)} q12 -6 24 0" stroke="rgb(255 255 255 / .22)" stroke-width="2" fill="none"/>`; }, 20);
  switch(i){
    case 0: // harbour: pier, warehouses, lighthouse, barrels
      s += `<rect x="0" y="${SEA-60}" width="${len*.55}" height="60" fill="#4a3424"/><rect x="0" y="${SEA-64}" width="${len*.55}" height="6" fill="#6a4a30"/>`;
      each(70, x=>{ s+=`<rect x="${x}" y="${SEA-4}" width="8" height="40" fill="#3a2414"/>`; }, 20);
      [[40,120],[150,90],[260,130]].forEach(([x,h])=>{ if (x < len*.5) s+=`<rect x="${x}" y="${SEA-60-h}" width="90" height="${h}" fill="#5a4636"/><path d="M${x-6} ${SEA-60-h} l51 -34 l51 34z" fill="#7a3a2a"/><rect x="${x+34}" y="${SEA-104}" width="22" height="44" fill="#2a1a10"/><rect x="${x+12}" y="${SEA-48-h}" width="16" height="14" fill="#ffd27a"/>`; });
      s += `<rect x="${len-150}" y="${SEA-210}" width="34" height="210" fill="#e8e2d0"/><rect x="${len-150}" y="${SEA-170}" width="34" height="22" fill="#c0392b"/><rect x="${len-150}" y="${SEA-110}" width="34" height="22" fill="#c0392b"/>`
        + `<rect x="${len-156}" y="${SEA-230}" width="46" height="22" fill="#2a2a2a"/><circle cx="${len-133}" cy="${SEA-219}" r="8" fill="#ffe58a" class="blink"/><path class="sweep" d="M${len-126} ${SEA-219} l140 -30 v60z" fill="#ffe58a" opacity=".16"/>`;
      break;
    case 1: // coral islets, palm trees, turtles, gulls
      each(260, x=>{ s+=`<ellipse cx="${x+60}" cy="${SEA+2}" rx="70" ry="16" fill="#e9d3a0"/><path d="M${x+60} ${SEA-4} q-6 -60 10 -96" stroke="#7a5a2a" stroke-width="6" fill="none"/>`
        + `<g class="sw" style="animation-delay:-${f1(r()*4)}s">` + [0,1,2,3,4].map(k=>`<path d="M${x+70} ${SEA-100} q${-40+k*20} ${-14+Math.abs(k-2)*8} ${-60+k*30} ${18}" stroke="#3f9a4a" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("") + `</g>`; }, 40);
      each(140, x=>{ s+=`<path d="M${x} ${SEA+60+r()*30} q8 -20 16 0 q6 -14 12 0" fill="hsl(${330+r()*40} 70% 60%)"/><circle cx="${x+40}" cy="${SEA+90}" r="7" fill="#ff9d6e"/>`; }, 20);
      each(300, x=>{ s+=`<g class="swim" style="animation-delay:-${f1(r()*6)}s"><ellipse cx="${x+150}" cy="${SEA+40}" rx="16" ry="10" fill="#3a7a4a"/><circle cx="${x+168}" cy="${SEA+38}" r="5" fill="#5a9a5a"/></g>`; }, 80);
      each(180, x=>{ const y=f1(60+r()*120); s+=`<path class="fly" style="animation-delay:-${f1(r()*8)}s" d="M${x} ${y} q8 -8 16 0 q8 -8 16 0" stroke="#f2f4ff" stroke-width="2.5" fill="none"/>`; });
      break;
    case 2: // whales and dolphins
      each(420, x=>{ s+=`<g class="fl" style="animation-delay:-${f1(r()*3)}s"><path d="M${x} ${SEA+14} q60 -50 140 -6 q14 -16 26 -30 q-2 22 -10 40 q-80 30 -156 -4z" fill="#36506e"/><circle cx="${x+30}" cy="${SEA+2}" r="3" fill="#fff"/>`
        + `<path class="blink" d="M${x+40} ${SEA-20} q-8 -30 -20 -46 M${x+40} ${SEA-20} q6 -32 20 -44 M${x+40} ${SEA-20} v-50" stroke="#bfe8ff" stroke-width="3" fill="none" opacity=".8"/></g>`; }, 80);
      each(300, x=>{ s+=`<path class="fl" style="animation-delay:-${f1(r()*3)}s;animation-duration:2.2s" d="M${x+200} ${SEA-30} q30 -40 60 0 q-10 -6 -20 -4 q-20 -16 -40 4z" fill="#7aa4c8"/>`; }, 60);
      break;
    case 3: // shark fins circling
      each(150, x=>{ const y=f1(SEA+4+r()*30); s+=`<g class="swim" style="animation-delay:-${f1(r()*7)}s;animation-duration:${f1(5+r()*4)}s"><path d="M${x} ${y} l22 -46 q10 22 20 46z" fill="#5a6a7a"/><path d="M${x-14} ${y} q30 8 64 0" stroke="rgb(255 255 255 / .35)" stroke-width="2" fill="none"/></g>`; }, 30);
      break;
    case 4: // the storm: rain, lightning, big waves
      each(26, x=>{ s+=`<line x1="${x}" y1="${f1(r()*200)}" x2="${x-14}" y2="${f1(220+r()*80)}" stroke="rgb(190 210 240 / .35)" stroke-width="1.5"/>`; }, 4);
      each(240, x=>{ s+=`<path d="M${x} 20 l-30 90 h22 l-34 110 l70 -130 h-24 l30 -70z" fill="#fff6a8" opacity=".85" class="blink" style="animation-duration:${2+r()*2}s"/>`; }, 90);
      each(180, x=>{ s+=`<path class="wave" style="animation-delay:-${f1(r()*2)}s" d="M${x-80} ${SEA+10} q50 -110 120 -60 q-30 -6 -40 20 q30 -20 50 6 q-60 10 -130 34z" fill="#1d3a5e" opacity=".9"/>`; }, 60);
      break;
    case 5: // siren rocks with a wreck
      each(230, x=>{ s+=`<path d="M${x} ${SEA+6} l20 -90 l40 -30 l30 60 l20 60z" fill="#3a3448"/><path d="M${x+60} ${SEA-100} q-14 -10 -6 -30 q14 -6 20 8 q8 24 -14 22z" fill="#d7a8ff"/><path d="M${x+52} ${SEA-80} q18 10 30 32 q-10 4 -20 -4 q-4 14 -14 18 q4 -24 4 -46z" fill="#5ad8c8"/>`; }, 40);
      s += `<path d="M${len*.6} ${SEA+10} l20 -40 h110 l-20 40z" fill="#4a3424" transform="rotate(-14 ${len*.6} ${SEA})"/><path d="M${len*.6+60} ${SEA-30} v-90" stroke="#3a2414" stroke-width="5" transform="rotate(-24 ${len*.6} ${SEA})"/>`;
      break;
    case 6: { // sea serpent humps and head
      const y = SEA + 8; each(360, x=>{ s+=`<g class="swim" style="animation-delay:-${f1(r()*7)}s">` + [0,1,2].map(k=>`<path d="M${x+k*70} ${y} q30 -${50-k*8} 60 0" fill="#2a8a5a" stroke="#1a5a3a" stroke-width="3"/>`).join("")
        + `<path d="M${x+210} ${y} q20 -80 56 -90 q30 -4 36 20 q-20 -4 -30 6 q-14 20 -20 64z" fill="#2a8a5a" stroke="#1a5a3a" stroke-width="3"/><circle cx="${x+282}" cy="${y-82}" r="5" fill="#ffe14a"/><path d="M${x+298} ${y-70} l18 4 l-14 6" stroke="#ff4f6e" stroke-width="2" fill="none"/></g>`; }, 40); } break;
    case 7: // ghost ships in fog
      each(320, x=>{ s+=`<g opacity=".5" class="fl" style="animation-delay:-${f1(r()*3)}s;animation-duration:5s"><path d="M${x} ${SEA-6} h150 l-20 30 h-110z" fill="#9fd8d0"/><path d="M${x+70} ${SEA-8} v-150" stroke="#9fd8d0" stroke-width="5"/><path d="M${x+74} ${SEA-150} q50 40 0 120z" fill="#cfeee8"/><path d="M${x+66} ${SEA-140} q-40 34 0 100z" fill="#cfeee8"/></g>`; }, 50);
      each(200, x=>{ s+=`<ellipse class="dx" style="animation-delay:-${f1(r()*16)}s" cx="${x}" cy="${f1(SEA-40-r()*120)}" rx="${f1(100+r()*80)}" ry="14" fill="#cfeee8" opacity=".12"/>`; }, 0);
      break;
    case 8: // kraken tentacles
      each(150, x=>{ const h=f1(120+r()*120), c=r()<.5?-1:1; s+=`<path class="sw" style="animation-delay:-${f1(r()*4)}s;animation-duration:${f1(2.4+r()*2)}s" d="M${x} ${SEA+10} q${c*-30} ${-h/2} ${c*10} ${-h} q${c*24} -16 ${c*20} 10 q${c*-26} ${h/2} ${c*14} ${h-10}z" fill="#8a2a5a" stroke="#5a1a3a" stroke-width="3"/>`
        + [0.3,0.5,0.7].map(k=>`<circle cx="${f1(x+c*6)}" cy="${f1(SEA+10-h*k)}" r="4" fill="#e8a0c8"/>`).join(""); }, 30);
      s += `<circle cx="${len*.5}" cy="${SEA+60}" r="26" fill="#ffe14a" opacity=".85" class="blink"/><circle cx="${len*.5}" cy="${SEA+60}" r="10" fill="#1a0a10"/>`;
      break;
    case 9: { // dragons, then the treasure island at the edge of the map
      each(520, x=>{ const y = f1(60+r()*80); s+=`<g class="fly" style="animation-delay:-${f1(r()*9)}s"><path d="M${x} ${y} q40 -20 80 0 q-20 -60 50 -70 q-20 40 10 70 q40 -10 60 10 q-50 0 -60 20 q-60 10 -140 -30z" fill="#a83a2a"/><circle cx="${x+150}" cy="${y-2}" r="3" fill="#ffe14a"/>`
        + `<path class="blink" d="M${x+176} ${f1(+y+4)} q40 0 70 -14 q-20 20 -60 26z" fill="#ffb03a" opacity=".85"/></g>`; }, 60);
      const X = (700-600)*14;
      s += `<ellipse cx="${X}" cy="${SEA+4}" rx="190" ry="34" fill="#e9c87a"/><path d="M${X-120} ${SEA-6} q60 -70 160 -60 q50 10 70 60z" fill="#4a8a3a"/>`
        + `<path d="M${X+40} ${SEA-20} q-6 -70 14 -110" stroke="#7a5a2a" stroke-width="7" fill="none"/>` + `<g class="sw">` + [0,1,2,3].map(k=>`<path d="M${X+56} ${SEA-130} q${-50+k*30} -10 ${-70+k*44} 20" stroke="#3f9a4a" stroke-width="8" fill="none" stroke-linecap="round"/>`).join("") + `</g>`
        + `<path d="M${X-40} ${SEA-28} l30 30 M${X-10} ${SEA-28} l-30 30" stroke="#c0392b" stroke-width="7" stroke-linecap="round"/>`
        + `<rect x="${X+70}" y="${SEA-30}" width="46" height="30" rx="4" fill="#8a5a2a" stroke="#ffd27a" stroke-width="2"/><path d="M${X+70} ${SEA-30} q23 -22 46 0" fill="#a8703a" stroke="#ffd27a" stroke-width="2"/><circle cx="${X+93}" cy="${SEA-34}" r="6" fill="#ffe58a" class="blink"/>`;
    } break;
  }
  return hscene(s, len);
}
function avatar(level, hue){
  const masts = level < 3 ? [0] : level < 7 ? [-11, 11] : [-17, 0, 17];
  const sailC = `hsl(${hue} 35% 92%)`, trim = `hsl(${hue} 80% 62%)`;
  const sails = masts.map((x,k)=>{ const h = k === Math.floor(masts.length/2) ? 34 : 26;
    return `<path d="M${x} 8 V${-h-4}" stroke="#3a210f" stroke-width="2.5"/><path d="M${x-1} ${-h} q${13} ${h/2} 0 ${h-2} z" fill="${sailC}" stroke="${trim}" stroke-width="1.5"/>`; }).join("");
  const top = Math.min(...masts.map((x,k)=> k === Math.floor(masts.length/2) ? -38 : -30)), mx = masts[Math.floor(masts.length/2)];
  const s = `<g class="av-waves"><path d="M-40 24 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0" stroke="#9fe0ff" stroke-width="2" fill="none" opacity=".8"/></g><g class="av-rock">${sails}
    <g class="av-flag"><path d="M${mx} ${top} h-15 v10 h15z" fill="#111"/><circle cx="${mx-7.5}" cy="${top+4}" r="2.4" fill="#fff"/><path d="M${mx-10} ${top+8} l5 -2 M${mx-5} ${top+8} l-5 -2" stroke="#fff" stroke-width="1"/></g>
    <path d="M-30 8 H30 L23 22 H-23 Z" fill="#6a3f1f" stroke="#2e1a0b" stroke-width="2"/><path d="M-28 12 H28" stroke="${trim}" stroke-width="1.5"/>
    <circle cx="-12" cy="16" r="2.2" fill="#ffd27a" class="blink"/><circle cx="0" cy="16" r="2.2" fill="#ffd27a"/><circle cx="12" cy="16" r="2.2" fill="#ffd27a" class="blink" style="animation-delay:-.8s"/></g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,104,`<ellipse cx="100" cy="50" rx="34" ry="30" fill="${c}"/><circle cx="88" cy="48" r="7" fill="#fff"/><circle cx="112" cy="48" r="7" fill="#fff"/><circle cx="88" cy="49" r="3" fill="#1a0a20"/><circle cx="112" cy="49" r="3" fill="#1a0a20"/>`
    + [-3,-2,-1,1,2,3].map(k=>`<path d="M${100+k*9} 74 q${k*18} 14 ${k*30} 2 q${k*6} -6 ${k*4} 12" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round" class="drift" style="animation-delay:${k*.3}s"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<rect x="40" y="44" width="90" height="50" rx="6" fill="#8a5a2a" stroke="${c}" stroke-width="3"/><path d="M40 44 q45 -40 90 0z" fill="#a8703a" stroke="${c}" stroke-width="3"/>`
    + [0,1,2,3,4].map(k=>`<circle cx="${58+k*14}" cy="${40-(k%2)*6}" r="7" fill="#ffd85a" stroke="#b9861a" class="blink" style="animation-delay:${k*.25}s"/>`).join("") + `<rect x="78" y="58" width="14" height="14" rx="2" fill="#ffd85a"/>`);
  if (t === "trojan") return W(180,100,`<path d="M20 14 h140 v72 h-140z" fill="#e9d3a0" stroke="${c}" stroke-width="3"/><path d="M30 70 q30 -40 60 -14 t50 -30" stroke="#8a5a2a" stroke-width="3" stroke-dasharray="6 6" fill="none"/><path d="M130 22 l16 16 M146 22 l-16 16" stroke="#c0392b" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="30" r="10" fill="none" stroke="#8a5a2a" stroke-width="2"/><path d="M40 18v24M28 30h24" stroke="#8a5a2a" stroke-width="2"/>`);
  if (t === "adware") return W(170,100,`<g transform="rotate(-24 85 50)"><rect x="50" y="34" width="80" height="34" rx="16" fill="${c}" opacity=".35" stroke="${c}" stroke-width="3"/><rect x="128" y="42" width="18" height="18" rx="4" fill="#8a5a2a"/><rect x="64" y="42" width="44" height="16" rx="3" fill="#e9d3a0"/></g><path d="M10 88 q20 -10 40 0 t40 0 t40 0 t40 0" stroke="#9fe0ff" stroke-width="3" fill="none"/>`);
  if (t === "spam") return W(170,90,`<path d="M30 52 h110 l-16 24 h-78z" fill="#6a3f1f" stroke="${c}" stroke-width="3"/><path d="M60 44 l-30 -22 M110 44 l30 -22" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M10 80 q20 -10 40 0 t40 0 t40 0 t40 0" stroke="#9fe0ff" stroke-width="3" fill="none"/>`);
  if (t === "blocked") return W(170,100,`<circle cx="85" cy="42" r="26" fill="#e8e2d0"/><circle cx="75" cy="40" r="7" fill="#111"/><circle cx="95" cy="40" r="7" fill="#111"/><path d="M80 54 h10" stroke="#111" stroke-width="3"/><rect x="74" y="62" width="22" height="12" rx="3" fill="#e8e2d0"/><path d="M45 88 l80 -22 M45 66 l80 22" stroke="#e8e2d0" stroke-width="8" stroke-linecap="round"/>`);
  return null;
}
registerSubject({
  key:"geo", name:"Geography", theme:"A pirate ship sailing off the edge of the map", gemWord:"Kraken", gemTitle:"One in a Kraken", emoji:"🏴‍☠️",
  blurb:"You're a pirate ship leaving home port with a treasure map. Each prompt has many correct answers. <b>Obvious answers barely leave the harbour. Answers other players missed sail you much further</b>, past sharks, storms, sirens, sea serpents, ghost ships and the kraken, to where the map says <i>here be dragons</i>.",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Kraken", rootkit:"Treasure", trojan:"Galleon", adware:"Sloop", spam:"Rowboat"}, blocked:"Ran aground", fw:"SANDBAR",
  notes:{rootkit:"Buried treasure. Very few sailors found this one.", trojan:"Off the usual trade routes. Nice navigating.", adware:"A known course, but not the first one people sail.", spam:"The route every ship takes first."},
  verbs:{cta:"Set sail ▶", inject:"Sail", hint:"▶ rarer answers sail further ▶", count:"hoisting the sails"},
  particles:["~","≈","°","⚓"], particleColor:"#9fe0ff",
  meter:{label:"VOYAGE", fmt:p=>LG(p)+" leagues", zone:p=>LG(p)+' <span style="text-transform:none">leagues</span>', tick:p=>LG(p), gain:(a,b)=>`sail ${LG(b-a)} leagues`},
  start:{bg:"linear-gradient(90deg,#120c08,#1b2a40)", label:'Start · 0 <span style="text-transform:none">leagues</span>', zone:"Home port", color:"#ffd27a",
    deco:len=>hscene(`<rect x="0" y="${SEA-60}" width="${len}" height="${420-SEA+60}" fill="#4a3424"/><rect x="0" y="${SEA-64}" width="${len}" height="6" fill="#6a4a30"/>`
      + `<rect x="${len-300}" y="${SEA-190}" width="120" height="130" fill="#5a4636"/><path d="M${len-310} ${SEA-190} l70 -40 l70 40z" fill="#7a3a2a"/><text x="${len-240}" y="${SEA-150}" text-anchor="middle" font-family="Caveat,cursive" font-size="22" fill="#ffd27a">Tavern</text>`
      + `<rect x="${len-160}" y="${SEA-90}" width="30" height="30" rx="4" fill="#8a5a2a"/><rect x="${len-124}" y="${SEA-90}" width="30" height="30" rx="4" fill="#7a4a1a"/>`, len)},
  endBg:"linear-gradient(90deg,#3a2408,#120a02)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  extras:({pos, L})=>`<div class="geo-grid" aria-hidden="true"></div><div class="geo-route" aria-hidden="true"></div><div class="geo-x" style="left:${pos(700)}px" aria-hidden="true">✕</div>`,
  beyond:"Off the map",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
