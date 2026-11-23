/* Business Management — a bottle of money that fills and rises. Rarer answers grow the money faster.
   Syllabus: IB Business Management (first assessment 2024), units 1–5. */
(function(){
const CATALOG = [
  {label:"Business Management", units:[
    {code:"Unit 1", name:"Introduction to business management", topics:[["1.1","Introduction to business management"],["1.2","Types of business entities"],["1.3","Business objectives"],["1.4","Stakeholders"],["1.5","Growth and evolution"],["1.6","Multinational companies (MNCs)",HL]]},
    {code:"Unit 2", name:"Human resource management", topics:[["2.1","Introduction to human resource management"],["2.2","Organizational structure"],["2.3","Leadership and management"],["2.4","Motivation and demotivation"],["2.5","Organizational (corporate) culture",HL],["2.6","Communication"],["2.7","Industrial/employee relations",HL]]},
    {code:"Unit 3", name:"Finance and accounts", topics:[["3.1","Introduction to finance"],["3.2","Sources of finance"],["3.3","Costs and revenues"],["3.4","Final accounts"],["3.5","Profitability and liquidity ratio analysis"],["3.6","Debt/efficiency ratio analysis",HL],["3.7","Cash flow"],["3.8","Investment appraisal"],["3.9","Budgets",HL]]},
    {code:"Unit 4", name:"Marketing", topics:[["4.1","Introduction to marketing"],["4.2","Marketing planning"],["4.3","Sales forecasting",HL],["4.4","Market research"],["4.5","The seven Ps of the marketing mix"],["4.6","International marketing",HL]]},
    {code:"Unit 5", name:"Operations management", topics:[["5.1","Introduction to operations management"],["5.2","Operations methods"],["5.3","Lean management and quality management",HL],["5.4","Location"],["5.5","Break-even analysis"],["5.6","Production planning",HL],["5.7","Crisis management and contingency planning",HL],["5.8","Research and development",HL],["5.9","Management information systems",HL]]},
  ]},
];

const PROMPTS = [
P("bz01","1.1","Name a sector of the economy.","Quinary sector",[
  ["Primary",25,"primary sector"],["Secondary",25,"secondary sector"],["Tertiary",25,"tertiary sector","services"],["Quaternary",6,"quaternary sector"],
  ["Public sector",6,"public"],["Private sector",6,"private"],["Quinary sector",.4,"quinary"]]),
P("bz02","1.2","Name a type of business entity.","Microfinance provider",[
  ["Sole trader",30,"sole proprietor","sole proprietorship"],["Partnership",20],["Private limited company",12,"ltd","private company"],["Public limited company",12,"plc","public company"],
  ["Franchise",6],["Cooperative",6,"co operative","coop"],["Non-profit / charity",5,"charity","non profit","ngo","not for profit"],["Social enterprise",4],
  ["Public-private partnership",1,"ppp"],["Microfinance provider",.4,"microfinance"]]),
P("bz03","1.3","Name a business objective.","Satisficing",[
  ["Profit",30,"profit maximisation","profit maximization","make money"],["Growth",15,"expansion"],["Survival",12],["Market share",10],["CSR / ethical objectives",8,"csr","corporate social responsibility","ethics","ethical"],
  ["Customer satisfaction",6],["Break even",4],["Brand image",4,"reputation"],["Sustainability",4],["Shareholder value",3,"dividends"],["Satisficing",.4]]),
P("bz04","1.4","Name a stakeholder of a business.","Future generations",[
  ["Employees",25,"workers","staff"],["Customers",20,"consumers"],["Shareholders",15,"owners","investors"],["Suppliers",10],["Managers",6,"management"],["Government",6],
  ["Local community",6,"community"],["Banks / creditors",5,"banks","creditors","lenders"],["Pressure groups",3,"ngos"],["Competitors",2],["Future generations",.4]]),
P("bz05","1.5","Name a way a business can grow.","Conglomerate diversification",[
  ["Merger",15],["Takeover / acquisition",15,"takeover","acquisition"],["Organic growth",12,"internal growth","organic"],["Opening new branches",12,"new stores","new branches","expansion"],
  ["Franchising",10,"franchise"],["New products",6,"product development"],["New markets / exporting",6,"exporting","new markets","international expansion"],["Joint venture",6],
  ["Strategic alliance",5],["Horizontal integration",3],["Vertical integration",3,"backward integration","forward integration"],["Conglomerate diversification",.4,"conglomerate"]]),
P("bz06","1.6","Name an effect a multinational company can have on a host country.","Transfer pricing",[
  ["Creates jobs",30,"jobs","employment"],["Investment / FDI",10,"investment","fdi","foreign direct investment"],["Exploits workers",8,"low wages","exploitation"],
  ["Tax revenue",8,"taxes"],["Local firms struggle",8,"competition","local businesses close"],["Technology transfer",6,"skills","new technology"],["Environmental damage",6,"pollution"],
  ["Cultural influence",4,"westernisation","culture"],["Profits sent abroad",3,"profit repatriation","repatriation"],["Transfer pricing",.4]], [], HL),
P("bz07","2.2","Name a term about organizational structure.","Shamrock organization",[
  ["Hierarchy",20,"hierarchical"],["Span of control",15],["Chain of command",15],["Delegation",10],["Flat structure",10,"flat"],["Tall structure",8,"tall"],
  ["Matrix structure",5,"matrix"],["Centralization",5,"centralisation","centralised"],["Decentralization",5,"decentralisation","decentralised"],["Delayering",3,"de layering"],
  ["Shamrock organization",.4,"shamrock","handy"]]),
P("bz08","2.3","Name a leadership style.","Servant leadership",[
  ["Autocratic",30,"authoritarian"],["Democratic",25,"participative"],["Laissez-faire",20,"laissez faire"],["Paternalistic",10],["Situational",6],["Transformational",3],
  ["Bureaucratic",2],["Servant leadership",.4,"servant"]]),
P("bz09","2.4","Name a motivation theory or theorist.","Self-determination theory",[
  ["Maslow",30,"hierarchy of needs","maslows hierarchy"],["Herzberg",15,"two factor theory","hygiene factors"],["Taylor",15,"scientific management"],["Pink",6,"daniel pink","drive"],
  ["Adams (equity theory)",5,"adams","equity theory"],["Mayo",3,"hawthorne"],["McClelland",2,"mcclelland"],["Vroom",2,"expectancy theory"],["Self-determination theory",.4,"deci and ryan","deci","ryan"]]),
P("bz10","2.4","Name a way to motivate or reward employees.","Sabbatical",[
  ["Pay rise / salary",25,"pay","salary","wages","money","pay rise"],["Bonus",12,"bonuses"],["Promotion",10],["Praise / recognition",8,"praise","recognition"],["Commission",6],
  ["Profit sharing",6,"profit related pay"],["Training",6],["Job enrichment",5],["Flexible working",5,"flexible hours","remote work"],["Fringe benefits",5,"perks","benefits"],
  ["Teamwork",4],["Empowerment",3],["Job rotation",2],["Sabbatical",.4]]),
P("bz11","3.2","Name a source of finance.","Microfinance",[
  ["Bank loan",25,"loan","loans"],["Retained profit",12,"retained earnings"],["Share issue",12,"selling shares","shares"],["Overdraft",10,"bank overdraft"],["Personal savings",10,"savings"],
  ["Venture capital",6],["Crowdfunding",6],["Leasing",4],["Trade credit",4],["Grants / subsidies",4,"grant","subsidy","government grant"],["Business angels",4,"angel investors"],
  ["Sale of assets",3],["Debt factoring",2,"factoring"],["Microfinance",.4,"microcredit"]]),
P("bz12","3.3","Name a type of cost.","Opportunity cost",[
  ["Fixed costs",30,"fixed"],["Variable costs",25,"variable"],["Direct costs",10,"direct"],["Indirect costs / overheads",10,"overheads","indirect"],["Total cost",8],
  ["Average cost",4],["Semi-variable costs",4,"semi variable"],["Marginal cost",3],["Opportunity cost",.4]]),
P("bz13","3.4","Name an item on a statement of financial position (balance sheet).","Intangible assets",[
  ["Cash",12],["Non-current assets",10,"fixed assets","property","machinery","buildings","equipment"],["Inventory / stock",10,"stock","inventory"],["Debtors / receivables",8,"debtors","trade receivables"],
  ["Current liabilities",8,"creditors","trade payables"],["Share capital",8],["Long-term liabilities",6,"loans","mortgage","non current liabilities"],["Retained earnings",6,"retained profit"],
  ["Total equity",4,"equity"],["Accumulated depreciation",3,"depreciation"],["Intangible assets",.4,"goodwill","intangibles","patents"]],
  [[["revenue","sales","cost of sales","gross profit","expenses"],"That belongs on the statement of profit or loss, not the balance sheet."]]),
P("bz14","3.5","Name a financial ratio.","Interest cover",[
  ["Gross profit margin",22,"gpm","gross margin"],["Profit margin",18,"net profit margin","npm"],["Current ratio",14],["Acid-test ratio",10,"acid test","quick ratio"],
  ["ROCE",10,"return on capital employed"],["Gearing ratio",8,"gearing"],["Stock turnover",5,"inventory turnover"],["Debtor days",4,"receivable days"],["Creditor days",3,"payable days"],
  ["Interest cover",.4]]),
P("bz15","3.7","Name a way to improve cash flow.","Just-in-time stock control",[
  ["Cut costs",20,"reduce costs","reduce expenses","cut spending"],["Chase debtors",15,"reduce credit to customers","collect debts faster","get paid sooner"],
  ["Delay paying suppliers",12,"longer credit from suppliers","pay suppliers later"],["Increase sales or prices",10,"increase sales","raise prices"],["Overdraft",10],
  ["Sell assets",6],["Leasing instead of buying",5,"leasing","lease"],["Debt factoring",5,"factoring"],["Reduce inventory",4,"less stock"],["Sale and leaseback",3],
  ["Just-in-time stock control",.4,"just in time","jit"]]),
P("bz16","3.8","Name a method of investment appraisal.","Discounted payback",[
  ["Payback period",40,"payback"],["Average rate of return",30,"arr"],["Net present value",25,"npv"],["Internal rate of return",3,"irr"],["Discounted payback",.4]]),
P("bz17","4.4","Name a method of market research.","Ethnographic research",[
  ["Survey / questionnaire",30,"survey","questionnaire","questionnaires"],["Interviews",12,"interview"],["Focus groups",12,"focus group"],["Secondary research",10,"desk research","secondary data"],
  ["Observation",8],["Test marketing",5],["Online analytics",4,"web analytics","website data"],["Social media monitoring",4,"social media"],["Ethnographic research",.4,"ethnography"]]),
P("bz18","4.4","Name a sampling method.","Judgemental sampling",[
  ["Random sampling",25,"random"],["Stratified sampling",15,"stratified"],["Quota sampling",15,"quota"],["Convenience sampling",10,"convenience"],["Cluster sampling",8,"cluster"],
  ["Snowball sampling",6,"snowball"],["Systematic sampling",6,"systematic"],["Judgemental sampling",.4,"judgmental","judgement","purposive"]]),
P("bz19","4.5","Name one of the seven Ps of the marketing mix.","Physical evidence",[
  ["Product",25],["Price",25],["Place",20,"distribution"],["Promotion",20,"advertising"],["People",6],["Process",4,"processes"],["Physical evidence",.4]]),
P("bz20","4.5","Name a pricing strategy.","Predatory pricing",[
  ["Penetration pricing",20,"penetration"],["Price skimming",15,"skimming"],["Cost-plus pricing",12,"cost plus","mark up"],["Competitive pricing",10,"competition based pricing"],
  ["Psychological pricing",10,"psychological","99p"],["Loss leader",6],["Premium pricing",6,"premium"],["Price discrimination",4],["Dynamic pricing",4],["Predatory pricing",.4,"predatory"]]),
P("bz21","4.2","Name a marketing or strategy tool.","Blue ocean strategy",[
  ["SWOT analysis",25,"swot"],["STEEPLE / PEST analysis",12,"steeple","pest","pestle"],["Ansoff matrix",10,"ansoff"],["Boston matrix",10,"bcg matrix","boston consulting group"],
  ["Product life cycle",10,"plc"],["Market segmentation",6,"segmentation"],["Position map",6,"perception map","positioning map"],["USP",5,"unique selling point"],["Blue ocean strategy",.4,"blue ocean"]]),
P("bz22","5.2","Name an operations or production method.","Continuous process production",[
  ["Job production",25,"job"],["Batch production",25,"batch"],["Mass / flow production",25,"mass production","flow production","mass","flow"],["Mass customization",6,"mass customisation"],
  ["Cell production",4,"cellular"],["Lean production",4,"lean"],["Continuous process production",.4,"continuous production","process production"]]),
P("bz23","5.5","Name a term used in break-even analysis.","Contribution margin ratio",[
  ["Break-even point",25,"break even","breakeven"],["Contribution",15,"contribution per unit"],["Fixed costs",12],["Margin of safety",10],["Total revenue",10,"revenue"],
  ["Variable costs",10],["Selling price",6,"price"],["Target profit",4],["Contribution margin ratio",.4]]),
P("bz24","5.4","Name a factor that affects where a business locates.","Agglomeration",[
  ["Cost of land / rent",20,"rent","land","cost of land","property prices"],["Labour supply / wages",15,"labour","labor","workers","wages"],["Near customers",15,"customers","market","near market"],
  ["Transport links",12,"transport","infrastructure","roads"],["Raw materials",8],["Government incentives",6,"grants","tax breaks","incentives"],["Competitors nearby",4,"competitors"],
  ["Climate",2],["Agglomeration",.4,"clusters","clustering"]]),
P("bz25","5.3","Name a lean or quality management method.","Poka-yoke",[
  ["Kaizen",20,"continuous improvement"],["Just-in-time",18,"jit","just in time"],["TQM",15,"total quality management"],["Quality control",10],["Quality assurance",8],
  ["Kanban",6],["Benchmarking",5],["Quality circles",4],["Six Sigma",3],["Andon",2],["Poka-yoke",.4,"poka yoke","mistake proofing"]], [], HL),
P("bz26","1.1","Name a factor of production.","Knowledge",[
  ["Land",25,"natural resources"],["Labour",25,"labor","workers"],["Capital",25,"machinery","equipment"],["Enterprise",20,"entrepreneurship","entrepreneur"],["Knowledge",.4,"information"]]),
P("bz27","1.1","Name a business function.","Legal and compliance",[
  ["Marketing",25],["Finance",20,"accounts","finance and accounts"],["Human resources",20,"hr","hrm"],["Operations",20,"production","operations management"],["Research and development",6,"r and d","r d"],
  ["IT",4,"information technology"],["Legal and compliance",.4,"legal","compliance"]]),
P("bz28","1.2","Name a feature of a sole trader or a partnership.","Deed of partnership",[
  ["Unlimited liability",35],["Owner keeps all the profit",15,"keeps profit","all profits"],["Easy to set up",15,"easy to start"],["Shared decisions",10,"shared decision making"],
  ["Limited finance",8,"hard to raise finance"],["Lack of continuity",8,"continuity"],["Deed of partnership",.4,"partnership agreement"]]),
P("bz29","1.2","Name an advantage of becoming a public limited company.","Shares can fund takeovers",[
  ["Raise large amounts of capital",35,"raise capital","sell shares to the public","more finance"],["Limited liability",20],["Easier to borrow",8,"borrowing"],["Higher status",8,"prestige","status"],
  ["Continuity",6],["Shares can fund takeovers",.4,"acquisitions"]], [[["keep control","more control","privacy","less regulation"],"That's a disadvantage of going public: owners lose control and must publish accounts."]]),
P("bz30","1.3","Name a type of aim, objective or statement.","Balanced scorecard",[
  ["Mission statement",20,"mission"],["Vision statement",20,"vision"],["SMART objectives",15,"smart"],["Strategic objectives",12,"strategic"],["Tactical objectives",10,"tactical"],
  ["Operational objectives",10,"operational"],["CSR objectives",6,"csr"],["Balanced scorecard",.4]]),
P("bz31","1.3","Name a way a business shows corporate social responsibility.","Supplier audits",[
  ["Recycling",18],["Fair wages",15,"paying fairly"],["Charity donations",12,"donations","charity"],["Cutting emissions",12,"reducing carbon","carbon neutral"],["Ethical sourcing",10,"fair trade","fairtrade"],
  ["Community projects",8,"community"],["Diversity policies",6,"diversity"],["Supplier audits",.4,"auditing suppliers"]]),
P("bz32","1.4","Name a conflict between stakeholders.","Long-term vs short-term shareholders",[
  ["Workers want pay rises, shareholders want profit",30,"wages vs profit","pay vs profit"],["Customers want low prices, owners want profit",15,"prices vs profit"],
  ["Community wants less pollution, firm wants to expand",12,"pollution","expansion"],["Job cuts",10,"redundancies"],["Suppliers want faster payment",8,"suppliers"],
  ["Long-term vs short-term shareholders",.4,"short termism"]]),
P("bz33","1.4","Name a way to manage stakeholders.","Stakeholder audit",[
  ["Stakeholder mapping",30,"power interest matrix","mendelow","stakeholder map"],["Consultation",15,"consult"],["Communication",12],["Compromise",10],["Negotiation",10],["Stakeholder audit",.4]]),
P("bz34","1.5","Name an economy of scale.","Network economies",[
  ["Bulk buying",30,"purchasing economies","purchasing"],["Technical economies",15,"technical"],["Financial economies",15,"financial","cheaper loans"],["Marketing economies",10,"marketing"],
  ["Managerial economies",10,"managerial","specialist managers"],["Risk-bearing economies",6,"risk bearing"],["Network economies",.4]]),
P("bz35","1.5","Name a diseconomy of scale, or a reason to stay small.","X-inefficiency",[
  ["Poor communication",25,"communication problems"],["Low motivation",15,"alienation"],["Coordination problems",15,"coordination"],["Personal service",10,"personal touch"],["Flexibility",10],
  ["Loss of control",8,"control"],["X-inefficiency",.4,"x inefficiency"]]),
P("bz36","1.6","Name a reason a business becomes multinational.","Following existing customers",[
  ["Access to new markets",30,"new markets","more customers"],["Lower costs",20,"cheap labour","cheaper labour"],["Avoiding trade barriers",12,"tariffs","trade barriers"],["Spreading risk",10,"risk"],
  ["Raw materials",8],["Tax benefits",6,"lower taxes"],["Brand growth",6],["Following existing customers",.4,"follow customers"]], [], HL),
P("bz37","1.6","Name a multinational company.","Tata Group",[
  ["Apple",20],["McDonald's",18,"mcdonalds"],["Amazon",12],["Coca-Cola",12,"coca cola","coke"],["Nike",10],["Toyota",8],["Samsung",8],["Unilever",4],["Nestlé",4,"nestle"],["Tata Group",.4,"tata"]], [], HL),
P("bz38","2.1","Name a stage of recruitment and selection.","Assessment centre",[
  ["Job description",20],["Person specification",18,"person spec"],["Interviews",15,"interview"],["Advertising the job",12,"advert","advertising"],["Shortlisting",8],["Induction",8],["Selection tests",6,"aptitude tests"],
  ["Assessment centre",.4,"assessment center"]]),
P("bz39","2.1","Name a type of training or a flexible way of working.","Job sharing",[
  ["On-the-job training",20,"on the job"],["Off-the-job training",18,"off the job"],["Induction",15],["Flexitime",10,"flexible hours"],["Remote working",10,"working from home","teleworking"],
  ["Part-time work",8,"part time"],["Gig economy",8,"gig work","zero hours"],["Job sharing",.4,"job share"]]),
P("bz40","2.1","Name a reason for high labour turnover.","Poor induction",[
  ["Low pay",30],["Poor working conditions",15],["Poor management",12],["No chance of promotion",12,"promotion"],["Better jobs elsewhere",10],["Stress",6],["Poor induction",.4,"induction"]]),
P("bz41","2.2","Name a way to organise a business's structure.","Holacracy",[
  ["Hierarchical",25,"hierarchy","tall"],["Flat",20],["Matrix",15],["By function",10,"functional"],["By product",10,"product based"],["By region",10,"geographical"],["Project-based",6,"project teams"],["Holacracy",.4]]),
P("bz42","2.2","Name an effect of delayering.","Loss of experience",[
  ["Lower costs",25,"cheaper","saves money"],["Faster communication",20,"quicker communication"],["Wider span of control",15,"span of control"],["Fewer promotion chances",12,"promotion"],
  ["Empowerment",8],["More stress for managers",8,"stress","workload"],["Loss of experience",.4,"loss of expertise"]]),
P("bz43","2.3","Name a difference between leaders and managers.","Leaders challenge the status quo",[
  ["Vision vs planning",25,"vision","planning"],["Inspire vs control",20,"inspire","control"],["People vs tasks",15,"people","tasks"],["Change vs stability",10,"change"],["Long-term vs short-term",10,"long term"],
  ["Leaders challenge the status quo",.4,"status quo"]]),
P("bz44","2.3","Name a function of management (Fayol).","Forecasting",[
  ["Planning",25,"plan"],["Organising",20,"organizing"],["Commanding",15,"directing"],["Coordinating",15],["Controlling",15],["Forecasting",.4]]),
P("bz45","2.4","Name a financial reward for employees.","Piece rate",[
  ["Salary",25],["Wages",20,"wage","hourly pay"],["Commission",12],["Bonus",12],["Performance-related pay",8,"prp","performance related pay"],["Profit-related pay",8,"profit sharing"],
  ["Share ownership",6,"employee shares"],["Fringe benefits",6,"perks"],["Piece rate",.4,"piecework","piece work"]]),
P("bz46","2.5","Name a type of organisational culture (Handy).","Clan culture",[
  ["Power culture",25,"power"],["Role culture",25,"role"],["Task culture",20,"task"],["Person culture",15,"person"],["Clan culture",.4,"clan"]], [], HL),
P("bz47","2.5","Name a sign of a business's culture.","Who gets the parking spaces",[
  ["Dress code",20,"uniform"],["Values",15],["Office layout",15,"open plan"],["Rituals",10,"ceremonies"],["Language and jargon",8,"jargon"],["Stories and heroes",6,"stories"],["Symbols",6],
  ["Who gets the parking spaces",.4,"parking"]], [], HL),
P("bz48","2.5","Name a reason cultures clash at work.","Remote vs office teams",[
  ["Mergers and takeovers",30,"merger","takeover"],["A new leader",15,"new ceo","new manager"],["Different national cultures",15,"national culture"],["Change in structure",10,"restructuring"],
  ["Generational differences",6,"generations"],["Remote vs office teams",.4,"remote work"]], [], HL),
P("bz49","2.6","Name a method of business communication.","Town hall meetings",[
  ["Email",25],["Meetings",18,"meeting"],["Phone calls",12,"phone"],["Video calls",12,"zoom","teams"],["Intranet",8],["Memos",8,"memo"],["Social media",6],["Letters",4],["Notice boards",4],
  ["Town hall meetings",.4,"town hall"]]),
P("bz50","2.6","Name a barrier to effective communication.","Grapevine distortion",[
  ["Jargon",20],["Language barriers",15,"language"],["Noise",12],["Information overload",12,"too much information"],["Cultural differences",10,"culture"],["Poor technology",8,"technology"],
  ["Distance",6],["Attitudes",6,"attitude"],["Grapevine distortion",.4,"grapevine","rumours"]]),
P("bz51","2.6","Name a type or direction of communication.","Diagonal communication",[
  ["Formal",20],["Informal",20],["Verbal",15,"oral"],["Written",15],["Non-verbal",10,"body language"],["Upward",6],["Downward",6],["Horizontal",4,"lateral"],["Diagonal communication",.4,"diagonal"]]),
P("bz52","2.7","Name a form of industrial action by employees.","Sick-out",[
  ["Strike",35,"strikes"],["Work to rule",15],["Go-slow",12,"go slow"],["Overtime ban",10],["Picketing",8,"picket"],["Sit-in",6,"sit in"],["Sick-out",.4,"sick out"]], [], HL),
P("bz53","2.7","Name a way to resolve an industrial dispute.","Pendulum arbitration",[
  ["Collective bargaining",25],["Negotiation",20],["Arbitration",12],["Conciliation",12],["Mediation",12],["No-strike agreement",6,"no strike"],["Pendulum arbitration",.4,"pendulum"]], [], HL),
P("bz54","2.7","Name a tactic an employer may use in a dispute.","Fire and rehire",[
  ["Lockout",30],["Threat of redundancies",15,"redundancy","job cuts"],["Closing the site",10,"closure"],["Changing contracts",8],["Hiring replacement workers",8,"replacement workers"],
  ["Public relations campaign",6,"pr"],["Fire and rehire",.4]], [], HL),
P("bz55","3.1","Name a reason a business needs finance.","Unexpected contingencies",[
  ["Start-up costs",25,"starting up","start up"],["Buying assets",20,"assets","equipment"],["Day-to-day running costs",15,"running costs","working capital"],["Expansion",15,"growth"],
  ["Research and development",8,"r and d"],["Covering cash shortfalls",8,"cash flow"],["Unexpected contingencies",.4,"contingencies","emergencies"]]),
P("bz56","3.1","Name an example of capital or revenue expenditure.","Buying a patent",[
  ["Buying machinery",25,"machinery","machines"],["Paying wages",15,"wages","salaries"],["Buying a building",15,"building","premises"],["Buying stock",12,"stock","inventory"],["Paying rent",10,"rent"],
  ["Utility bills",8,"electricity"],["Buying vehicles",8,"vehicles","vans"],["Buying a patent",.4,"patent"]]),
P("bz57","3.1","Name an internal source of finance.","Cutting working capital",[
  ["Retained profit",40,"retained earnings"],["Sale of assets",30,"selling assets"],["Owner's personal funds",15,"personal funds","savings"],["Cutting working capital",.4,"working capital"]]),
P("bz58","3.2","Name a short-term source of finance.","Invoice discounting",[
  ["Overdraft",35],["Trade credit",30],["Debt factoring",12,"factoring"],["Short-term loan",10],["Invoice discounting",.4]]),
P("bz59","3.2","Name a factor in choosing a source of finance.","Repayment flexibility",[
  ["Cost (interest)",25,"cost","interest rate"],["Purpose",15],["Amount needed",15,"amount"],["Time period",12,"length of time"],["Control",10,"loss of control"],["Risk",8],["Size of the business",6,"legal structure"],
  ["Repayment flexibility",.4,"flexibility"]]),
P("bz60","3.3","Name a source of revenue for a business.","Merchandising",[
  ["Sales revenue",35,"sales"],["Advertising revenue",8,"advertising"],["Sponsorship",10],["Dividends",8],["Donations",8],["Subsidies",8,"grants"],["Royalties",6],["Rent",6,"rental income"],["Merchandising",.4,"merchandise"]]),
P("bz61","3.3","Name an example of a fixed or variable cost.","Licence fees",[
  ["Rent",25],["Raw materials",20],["Salaries",12],["Packaging",10],["Insurance",8],["Electricity",6,"utilities"],["Commission",6],["Licence fees",.4,"license fees"]]),
P("bz62","3.4","Name an item on a statement of profit or loss.","Retained profit for the year",[
  ["Revenue",25,"sales","sales revenue"],["Cost of sales",20,"cost of goods sold","cogs"],["Gross profit",18],["Expenses",12,"overheads"],["Net profit",10,"profit for the period"],["Profit before tax",8],
  ["Dividends",4],["Retained profit for the year",.4,"retained profit"]], [[["cash","inventory","stock","debtors","share capital"],"That belongs on the statement of financial position (balance sheet)."]]),
P("bz63","3.4","Name a depreciation method or an intangible asset.","Units of production method",[
  ["Straight-line depreciation",30,"straight line"],["Reducing balance",25,"reducing balance method"],["Goodwill",12],["Patents",10,"patent"],["Copyright",8],["Trademarks",8,"trademark"],["Brand value",4,"brand"],
  ["Units of production method",.4,"units of production"]]),
P("bz64","3.5","Name a way to improve profitability.","Rationalising the product range",[
  ["Cut costs",25,"reduce costs"],["Raise prices",20,"increase prices"],["Increase sales",15,"sell more"],["Cheaper suppliers",10,"suppliers"],["Reduce waste",10],["Better marketing",8,"marketing"],
  ["Rationalising the product range",.4,"product range"]]),
P("bz65","3.5","Name a way to improve liquidity.","Swap short-term debt for long-term",[
  ["Sell off stock",20,"sell stock","reduce inventory"],["Collect debts faster",20,"chase debtors"],["Sale and leaseback",12],["Overdraft",10],["Offer less credit to customers",10,"less credit"],
  ["Issue shares",8,"share issue"],["Swap short-term debt for long-term",.4,"refinancing"]]),
P("bz66","3.6","Name an efficiency or gearing ratio.","Asset turnover",[
  ["Stock turnover",25,"inventory turnover"],["Gearing ratio",20,"gearing"],["Debtor days",20,"receivable days"],["Creditor days",18,"payable days"],["Asset turnover",.4]], [], HL),
P("bz67","3.6","Name a way to reduce gearing.","Debt-for-equity swap",[
  ["Issue more shares",30,"share issue","issue shares"],["Repay loans",25,"pay off debt"],["Retain more profit",20,"retained profit"],["Sell assets to repay debt",10,"sell assets"],["Debt-for-equity swap",.4,"debt for equity"]], [], HL),
P("bz68","3.6","Name a risk of high gearing.","Breaching loan covenants",[
  ["High interest payments",30,"interest payments"],["Exposed to interest-rate rises",25,"interest rate rises"],["Harder to borrow more",15],["Less profit for shareholders",10,"lower dividends"],
  ["Risk of insolvency",10,"insolvency","bankruptcy"],["Breaching loan covenants",.4,"covenants"]], [], HL),
P("bz69","3.7","Name a cause of cash-flow problems.","A customer going bust",[
  ["Overtrading",25],["Poor credit control",20,"customers paying late","late payments"],["Seasonal demand",15,"seasonal"],["Unexpected costs",12],["Holding too much stock",10,"too much stock"],
  ["Over-borrowing",6,"too much debt"],["A customer going bust",.4,"bad debts"]]),
P("bz70","3.7","Name a part of a cash-flow forecast.","Assumptions",[
  ["Opening balance",20],["Cash inflows",20,"inflows","receipts"],["Cash outflows",20,"outflows","payments"],["Net cash flow",18],["Closing balance",18],["Assumptions",.4]]),
P("bz71","3.8","Name a limitation of investment appraisal.","Ignores management time",[
  ["Ignores qualitative factors",25,"qualitative"],["Forecast cash flows are uncertain",25,"estimates","forecasts"],["Payback ignores later cash flows",15,"payback ignores"],["Choosing a discount rate",10,"discount rate"],
  ["ARR ignores the timing of cash",10,"time value of money"],["Ignores management time",.4,"management time"]]),
P("bz72","3.8","Name a qualitative factor in an investment decision.","Strategic options it opens",[
  ["Effect on staff",20,"staff morale","employees"],["Environmental impact",18,"environment"],["Brand image",15,"reputation"],["Ethics",12,"ethical"],["Fit with objectives",10,"objectives"],["Risk",10],
  ["Competitors' reaction",6,"competitors"],["Strategic options it opens",.4,"strategic options","real options"]]),
P("bz73","3.9","Name a type of budget.","Incremental budget",[
  ["Sales budget",20],["Production budget",15],["Expenditure budget",15,"cost budget"],["Cash budget",15],["Master budget",10],["Flexible budget",8],["Zero-based budget",8,"zero based"],["Incremental budget",.4]], [], HL),
P("bz74","3.9","Name a term about budgets and variances.","Variance tolerance",[
  ["Favourable variance",30,"favorable"],["Adverse variance",30,"adverse"],["Variance analysis",15],["Budget holder",8],["Cost centre",8,"cost center"],["Profit centre",8,"profit center"],["Variance tolerance",.4]], [], HL),
P("bz75","3.9","Name a benefit of budgeting.","Delegated authority",[
  ["Controls spending",25,"control"],["Planning",20],["Motivation",15,"targets"],["Coordination",12],["Accountability",10],["Spots problems early",8],["Delegated authority",.4,"delegation"]], [], HL),
P("bz76","4.1","Name a characteristic of a market.","Concentration ratio",[
  ["Market size",20,"size"],["Market share",20],["Market growth",15,"growth"],["Competition",12,"competitors"],["Customers",10],["Segments",8,"market segments"],["Mass vs niche",8,"niche market","mass market"],
  ["Concentration ratio",.4]]),
P("bz77","4.1","Name a difference between market-oriented and product-oriented businesses.","Asset-led marketing",[
  ["Customer focus vs product focus",35,"customer focus","product focus"],["Research first vs make first",20,"market research"],["Flexibility",10],["Cost of research",8],["Innovation-led products",6,"innovation"],
  ["Asset-led marketing",.4,"asset led"]]),
P("bz78","4.1","Name a social media marketing technique.","Micro-influencer seeding",[
  ["Influencers",25,"influencer marketing"],["Paid ads",18,"sponsored posts","ads"],["Hashtags",12,"hashtag campaigns"],["Viral videos",12,"viral"],["User-generated content",8,"ugc"],["Giveaways",8,"competitions"],
  ["Live streams",6,"livestream"],["Micro-influencer seeding",.4,"micro influencers"]]),
P("bz79","4.2","Name a way to segment a market.","Benefit segmentation",[
  ["Age",25],["Gender",18],["Income",18],["Location",15,"geographic"],["Lifestyle",10],["Buying behaviour",8,"behavioural","behavior"],["Psychographic",4],["Benefit segmentation",.4,"benefits sought"]]),
P("bz80","4.2","Name a part of a marketing plan.","Contingency plans",[
  ["Objectives",20],["Budget",18],["Target market",15],["Marketing mix",15,"4ps","7ps"],["Market research",12],["Timeline",8,"schedule"],["Evaluation",6],["Contingency plans",.4,"contingency"]]),
P("bz81","4.3","Name a sales forecasting method or term.","Delphi method",[
  ["Moving average",25,"moving averages"],["Extrapolation",20],["Trend",15],["Seasonal variation",12],["Time series",8],["Cyclical variation",8],["Random variation",6],["Delphi method",.4,"delphi"]], [], HL),
P("bz82","4.3","Name a benefit or a limitation of sales forecasting.","A self-fulfilling prophecy",[
  ["Helps planning",25,"planning"],["Relies on past data",20,"past data"],["Can be inaccurate",15,"inaccurate"],["Helps budgeting",12,"budgeting"],["Can't predict shocks",10,"external shocks"],
  ["A self-fulfilling prophecy",.4,"self fulfilling"]], [], HL),
P("bz83","4.3","Name a type of variation in sales data.","Structural break",[
  ["Seasonal",30],["Trend",25],["Cyclical",20],["Random",20,"irregular"],["Structural break",.4]], [], HL),
P("bz84","4.4","Name a difference between primary and secondary research.","Who owns the data",[
  ["First-hand vs existing data",35,"first hand","existing data"],["Cost",20,"cheaper","expensive"],["Time",15,"quicker"],["How up to date it is",10,"up to date"],["Specific to the business",10,"specific"],
  ["Who owns the data",.4,"ownership"]]),
P("bz85","4.5","Name a method of promotion.","Guerrilla marketing",[
  ["TV adverts",20,"tv","television"],["Social media",20],["Sales promotions",15,"discounts","bogof"],["Sponsorship",10],["Billboards",8],["Public relations",8,"pr"],["Product placement",6],["Direct mail",6],
  ["Guerrilla marketing",.4,"guerilla"]]),
P("bz86","4.5","Name a distribution channel.","Drop shipping",[
  ["Online",25,"e commerce","website"],["Retailers",20,"shops"],["Wholesalers",15],["Direct to consumer",15,"direct"],["Agents",6],["Franchise outlets",6],["Drop shipping",.4,"dropshipping"]]),
P("bz87","4.6","Name a way to enter a foreign market.","Piggybacking",[
  ["Exporting",25],["Joint venture",15],["Franchising",15],["Licensing",12],["Foreign direct investment",12,"fdi","direct investment"],["Strategic alliance",8],["E-commerce",6,"online"],["Piggybacking",.4]], [], HL),
P("bz88","4.6","Name a problem with marketing internationally.","Brand names that translate badly",[
  ["Language barriers",20,"language"],["Cultural differences",20,"culture"],["Exchange rates",15,"currency"],["Different laws",12,"legal"],["Logistics",10,"distance"],["Political risk",8,"politics"],
  ["Brand names that translate badly",.4,"translation"]], [], HL),
P("bz89","4.6","Name an example of adapting a product for another country.","KitKat flavours in Japan",[
  ["McDonald's local menus",30,"mcdonalds","mcdonald s"],["Different packaging and language",15,"packaging"],["Halal or vegetarian versions",12,"halal","vegetarian"],["Right-hand-drive cars",8,"right hand drive"],
  ["Different pack sizes",8,"sizes"],["Coca-Cola recipes",4,"coca cola"],["KitKat flavours in Japan",.4,"kitkat"]], [], HL),
P("bz90","5.1","Name a sustainability idea in operations.","Cradle to cradle",[
  ["Recycling",20],["Renewable energy",18],["Carbon footprint",15],["Reducing waste",10,"waste reduction"],["Triple bottom line",10,"people planet profit"],["Circular economy",8],["Ethical sourcing",8],
  ["Cradle to cradle",.4]]),
P("bz91","5.1","Name a way to measure productivity.","Total factor productivity",[
  ["Output per worker",35,"labour productivity","labor productivity"],["Output per hour",10],["Capital productivity",15,"output per machine"],["Capacity utilisation",10,"capacity utilization"],
  ["Total factor productivity",.4,"tfp"]]),
P("bz92","5.1","Name an input or an output of production.","Intellectual property",[
  ["Raw materials",25],["Labour",20,"labor"],["Machinery",15],["Finished goods",15,"products"],["Energy",8],["Services",6],["Waste",4],["Intellectual property",.4,"ip"]]),
P("bz93","5.2","Name an advantage of mass production.","Learning-curve effects",[
  ["Low cost per unit",30,"low unit cost","cheaper"],["High output",20],["Economies of scale",15],["Consistent quality",12,"standardised"],["Automation",10],["Learning-curve effects",.4,"learning curve"]]),
P("bz94","5.2","Name a product made by job, batch or flow production.","Satellites",[
  ["Cars (flow)",20,"cars"],["Bread (batch)",20,"bread"],["Wedding dress (job)",15,"wedding dress"],["Custom furniture (job)",10,"furniture"],["Clothing (batch)",10,"clothes"],["Soft drinks (flow)",10,"soft drinks"],
  ["Bridges (job)",6,"bridge"],["Satellites",.4,"satellite"]]),
P("bz95","5.3","Name a benefit of just-in-time production.","It exposes process problems",[
  ["Lower storage costs",30,"less storage","storage"],["Less waste",20],["Better cash flow",15,"cash flow"],["Less risk of stock going out of date",10,"obsolete stock"],["Saves space",10,"space"],
  ["It exposes process problems",.4,"exposes problems"]], [], HL),
P("bz96","5.3","Name a quality standard or mark.","Deming Prize",[
  ["ISO 9001",30,"iso"],["Kitemark",12],["CE mark",10,"ce"],["Fairtrade mark",10,"fairtrade"],["ISO 14001",6],["Michelin star",6,"michelin"],["Deming Prize",.4,"deming"]], [], HL),
P("bz97","5.4","Name a reason for offshoring or reshoring.","\"Made in…\" branding",[
  ["Lower labour costs",30,"cheap labour","cheaper labour"],["Access to markets",15],["Quality concerns",12,"quality"],["Transport costs",10],["Government incentives",10,"subsidies"],["Supply-chain risk",8,"supply chain"],
  ["\"Made in…\" branding",.4,"made in","country of origin"]]),
P("bz98","5.4","Name a location strategy term.","Nearshoring",[
  ["Offshoring",25],["Outsourcing",20],["Reshoring",15],["Insourcing",10],["Clustering",8,"cluster"],["Footloose",6],["Nearshoring",.4]]),
P("bz99","5.5","Name a limitation of break-even analysis.","Ignores semi-variable costs",[
  ["Assumes all output is sold",25,"all output sold"],["Costs may not be linear",20,"straight lines"],["Assumes a fixed price",15,"price stays the same"],["Only for one product",15,"one product","static"],
  ["Based on estimates",10,"estimates"],["Ignores semi-variable costs",.4,"semi variable"]]),
P("bz100","5.5","Name a way to lower the break-even point.","Renegotiate supplier contracts",[
  ["Raise the price",30,"increase price","higher price"],["Cut fixed costs",25,"lower fixed costs"],["Cut variable costs",25,"lower variable costs"],["Renegotiate supplier contracts",.4,"renegotiate"]]),
P("bz101","5.6","Name a stock-control term.","Economic order quantity",[
  ["Buffer stock",25,"safety stock"],["Reorder level",20,"re order level"],["Lead time",18],["Maximum stock level",12,"maximum stock"],["Just-in-time",10,"jit"],["Stock-out",8,"stockout"],
  ["Economic order quantity",.4,"eoq"]], [], HL),
P("bz102","5.6","Name a term about capacity.","Make-or-buy decision",[
  ["Capacity utilisation",30,"capacity utilization"],["Spare capacity",15,"excess capacity"],["Full capacity",15],["Subcontracting",10,"outsourcing"],["Productivity",10],["Make-or-buy decision",.4,"make or buy"]], [], HL),
P("bz103","5.6","Name a supply chain term.","Bullwhip effect",[
  ["Suppliers",20],["Logistics",20],["Supply chain",15],["Distribution",12],["Inventory",10,"stock"],["Procurement",8,"purchasing"],["Bullwhip effect",.4,"bullwhip"]], [], HL),
P("bz104","5.7","Name a type of business crisis.","Losing a key person",[
  ["Product recall",20,"recall"],["Data breach",18,"cyber attack","hacking"],["Natural disaster",15,"flood","earthquake"],["Pandemic",12],["Financial collapse",10],["Scandal",10],["Supply chain failure",8],
  ["Losing a key person",.4,"key person"]], [], HL),
P("bz105","5.7","Name a principle of good crisis management.","A ready-made crisis website",[
  ["Transparency",25,"honesty"],["Communication",25],["Speed",15,"quick response"],["Control",15],["Contingency planning",10,"contingency plan"],["A ready-made crisis website",.4,"dark site"]], [], HL),
P("bz106","5.7","Name a well-known business crisis.","Perrier benzene recall",[
  ["BP oil spill",20,"deepwater horizon","bp"],["Volkswagen emissions scandal",20,"vw","dieselgate"],["Boeing 737 MAX",12,"boeing"],["Facebook data scandal",10,"cambridge analytica"],["Tylenol recall",8,"tylenol"],
  ["Samsung Galaxy Note 7",6,"note 7"],["Perrier benzene recall",.4,"perrier"]], [], HL),
P("bz107","5.8","Name a type of innovation.","Frugal innovation",[
  ["Product innovation",25,"product"],["Process innovation",20,"process"],["Disruptive innovation",15,"disruptive"],["Incremental innovation",12,"incremental"],["Positioning innovation",6,"positioning"],
  ["Paradigm innovation",4,"paradigm"],["Frugal innovation",.4,"frugal"]], [], HL),
P("bz108","5.8","Name a way to protect intellectual property.","Registered design",[
  ["Patent",35,"patents"],["Copyright",20],["Trademark",20,"trademarks"],["Trade secrets",8,"secrecy"],["Registered design",.4,"design rights"]], [], HL),
P("bz109","5.8","Name something that encourages research and development.","Open innovation",[
  ["Competition",20],["Funding",15,"budget"],["Creative culture",12,"culture"],["Government grants",12,"grants"],["Customer needs",10],["Patent protection",6,"patents"],["Open innovation",.4]], [], HL),
P("bz110","5.9","Name a management information system or technology.","Digital twin",[
  ["Databases",20,"database"],["Data analytics",18,"analytics"],["Artificial intelligence",15,"ai"],["Cloud computing",12,"cloud"],["Big data",10],["Loyalty programmes",10,"loyalty cards"],["ERP systems",6,"erp"],
  ["Digital twin",.4]], [], HL),
P("bz111","5.9","Name a risk of relying on data and technology.","Algorithmic bias",[
  ["Data breaches",30,"data breach"],["Privacy concerns",20,"privacy"],["Cyber attacks",15,"hacking"],["Cost",10],["Job losses",8,"jobs"],["Over-reliance",6,"over reliance"],["Algorithmic bias",.4,"bias"]], [], HL),
P("bz112","5.9","Name a use of AI in business.","Dynamic pricing",[
  ["Chatbots",25,"customer service"],["Recommendations",18,"recommendation engines"],["Forecasting demand",12,"forecasting"],["Fraud detection",10],["Automating tasks",10,"automation"],["Targeted ads",10,"targeted advertising"],
  ["Dynamic pricing",.4]], [], HL),
];

/* ---------------- world (upwards) ---------------- */
const BANDS = [
  {name:"Piggy bank",        zone:"Piggy bank savings",    from:0,  to:40,  hue:330, bg:["#2b1f25","#251c26"]},
  {name:"Lemonade stand",    zone:"Your first sale",       from:40, to:100, hue:50,  bg:["#251c26","#262612"]},
  {name:"Corner shop",       zone:"Small business",        from:100,to:170, hue:25,  bg:["#262612","#1e2030"]},
  {name:"Startup",           zone:"Startup",               from:170,to:250, hue:190, bg:["#1e2030","#10243a"]},
  {name:"Growing company",   zone:"Growing company",       from:250,to:320, hue:210, bg:["#10243a","#14284a"]},
  {name:"Corporation",       zone:"Corporation",           from:320,to:390, hue:222, bg:["#14284a","#1b305c"]},
  {name:"Stock market",      zone:"Stock market listing",  from:390,to:460, hue:145, bg:["#1b305c","#25417a"]},
  {name:"Multinational",     zone:"Multinational",         from:460,to:530, hue:200, bg:["#25417a","#3a5f9a"]},
  {name:"Unicorn",           zone:"Billion-dollar unicorn", from:530,to:600, hue:285, bg:["#3a5f9a","#2a2a5a"]},
  {name:"Trillion club",     zone:"Trillion-dollar club",  from:600,to:760, hue:45,  bg:["#2a2a5a","#07081a"]},
];
const FACTS = [
  [-30,"every business starts with a single sale"],[12,"saving is the cheapest source of finance"],[30,"a sole trader has unlimited liability"],
  [55,"revenue = price × quantity sold"],[85,"profit = revenue − costs"],[110,"break-even: total revenue equals total costs"],[150,"cash flow problems sink more firms than losses do"],
  [185,"startups often rely on venture capital or crowdfunding"],[225,"a USP makes a product stand out"],[265,"economies of scale lower average costs"],
  [300,"limited liability protects shareholders' personal assets"],[335,"Maslow: people are motivated by unmet needs"],[370,"product · price · place · promotion"],
  [405,"a public limited company sells shares on a stock exchange"],[440,"ROCE shows how well capital is used"],[475,"multinationals operate in more than one country"],
  [510,"globalisation opens new markets and new risks"],[545,"a unicorn is a startup valued at over $1 billion"],[580,"kaizen means continuous improvement"],
  [620,"every stakeholder wants something different"],[660,"only a handful of companies are worth $1 trillion"],[700,"the bottle is full"],
];
function wall(i, len, side){
  const r = srand(611 + i*29 + (side==="r"?11:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn) => { for (let y=20; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: for (let y=0; y<len; y+=18) for (let x=((y/18)%2)*16-16; x<120; x+=32) s+=`<rect x="${x}" y="${y}" width="30" height="16" fill="hsl(10 35% ${f1(24+r()*8)}%)"/>`;
      rep(260, y=>{ s+=`<ellipse cx="60" cy="${y+40}" rx="34" ry="24" fill="#e8a0b8"/><circle cx="88" cy="${y+36}" r="11" fill="#f0b0c8"/><rect x="50" y="${y+14}" width="20" height="4" rx="2" fill="#5a2a3a"/><rect x="40" y="${y+60}" width="8" height="12" fill="#e8a0b8"/><rect x="70" y="${y+60}" width="8" height="12" fill="#e8a0b8"/>`; }); break;
    case 1: rep(150, y=>{ for (let k=0;k<6;k++) s+=`<rect x="${k*20}" y="${y}" width="20" height="26" fill="${k%2?"#f5d042":"#fff4c8"}"/>`; s+=`<path d="M0 ${y+26} q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0 q10 10 20 0" fill="#f5d042"/><rect x="10" y="${y+40}" width="100" height="60" fill="#8a5a2a"/><circle cx="40" cy="${y+56}" r="8" fill="#ffe066"/><circle cx="72" cy="${y+56}" r="8" fill="#ffe066"/>`; }); break;
    case 2: rep(160, y=>{ s+=`<rect x="6" y="${y}" width="108" height="130" fill="hsl(${h} 30% 28%)"/><rect x="16" y="${y+20}" width="88" height="56" fill="#9fd8ff" opacity=".35"/><rect x="40" y="${y+84}" width="34" height="46" fill="#3a2a1a"/><rect x="6" y="${y}" width="108" height="14" fill="hsl(${h} 70% 50%)"/>`; }); break;
    case 3: case 4: case 5: { const w = i===3?22:i===4?16:12, gap = i===3?10:6; s+=`<rect width="120" height="${len}" fill="hsl(${h} 25% ${i===5?18:22}%)"/>`;
      for (let y=10; y<len; y+=w+gap) for (let x=8; x<112; x+=w+gap) s+=`<rect x="${x}" y="${y}" width="${w}" height="${w}" fill="${r()<.45?"#ffe08a":"hsl("+h+" 40% 30%)"}" opacity="${f1(.6+r()*.4)}"/>`; } break;
    case 6: rep(140, y=>{ let d=`M0 ${y+100}`, yy=y+100; for (let x=0; x<=120; x+=12){ yy -= (r()-.3)*22; d+=` L${x} ${f1(yy)}`; } s+=`<path d="${d}" stroke="#3ee089" stroke-width="2.5" fill="none"/>`;
      for (let x=10; x<120; x+=20){ const up=r()<.65, hh=f1(10+r()*24); s+=`<rect x="${x}" y="${f1(y+30+r()*40)}" width="8" height="${hh}" fill="${up?"#3ee089":"#ff5470"}"/>`; } }); break;
    case 7: rep(170, y=>{ s+=`<circle cx="60" cy="${y+60}" r="46" fill="hsl(205 60% 35%)" stroke="#9fd8ff" stroke-width="2"/><ellipse cx="60" cy="${y+60}" rx="20" ry="46" fill="none" stroke="#9fd8ff" opacity=".6"/><path d="M14 ${y+60}h92M22 ${y+38}h76M22 ${y+82}h76" stroke="#9fd8ff" opacity=".6"/><path d="M40 ${y+40} q12 -8 22 4 q8 10 -4 18 q-14 6 -18 -22z" fill="#3ee089" opacity=".8"/>`; }); break;
    case 8: rep(150, y=>{ s+=`<ellipse cx="${f1(40+r()*40)}" cy="${y+30}" rx="46" ry="16" fill="#fff" opacity=".18"/><path d="M${f1(30+r()*50)} ${y+120} v-60 l10 -24 l10 24 v60z" fill="hsl(${h} 30% 40%)"/>`; }); break;
    case 9: rep(40, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${f1(y+r()*30)}" r="${f1(.8+r()*1.6)}" fill="#fff" class="${r()<.3?"blink":""}"/>`; });
      rep(300, y=>{ s+=`<rect x="44" y="${y}" width="30" height="16" fill="#c9d4e0"/><rect x="8" y="${y+4}" width="34" height="8" fill="#3a6aa8"/><rect x="76" y="${y+4}" width="34" height="8" fill="#3a6aa8"/>`; }); break;
  }
  return vwall(s, len, side);
}
function avatar(level, hue){
  const r = 16 + level*.5;
  const s = `<circle r="${f1(r)}" fill="#e0ad2a" stroke="#ffe58a" stroke-width="3"/><circle r="${f1(r-6)}" fill="none" stroke="#b9861a" stroke-width="1.5"/><text y="7" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="${f1(18+level*.4)}" fill="#7a4f08">$</text>
    <path d="M${f1(r-2)} ${f1(-r+2)} l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3z" fill="#fff6c8" class="blink"/>`;
  return avatarSVG(s);
}
const money = p => Math.pow(10, p*12/700);
function fmt$(v){
  if (v < 1000) return "$" + (v < 10 ? v.toFixed(2) : Math.round(v).toString());
  const u = [["T",1e12],["B",1e9],["M",1e6],["K",1e3]].find(([,d]) => v >= d);
  const n = v / u[1]; return "$" + (n < 10 ? n.toFixed(1) : Math.round(n)) + u[0];
}
registerSubject({
  key:"biz", name:"Business Management", theme:"A bottle of money that keeps rising", gemWord:"Million", gemTitle:"One in a Million", emoji:"💰",
  blurb:"You start with $1 in a piggy bank. Each prompt has many correct answers. <b>Obvious answers earn pocket change. Answers other players missed make your money bottle fill and rise</b>, from a lemonade stand to a startup, a multinational and the trillion-dollar club.",
  axis:"up", arrow:"▲", avX:"50%",
  tiers:{gem:"One in a Million", rootkit:"Tycoon", trojan:"Investor", adware:"Profit", spam:"Pocket change"}, blocked:"Declined", fw:"CREDIT CHECK",
  verbs:{cta:"Rise ▲", inject:"Invest", hint:"▲ rarer answers earn more ▲", count:"counting the money"},
  particles:["$","¢","€","£"], particleColor:"#ffd85a",
  meter:{label:"VALUE", fmt:p=>fmt$(money(p)), zone:p=>fmt$(money(p)), tick:p=>fmt$(money(p)), gain:(a,b)=>`grow to ${fmt$(money(b))}`},
  start:{bg:"linear-gradient(0deg,#120c0a,#2b1f25)", label:"Start · $1.00", zone:"Pocket money", color:"#ffd85a"},
  endBg:"#05060f",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar,
  extras:({pos, L})=>{ const bottom = pos(0) + 90, top = pos(735);
    return `<div class="bottle" style="top:${top}px;height:${bottom-top}px"></div><div class="fill" style="bottom:${L-bottom+3}px"></div>
      <div class="bottle-neck" style="top:${top-150}px;height:150px"></div><div class="cork" style="top:${top-190}px"></div>`; },
  catalog:CATALOG, prompts:PROMPTS,
});
})();
