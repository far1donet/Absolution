/* Psychology — a thought sinks through the mind: from the waking mind past daydreams, memory lane and the neuron
   forest, through sleep, dreams and nightmares, into the subconscious and the collective unconscious.
   Syllabus: IB Psychology (first assessment 2027): the six concepts, research methods, the biological, cognitive and
   sociocultural approaches, and the four contexts (health and well-being, human development, human relationships,
   learning and cognition). The topic groupings are this game's; there are no HL-only topics here. */
(function(){
const CATALOG = [
  {label:"Concepts and research", units:[
    {code:"K", name:"The six concepts", topics:[["K.1","Bias, causality, change, measurement, perspective and responsibility"]]},
    {code:"R", name:"Research methods", topics:[["R.1","Research methods and designs"],["R.2","Sampling, data and credibility"],["R.3","Ethics in research"]]},
  ]},
  {label:"Content · Approaches to understanding behaviour", units:[
    {code:"B", name:"The biological approach", topics:[["B.1","The brain and behaviour"],["B.2","Hormones and pheromones"],["B.3","Genetics and evolution"]]},
    {code:"C", name:"The cognitive approach", topics:[["C.1","Cognitive processing and memory"],["C.2","Reliability of cognitive processes"],["C.3","Emotion and cognition"]]},
    {code:"S", name:"The sociocultural approach", topics:[["S.1","The individual and the group"],["S.2","Culture and behaviour"],["S.3","Cultural change: enculturation and acculturation"]]},
  ]},
  {label:"Contexts", units:[
    {code:"H", name:"Health and well-being", topics:[["H.1","Health problems and stress"],["H.2","Addiction and health promotion"]]},
    {code:"D", name:"Human development", topics:[["D.1","Cognitive development"],["D.2","Social development and attachment"]]},
    {code:"P", name:"Human relationships", topics:[["P.1","Personal relationships"],["P.2","Group dynamics: cooperation, competition and conformity"],["P.3","Social responsibility and prosocial behaviour"]]},
    {code:"L", name:"Learning and cognition", topics:[["L.1","Learning theories"],["L.2","Cognition, study and technology"]]},
  ]},
];

const PROMPTS = [
/* ---------- K.1 concepts ---------- */
P("ps001","K.1","Name one of the six key concepts of the IB Psychology course.","Responsibility",[
  ["Bias",25],["Perspective",15,"perspectives"],["Change",12],["Causality",12,"cause and effect","causation"],["Measurement",10],["Responsibility",.4]],
  [[["ethics","culture","cognition","memory","behaviour","behavior"],"An important idea, but the six IB Psychology concepts are bias, causality, change, measurement, perspective and responsibility."]]),
P("ps002","K.1","Name a type of bias that can affect psychological research.","WEIRD samples",[
  ["Researcher bias",18,"experimenter bias","observer bias","researcher effects"],["Participant bias",15,"demand characteristics","participant expectations"],["Sampling bias",15,"biased sample","unrepresentative sample"],
  ["Confirmation bias",15],["Social desirability bias",12,"social desirability"],["Cultural bias",10,"ethnocentrism"],["Gender bias",6,"androcentrism","alpha bias","beta bias"],
  ["Publication bias",6,"file drawer problem"],["Hawthorne effect",5],["Recall bias",4,"memory bias"],["WEIRD samples",.4,"weird","western educated industrialised rich democratic"]]),
P("ps003","K.1","Name a way psychologists try to establish causality, or a reason a study can't.","Placebo control",[
  ["Manipulating the independent variable",25,"experiment","controlled experiment","manipulating the iv","true experiment"],["Correlation does not show causation",15,"correlation","correlational research"],
  ["Random allocation",12,"random assignment","randomisation","randomization"],["Control group",10],["Controlling extraneous variables",10,"controlling variables","extraneous variables","confounding variables"],
  ["Third variable problem",8,"third variable","confounds"],["Replication",6,"replicating","replicate"],["Double-blind design",5,"double blind"],["Bidirectional ambiguity",5,"reverse causation","bidirectional"],
  ["Placebo control",.4,"placebo","placebo group"]]),
P("ps004","K.1","Name a way of measuring a psychological variable.","Implicit Association Test",[
  ["Questionnaire",20,"self report","survey","self-report"],["Brain scan",15,"fmri","mri","brain imaging"],["Reaction time",10,"response time"],["EEG",8,"electroencephalography"],
  ["Interview",8,"interviews"],["Observation",8,"behavioural observation","behavioral observation"],["Psychometric test",8,"iq test","personality test"],["Likert scale",8,"rating scale"],
  ["Cortisol levels",6,"hormone levels","saliva samples"],["Memory recall score",6,"recall test","number of words recalled"],["Heart rate",5,"blood pressure","galvanic skin response"],
  ["Implicit Association Test",.4,"iat","implicit association"]]),
/* ---------- R research methods ---------- */
P("ps005","R.1","Name a research method used in psychology.","Ethnography",[
  ["Experiment",25,"laboratory experiment","lab experiment","experiments"],["Case study",15,"case studies"],["Interview",12,"interviews","semi structured interview"],["Observation",12,"observations","naturalistic observation"],
  ["Questionnaire",12,"survey","surveys"],["Correlational study",10,"correlation","correlational research"],["Field experiment",6],["Natural experiment",5],["Focus group",4,"focus groups"],
  ["Meta-analysis",3,"meta analysis"],["Longitudinal study",3,"longitudinal"],["Cross-cultural study",3,"cross cultural research"],["Content analysis",2],["Ethnography",.4,"ethnographic research"]]),
P("ps006","R.1","Name a type or feature of experimental design.","Latin square design",[
  ["Independent samples",20,"independent groups","independent measures","between subjects"],["Repeated measures",20,"within subjects"],["Matched pairs",15,"matched pairs design"],
  ["Control group",10],["Random allocation",10,"random assignment"],["Counterbalancing",8,"counterbalance"],["Double-blind",6,"double blind"],["Single-blind",5,"single blind"],
  ["Placebo",5,"placebo group"],["Standardized procedure",4,"standardised instructions","standardised procedure"],["Pilot study",3],["Latin square design",.4,"latin square"]]),
P("ps007","R.1","Name a type of observation used in psychological research.","Behavioural categories",[
  ["Naturalistic observation",15,"naturalistic"],["Participant observation",15,"participant"],["Non-participant observation",15,"non participant"],["Covert observation",15,"covert"],
  ["Overt observation",15,"overt"],["Controlled observation",10,"structured observation","structured","controlled"],["Unstructured observation",5,"unstructured"],["Time sampling",3],["Event sampling",3],
  ["Behavioural categories",.4,"behavioral categories","coding scheme","behaviour checklist"]]),
P("ps008","R.2","Name a sampling technique.","Theoretical sampling",[
  ["Random sampling",25,"random"],["Opportunity sampling",20,"convenience sampling","opportunity","convenience"],["Volunteer sampling",15,"self selected sampling","self-selected","volunteer"],
  ["Snowball sampling",10,"snowball"],["Stratified sampling",10,"stratified"],["Purposive sampling",10,"purposive"],["Systematic sampling",5,"systematic"],["Quota sampling",4,"quota"],
  ["Theoretical sampling",.4]]),
P("ps009","R.2","Name a way of describing or analysing data in psychology.","Effect size",[
  ["Mean",20,"average"],["Standard deviation",12,"sd"],["Median",12],["Mode",10],["Range",8],["Bar chart",8,"bar graph"],["Scatter graph",6,"scattergram","scatter plot"],
  ["Correlation coefficient",6,"pearson","spearman","r value"],["Statistical significance",6,"p value","significance","p < 0.05"],["Thematic analysis",6,"inductive content analysis","coding themes"],
  ["Inferential test",5,"t test","mann whitney","wilcoxon","chi squared"],["Histogram",5],["Effect size",.4,"cohen s d","cohens d"]]),
P("ps010","R.2","Name a way of making qualitative research more credible.","Audit trail",[
  ["Triangulation",25,"method triangulation","researcher triangulation","data triangulation"],["Reflexivity",15,"reflexive"],["Credibility checks",8,"member checking","respondent validation"],
  ["Rich description",6,"thick description"],["Inter-rater reliability",6,"inter rater","more than one researcher"],["Recording and transcribing",5,"audio recording","transcripts","transcription"],
  ["Data saturation",4,"saturation"],["Audit trail",.4]]),
P("ps011","R.3","Name an ethical consideration in psychological research.","Presumptive consent",[
  ["Informed consent",30,"consent"],["Right to withdraw",20,"withdrawal"],["Confidentiality",18,"anonymity","privacy"],["Protection from harm",15,"no harm","harm"],["Debriefing",15,"debrief"],
  ["Deception",12,"no deception"],["Ethics committee approval",4,"ethics committee","ethical approval"],["Parental consent for children",4,"parental consent"],["Presumptive consent",.4,"prior general consent"]]),
P("ps012","R.3","Name a famous study criticised on ethical grounds.","The Monster Study",[
  ["Milgram's obedience study",30,"milgram","obedience study"],["Stanford prison experiment",25,"zimbardo","stanford prison"],["Little Albert",15,"watson and rayner","watson"],
  ["Harlow's monkeys",8,"harlow"],["Bandura's Bobo doll study",3,"bobo doll","bandura"],["Tuskegee syphilis study",4,"tuskegee"],["Facebook emotional contagion study",3,"facebook study"],
  ["Robbers Cave",3,"sherif","robbers cave experiment"],["The Monster Study",.4,"monster study","wendell johnson","tudor study"]]),
/* ---------- B biological approach ---------- */
P("ps013","B.1","Name a part of the brain.","Nucleus accumbens",[
  ["Hippocampus",20],["Amygdala",20],["Prefrontal cortex",15,"pfc"],["Cerebellum",8],["Frontal lobe",8],["Broca's area",8,"brocas area","broca"],["Hypothalamus",6],["Wernicke's area",6,"wernickes area","wernicke"],
  ["Corpus callosum",5],["Temporal lobe",5],["Occipital lobe",4],["Parietal lobe",4],["Brain stem",3,"brainstem","medulla"],["Thalamus",3],["Motor cortex",3],["Nucleus accumbens",.4]]),
P("ps014","B.1","Name a technique used to study the brain.","Optogenetics",[
  ["fMRI",25,"functional mri"],["EEG",12,"electroencephalography"],["MRI",12,"magnetic resonance imaging"],["PET scan",10,"pet"],["CT scan",6,"cat scan","ct"],
  ["Case studies of brain damage",6,"lesion studies","brain damage"],["TMS",4,"transcranial magnetic stimulation"],["Post-mortem examination",4,"post mortem","autopsy"],["MEG",2],["Optogenetics",.4]]),
P("ps015","B.1","Name a neurotransmitter.","Substance P",[
  ["Dopamine",25],["Serotonin",25],["Acetylcholine",10,"ach"],["Noradrenaline",8,"norepinephrine"],["GABA",8,"gamma aminobutyric acid"],["Glutamate",6],["Endorphins",6,"endorphin"],
  ["Adrenaline",3,"epinephrine"],["Substance P",.4]]),
P("ps016","B.1","Name a study or case linked to localization of function or neuroplasticity.","Mechelli's bilingual brains",[
  ["HM (Henry Molaison)",25,"hm","henry molaison","patient hm"],["Phineas Gage",20,"gage"],["Maguire's taxi drivers",18,"maguire","london taxi drivers","taxi drivers"],["Sperry's split-brain studies",8,"sperry","split brain"],
  ["Broca's patient Tan",6,"tan","leborgne"],["Draganski's jugglers",6,"draganski","jugglers","juggling"],["Merzenich's monkeys",3,"merzenich"],["Mechelli's bilingual brains",.4,"mechelli","bilingual brains"]]),
P("ps017","B.2","Name a hormone that affects behaviour.","Ghrelin",[
  ["Cortisol",20],["Testosterone",18],["Oxytocin",15],["Adrenaline",12,"epinephrine"],["Melatonin",8],["Oestrogen",8,"estrogen"],["Vasopressin",3],["Insulin",3],["Thyroxine",2],["Ghrelin",.4]]),
P("ps018","B.2","Name a behaviour or study linked to pheromones.","Bombykol",[
  ["Sexual attraction",15,"attraction","mate attraction"],["Menstrual synchrony",15,"mcclintock","period syncing"],["Wedekind's sweaty T-shirt study",15,"wedekind","sweaty t shirt","t shirt study"],
  ["Mate choice by MHC",8,"mhc","immune genes"],["Androstadienone",8,"androstenone"],["Ant trail marking",6,"ants","trail pheromones"],["Fear signals in sweat",3,"fear sweat"],["Bombykol",.4,"silk moth","moths"]]),
P("ps019","B.3","Name a research method used to study genetics and behaviour.","Polygenic scores",[
  ["Twin studies",30,"twins","twin study"],["Adoption studies",20,"adoption"],["Family studies",15,"kinship studies","family"],["Gene mapping",8,"genome wide association","gwas","genome studies"],
  ["Animal studies",6,"knockout mice","animal research"],["Molecular genetics",4,"dna analysis","candidate gene studies"],["Polygenic scores",.4,"polygenic risk scores"]]),
P("ps020","B.3","Name a behaviour explained by evolutionary psychology.","Pregnancy sickness",[
  ["Fear of snakes and spiders",15,"fear of snakes","fear of spiders","phobias"],["Mate preferences",15,"mate choice","attraction"],["Disgust",10],["Kin altruism",10,"altruism","helping relatives"],
  ["Fight or flight",8,"fight or flight response"],["Jealousy",8],["Attachment",6],["Taste for sugar and fat",6,"sweet tooth","craving sugar"],["Aggression",5],["Cooperation",4],
  ["Pregnancy sickness",.4,"morning sickness"]]),
P("ps021","B.3","Name a gene or genetic concept linked to behaviour.","Polygenic inheritance",[
  ["MAOA gene",15,"maoa","warrior gene"],["5-HTT gene",15,"5 htt","serotonin transporter gene","5htt"],["Heritability",15],["Gene–environment interaction",10,"gene environment interaction","nature and nurture"],
  ["Epigenetics",10],["Concordance rate",8,"concordance"],["Genotype",6],["Phenotype",6],["Diathesis–stress model",6,"diathesis stress"],["APOE gene",3,"apoe"],["Polygenic inheritance",.4,"polygenic"]]),
/* ---------- C cognitive approach ---------- */
P("ps022","C.1","Name a model or theory of memory.","Spreading activation model",[
  ["Multi-store model",30,"multi store model","msm","atkinson and shiffrin"],["Working memory model",25,"working memory","baddeley and hitch"],["Levels of processing",10,"craik and lockhart","levels of processing model"],
  ["Schema theory",10,"schema","schemas"],["Reconstructive memory",6,"bartlett"],["Episodic and semantic memory (Tulving)",4,"tulving"],["Spreading activation model",.4,"spreading activation"]]),
P("ps023","C.1","Name a component of the multi-store model or the working memory model.","Inner scribe",[
  ["Sensory memory",15,"sensory register"],["Short-term memory",15,"stm","short term memory"],["Long-term memory",15,"ltm","long term memory"],["Central executive",15],
  ["Phonological loop",15],["Visuospatial sketchpad",15,"visuo spatial sketchpad","visuospatial sketch pad"],["Episodic buffer",10],["Phonological store",4,"inner ear"],
  ["Articulatory control process",4,"articulatory loop","inner voice"],["Inner scribe",.4]]),
P("ps024","C.1","Name a type of long-term memory.","Prospective memory",[
  ["Episodic memory",20,"episodic"],["Semantic memory",20,"semantic"],["Procedural memory",18,"procedural"],["Explicit memory",10,"declarative memory","explicit","declarative"],
  ["Implicit memory",8,"implicit","non declarative"],["Autobiographical memory",6,"autobiographical"],["Flashbulb memory",6,"flashbulb"],["Priming",3],["Prospective memory",.4,"prospective"]]),
P("ps025","C.2","Name a factor that makes eyewitness testimony unreliable.","Unconscious transference",[
  ["Leading questions",25,"leading question"],["Post-event information",12,"post event information"],["Reconstructive memory",10,"reconstruction"],["Weapon focus",10,"weapon focus effect"],
  ["Stress and anxiety",10,"anxiety","stress"],["Misinformation effect",8,"misinformation"],["Schemas",8,"schema"],["Time delay",6,"delay","forgetting"],["Own-race bias",6,"cross race effect","other race effect"],
  ["Source misattribution",4,"source monitoring"],["Unconscious transference",.4]]),
P("ps026","C.2","Name a study of memory reliability or false memory.","DRM word lists",[
  ["Loftus and Palmer",30,"loftus","car crash study","smashed","loftus and palmer 1974"],["Loftus and Pickrell",15,"lost in the mall"],["Bartlett's War of the Ghosts",15,"bartlett","war of the ghosts"],
  ["Yuille and Cutshall",6,"yuille"],["Brown and Kulik",6,"brown and kulik","flashbulb memory study"],["Neisser and Harsch",6,"neisser","challenger study"],["Braun et al. (Bugs Bunny)",5,"bugs bunny","braun"],
  ["DRM word lists",.4,"drm","deese roediger mcdermott","roediger and mcdermott"]]),
P("ps027","C.2","Name a heuristic or bias in thinking and decision-making.","Base rate neglect",[
  ["Confirmation bias",15],["Anchoring",15,"anchoring bias"],["Availability heuristic",12,"availability"],["Framing effect",12,"framing"],["Representativeness heuristic",8,"representativeness"],
  ["Loss aversion",6],["Overconfidence",6,"overconfidence bias"],["Sunk cost fallacy",6,"sunk cost"],["Hindsight bias",6],["System 1 thinking",6,"system 1","dual process","fast thinking"],
  ["Base rate neglect",.4,"base rate fallacy"]]),
P("ps028","C.3","Name a theory or concept about emotion and cognition.","Adrenaline consolidation (McGaugh)",[
  ["Flashbulb memory",25,"flashbulb"],["Two-factor theory",10,"schachter singer","schachter and singer","two factor theory"],["Role of the amygdala",10,"amygdala"],["James–Lange theory",8,"james lange"],
  ["Appraisal theory",8,"lazarus","cognitive appraisal"],["Mood-congruent memory",8,"mood congruence","mood congruent"],["Cannon–Bard theory",6,"cannon bard"],["State-dependent memory",6,"state dependent"],
  ["Yerkes–Dodson law",6,"yerkes dodson"],["Adrenaline consolidation (McGaugh)",.4,"mcgaugh","adrenaline consolidation","stress hormones and memory"]]),
P("ps029","C.3","Name one of Ekman's basic emotions.","Contempt",[
  ["Happiness",20,"joy","happy"],["Sadness",18,"sad"],["Anger",18,"angry"],["Fear",18,"afraid","scared"],["Disgust",12],["Surprise",10],["Contempt",.4]],
  [[["love","jealousy","pride","shame","guilt"],"That's an emotion, but Ekman's basic, universally recognized emotions are happiness, sadness, anger, fear, disgust, surprise and contempt."]]),
/* ---------- S sociocultural approach ---------- */
P("ps030","S.1","Name a concept from social identity theory.","Out-group homogeneity",[
  ["In-group",20,"ingroup","in group"],["Out-group",15,"outgroup","out group"],["Social categorization",15,"categorisation","categorization","social categorisation"],["Social comparison",12],
  ["In-group favouritism",10,"ingroup bias","in group bias","in-group bias"],["Social identification",10,"identification"],["Self-esteem",6,"self esteem"],["Positive distinctiveness",6],
  ["Minimal group paradigm",6,"minimal groups","tajfel"],["Out-group homogeneity",.4,"outgroup homogeneity"]]),
P("ps031","S.1","Name a concept from social cognitive theory.","Vicarious punishment",[
  ["Observational learning",25,"modelling","modeling","learning by watching"],["Self-efficacy",15,"self efficacy"],["Vicarious reinforcement",12],["Imitation",10,"copying"],["Role models",10,"model","models"],
  ["Reciprocal determinism",10],["Attention, retention, reproduction, motivation",8,"arrm","attention retention reproduction motivation"],["Bobo doll study",8,"bobo doll","bandura"],
  ["Vicarious punishment",.4]]),
P("ps032","S.1","Name a theory, effect or idea related to stereotypes.","Shifting standards",[
  ["Stereotype threat",25,"steele and aronson"],["Illusory correlation",12,"hamilton and gifford"],["Grain of truth hypothesis",8,"grain of truth"],["Confirmation bias",8],["Social identity theory",8],
  ["Prejudice",8],["Out-group homogeneity",6,"outgroup homogeneity"],["Self-fulfilling prophecy",6,"self fulfilling prophecy"],["Implicit bias",6,"unconscious bias"],["Shifting standards",.4,"shifting standards model"]]),
P("ps033","S.2","Name one of Hofstede's cultural dimensions.","Indulgence versus restraint",[
  ["Individualism–collectivism",30,"individualism","collectivism","individualism vs collectivism","individualism collectivism"],["Power distance",20],["Uncertainty avoidance",15],
  ["Masculinity–femininity",15,"masculinity","femininity","masculinity vs femininity"],["Long-term orientation",10,"long term orientation","short term orientation"],
  ["Indulgence versus restraint",.4,"indulgence","restraint","indulgence vs restraint"]]),
P("ps034","S.2","Name a concept studied in cultural psychology.","Culture of honour",[
  ["Cultural norms",15,"norms","social norms"],["Enculturation",15],["Acculturation",15],["Cultural dimensions",10,"hofstede"],["Emic and etic approaches",8,"emic","etic"],["Ethnocentrism",6],
  ["Cultural schemas",6,"cultural schema"],["Culture-bound syndromes",6,"culture bound syndrome"],["Tight and loose cultures",3,"tightness looseness"],["Culture of honour",.4,"honour culture","honor culture","cohen and nisbett"]]),
P("ps035","S.3","Name one of Berry's acculturation strategies, or an effect of acculturation.","Remote acculturation",[
  ["Integration",20],["Assimilation",20],["Separation",15],["Marginalization",15,"marginalisation"],["Acculturative stress",15,"acculturation stress"],["Bicultural identity",6,"biculturalism"],
  ["Remote acculturation",.4]]),
P("ps036","S.3","Name a way culture is passed on to children (enculturation).","Guided participation",[
  ["Parents",20,"family","parenting"],["School",15,"education","teachers"],["Peers",10,"friends"],["Media",10,"television","social media"],["Religion",8],["Language",8],
  ["Observational learning",6,"modelling","imitation"],["Rituals and festivals",6,"rituals","festivals","traditions"],["Storytelling",4,"stories","folk tales"],["Guided participation",.4,"apprenticeship","rogoff"]]),
/* ---------- H health and well-being ---------- */
P("ps037","H.1","Name a source or effect of stress.","Allostatic load",[
  ["Exams",15,"tests","school pressure"],["Work pressure",15,"work","job stress","workload"],["Life events",12,"divorce","bereavement","moving house"],["Daily hassles",10,"hassles"],
  ["Cortisol release",10,"cortisol"],["Fight-or-flight response",8,"fight or flight"],["Weakened immune system",8,"immune system","illness"],["Poverty",8,"low income"],["HPA axis",6,"hpa"],
  ["Heart disease",6,"high blood pressure","cardiovascular disease"],["Anxiety",4],["Allostatic load",.4]]),
P("ps038","H.1","Name a way of coping with or treating stress.","Expressive writing",[
  ["Exercise",20,"sport","physical activity"],["Mindfulness",18,"meditation","mindfulness based stress reduction","mbsr"],["Social support",15,"talking to friends","support"],
  ["Cognitive behavioural therapy",12,"cbt","cognitive behavioral therapy"],["Relaxation and breathing",8,"relaxation","breathing exercises","deep breathing"],["Stress inoculation training",6,"sit","meichenbaum"],
  ["Problem-focused coping",6,"problem focused"],["Medication",6,"beta blockers","benzodiazepines"],["Time management",5],["Emotion-focused coping",4,"emotion focused"],["Sleep",4],["Biofeedback",4],
  ["Expressive writing",.4,"pennebaker","journaling"]]),
P("ps039","H.1","Name a health problem psychologists study.","Orthorexia",[
  ["Depression",15],["Stress",15],["Addiction",15,"substance abuse"],["Obesity",12],["Anxiety",10,"anxiety disorders"],["Eating disorders",8,"anorexia","bulimia"],["PTSD",6,"post traumatic stress disorder"],
  ["Insomnia",5,"sleep problems"],["Chronic pain",3],["Orthorexia",.4,"orthorexia nervosa"]]),
P("ps040","H.1","Name a determinant of health in the biopsychosocial model.","Health literacy",[
  ["Lifestyle",15,"diet","exercise","smoking"],["Genetics",15,"genes"],["Socioeconomic status",12,"poverty","income","ses"],["Stress",10],["Social support",10,"relationships"],
  ["Access to healthcare",8,"healthcare"],["Education",6],["Culture",6,"cultural norms"],["Environment",6,"pollution","housing"],["Personality",4],["Health literacy",.4]]),
P("ps041","H.2","Name a health promotion strategy or model.","Motivational interviewing",[
  ["Health belief model",20,"hbm"],["Theory of planned behaviour",15,"theory of planned behavior","tpb"],["Fear appeals",12,"fear appeal","scare tactics"],["Stages of change",10,"transtheoretical model"],
  ["Social marketing campaigns",10,"campaigns","social marketing"],["Nudges",8,"nudge"],["Graphic warning labels",6,"warning labels","cigarette warnings"],["Self-efficacy",5,"self efficacy"],
  ["Sugar tax",5,"taxes"],["School programmes",4,"school programs","school based programmes"],["Motivational interviewing",.4]]),
P("ps042","H.2","Name a factor linked to addiction.","Variable-ratio reinforcement",[
  ["Dopamine reward pathway",20,"dopamine","reward pathway","reward system"],["Genetic predisposition",15,"genetics","genes"],["Peer pressure",15,"social influence","friends"],
  ["Stress",8],["Tolerance and withdrawal",6,"tolerance","withdrawal"],["Childhood trauma",6,"trauma"],["Easy access",6,"availability"],["Advertising",5,"marketing"],["Self-medication",5,"self medication"],
  ["Low self-esteem",4,"self esteem"],["Variable-ratio reinforcement",.4,"variable ratio","gambling reinforcement"]]),
/* ---------- D human development ---------- */
P("ps043","D.1","Name a stage or concept from Piaget's theory of cognitive development.","Equilibration",[
  ["Sensorimotor stage",20,"sensorimotor"],["Preoperational stage",20,"preoperational","pre operational"],["Concrete operational stage",18,"concrete operational"],["Formal operational stage",18,"formal operational"],
  ["Object permanence",10],["Conservation",10],["Egocentrism",8,"egocentric"],["Schema",8,"schemas"],["Assimilation",8],["Accommodation",8],["Equilibration",.4,"equilibrium"]]),
P("ps044","D.1","Name a theory or concept of cognitive development other than Piaget's stages.","Sally–Anne test",[
  ["Zone of proximal development",25,"zpd","vygotsky"],["Scaffolding",18],["Theory of mind",12],["More knowledgeable other",10,"mko"],["Executive function",6],["Information processing approach",6,"information processing"],
  ["Spiral curriculum",5,"bruner"],["Private speech",3,"inner speech"],["Sally–Anne test",.4,"sally anne","false belief task"]]),
P("ps045","D.2","Name a concept or study from attachment research.","Van IJzendoorn's cross-cultural meta-analysis",[
  ["Strange situation",20,"ainsworth","strange situation procedure"],["Secure attachment",15,"secure"],["Insecure-avoidant attachment",10,"avoidant","insecure avoidant"],["Monotropy",10,"bowlby"],
  ["Harlow's monkeys",10,"harlow","rhesus monkeys"],["Insecure-resistant attachment",8,"resistant","ambivalent","insecure resistant"],["Internal working model",8],["Imprinting",8,"lorenz","geese"],
  ["Critical period",6,"sensitive period"],["Romanian orphans",6,"rutter","era study"],["Maternal deprivation",6],["Disorganized attachment",5,"disorganised"],
  ["Van IJzendoorn's cross-cultural meta-analysis",.4,"van ijzendoorn","ijzendoorn","cross cultural meta analysis"]]),
P("ps046","D.2","Name a factor that can influence a child's development.","Adverse childhood experiences",[
  ["Poverty",15,"socioeconomic status","low income"],["Parenting style",15,"parenting","parents"],["Trauma and abuse",12,"abuse","trauma","neglect"],["Nutrition",10,"diet","malnutrition"],
  ["Education",10,"school"],["Attachment",10],["Peers",8,"friends"],["Genes",6,"genetics"],["Culture",6],["Divorce",5,"family breakdown"],["Screen time",5,"technology"],
  ["Adverse childhood experiences",.4,"aces","ace"]]),
/* ---------- P human relationships ---------- */
P("ps047","P.1","Name a factor or theory in the formation of personal relationships.","Filter theory",[
  ["Proximity",15,"closeness","living nearby"],["Similarity",15,"shared interests","similar attitudes"],["Physical attractiveness",15,"attractiveness","looks"],["Social exchange theory",10,"social exchange","cost benefit"],
  ["Matching hypothesis",10,"matching"],["Familiarity",10,"mere exposure","mere exposure effect"],["Evolutionary explanations",6,"evolution"],["Reciprocity",6,"reciprocal liking"],["Equity theory",5,"equity"],
  ["Complementarity",4],["Filter theory",.4,"kerckhoff and davis"]]),
P("ps048","P.1","Name a cause of relationship breakdown, or a way of maintaining a relationship.","Positive illusions",[
  ["Poor communication",15,"communication","lack of communication"],["Infidelity",10,"cheating","affair"],["Conflict",8,"arguments"],["Lack of trust",8,"trust"],["Jealousy",8],
  ["Gottman's four horsemen",6,"four horsemen","contempt","criticism","stonewalling","defensiveness"],["Attributional style",6,"attributions"],["Shared activities",6,"spending time together"],
  ["Duck's stages of breakdown",4,"duck","duck s model"],["Positive illusions",.4]]),
P("ps049","P.2","Name a concept related to group dynamics, cooperation or competition.","Deindividuation",[
  ["Conformity",15],["Realistic conflict theory",10,"realistic group conflict","competition for resources"],["Superordinate goals",10],["Robbers Cave",10,"sherif","robbers cave study"],
  ["Groupthink",10],["Social loafing",10],["Contact hypothesis",8,"intergroup contact"],["Prejudice",6],["Discrimination",6],["Obedience",6],["Jigsaw classroom",4,"jigsaw"],["Deindividuation",.4]]),
P("ps050","P.2","Name a study of conformity or obedience.","Moscovici's blue-green slides",[
  ["Asch's line study",30,"asch","line study","asch conformity"],["Milgram's obedience study",30,"milgram"],["Stanford prison experiment",10,"zimbardo"],["Sherif's autokinetic study",8,"autokinetic","sherif"],
  ["Hofling's nurses",6,"hofling"],["Burger's replication",4,"burger"],["Bond and Smith's meta-analysis",4,"bond and smith"],["Moscovici's blue-green slides",.4,"moscovici","blue green slides","minority influence"]]),
P("ps051","P.3","Name a factor that affects whether bystanders help.","Audience inhibition",[
  ["Diffusion of responsibility",20],["Number of bystanders",15,"group size","more bystanders"],["Ambiguity",10,"ambiguous situation","unclear situation"],["Pluralistic ignorance",10],
  ["Cost–reward analysis",8,"cost reward","piliavin","arousal cost reward"],["Similarity to the victim",8,"similarity","in group victim"],["Kitty Genovese case",8,"kitty genovese","genovese"],
  ["Time pressure",4,"good samaritan study","in a hurry"],["Mood",5,"good mood"],["Competence",5,"skills","training"],["Audience inhibition",.4,"fear of embarrassment","evaluation apprehension"]]),
P("ps052","P.3","Name an explanation of prosocial or altruistic behaviour.","Warm-glow giving",[
  ["Empathy–altruism hypothesis",20,"empathy altruism","batson","empathy"],["Kin selection",15,"kin altruism","inclusive fitness"],["Reciprocal altruism",15,"reciprocity","trivers"],
  ["Social norms",10,"norm of reciprocity","social responsibility norm"],["Negative-state relief",8,"negative state relief","cialdini"],["Evolutionary explanations",6,"evolution"],
  ["Warm-glow giving",.4,"warm glow"]]),
/* ---------- L learning and cognition ---------- */
P("ps053","L.1","Name a type of learning or a key term from behaviourism.","Latent learning",[
  ["Classical conditioning",25,"pavlovian conditioning"],["Operant conditioning",25,"instrumental conditioning"],["Positive reinforcement",12],["Negative reinforcement",10],["Punishment",8],
  ["Social learning",8,"observational learning"],["Extinction",6],["Shaping",5],["Generalization",4,"generalisation","stimulus generalisation"],["Spontaneous recovery",3],["Latent learning",.4,"tolman"]]),
P("ps054","L.1","Name a researcher or study in learning theory.","The Garcia effect",[
  ["Pavlov's dogs",25,"pavlov"],["Skinner box",20,"skinner","bf skinner"],["Little Albert",15,"watson and rayner","watson"],["Bandura's Bobo doll study",15,"bandura","bobo doll"],
  ["Thorndike's puzzle box",6,"thorndike","law of effect"],["Tolman's rats",4,"tolman","cognitive maps"],["Seligman's learned helplessness",4,"seligman","learned helplessness"],["The Garcia effect",.4,"garcia","taste aversion"]]),
P("ps055","L.2","Name an effect of digital technology on cognition.","Transactive memory",[
  ["Shorter attention span",15,"attention span","reduced attention"],["Multitasking costs",12,"multitasking","task switching"],["Google effect",10,"digital amnesia","google effect on memory"],
  ["Distraction",8,"distractions","notifications"],["Sleep disruption",8,"blue light","poor sleep"],["Better visuospatial skills",8,"visuospatial skills","spatial skills","video games"],
  ["Cognitive offloading",6,"offloading"],["Faster reaction times",4,"reaction times"],["Changes in brain structure",4,"neuroplasticity"],["Transactive memory",.4]]),
P("ps056","L.2","Name a study or learning strategy supported by cognitive psychology.","Desirable difficulties",[
  ["Spaced practice",15,"spacing","spaced repetition","distributed practice"],["Retrieval practice",15,"testing effect","self testing","practice tests","flashcards"],["Mnemonics",10,"mnemonic"],
  ["Chunking",10],["Interleaving",8,"interleaved practice"],["Elaboration",6,"elaborative rehearsal"],["Dual coding",6],["Method of loci",6,"memory palace"],["Self-explanation",3,"self explanation"],
  ["Concrete examples",3,"examples"],["Desirable difficulties",.4,"bjork"]]),
];

/* ================= the mind (downwards) ================= */
const BANDS = [
  {name:"The waking mind",      zone:"The waking mind",          from:0,  to:40,  hue:45,  bg:["#1d1a2a","#1a1830"]},
  {name:"Daydreams",            zone:"Daydreams",                from:40, to:100, hue:200, bg:["#1a1830","#16213a"]},
  {name:"Memory lane",          zone:"Memory lane",              from:100,to:170, hue:30,  bg:["#16213a","#22192a"]},
  {name:"The neuron forest",    zone:"The neuron forest",        from:170,to:250, hue:180, bg:["#22192a","#0f2430"]},
  {name:"Light sleep",          zone:"Light sleep",              from:250,to:320, hue:230, bg:["#0f2430","#141838"]},
  {name:"REM dreams",           zone:"REM dreams",               from:320,to:390, hue:300, bg:["#141838","#2a1440"]},
  {name:"Nightmares",           zone:"Nightmares",               from:390,to:460, hue:0,   bg:["#2a1440","#1a0810"]},
  {name:"The subconscious",     zone:"The subconscious",         from:460,to:530, hue:270, bg:["#1a0810","#120a24"]},
  {name:"The deep unconscious", zone:"The deep unconscious",     from:530,to:600, hue:250, bg:["#120a24","#08061a"]},
  {name:"Collective unconscious", zone:"The collective unconscious", from:600,to:760, hue:50, bg:["#08061a","#020208"]},
];
const FACTS = [
  [-30,"you're awake · your thoughts are on the surface"],[14,"beta waves: alert, busy, awake"],[32,"the brain uses about 20% of the body's energy"],
  [60,"alpha waves: relaxed, eyes closed, drifting"],[90,"mind-wandering fills almost half our waking hours"],[120,"short-term memory holds about 7 ± 2 items (Miller, 1956)"],
  [155,"memories are rebuilt every time you recall them"],[195,"about 86 billion neurons, each with thousands of synapses"],[235,"neurons that fire together wire together"],
  [270,"theta waves: drowsy, drifting off"],[305,"sleep spindles help lay down memories"],[340,"REM sleep: eyes dart, the body is paralysed, dreams are vivid"],
  [375,"most people dream four to six times a night"],[415,"nightmares peak in REM sleep, late in the night"],[445,"the amygdala lights up with fear"],
  [480,"Freud: most of the mind lies below the surface, like an iceberg"],[515,"defence mechanisms keep painful thoughts out of awareness"],[550,"delta waves: deep, dreamless sleep"],
  [585,"implicit memories shape us without our knowing"],[620,"Jung: the collective unconscious, shared by all humans"],[665,"archetypes: the hero, the shadow, the wise old man"],[720,"the deepest thought of all"],
];
function wall(i, len, side){
  const r = srand(813 + i*41 + (side==="r"?23:0)), h = BANDS[i].hue; let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  switch(i){
    case 0: // the waking mind: alarm clocks, coffee and to-do notes
      rep(180, y=>{ s+=`<circle cx="44" cy="${y+40}" r="26" fill="#e8e2d0" stroke="#c0392b" stroke-width="5"/><path d="M44 ${y+40} v-16 M44 ${y+40} h12" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>`
        + `<circle cx="24" cy="${y+12}" r="9" fill="#c0392b"/><circle cx="64" cy="${y+12}" r="9" fill="#c0392b"/><path class="blink" d="M14 ${y+4} l-8 -6 M74 ${y+4} l8 -6" stroke="#ffd25a" stroke-width="3"/>`
        + `<path d="M70 ${y+96} h34 v30 q0 10 -10 10 h-14 q-10 0 -10 -10z" fill="#f4ead0"/><path d="M104 ${y+104} q10 0 10 8 q0 8 -10 8" stroke="#f4ead0" stroke-width="4" fill="none"/><path class="drift" d="M80 ${y+90} q-4 -8 0 -14 M92 ${y+90} q-4 -8 0 -14" stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none"/>`
        + `<g transform="rotate(${f1((r()-.5)*14)} 30 ${y+140})"><rect x="8" y="${y+124}" width="48" height="40" fill="#ffe58a"/><path d="M14 ${y+136} h34 M14 ${y+146} h28 M14 ${y+156} h30" stroke="#8a6a1a" stroke-width="2"/></g>`; });
      break;
    case 1: // daydreams: soft clouds and thought bubbles
      rep(90, y=>{ const x = f1(20+r()*70); s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${x}" cy="${y}" rx="${f1(26+r()*16)}" ry="16" fill="#fff" opacity=".16"/><ellipse cx="${f1(+x+18)}" cy="${y-8}" rx="18" ry="14" fill="#fff" opacity=".14"/></g>`; });
      rep(200, y=>{ s+=`<circle cx="20" cy="${y+90}" r="4" fill="#cfe8ff" opacity=".5"/><circle cx="30" cy="${y+76}" r="7" fill="#cfe8ff" opacity=".5"/><ellipse cx="66" cy="${y+44}" rx="40" ry="28" fill="#cfe8ff" opacity=".22" stroke="#cfe8ff" stroke-opacity=".6"/>`
        + `<text x="66" y="${y+52}" text-anchor="middle" font-size="22" fill="#cfe8ff" opacity=".8">${["☀","♪","✈","★","♥"][Math.floor(r()*5)]}</text>`; }, 60);
      break;
    case 2: // memory lane: photo frames on strings and filing drawers
      rep(170, y=>{ s+=`<path d="M0 ${y} q60 24 120 0" stroke="#c9a26a" stroke-width="1.5" fill="none"/>`
        + [16,64].map((x,k)=>`<g transform="rotate(${f1((r()-.5)*16)} ${x+18} ${y+30})"><rect x="${x}" y="${y+8}" width="38" height="44" fill="#f4ead0"/><rect x="${x+4}" y="${y+12}" width="30" height="28" fill="hsl(${Math.floor(r()*360)} 40% 50%)" opacity=".75"/><circle cx="${x+19}" cy="${y+22}" r="5" fill="#f4ead0" opacity=".6"/></g>`).join("")
        + `<rect x="14" y="${y+84}" width="92" height="70" fill="#5a4636"/><rect x="20" y="${y+90}" width="80" height="26" fill="#6a5444"/><rect x="20" y="${y+122}" width="80" height="26" fill="#6a5444"/><rect x="52" y="${y+100}" width="16" height="5" fill="#c9a26a"/><rect x="52" y="${y+132}" width="16" height="5" fill="#c9a26a"/>`; });
      break;
    case 3: // the neuron forest: neurons like trees, with sparks along the axons
      rep(190, y=>{ const x = f1(30+r()*60); s+=`<path d="M${x} ${y+160} V${y+60}" stroke="#5ad8c8" stroke-width="4"/>`
        + [-1,1].map(k=>`<path d="M${x} ${y+60} q${k*20} -20 ${k*34} -50 M${x} ${y+80} q${k*26} -6 ${k*44} -24" stroke="#5ad8c8" stroke-width="2.5" fill="none"/>`).join("")
        + `<circle cx="${x}" cy="${y+60}" r="12" fill="#2a8a8a" stroke="#9ff5e8" stroke-width="2"/><circle class="blink" style="animation-delay:-${f1(r()*2)}s" cx="${x}" cy="${y+120}" r="4" fill="#fff8a0"/>`
        + `<path d="M${x} ${y+160} q-14 10 -30 12 M${x} ${y+160} q14 10 30 12" stroke="#5ad8c8" stroke-width="2" fill="none"/>`; });
      break;
    case 4: // light sleep: sheep jumping a fence, and Zzz
      rep(170, y=>{ s+=`<path d="M8 ${y+110} h104 M14 ${y+90} v28 M106 ${y+90} v28 M8 ${y+98} h104" stroke="#8a7a5a" stroke-width="4"/>`
        + `<g class="fl" style="animation-delay:-${f1(r()*3)}s"><ellipse cx="60" cy="${y+70}" rx="20" ry="13" fill="#f4f4f4"/><circle cx="80" cy="${y+64}" r="7" fill="#3a3a3a"/><path d="M48 ${y+80} l-4 10 M70 ${y+80} l4 10" stroke="#3a3a3a" stroke-width="3"/></g>`
        + `<text x="${f1(10+r()*30)}" y="${y+30}" font-size="18" font-weight="700" fill="#9fb4ff" opacity=".7" font-family="Chakra Petch,sans-serif" class="drift">Z z z</text>`; });
      break;
    case 5: // REM dreams: melting clocks, floating stairs and an eye moon
      rep(200, y=>{ s+=`<path d="M10 ${y+40} q30 -10 54 0 q10 4 10 20 q-2 30 -12 40 q-4 -20 -14 -24 q-24 -6 -38 -36z" fill="#e8d8a0" stroke="#8a6a2a" stroke-width="2"/><path d="M36 ${y+46} v14 h10" stroke="#3a2a10" stroke-width="2" fill="none"/>`
        + [0,1,2,3].map(k=>`<rect x="${70+k*8}" y="${y+150-k*14}" width="26" height="8" fill="#c9a3ff" opacity=".6"/>`).join("")
        + `<circle cx="90" cy="${y+40}" r="16" fill="#fff" opacity=".85"/><circle class="av-blink" cx="90" cy="${y+40}" r="7" fill="#7a3ab0"/>`; });
      break;
    case 6: // nightmares: shadows with glowing eyes and dripping spiders
      rep(150, y=>{ s+=`<path d="M10 ${y+150} q8 -100 50 -110 q42 10 50 110 q-10 -10 -16 0 q-8 -12 -16 0 q-8 -12 -18 0 q-8 -12 -16 0 q-8 -12 -16 0 q-8 -10 -18 0z" fill="#0a0004" opacity=".85"/>`
        + `<g class="blink" style="animation-delay:-${f1(r()*3)}s"><ellipse cx="46" cy="${y+80}" rx="6" ry="4" fill="#ff2a2a"/><ellipse cx="74" cy="${y+80}" rx="6" ry="4" fill="#ff2a2a"/></g>`; });
      rep(230, y=>{ const x = f1(20+r()*80); s+=`<path d="M${x} 0 V${y}" stroke="#ddd" stroke-opacity=".25"/><g class="fl"><circle cx="${x}" cy="${y+6}" r="7" fill="#1a0a10"/>`
        + [-1,1].map(k=>[0,1,2].map(j=>`<path d="M${x} ${y+6} q${k*8} ${-4+j*4} ${k*14} ${2+j*5}" stroke="#1a0a10" stroke-width="2" fill="none"/>`).join("")).join("") + `</g>`; }, 60);
      break;
    case 7: // the subconscious: locked doors and floating keys
      rep(190, y=>{ s+=`<rect x="24" y="${y}" width="66" height="120" rx="6" fill="#3a2a50" stroke="#7a5ab0" stroke-width="3"/><circle cx="78" cy="${y+64}" r="4" fill="#ffd25a"/>`
        + `<rect x="68" y="${y+70}" width="20" height="16" rx="3" fill="#c9a26a"/><path d="M72 ${y+70} v-6 q6 -8 12 0 v6" stroke="#c9a26a" stroke-width="3" fill="none"/>`
        + `<g class="drift" style="animation-delay:-${f1(r()*4)}s"><circle cx="${f1(20+r()*70)}" cy="${y+160}" r="6" fill="none" stroke="#ffd25a" stroke-width="2.5"/><path d="M${f1(26+r()*70)} ${y+160} h18 m-6 0 v6 m-6 -6 v4" stroke="#ffd25a" stroke-width="2.5"/></g>`; });
      break;
    case 8: // the deep unconscious: spirals and a labyrinth
      rep(150, y=>{ let d = `M60 ${y+60}`; for (let a=0; a<18; a+=.5){ const rr = 3 + a*2.6; d += ` L${f1(60+Math.cos(a)*rr)} ${f1(y+60+Math.sin(a)*rr)}`; }
        s+=`<g class="vspin" style="transform-origin:60px ${y+60}px;animation-duration:${f1(14+r()*10)}s"><path d="${d}" stroke="hsl(${h} 60% 70%)" stroke-opacity=".55" stroke-width="2" fill="none"/></g>`; });
      break;
    case 9: // the collective unconscious: stars, archetype symbols and an all-seeing eye
      rep(30, y=>{ s+=`<circle cx="${f1(r()*120)}" cy="${f1(y+r()*30)}" r="${f1(.8+r()*1.6)}" fill="#fff6c8" class="${r()<.35?"blink":""}"/>`; });
      rep(160, y=>{ s+=`<text x="${f1(20+r()*80)}" y="${y+40}" font-size="${f1(24+r()*14)}" fill="#ffd25a" opacity="${f1(.3+r()*.4)}" class="drift">${["☾","☉","✦","☯","⚚","∞"][Math.floor(r()*6)]}</text>`; }, 60);
      rep(420, y=>{ s+=`<path d="M10 ${y+60} q50 -44 100 0 q-50 44 -100 0z" fill="none" stroke="#ffd25a" stroke-width="2" opacity=".6"/><circle cx="60" cy="${y+60}" r="14" fill="#ffd25a" opacity=".5"/><circle class="av-blink" cx="60" cy="${y+60}" r="6" fill="#1a0a20"/>`; }, 120);
      break;
  }
  return vwall(s, len, side);
}
/* the brain: wakes up, sprouts sparks, and glows */
function avatar(level, hue){
  const glow = level >= 8, pink = glow ? "#ffe3f8" : "#ff9ec4", fold = glow ? "#ff6ad5" : "#c9587a";
  const s = `<g class="av-rock">
    ${level >= 3 ? [0,1,2,3,4].slice(0, Math.min(5, level - 2)).map(k=>{ const a = -2.6 + k*.55; return `<path class="blink" style="animation-delay:-${k*.3}s" d="M${f1(Math.cos(a)*24)} ${f1(Math.sin(a)*22-2)} l${f1(Math.cos(a)*7)} ${f1(Math.sin(a)*7)}" stroke="hsl(${hue} 95% 70%)" stroke-width="2.4" stroke-linecap="round"/>`; }).join("") : ""}
    <path d="M-22 4 q-6 -18 6 -26 q6 -10 18 -6 q8 -6 16 0 q14 -2 16 12 q10 8 2 22 q2 12 -12 14 q-8 8 -20 2 q-12 6 -20 -2 q-12 -2 -6 -16z" fill="${pink}" stroke="${fold}" stroke-width="2"/>
    <path d="M0 -26 q-4 10 2 18 q-6 10 0 22 M-14 -16 q6 4 4 12 M14 -14 q-6 6 0 12 M-18 8 q8 -2 10 6 M18 6 q-8 0 -8 8" stroke="${fold}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="-8" cy="2" r="4.6" fill="#fff"/><circle cx="8" cy="2" r="4.6" fill="#fff"/><g class="av-blink"><circle cx="-7.4" cy="2.6" r="2.3" fill="#2a0a1a"/><circle cx="8.6" cy="2.6" r="2.3" fill="#2a0a1a"/></g>
    <path d="M-5 12 q5 4 10 0" stroke="#2a0a1a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${level >= 5 && level < 8 ? `<path d="M10 -26 q10 -10 22 -6 l-6 8 q8 4 4 12 q-10 -10 -20 -14z" fill="hsl(${hue} 60% 55%)"/><circle cx="31" cy="-4" r="3" fill="#fff"/>` : ""}
    ${glow ? `<circle r="34" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="3 5" class="vspin" style="animation-duration:12s"/>` : ""}
    <path d="M-2 32 q2 6 -2 10" stroke="${fold}" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<circle cx="100" cy="50" r="40" fill="${c}" opacity=".2"/><path d="M84 66 q-16 -14 -10 -32 q8 -20 26 -20 q18 0 26 20 q6 18 -10 32 v10 h-32z" fill="#fff6c8" stroke="${c}" stroke-width="3"/><rect x="86" y="78" width="28" height="10" rx="3" fill="${c}"/>`
    + [0,1,2,3,4,5].map(k=>{ const a = -2.8 + k*.56; return `<path class="blink" style="animation-delay:${k*.2}s" d="M${f1(100+Math.cos(a)*46)} ${f1(46+Math.sin(a)*46)} l${f1(Math.cos(a)*12)} ${f1(Math.sin(a)*12)}" stroke="#fff2a8" stroke-width="3" stroke-linecap="round"/>`; }).join(""));
  if (t === "rootkit") return W(170,100,`<path d="M20 50 q65 -50 130 0 q-65 50 -130 0z" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="85" cy="50" r="20" fill="${c}"/><circle cx="85" cy="50" r="9" fill="#1a0a20"/><circle cx="80" cy="44" r="4" fill="#fff"/>`);
  if (t === "trojan") return W(170,100,`<ellipse cx="96" cy="40" rx="56" ry="30" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="46" cy="80" r="7" fill="#fff" stroke="${c}" stroke-width="2"/><circle cx="30" cy="92" r="4" fill="#fff" stroke="${c}" stroke-width="2"/><text x="96" y="54" text-anchor="middle" font-size="38" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">!</text>`);
  if (t === "adware") return W(170,100,`<ellipse cx="96" cy="40" rx="50" ry="28" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="50" cy="80" r="6" fill="#fff" stroke="${c}" stroke-width="2"/><text x="96" y="54" text-anchor="middle" font-size="36" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">?</text>`);
  if (t === "spam") return W(170,90,`<text x="60" y="60" font-size="34" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">Z</text><text x="92" y="44" font-size="24" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">z</text><text x="114" y="30" font-size="16" font-weight="700" fill="${c}" font-family="Chakra Petch,sans-serif">z</text>`);
  if (t === "blocked") return W(170,100,`<rect x="55" y="10" width="60" height="84" rx="5" fill="#3a2a50" stroke="#7a5ab0" stroke-width="3"/><rect x="72" y="46" width="26" height="22" rx="3" fill="#c9a26a"/><path d="M77 46 v-8 q8 -12 16 0 v8" stroke="#c9a26a" stroke-width="4" fill="none"/>`);
  return null;
}
const hz = p => 40 * Math.pow(10, -p*3/700);
const fhz = v => v >= 10 ? Math.round(v) + " Hz" : v >= 1 ? v.toFixed(1) + " Hz" : v >= .1 ? v.toFixed(2) + " Hz" : v.toFixed(3) + " Hz";
const wave = v => v >= 30 ? "gamma" : v >= 13 ? "beta" : v >= 8 ? "alpha" : v >= 4 ? "theta" : v >= .5 ? "delta" : "infra-slow";
registerSubject({
  key:"psych", name:"Psychology", theme:"A thought sinking from the waking mind to the collective unconscious", gemWord:"Dream", gemTitle:"One in a Dream", emoji:"🧠",
  blurb:"You're a thought at the surface of a waking mind. Each prompt has many correct answers. <b>Obvious answers stay on the surface. Answers other players missed sink you deeper</b>, past daydreams, memory lane and the neuron forest, through sleep, dreams and nightmares, into the subconscious and the collective unconscious.",
  axis:"down", arrow:"▼", noLevel:"SL and HL",
  tiers:{gem:"One in a Dream", rootkit:"Epiphany", trojan:"Insight", adware:"Hunch", spam:"Autopilot"}, blocked:"Repressed", fw:"REPRESSION",
  notes:{rootkit:"A deep, rare thought. Very few minds reach it.", trojan:"Below the obvious. A real insight.", adware:"A familiar thought, but not the first one people have.", spam:"The thought everyone has first."},
  ladder:{gem:"A thought almost no one else has", rootkit:"A rare, deep answer", trojan:"A strong answer most people don't reach for", adware:"Correct, but familiar", spam:"The answer everyone gives first", blocked:"Not an accepted answer"},
  verbs:{cta:"Sink ▼", inject:"Think", hint:"▼ rarer answers sink deeper into the mind ▼", count:"reading your mind"},
  shout:t => ({gem:"EUREKA!", rootkit:"AHA!", blocked:"REPRESSED!"})[t],
  particles:["z","?","!","∿"], particleColor:"#c9a3ff",
  meter:{label:"BRAINWAVES", fmt:p=>fhz(hz(p)), zone:p=>`${fhz(hz(p))} <span style="text-transform:none">${wave(hz(p))}</span>`, tick:p=>fhz(hz(p)), gain:(a,b)=>`slow to ${fhz(hz(b))}`},
  start:{bg:"linear-gradient(180deg,#0c0a14,#1d1a2a)", label:'Start · 40 Hz <span style="text-transform:none">gamma</span>', zone:"Wide awake", color:"#ffd25a"},
  endBg:"#020208",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Deeper still",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
