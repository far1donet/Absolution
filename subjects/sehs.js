/* Sports, Exercise and Health Science — a running heart races out of the starting blocks and keeps going: through the
   stadium, the city and the park, past the half-marathon mark, into "the wall", down the final straight of a marathon,
   then on into ultra trails, a mountain pass and a desert stage. Rarer answers run further.
   Syllabus: IB Sports, exercise and health science (first assessment 2026): Theme A (communication, hydration and
   nutrition, response), Theme B (generating movement, forces and motion, injury), Theme C (individual differences,
   motor learning, motivation, stress and coping, psychological skills) and the scientific investigation. */
(function(){
const CATALOG = [
  {label:"Theme A · Exercise physiology and nutrition", units:[
    {code:"A", name:"Physiology and nutrition", topics:[["A.1","Communication: body systems and homeostasis"],["A.2","Hydration, nutrition and energy systems"],["A.3","Response: fatigue and training"]]},
  ]},
  {label:"Theme B · Biomechanics", units:[
    {code:"B", name:"Biomechanics", topics:[["B.1","Generating movement in the body"],["B.2","Forces, motion and movement"],["B.3","Injury"]]},
  ]},
  {label:"Theme C · Sport psychology and motor learning", units:[
    {code:"C", name:"Psychology and motor learning", topics:[["C.1","Individual differences"],["C.2","Motor learning"],["C.3","Motivation"],["C.4","Stress and coping"],["C.5","Psychological skills"]]},
  ]},
  {label:"Skills", units:[
    {code:"X", name:"Skills", topics:[["X.1","Fitness testing and the scientific investigation"]]},
  ]},
];

const PROMPTS = [
/* ---------- A.1 Communication ---------- */
P("se001","A.1","Name a hormone that changes during exercise.","Atrial natriuretic peptide",[
  ["Adrenaline",25,"epinephrine"],["Cortisol",12],["Noradrenaline",10,"norepinephrine"],["Insulin",10],["Glucagon",10],["Endorphins",8,"endorphin"],["Testosterone",6],["Growth hormone",6,"hgh","human growth hormone"],
  ["Antidiuretic hormone",5,"adh","vasopressin"],["Aldosterone",4],["Erythropoietin",4,"epo"],["Thyroxine",3],["Atrial natriuretic peptide",.4,"anp"]]),
P("se002","A.1","Name a part of the cardiovascular or respiratory system.","The bundle of His",[
  ["The heart",20,"heart"],["The lungs",15,"lungs","lung"],["Alveoli",10,"alveolus"],["Arteries",10,"artery","aorta"],["Veins",8,"vein","vena cava"],["Capillaries",8,"capillary"],["Blood",6],["The diaphragm",6,"diaphragm"],
  ["The trachea",5,"trachea","windpipe"],["Bronchi",4,"bronchus","bronchioles"],["The ventricles",4,"ventricle","left ventricle"],["The atria",3,"atrium","right atrium"],["Red blood cells",3,"erythrocytes"],["Haemoglobin",3,"hemoglobin"],
  ["The sinoatrial node",2,"sa node","sinoatrial node","pacemaker"],["The bundle of His",.4,"bundle of his"]]),
P("se003","A.1","Name a physiological response to exercise.","The Bohr shift",[
  ["Heart rate increases",25,"heart rate","increased heart rate","higher heart rate"],["Breathing rate increases",18,"breathing rate","faster breathing","increased breathing"],["Stroke volume increases",10,"stroke volume"],
  ["Cardiac output increases",10,"cardiac output"],["Tidal volume increases",8,"tidal volume"],["Sweating",6,"sweat"],["Vasodilation in working muscles",6,"vasodilation"],["Blood is redirected to the muscles",6,"vascular shunt","redistribution of blood","blood redistribution"],
  ["Systolic blood pressure rises",5,"blood pressure","systolic blood pressure"],["Ventilation increases",5,"minute ventilation","ventilation"],["Oxygen uptake increases",4,"oxygen consumption","vo2"],["Body temperature rises",4,"temperature"],
  ["The Bohr shift",.4,"bohr effect","bohr shift"]]),
/* ---------- A.2 Hydration, nutrition and energy systems ---------- */
P("se004","A.2","Name a nutrient.","Selenium",[
  ["Carbohydrate",25,"carbohydrates","carbs"],["Protein",20,"proteins"],["Fat",18,"fats","lipids"],["Vitamins",8,"vitamin","vitamin c","vitamin d"],["Minerals",6,"mineral"],["Iron",5],["Calcium",5],["Water",5],["Fibre",4,"fiber"],
  ["Sodium",3,"salt"],["Potassium",2],["Vitamin B12",2,"b12"],["Magnesium",2],["Selenium",.4]]),
P("se005","A.2","Name a food or drink that is a good source of carbohydrate for athletes.","Maltodextrin",[
  ["Pasta",20],["Rice",18],["Bread",15],["Potatoes",12,"potato"],["Bananas",8,"banana"],["Oats",8,"porridge","oatmeal"],["Breakfast cereal",6,"cereal"],["Sports drinks",5,"isotonic drinks","energy drinks"],["Energy gels",4,"gels","gel"],
  ["Fruit",4],["Sweet potatoes",3,"sweet potato"],["Honey",2],["Quinoa",2],["Couscous",2],["Maltodextrin",.4]]),
P("se006","A.2","Name an energy system, or a fuel or substance it uses.","Creatine kinase",[
  ["The aerobic system",20,"aerobic","aerobic system","oxidative system"],["The ATP-PC system",22,"atp pc","phosphocreatine system","creatine phosphate system","alactic"],["The anaerobic glycolytic system",18,"anaerobic glycolysis","lactic acid system","glycolytic","anaerobic"],
  ["ATP",10,"adenosine triphosphate"],["Glycogen",8],["Phosphocreatine",6,"creatine phosphate","pc"],["Glucose",6],["Fatty acids",4,"fat"],["Lactate",4,"lactic acid"],["Oxygen",3],["The Krebs cycle",3,"krebs cycle","citric acid cycle"],
  ["The electron transport chain",2,"electron transport chain"],["Creatine kinase",.4]]),
/* ---------- A.3 Response ---------- */
P("se007","A.3","Name a principle of training.","Supercompensation",[
  ["Specificity",20,"specific"],["Progressive overload",20,"overload","progression"],["Reversibility",12,"detraining","use it or lose it"],["Variety",8,"variance"],["Recovery",8,"rest"],["Individualization",6,"individual differences","individualisation"],
  ["FITT",6,"frequency intensity time type","fitt principle"],["Periodization",5,"periodisation"],["Warm-up and cool-down",4,"warm up","cool down"],["Moderation",3],["Tedium",2],["Supercompensation",.4]]),
P("se008","A.3","Name a long-term adaptation to endurance training.","More myoglobin",[
  ["A lower resting heart rate",20,"lower heart rate","lower resting heart rate","bradycardia"],["Increased stroke volume",15,"stroke volume"],["A higher VO2 max",12,"vo2 max","higher vo2 max"],["Cardiac hypertrophy",10,"bigger heart","athlete s heart"],
  ["More capillaries",8,"capillarization","capillarisation"],["More mitochondria",8,"mitochondria","mitochondrial density"],["Increased blood volume",6,"blood volume","plasma volume"],["More red blood cells",5,"red blood cells","more haemoglobin"],
  ["A higher lactate threshold",5,"lactate threshold"],["Better use of fat as fuel",3,"fat oxidation"],["Stronger breathing muscles",3,"stronger diaphragm"],["More myoglobin",.4,"myoglobin"]]),
P("se009","A.3","Name a cause of fatigue during exercise.","The central governor",[
  ["Glycogen depletion",15,"glycogen","running out of glycogen","hitting the wall"],["Lactic acid build-up",15,"lactic acid","lactate"],["Dehydration",12],["Phosphocreatine depletion",8,"pc depletion","running out of creatine phosphate"],
  ["Hydrogen ions (acidosis)",8,"hydrogen ions","acidosis","low ph"],["Overheating",6,"hyperthermia","high body temperature"],["Electrolyte loss",4,"electrolytes"],["Low blood sugar",4,"hypoglycaemia","hypoglycemia"],["Muscle damage",4],
  ["Lack of sleep",3,"sleep"],["Central fatigue",3,"brain fatigue"],["The central governor",.4,"central governor","central governor theory"]]),
/* ---------- B.1 Generating movement ---------- */
P("se010","B.1","Name a bone of the human skeleton.","The hyoid",[
  ["Femur",20],["Skull",12,"cranium"],["Tibia",10],["Humerus",10],["Ribs",8,"rib"],["Radius",6],["Ulna",6],["Pelvis",6],["Fibula",5],["Vertebrae",5,"vertebra","spine","vertebral column"],["Scapula",5,"shoulder blade"],
  ["Clavicle",5,"collarbone"],["Patella",5,"kneecap"],["Sternum",4,"breastbone"],["Phalanges",3,"phalanx"],["Metatarsals",3,"metatarsal"],["Carpals",2,"carpal"],["The hyoid",.4,"hyoid"]]),
P("se011","B.1","Name a type of synovial joint.","Saddle joint",[
  ["Hinge joint",25,"hinge"],["Ball and socket joint",25,"ball and socket"],["Pivot joint",10,"pivot"],["Condyloid joint",6,"condyloid","ellipsoid"],["Gliding joint",6,"gliding","plane joint"],["Saddle joint",.4,"saddle"]]),
P("se012","B.1","Name a movement that happens at a joint.","Lateral flexion",[
  ["Flexion",22],["Extension",20],["Abduction",12],["Adduction",10],["Rotation",10],["Plantar flexion",6,"plantarflexion"],["Dorsiflexion",6],["Circumduction",5],["Pronation",4],["Supination",4],["Inversion",3],["Eversion",3],
  ["Hyperextension",2],["Lateral flexion",.4]]),
P("se013","B.1","Name a skeletal muscle.","Sartorius",[
  ["Biceps",20,"biceps brachii"],["Triceps",15,"triceps brachii"],["Quadriceps",15,"quads","rectus femoris"],["Hamstrings",12,"biceps femoris"],["Gastrocnemius",8,"calf"],["Deltoid",8,"deltoids"],["Pectoralis major",8,"pecs","pectorals"],
  ["Gluteus maximus",8,"glutes"],["Rectus abdominis",6,"abdominals","abs"],["Latissimus dorsi",5,"lats"],["Trapezius",4,"traps"],["Soleus",3],["Tibialis anterior",3],["Obliques",3],["Sartorius",.4]]),
P("se014","B.1","Name a type of muscle contraction or muscle fibre.","Type IIx fibres",[
  ["Concentric",20],["Eccentric",18],["Isometric",15],["Isotonic",8],["Slow-twitch fibres",10,"slow twitch","type i","type 1"],["Fast-twitch fibres",10,"fast twitch","type ii","type 2"],["Isokinetic",5],["Type IIa fibres",3,"type iia","type 2a"],
  ["Type IIx fibres",.4,"type iix","type 2x","type iib","type 2b"]]),
P("se015","B.1","Name a class of lever, or a part of a lever system.","The atlanto-occipital joint",[
  ["Third-class lever",18,"third class","class 3"],["First-class lever",15,"first class","class 1"],["Second-class lever",12,"second class","class 2"],["The fulcrum",8,"fulcrum","pivot","axis"],["The effort",6,"effort"],["The load",6,"load","resistance"],
  ["The elbow in a biceps curl",8,"elbow","biceps curl"],["The ankle on tiptoe",6,"ankle","tiptoe","calf raise"],["Mechanical advantage",4],["The atlanto-occipital joint",.4,"atlanto occipital","nodding"]]),
/* ---------- B.2 Forces, motion and movement ---------- */
P("se016","B.2","Name a biomechanical quantity or concept.","Moment of inertia",[
  ["Force",18],["Velocity",12,"speed"],["Acceleration",12],["Momentum",10],["Impulse",8],["Friction",8],["Centre of mass",8,"center of mass","centre of gravity","center of gravity"],["Inertia",6],["Air resistance",6,"drag"],
  ["Angular momentum",5],["Torque",4,"moment of force"],["Stability",4,"balance"],["Work",3],["Power",3],["Moment of inertia",.4]]),
P("se017","B.2","Name a factor that affects the flight of a projectile.","The Magnus effect",[
  ["Angle of release",25,"angle","release angle"],["Speed of release",22,"release speed","release velocity","speed"],["Height of release",15,"release height","height"],["Air resistance",10,"drag"],["Gravity",10],["Spin",8],
  ["Wind",5],["Mass",4,"weight"],["Shape",3,"aerodynamics"],["The Magnus effect",.4,"magnus effect","magnus"]]),
/* ---------- B.3 Injury ---------- */
P("se018","B.3","Name a sports injury.","Osgood-Schlatter disease",[
  ["Sprain",18,"sprained ankle","ankle sprain"],["Strain",15,"pulled muscle","hamstring strain"],["Fracture",15,"broken bone","broken leg","broken arm"],["Concussion",12],["Dislocation",8,"dislocated shoulder"],["ACL tear",8,"acl","torn acl","cruciate ligament"],
  ["Tendinitis",6,"tendonitis"],["Shin splints",6],["Tennis elbow",5],["Stress fracture",4],["Bruise",4,"contusion"],["Runner's knee",3,"runners knee"],["Cramp",3],["Blisters",2,"blister"],["Osgood-Schlatter disease",.4,"osgood schlatter"]]),
P("se019","B.3","Name a way to prevent or treat a sports injury.","Proprioceptive training",[
  ["Warming up",20,"warm up","warm-up"],["Stretching",15],["RICE",15,"rest ice compression elevation","ice"],["Protective equipment",10,"helmet","pads","gum shield","shin pads"],["Physiotherapy",8,"physio"],["Cooling down",6,"cool down"],
  ["Strength training",5],["Correct technique",5,"technique"],["Taping",4,"strapping","kinesiology tape"],["Rest days",4,"rest","recovery"],["Massage",3],["PRICE",3],["Proprioceptive training",.4,"proprioception","balance training"]]),
/* ---------- C.1 Individual differences ---------- */
P("se020","C.1","Name a personality trait or type linked to sport.","Trait anxiety",[
  ["Extroversion",20,"extrovert","extraversion","extravert"],["Introversion",12,"introvert"],["Mental toughness",12],["Competitiveness",10,"competitive"],["Self-confidence",10,"confidence"],["Type A personality",6,"type a"],["Neuroticism",6],
  ["Conscientiousness",6],["Resilience",5],["Openness",4],["Agreeableness",4],["Type B personality",3,"type b"],["Grit",3],["Trait anxiety",.4]]),
P("se021","C.1","Name a theory or approach to personality in sport.","Hollander's model of personality",[
  ["Trait theory",20,"trait approach"],["Social learning theory",18,"social learning","bandura"],["The interactionist approach",15,"interactionist","interactionist approach"],["The Big Five",10,"big five","ocean","five factor model"],
  ["Eysenck's theory",8,"eysenck"],["Cattell's 16PF",4,"cattell","16pf"],["Type A and Type B",4,"type a and b"],["Psychodynamic theory",3,"freud","psychodynamic"],["The 4Cs of mental toughness",4,"4cs","4 cs"],["Hollander's model of personality",.4,"hollander"]]),
/* ---------- C.2 Motor learning ---------- */
P("se022","C.2","Name a way to classify a motor skill.","Coactive skill",[
  ["Open skill",18,"open"],["Closed skill",18,"closed"],["Gross skill",12,"gross"],["Fine skill",12,"fine"],["Discrete skill",10,"discrete"],["Continuous skill",10,"continuous"],["Serial skill",6,"serial"],
  ["Self-paced skill",5,"self paced"],["Externally paced skill",5,"externally paced"],["Simple skill",3,"simple"],["Complex skill",3,"complex"],["Coactive skill",.4,"coactive"]]),
P("se023","C.2","Name a stage of learning a motor skill.","Freezing the degrees of freedom",[
  ["The cognitive stage",30,"cognitive"],["The associative stage",25,"associative"],["The autonomous stage",25,"autonomous"],["Getting the idea",5,"getting the idea of the movement"],["Fixation and diversification",3,"fixation","diversification"],
  ["Freezing the degrees of freedom",.4,"freezing","degrees of freedom","bernstein"]]),
P("se024","C.2","Name a type of practice or feedback.","Bandwidth feedback",[
  ["Massed practice",12,"massed"],["Distributed practice",12,"distributed"],["Intrinsic feedback",8,"intrinsic"],["Extrinsic feedback",8,"extrinsic"],["Knowledge of results",8,"kr"],["Knowledge of performance",8,"kp"],["Fixed practice",8,"fixed"],
  ["Variable practice",8,"variable"],["Whole practice",6,"whole"],["Part practice",6,"part"],["Mental practice",6,"mental rehearsal"],["Positive feedback",5],["Negative feedback",5],["Blocked practice",3,"blocked"],["Random practice",3,"random"],
  ["Bandwidth feedback",.4,"bandwidth"]]),
P("se025","C.2","Name a part of the information processing model.","The psychological refractory period",[
  ["Input",15,"stimulus"],["Perception",12],["Decision making",12,"decision"],["Output",10,"response"],["Feedback",10],["Selective attention",8],["Reaction time",8],["Short-term memory",8,"short term memory","stm","working memory"],
  ["Long-term memory",8,"long term memory","ltm"],["The sensory store",4,"sensory memory","short term sensory store"],["Movement time",3],["Hick's law",3,"hicks law"],["The psychological refractory period",.4,"prp","psychological refractory period"]]),
/* ---------- C.3 Motivation ---------- */
P("se026","C.3","Name a type or theory of motivation.","Achievement goal theory",[
  ["Intrinsic motivation",25,"intrinsic"],["Extrinsic motivation",22,"extrinsic"],["Achievement motivation",10],["Task orientation",8,"task oriented","mastery orientation"],["Ego orientation",8,"ego oriented"],["Self-determination theory",6,"sdt","self determination"],
  ["Need to achieve",3,"nach"],["Need to avoid failure",3,"naf"],["Attribution theory",3,"weiner","attribution"],["Amotivation",2],["Achievement goal theory",.4,"nicholls"]]),
P("se027","C.3","Name a way coaches can increase an athlete's motivation.","Autonomy-supportive coaching",[
  ["Praise",18,"positive feedback"],["Goal setting",15,"goals"],["Rewards",12,"prizes","trophies"],["Making training fun",10,"fun","enjoyment"],["Variety in training",8,"variety"],["Competition",6],["Giving choices",6,"choice"],["Role models",5],
  ["Team bonding",4,"team building"],["Recognition",4],["Explaining the purpose",3,"explaining why"],["Autonomy-supportive coaching",.4,"autonomy support","autonomy supportive"]]),
/* ---------- C.4 Stress and coping ---------- */
P("se028","C.4","Name a theory of arousal and performance.","Reversal theory",[
  ["The inverted-U hypothesis",25,"inverted u","yerkes dodson","inverted u theory"],["Drive theory",20,"drive"],["Catastrophe theory",10,"catastrophe"],["The zone of optimal functioning",10,"izof","zone of optimal functioning","individual zones"],
  ["Multidimensional anxiety theory",6,"multidimensional"],["Flow",4,"peak flow","the zone"],["Reversal theory",.4,"reversal"]]),
P("se029","C.4","Name a type or symptom of anxiety in sport.","The yips",[
  ["Cognitive anxiety",18,"cognitive"],["Somatic anxiety",18,"somatic"],["State anxiety",12,"state"],["Trait anxiety",12,"trait"],["Butterflies",6,"nerves","nervousness"],["Sweating",6,"sweaty palms"],["A racing heart",6,"increased heart rate","racing heart"],
  ["Negative thoughts",6,"worry"],["Muscle tension",4,"tension"],["Choking",4,"choke"],["Loss of concentration",3],["Competitive state anxiety",3,"csai 2","csai"],["The yips",.4,"yips"]]),
P("se030","C.4","Name a coping strategy for stress in sport.","Cognitive restructuring",[
  ["Deep breathing",18,"breathing","breathing exercises"],["Positive self-talk",15,"self talk"],["Imagery",12,"visualisation","visualization"],["Relaxation",10,"progressive muscle relaxation","pmr"],["A pre-performance routine",8,"routine","routines"],
  ["Goal setting",6],["Music",5],["Meditation",5,"mindfulness"],["Problem-focused coping",4,"problem focused"],["Emotion-focused coping",4,"emotion focused"],["Thought stopping",3],["Centering",2,"centring"],["Cognitive restructuring",.4]]),
/* ---------- C.5 Psychological skills ---------- */
P("se031","C.5","Name a psychological skill athletes train.","Biofeedback",[
  ["Imagery",18,"visualisation","visualization","mental rehearsal"],["Goal setting",18],["Self-talk",15,"positive self talk"],["Concentration",10,"focus"],["Relaxation",8],["Confidence building",6,"self confidence"],["Pre-performance routines",6,"routines"],
  ["Arousal regulation",5,"arousal control"],["Mindfulness",4,"meditation"],["Attentional control",4,"attention"],["Biofeedback",.4]]),
P("se032","C.5","Name a letter of the SMART (or SMARTER) goal-setting model.","Recorded",[
  ["Specific",22],["Measurable",20],["Achievable",18,"attainable","agreed"],["Realistic",15,"relevant"],["Time-bound",15,"time phased","timed","time bound"],["Evaluated",3,"exciting"],["Recorded",.4,"reviewed"]]),
/* ---------- X.1 Fitness testing and the investigation ---------- */
P("se033","X.1","Name a fitness test.","The Wingate test",[
  ["The multistage fitness test",22,"bleep test","beep test","multistage fitness test","pacer test"],["Sit and reach",15],["Sprint test",10,"30 m sprint","40 m sprint"],["Vertical jump",10,"sargent jump","jump test"],["Illinois agility test",8,"illinois"],
  ["Handgrip dynamometer",8,"grip strength","grip dynamometer"],["Cooper 12-minute run",6,"cooper test","12 minute run"],["1RM test",5,"one rep max","1 rep max"],["Harvard step test",4,"step test"],["Push-up test",4,"press up test","push ups"],["Sit-up test",4,"sit ups"],
  ["Standing broad jump",3,"standing long jump"],["Yo-yo test",3,"yo yo"],["Treadmill VO2 max test",3,"treadmill test"],["The Wingate test",.4,"wingate"]]),
P("se034","X.1","Name something a good sports science investigation needs.","A pilot study",[
  ["A research question",18,"question"],["An independent variable",12,"independent variable","iv"],["A dependent variable",12,"dependent variable","dv"],["Controlled variables",10,"control variables","controls"],["A hypothesis",8,"hypothesis"],
  ["Data analysis",8,"graphs","statistics"],["Repeated trials",6,"repeats","reliability"],["A valid method",6,"validity"],["Informed consent",5,"consent","ethics"],["A risk assessment",4,"safety","risk assessment"],["Evaluation",5,"limitations"],["A conclusion",4,"conclusion"],
  ["A pilot study",.4,"pilot"]]),
];

/* ================= the long run (sideways) ================= */
const BANDS = [
  {name:"The starting blocks", zone:"The starting blocks",  from:0,  to:40,  hue:210, bg:["#1a3a6a","#2a4a7a"]},
  {name:"Out of the stadium",  zone:"Out of the stadium",   from:40, to:100, hue:200, bg:["#2a4a7a","#3a6a9a"]},
  {name:"City streets",        zone:"City streets",         from:100,to:170, hue:30,  bg:["#3a6a9a","#5a7a9a"]},
  {name:"The park",            zone:"The park",             from:170,to:250, hue:110, bg:["#5a7a9a","#6a9ab8"]},
  {name:"Half marathon",       zone:"The river: half marathon", from:250,to:320, hue:195, bg:["#6a9ab8","#c87a4a"]},
  {name:"The wall",            zone:"The wall",             from:320,to:390, hue:10,  bg:["#c87a4a","#3a1a1a"]},
  {name:"The final straight",  zone:"The final straight",   from:390,to:460, hue:45,  bg:["#3a1a1a","#2a2a5a"]},
  {name:"The ultra trail",     zone:"The ultra trail",      from:460,to:530, hue:120, bg:["#2a2a5a","#3a5a4a"]},
  {name:"The mountain pass",   zone:"The mountain pass",    from:530,to:600, hue:210, bg:["#3a5a4a","#9ab8d8"]},
  {name:"The desert stage",    zone:"The desert stage",     from:600,to:760, hue:35,  bg:["#e8a858","#f4d09a"]},
];
// metres run at each band boundary: 100 m, 1 km, 5 km, 10 km, a half marathon, 32 km, a marathon, 100 km, 100 miles, 250 km
const KNOTS = [[0,0],[40,100],[100,1000],[170,5000],[250,10000],[320,21097.5],[390,32000],[460,42195],[530,100000],[600,160934],[760,250000]];
function metres(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1) return y0 + (Math.max(p, 0) - p0) * (y1 - y0) / (p1 - p0); }
}
function fmtD(p){ const m = metres(p); if (m < 1000) return `${Math.round(m)} m`; if (m < 100000) return `${(m / 1000).toFixed(1)} km`; return `${Math.round(m / 1000)} km`; }
const FACTS = [
  [-30,"on your marks… get set…"],[12,"Usain Bolt ran 100 m in 9.58 s (2009)"],[30,"the first seconds of a sprint run on the ATP-PC system"],
  [60,"after about 10 seconds, anaerobic glycolysis takes over"],[90,"hard running builds up lactate and hydrogen ions"],[125,"longer races run mainly on the aerobic system"],[155,"heart rate can rise from about 60 to over 180 beats a minute"],
  [190,"cardiac output = heart rate × stroke volume"],[230,"VO2 max: the most oxygen your body can use"],[265,"you can sweat more than a litre an hour"],[300,"a half marathon is 21.0975 km"],
  [340,"around 30 km, glycogen runs low: hitting the wall"],[372,"carbohydrate loading fills the glycogen stores"],[410,"a marathon is 42.195 km"],[445,"Kelvin Kiptum ran a 2:00:35 marathon world record (2023)"],
  [480,"an ultramarathon is any race longer than a marathon"],[515,"fat becomes a bigger share of the fuel over long distances"],[550,"at altitude, each breath carries less oxygen"],[585,"altitude training can raise red blood cell counts"],
  [625,"heat and dehydration are the desert's biggest dangers"],[670,"mental toughness keeps you going"],[720,"the finish line"],
];
const GR = 340;
function scene(i, len){
  const r = srand(3301 + i*37); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#b8442a","#b8442a","#5a5a5a","#3a7a3a","#5a5a5a","#5a4a4a","#5a5a5a","#6a5a3a","#8a8a8a","#e8b878"][i];
  s += `<rect x="0" y="${GR}" width="${len}" height="${420-GR}" fill="${ground}"/>`;
  if (i <= 1) for (let k=0; k<4; k++) s += `<path d="M0 ${GR+18+k*16} H${len}" stroke="#fff" stroke-width="2" opacity=".7"/>`;
  if (i >= 2 && i <= 6 && i !== 3) s += `<path d="M0 ${GR+38} H${len}" stroke="#fff" stroke-width="3" stroke-dasharray="30 20" opacity=".6"/>`;
  const fan = (x, k) => { const c = ["#e8443a","#3a8ae8","#f4d03a","#3ac08a","#c94ae8"][k % 5]; return `<g class="av-hover" style="animation-delay:-${f1(r()*2)}s"><circle cx="${x}" cy="${GR-58}" r="7" fill="#e8c8a8"/><rect x="${x-7}" y="${GR-50}" width="14" height="22" rx="4" fill="${c}"/><path d="M${x-7} ${GR-46} l-8 -14 M${x+7} ${GR-46} l8 -14" stroke="${c}" stroke-width="4" stroke-linecap="round"/></g>`; };
  switch(i){
    case 0: case 1: // the stadium: stands full of fans and the floodlights
      s += `<rect x="0" y="${GR-160}" width="${len}" height="120" fill="#2a3a5a"/>`;
      for (let y = GR-150; y < GR-45; y += 14) each(12, x=>{ s+=`<circle cx="${x}" cy="${y}" r="4" fill="hsl(${Math.floor(r()*360)} 60% 60%)"/>`; }, 6);
      each(300, x=>{ s+=`<path d="M${x} ${GR-160} V${GR-290}" stroke="#c9c9c9" stroke-width="5"/><rect x="${x-24}" y="${GR-310}" width="48" height="24" fill="#e8eef8"/><circle class="blink" cx="${x}" cy="${GR-298}" r="20" fill="#fff6c8" opacity=".25"/>`; }, 80);
      if (i === 0) s += `<rect x="20" y="${GR+4}" width="10" height="70" fill="#fff"/><text x="40" y="${GR-20}" font-size="22" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">START</text>`;
      break;
    case 2: // city streets: buildings and cheering spectators
      each(130, x=>{ const h = f1(140+r()*120); s+=`<rect x="${x}" y="${f1(GR-h)}" width="110" height="${h}" fill="hsl(${Math.floor(r()*40)+200} 15% ${f1(30+r()*15)}%)"/>`;
        for (let wy = GR-h+14; wy < GR-60; wy += 26) for (let wx = x+10; wx < x+100; wx += 24) s+=`<rect x="${wx}" y="${f1(wy)}" width="12" height="14" fill="${r()<.6?"#ffe8a0":"#2a3a4a"}"/>`; }, 10);
      each(40, x=>{ s+=fan(x, Math.floor(r()*5)); }, 20);
      each(260, x=>{ s+=`<rect x="${x}" y="${GR-90}" width="60" height="26" fill="#fff"/><text x="${x+30}" y="${GR-72}" text-anchor="middle" font-size="12" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">GO GO!</text>`; }, 100);
      break;
    case 3: // the park: trees and a water station
      each(90, x=>{ s+=`<path d="M${x} ${GR} V${GR-60}" stroke="#6a4a2a" stroke-width="8"/><circle cx="${x}" cy="${GR-90}" r="${f1(30+r()*16)}" fill="hsl(${f1(100+r()*30)} 45% 35%)"/>`; }, 30);
      s += `<path d="M0 ${GR+24} H${len}" stroke="#c8b890" stroke-width="22"/>`;
      each(320, x=>{ s+=`<rect x="${x}" y="${GR-40}" width="90" height="10" fill="#e8e2d0"/><rect x="${x+4}" y="${GR-30}" width="6" height="30" fill="#8a8a8a"/><rect x="${x+80}" y="${GR-30}" width="6" height="30" fill="#8a8a8a"/>` + [0,1,2,3,4].map(k=>`<path d="M${x+10+k*16} ${GR-52} h10 l-2 12 h-6z" fill="#9fd8ff" stroke="#fff"/>`).join("") + `<text x="${x+45}" y="${GR-62}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">WATER</text>`; }, 120);
      break;
    case 4: // the river and the bridge at halfway
      s += `<rect x="0" y="${GR-60}" width="${len}" height="60" fill="#2a6a9a"/>`;
      each(36, x=>{ s+=`<path class="wave" d="M${x} ${GR-30} q9 -5 18 0" stroke="#cfe8ff" stroke-width="2" fill="none" opacity=".6"/>`; }, 0);
      s += `<path d="M0 ${GR-60} H${len}" stroke="#c9c9c9" stroke-width="6"/>` + Array.from({length: Math.floor(len/40)}, (_, k) => `<path d="M${k*40} ${GR-60} v-30" stroke="#c9c9c9" stroke-width="3"/>`).join("") + `<path d="M0 ${GR-90} H${len}" stroke="#c9c9c9" stroke-width="3"/>`;
      s += `<rect x="${f1(len/2-60)}" y="${GR-160}" width="120" height="30" rx="4" fill="#3ee089"/><text x="${f1(len/2)}" y="${GR-139}" text-anchor="middle" font-size="16" font-weight="700" fill="#06281a" font-family="Chakra Petch,sans-serif">21.1 KM</text>`;
      break;
    case 5: // the wall: a brick wall of exhaustion in the gloom
      s += `<rect x="0" y="${GR-220}" width="${len}" height="220" fill="#5a2a1a"/>`;
      for (let y = GR-220; y < GR; y += 22) for (let x = (y/22%2)*30; x < len; x += 60) s += `<rect x="${x+2}" y="${y+2}" width="56" height="18" fill="#7a3a2a" stroke="#3a1a10"/>`;
      each(240, x=>{ s+=`<text x="${x}" y="${GR-120}" font-size="26" font-weight="700" fill="#ffd25a" opacity=".5" font-family="Chakra Petch,sans-serif">GLYCOGEN LOW</text>`; }, 60);
      break;
    case 6: // the final straight: barriers, crowds and the finish gantry
      each(16, x=>{ s+=fan(x, Math.floor(r()*5)); }, 10);
      s += `<rect x="0" y="${GR-22}" width="${len}" height="22" fill="#2a4a9a"/>`;
      s += `<rect x="${len-180}" y="${GR-240}" width="14" height="240" fill="#c9c9c9"/><rect x="${len-40}" y="${GR-240}" width="14" height="240" fill="#c9c9c9"/><rect x="${len-180}" y="${GR-260}" width="154" height="40" fill="#e8443a"/><text x="${len-103}" y="${GR-232}" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">FINISH</text>`;
      break;
    case 7: // the ultra trail: forest, hills and trail markers
      s += `<path d="M0 ${GR} Q${f1(len*.25)} ${GR-150} ${f1(len*.5)} ${GR-70} T${len} ${GR-120} V${GR}z" fill="#2a5a3a"/>`;
      each(70, x=>{ s+=`<path d="M${x} ${GR-10} l14 -60 l14 60z" fill="#1a4a2a"/>`; }, 10);
      each(220, x=>{ s+=`<path d="M${x} ${GR} v-40" stroke="#8a6a3a" stroke-width="4"/><rect x="${x}" y="${GR-40}" width="20" height="12" fill="#ff8a1a"/>`; }, 80);
      break;
    case 8: // the mountain pass: snowy peaks and thin air
      each(300, x=>{ s+=`<path d="M${x} ${GR} L${x+150} ${GR-250} L${x+300} ${GR}z" fill="#6a7a8a"/><path d="M${x+105} ${GR-175} L${x+150} ${GR-250} L${x+195} ${GR-175} q-22 12 -45 0 q-22 12 -45 0z" fill="#fff"/>`; }, 0);
      each(26, x=>{ s+=`<circle class="drift" style="animation-delay:-${f1(r()*4)}s" cx="${x}" cy="${f1(40+r()*200)}" r="2" fill="#fff" opacity=".8"/>`; }, 0);
      s += `<text x="80" y="60" font-size="16" font-weight="700" fill="#2a3a5a" font-family="Chakra Petch,sans-serif">ALTITUDE 3,000 M · LESS OXYGEN</text>`;
      break;
    case 9: // the desert stage: dunes, a blazing sun and cacti
      s += `<circle cx="${f1(len*.7)}" cy="70" r="44" fill="#fff2a8"/><circle class="blink" cx="${f1(len*.7)}" cy="70" r="64" fill="#ffd25a" opacity=".3"/>`;
      each(240, x=>{ s+=`<path d="M${x-120} ${GR} Q${x} ${GR-110} ${x+120} ${GR}z" fill="#e0a050"/>`; }, 0);
      each(360, x=>{ s+=`<path d="M${x+60} ${GR} v-70 q0 -10 9 -10 q9 0 9 10 v70z M${x+60} ${GR-40} h-12 v-20 q0 -6 6 -6 q6 0 6 6z" fill="#4a8a3a"/>`; }, 100);
      break;
  }
  return hscene(s, len);
}
/* the running heart: it gets a sweatband, a race number, a stopwatch and a medal, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#ffd25a" : "#e8344a", line = gold ? "#b8861a" : "#8a1020";
  const s = `<g class="av-rock">
    <path d="M-6 18 l-8 14 l-8 -2 M6 18 l10 12 l8 -4" stroke="${line}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-26 28 l8 2 M24 22 l6 -3" stroke="#2a2a2a" stroke-width="6" stroke-linecap="round"/>
    <path d="M-20 -4 l-12 10 M20 -4 l12 -10" stroke="${line}" stroke-width="4" stroke-linecap="round"/>
    <path d="M-12 -30 v-8 M-4 -30 v-10 M6 -30 q0 -8 6 -10" stroke="${gold ? "#e0ad2a" : "#c82a3a"}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M0 26 C-30 6 -28 -24 -12 -26 C-4 -27 0 -20 0 -16 C0 -20 4 -27 12 -26 C28 -24 30 6 0 26 Z" fill="${body}" stroke="${line}" stroke-width="2"/>
    <path d="M-16 -14 q4 -6 10 -6" stroke="#fff" stroke-width="2.4" fill="none" opacity=".45" stroke-linecap="round"/>
    ${level >= 2 ? `<path d="M-22 -14 q22 -8 44 0 l0 6 q-22 -8 -44 0z" fill="#fff"/><path d="M-22 -14 q22 -8 44 0" stroke="#3a8ae8" stroke-width="1.5" fill="none"/>` : ""}
    <circle cx="-7" cy="-2" r="4.4" fill="#fff"/><circle cx="7" cy="-2" r="4.4" fill="#fff"/>
    <g class="av-blink"><circle cx="-6.4" cy="-1.6" r="2.2" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/><circle cx="7.6" cy="-1.6" r="2.2" fill="${level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a"}"/></g>
    <path d="M-5 7 q5 5 10 0" stroke="${line}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${level >= 3 ? `<rect x="-8" y="11" width="16" height="9" rx="1" fill="#fff" stroke="#2a2a2a" stroke-width=".8"/><text x="0" y="18" text-anchor="middle" font-size="6.5" font-weight="700" fill="#2a2a2a" font-family="Chakra Petch,sans-serif">42</text>` : ""}
    ${level >= 4 ? `<g transform="translate(-32 6)"><circle r="5" fill="#fff" stroke="#2a2a2a" stroke-width="1.4"/><path d="M0 0 v-3 M0 0 h2.4" stroke="#2a2a2a" stroke-width="1"/><rect x="-1.2" y="-7.6" width="2.4" height="2" fill="#2a2a2a"/></g>` : ""}
    ${level >= 6 ? `<path d="M-4 -26 l4 10 l4 -10" stroke="#3a8ae8" stroke-width="2" fill="none"/><circle cy="-12" r="0" fill="none"/><g transform="translate(16 18)"><path d="M-3 -10 l3 6 l3 -6" stroke="#e8443a" stroke-width="2" fill="none"/><circle r="5" fill="#ffd25a" stroke="#b8861a" stroke-width="1.2"/></g>` : ""}
    ${gold ? `<circle r="35" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,120,`<path d="M84 8 l16 40 l16 -40" stroke="#e8443a" stroke-width="10" fill="none"/><circle cx="100" cy="72" r="30" fill="#ffd25a" stroke="#fff2a8" stroke-width="3"/><circle cx="100" cy="72" r="20" fill="none" stroke="#b8861a" stroke-width="2"/><text x="100" y="79" text-anchor="middle" font-size="18" font-weight="700" fill="#8a5a08" font-family="Chakra Petch,sans-serif">1</text>`
    + [[34,30],[166,40],[40,100],[160,104]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="${c}"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<circle cx="85" cy="56" r="34" fill="#f4f4f4" stroke="${c}" stroke-width="3"/><rect x="79" y="12" width="12" height="10" fill="${c}"/><text x="85" y="64" text-anchor="middle" font-size="20" font-weight="700" fill="#2a2a2a" font-family="Chakra Petch,sans-serif">PB</text>`);
  if (t === "trojan") return W(170,100,`<rect x="65" y="30" width="40" height="60" fill="#ffd25a" stroke="${c}" stroke-width="2"/><rect x="25" y="50" width="40" height="40" fill="#c9c9c9" stroke="${c}" stroke-width="2"/><rect x="105" y="62" width="40" height="28" fill="#c87a3a" stroke="${c}" stroke-width="2"/><text x="85" y="66" text-anchor="middle" font-size="18" font-weight="700" fill="#2a2a2a">1</text>`);
  if (t === "adware") return W(170,100,`<path d="M75 10 l10 30 l10 -30" stroke="#3a8ae8" stroke-width="8" fill="none"/><circle cx="85" cy="62" r="24" fill="#c87a3a" stroke="${c}" stroke-width="2"/>`);
  if (t === "spam") return W(170,90,`<path d="M85 14 l26 60 h-52z" fill="#ff8a1a" stroke="${c}" stroke-width="2"/><path d="M68 54 h34 M76 36 h18" stroke="#fff" stroke-width="5"/><rect x="50" y="72" width="70" height="8" fill="#ff8a1a"/>`);
  if (t === "blocked") return W(170,100,`<path d="M40 54 h40 v-14 h40 v14 h-10 l-10 20 h-20 l4 -20 h-44z" fill="#3a3a3a"/><text class="blink" x="85" y="30" text-anchor="middle" font-size="16" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">FALSE START</text>`);
  return null;
}
registerSubject({
  key:"sehs", name:"Sports, Exercise and Health Science", theme:"A running heart on the longest race of its life", gemWord:"Marathon", gemTitle:"One in a Marathon", emoji:"❤️",
  blurb:"You're a <b>heart</b> in the starting blocks. Each prompt has many correct answers. <b>Obvious answers barely get you out of the stadium. Answers other athletes missed carry you further</b>, through the city and the park, past the half-marathon mark, through the wall and down the final straight of a marathon, then on into ultra trails, a mountain pass and a desert stage.",
  noLevel:"SL and HL",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Marathon", rootkit:"Personal best", trojan:"Podium finish", adware:"Finisher", spam:"Warm-up"}, blocked:"False start", fw:"FALSE START",
  notes:{rootkit:"A personal best: very few athletes got this far.", trojan:"A podium finish: not the usual answer.", adware:"You finished: correct and common.", spam:"Just a warm-up: what everyone says first."},
  ladder:{gem:"One in a Marathon: almost no one thinks of it", rootkit:"Personal best: a rare answer", trojan:"Podium finish: a strong, less common answer", adware:"Finisher: correct and common", spam:"Warm-up: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Run ▶", inject:"Go", hint:"▶ rarer answers run further ▶", count:"catching your breath"},
  shout:t => ({gem:"WORLD RECORD!", rootkit:"PERSONAL BEST!", blocked:"FALSE START!"})[t],
  particles:["♥","✦","⚡","•"], particleColor:"#ff6a7a",
  meter:{label:"DISTANCE", fmt:fmtD, zone:fmtD, tick:fmtD, gain:(a,b)=>`run to ${fmtD(b)}`},
  start:{bg:"linear-gradient(90deg,#0e1a34,#1a3a6a)", label:"Start · 0 m", zone:"On your marks", color:"#ff6a7a"},
  endBg:"linear-gradient(90deg,#f4d09a,#fff2d8)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"Beyond the finish line",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
