/* Economics — a bull charges up the market. Rarer answers push the index higher, from a barter market through
   factory towns, the central bank, the stock exchange and a speculative bubble, up to the invisible hand.
   Syllabus: IB Economics (first assessment 2022): Unit 1 Introduction, Unit 2 Microeconomics, Unit 3 Macroeconomics,
   Unit 4 The global economy. HL-only topics are marked. */
(function(){
const CATALOG = [
  {label:"Unit 1 · Introduction to economics", units:[
    {code:"1", name:"Introduction to economics", topics:[["1.1","What is economics?"],["1.2","How do economists approach the world?"]]},
  ]},
  {label:"Unit 2 · Microeconomics", units:[
    {code:"2", name:"Microeconomics", topics:[["2.1","Demand"],["2.2","Supply"],["2.3","Competitive market equilibrium"],["2.4","Critique of the maximizing behaviour of consumers and producers"],
      ["2.5","Elasticity of demand"],["2.6","Elasticity of supply"],["2.7","Role of government in microeconomics"],["2.8","Market failure: externalities and common pool resources"],
      ["2.9","Market failure: public goods"],["2.10","Market failure: asymmetric information",HL],["2.11","Market failure: market power",HL],["2.12","The market's inability to achieve equity"]]},
  ]},
  {label:"Unit 3 · Macroeconomics", units:[
    {code:"3", name:"Macroeconomics", topics:[["3.1","Measuring economic activity and illustrating its variations"],["3.2","Variations in economic activity: aggregate demand and aggregate supply"],
      ["3.3","Macroeconomic objectives"],["3.4","Economics of inequality and poverty"],["3.5","Demand management: monetary policy"],["3.6","Demand management: fiscal policy"],["3.7","Supply-side policies"]]},
  ]},
  {label:"Unit 4 · The global economy", units:[
    {code:"4", name:"The global economy", topics:[["4.1","Benefits of international trade"],["4.2","Types of trade protection"],["4.3","Arguments for and against trade control"],
      ["4.4","Economic integration"],["4.5","Exchange rates"],["4.6","Balance of payments"],["4.7","Sustainable development"],["4.8","Measuring development"],
      ["4.9","Barriers to economic growth and development"],["4.10","Economic growth and development strategies"]]},
  ]},
];

const PROMPTS = [
/* ---------- Unit 1 ---------- */
P("ec001","1.1","Name a factor of production, or the reward it earns.","Rent",[
  ["Labour",25,"labor","workers","work"],["Capital",22,"machinery","machines","equipment"],["Land",20,"natural resources","raw materials"],["Entrepreneurship",15,"enterprise","entrepreneur","entrepreneurs","management"],
  ["Wages",6,"wage","salary","salaries"],["Profit",5,"profits"],["Interest",3],["Rent",.4]]),
P("ec002","1.1","Name one of the nine key concepts of the IB Economics course.","Interdependence",[
  ["Scarcity",25],["Choice",15,"choices"],["Efficiency",12],["Equity",10],["Sustainability",10],["Economic well-being",6,"well being","wellbeing","economic wellbeing"],
  ["Change",6],["Intervention",6,"government intervention"],["Interdependence",.4]],
  [[["opportunity cost","supply","demand","elasticity"],"That's an important idea, but the nine key concepts are scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence and intervention."]]),
P("ec003","1.1","Name a leakage (withdrawal) from or an injection into the circular flow of income.","Retained profits",[
  ["Savings",20,"saving"],["Taxes",18,"taxation","tax"],["Imports",15,"import"],["Investment",18],["Government spending",15,"government expenditure","public spending"],["Exports",14,"export"],
  ["Retained profits",.4,"business saving","undistributed profits"]]),
P("ec004","1.1","Name something a production possibilities curve (PPC) can show.","Gains from specialization",[
  ["Opportunity cost",25],["Scarcity",15],["Choice",10],["Economic growth",15,"growth","outward shift"],["Unemployment",10,"unemployed resources","inefficiency","point inside"],
  ["Productive efficiency",8,"efficiency","point on the curve"],["Unattainable combinations",4,"unattainable","point outside"],["Increasing opportunity cost",4,"bowed out","concave"],
  ["Constant opportunity cost",2,"straight line ppc"],["Actual versus potential growth",3,"actual growth","potential growth"],["Gains from specialization",.4,"comparative advantage","specialisation"]]),
P("ec005","1.2","Name an economist or a school of economic thought.","The Physiocrats",[
  ["Adam Smith",25,"smith"],["John Maynard Keynes",20,"keynes","keynesian","keynesian economics"],["Karl Marx",12,"marx","marxism","marxist"],["Milton Friedman",8,"friedman","monetarism","monetarist"],
  ["Friedrich Hayek",5,"hayek","austrian school"],["David Ricardo",5,"ricardo"],["Thomas Malthus",4,"malthus"],["Alfred Marshall",3,"marshall"],["Joseph Schumpeter",2,"schumpeter"],
  ["Daniel Kahneman",2,"kahneman","behavioural economics","behavioral economics"],["Richard Thaler",2,"thaler"],["Kate Raworth",2,"raworth","doughnut economics"],["Amartya Sen",2,"sen"],
  ["Classical economics",3,"classical"],["Neoclassical economics",2,"neoclassical"],["Elinor Ostrom",1,"ostrom"],["The Physiocrats",.4,"physiocrats","quesnay","francois quesnay"]]),
P("ec006","1.2","Name an assumption that standard economic models make.","Perfect factor mobility",[
  ["Ceteris paribus",25,"all other things equal","other things being equal"],["Rational consumers",15,"rationality","rational behaviour","rational behavior","homo economicus","rational"],
  ["Consumers maximize utility",10,"utility maximization","utility maximisation","maximise utility","maximize utility"],["Firms maximize profit",10,"profit maximization","profit maximisation","maximise profit","maximize profit"],
  ["Perfect information",8,"perfect knowledge"],["Self-interest",6,"self interest","selfish"],["Diminishing marginal utility",4,"marginal utility"],["Consistent preferences",3,"stable preferences"],
  ["Markets clear",3,"equilibrium","market clearing"],["Perfect factor mobility",.4,"factor mobility","mobile factors"]]),
/* ---------- Unit 2: demand and supply ---------- */
P("ec007","2.1","Name a non-price determinant of demand.","Income distribution",[
  ["Income",25,"incomes","consumer income"],["Tastes and preferences",20,"tastes","preferences","fashion","trends"],["Price of substitutes",15,"substitutes","substitute goods"],
  ["Price of complements",12,"complements","complementary goods"],["Number of consumers",10,"population","number of buyers","size of the market"],["Advertising",6,"marketing"],
  ["Expectations of future prices",6,"expectations","future prices"],["Seasons and weather",4,"season","seasons","weather"],["Interest rates",3,"credit","availability of credit"],
  ["Demographic changes",3,"age structure","demographics"],["Income distribution",.4,"distribution of income"]]),
P("ec008","2.1","Name a type of good, classified by how its demand responds to income or price.","Giffen goods",[
  ["Normal goods",22,"normal good","normal"],["Inferior goods",20,"inferior good","inferior"],["Luxury goods",12,"luxury","luxuries","luxury good"],["Necessities",10,"necessity","necessity goods"],
  ["Substitutes",8,"substitute goods","substitute"],["Complements",8,"complementary goods","complement"],["Veblen goods",2,"veblen","ostentatious goods","status goods"],["Giffen goods",.4,"giffen","giffen good"]]),
P("ec009","2.2","Name a non-price determinant of supply.","Joint supply",[
  ["Costs of production",25,"costs","cost of factors of production","wages","raw materials","input prices","production costs"],["Technology",18,"technological change","new technology"],
  ["Indirect taxes",10,"taxes","tax"],["Subsidies",10,"subsidy"],["Number of firms",8,"number of producers","number of sellers"],["Weather and natural events",8,"weather","natural disasters"],
  ["Producers' expectations",5,"expectations","future prices"],["Government regulation",4,"regulation","regulations"],["Prices of other goods (competitive supply)",3,"competitive supply","price of other goods"],
  ["Joint supply",.4,"by products","byproducts"]]),
P("ec010","2.2","Name a reason the supply curve slopes upwards.","Diminishing marginal returns",[
  ["Higher prices mean higher profits",25,"more profit","higher profit","profit incentive","profitability","profit"],["Increasing marginal costs",12,"rising marginal costs","marginal cost","rising costs"],
  ["Law of supply",8],["Firms switch production to this good",6,"switch production","resources move","resource allocation"],["New firms enter the market",6,"new firms","more firms","entry"],
  ["Producers can afford to pay overtime or hire more",3,"overtime","hire more workers"],["Diminishing marginal returns",.4,"law of diminishing returns","diminishing returns"]]),
P("ec011","2.3","Name a function of the price mechanism.","Coordinating decisions",[
  ["Signalling",22,"signal","signals","signaling","information"],["Incentive",20,"incentives","incentive function"],["Rationing",18,"ration","rationing function"],
  ["Allocating resources",15,"resource allocation","allocation","allocating","allocates resources"],["Clearing the market",6,"market clearing","eliminates shortages and surpluses","equilibrium"],
  ["Coordinating decisions",.4,"coordination","coordinating","coordinating buyers and sellers"]]),
P("ec012","2.3","Name something that happens in a market with excess demand (a shortage).","Ticket touting",[
  ["Price rises",25,"prices rise","price increases","higher prices"],["Queues",12,"queues form","queuing","waiting lists","lines"],["Supply extends",10,"producers supply more","quantity supplied rises","firms produce more"],
  ["Quantity demanded contracts",8,"demand contracts","quantity demanded falls"],["Black markets",8,"black market","parallel markets","underground market"],["Rationing",8,"non price rationing","first come first served"],
  ["Empty shelves",6,"stock runs out","sold out"],["Ticket touting",.4,"touting","scalping","ticket resale","resale"]]),
P("ec013","2.3","Name a concept used to measure welfare in a market.","Pareto efficiency",[
  ["Consumer surplus",25],["Producer surplus",20],["Deadweight loss",12,"welfare loss","dead weight loss"],["Social surplus",10,"community surplus","total surplus"],
  ["Allocative efficiency",10,"allocative"],["Marginal benefit",6,"msb","marginal social benefit"],["Marginal cost",6,"msc","marginal social cost"],["Pareto efficiency",.4,"pareto optimality","pareto optimal","pareto"]]),
/* ---------- 2.4 behavioural economics ---------- */
P("ec014","2.4","Name a bias or heuristic from behavioural economics.","Mental accounting",[
  ["Anchoring",20,"anchoring bias","anchor"],["Framing",12,"framing effect"],["Loss aversion",12],["Availability heuristic",12,"availability","availability bias"],
  ["Status quo bias",10,"status quo"],["Herd behaviour",10,"herd behavior","herding","herd mentality","social proof"],["Bounded rationality",8],["Overconfidence",6,"overconfidence bias"],
  ["Bounded self-control",5,"bounded self control","lack of self control"],["Bounded selfishness",5],["Sunk cost fallacy",4,"sunk costs"],["Present bias",4,"hyperbolic discounting","short termism"],
  ["Endowment effect",3],["Confirmation bias",3],["Rules of thumb",3,"rule of thumb"],["Mental accounting",.4]]),
P("ec015","2.4","Name a nudge or choice architecture technique.","The urinal fly",[
  ["Default choice",20,"defaults","default","opt out","opt-out","default option"],["Restricted choice",10,"restricting choice","limited choice"],["Mandated choice",10,"forced choice","required choice"],
  ["Healthy food at eye level",10,"food placement","placing healthy food first","product placement"],["Social norms",8,"social norm messages","peer comparison"],["Framing",6,"framed messages"],
  ["Traffic-light labels",6,"labels","calorie labels","food labelling","nutrition labels"],["Organ donation opt-out",6,"organ donation","presumed consent"],["Pension auto-enrolment",6,"auto enrolment","automatic enrolment","pension auto enrollment"],
  ["Reminders",5,"text reminders"],["Commitment devices",4,"commitment"],["The urinal fly",.4,"urinal fly","fly in the urinal","schiphol fly"]]),
P("ec016","2.4","Name a goal a firm might pursue other than profit maximization.","Managerial utility",[
  ["Corporate social responsibility",20,"csr","ethical goals","social responsibility","environmental goals"],["Market share",15,"increase market share"],["Revenue maximization",12,"revenue maximisation","sales revenue","maximize revenue","maximise revenue"],
  ["Growth",10,"expansion","growth maximization"],["Satisficing",10,"satisfice"],["Survival",6,"staying in business"],["Sales volume",5,"sales maximization","sales maximisation"],
  ["Managerial utility",.4,"managers pay","managerial perks","managers goals"]]),
/* ---------- elasticity ---------- */
P("ec017","2.5","Name a determinant of price elasticity of demand (PED).","Durability of the good",[
  ["Number and closeness of substitutes",30,"substitutes","availability of substitutes","number of substitutes"],["Proportion of income spent",18,"share of income","percentage of income","proportion of income"],
  ["Necessity or luxury",15,"necessity","luxury","degree of necessity"],["Time period",12,"time","time to adjust"],["Addictiveness and habit",8,"addiction","addictive","habit","habit forming"],
  ["Brand loyalty",6,"loyalty"],["How broadly the market is defined",4,"definition of the market","market definition"],["Durability of the good",.4,"durability","durable goods"]]),
P("ec018","2.5","Name a product likely to have price-inelastic demand.","Funeral services",[
  ["Petrol",25,"gasoline","fuel","gas","diesel"],["Cigarettes",20,"tobacco","smoking","nicotine"],["Medicine",10,"medicines","insulin","prescription drugs","drugs"],["Electricity",8,"energy"],
  ["Water",8,"tap water"],["Salt",6],["Alcohol",6,"beer","wine"],["Bread",6,"basic food","staple food","rice"],["Coffee",5],["Heating gas",3,"natural gas","heating"],["Funeral services",.4,"funerals","coffins"]]),
P("ec019","2.5","Name a use of price elasticity of demand (PED) for firms or governments.","Marshall–Lerner condition",[
  ["Pricing decisions",25,"setting prices","pricing","total revenue","revenue","price setting"],["Predicting tax revenue",15,"tax revenue","choosing what to tax","taxation"],
  ["Tax incidence",12,"incidence","who pays the tax","burden of tax"],["Price discrimination",6],["Primary commodity price volatility",6,"commodity prices","farm prices"],["Effects of subsidies",5,"subsidies"],
  ["Marshall–Lerner condition",.4,"marshall lerner","marshall-lerner"]]),
P("ec020","2.5","Name a product likely to be an inferior good (negative income elasticity).","Payday loans",[
  ["Bus travel",15,"buses","bus","bus journeys"],["Supermarket own-brand goods",15,"own brand","own-brand","value brands","budget brands","store brand","generic brands"],["Instant noodles",10,"noodles","ramen"],
  ["Second-hand clothes",8,"second hand clothes","used clothes","thrift clothes"],["Tinned food",6,"canned food","tinned","canned"],["Cheap cuts of meat",6,"cheap meat","offal"],["Margarine",5],
  ["Fast food",4],["Payday loans",.4,"payday loan","pawnshops","pawn shops"]]),
P("ec021","2.6","Name a determinant of price elasticity of supply (PES).","How quickly costs rise",[
  ["Time period",25,"time","time to adjust"],["Spare capacity",15,"unused capacity","capacity"],["Stocks and inventories",15,"stocks","inventories","stock levels","ability to store"],
  ["Mobility of factors of production",10,"factor mobility","mobility of factors"],["Length of the production period",10,"production time","speed of production","how long it takes to produce"],
  ["Perishability",6,"perishable","shelf life"],["Ease of entry",4,"entry","barriers to entry"],["How quickly costs rise",.4,"rate at which costs rise","rising marginal cost"]]),
P("ec022","2.6","Name a product with price-inelastic supply in the short run.","Beachfront property",[
  ["Agricultural crops",20,"crops","farm products","wheat","coffee beans","agricultural products"],["Housing",15,"houses","homes","property"],["Concert tickets",12,"stadium seats","tickets","seats"],
  ["Oil",10,"crude oil"],["Land",8],["Original paintings",8,"art","artwork","paintings"],["Gold",5,"minerals","metals"],["Skilled labour",4,"doctors","surgeons","skilled workers"],
  ["Fine wine",4,"vintage wine"],["Beachfront property",.4,"beach houses","seafront property","seafront houses"]]),
/* ---------- government intervention ---------- */
P("ec023","2.7","Name a way a government can intervene in a market.","Buffer stock schemes",[
  ["Indirect taxes",20,"taxes","tax","indirect tax","excise tax"],["Subsidies",18,"subsidy"],["Price ceilings",15,"maximum prices","price ceiling","maximum price","price cap"],
  ["Price floors",15,"minimum prices","price floor","minimum price"],["Regulation",10,"regulations","laws","legislation","bans"],["Direct provision",6,"provide goods directly","government provision"],
  ["Information campaigns",5,"advertising campaigns","education campaigns"],["Tradable permits",4,"permits","cap and trade"],["Nudges",4,"nudge"],["Nationalization",3,"nationalisation"],
  ["Quotas",3,"quota"],["Buffer stock schemes",.4,"buffer stocks","commodity agreements"]]),
P("ec024","2.7","Name a consequence of a price ceiling (maximum price) set below equilibrium.","Sellers favour friends and family",[
  ["Shortage",25,"excess demand","shortages"],["Black markets",15,"black market","illegal markets","parallel markets"],["Queues and waiting lists",10,"queues","waiting lists","queuing"],
  ["Non-price rationing",8,"rationing","lotteries"],["Welfare loss",8,"deadweight loss"],["Consumers who buy pay less",8,"lower prices","cheaper","consumers gain"],
  ["Producers earn less",6,"lower revenue","producers lose"],["Lower quality",6,"quality falls","poor maintenance"],["Sellers favour friends and family",.4,"favouritism","favoritism","sellers favour friends"]]),
P("ec025","2.7","Name a consequence of a price floor (minimum price) set above equilibrium.","Wine lakes and butter mountains",[
  ["Surplus",25,"excess supply","surpluses"],["Higher prices for consumers",12,"higher prices","consumers pay more"],["Unemployment",12,"minimum wage unemployment","job losses"],
  ["Government buys the surplus",10,"government buys","government purchases","intervention buying"],["Storage or destruction costs",6,"storage costs","destroying surplus"],
  ["Inefficient producers survive",6,"inefficiency","inefficient firms survive"],["Welfare loss",6,"deadweight loss"],["Surpluses dumped abroad",4,"dumping"],
  ["Wine lakes and butter mountains",.4,"wine lakes","butter mountains","food mountains"]]),
P("ec026","2.7","Name a real-world example of a price control.","Caps on ticket resale prices",[
  ["Minimum wage",25,"minimum wages","national living wage"],["Rent control",20,"rent controls","rent caps","rent cap"],["Minimum prices for farm products",8,"agricultural minimum prices","cap","common agricultural policy"],
  ["Minimum unit pricing for alcohol",6,"minimum alcohol pricing","minimum unit pricing","alcohol minimum price"],["Energy price cap",6,"fuel price cap","ofgem price cap","electricity price cap","energy price caps"],
  ["Food price controls",4,"bread price controls","price controls on food"],["Caps on medicine prices",3,"drug price caps","medicine price caps","insulin price cap"],["Interest rate caps",2,"usury laws"],
  ["Caps on ticket resale prices",.4,"ticket resale caps","resale price caps"]]),
/* ---------- 2.8 externalities and common pool resources ---------- */
P("ec027","2.8","Name a negative externality of production.","Light pollution",[
  ["Air pollution",30,"pollution","smoke","emissions"],["Greenhouse gas emissions",12,"carbon emissions","climate change","co2","global warming"],["Water pollution",15,"river pollution","chemical waste"],
  ["Noise pollution",10,"noise"],["Deforestation",6,"cutting down forests"],["Health problems for local residents",5,"health problems","respiratory illness"],["Waste and landfill",4,"waste","landfill"],
  ["Light pollution",.4]],
  [[["passive smoking","second hand smoke","secondhand smoke"],"That's a negative externality of consumption: the harm comes from using the good, not making it."]]),
P("ec028","2.8","Name a negative externality of consumption.","Antibiotic resistance",[
  ["Passive smoking",25,"second hand smoke","secondhand smoke","second-hand smoking","smoking"],["Drink driving and alcohol-related violence",12,"drink driving","drunk driving","alcohol","alcohol violence"],
  ["Traffic congestion",10,"congestion","traffic"],["Car exhaust fumes",8,"exhaust","car pollution","driving"],["Littering",8,"litter"],["Noise from loud music",6,"loud music","noise"],
  ["Plastic waste",5,"plastic","plastic bags"],["Antibiotic resistance",.4,"overuse of antibiotics","superbugs"]]),
P("ec029","2.8","Name a good whose consumption creates a positive externality.","Home insulation",[
  ["Vaccinations",25,"vaccines","vaccination","herd immunity","flu jabs"],["Education",20,"schooling","university education"],["Healthcare",8,"health care","medical care"],
  ["Well-kept gardens",5,"gardens","beautiful gardens","flowers"],["Exercise",4,"gyms","sport"],["Public transport",4,"buses","trains"],["Recycling",4],["Home insulation",.4,"insulation"]]),
P("ec030","2.8","Name a common pool resource at risk of overuse.","Low-Earth orbit",[
  ["Fish stocks",25,"fish","fisheries","fishing grounds"],["Forests",12,"rainforests","trees","timber"],["Clean air",10,"atmosphere","air"],["Groundwater",10,"aquifers","water"],
  ["Common grazing land",8,"grazing land","pastures","commons","common land"],["Oceans",6,"the sea","seas"],["Rivers",4,"lakes"],["Coral reefs",3,"reefs"],["Wildlife",3,"elephants","whales"],
  ["Low-Earth orbit",.4,"space debris","orbits","low earth orbit"]]),
P("ec031","2.8","Name a policy to reduce pollution or the overuse of a common pool resource.","Collective self-governance",[
  ["Carbon tax",25,"pollution tax","green taxes","carbon taxes","tax"],["Tradable permits",18,"cap and trade","emissions trading","carbon permits","tradeable permits"],
  ["Regulation",12,"emission limits","legislation","regulations","rules"],["Subsidies for renewable energy",12,"renewable subsidies","green subsidies","subsidies"],
  ["International agreements",8,"paris agreement","kyoto protocol","treaties"],["Bans",6,"plastic bag ban","banning"],["Fishing quotas",6,"quotas","catch limits"],["Education and awareness",4,"awareness campaigns"],
  ["Collective self-governance",.4,"ostrom","community management","self governance","collective self governance"]]),
P("ec032","2.9","Name an example of a public good.","Tsunami early-warning system",[
  ["Street lighting",25,"street lights","streetlights","streetlamps"],["National defence",20,"defense","defence","military","army"],["Lighthouses",12,"lighthouse"],
  ["Flood defences",8,"flood defenses","flood barriers","sea walls"],["Roads",6,"non toll roads"],["Fireworks displays",6,"fireworks"],["Police",6,"policing"],
  ["Public parks",4,"parks"],["Basic research",3,"knowledge","scientific research"],["Free-to-air broadcasts",3,"radio","tv broadcasts"],["Tsunami early-warning system",.4,"early warning systems","tsunami warning"]]),
P("ec033","2.9","Name a characteristic of public goods or a problem they create.","Quasi-public goods",[
  ["Non-excludability",25,"non excludable","nonexcludable","non excludability"],["Non-rivalry",25,"non rival","nonrival","non rivalrous","non rivalry"],
  ["Free-rider problem",20,"free riders","free rider","free riding"],["Under-provision by the market",10,"underprovision","market failure","not provided"],["Missing market",6],
  ["Quasi-public goods",.4,"quasi public","quasi public goods"]]),
P("ec034","2.10","Name a problem caused by asymmetric information.","Principal–agent problem",[
  ["Adverse selection",25],["Moral hazard",20],["The market for lemons",10,"lemons problem","lemons","used car market","used cars"],["Mis-selling",4,"mis selling","fraud"],
  ["Principal–agent problem",.4,"principal agent","principal agent problem"]], [], HL),
P("ec035","2.10","Name a way to reduce asymmetric information.","Insurance excess",[
  ["Regulation",15,"legislation","laws"],["Licensing",12,"licences","licenses","professional licensing"],["Warranties",12,"guarantees","warranty"],["Signalling",10,"signaling","qualifications","degrees"],
  ["Screening",10,"medical checks","background checks"],["Government information",8,"information provision","public information"],["Reviews and ratings",8,"online reviews","ratings"],
  ["Brand reputation",6,"branding","reputation"],["Mandatory disclosure",6,"labels","labelling","disclosure"],["Insurance excess",.4,"deductibles","co payments","excess"]], [], HL),
P("ec036","2.11","Name a market structure.","Contestable market",[
  ["Perfect competition",25,"perfectly competitive","pure competition"],["Monopoly",25],["Oligopoly",20],["Monopolistic competition",18,"monopolistically competitive"],
  ["Duopoly",6],["Natural monopoly",6],["Monopsony",4],["Contestable market",.4,"contestable markets"]], [], HL),
P("ec037","2.11","Name a barrier to entry.","Switching costs",[
  ["Economies of scale",20,"scale"],["Legal barriers",18,"patents","licences","licenses","copyright"],["Brand loyalty",12,"branding","brands"],["High start-up costs",12,"start up costs","high capital costs","startup costs"],
  ["Control of essential resources",8,"control of resources","ownership of resources"],["Predatory pricing",6],["Network effects",4],["Heavy advertising",4,"advertising"],["Limit pricing",3],["Sunk costs",3],
  ["Switching costs",.4]], [], HL),
P("ec038","2.11","Name a feature or behaviour typical of oligopoly.","Prisoner's dilemma",[
  ["A few large firms",20,"few firms","few large firms","dominated by a few firms"],["Interdependence",18,"interdependent","mutual interdependence"],["Collusion",12,"colluding","tacit collusion"],
  ["Cartels",8,"cartel","opec"],["Non-price competition",10,"advertising","branding"],["High barriers to entry",10,"barriers to entry"],["Price wars",8,"price war"],
  ["Price rigidity",6,"kinked demand curve","sticky prices"],["Game theory",5],["Price leadership",4],["Prisoner's dilemma",.4,"prisoners dilemma"]], [], HL),
P("ec039","2.12","Name a reason markets can produce unequal outcomes.","Winner-take-all markets",[
  ["Unequal ownership of wealth",15,"wealth inequality","ownership of assets","unequal ownership"],["Differences in skills and education",15,"education","skills","human capital"],
  ["Inheritance",10,"inherited wealth"],["Discrimination",10,"gender discrimination","racial discrimination"],["Unequal access to education and healthcare",8,"access to education","access to healthcare"],
  ["Market power",5,"monopoly power"],["Technological change",4,"automation"],["Globalization",4,"globalisation"],["Winner-take-all markets",.4,"superstar effect","winner takes all"]]),
P("ec040","2.12","Name a form of wealth (rather than income).","Intellectual property",[
  ["Property",20,"housing","houses","real estate","homes"],["Shares",15,"stocks","equities"],["Savings",15,"bank deposits","savings accounts","cash"],["Land",8],["Pension funds",8,"pensions"],
  ["Businesses",6,"owning a business","firms"],["Gold",4,"jewellery","jewelry"],["Art and collectibles",3,"art","collectibles"],["Cryptocurrency",3,"bitcoin","crypto"],["Bonds",3,"government bonds"],
  ["Intellectual property",.4,"patents","copyrights"]]),
/* ---------- Unit 3 ---------- */
P("ec041","3.1","Name a measure of national income or economic activity.","Net national product",[
  ["GDP",30,"gross domestic product"],["GNI",15,"gross national income","gnp","gross national product"],["GDP per capita",12,"gdp per person"],["Real GDP",10],["Nominal GDP",6],
  ["GDP growth rate",6,"economic growth rate","growth rate"],["GNI per capita",6],["GDP at purchasing power parity",5,"ppp","gdp ppp","purchasing power parity"],["Green GDP",4],
  ["Net national product",.4,"nnp","net national income"]]),
P("ec042","3.1","Name a limitation of GDP as a measure of well-being.","Defensive spending counts as growth",[
  ["Ignores income distribution",20,"inequality","distribution","income distribution"],["Ignores environmental damage",18,"environment","pollution","environmental costs","sustainability"],
  ["Ignores unpaid work",12,"household work","volunteering","housework","unpaid work"],["Ignores the informal economy",12,"informal economy","black market","shadow economy","informal sector"],
  ["Ignores leisure",10,"leisure","working hours","quality of life"],["Doesn't measure happiness",8,"happiness","well being"],["Ignores quality of goods",3,"quality"],
  ["Defensive spending counts as growth",.4,"defensive expenditure","defensive spending","regrettables"]]),
P("ec043","3.1","Name a phase of the business cycle.","Double-dip recession",[
  ["Recession",25,"contraction","downturn"],["Boom",20,"peak","expansion"],["Recovery",15,"upturn"],["Trough",15,"bottom"],["Depression",8,"slump"],["Slowdown",6],
  ["Double-dip recession",.4,"double dip","w shaped recession"]]),
P("ec044","3.1","Name an alternative measure of well-being to GDP.","Measure of Domestic Progress",[
  ["Human Development Index",25,"hdi"],["Happy Planet Index",10,"hpi"],["OECD Better Life Index",8,"better life index"],["World Happiness Report",8,"happiness index","world happiness index"],
  ["Gross National Happiness",8,"gnh","bhutan"],["Genuine Progress Indicator",4,"gpi"],["Multidimensional Poverty Index",4,"mpi"],["Green GDP",4],["Inequality-adjusted HDI",3,"ihdi","inequality adjusted hdi"],
  ["Gender Inequality Index",3,"gii"],["Social Progress Index",3],["Measure of Domestic Progress",.4,"mdp"]]),
P("ec045","3.2","Name a factor that would shift the aggregate demand (AD) curve.","Expectations of future inflation",[
  ["Interest rates",18,"interest rate"],["Consumer confidence",15,"confidence"],["Government spending",15,"government expenditure","public spending"],["Taxes",12,"tax","income tax"],
  ["Business confidence",10,"business expectations"],["Exchange rates",10,"exchange rate","currency"],["Wealth",8,"house prices","share prices","wealth effect"],["Incomes abroad",6,"foreign incomes","foreign demand"],
  ["Household debt",4,"debt"],["Money supply",4,"quantitative easing"],["Expectations of future inflation",.4,"inflation expectations"]]),
P("ec046","3.2","Name a factor that would shift short-run aggregate supply (SRAS).","Supply-chain disruption",[
  ["Wages",20,"wage costs","labour costs","labor costs"],["Oil and raw material prices",20,"oil prices","raw materials","energy prices","commodity prices"],["Supply shocks",10,"natural disasters","war"],
  ["Indirect taxes",8,"taxes on firms","vat"],["Subsidies",8,"subsidy"],["Exchange rate",8,"import prices","exchange rates"],["Supply-chain disruption",.4,"supply chain disruption","supply chain problems"]]),
P("ec047","3.2","Name a cause of long-run economic growth (an outward shift of LRAS).","Institutional quality",[
  ["Technology",20,"technological progress","innovation"],["Education and training",18,"education","human capital","training","skills"],["Investment in capital",15,"investment","capital goods","more capital"],
  ["Productivity",12,"higher productivity"],["More labour",10,"immigration","population growth","bigger labour force","larger workforce"],["Infrastructure",8],
  ["New natural resources",6,"resource discoveries","natural resources"],["Supply-side policies",6,"supply side policies"],["Institutional quality",.4,"institutions","rule of law","property rights"]]),
P("ec048","3.2","Name a school of thought on how the macroeconomy behaves.","Real business cycle theory",[
  ["Keynesian",25,"keynes","keynesian economics"],["Monetarist",15,"monetarism","friedman"],["New classical",10,"neoclassical","new classical economics"],["Classical",8,"classical economics"],
  ["Austrian school",3,"austrian","hayek"],["Modern monetary theory",2,"mmt"],["Real business cycle theory",.4,"real business cycle","rbc"]]),
P("ec049","3.2","Name a concept linked to the Keynesian multiplier.","Paradox of thrift",[
  ["Marginal propensity to consume",25,"mpc"],["Marginal propensity to save",15,"mps"],["Injections",10,"injection"],["Leakages",10,"withdrawals","leakage"],
  ["Spending becomes someone else's income",10,"spending is income","rounds of spending"],["Marginal propensity to tax",8,"mpt"],["Marginal propensity to import",8,"mpm"],
  ["Accelerator",4,"accelerator effect"],["Paradox of thrift",.4]]),
P("ec050","3.3","Name a macroeconomic objective of governments.","Sustainable government debt",[
  ["Low unemployment",25,"full employment","employment","reduce unemployment"],["Low and stable inflation",25,"price stability","low inflation","stable prices","inflation"],
  ["Economic growth",20,"growth","gdp growth"],["Equitable distribution of income",8,"equity","less inequality","income equality"],["Balance of payments stability",8,"current account balance","balance of payments"],
  ["Environmental sustainability",4,"sustainability"],["Stable exchange rate",3,"exchange rate stability"],["Sustainable government debt",.4,"low debt","fiscal sustainability","sustainable debt"]]),
P("ec051","3.3","Name a type or cause of unemployment.","Hysteresis",[
  ["Cyclical unemployment",25,"cyclical","demand deficient","demand-deficient","keynesian unemployment"],["Structural unemployment",20,"structural"],["Frictional unemployment",18,"frictional","between jobs"],
  ["Seasonal unemployment",15,"seasonal"],["Technological unemployment",6,"technological","automation"],["Real-wage unemployment",6,"classical unemployment","real wage"],
  ["Hidden unemployment",3,"disguised unemployment","underemployment"],["Natural rate of unemployment",3,"natural rate","nairu"],["Hysteresis",.4]]),
P("ec052","3.3","Name a cost of unemployment.","Brain drain",[
  ["Lost output",15,"lower gdp","less output","opportunity cost"],["Loss of income",15,"lower incomes","less income"],["Lower tax revenue",10,"less tax revenue"],
  ["Higher welfare spending",10,"unemployment benefits","benefit costs"],["Poverty",8],["Mental health problems",8,"depression","stress","health problems"],["Crime",6,"higher crime"],
  ["Loss of skills",6,"deskilling"],["Inequality",5],["Social unrest",4,"unrest"],["Homelessness",3],["Brain drain",.4,"emigration of workers"]]),
P("ec053","3.3","Name a type or cause of inflation.","Greedflation",[
  ["Demand-pull inflation",25,"demand pull","excess demand"],["Cost-push inflation",25,"cost push","rising costs"],["Imported inflation",8,"imported","weak currency"],
  ["Wage–price spiral",8,"wage price spiral"],["Too much money (monetary)",8,"money supply","printing money","monetary inflation"],["Hyperinflation",6],
  ["Inflation expectations",5,"built in inflation","expectations"],["Greedflation",.4,"profit led inflation","profit-led inflation","sellers inflation"]],
  [[["deflation"],"Deflation is a fall in the general price level, the opposite of inflation."]]),
P("ec054","3.3","Name a cost of high inflation.","Fiscal drag",[
  ["Loss of purchasing power",20,"purchasing power","money buys less","lower real incomes"],["Loss of international competitiveness",12,"less competitive exports","exports less competitive"],
  ["Uncertainty",12,"less investment","uncertainty for firms"],["Redistribution from savers and lenders",10,"savers lose","creditors lose","savings lose value"],["Menu costs",10],
  ["Shoe-leather costs",8,"shoe leather costs"],["People on fixed incomes lose",8,"fixed incomes","pensioners"],["Fiscal drag",.4,"bracket creep"]]),
P("ec055","3.3","Name a cost of deflation.","Liquidity trap",[
  ["Consumers delay spending",20,"delayed spending","postponed spending","delayed consumption"],["Real value of debt rises",15,"debt burden","higher real debt","debt"],["Deflationary spiral",10,"spiral"],
  ["Unemployment",10,"job losses"],["Falling profits",8,"lower profits"],["Wages are hard to cut",4,"sticky wages"],["Liquidity trap",.4,"zero lower bound"]]),
P("ec056","3.3","Name a way inflation is measured, or a problem with measuring it.","Hedonic quality adjustment",[
  ["Consumer price index",25,"cpi"],["Basket of goods",10,"weighted basket","basket"],["Price index",10,"index"],["Core inflation",8,"core"],["Producer price index",6,"ppi"],
  ["Basket doesn't match every household",5,"not representative","different spending patterns"],["GDP deflator",4],["Retail price index",3,"rpi"],["Substitution bias",3],
  ["Quality changes are missed",3,"quality changes"],["Hedonic quality adjustment",.4,"hedonic adjustment","hedonic pricing"]]),
P("ec057","3.4","Name a measure of income inequality or poverty.","Theil index",[
  ["Gini coefficient",25,"gini","gini index"],["Lorenz curve",20,"lorenz"],["Poverty line",10,"international poverty line","2.15 a day"],["Absolute poverty",10],["Relative poverty",10],
  ["Multidimensional Poverty Index",6,"mpi"],["Income share of the richest 10%",5,"top 10 percent","income quintiles","quintile shares"],["Palma ratio",4,"palma"],["Theil index",.4,"theil"]]),
P("ec058","3.4","Name a policy to reduce inequality or poverty.","Negative income tax",[
  ["Progressive taxation",25,"progressive tax","progressive taxes","taxing the rich"],["Transfer payments",18,"welfare benefits","benefits","welfare","cash transfers"],["Minimum wage",12],
  ["Free education",10,"education"],["Free healthcare",8,"healthcare","universal healthcare"],["Universal basic income",6,"ubi","basic income"],["Wealth or inheritance tax",6,"wealth tax","inheritance tax"],
  ["Affirmative action",3,"positive discrimination"],["Negative income tax",.4]]),
P("ec059","3.4","Name a type of tax.","Pigouvian tax",[
  ["Income tax",25,"personal income tax"],["Sales tax",15,"vat","value added tax","gst","goods and services tax"],["Corporation tax",12,"corporate tax","company tax"],
  ["Progressive tax",8,"progressive"],["Excise duty",8,"excise tax","sin tax","duties"],["Direct tax",6],["Indirect tax",6],["Property tax",6,"council tax","land tax"],
  ["Regressive tax",5,"regressive"],["Inheritance tax",5,"estate tax","death duties"],["Capital gains tax",5],["Carbon tax",5],["Proportional tax",4,"flat tax"],["Pigouvian tax",.4,"pigovian tax","pigou tax"]]),
P("ec060","3.5","Name a tool of monetary policy.","Negative interest rates",[
  ["Interest rates",30,"interest rate","base rate","bank rate","policy rate"],["Quantitative easing",15,"qe"],["Open market operations",10,"buying bonds","selling bonds"],
  ["Reserve requirements",8,"reserve ratio","minimum reserve requirements"],["Money supply",6],["Forward guidance",4],["Quantitative tightening",4,"qt"],["Discount rate",3,"lending to banks"],
  ["Exchange-rate intervention",3,"currency intervention"],["Negative interest rates",.4,"negative rates"]]),
P("ec061","3.5","Name a central bank.","Sveriges Riksbank",[
  ["Federal Reserve",25,"the fed","fed","us federal reserve"],["European Central Bank",18,"ecb"],["Bank of England",18,"boe"],["Bank of Japan",8,"boj"],["People's Bank of China",6,"pboc","peoples bank of china"],
  ["Reserve Bank of India",4,"rbi"],["Swiss National Bank",3,"snb"],["Reserve Bank of Australia",3,"rba"],["Bank of Canada",3],["Central Bank of Brazil",2,"banco central do brasil"],
  ["Sveriges Riksbank",.4,"riksbank","swedish central bank"]]),
P("ec062","3.5","Name a limitation of monetary policy.","Pushing on a string",[
  ["Time lags",15,"lags","time lag"],["Liquidity trap",12,"zero lower bound","rates near zero"],["Low confidence",12,"consumer confidence","business confidence"],["Banks won't lend",8,"banks unwilling to lend","credit crunch"],
  ["Ineffective against cost-push inflation",6,"cost push inflation"],["Conflicting objectives",5,"conflict between objectives"],["Can't target regions",4,"one size fits all"],["Asset bubbles",4,"house price bubbles"],
  ["Pushing on a string",.4]]),
P("ec063","3.6","Name a tool or feature of fiscal policy.","Crowding out",[
  ["Government spending",25,"government expenditure","public spending"],["Taxation",25,"taxes","tax"],["Budget deficit",10,"deficit"],["Automatic stabilizers",8,"automatic stabilisers"],
  ["Expansionary fiscal policy",8,"expansionary"],["Contractionary fiscal policy",6,"contractionary"],["Transfer payments",6,"benefits"],["Budget surplus",6,"surplus"],["Public debt",5,"national debt","government debt"],
  ["Crowding out",.4]]),
P("ec064","3.6","Name a limitation of fiscal policy.","Ricardian equivalence",[
  ["Rising public debt",15,"debt","national debt","budget deficits"],["Time lags",15,"lags"],["Crowding out",12],["Political pressures",10,"politics","elections"],["Inflation",6,"inflationary"],
  ["Hard to reverse",5,"spending hard to cut","irreversible"],["Ricardian equivalence",.4]]),
P("ec065","3.6","Name an automatic stabilizer.","Short-time work schemes",[
  ["Unemployment benefits",25,"jobseekers allowance","unemployment insurance","benefits"],["Progressive income tax",25,"income tax","progressive tax"],["Welfare payments",10,"welfare","transfer payments"],
  ["Corporation tax",6,"profit tax"],["Sales tax revenue",4,"vat","sales tax"],["Short-time work schemes",.4,"kurzarbeit","short time work","furlough"]]),
P("ec066","3.7","Name a market-based supply-side policy.","Enterprise zones",[
  ["Privatization",18,"privatisation"],["Deregulation",18],["Lower income taxes",12,"income tax cuts","tax cuts"],["Lower corporation tax",12,"corporate tax cuts","corporation tax cuts"],
  ["Labour market reforms",8,"labor market flexibility","flexible labour markets","labour market flexibility"],["Trade union reform",8,"weakening unions","union reform"],["Competition policy",6,"anti trust","antitrust"],
  ["Cutting unemployment benefits",6,"lower benefits","benefit cuts"],["Trade liberalization",4,"free trade","trade liberalisation"],["Enterprise zones",.4,"freeports","free ports"]]),
P("ec067","3.7","Name an interventionist supply-side policy.","Green industrial policy",[
  ["Education and training",25,"education","training","skills"],["Infrastructure investment",20,"infrastructure","roads","broadband"],["Research and development",12,"r and d","research","r&d"],
  ["Healthcare investment",8,"healthcare","health care"],["Industrial policy",8,"targeted support for industries"],["Subsidies for strategic industries",6,"subsidies"],["Apprenticeships",4],
  ["Green industrial policy",.4,"inflation reduction act","green deal","green subsidies"]]),
/* ---------- Unit 4 ---------- */
P("ec068","4.1","Name a benefit of international trade.","Learning by doing",[
  ["Lower prices",20,"cheaper goods","cheaper prices"],["More choice",18,"variety","greater choice"],["Economies of scale",12,"larger markets","bigger markets"],["Specialization",12,"specialisation"],
  ["Access to resources",8,"raw materials","resources"],["More competition and efficiency",8,"competition","efficiency"],["Foreign exchange earnings",6,"foreign currency"],
  ["Spread of technology and ideas",6,"technology transfer","ideas"],["Better political relations",4,"peace","political ties"],["Learning by doing",.4,"dynamic gains"]]),
P("ec069","4.1","Name a concept or theory that explains why countries trade.","Heckscher–Ohlin theory",[
  ["Comparative advantage",25],["Absolute advantage",20],["Specialization",12,"specialisation"],["Opportunity cost",12],["Economies of scale",6],["Terms of trade",4],["Free trade",4],
  ["Heckscher–Ohlin theory",.4,"heckscher ohlin","factor endowments","heckscher-ohlin"]]),
P("ec070","4.2","Name a type of trade protection.","Local content requirements",[
  ["Tariffs",30,"tariff","import duties","customs duties"],["Quotas",20,"quota","import quotas"],["Subsidies to domestic producers",15,"subsidies","export subsidies","subsidy"],
  ["Administrative barriers",8,"red tape","bureaucracy","customs procedures"],["Embargoes",6,"embargo","sanctions","bans"],["Health and safety standards",6,"product standards","regulations","standards"],
  ["Voluntary export restraints",4,"voluntary export restraint","ver"],["Local content requirements",.4,"local content rules"]]),
P("ec071","4.2","Name a consequence of a tariff.","Higher costs for firms that use imports",[
  ["Higher prices for consumers",25,"higher prices","prices rise"],["Domestic producers gain",15,"protects domestic firms","domestic firms sell more","protection"],["Government revenue",15,"tax revenue","revenue"],
  ["Fewer imports",12,"less choice","imports fall"],["Retaliation and trade wars",10,"retaliation","trade war"],["Inefficient firms protected",8,"inefficiency"],["Welfare loss",8,"deadweight loss"],
  ["Higher costs for firms that use imports",.4,"higher input costs","dearer components"]]),
P("ec072","4.3","Name an argument for trade protection.","Strategic trade policy",[
  ["Infant industry",25,"infant industries","protect new industries"],["Protecting jobs",20,"jobs","employment","protect jobs"],["National security",12,"strategic industries","security","defence"],
  ["Anti-dumping",12,"dumping","stop dumping","anti dumping"],["Protecting health and environmental standards",6,"health","environment","standards"],["Correcting a trade deficit",6,"trade deficit","current account deficit"],
  ["Government revenue",6,"revenue"],["Economic diversification",4,"diversification"],["Retaliation",4],["Strategic trade policy",.4]]),
P("ec073","4.3","Name a trade war or protectionist episode from history.","The Chicken War",[
  ["US–China trade war",25,"us china trade war","china us trade war","trump tariffs on china","trade war"],["US steel tariffs",10,"steel tariffs","trump steel tariffs","section 232"],
  ["Smoot–Hawley Tariff",8,"smoot hawley","smoot-hawley"],["Airbus–Boeing dispute",4,"airbus boeing","boeing airbus"],["The Corn Laws",4,"corn laws"],
  ["Australia–China trade dispute",3,"australian wine tariffs","barley tariffs"],["EU banana dispute",3,"banana wars","banana war"],["The Chicken War",.4,"chicken war"]]),
P("ec074","4.4","Name a level of economic integration.","Complete economic integration",[
  ["Free trade area",20,"free trade agreement","fta"],["Customs union",20],["Common market",15,"single market"],["Economic and monetary union",12,"monetary union","emu","currency union"],
  ["Preferential trade agreement",8,"preferential trade","pta"],["Bilateral trade agreement",6,"bilateral","bilateral agreement"],["Multilateral trade agreement",6,"multilateral","multilateral agreement"],
  ["Complete economic integration",.4,"full economic integration"]]),
P("ec075","4.4","Name a trading bloc or trade agreement.","Andean Community",[
  ["European Union",25,"eu"],["USMCA",18,"nafta","united states mexico canada agreement"],["ASEAN",10,"asean free trade area","afta"],["Mercosur",10,"mercosul"],
  ["African Continental Free Trade Area",5,"afcfta"],["CPTPP",4,"tpp","trans pacific partnership"],["RCEP",4],["EFTA",3,"european free trade association"],["ECOWAS",3],
  ["Gulf Cooperation Council",2,"gcc"],["Eurasian Economic Union",2,"eaeu"],["SACU",2,"southern african customs union"],["Andean Community",.4,"can","comunidad andina","andean pact"]]),
P("ec076","4.4","Name an international organization that deals with trade or finance.","International Trade Centre",[
  ["World Trade Organization",30,"wto"],["International Monetary Fund",12,"imf"],["World Bank",10],["GATT",8,"general agreement on tariffs and trade"],["UNCTAD",6],["OECD",4],["G20",4],
  ["International Trade Centre",.4,"itc"]]),
P("ec077","4.5","Name a factor that causes a currency to appreciate.","Safe-haven demand",[
  ["Higher interest rates",25,"interest rates","rising interest rates"],["Higher demand for exports",15,"more exports","export demand","exports"],["Inward investment",10,"fdi","foreign direct investment","hot money"],
  ["Speculation",10,"speculators"],["Low relative inflation",8,"low inflation"],["Strong economic growth",6,"growth"],["Central bank buys the currency",6,"intervention","central bank intervention"],
  ["Political stability",4],["Remittances",3],["Safe-haven demand",.4,"safe haven","safe haven currency"]]),
P("ec078","4.5","Name a type of exchange rate system.","Currency board",[
  ["Floating",25,"floating exchange rate","free floating","flexible"],["Fixed",25,"fixed exchange rate","pegged","peg"],["Managed float",15,"managed exchange rate","dirty float"],
  ["Crawling peg",4],["Dollarization",3,"dollarisation"],["Currency board",.4]]),
P("ec079","4.5","Name a consequence of a currency depreciation.","Lower purchasing power abroad",[
  ["Exports become cheaper",25,"cheaper exports","more exports","exports rise"],["Imports become dearer",20,"dearer imports","more expensive imports","imports fall"],["Imported inflation",10,"inflation"],
  ["Current account improves",10,"improved current account","smaller deficit"],["More tourism",6,"tourism rises"],["Foreign debt becomes harder to repay",6,"foreign debt","debt burden"],["J-curve effect",4,"j curve"],
  ["Lower purchasing power abroad",.4,"holidays abroad cost more"]]),
P("ec080","4.6","Name an account or component of the balance of payments.","Net errors and omissions",[
  ["Current account",25],["Financial account",15],["Capital account",12],["Trade in goods",10,"balance of trade","visible trade","goods"],["Trade in services",8,"services","invisibles"],
  ["Primary income",6,"investment income"],["Secondary income",6,"current transfers","remittances"],["Foreign direct investment",5,"fdi"],["Portfolio investment",4],["Reserve assets",3,"reserves"],
  ["Net errors and omissions",.4,"errors and omissions"]]),
P("ec081","4.6","Name a consequence of a persistent current account deficit.","Twin deficits",[
  ["Currency depreciation",15,"weaker currency","depreciation"],["Rising foreign debt",15,"foreign debt","borrowing from abroad","debt"],["Selling assets to foreigners",8,"asset sales"],
  ["Higher interest rates",6,"interest rates rise"],["Job losses in export industries",6,"job losses","unemployment"],["Lower credit rating",6,"credit rating"],["Twin deficits",.4]]),
P("ec082","4.7","Name a link between poverty and environmental sustainability.","Poverty–environment trap",[
  ["Poor people depend on natural resources",15,"dependence on natural resources","reliance on resources"],["Deforestation for fuel and farming",15,"deforestation","firewood","slash and burn"],
  ["Climate change hits the poor hardest",15,"climate change","vulnerability"],["Overgrazing",8,"desertification"],["Lack of clean water",8,"water"],["Unsustainable farming",8,"soil erosion","soil degradation"],
  ["Pollution near poor communities",5,"pollution"],["Poverty–environment trap",.4,"poverty environment trap","poverty trap"]]),
P("ec083","4.7","Name one of the UN Sustainable Development Goals.","Peace, justice and strong institutions",[
  ["No poverty",20,"end poverty","poverty"],["Zero hunger",18,"hunger","end hunger"],["Quality education",12,"education"],["Good health and well-being",12,"health","good health"],
  ["Clean water and sanitation",12,"clean water","sanitation"],["Gender equality",10],["Climate action",10,"climate"],["Affordable and clean energy",6,"clean energy"],
  ["Decent work and economic growth",4,"decent work"],["Reduced inequalities",3,"reduced inequality"],["Life below water",3],["Life on land",3],["Sustainable cities and communities",3,"sustainable cities"],
  ["Responsible consumption and production",2,"responsible consumption"],["Industry, innovation and infrastructure",2,"industry innovation and infrastructure","innovation"],["Partnerships for the goals",2,"partnerships"],
  ["Peace, justice and strong institutions",.4,"peace and justice","peace justice and strong institutions"]]),
P("ec084","4.8","Name an indicator of economic development.","Mean years of schooling",[
  ["GDP per capita",20,"gdp","income per person","gni per capita"],["Human Development Index",18,"hdi"],["Life expectancy",15],["Literacy rate",12,"literacy","education"],["Infant mortality",10,"child mortality"],
  ["Poverty rate",6,"poverty"],["Access to clean water",6,"clean water"],["Doctors per 1,000 people",4,"doctors","healthcare access"],["Internet access",4,"internet"],
  ["Inequality-adjusted HDI",3,"ihdi"],["Mean years of schooling",.4,"years of schooling"]]),
P("ec085","4.8","Name a component of the Human Development Index (HDI).","Logarithm of income",[
  ["Life expectancy at birth",25,"life expectancy","health"],["GNI per capita (PPP)",25,"gni per capita","income","gni","standard of living"],["Expected years of schooling",15,"expected years of school"],
  ["Mean years of schooling",15,"mean years of school","average years of schooling"],["Education",8,"education index"],["Logarithm of income",.4,"log of income","log gni"]]),
P("ec086","4.9","Name a barrier to economic growth or development.","Resource curse",[
  ["Corruption",15],["Poverty trap",15,"poverty cycle","cycle of poverty"],["Poor infrastructure",12,"infrastructure","lack of infrastructure"],["Lack of education",12,"education","human capital","low skills"],
  ["Political instability and conflict",10,"conflict","war","political instability"],["Lack of access to credit",8,"credit","finance","access to finance"],["Over-dependence on primary commodities",8,"primary commodities","commodity dependence"],
  ["Poor healthcare",6,"health","disease"],["Weak institutions",6,"property rights","rule of law"],["High debt",5,"debt","foreign debt"],["Gender inequality",5],["Landlocked geography",4,"geography","landlocked"],
  ["Brain drain",4],["Informal economy",3,"informal sector"],["Resource curse",.4,"dutch disease","paradox of plenty"]]),
P("ec087","4.9","Name a problem of relying on primary commodity exports.","Prebisch–Singer hypothesis",[
  ["Price volatility",25,"volatile prices","unstable prices","price fluctuations"],["Low value added",10,"low value","raw materials earn little"],["Declining terms of trade",12,"terms of trade"],
  ["Low income elasticity of demand",8,"low yed","low income elasticity"],["Resource depletion",6,"depletion","running out"],["Dutch disease",6],["Protectionism in rich countries",4,"tariffs on processed goods","tariff escalation"],
  ["Prebisch–Singer hypothesis",.4,"prebisch singer","prebisch-singer"]]),
P("ec088","4.10","Name a strategy to promote economic growth or development.","Special economic zones",[
  ["Foreign direct investment",12,"fdi"],["Trade liberalization",12,"free trade","trade liberalisation"],["Foreign aid",12,"aid"],["Education",12,"human capital","schooling"],
  ["Export promotion",10,"export led growth","exports"],["Import substitution",10,"import substitution industrialization","isi"],["Microfinance",10,"microcredit","microloans"],["Infrastructure",10],
  ["Diversification",6,"economic diversification"],["Fair trade",5],["Debt relief",5,"debt cancellation"],["Empowering women",5,"womens empowerment","gender equality"],["Good governance",4,"anti corruption"],
  ["Tourism",4],["Special economic zones",.4,"sez","sezs","export processing zones"]]),
P("ec089","4.10","Name a type of foreign aid or an organization that gives it.","Technical assistance",[
  ["Humanitarian aid",15,"emergency aid","disaster relief"],["Development aid",12,"development assistance"],["Tied aid",10],["World Bank",8],["NGOs",8,"oxfam","charities","ngo"],
  ["Untied aid",6],["Bilateral aid",6,"bilateral"],["Multilateral aid",6,"multilateral"],["Grants",6,"grant"],["Concessional loans",6,"soft loans","loans"],["IMF",6,"international monetary fund"],
  ["Official development assistance",4,"oda"],["USAID",4],["Technical assistance",.4,"technical cooperation","technical aid"]]),
P("ec090","4.10","Name a development success story, programme or institution.","Bolsa Família",[
  ["Grameen Bank",25,"grameen","muhammad yunus","yunus"],["M-Pesa",10,"mpesa","mobile money"],["Kiva",10],["South Korea's growth",8,"south korea","asian tigers","east asian tigers"],
  ["China's economic reforms",6,"china","chinas reforms","deng xiaoping"],["BRAC",6],["Botswana's diamond-led growth",4,"botswana"],["Rwanda's recovery",3,"rwanda"],["Bangladesh's garment industry",3,"bangladesh"],
  ["Bolsa Família",.4,"bolsa familia","conditional cash transfers","oportunidades"]]),
];

/* ================= the market (upwards) ================= */
const BANDS = [
  {name:"Barter market",      zone:"The barter market",        from:0,  to:40,  hue:35,  bg:["#1f1a12","#241d14"]},
  {name:"Village market",     zone:"Village market day",       from:40, to:100, hue:80,  bg:["#241d14","#1d2414"]},
  {name:"Factory town",       zone:"Factory town",             from:100,to:170, hue:20,  bg:["#1d2414","#2a1e18"]},
  {name:"High street",        zone:"The high street",          from:170,to:250, hue:340, bg:["#2a1e18","#2a1828"]},
  {name:"Central bank",       zone:"The central bank",         from:250,to:320, hue:200, bg:["#2a1828","#14243a"]},
  {name:"Stock exchange",     zone:"The stock exchange",       from:320,to:390, hue:145, bg:["#14243a","#0f2a24"]},
  {name:"Container port",     zone:"The container port",       from:390,to:460, hue:190, bg:["#0f2a24","#0f2234"]},
  {name:"Currency markets",   zone:"Global currency markets",  from:460,to:530, hue:265, bg:["#0f2234","#1e1640"]},
  {name:"The bubble",         zone:"The speculative bubble",   from:530,to:600, hue:310, bg:["#1e1640","#2a0f30"]},
  {name:"The invisible hand", zone:"The invisible hand",       from:600,to:760, hue:48,  bg:["#2a0f30","#08060f"]},
];
const FACTS = [
  [-30,"scarcity: unlimited wants, limited resources"],[12,"before money, people swapped goods: a double coincidence of wants"],[30,"every choice has an opportunity cost"],
  [55,"price is where supply meets demand"],[85,"a shortage pushes the price up; a surplus pushes it down"],[115,"the division of labour: Adam Smith's pin factory"],[150,"diminishing returns set in sooner or later"],
  [190,"a sale price only works if demand is price elastic"],[225,"brands fight with advertising, not just price"],[265,"central banks raise interest rates to cool inflation"],
  [300,"money: a medium of exchange, a unit of account, a store of value"],[340,"a bull market rises; a bear market falls"],[372,"shares are a claim on a firm's future profits"],
  [410,"most of the world's goods travel by container ship"],[445,"comparative advantage: do what you give up least to do"],[480,"a stronger currency makes imports cheaper and exports dearer"],
  [515,"exchange markets trade trillions of dollars a day"],[548,"tulip mania, 1637: a bulb for the price of a house"],[580,"bubbles burst when confidence runs out"],
  [620,"\"It is not from the benevolence of the butcher… that we expect our dinner\" · Adam Smith"],[665,"the invisible hand: self-interest guiding markets to the common good"],[710,"there's no such thing as a free lunch"],
];
function wall(i, len, side){
  const r = srand(457 + i*37 + (side==="r"?19:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: // barter: sacks, a goat and baskets traded on a dusty ground
      s += `<rect width="120" height="${len}" fill="#2a2114"/>`;
      rep(170, y=>{ s+=`<path d="M14 ${y+70} q-6 -40 16 -56 h28 q22 16 16 56z" fill="#a8844a" stroke="#6a4a1a" stroke-width="2"/><path d="M26 ${y+14} q14 -10 28 0" stroke="#6a4a1a" stroke-width="3" fill="none"/><text x="44" y="${y+52}" text-anchor="middle" font-size="14" fill="#6a4a1a" font-family="Chakra Petch,sans-serif">GRAIN</text>`
        + `<g transform="translate(78 ${y+110})"><ellipse rx="20" ry="11" fill="#e8e0d0"/><circle cx="20" cy="-8" r="7" fill="#e8e0d0"/><path d="M22 -14 l6 -8 M18 -14 l2 -9" stroke="#8a7a5a" stroke-width="2"/><path d="M-12 8 v12 M-4 8 v12 M6 8 v12 M14 8 v12" stroke="#e8e0d0" stroke-width="3"/></g>`
        + `<path d="M8 ${y+150} h44 l-6 22 h-32z" fill="#c9a060"/><circle cx="20" cy="${y+146}" r="6" fill="#d8402a"/><circle cx="32" cy="${y+144}" r="6" fill="#e8b030"/><circle cx="44" cy="${y+147}" r="6" fill="#7ac040"/>`; });
      rep(120, y=>{ s+=`<path d="M${f1(66+r()*30)} ${y+40} l10 -6 l10 6" stroke="#ffd27a" stroke-width="2" fill="none" opacity=".6"/>`; }, 60);
      break;
    case 1: // market stalls with striped awnings and price tags
      rep(150, y=>{ const c = ["#e8443a","#3a8ae8","#e8b030"][Math.floor(r()*3)];
        for (let k=0;k<6;k++) s+=`<rect x="${k*20}" y="${y}" width="20" height="24" fill="${k%2?c:"#fff4e0"}"/>`;
        s+=`<path d="M0 ${y+24} q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0" fill="${c}"/><rect x="8" y="${y+40}" width="104" height="70" fill="#6a4a2a"/>`
          + [0,1,2,3].map(k=>`<circle cx="${24+k*24}" cy="${y+56}" r="9" fill="${["#d8402a","#7ac040","#e8b030","#a050c0"][k]}"/>`).join("")
          + `<g transform="rotate(-8 40 ${y+90})"><rect x="20" y="${y+80}" width="40" height="20" rx="3" fill="#fff4c8"/><text x="40" y="${y+95}" text-anchor="middle" font-size="12" font-weight="700" fill="#5a3a0a" font-family="Chakra Petch,sans-serif">$${(1+r()*4).toFixed(2)}</text></g>`; });
      break;
    case 2: // factory town: brick factories, chimneys, cogs
      for (let y=0; y<len; y+=16) for (let x=((y/16)%2)*14-14; x<120; x+=28) s+=`<rect x="${x}" y="${y}" width="26" height="14" fill="hsl(12 40% ${f1(22+r()*7)}%)"/>`;
      rep(220, y=>{ s+=`<rect x="10" y="${y+60}" width="100" height="90" fill="#3a2a24"/><path d="M10 ${y+60} l25 -22 v22 l25 -22 v22 l25 -22 v22 l25 -22 v22z" fill="#4a3a30"/>`
        + `<rect x="80" y="${y}" width="16" height="70" fill="#4a2a1a"/><rect x="78" y="${y}" width="20" height="8" fill="#5a3a2a"/>`
        + [0,1,2].map(k=>`<circle class="drift" style="animation-delay:-${f1(r()*3)}s" cx="${90+k*6}" cy="${y-12-k*14}" r="${8+k*4}" fill="#8a8a8a" opacity=".35"/>`).join("")
        + [0,1,2,3].map(k=>`<rect x="${20+k*22}" y="${y+90}" width="14" height="16" fill="#ffd27a" opacity="${f1(.5+r()*.5)}"/>`).join("")
        + `<g class="vspin" style="transform-origin:34px ${y+180}px;animation-duration:8s"><circle cx="34" cy="${y+180}" r="16" fill="none" stroke="#8a8a8a" stroke-width="6" stroke-dasharray="6 5"/><circle cx="34" cy="${y+180}" r="6" fill="#8a8a8a"/></g>`; });
      break;
    case 3: // high street: shopfronts with SALE signs and shopping bags
      rep(170, y=>{ const c = `hsl(${Math.floor(r()*360)} 55% 45%)`;
        s+=`<rect x="6" y="${y}" width="108" height="150" fill="#2a2030"/><rect x="6" y="${y}" width="108" height="26" fill="${c}"/><rect x="16" y="${y+40}" width="88" height="60" fill="#9fd8ff" opacity=".25"/>`
          + `<text x="60" y="${y+18}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">${["SHOP","MALL","OUTLET","STORE"][Math.floor(r()*4)]}</text>`
          + `<g class="blink" style="animation-duration:1.6s;animation-delay:-${f1(r()*2)}s"><rect x="30" y="${y+54}" width="60" height="26" rx="4" fill="#e8443a"/><text x="60" y="${y+72}" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">${["SALE","−50%","2 FOR 1","BOGOF"][Math.floor(r()*4)]}</text></g>`
          + `<rect x="44" y="${y+108}" width="32" height="42" fill="#1a1420"/><path d="M90 ${y+124} h18 l-3 22 h-12z" fill="${c}"/><path d="M93 ${y+124} q6 -10 12 0" stroke="${c}" stroke-width="2" fill="none"/>`; });
      break;
    case 4: // central bank: columns, vault door and the interest-rate board
      s += `<rect width="120" height="${len}" fill="#1a2436"/>`;
      rep(200, y=>{ s+=`<path d="M4 ${y+24} l56 -24 l56 24z" fill="#c9cfd8"/><rect x="4" y="${y+24}" width="112" height="8" fill="#a8b0bc"/>`
        + [0,1,2,3].map(k=>`<rect x="${12+k*28}" y="${y+34}" width="12" height="110" fill="#d8dee6"/><rect x="${9+k*28}" y="${y+34}" width="18" height="6" fill="#b8c0ca"/>`).join("")
        + `<rect x="4" y="${y+144}" width="112" height="10" fill="#a8b0bc"/>`; });
      rep(260, y=>{ s+=`<rect x="20" y="${y}" width="80" height="44" rx="4" fill="#0a1220" stroke="#5ab4ff" stroke-width="2"/><text x="60" y="${y+16}" text-anchor="middle" font-size="9" fill="#9fd8ff" font-family="IBM Plex Mono,monospace">BASE RATE</text>`
        + `<text x="60" y="${y+36}" text-anchor="middle" font-size="18" font-weight="700" fill="#ffd25a" font-family="Chakra Petch,sans-serif" class="blink" style="animation-duration:2.4s">${(r()*5+.25).toFixed(2)}%</text>`; }, 170);
      break;
    case 5: // stock exchange: green and red candlesticks and a ticker
      s += `<rect width="120" height="${len}" fill="#0c1e1a"/>`;
      for (let y=10; y<len; y+=30) s+=`<path d="M0 ${y}h120" stroke="#1e3a32" stroke-width="1"/>`;
      rep(36, y=>{ for (let x=10; x<120; x+=22){ const up = r()<.6, hh = f1(8+r()*20), yy = f1(y+r()*14);
        s+=`<line x1="${x+4}" x2="${x+4}" y1="${f1(+yy-6)}" y2="${f1(+yy + +hh + 6)}" stroke="${up?"#3ee089":"#ff5470"}" stroke-width="1.5"/><rect x="${x}" y="${yy}" width="8" height="${hh}" fill="${up?"#3ee089":"#ff5470"}"/>`; } }, 10);
      rep(240, y=>{ s+=`<rect x="0" y="${y}" width="120" height="18" fill="#000" opacity=".6"/><text x="6" y="${y+13}" font-size="10" fill="#3ee089" font-family="IBM Plex Mono,monospace">${["ACME ▲2.1%","IBX ▲0.8%","BULL ▲4.2%","OIL ▼1.3%"][Math.floor(r()*4)]}</text>`; }, 120);
      break;
    case 6: { // container port: stacked containers and cranes
      const cols = ["#e8443a","#3a8ae8","#3ac08a","#e8b030","#a050c0","#e87a30"];
      s += `<rect width="120" height="${len}" fill="#10202e"/>`;
      rep(18, y=>{ for (let x=4; x<116; x+=37){ if (r()<.25) continue; s+=`<rect x="${x}" y="${y}" width="34" height="16" fill="${cols[Math.floor(r()*cols.length)]}"/><path d="M${x+4} ${y+3}v10M${x+10} ${y+3}v10M${x+16} ${y+3}v10M${x+22} ${y+3}v10M${x+28} ${y+3}v10" stroke="#000" stroke-opacity=".25"/>`; } }, 0);
      rep(300, y=>{ s+=`<path d="M20 ${y+200} V${y} H110 M20 ${y+20} L60 ${y} M86 ${y} v40" stroke="#e8b030" stroke-width="5" fill="none"/><rect x="76" y="${y+40}" width="22" height="12" fill="#3a8ae8"/>`; }, 60);
    } break;
    case 7: // currency markets: symbols and an exchange board
      rep(46, y=>{ s+=`<text x="${f1(10+r()*90)}" y="${y}" font-size="${f1(16+r()*20)}" fill="hsl(${h} 70% 75%)" opacity="${f1(.25+r()*.5)}" font-family="Chakra Petch,sans-serif" class="${r()<.3?"blink":""}">${["$","€","¥","£","₹","₩","₣","₽","₺","₿"][Math.floor(r()*10)]}</text>`; }, 30);
      rep(250, y=>{ s+=`<rect x="10" y="${y}" width="100" height="70" rx="4" fill="#0a0820" stroke="#b07aff" stroke-width="2"/>`
        + [["USD/EUR","0.92"],["GBP/USD","1.27"],["USD/JPY","151.4"]].map(([a,b],k)=>`<text x="18" y="${y+20+k*20}" font-size="10" fill="#c9a3ff" font-family="IBM Plex Mono,monospace">${a}</text><text x="102" y="${y+20+k*20}" text-anchor="end" font-size="10" fill="#ffd25a" font-family="IBM Plex Mono,monospace">${b}</text>`).join(""); }, 100);
      break;
    case 8: // the bubble: soap bubbles and tulips (tulip mania)
      rep(70, y=>{ const R = f1(10+r()*26); s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><circle cx="${f1(20+r()*80)}" cy="${y}" r="${R}" fill="hsl(${f1(260+r()*80)} 80% 75% / .12)" stroke="hsl(${f1(260+r()*80)} 90% 80% / .6)" stroke-width="1.5"/></g>`; }, 20);
      rep(190, y=>{ const c = ["#ff4f8a","#ffd25a","#ff7a3a","#c94fff"][Math.floor(r()*4)]; s+=`<path d="M60 ${y+120} q-4 -40 0 -70" stroke="#3a8a3a" stroke-width="4" fill="none"/><path d="M60 ${y+90} q-24 -6 -26 -26 q16 4 26 20z" fill="#3a8a3a"/>`
        + `<path d="M46 ${y+52} q-2 -26 8 -32 l6 10 l6 -10 q10 6 8 32 q-14 10 -28 0z" fill="${c}"/>`; }, 60);
      break;
    case 9: // the invisible hand: stars, gold and a glowing hand
      rep(34, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${f1(y+r()*30)}" r="${f1(.8+r()*1.6)}" fill="#fff6c8" class="${r()<.35?"blink":""}"/>`; });
      rep(420, y=>{ s+=`<g opacity=".55" class="drift"><path d="M40 ${y+120} v-60 q0 -8 7 -8 q7 0 7 8 v-24 q0 -8 7 -8 q7 0 7 8 v20 q0 -8 7 -8 q7 0 7 8 v12 q0 -8 6 -8 q7 0 7 8 v40 q0 34 -30 34 q-28 0 -32 -20 l-16 -30 q-4 -8 4 -10 q6 -2 10 6z" fill="#ffe58a" opacity=".35" stroke="#ffd25a" stroke-width="2"/></g>`; }, 80);
      break;
  }
  return vwall(s, len, side);
}
/* the bull: horns grow, then a nose ring, then gold */
function avatar(level, hue){
  const horn = 10 + level*1.6, gold = level >= 8, body = gold ? "#e0ad2a" : "#6a3a1a", face = gold ? "#ffd25a" : "#8a4a22";
  const s = `<g class="av-rock">
    <path d="M-14 -10 q-${f1(horn*.6)} -4 -${f1(horn)} -${f1(horn*.9)} q${f1(horn*.25)} ${f1(horn*.6)} ${f1(horn*.55)} ${f1(horn*1.05)}z" fill="#f4ead0" stroke="#5a4a2a" stroke-width="1.5"/>
    <path d="M14 -10 q${f1(horn*.6)} -4 ${f1(horn)} -${f1(horn*.9)} q-${f1(horn*.25)} ${f1(horn*.6)} -${f1(horn*.55)} ${f1(horn*1.05)}z" fill="#f4ead0" stroke="#5a4a2a" stroke-width="1.5"/>
    <ellipse cx="-20" cy="-4" rx="8" ry="4.5" fill="${body}" transform="rotate(-20 -20 -4)"/><ellipse cx="20" cy="-4" rx="8" ry="4.5" fill="${body}" transform="rotate(20 20 -4)"/>
    <path d="M-15 -14 q15 -8 30 0 q5 14 2 26 q-4 14 -17 14 q-13 0 -17 -14 q-3 -12 2 -26z" fill="${face}" stroke="${gold ? "#fff2a8" : "#3a1a08"}" stroke-width="2"/>
    <path d="M-6 -15 q6 6 12 0" stroke="${body}" stroke-width="3" fill="none"/>
    <circle cx="-7" cy="-3" r="3.4" fill="#fff"/><circle cx="7" cy="-3" r="3.4" fill="#fff"/><g class="av-blink"><circle cx="-6.4" cy="-2.6" r="1.8" fill="#1a0a04"/><circle cx="7.6" cy="-2.6" r="1.8" fill="#1a0a04"/></g>
    <path d="M-10 -8 l6 2 M10 -8 l-6 2" stroke="#1a0a04" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cy="13" rx="11" ry="7.5" fill="${gold ? "#f5c84a" : "#c98a6a"}"/><ellipse cx="-4" cy="13" rx="2" ry="2.6" fill="#3a1a08"/><ellipse cx="4" cy="13" rx="2" ry="2.6" fill="#3a1a08"/>
    ${level >= 4 ? `<path d="M-5 18 q5 9 10 0" stroke="#ffd25a" stroke-width="2.4" fill="none"/>` : ""}
    ${level >= 6 ? `<path class="blink" d="M-30 18 q-6 -8 0 -14 M30 18 q6 -8 0 -14" stroke="#ddd" stroke-width="2" fill="none" opacity=".7"/>` : ""}
    ${gold ? `<path d="M0 -30 l2.4 5 5.4 .8 -3.9 3.8 .9 5.4 -4.8 -2.6 -4.8 2.6 .9 -5.4 -3.9 -3.8 5.4 -.8z" fill="#fff2a8" class="blink"/>` : ""}
    <path d="M24 26 l6 -10 l5 6 l7 -14" stroke="#3ee089" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 6 l5 0 l-1 5" stroke="#3ee089" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<circle cx="100" cy="56" r="44" fill="${c}" opacity=".18"/><path d="M60 92 l20 -26 l18 12 l24 -34 l18 14" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M130 50 l12 -6 l-2 13" stroke="${c}" stroke-width="7" fill="none" stroke-linecap="round"/>`
    + [0,1,2,3,4].map(k=>`<path class="blink" style="animation-delay:${k*.25}s" d="M${44+k*28} ${18+(k%2)*10} l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="#fff2a8"/>`).join(""));
  if (t === "rootkit") return W(170,100,[0,1,2].map(k=>`<path d="M${34+k*36} ${84-k*0} l10 -26 h36 l10 26z" fill="#e0ad2a" stroke="#fff2a8" stroke-width="2"/>`).join("") + `<path d="M52 56 l10 -26 h36 l10 26z" fill="#ffd25a" stroke="#fff2a8" stroke-width="2"/><path d="M88 56 l10 -26 h36 l10 26z" fill="#e0ad2a" stroke="#fff2a8" stroke-width="2"/>`);
  if (t === "trojan") return W(170,100,[0,1,2,3,4,5].map(k=>{ const hh = 14 + k*11; return `<line x1="${30+k*22}" x2="${30+k*22}" y1="${88-hh-8}" y2="92" stroke="${c}" stroke-width="2"/><rect x="${25+k*22}" y="${88-hh}" width="10" height="${hh-6}" fill="${c}"/>`; }).join(""));
  if (t === "adware") return W(170,100,`<path d="M30 80 l40 -24 l24 12 l46 -40" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M126 26 l16 2 l-4 15" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/>`);
  if (t === "spam") return W(170,90,[0,1,2].map(k=>`<ellipse cx="${70+k*16}" cy="${66-k*8}" rx="16" ry="6" fill="${c}" stroke="#fff" stroke-opacity=".4"/>`).join("") + `<path d="M40 30 h90" stroke="${c}" stroke-width="4" stroke-dasharray="8 6"/>`);
  if (t === "blocked") return W(170,100,`<rect x="20" y="20" width="130" height="18" rx="3" fill="#e8443a"/><text x="85" y="34" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">PRICE CEILING</text><path d="M40 50 l30 16 l20 -8 l40 30" stroke="#e8443a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M118 92 l14 -2 l-4 -13" stroke="#e8443a" stroke-width="6" fill="none" stroke-linecap="round"/>`);
  return null;
}
const index = p => 100 * Math.pow(10, p*4/700);
const pts = v => v >= 1e6 ? (v/1e6).toFixed(2) + "M" : Math.round(v).toLocaleString();
registerSubject({
  key:"econ", name:"Economics", theme:"A bull charging up the market to the invisible hand", gemWord:"Billion", gemTitle:"One in a Billion", emoji:"🐂",
  blurb:"You're a young bull at a barter market. Each prompt has many correct answers. <b>Obvious answers barely move the market. Answers other players missed send your index charging up</b>, through the factory town, the central bank, the stock exchange and a speculative bubble, all the way to the invisible hand.",
  axis:"up", arrow:"▲",
  tiers:{gem:"One in a Billion", rootkit:"Bull run", trojan:"Boom", adware:"Recovery", spam:"Stagnation"}, blocked:"Market failure", fw:"PRICE CEILING",
  notes:{rootkit:"A rare insight. Very few traders spotted this one.", trojan:"Off the obvious trading floor. Nicely done.", adware:"A known answer, but not the first one people give.", spam:"The answer the whole market gives first."},
  ladder:{gem:"Hardly anyone in the world gives this answer", rootkit:"A rare insight the market missed", trojan:"A strong answer most people don't reach for", adware:"Correct, but a familiar one", spam:"The answer everyone gives first", blocked:"Not an accepted answer"},
  verbs:{cta:"Charge ▲", inject:"Trade", hint:"▲ rarer answers push the market higher ▲", count:"reading the market"},
  shout:t => ({gem:"TO THE MOON!", rootkit:"BUY! BUY! BUY!", blocked:"SELL!"})[t],
  particles:["$","%","€","↑"], particleColor:"#3ee089",
  meter:{label:"INDEX", fmt:p=>pts(index(p))+" pts", zone:p=>pts(index(p))+' <span style="text-transform:none">pts</span>', tick:p=>pts(index(p)), gain:(a,b)=>`up ${pts(index(b)-index(a))} pts`},
  start:{bg:"linear-gradient(0deg,#0e0a06,#1f1a12)", label:'Start · 100 <span style="text-transform:none">pts</span>', zone:"Opening bell", color:"#3ee089"},
  endBg:"#05040a",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  extras:({pos, WMAX})=>{ const bottom = pos(0) + 60, top = pos(WMAX - 10), r = srand(91), n = 90; let d = "", x = 50;
    for (let k = 0; k <= n; k++){ x = Math.max(12, Math.min(88, x + (r() - .5) * 22)); d += `${k ? "L" : "M"}${f1(x)} ${f1(100 - k * 100 / n)} `; }
    return `<svg class="ec-chart" style="top:${top}px;height:${bottom-top}px" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${d}" fill="none" stroke="#3ee089" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>`; },
  beyond:"Beyond the hand",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
