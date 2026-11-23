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
