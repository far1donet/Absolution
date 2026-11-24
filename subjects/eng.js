/* English A: Language and Literature (SL and HL). A pencil writes its way down an IB English notebook:
   rarer answers write more, from the blank page through drafts, essays, poems and scripts to the printed book,
   the library and the dictionary. One in a Dictionary turns the pencil into a quill that writes whole pages. */
(function(){
const CATALOG = [
  {label:"Area of exploration · Readers, writers and texts", units:[
    {code:"R", name:"How texts work", topics:[["R.1","Literary and rhetorical devices"],["R.2","Narrative voice and structure"],["R.3","Poetry: form, metre and sound"],["R.4","Drama and performance"]]},
  ]},
  {label:"Area of exploration · Time and space", units:[
    {code:"T", name:"Texts in context", topics:[["T.1","Context, culture and critical lenses"],["T.2","Literary movements and periods"],["T.3","Global issues"]]},
  ]},
  {label:"Area of exploration · Intertextuality: connecting texts", units:[
    {code:"I", name:"Connecting texts", topics:[["I.1","Genre and conventions"],["I.2","Archetypes, allusion and adaptation"]]},
  ]},
  {label:"Language: non-literary texts", units:[
    {code:"L", name:"Non-literary texts", topics:[["L.1","Text types and their conventions"],["L.2","Rhetoric and persuasion"],["L.3","Visual and multimodal texts"],["L.4","Language, power and representation"]]},
  ]},
  {label:"Literature: works and writers", units:[
    {code:"W", name:"Works and writers", topics:[["W.1","Shakespeare"],["W.2","Novels and novelists"],["W.3","Poets and poems"],["W.4","World literature and works in translation"]]},
  ]},
  {label:"The course", units:[
    {code:"C", name:"Concepts and assessment", topics:[["C.1","The seven key concepts"],["C.2","Assessment and the works you study"]]},
  ]},
];

const PROMPTS = [
/* ---------- R.1 Devices ---------- */
P("e01","R.1","Name a literary or rhetorical device.","Hendiadys",[
  ["Metaphor",25],["Simile",20],["Personification",12],["Alliteration",10],["Imagery",8],["Hyperbole",6,"exaggeration"],["Onomatopoeia",5],["Irony",5],["Symbolism",5,"symbol"],["Oxymoron",4],
  ["Foreshadowing",4],["Repetition",4],["Rhetorical question",3],["Juxtaposition",3],["Enjambment",2,"enjambement"],["Assonance",2],["Anaphora",2],["Allusion",2],["Pathetic fallacy",2],["Paradox",1],
  ["Euphemism",1],["Sibilance",1],["Motif",1],["Caesura",1],["Tricolon",1,"rule of three"],["Antithesis",1],["Consonance",1],["Litotes",.8],["Synecdoche",.8],["Metonymy",.8],["Chiasmus",.6],
  ["Apostrophe",.6],["Zeugma",.5],["Polysyndeton",.5],["Asyndeton",.5],["Hendiadys",.4]]),
P("e02","R.1","Name a type of irony.","Romantic irony",[
  ["Dramatic irony",35,"dramatic"],["Situational irony",30,"situational"],["Verbal irony",25,"verbal"],["Sarcasm",6],["Tragic irony",2,"tragic"],["Cosmic irony",2,"irony of fate","cosmic"],["Socratic irony",1,"socratic"],
  ["Structural irony",.6,"structural"],["Romantic irony",.4,"romantic"]]),
P("e03","R.1","Name a sound device used in poetry or prose.","Cacophony",[
  ["Alliteration",30],["Onomatopoeia",20],["Rhyme",15],["Assonance",10],["Sibilance",8],["Consonance",6],["Rhythm",4],["Plosives",3,"plosive","plosive alliteration"],["Internal rhyme",2],
  ["Half rhyme",2,"slant rhyme","near rhyme","pararhyme","off rhyme"],["Metre",2,"meter"],["Fricatives",1,"fricative"],["Euphony",1],["Cacophony",.4]]),
/* ---------- R.2 Narrative ---------- */
P("e04","R.2","Name a type of narrator or narrative point of view.","First-person plural",[
  ["First person",30,"first person narrator","1st person"],["Third-person omniscient",20,"omniscient","third person omniscient"],["Third-person limited",15,"limited","third person limited","close third"],
  ["Unreliable narrator",10,"unreliable"],["Second person",8,"2nd person"],["Third person",6,"3rd person"],["Stream of consciousness",3],["Multiple narrators",3,"polyphonic","multiple perspectives"],
  ["Free indirect discourse",2,"free indirect style","free indirect speech"],["Frame narrator",1.5],["Naive narrator",1,"naïve narrator","child narrator"],["Objective narrator",1,"dramatic narrator","camera eye"],
  ["Epistolary",1,"letters"],["First-person plural",.4,"first person plural","we narrator","collective narrator"]]),
P("e05","R.2","Name a narrative structure or technique.","Mise en abyme",[
  ["Flashback",25],["Foreshadowing",18],["Cliffhanger",10],["In medias res",8],["Linear narrative",6,"chronological","linear"],["Frame narrative",5,"frame story","story within a story"],["Non-linear narrative",5,"non linear","nonlinear"],
  ["Flash-forward",3,"flash forward"],["Cyclical structure",3,"circular narrative","cyclical"],["Multiple perspectives",3],["Epistolary",2],["Stream of consciousness",2],["Red herring",1],["Chekhov's gun",1,"chekhovs gun"],
  ["Analepsis",.8],["Prolepsis",.6],["Deus ex machina",.6],["Mise en abyme",.4,"mise en abime"]]),
P("e06","R.2","Name a stage of Freytag's pyramid (dramatic structure).","Catastrophe",[
  ["Climax",35],["Exposition",20],["Rising action",18],["Falling action",12],["Resolution",8],["Denouement",4,"dénouement"],["Inciting incident",3],["Catastrophe",.4]]),
/* ---------- R.3 Poetry ---------- */
P("e07","R.3","Name a poetic form.","Triolet",[
  ["Sonnet",25],["Haiku",20],["Limerick",10],["Free verse",8],["Ballad",6],["Ode",6],["Elegy",4],["Epic",4],["Villanelle",3],["Acrostic",3],["Blank verse",2],["Sestina",1],["Ghazal",1],["Tanka",1],
  ["Cinquain",1],["Concrete poetry",1,"shape poem","concrete poem"],["Prose poem",1],["Dramatic monologue",1],["Pantoum",.6],["Rondeau",.5],["Terza rima",.5],["Triolet",.4]]),
P("e08","R.3","Name a type of metrical foot.","Choriamb",[
  ["Iamb",40,"iambic"],["Trochee",20,"trochaic"],["Spondee",10,"spondaic"],["Dactyl",10,"dactylic"],["Anapest",10,"anapaest","anapestic"],["Pyrrhic",3],["Amphibrach",2],["Cretic",.5,"amphimacer"],["Choriamb",.4]]),
P("e09","R.3","Name a type of stanza.","Sapphic stanza",[
  ["Couplet",25],["Quatrain",25],["Tercet",12,"triplet"],["Sestet",10],["Octave",10,"octet"],["Cinquain",5,"quintain","quintet"],["Septet",3],["Heroic couplet",2],["Spenserian stanza",1],["Rhyme royal",1],
  ["Ottava rima",.8],["Terza rima",.8],["Sapphic stanza",.4,"sapphic"]]),
/* ---------- R.4 Drama ---------- */
P("e10","R.4","Name a feature or convention of drama.","Stichomythia",[
  ["Dialogue",20],["Stage directions",18],["Soliloquy",12],["Monologue",8],["Aside",8],["Dramatic irony",6],["Acts and scenes",5,"act","scene","acts"],["Chorus",4],["Lighting",3],["Set",3,"set design","scenery"],
  ["Props",3],["Costume",3],["Catharsis",2],["Breaking the fourth wall",2,"fourth wall"],["Tragic hero",2],["Hamartia",2],["Entrances and exits",1,"exeunt","exit"],["Blocking",1],["Proxemics",.6],["Stichomythia",.4]]),
P("e11","R.4","Name an element of tragedy as described by Aristotle.","Melos (song)",[
  ["Hamartia",25,"tragic flaw","fatal flaw"],["Catharsis",20],["Tragic hero",15],["Hubris",12],["Peripeteia",8,"reversal","reversal of fortune"],["Anagnorisis",6,"recognition"],["Nemesis",4],["Pity and fear",3,"pity","fear"],
  ["Mimesis",2,"imitation"],["Plot (mythos)",2,"plot","mythos"],["Character (ethos)",1.5,"character"],["Spectacle (opsis)",1,"spectacle","opsis"],["Diction (lexis)",.8,"diction","lexis"],["Thought (dianoia)",.6,"thought","dianoia"],["Melos (song)",.4,"melos","song","melody"]]),
P("e12","R.4","Name a playwright other than Shakespeare.","Aphra Behn",[
  ["Arthur Miller",15,"miller"],["Tennessee Williams",12,"williams"],["Henrik Ibsen",8,"ibsen"],["Samuel Beckett",8,"beckett"],["Oscar Wilde",8,"wilde"],["Anton Chekhov",6,"chekhov"],["Christopher Marlowe",5,"marlowe"],
  ["J. B. Priestley",5,"priestley","jb priestley"],["Sophocles",4],["Bertolt Brecht",4,"brecht"],["George Bernard Shaw",4,"shaw","bernard shaw"],["Harold Pinter",3,"pinter"],["Lorraine Hansberry",3,"hansberry"],["Euripides",2],
  ["August Wilson",2],["Caryl Churchill",2,"churchill"],["Federico García Lorca",2,"lorca","garcia lorca"],["Molière",2,"moliere"],["Tom Stoppard",2,"stoppard"],["Edward Albee",2,"albee"],["Eugene O'Neill",2,"oneill","eugene oneill"],
  ["Lin-Manuel Miranda",2,"lin manuel miranda"],["Ben Jonson",1],["Wole Soyinka",1,"soyinka"],["Sarah Kane",1],["Aeschylus",1],["Aphra Behn",.4,"behn"]],
  [[["shakespeare","william shakespeare"],"Anyone but Shakespeare!"]]),
/* ---------- T.1 Context and lenses ---------- */
P("e13","T.1","Name a kind of context that can shape how a text is written or read.","Paratextual",[
  ["Historical",25,"history","historical context"],["Social",20,"society","social context"],["Cultural",18,"culture","cultural context"],["Political",12,"politics","political context"],["Biographical",6,"the author's life","authors life","author"],
  ["Economic",5],["Religious",5,"religion"],["Literary",3,"literary context"],["Context of production",1.2,"production"],["Context of reception",1.2,"reception","reader's context"],["Geographical",2],["Gender",2],
  ["Philosophical",2],["Linguistic",1],["Intertextual",.6],["Paratextual",.4,"paratext"]]),
P("e14","T.1","Name a literary theory or critical lens.","Disability studies",[
  ["Feminist",25,"feminism","feminist lens"],["Marxist",20,"marxism","marxist lens"],["Postcolonial",12,"post colonial","postcolonialism"],["Psychoanalytic",10,"freudian","psychoanalysis"],["Reader-response",5,"reader response"],
  ["New Historicism",6,"historicism","historicist"],["Structuralism",4,"structuralist"],["Formalism",3,"new criticism","formalist"],["Queer theory",3,"queer"],["Deconstruction",3],["Ecocriticism",2,"ecocritical"],
  ["Archetypal criticism",2,"archetypal","jungian"],["Post-structuralism",1,"poststructuralism"],["Critical race theory",1],["Semiotics",1],["Biographical criticism",1],["Disability studies",.4,"disability"]]),
P("e15","T.1","Name a postcolonial writer.","Ama Ata Aidoo",[
  ["Chinua Achebe",25,"achebe"],["Chimamanda Ngozi Adichie",15,"adichie","chimamanda adichie"],["Salman Rushdie",10,"rushdie"],["Arundhati Roy",8,"roy"],["Ngũgĩ wa Thiong'o",6,"ngugi","ngugi wa thiongo"],
  ["Jean Rhys",3,"rhys"],["V. S. Naipaul",3,"naipaul"],["Mohsin Hamid",2,"hamid"],["Jhumpa Lahiri",2,"lahiri"],["Derek Walcott",2,"walcott"],["Jamaica Kincaid",2,"kincaid"],["Tsitsi Dangarembga",2,"dangarembga"],
  ["J. M. Coetzee",2,"coetzee"],["Wole Soyinka",2,"soyinka"],["Zadie Smith",2],["Edward Said",2,"said"],["Kiran Desai",1],["Michael Ondaatje",1,"ondaatje"],["Buchi Emecheta",1,"emecheta"],["Tayeb Salih",1,"salih"],
  ["Frantz Fanon",1,"fanon"],["Gayatri Spivak",1,"spivak"],["Abdulrazak Gurnah",1,"gurnah"],["Ama Ata Aidoo",.4,"aidoo"]]),
/* ---------- T.2 Movements ---------- */
P("e16","T.2","Name a literary movement or period.","Sturm und Drang",[
  ["Romanticism",25,"romantic","romantics"],["Modernism",18,"modernist"],["Renaissance",10],["Victorian",8,"victorian era"],["Postmodernism",8,"postmodern"],["Gothic",6],["Realism",6],["Enlightenment",3],
  ["Harlem Renaissance",3],["Beat Generation",2,"beats","beat"],["Naturalism",2],["Transcendentalism",2],["Surrealism",2],["Magical realism",2,"magic realism"],["Symbolism",1],["Metaphysical poets",1,"metaphysical"],
  ["Restoration",1],["Augustan",1,"neoclassicism","neoclassical"],["Imagism",1],["Existentialism",1],["Theatre of the Absurd",1,"absurdism","absurd"],["Négritude",.6,"negritude"],["Dada",.6,"dadaism"],
  ["Pre-Raphaelites",.5,"pre raphaelite"],["Sturm und Drang",.4]]),
P("e17","T.2","Name a Romantic poet.","Charlotte Smith",[
  ["William Wordsworth",25,"wordsworth"],["John Keats",15,"keats"],["Lord Byron",15,"byron","george gordon byron"],["Percy Bysshe Shelley",15,"shelley","percy shelley"],["Samuel Taylor Coleridge",12,"coleridge"],
  ["William Blake",10,"blake"],["Robert Burns",3,"burns"],["Walter Scott",1,"sir walter scott"],["John Clare",1,"clare"],["Felicia Hemans",.6,"hemans"],["Charlotte Smith",.4]],
  [[["mary shelley"],"Mary Shelley wrote Frankenstein: a Romantic novelist, not one of the Romantic poets."]]),
P("e18","T.2","Name a modernist writer.","Mina Loy",[
  ["Virginia Woolf",25,"woolf"],["James Joyce",22,"joyce"],["T. S. Eliot",15,"ts eliot","eliot"],["Ernest Hemingway",8,"hemingway"],["F. Scott Fitzgerald",6,"fitzgerald","scott fitzgerald"],["William Faulkner",6,"faulkner"],
  ["Franz Kafka",6,"kafka"],["Ezra Pound",4,"pound"],["Gertrude Stein",2,"stein"],["Marcel Proust",2,"proust"],["Katherine Mansfield",2,"mansfield"],["D. H. Lawrence",2,"dh lawrence","lawrence"],["Joseph Conrad",2,"conrad"],
  ["Samuel Beckett",2,"beckett"],["E. M. Forster",1,"forster"],["W. B. Yeats",1,"yeats"],["Jean Rhys",1,"rhys"],["Djuna Barnes",.6,"barnes"],["Mina Loy",.4,"loy"]]),
/* ---------- T.3 Global issues ---------- */
P("e19","T.3","Name one of the five fields of inquiry for global issues in the Individual Oral.","Art, creativity and the imagination",[
  ["Culture, identity and community",30,"culture","identity","community"],["Politics, power and justice",30,"politics","power","justice"],["Beliefs, values and education",15,"beliefs","values","education"],
  ["Science, technology and the environment",15,"science","technology","environment"],["Art, creativity and the imagination",.4,"art","creativity","imagination"]]),
P("e20","T.3","Name a global issue that literature often explores.","Linguistic imperialism",[
  ["Gender inequality",15,"sexism","gender","patriarchy"],["Racism",15,"race","racial injustice"],["Climate change",10,"environment","global warming"],["War",10,"conflict"],["Poverty",8],["Identity",6],["Immigration",6,"migration"],
  ["Corruption",5,"abuse of power","power and corruption"],["Colonialism",5,"imperialism"],["Mental health",4],["Social class",4,"class","inequality"],["Censorship",3],["Discrimination",3],["Human rights",3],["Surveillance",2],
  ["Technology",2],["Education",2],["Religion",2],["LGBTQ+ rights",2,"lgbtq","lgbt","homophobia"],["Totalitarianism",2,"dictatorship"],["Refugees",2,"displacement"],["Genocide",1],["Consumerism",1],["Linguistic imperialism",.4,"language death","language loss"]]),
/* ---------- I.1 Genre ---------- */
P("e21","I.1","Name a literary genre.","Künstlerroman",[
  ["Tragedy",15],["Comedy",12],["Poetry",10],["Fantasy",10],["Science fiction",10,"sci fi","scifi"],["Romance",8],["Mystery",6,"crime","detective fiction"],["Horror",6],["Dystopian",6,"dystopia"],["Gothic",4],["Satire",4],
  ["Historical fiction",4],["Thriller",3],["Bildungsroman",2,"coming of age"],["Memoir",2,"autobiography"],["Epic",2],["Fable",2],["Allegory",1],["Tragicomedy",1],["Magical realism",1,"magic realism"],["Picaresque",.6],
  ["Pastoral",.6],["Epistolary novel",.5,"epistolary"],["Künstlerroman",.4,"kunstlerroman"]]),
P("e22","I.1","Name a convention of the Gothic genre.","A found manuscript",[
  ["Haunted castle",15,"castle","mansion","haunted house","old house"],["Ghosts",12,"supernatural","ghost"],["Darkness",8,"night"],["Madness",8,"insanity"],["Damsel in distress",6],["Villain",6,"tyrant"],["Death",5],
  ["Mystery",5],["Isolation",4],["Doppelgänger",4,"doppelganger","double"],["Storms",3,"pathetic fallacy","bad weather"],["Secrets",3],["Curses",2,"curse"],["The sublime",2,"sublime"],["Monsters",2,"monster"],
  ["The uncanny",2,"uncanny"],["Decay",2,"ruins"],["Graveyards",2,"graveyard","cemetery"],["Secret passages",1],["Live burial",1,"buried alive"],["A found manuscript",.4,"found manuscript","found document","manuscript"]]),
P("e23","I.1","Name a typical feature of a dystopian text.","Rewritten history",[
  ["Totalitarian government",18,"oppressive government","dictatorship","authoritarian","totalitarianism"],["Surveillance",15],["Propaganda",12],["Loss of individuality",8,"conformity"],["Rebellion",8,"resistance"],
  ["Censorship",6],["Fear",4],["Class division",4,"social hierarchy","caste system"],["Restricted freedom",4,"loss of freedom"],["Technology",4],["Control of language",3,"newspeak"],["Environmental destruction",3],
  ["Dehumanisation",3,"dehumanization"],["Illusion of a perfect society",3,"illusion of utopia","false utopia"],["A protagonist who questions the system",2,"protagonist questions"],["Scapegoats",1,"scapegoat"],["Rewritten history",.4,"rewriting history","erased history","altered history"]]),
/* ---------- I.2 Archetypes, allusion, adaptation ---------- */
P("e24","I.2","Name a character archetype.","Pícaro",[
  ["Hero",25],["Villain",12],["Mentor",10,"wise old man"],["Trickster",8],["Anti-hero",6,"antihero"],["Damsel in distress",5],["Everyman",4],["Femme fatale",3],["Scapegoat",3],["Outcast",3],["Sidekick",3],
  ["Rebel",2],["Lover",2],["Innocent",2],["Shadow",2],["Mother figure",2,"earth mother"],["Fool",2,"jester"],["Byronic hero",1],["Herald",1],["Threshold guardian",1],["Shapeshifter",1],["Star-crossed lovers",1],
  ["Ingénue",.6,"ingenue"],["Pícaro",.4,"picaro"]]),
P("e25","I.2","Name a source of allusions often found in English literature.","The Book of Common Prayer",[
  ["The Bible",35,"bible","biblical","christianity"],["Greek mythology",25,"greek myths","mythology","classical mythology","myth"],["Shakespeare",12],["Fairy tales",5,"fairytales"],["Roman mythology",4],["Norse mythology",2],
  ["Arthurian legend",2,"king arthur"],["Homer",2,"the odyssey","the iliad"],["Dante",2,"the divine comedy"],["History",2],["Milton",1,"paradise lost"],["Aesop's fables",1,"aesop"],["Ovid",1,"metamorphoses"],
  ["The Quran",1,"quran","koran"],["One Thousand and One Nights",.8,"arabian nights"],["The Book of Common Prayer",.4,"book of common prayer"]]),
P("e26","I.2","Name a work that rewrites, adapts or answers another text.","March",[
  ["West Side Story",10],["Wide Sargasso Sea",10],["The Lion King",6],["Clueless",6],["10 Things I Hate About You",6,"ten things i hate about you"],["Rosencrantz and Guildenstern Are Dead",6,"rosencrantz and guildenstern"],
  ["The Song of Achilles",4],["Circe",4],["Ulysses",4],["Wicked",3],["The Penelopiad",3],["Romeo + Juliet (1996 film)",2,"romeo juliet film","romeo and juliet 1996"],["She's the Man",2,"shes the man"],["The Hours",2],["Grendel",2],
  ["Hag-Seed",2,"hag seed"],["Bridget Jones's Diary",2,"bridget jones"],["O Brother, Where Art Thou?",2,"o brother where art thou"],["Pride and Prejudice and Zombies",2],["Foe",1],["Death Comes to Pemberley",1],
  ["A Thousand Acres",1],["Demon Copperhead",1],["March",.4]]),
/* ---------- L.1 Text types ---------- */
P("e27","L.1","Name a non-literary text type that could appear in Paper 1.","Obituary",[
  ["Advertisement",20,"ad","advert"],["Speech",10],["Blog",8,"blog post"],["News article",8,"newspaper article","article"],["Opinion column",6,"editorial","op ed","column"],["Infographic",6],["Cartoon",6,"comic","comic strip"],
  ["Interview",4],["Letter",4,"open letter"],["Brochure",4,"leaflet"],["Poster",4],["Website",4,"web page"],["Social media post",3,"tweet","instagram post"],["Photograph",3],["Diary",3,"journal"],["Memoir",2],["Biography",2],
  ["Travel writing",2],["Review",2,"film review","book review"],["Manifesto",1],["Podcast transcript",1,"podcast"],["Pamphlet",1],["Encyclopedia entry",1],["Recipe",1],["Instructions",1],["Petition",.5],["Obituary",.4]]),
P("e28","L.1","Name a convention of a newspaper article.","Nut graf",[
  ["Headline",30],["Byline",10],["Lead paragraph",8,"lede","lead","opening paragraph"],["Quotations",8,"quotes","quotation"],["Photograph",6,"photo","image"],["Caption",6],["Subheading",5,"subheadings"],["Columns",4],
  ["Facts and statistics",3,"facts","statistics"],["Inverted pyramid",3],["The five Ws",2,"5 ws","who what where when why"],["Third person",2],["Masthead",1],["Dateline",1],["Pull quote",1],["Standfirst",.6,"strapline","kicker"],["Nut graf",.4,"nut graph"]]),
P("e29","L.1","Name a convention or technique of a speech.","Hypophora",[
  ["Rhetorical questions",20,"rhetorical question"],["Direct address",15,"second person","addressing the audience"],["Repetition",12],["Tricolon",8,"rule of three","triad","list of three"],["Anecdote",6,"personal story"],
  ["Inclusive pronouns",6,"inclusive language","we","collective pronouns"],["Emotive language",6,"emotional language"],["Call to action",5],["Anaphora",3],["Statistics",3],["Ethos, pathos and logos",2,"ethos","pathos","logos"],
  ["Hyperbole",2],["Humour",2,"humor","jokes"],["Greeting",2,"salutation"],["Pauses",1],["Antithesis",1],["Alliteration",1],["Epistrophe",.5],["Hypophora",.4]]),
/* ---------- L.2 Rhetoric ---------- */
P("e30","L.2","Name one of the rhetorical appeals (modes of persuasion).","Kairos",[
  ["Pathos",40,"emotion","appeal to emotion"],["Logos",30,"logic","appeal to logic"],["Ethos",28,"credibility","appeal to credibility"],["Kairos",.4,"timeliness"]]),
P("e31","L.2","Name a persuasive technique used in advertising.","Anchoring",[
  ["Bandwagon",15],["Celebrity endorsement",12,"celebrity","endorsement"],["Emotional appeal",10,"pathos","emotive language"],["Slogan",8,"tagline"],["Repetition",6],["Humour",5,"humor"],["Scarcity",4,"limited time offer","fomo","fear of missing out"],
  ["Testimonials",4,"testimonial"],["Statistics",4,"facts and figures"],["Imperatives",4,"commands","imperative"],["Fear",3,"fear appeal"],["Rhetorical questions",3],["Plain folks",2],["Glittering generalities",2],["Snob appeal",2],
  ["Jingle",2],["Hyperbole",2,"exaggeration"],["Transfer",1],["Card stacking",1],["Product placement",1],["Name-calling",1,"name calling"],["Anchoring",.4,"price anchoring"]]),
P("e32","L.2","Name a logical fallacy.","Texas sharpshooter",[
  ["Ad hominem",25],["Straw man",18,"strawman"],["Slippery slope",15],["False dilemma",8,"false dichotomy","either or"],["Bandwagon",6,"ad populum","appeal to popularity"],["Appeal to authority",6],["Red herring",6],
  ["Circular reasoning",4,"begging the question","circular argument"],["Hasty generalisation",4,"hasty generalization"],["Post hoc",3,"false cause","post hoc ergo propter hoc"],["Tu quoque",2,"whataboutism"],["Appeal to emotion",2],
  ["No true Scotsman",2],["Loaded question",1],["Equivocation",1],["Appeal to tradition",1],["Sunk cost",1,"sunk cost fallacy"],["Genetic fallacy",.5],["Texas sharpshooter",.4]]),
/* ---------- L.3 Visual and multimodal ---------- */
P("e33","L.3","Name a visual feature to analyse in an advertisement or poster.","Given and new",[
  ["Colour",25,"color","colours"],["Font",12,"typography","typeface"],["Image",10,"photograph","picture"],["Layout",10],["Logo",6],["Camera angle",5,"angle"],["Gaze",4,"eye contact","demand gaze"],["Lighting",3],
  ["Composition",3],["Salience",3],["Rule of thirds",2],["Vectors",2,"vector"],["Framing",2],["Size",2,"scale"],["White space",2,"negative space"],["Symbols",2,"symbol"],["Contrast",2],["Leading lines",1],["Mise en scène",1,"mise en scene"],
  ["Given and new",.4,"given new"]]),
P("e34","L.3","Name a camera shot, angle or movement.","Dolly zoom",[
  ["Close-up",25,"close up"],["Long shot",12],["Wide shot",10],["Medium shot",10,"mid shot"],["Low angle",8],["High angle",8],["Bird's-eye view",6,"birds eye","aerial shot"],["Extreme close-up",5,"extreme close up"],
  ["Over-the-shoulder shot",4,"over the shoulder"],["Point-of-view shot",3,"pov","point of view"],["Establishing shot",3],["Dutch angle",2,"canted angle","dutch tilt"],["Two shot",2],["Tracking shot",1],["Worm's-eye view",1,"worms eye"],
  ["Pan",1,"panning"],["Zoom",1],["Crane shot",.5],["Dolly zoom",.4,"vertigo effect"]]),
P("e35","L.3","Name a feature of comics or graphic novels.","Emanata",[
  ["Speech bubble",25,"speech balloon","speech bubbles"],["Panel",20,"panels"],["Gutter",8],["Caption",8,"captions"],["Thought bubble",6],["Sound effects",6,"onomatopoeia","sfx"],["Splash page",3],["Motion lines",3,"speed lines","action lines"],
  ["Layout",2],["Colour",3,"color"],["Frame",3],["Bleed",1],["Closure",1],["Emanata",.4]]),
/* ---------- L.4 Language and power ---------- */
P("e36","L.4","Name a way language can be used to exercise power or manipulate.","Presupposition",[
  ["Euphemism",15],["Propaganda",12],["Jargon",8],["Loaded language",8,"loaded words","emotive language"],["Doublespeak",5,"doublethink"],["Imperatives",5,"commands"],["Rhetorical questions",4],["Repetition",4],
  ["Passive voice",4,"agentless passive","passive"],["Labelling",3,"labeling"],["Stereotyping",3],["Censorship",3],["Slogans",3],["Modal verbs",3,"modality"],["Gaslighting",2],["Othering",2],["Dysphemism",1],
  ["Nominalisation",1,"nominalization"],["Hedging",1],["Dog whistle",1],["Presupposition",.4]]),
P("e37","L.4","Name a kind of bias or misrepresentation to look for in a text.","Agenda setting",[
  ["Stereotyping",20,"stereotypes"],["Gender bias",15,"sexism"],["Racial bias",10,"racism"],["Political bias",8],["Confirmation bias",6],["Omission",5,"bias by omission"],["Tokenism",4],["Male gaze",4],["Othering",3],
  ["Selection bias",3],["Framing",3],["Sensationalism",3],["Ageism",2],["Exoticism",2],["Erasure",1],["Orientalism",1],["White saviour",1,"white savior"],["Ableism",1],["Heteronormativity",1],["Class bias",1],["Agenda setting",.4]]),
P("e38","L.4","Name a variety or register of English.","Polari",[
  ["Formal",20],["Informal",18],["Slang",12],["Standard English",8],["Dialect",6],["Colloquial",6,"colloquialism"],["Jargon",4],["Received Pronunciation",3,"rp","queens english","kings english"],["Creole",3],
  ["American English",3],["British English",3],["Pidgin",2],["Cockney",2],["African American Vernacular English",2,"aave","ebonics"],["Text speak",2,"textspeak"],["Singlish",1],["Scots",1],["Hinglish",1],
  ["Legalese",1],["Academic English",1],["Patois",1],["Polari",.4]]),
/* ---------- W.1 Shakespeare ---------- */
P("e39","W.1","Name a play by William Shakespeare.","The Two Noble Kinsmen",[
  ["Romeo and Juliet",25],["Hamlet",18],["Macbeth",18],["Othello",8],["A Midsummer Night's Dream",6,"midsummer nights dream"],["King Lear",6,"lear"],["Julius Caesar",4],["The Tempest",4],["Twelfth Night",3],
  ["Much Ado About Nothing",3],["The Merchant of Venice",3],["As You Like It",2],["Richard III",2],["Henry V",2],["The Taming of the Shrew",2],["Antony and Cleopatra",1],["The Winter's Tale",1,"winters tale"],
  ["Coriolanus",1],["Titus Andronicus",1],["Richard II",1],["Henry IV",1],["Measure for Measure",1],["The Comedy of Errors",.6],["All's Well That Ends Well",.6,"alls well that ends well"],["Cymbeline",.5],
  ["Troilus and Cressida",.5],["Timon of Athens",.5],["Love's Labour's Lost",.5,"loves labours lost"],["The Two Gentlemen of Verona",.5],["Pericles",.5],["King John",.5],["Henry VI",.5],["The Merry Wives of Windsor",.5],
  ["Henry VIII",.4],["The Two Noble Kinsmen",.4,"two noble kinsmen"]]),
P("e40","W.1","Name a character from Hamlet.","Reynaldo",[
  ["Hamlet",30],["Ophelia",15],["Claudius",12],["Gertrude",10],["Polonius",8],["Horatio",6],["Laertes",6],["The Ghost",4,"ghost","king hamlet","old hamlet"],["Rosencrantz",3],["Guildenstern",3],["Fortinbras",2],
  ["Yorick",2],["Osric",1],["The gravediggers",1,"gravedigger"],["Marcellus",.6],["Bernardo",.5],["Francisco",.5],["Reynaldo",.4]]),
P("e41","W.1","Name a character from Macbeth.","Seyton",[
  ["Macbeth",30],["Lady Macbeth",25],["Banquo",10],["The witches",8,"weird sisters","three witches","witches"],["Macduff",8],["Duncan",6,"king duncan"],["Malcolm",4],["Fleance",2],["Lady Macduff",1],["Donalbain",1],
  ["The Porter",1,"porter"],["Ross",1],["Lennox",.6],["Hecate",.6],["Siward",.5],["Seyton",.4]]),
/* ---------- W.2 Novels ---------- */
P("e42","W.2","Name a novel by Jane Austen.","The Watsons",[
  ["Pride and Prejudice",50],["Emma",15],["Sense and Sensibility",15],["Persuasion",6],["Mansfield Park",5],["Northanger Abbey",5],["Lady Susan",.5],["Sanditon",.5],["The Watsons",.4]]),
P("e43","W.2","Name a dystopian novel.","Kallocain",[
  ["Nineteen Eighty-Four",30,"1984","nineteen eighty four"],["The Handmaid's Tale",15,"handmaids tale"],["Brave New World",12],["The Hunger Games",12],["Fahrenheit 451",10],["The Giver",6],["Divergent",4],["Animal Farm",4],
  ["Never Let Me Go",3],["The Road",3],["A Clockwork Orange",3],["Lord of the Flies",2],["The Maze Runner",2],["The Testaments",1],["We",1],["Station Eleven",1],["Oryx and Crake",1],["Parable of the Sower",1],
  ["Klara and the Sun",.6],["Kallocain",.4]]),
P("e44","W.2","Name a winner of the Nobel Prize in Literature.","Grazia Deledda",[
  ["Toni Morrison",10,"morrison"],["Ernest Hemingway",10,"hemingway"],["Gabriel García Márquez",8,"garcia marquez","marquez"],["Bob Dylan",8,"dylan"],["Kazuo Ishiguro",6,"ishiguro"],["William Faulkner",4,"faulkner"],
  ["T. S. Eliot",4,"ts eliot"],["Albert Camus",4,"camus"],["John Steinbeck",4,"steinbeck"],["Rudyard Kipling",3,"kipling"],["Samuel Beckett",3,"beckett"],["Seamus Heaney",3,"heaney"],["W. B. Yeats",3,"yeats"],
  ["Pablo Neruda",3,"neruda"],["Rabindranath Tagore",3,"tagore"],["Orhan Pamuk",2,"pamuk"],["Doris Lessing",2,"lessing"],["George Bernard Shaw",2,"shaw"],["Alice Munro",2,"munro"],["Louise Glück",2,"gluck","louise gluck"],
  ["Annie Ernaux",2,"ernaux"],["Han Kang",2],["Wole Soyinka",2,"soyinka"],["Jon Fosse",1,"fosse"],["Abdulrazak Gurnah",1,"gurnah"],["Nadine Gordimer",1,"gordimer"],["J. M. Coetzee",1,"coetzee"],["Derek Walcott",1,"walcott"],
  ["Harold Pinter",1,"pinter"],["Mo Yan",1],["Jean-Paul Sartre",1,"sartre"],["Winston Churchill",1,"churchill"],["Svetlana Alexievich",.5,"alexievich"],["Herta Müller",.5,"herta muller"],["László Krasznahorkai",.5,"krasznahorkai"],
  ["Grazia Deledda",.4,"deledda"]],
  [[["shakespeare","jane austen","charles dickens","dickens","tolstoy","leo tolstoy","virginia woolf","george orwell","orwell","james joyce"],"A great writer, but they never won the Nobel Prize in Literature."]]),
P("e45","W.2","Name a novel with an unreliable narrator.","The Good Soldier",[
  ["The Catcher in the Rye",15,"catcher in the rye"],["Gone Girl",10],["Fight Club",8],["The Great Gatsby",6],["Lolita",6],["The Remains of the Day",5],["Life of Pi",5],["Atonement",4],["Wuthering Heights",3],
  ["Never Let Me Go",3],["We Need to Talk About Kevin",2],["One Flew Over the Cuckoo's Nest",2,"one flew over the cuckoos nest"],["A Clockwork Orange",2],["The Murder of Roger Ackroyd",2],
  ["The Curious Incident of the Dog in the Night-Time",2,"curious incident"],["The Girl on the Train",2],["Rebecca",1],["The Turn of the Screw",1],["Pale Fire",1],["Shutter Island",1],["Room",1],["Flowers for Algernon",1],
  ["Tristram Shandy",.5],["The Good Soldier",.4]]),
P("e46","W.2","Name a novel by Toni Morrison.","Love",[
  ["Beloved",45],["The Bluest Eye",20],["Song of Solomon",12],["Sula",8],["Jazz",3],["Paradise",2],["A Mercy",2],["Tar Baby",2],["Home",2],["God Help the Child",1],["Love",.4]]),
/* ---------- W.3 Poets ---------- */
P("e47","W.3","Name a poet known for writing sonnets.","Terrance Hayes",[
  ["William Shakespeare",40,"shakespeare"],["John Milton",6,"milton"],["Elizabeth Barrett Browning",6,"barrett browning"],["William Wordsworth",5,"wordsworth"],["John Keats",5,"keats"],["Petrarch",5],["John Donne",4,"donne"],
  ["Edmund Spenser",3,"spenser"],["Percy Bysshe Shelley",3,"shelley"],["Philip Sidney",2,"sidney"],["Christina Rossetti",2,"rossetti"],["Gerard Manley Hopkins",2,"hopkins"],["Edna St. Vincent Millay",2,"millay"],
  ["Pablo Neruda",2,"neruda"],["Claude McKay",1,"mckay"],["Terrance Hayes",.4,"hayes"]]),
P("e48","W.3","Name a First World War poet.","May Wedderburn Cannan",[
  ["Wilfred Owen",35,"owen"],["Siegfried Sassoon",20,"sassoon"],["Rupert Brooke",15,"brooke"],["John McCrae",6,"mccrae"],["Isaac Rosenberg",4,"rosenberg"],["Edward Thomas",3],["Jessie Pope",3,"pope"],["Laurence Binyon",2,"binyon"],
  ["Robert Graves",2,"graves"],["Ivor Gurney",1,"gurney"],["Vera Brittain",1,"brittain"],["Thomas Hardy",1,"hardy"],["May Wedderburn Cannan",.4,"cannan"]],
  [[["keith douglas","tennyson","alfred tennyson","walt whitman"],"A war poet, but not of the First World War."]]),
P("e49","W.3","Name a poem by Emily Dickinson (its first line is fine).","I taste a liquor never brewed",[
  ["Because I could not stop for Death",30,"because i could not stop for death"],["“Hope” is the thing with feathers",30,"hope is the thing with feathers"],["I'm Nobody! Who are you?",10,"im nobody","i m nobody who are you"],
  ["I heard a Fly buzz – when I died",8,"i heard a fly buzz"],["There's a certain Slant of light",4,"certain slant of light"],["I felt a Funeral, in my Brain",4,"funeral in my brain"],["Success is counted sweetest",3],
  ["Tell all the truth but tell it slant",3,"tell all the truth"],["A narrow Fellow in the Grass",2,"narrow fellow"],["Wild nights – Wild nights!",2,"wild nights"],["My Life had stood – a Loaded Gun",1,"loaded gun"],
  ["The Soul selects her own Society",1,"soul selects"],["After great pain, a formal feeling comes",1,"after great pain"],["This is my letter to the World",1,"letter to the world"],["I taste a liquor never brewed",.4,"liquor never brewed"]]),
P("e50","W.3","Name a confessional poet.","Delmore Schwartz",[
  ["Sylvia Plath",40,"plath"],["Anne Sexton",15,"sexton"],["Robert Lowell",10,"lowell"],["John Berryman",4,"berryman"],["Allen Ginsberg",3,"ginsberg"],["W. D. Snodgrass",2,"snodgrass"],["Ted Hughes",2,"hughes"],
  ["Sharon Olds",1,"olds"],["Elizabeth Bishop",1,"bishop"],["Theodore Roethke",1,"roethke"],["Adrienne Rich",1,"rich"],["Louise Glück",1,"gluck"],["Frank Bidart",.5,"bidart"],["Delmore Schwartz",.4,"schwartz"]]),
P("e51","W.3","Name a poet of the Harlem Renaissance.","Georgia Douglas Johnson",[
  ["Langston Hughes",50,"hughes"],["Claude McKay",10,"mckay"],["Countee Cullen",10,"cullen"],["Zora Neale Hurston",5,"hurston"],["Jean Toomer",4,"toomer"],["James Weldon Johnson",4],["Arna Bontemps",2,"bontemps"],
  ["Sterling Brown",1],["Helene Johnson",.5],["Gwendolyn Bennett",.5,"bennett"],["Georgia Douglas Johnson",.4]],
  [[["paul laurence dunbar","dunbar"],"Dunbar inspired them, but he died in 1906, before the Harlem Renaissance."],[["maya angelou","angelou"],"Maya Angelou came later than the Harlem Renaissance."]]),
/* ---------- W.4 World literature ---------- */
P("e52","W.4","Name a work of literature first written in a language other than English.","The Book of Disquiet",[
  ["The Metamorphosis",10,"metamorphosis"],["Don Quixote",10],["Crime and Punishment",8],["One Hundred Years of Solitude",8],["The Little Prince",6,"le petit prince"],["Les Misérables",6,"les miserables"],
  ["The Stranger",6,"the outsider","l etranger"],["War and Peace",5],["Anna Karenina",4],["The Alchemist",4],["Madame Bovary",3],["Chronicle of a Death Foretold",3],["The Divine Comedy",3,"inferno"],["The Odyssey",3],
  ["Oedipus Rex",2,"oedipus"],["A Doll's House",2,"a dolls house"],["Persepolis",2],["The Trial",2],["The Name of the Rose",2],["The House of the Spirits",2],["Love in the Time of Cholera",2],["Like Water for Chocolate",2],
  ["The Vegetarian",2],["Norwegian Wood",2],["The Plague",2],["Siddhartha",2],["Faust",2],["Medea",1],["Pedro Páramo",1,"pedro paramo"],["Blindness",1],["The Master and Margarita",1],["Perfume",1],
  ["The Death of Ivan Ilyich",1,"death of ivan ilyich"],["Steppenwolf",1],["The Tale of Genji",1],["Journey to the West",1],["Woman at Point Zero",.6],["Season of Migration to the North",.5],["The Book of Disquiet",.4]],
  [[["things fall apart","the kite runner","purple hibiscus","the god of small things","the great gatsby","1984","nineteen eighty four","jane eyre","beloved"],"That was written in English."]]),
P("e53","W.4","Name a novel by Gabriel García Márquez.","Leaf Storm",[
  ["One Hundred Years of Solitude",45],["Love in the Time of Cholera",20],["Chronicle of a Death Foretold",20],["The Autumn of the Patriarch",3],["No One Writes to the Colonel",3],["Of Love and Other Demons",2],
  ["Memories of My Melancholy Whores",2],["The General in His Labyrinth",2],["In Evil Hour",1],["Until August",.5],["Leaf Storm",.4]]),
P("e54","W.4","Name an ancient Greek tragedy or tragedian.","Thespis",[
  ["Oedipus Rex",20,"oedipus the king","oedipus"],["Antigone",15],["Medea",12],["Sophocles",12],["Euripides",8],["Aeschylus",8],["Agamemnon",4],["The Oresteia",3,"oresteia"],["Electra",3],["The Bacchae",3,"bacchae"],
  ["Prometheus Bound",2],["The Trojan Women",2],["Iphigenia in Aulis",1],["Hippolytus",1],["Oedipus at Colonus",1],["The Persians",1],["Alcestis",1],["Ajax",1],["Philoctetes",.5],["Seven Against Thebes",.5],["Thespis",.4]],
  [[["aristophanes","lysistrata","the frogs","the clouds"],"Greek, but comedy rather than tragedy."]]),
/* ---------- C.1 Concepts ---------- */
P("e55","C.1","Name one of the seven key concepts of IB English A.","Transformation",[
  ["Identity",25],["Culture",20],["Perspective",15],["Representation",12],["Communication",10],["Creativity",9],["Transformation",.4]]),
P("e56","C.1","Name something to comment on when analysing an unseen non-literary text (Paper 1).","Modality",[
  ["Audience",18,"target audience"],["Purpose",18],["Tone",10],["Structure",8],["Diction",6,"word choice","language"],["Text type",6,"genre"],["Context",5],["Register",4],["Imagery",4],["Visual features",3,"images","visuals"],
  ["Layout",3],["Rhetorical devices",3,"rhetoric","techniques"],["Persona",2],["Voice",2],["Mood",2],["Stance",2],["Typography",2,"font"],["Syntax",2,"sentence structure"],["Point of view",2],["Perspective",2],
  ["Intertextuality",1],["Modality",.4,"modal verbs"]]),
/* ---------- C.2 Assessment ---------- */
P("e57","C.2","Name a component of the IB English A: Language and Literature course that you must complete.","Learner portfolio",[
  ["Individual oral",25,"io","oral","the oral"],["Paper 1",20,"guided textual analysis"],["Paper 2",20,"comparative essay"],["HL essay",15,"higher level essay","essay"],["Learner portfolio",.4,"portfolio"]]),
P("e58","C.2","Name an assessment criterion used in IB English A.","Focus, organization and development",[
  ["Analysis and evaluation",25,"analysis","evaluation"],["Knowledge, understanding and interpretation",25,"knowledge","understanding","interpretation","understanding and interpretation"],["Language",25,"use of language"],
  ["Focus and organization",20,"focus","organization","organisation","focus and organisation","coherence"],["Focus, organization and development",.4,"development","focus organization and development"]]),
P("e59","C.2","Name a literary form you could study as a work in IB English A.","Verse novel",[
  ["Novel",30],["Poetry",20,"poems","poetry collection","poem"],["Play",18,"drama","script"],["Short stories",10,"short story","short story collection"],["Graphic novel",6],["Memoir",4,"autobiography"],
  ["Novella",3],["Essays",2,"essay","literary essays"],["Epic poem",2,"epic"],["Travel writing",1],["Letters",.6,"correspondence"],["Verse novel",.4,"novel in verse"]]),
P("e60","C.2","Name a skill rewarded in a strong Paper 2 comparative essay.","Evaluating authorial choices",[
  ["Comparison",25,"comparing","comparing and contrasting","compare and contrast"],["Analysis",15,"analysing","analyzing"],["Thesis",12,"clear thesis","argument"],["Using evidence",10,"evidence","quotations","quotes"],
  ["Structure",6,"organisation","organization"],["Knowledge of the works",6,"knowledge"],["Precise language",5,"language","vocabulary"],["Interpretation",5],["Context",4],["Topic sentences",3],["Linking to the question",3,"answering the question","focus"],
  ["Embedding quotations",2],["Literary terminology",2,"terminology"],["Evaluating authorial choices",.4,"evaluation","authorial choices"]]),
];

/* ================= the notebook ================= */
const BANDS = [
  {name:"The blank page",   zone:"The blank page",   from:0,  to:40,  hue:225, bg:["#fbf8ef","#faf6eb"]},
  {name:"The first draft",  zone:"The first draft",  from:40, to:100, hue:205, bg:["#faf6eb","#f9f4e7"]},
  {name:"Margin notes",     zone:"Margin notes",     from:100,to:170, hue:355, bg:["#f9f4e7","#f8f2e3"]},
  {name:"The essay",        zone:"The essay",        from:170,to:250, hue:220, bg:["#f8f2e3","#f6efdd"]},
  {name:"Poetry corner",    zone:"Poetry corner",    from:250,to:320, hue:320, bg:["#f6efdd","#f6ede0"]},
  {name:"The script",       zone:"The script",       from:320,to:390, hue:28,  bg:["#f6ede0","#f3e9d6"]},
  {name:"The manuscript",   zone:"The manuscript",   from:390,to:460, hue:40,  bg:["#f3e9d6","#efe1c6"]},
  {name:"The printed book", zone:"The printed book", from:460,to:530, hue:22,  bg:["#efe1c6","#eadab8"]},
  {name:"The library",      zone:"The library",      from:530,to:600, hue:285, bg:["#eadab8","#e4d1ac"]},
  {name:"The dictionary",   zone:"The dictionary",   from:600,to:760, hue:265, bg:["#e4d1ac","#ddc79c"]},
];
/* words written: 10 at 140, 1,000 at 420, 100,000 (a novel) at 700 */
const words = p => p <= 0 ? 0 : Math.round(Math.pow(10, p / 140));
function fmtW(p){ const n = words(p); return n < 1e6 ? `${n.toLocaleString("en-GB")} word${n === 1 ? "" : "s"}` : `${(n / 1e6).toFixed(1)} million words`; }
const FACTS = [
  [-30,"a blank page and a sharp pencil"],[42,"2 words · “Jesus wept”, the shortest verse in the King James Bible"],[67,"3 words · “Veni, vidi, vici”"],
  [109,"6 words · “For sale: baby shoes, never worn”"],[140,"about 10 words · a haiku is 17 syllables"],[238,"50 words · a mini saga, exactly"],[286,"about 110 words · a sonnet, 14 lines"],
  [341,"272 words · the Gettysburg Address"],[389,"about 600 words · a newspaper column"],[438,"1,200–1,500 words · the HL essay"],[451,"about 1,650 words · “I Have a Dream”"],
  [504,"4,000 words · the extended essay (maximum)"],[594,"17,500 words · roughly where a novella begins"],[627,"about 30,000 words · Hamlet, Shakespeare's longest play"],
  [648,"42,773 entries · Samuel Johnson's Dictionary (1755)"],[684,"about 77,000 words · Harry Potter and the Philosopher's Stone"],[700,"about 100,000 words · a typical novel"],
  [745,"the Oxford English Dictionary defines about 600,000 word forms"],
];
const at = (x, y, inner) => `<svg x="${x}%" y="${y}" overflow="visible">${inner}</svg>`;
const hand = (x, y, t, size = 22, col = "#2a2a5a", extra = "") => at(x, y, `<text font-family="Caveat,cursive" font-weight="600" font-size="${size}" fill="${col}"${extra}>${t}</text>`);
const serif = (x, y, t, size = 15, col = "#2a2418", extra = "") => at(x, y, `<text font-family="Georgia,'Times New Roman',serif" font-size="${size}" fill="${col}"${extra}>${t}</text>`);
const RED = "#c8323c", BLUE = "#2a3a8a", GRAPH = "#4a4f66";
function sticky(x, y, lines, rot = -4, col = "#fff59a"){
  return at(x, y, `<g class="sw" style="animation-duration:5s"><g transform="rotate(${rot})"><rect x="0" y="0" width="128" height="${24 + lines.length * 22}" fill="${col}" filter="drop-shadow(0 3px 4px rgb(60 50 20 / .25))"/><rect x="0" y="0" width="128" height="8" fill="#000" opacity=".05"/>
    ${lines.map((l, k) => `<text x="10" y="${32 + k * 22}" font-family="Caveat,cursive" font-weight="600" font-size="19" fill="#3a3a5a">${l}</text>`).join("")}</g></g>`);
}
function books(x, y, n, seed){
  const r = srand(seed); let s = "", bx = 0;
  for (let k = 0; k < n; k++){ const w = 14 + r() * 12, h = 70 + r() * 40, c = `hsl(${Math.floor(r() * 360)} ${40 + r() * 30}% ${30 + r() * 20}%)`;
    s += `<rect x="${f1(bx)}" y="${f1(-h)}" width="${f1(w)}" height="${f1(h)}" fill="${c}" stroke="#2a1a0a" stroke-width="1"/><rect x="${f1(bx + 2)}" y="${f1(-h + 12)}" width="${f1(w - 4)}" height="4" fill="#e8d080" opacity=".7"/>`; bx += w + 1; }
  return at(x, y, s + `<rect x="-6" y="0" width="${f1(bx + 12)}" height="8" fill="#6a4424"/>`);
}
function scene(i, n){
  const r = srand(5101 + i * 37); let s = "";
  const doodle = () => { const k = Math.floor(r() * 4), x = f1(3 + r() * 22), y = f1(60 + r() * (n - 120));
    return k === 0 ? at(x, y, `<g class="sw"><path d="M0 -14 L4 -4 L15 -4 L6 3 L9 14 L0 7 L-9 14 L-6 3 L-15 -4 L-4 -4Z" fill="none" stroke="${GRAPH}" stroke-width="1.6" opacity=".55"/></g>`)
      : k === 1 ? at(x, y, `<path d="M0 0 C-10 -12 -22 2 0 16 C22 2 10 -12 0 0Z" fill="none" stroke="${RED}" stroke-width="1.6" opacity=".5"/>`)
      : k === 2 ? at(x, y, `<path d="M0 0 q20 -14 40 0 t40 0" fill="none" stroke="${GRAPH}" stroke-width="1.6" opacity=".5"/><path d="M76 -6 l6 6 l-8 3" fill="none" stroke="${GRAPH}" stroke-width="1.6" opacity=".5"/>`)
      : at(x, y, `<path d="M0 0 a12 12 0 1 0 1 0 M-4 -3 h1 M5 -3 h1 M-4 4 q5 4 9 0" fill="none" stroke="${GRAPH}" stroke-width="1.5" opacity=".5"/>`); };
  for (let k = 0; k < Math.round(n / 260); k++) s += doodle();
  const L = (f) => f1(n * f);
  switch(i){
    case 0:
      s += hand(4, L(.2), "Name: ________", 24, GRAPH) + hand(4, L(.2) + 34, "Date: ________", 24, GRAPH) + hand(74, L(.55), "IB English A", 26, BLUE, ' transform="rotate(-3)"');
      break;
    case 1:
      s += hand(3, L(.15), `<tspan text-decoration="line-through">the novel is about</tspan>`, 22, GRAPH) + hand(3, L(.15) + 30, "Thesis: the narrator…", 23, BLUE)
        + at(80, L(.3), `<g class="blink" style="animation-duration:4s"><circle r="34" fill="none" stroke="#8a5a2a" stroke-width="6" opacity=".18"/><circle r="30" fill="none" stroke="#8a5a2a" stroke-width="2" opacity=".2"/></g>`)
        + hand(76, L(.7), "draft 1", 26, RED) + at(75, L(.7) - 8, `<ellipse cx="38" cy="0" rx="46" ry="20" fill="none" stroke="${RED}" stroke-width="2"/>`);
      break;
    case 2:
      s += sticky(3, L(.12), ["Paper 1:", "audience +", "purpose!"], -5) + hand(4, L(.55), "alliteration!", 24, RED, ' transform="rotate(-6)"') + at(20, L(.55) + 6, `<path d="M0 0 q30 10 60 -4" fill="none" stroke="${RED}" stroke-width="2"/><path d="M56 -10 l6 6 l-9 2" fill="none" stroke="${RED}" stroke-width="2"/>`)
        + hand(78, L(.35), "tone shift?", 24, RED) + hand(80, L(.8), "!!", 36, RED, ' class="blink"');
      break;
    case 3:
      s += hand(3, L(.1), "Introduction", 26, BLUE, ' text-decoration="underline"') + hand(3, L(.4), "Body ¶1 · PEEL", 24, BLUE) + hand(3, L(.4) + 28, "point, evidence,", 20, GRAPH) + hand(3, L(.4) + 50, "explain, link", 20, GRAPH)
        + hand(3, L(.78), "Conclusion", 26, BLUE, ' text-decoration="underline"') + serif(78, L(.3), "“", 120, BLUE, ' opacity=".18"') + serif(86, L(.6), "”", 120, BLUE, ' opacity=".18"');
      break;
    case 4:
      s += hand(3, L(.12), "Roses are red… (A)", 21, GRAPH) + hand(3, L(.12) + 26, "violets are blue (B)", 21, GRAPH) + hand(3, L(.12) + 52, "sugar is sweet (A)", 21, GRAPH) + hand(3, L(.12) + 78, "and so are you (B)", 21, GRAPH)
        + hand(76, L(.5), "da-DUM ×5", 26, RED) + hand(76, L(.5) + 26, "iambic pentameter", 19, GRAPH)
        + at(14, L(.75), `<g class="sw" style="animation-duration:3.4s">${[0,1,2,3,4].map(k => `<ellipse cx="0" cy="-12" rx="6" ry="12" fill="#f0a0c0" opacity=".7" transform="rotate(${k * 72})"/>`).join("")}<circle r="5" fill="#f5c842"/><path d="M0 12 q4 30 -2 50" stroke="#5a8a3a" stroke-width="3" fill="none"/></g>`);
      break;
    case 5:
      s += hand(3, L(.15), "HAMLET:", 24, BLUE) + hand(3, L(.15) + 26, "To be, or not to be…", 22, GRAPH) + hand(3, L(.5), "(Exit, pursued by a bear)", 21, RED, ' font-style="italic"')
        + at(82, L(.35), `<g class="fl"><path d="M-24 -20 h22 v18 q0 16 -11 16 q-11 0 -11 -16z" fill="#f5e6a8" stroke="${GRAPH}" stroke-width="1.6"/><path d="M-19 -10 h4 M-9 -10 h4 M-18 0 q5 6 10 0" stroke="${GRAPH}" stroke-width="1.6" fill="none"/>
          <path d="M2 -16 h22 v18 q0 16 -11 16 q-11 0 -11 -16z" fill="#c8d6f0" stroke="${GRAPH}" stroke-width="1.6"/><path d="M7 -6 h4 M17 -6 h4 M8 9 q5 -6 10 0" stroke="${GRAPH}" stroke-width="1.6" fill="none"/></g>`);
      break;
    case 6:
      s += [[8,.2,20],[84,.45,14],[14,.7,26],[90,.85,10]].map(([x, f, rr], k) => at(x, L(f), `<g class="blink" style="animation-duration:${3 + k}s"><circle r="${rr}" fill="#2a1a4a" opacity=".75"/><circle cx="${rr * .9}" cy="${rr * .5}" r="${rr * .3}" fill="#2a1a4a" opacity=".7"/><circle cx="${-rr}" cy="${rr * .6}" r="${rr * .2}" fill="#2a1a4a" opacity=".7"/></g>`)).join("")
        + serif(3, L(.32), "Chapter the First", 22, "#3a2a5a", ' font-style="italic"') + at(80, L(.25), `<g class="sw" style="animation-duration:4s"><path d="M0 0 C-4 -30 10 -60 30 -80 C34 -56 24 -30 2 -2Z" fill="#e8e0d0" stroke="#5a4a3a" stroke-width="1.4"/><path d="M0 0 L34 -80" stroke="#5a4a3a" stroke-width="1"/></g>`);
      break;
    case 7:
      s += books(4, L(.3), 7, 71) + books(78, L(.75), 6, 72) + serif(3, L(.55), "CHAPTER ONE", 20, "#2a2418", ' letter-spacing="4"') + serif(3, L(.55) + 26, "It was a bright cold day in April…", 15, "#3a3428", ' font-style="italic"')
        + serif(88, L(.3), "— 1 —", 14, "#5a5040");
      break;
    case 8:
      s += books(2, L(.22), 9, 81) + books(2, L(.6), 8, 82) + books(78, L(.4), 7, 83) + books(78, L(.85), 8, 84)
        + at(88, L(.62), `<path d="M-14 0 h28 l-6 -24 h-16z" fill="#2a6a4a"/><path d="M0 0 v40 M-14 40 h28" stroke="#8a7a5a" stroke-width="3"/><circle class="pulse" cx="0" cy="12" r="40" fill="#ffe08a" opacity=".18"/>`);
      break;
    case 9:
      s += serif(3, L(.12), "<tspan font-weight='700'>lexicon</tspan> (n.) the vocabulary of a language", 15, "#2a2418") + serif(3, L(.12) + 22, "<tspan font-weight='700'>quill</tspan> (n.) a pen made from a feather", 15, "#2a2418")
        + serif(3, L(.12) + 44, "<tspan font-weight='700'>zeugma</tspan> (n.) one word governing two others", 15, "#2a2418") + serif(3, L(.5), "<tspan font-weight='700'>sesquipedalian</tspan> (adj.) using long words", 15, "#2a2418")
        + serif(3, L(.5) + 22, "<tspan font-weight='700'>defenestration</tspan> (n.) throwing out of a window", 15, "#2a2418")
        + Array.from({length:13}, (_, k) => at(96, f1(40 + k * (n - 80) / 13), `<rect x="-6" y="-12" width="34" height="${f1((n - 80) / 13 - 4)}" rx="4" fill="hsl(${k * 27} 45% 70%)"/><text x="4" y="8" font-family="Georgia,serif" font-weight="700" font-size="14" fill="#2a2418">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[k * 2]}</text>`)).join("")
        + serif(70, L(.8), "Aa", 120, "#2a2418", ' opacity=".07"');
      break;
  }
  return `<svg width="100%" height="${n}" aria-hidden="true">${s}</svg>`;
}
/* the pencil: tip on the page, a little face, more scholarly the further it writes */
function avatar(level, hue){
  const lv = Math.max(0, Math.min(10, level));
  const face = `<g class="av-blink"><ellipse cx="-3" cy="-6" rx="1.6" ry="${lv >= 4 ? 2.2 : 1.8}" fill="#2a2418"/><ellipse cx="3" cy="-6" rx="1.6" ry="${lv >= 4 ? 2.2 : 1.8}" fill="#2a2418"/></g><path d="M-3 0 q3 ${lv >= 2 ? 3 : 1.5} 6 0" stroke="#2a2418" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  const specs = lv >= 5 ? `<circle cx="-3" cy="-6" r="3.2" fill="none" stroke="#2a2418" stroke-width="1"/><circle cx="3" cy="-6" r="3.2" fill="none" stroke="#2a2418" stroke-width="1"/><path d="M-.2 -6 h.4" stroke="#2a2418"/>` : "";
  const laurel = lv >= 8 ? `<g fill="#5a8a3a">${[0,1,2,3].map(k => `<ellipse cx="${-9 + k * 2}" cy="${-30 + k * 4}" rx="2.4" ry="1.2" transform="rotate(${-40 + k * 10} ${-9 + k * 2} ${-30 + k * 4})"/><ellipse cx="${9 - k * 2}" cy="${-30 + k * 4}" rx="2.4" ry="1.2" transform="rotate(${40 - k * 10} ${9 - k * 2} ${-30 + k * 4})"/>`).join("")}</g>` : "";
  const shine = lv >= 3 ? `<path d="M-4.6 -28 v44" stroke="#fff6c8" stroke-width="1.4" opacity=".7"/>` : "";
  const body = `<g transform="rotate(35)">${laurel}<rect x="-7" y="-46" width="14" height="10" rx="4" fill="#f08aa0"/><rect x="-7.5" y="-37" width="15" height="7" fill="#c0c4c8"/><path d="M-7.5 -35 h15 M-7.5 -32.5 h15" stroke="#8a9098" stroke-width=".8"/>
    <rect x="-7" y="-30" width="14" height="48" fill="#f5c842"/><rect x="-2.4" y="-30" width="4.8" height="48" fill="#e8b42a"/>${shine}<path d="M-7 18 L0 34 L7 18Z" fill="#f0d0a0"/><path d="M-2.4 28.5 L0 34 L2.4 28.5Z" fill="#3a3a44"/>${face}${specs}</g>`;
  const dust = lv >= 1 ? `<g class="drift" style="animation-duration:3s"><circle cx="-24" cy="32" r="1.2" fill="#4a4f66" opacity=".5"/><circle cx="-18" cy="35" r=".9" fill="#4a4f66" opacity=".4"/></g>` : "";
  return avatarSVG(`${dust}<g class="${lv >= 1 ? "av-tip" : ""}">${body}</g>`);
}
function entity(t, c){
  const W = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  const page = (x, y, rot, lines, col = "#fffdf4") => `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-26" y="-34" width="52" height="68" rx="2" fill="${col}" stroke="${c}" stroke-width="1.5"/>${Array.from({length:lines}, (_, k) => `<path d="M-18 ${-22 + k * 9} h${30 - (k * 7) % 14}" stroke="#3a2a6a" stroke-width="1.6"/>`).join("")}</g>`;
  if (t === "gem") return W(220,110,`<path d="M110 92 C80 80 40 84 20 92 V24 C40 16 80 14 110 26 Z" fill="#fffdf4" stroke="${c}" stroke-width="2"/><path d="M110 92 C140 80 180 84 200 92 V24 C180 16 140 14 110 26 Z" fill="#fffdf4" stroke="${c}" stroke-width="2"/>
    ${[0,1,2,3,4].map(k => `<path d="M30 ${36 + k * 10} h${60 - k * 6} M128 ${36 + k * 10} h${56 - k * 5}" stroke="#3a2a6a" stroke-width="1.4" opacity=".7"/>`).join("")}<text x="110" y="16" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="13" fill="${c}">DICTIONARY</text>
    <circle cx="110" cy="56" r="52" fill="${c}" opacity=".12" class="pulse"/>`);
  if (t === "rootkit") return W(200,104,`${page(100,52,0,6)}<path d="M100 8 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffd25a" stroke="${c}"/>`);
  if (t === "trojan") return W(200,100,`${page(84,52,-6,6)}${page(116,50,6,5)}`);
  if (t === "adware") return W(200,100,`<g transform="rotate(-4 100 50)"><rect x="64" y="18" width="72" height="64" fill="#fff59a" stroke="${c}" stroke-width="1.5"/>${[0,1,2].map(k => `<path d="M74 ${38 + k * 14} h${48 - k * 10}" stroke="#3a3a5a" stroke-width="2"/>`).join("")}</g>`);
  if (t === "spam") return W(200,100,`<path d="M72 64 q-10 -24 8 -38 q20 -10 36 2 q18 14 4 36 q-20 18 -48 0z" fill="#f4f0e4" stroke="${c}" stroke-width="2"/><path d="M84 38 l12 10 l-6 12 M104 34 l-4 16 l12 6" stroke="${c}" stroke-width="1.3" fill="none"/>`);
  if (t === "blocked") return W(200,100,`${page(100,50,0,0)}${[0,1,2].map(r => [0,1,2].map(k => `<rect x="${70 + k * 20 + (r % 2) * 10}" y="${28 + r * 14}" width="19" height="13" fill="#b8584a" stroke="#7a3428"/>`).join("")).join("")}`);
  return null;
}
/* each line of the pencil's writing: scribbled cursive "words", tiled down the page */
const INK = (() => {
  const r = srand(9091); let d = "";
  for (let row = 0; row < 4; row++){
    const base = 29 + row * 32; let x = 4 + r() * 10;
    while (x < 340){
      const len = 2 + Math.floor(r() * 6); d += `M${f1(x)} ${base}`;
      for (let k = 0; k < len && x < 352; k++){
        const t = r();
        if (t < .4){ d += ` q2 -8 4 0`; x += 4; }
        else if (t < .62){ d += ` c3 -2 4 -6 1 -6 c-3 0 -3 6 2 6`; x += 3; }
        else if (t < .82){ d += ` c3 -6 4 -15 1 -15 c-3 0 -2 9 2 15`; x += 3; }
        else { d += ` c2 0 3 7 1 9 c-2 2 -3 -4 2 -9`; x += 3; }
        d += ` q1 1 2 0`; x += 2;
      }
      x += 7 + r() * 6;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="128"><path d="${d}" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `url('data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27")}')`;
})();

const FADE = "linear-gradient(#000 calc(100% - 8px), transparent)";      // softens the last line's tails

registerSubject({
  key:"eng", name:"English A: Language & Literature", theme:"A pencil writes its way through the notebook", gemWord:"Dictionary", gemTitle:"One in a Dictionary", emoji:"✏️",
  blurb:"You're a <b>pencil</b> on the first page of your IB English notebook. Each prompt has many correct answers. <b>Obvious answers barely write a line. Answers other students missed fill the page</b>, through first drafts, margin notes, essays, poems and scripts to the printed book, the library and the dictionary. Hit <i>One in a Dictionary</i> and the pencil becomes a quill.",
  noLevel:"SL and HL",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Dictionary", rootkit:"Masterpiece", trojan:"Eloquent", adware:"Articulate", spam:"Cliché"}, blocked:"Writer's block", fw:"WRITER'S BLOCK",
  notes:{rootkit:"A masterpiece. Very few writers thought of this.", trojan:"Eloquent. Not the usual answer.", adware:"Articulate, but fairly common.", spam:"A cliché: the answer everyone writes first."},
  verbs:{cta:"Keep writing ▼", inject:"Write", hint:"▼ rarer answers write more ▼", count:"sharpening the pencil"},
  particles:["✎","a","¶","“"], particleColor:"#4a3aa8",
  ambient:{kind:"glyph", c:["60 60 110","110 70 160","150 60 70"], n:22, chars:["a","e","s","t","¶","&","?","!","“","”",";","é"], alpha:.3, blend:"source-over", font:"Caveat, cursive"},
  meter:{label:"WORDS", fmt:fmtW, zone:fmtW, tick:p=>words(p).toLocaleString("en-GB"), gain:(a,b)=>`write ${Math.max(0, words(b) - words(a)).toLocaleString("en-GB")} more word${words(b) - words(a) === 1 ? "" : "s"}`},
  start:{bg:"#fbf8ef", label:"Start · 0 words", zone:"The title page", color:"#5a3aa8",
    deco:n=>`<svg width="100%" height="${n}" aria-hidden="true">${Array.from({length:24}, (_, k) => `<svg x="${f1(2 + k * 4.2)}%" y="0" overflow="visible"><ellipse cx="6" cy="40" rx="5" ry="16" fill="none" stroke="#9aa0ac" stroke-width="3"/><circle cx="6" cy="58" r="4" fill="#d8d2c2"/></svg>`).join("")}
      ${hand(8, 250, "My IB English notebook", 44, "#2a2a5a", ' transform="rotate(-2)"')}${hand(10, 300, "Language & Literature", 28, "#5a3aa8")}${hand(64, 440, "SL / HL", 26, "#c8323c", ' transform="rotate(4)"')}</svg>`},
  endBg:"#d6bf92",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  // the writing fills whole lines: a line appears once the pencil tip (28px below the skin's centre) has passed its baseline
  extras:({pos})=>{ const top = Math.floor((pos(0) - 130 + 28) / 32) * 32;
    return `<div class="nb-lines" aria-hidden="true"></div><div class="ink" style="top:${top}px;height:max(0px,calc(var(--av, 0px) - ${top - 30}px));height:max(0px,calc(round(down, calc(var(--av, 0px) + 2px - ${top}px), 32px) + 40px));-webkit-mask-image:${INK},${FADE};mask-image:${INK},${FADE}" aria-hidden="true"></div>`; },
  beyond:"The appendix",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
