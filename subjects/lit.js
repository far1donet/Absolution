/* English A: Literature — a bookworm burrows down through a tower of books and back through time: from today's
   paperback past modernism, the Victorian novel, Romantic poetry, Shakespeare's stage and illuminated manuscripts
   to classical scrolls and the clay tablets of Gilgamesh. Rarer answers burrow further into the past.
   Syllabus: IB Language A: literature (first assessment 2021; Paper 2 criteria revised from May 2026): the three
   areas of exploration, the literary forms, works in translation, the seven concepts and the assessment. */
(function(){
const CATALOG = [
  {label:"Area of exploration · Readers, writers and texts", units:[
    {code:"R", name:"How literature works", topics:[["R.1","Character and characterization"],["R.2","Setting, symbol and motif"],["R.3","Poetry: imagery, kinds and famous poems"]]},
  ]},
  {label:"Area of exploration · Time and space", units:[
    {code:"T", name:"Literature through time", topics:[["T.1","Ancient and classical literature"],["T.2","Medieval and Renaissance literature"],["T.3","The novel, 1600 to 1900"],["T.4","Contemporary and global literature"]]},
  ]},
  {label:"Area of exploration · Intertextuality: connecting texts", units:[
    {code:"I", name:"Connecting texts", topics:[["I.1","Myths, quests and universal themes"],["I.2","Tragedy, comedy and the absurd"]]},
  ]},
  {label:"Works and forms", units:[
    {code:"W", name:"Works in translation", topics:[["W.1","Works in translation"]]},
    {code:"F", name:"Literary forms", topics:[["F.1","Short stories, novellas and literary non-fiction"]]},
  ]},
  {label:"The course", units:[
    {code:"C", name:"The course", topics:[["C.1","The learner portfolio and reading in translation"],["C.2","Paper 1, Paper 2, the individual oral and the HL essay"]]},
  ]},
];

const PROMPTS = [
/* ---------- R.1 Character ---------- */
P("lt001","R.1","Name a famous villain from literature.","Count Fosco",[
  ["Iago",20],["Count Dracula",15,"dracula"],["Lord Voldemort",15,"voldemort"],["Lady Macbeth",10],["Big Brother",8],["Professor Moriarty",8,"moriarty"],["Sauron",6],["Satan in Paradise Lost",6,"satan","lucifer"],
  ["Mrs Danvers",4,"danvers"],["Nurse Ratched",4,"ratched"],["Uriah Heep",4],["Bill Sikes",3,"sikes"],["Humbert Humbert",3,"humbert"],["Count Fosco",.4,"fosco"]]),
P("lt002","R.1","Name a type of character in a work of literature.","Ficelle",[
  ["Protagonist",20,"hero","main character"],["Antagonist",18,"villain"],["Round character",10,"round"],["Flat character",10,"flat"],["Foil",10],["Anti-hero",8,"antihero"],["Tragic hero",8],
  ["Dynamic character",6,"dynamic"],["Static character",5,"static"],["Stock character",4,"stock"],["Byronic hero",4,"byronic"],["Confidant",4,"confidante"],["Ficelle",.4]]),
P("lt003","R.1","Name a way a writer reveals character (a method of characterization).","Aptronym",[
  ["Dialogue",22,"speech","what they say"],["Actions",18,"what they do","behaviour"],["Physical description",12,"description","appearance"],["Thoughts",10,"inner thoughts","interior monologue"],
  ["What other characters say",8,"other characters","reactions of others"],["Narrator's comments",8,"direct characterization","narrator","direct"],["Indirect characterization",6,"indirect","showing not telling"],
  ["Setting",4,"surroundings"],["Free indirect discourse",3,"free indirect style"],["Aptronym",.4,"telling names","meaningful names","charactonym"]]),
/* ---------- R.2 Setting, symbol and motif ---------- */
P("lt004","R.2","Name a famous symbol from a work of literature.","Proust's madeleine",[
  ["The green light",22,"green light","gatsby s green light"],["The conch",15,"conch","conch shell"],["The scarlet letter",12,"scarlet letter","the letter a"],["The white whale",10,"moby dick","white whale"],
  ["The mockingbird",10,"mockingbird"],["The albatross",6,"albatross"],["The raven",6,"raven"],["Miss Havisham's stopped clocks",4,"stopped clocks","havisham s wedding dress","wedding dress"],
  ["The red room",4,"red room"],["The eyes of Doctor T. J. Eckleburg",4,"eckleburg","the eyes of doctor eckleburg","billboard eyes"],["The yellow wallpaper",4,"yellow wallpaper"],["The lighthouse",3,"lighthouse"],
  ["Proust's madeleine",.4,"madeleine","the madeleine"]]),
P("lt005","R.2","Name a famous fictional place from a novel or poem.","Yoknapatawpha County",[
  ["Middle-earth",15,"middle earth","the shire","mordor"],["Wonderland",12],["Narnia",12],["Hogwarts",10],["Neverland",6],["Lilliput",6],["Macondo",6],["Wuthering Heights",6],["Utopia",5],
  ["Gilead",5],["Manderley",4],["Thornfield Hall",4,"thornfield"],["Pemberley",4],["Xanadu",3],["Yoknapatawpha County",.4,"yoknapatawpha"]]),
P("lt006","R.2","Name a recurring motif in literature.","The locus amoenus",[
  ["The journey",15,"journey","journeys","travel"],["Light and darkness",12,"light","darkness","light and dark"],["Blood",8],["Water",8,"rivers","the sea"],["Mirrors",8,"mirror","reflections"],
  ["The seasons",8,"seasons","winter","spring"],["Birds",6],["Clocks and time",6,"clocks","time"],["The double",6,"doppelganger","doppelgänger","doubles"],["Masks",5],["Gardens",5,"garden"],["Storms",5,"storm"],
  ["The locus amoenus",.4,"locus amoenus","idyllic place"]]),
/* ---------- R.3 Poetry ---------- */
P("lt007","R.3","Name a kind of imagery used in poetry.","Synaesthesia",[
  ["Visual imagery",28,"visual","sight"],["Auditory imagery",18,"auditory","sound"],["Tactile imagery",12,"tactile","touch"],["Olfactory imagery",10,"olfactory","smell"],["Gustatory imagery",8,"gustatory","taste"],
  ["Kinaesthetic imagery",6,"kinaesthetic","kinesthetic","movement"],["Organic imagery",4,"organic","internal sensation"],["Synaesthesia",.4,"synesthesia"]]),
P("lt008","R.3","Name a kind of poem defined by its subject or purpose.","Epithalamium",[
  ["Elegy",22],["Ode",20],["Epic",12],["Ballad",10],["Lyric",8],["Dramatic monologue",8],["Pastoral",6],["Satire",5],["Hymn",4],["Ekphrastic poem",3,"ekphrasis","ekphrastic"],
  ["Aubade",3],["Carpe diem poem",3,"carpe diem"],["Epithalamium",.4,"epithalamion","wedding poem"]]),
P("lt009","R.3","Name a famous poem in English (its title or first line).","The Seafarer",[
  ["The Road Not Taken",15],["The Raven",12],["Ozymandias",10],["Do Not Go Gentle into That Good Night",10,"do not go gentle"],["Sonnet 18",8,"shall i compare thee to a summer s day","shall i compare thee"],
  ["If—",8,"if kipling"],["I Wandered Lonely as a Cloud",8,"daffodils","i wandered lonely as a cloud"],["Dulce et Decorum Est",6,"dulce et decorum est"],["Still I Rise",6],["The Waste Land",5],
  ["The Tyger",5,"the tiger","tyger tyger"],["Kubla Khan",4],["Jabberwocky",4],["The Love Song of J. Alfred Prufrock",3,"prufrock"],["Because I could not stop for Death",3],["The Seafarer",.4]]),
/* ---------- T.1 Ancient and classical ---------- */
P("lt010","T.1","Name an epic poem.","The Kalevala",[
  ["The Odyssey",20,"odyssey"],["The Iliad",20,"iliad"],["The Aeneid",12,"aeneid"],["Beowulf",12],["The Epic of Gilgamesh",10,"gilgamesh"],["Paradise Lost",8],["The Divine Comedy",6,"divine comedy","inferno"],
  ["The Mahabharata",5,"mahabharata"],["The Ramayana",5,"ramayana"],["The Song of Roland",2,"song of roland"],["The Shahnameh",2,"shahnameh","book of kings"],["The Epic of Sundiata",2,"sundiata","sunjata"],
  ["The Kalevala",.4,"kalevala"]]),
P("lt011","T.1","Name a character from Homer's Odyssey.","Eurycleia",[
  ["Odysseus",30,"ulysses"],["Penelope",15],["Telemachus",10],["Polyphemus the Cyclops",10,"cyclops","polyphemus"],["Circe",8],["Athena",8,"athene","minerva"],["Calypso",6],["The Sirens",6,"sirens"],
  ["Poseidon",5],["Argos the dog",2,"argos","argus"],["Eumaeus",2],["Nausicaa",2],["Eurycleia",.4,"euryclea"]]),
P("lt012","T.1","Name a writer from ancient Greece or Rome.","Menander",[
  ["Homer",25],["Sophocles",15],["Virgil",12,"vergil"],["Ovid",10],["Euripides",8],["Aeschylus",8],["Aristophanes",6],["Sappho",6],["Horace",4],["Plato",4],["Catullus",2],["Menander",.4]]),
/* ---------- T.2 Medieval and Renaissance ---------- */
P("lt013","T.2","Name a tale or a pilgrim from Chaucer's Canterbury Tales.","The Manciple",[
  ["The Wife of Bath",25,"wife of bath"],["The Knight",12,"knight s tale","knight"],["The Miller",12,"miller s tale","miller"],["The Pardoner",10,"pardoner s tale","pardoner"],["The Nun's Priest",6,"nun s priest","chanticleer"],
  ["The Prioress",4,"prioress"],["The Merchant",4,"merchant"],["The Reeve",3,"reeve"],["The Franklin",3,"franklin"],["The Clerk",3,"clerk"],["The Summoner",2,"summoner"],["The Manciple",.4,"manciple"]]),
P("lt014","T.2","Name a writer from the Middle Ages or the Renaissance.","Margery Kempe",[
  ["William Shakespeare",20,"shakespeare"],["Geoffrey Chaucer",18,"chaucer"],["Dante Alighieri",15,"dante"],["Miguel de Cervantes",10,"cervantes"],["Christopher Marlowe",8,"marlowe"],["Petrarch",6,"petrarca"],["Giovanni Boccaccio",6,"boccaccio"],
  ["Edmund Spenser",4,"spenser"],["Michel de Montaigne",4,"montaigne"],["Thomas More",4],["Ben Jonson",4,"jonson"],["Murasaki Shikibu",3,"lady murasaki"],["Christine de Pizan",2,"pizan"],["Philip Sidney",2,"sidney"],
  ["Margery Kempe",.4,"kempe"]]),
P("lt015","T.2","Name a character, place or punishment from Dante's Inferno.","Count Ugolino",[
  ["Virgil, Dante's guide",20,"virgil","vergil"],["Limbo",15],["Satan frozen in ice",10,"satan","lucifer","dis"],["Beatrice",10],["Paolo and Francesca",10,"francesca","paolo","lust"],["Charon",8,"the river acheron"],
  ["The river Styx",6,"styx"],["The nine circles",6,"nine circles","circles of hell"],["Minos",4],["Malebolge",3],["Cocytus",3],["Count Ugolino",.4,"ugolino"]]),
/* ---------- T.3 The novel ---------- */
P("lt016","T.3","Name a Victorian novelist.","George Gissing",[
  ["Charles Dickens",30,"dickens"],["Charlotte Brontë",15,"charlotte bronte"],["Emily Brontë",12,"emily bronte"],["Thomas Hardy",10,"hardy"],["George Eliot",10],["Elizabeth Gaskell",5,"gaskell"],["Anne Brontë",4,"anne bronte"],
  ["Anthony Trollope",4,"trollope"],["Wilkie Collins",4],["Bram Stoker",4,"stoker"],["Robert Louis Stevenson",4,"stevenson"],["Oscar Wilde",4,"wilde"],["Lewis Carroll",4],["George Gissing",.4,"gissing"]],
  [[["jane austen","austen"],"Jane Austen died in 1817, twenty years before Queen Victoria came to the throne: she's a Regency novelist."]]),
P("lt017","T.3","Name a novel by Charles Dickens.","The Mystery of Edwin Drood",[
  ["Great Expectations",25],["A Christmas Carol",20,"christmas carol"],["Oliver Twist",18],["A Tale of Two Cities",12,"tale of two cities"],["David Copperfield",8],["Bleak House",6],["Hard Times",6],
  ["Little Dorrit",3],["Our Mutual Friend",2],["The Pickwick Papers",2,"pickwick papers"],["Nicholas Nickleby",2],["The Old Curiosity Shop",2,"old curiosity shop"],["The Mystery of Edwin Drood",.4,"edwin drood"]]),
P("lt018","T.3","Name a novel published before 1800.","Oroonoko",[
  ["Don Quixote",20],["Robinson Crusoe",20],["Gulliver's Travels",15,"gullivers travels"],["Pamela",6],["Tom Jones",6],["Tristram Shandy",5],["Moll Flanders",5],["The Tale of Genji",4,"tale of genji","genji"],
  ["Candide",4],["Clarissa",3],["Journey to the West",3],["Dream of the Red Chamber",2,"the story of the stone"],["Oroonoko",.4]],
  [[["frankenstein"],"Frankenstein came out in 1818, so it's just too late."],[["pride and prejudice","emma","sense and sensibility"],"Jane Austen's novels came out from 1811, so they're too late."]]),
/* ---------- T.4 Contemporary and global ---------- */
P("lt019","T.4","Name a novel that won the Booker Prize.","Something to Answer For",[
  ["Midnight's Children",15,"midnights children"],["Life of Pi",15],["Wolf Hall",12],["The God of Small Things",10,"god of small things"],["The Remains of the Day",8,"remains of the day"],["The White Tiger",6,"white tiger"],
  ["Disgrace",4],["The Blind Assassin",4,"blind assassin"],["Bring Up the Bodies",4],["The Testaments",4,"testaments"],["Girl, Woman, Other",4,"girl woman other"],["Lincoln in the Bardo",4],["Possession",3],
  ["Shuggie Bain",3],["Prophet Song",3],["Orbital",3],["Flesh",2],["Schindler's Ark",2,"schindlers ark"],["Something to Answer For",.4]]),
P("lt020","T.4","Name a novel by a Nigerian writer.","The Palm-Wine Drinkard",[
  ["Things Fall Apart",30],["Half of a Yellow Sun",15],["Purple Hibiscus",10],["Americanah",10],["The Famished Road",5,"famished road"],["Arrow of God",4],["No Longer at Ease",4],["Stay with Me",2],
  ["Freshwater",2],["Sozaboy",2],["My Sister, the Serial Killer",2,"my sister the serial killer"],["The Palm-Wine Drinkard",.4,"palm wine drinkard"]]),
P("lt021","T.4","Name a magical realist writer or novel.","Mikhail Bulgakov",[
  ["Gabriel García Márquez",25,"garcia marquez","marquez","gabriel garcia marquez"],["One Hundred Years of Solitude",15,"100 years of solitude"],["Isabel Allende",10,"allende","the house of the spirits"],
  ["Salman Rushdie",10,"rushdie","midnight s children"],["Beloved",8,"toni morrison","morrison"],["Like Water for Chocolate",6,"laura esquivel","esquivel"],["Haruki Murakami",6,"murakami"],["Jorge Luis Borges",5,"borges"],
  ["Angela Carter",4],["Ben Okri",4,"okri"],["Günter Grass",3,"gunter grass","the tin drum"],["Pedro Páramo",2,"juan rulfo","rulfo","pedro paramo"],["Mikhail Bulgakov",.4,"bulgakov","the master and margarita"]]),
/* ---------- I.1 Myths, quests and themes ---------- */
P("lt022","I.1","Name a stage of the hero's journey (Joseph Campbell's monomyth).","The belly of the whale",[
  ["The call to adventure",25,"call to adventure"],["Meeting the mentor",12,"mentor","supernatural aid"],["Refusal of the call",10,"refusal"],["Crossing the threshold",10,"threshold"],["Tests, allies and enemies",8,"tests","trials","road of trials"],
  ["The ordeal",8,"ordeal","the abyss"],["The reward",6,"reward","the ultimate boon","seizing the sword"],["The road back",6,"road back"],["Resurrection",4],["Return with the elixir",4,"return","the return","elixir"],
  ["Apotheosis",1],["The belly of the whale",.4,"belly of the whale"]]),
P("lt023","I.1","Name a universal theme in literature.","Theodicy",[
  ["Love",20],["Death",15],["Power",10],["Identity",10],["Good versus evil",8,"good and evil"],["Coming of age",8,"growing up"],["Revenge",6],["Ambition",6],["Freedom",5],["Isolation",5,"loneliness"],
  ["Fate versus free will",4,"fate","free will"],["Guilt",4],["Memory",3],["Theodicy",.4,"justifying the ways of god"]]),
P("lt024","I.1","Name a myth or legend that writers have retold.","Tam Lin",[
  ["King Arthur",15,"arthur","camelot","the round table"],["Orpheus and Eurydice",12,"orpheus","eurydice"],["Faust",10,"faustus"],["Prometheus",10],["Pygmalion",8],["Icarus",8],["Oedipus",6],["Robin Hood",6],
  ["Persephone",5],["Medusa",5],["Narcissus",5],["Cinderella",5],["Tam Lin",.4]]),
/* ---------- I.2 Tragedy, comedy and the absurd ---------- */
P("lt025","I.2","Name a tragic hero.","Michael Henchard",[
  ["Hamlet",20],["Macbeth",18],["Oedipus",15],["Othello",12],["King Lear",10,"lear"],["Willy Loman",6,"loman"],["Romeo",6],["Antigone",5],["Jay Gatsby",5,"gatsby"],["Okonkwo",5],["Doctor Faustus",5,"faustus"],
  ["Achilles",3],["Coriolanus",2],["Michael Henchard",.4,"henchard"]]),
P("lt026","I.2","Name a type of comedy.","Comedy of humours",[
  ["Satire",20],["Romantic comedy",15],["Farce",12],["Comedy of manners",10],["Black comedy",8,"dark comedy","dark humour"],["Parody",6],["Slapstick",5],["Tragicomedy",4],["Burlesque",3],
  ["Commedia dell'arte",3,"commedia dell arte","commedia"],["Restoration comedy",3],["Absurdist comedy",3,"absurdism"],["Comedy of humours",.4,"comedy of humors"]]),
P("lt027","I.2","Name a play or playwright from the Theatre of the Absurd.","Arthur Adamov",[
  ["Waiting for Godot",25],["Samuel Beckett",20,"beckett"],["Eugène Ionesco",10,"ionesco","eugene ionesco"],["Harold Pinter",6,"pinter","the birthday party"],["Rosencrantz and Guildenstern Are Dead",6,"rosencrantz and guildenstern","tom stoppard","stoppard"],
  ["Rhinoceros",5],["Endgame",4],["The Bald Soprano",4,"the bald prima donna","bald soprano"],["Edward Albee",4,"albee","the zoo story"],["Jean Genet",3,"genet"],["Arthur Adamov",.4,"adamov"]]),
/* ---------- W.1 Works in translation ---------- */
P("lt028","W.1","Name a Russian novelist or a Russian novel.","Oblomov",[
  ["Leo Tolstoy",20,"tolstoy"],["Fyodor Dostoevsky",20,"dostoevsky","dostoyevsky"],["War and Peace",10],["Crime and Punishment",10],["Anna Karenina",8],["Anton Chekhov",6,"chekhov"],["Nikolai Gogol",5,"gogol","dead souls"],
  ["The Brothers Karamazov",4,"brothers karamazov"],["Alexander Pushkin",4,"pushkin","eugene onegin"],["Ivan Turgenev",4,"turgenev","fathers and sons"],["Mikhail Bulgakov",4,"bulgakov","the master and margarita"],
  ["Doctor Zhivago",3,"pasternak","boris pasternak"],["Aleksandr Solzhenitsyn",3,"solzhenitsyn"],["Vladimir Nabokov",3,"nabokov"],["Oblomov",.4,"goncharov"]]),
P("lt029","W.1","Name a work of literature translated from French.","Les Liaisons dangereuses",[
  ["Les Misérables",15,"les miserables"],["The Little Prince",15,"le petit prince","little prince"],["The Count of Monte Cristo",10,"count of monte cristo"],["The Stranger",10,"the outsider","l etranger"],
  ["Madame Bovary",8],["The Three Musketeers",6,"three musketeers"],["The Plague",4,"la peste"],["Candide",4],["In Search of Lost Time",4,"remembrance of things past","a la recherche du temps perdu"],["Tartuffe",3],["No Exit",3,"huis clos"],
  ["Phaedra",2,"phedre","phèdre"],["Les Liaisons dangereuses",.4,"dangerous liaisons"]]),
P("lt030","W.1","Name a writer from Asia whose work English readers usually read in translation.","Sei Shōnagon",[
  ["Haruki Murakami",20,"murakami"],["Rabindranath Tagore",12,"tagore"],["Han Kang",10,"the vegetarian"],["Yukio Mishima",8,"mishima"],["Lu Xun",6],["Mo Yan",6],["Yasunari Kawabata",6,"kawabata"],["Orhan Pamuk",4,"pamuk"],
  ["Banana Yoshimoto",4,"yoshimoto"],["Murasaki Shikibu",4,"lady murasaki","the tale of genji"],["Ryūnosuke Akutagawa",4,"akutagawa","ryunosuke akutagawa"],["Yu Hua",3],["Kenzaburō Ōe",3,"kenzaburo oe","oe"],["Cao Xueqin",2],
  ["Sei Shōnagon",.4,"sei shonagon","the pillow book"]],
  [[["kazuo ishiguro","ishiguro"],"Kazuo Ishiguro was born in Japan but writes in English, so his novels aren't translations."],[["arundhati roy","salman rushdie","rushdie","roy"],"They write in English, so their work isn't read in translation."]]),
/* ---------- F.1 Forms ---------- */
P("lt031","F.1","Name a famous short story.","Bartleby, the Scrivener",[
  ["The Yellow Wallpaper",15],["The Tell-Tale Heart",15,"tell tale heart"],["The Lottery",12],["The Gift of the Magi",8,"gift of the magi"],["The Necklace",8],["The Metamorphosis",8,"metamorphosis"],["The Story of an Hour",6,"story of an hour"],
  ["A Rose for Emily",6],["The Monkey's Paw",6,"monkeys paw"],["The Dead",4],["Hills Like White Elephants",4],["The Lady with the Dog",3,"lady with the dog","the lady with the little dog"],["Bartleby, the Scrivener",.4,"bartleby"]]),
P("lt032","F.1","Name a memoir or work of literary non-fiction.","Augustine's Confessions",[
  ["The Diary of a Young Girl",20,"anne frank","the diary of anne frank"],["I Know Why the Caged Bird Sings",12,"maya angelou"],["Night",10,"elie wiesel"],["Persepolis",8,"marjane satrapi"],["In Cold Blood",6,"truman capote"],
  ["Long Walk to Freedom",6,"nelson mandela"],["Educated",6,"tara westover"],["A Room of One's Own",5,"a room of ones own"],["Walden",4,"thoreau"],["Narrative of the Life of Frederick Douglass",4,"frederick douglass"],
  ["If This Is a Man",4,"primo levi","survival in auschwitz"],["Notes of a Native Son",3,"james baldwin"],["Augustine's Confessions",.4,"confessions","augustine","st augustine"]]),
P("lt033","F.1","Name a form or length of prose fiction.","Drabble",[
  ["Novel",25],["Short story",20],["Novella",15],["Flash fiction",8,"micro fiction"],["Graphic novel",6],["Epistolary novel",5,"epistolary"],["Verse novel",4],["Serial",3,"serialized novel"],["Short story cycle",3,"story cycle"],
  ["Novelette",2],["Drabble",.4,"100 word story","hundred word story"]]),
/* ---------- C.1 Learner portfolio and translation ---------- */
P("lt034","C.1","Name something you might keep in your learner portfolio.","Global issues for your oral",[
  ["Notes on the works you read",15,"notes","reading notes"],["Annotations",12,"annotated extracts","annotation"],["Reflections",12,"reflection","personal responses"],["Quotations",8,"quotes","key quotations"],
  ["Connections between works",8,"connections","comparisons"],["Context research",6,"context","research"],["Essay plans",5,"plans","practice essays"],["Creative responses",4,"creative writing"],["Mind maps",4,"mind map","diagrams"],
  ["Responses to the concepts",3,"concepts"],["Global issues for your oral",.4,"global issues","io planning"]]),
P("lt035","C.1","Name a reason to read literature in translation.","Untranslatability",[
  ["To learn about other cultures",25,"other cultures","culture","cultures"],["To meet different perspectives",15,"perspectives","different perspectives","viewpoints"],["To build empathy",10,"empathy"],["To compare cultures",8,"compare"],
  ["To explore global issues",8,"global issues"],["Universal themes",6,"universal","shared human experience"],["To study the translator's choices",4,"translator","translation choices"],["Untranslatability",.4,"untranslatable words","what is lost in translation","lost in translation"]]),
/* ---------- C.2 Assessment ---------- */
P("lt036","C.2","Name a part of the assessment in IB English A: Literature.","The two 40-line extracts",[
  ["Paper 1",20,"guided literary analysis","unseen analysis"],["Paper 2",18,"comparative essay"],["The individual oral",18,"individual oral","io","oral"],["The HL essay",12,"hl essay","higher level essay"],
  ["The global issue",5,"global issue"],["The guiding question",4,"guiding question"],["The prescribed reading list",4,"prescribed reading list","prl"],["Works in translation",4],["The learner portfolio",3,"learner portfolio"],
  ["The two 40-line extracts",.4,"40 lines","40 line extracts","extracts of up to 40 lines"]]),
P("lt037","C.2","Name a literary form that can appear as an unseen passage in Literature Paper 1.","Literary non-fiction",[
  ["Poetry",35,"poem"],["Prose fiction",30,"novel","short story","prose"],["Drama",20,"play","a scene"],["Literary non-fiction",.4,"prose non fiction","non fiction","memoir","essay"]],
  [[["advertisement","advert","speech","cartoon","infographic","news article","newspaper"],"That's a non-literary text: it appears in Language and Literature Paper 1, not in Literature."]]),
];

/* ================= the tower of books (downwards, back in time) ================= */
const BANDS = [
  {name:"Today's paperback",      zone:"Today's paperback",          from:0,  to:40,  hue:200, bg:["#1d2740","#232a4a"]},
  {name:"The postmodern shelf",   zone:"The postmodern shelf",       from:40, to:100, hue:320, bg:["#232a4a","#3a2244"]},
  {name:"Modernism",              zone:"Modernism",                  from:100,to:170, hue:45,  bg:["#3a2244","#1e1e24"]},
  {name:"The Victorian novel",    zone:"The Victorian novel",        from:170,to:250, hue:30,  bg:["#1e1e24","#2c2418"]},
  {name:"Romantic poetry",        zone:"Romantic poetry",            from:250,to:320, hue:220, bg:["#2c2418","#1a2840"]},
  {name:"The Age of Reason",      zone:"The Age of Reason",          from:320,to:390, hue:35,  bg:["#1a2840","#38281a"]},
  {name:"Shakespeare's stage",    zone:"Shakespeare's stage",        from:390,to:460, hue:0,   bg:["#38281a","#3e1414"]},
  {name:"Illuminated manuscripts",zone:"The illuminated manuscript", from:460,to:530, hue:220, bg:["#3e1414","#14204a"]},
  {name:"Classical scrolls",      zone:"Classical scrolls",          from:530,to:600, hue:40,  bg:["#14204a","#3a3020"]},
  {name:"The clay tablet",        zone:"The clay tablets",           from:600,to:760, hue:28,  bg:["#3a3020","#5a3e24"]},
];
// the year at each band boundary: rarer answers take you further back in time
const KNOTS = [[0,2026],[40,1980],[100,1945],[170,1900],[250,1830],[320,1780],[390,1650],[460,1550],[530,1000],[600,-800],[760,-2100]];
function yearAt(p){
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (p <= p1 || k === KNOTS.length - 1) return y0 + (Math.max(p, 0) - p0) * (y1 - y0) / (p1 - p0); }
}
function at(y){   // the depth where a year sits
  for (let k = 1; k < KNOTS.length; k++){ const [p0, y0] = KNOTS[k - 1], [p1, y1] = KNOTS[k];
    if (y >= y1 || k === KNOTS.length - 1) return Math.round(p0 + (y0 - y) * (p1 - p0) / (y0 - y1)); }
}
function fmtY(p){ const y = Math.round(yearAt(p)); return y > 0 ? (y < 1000 ? `${y} CE` : String(y)) : `${Math.max(1, -y)} BCE`; }   // negative years are BCE
const FACTS = [
  [-30,"you start in a brand-new paperback"],[at(2019),"every story ever written is below you"],[at(1997),"The God of Small Things wins the Booker (1997)"],[at(1987),"Beloved · Toni Morrison (1987)"],
  [at(1967),"One Hundred Years of Solitude (1967)"],[at(1958),"Things Fall Apart · Chinua Achebe (1958)"],[at(1949),"\"the clocks were striking thirteen\" · Orwell (1949)"],
  [at(1925),"The Great Gatsby and Mrs Dalloway (1925)"],[at(1922),"Ulysses and The Waste Land (1922)"],[at(1915),"Gregor Samsa wakes up as an insect (1915)"],
  [at(1897),"Dracula (1897)"],[at(1861),"Great Expectations (1861)"],[at(1847),"Jane Eyre and Wuthering Heights (1847)"],
  [at(1818),"Frankenstein · Mary Shelley (1818)"],[at(1813),"\"It is a truth universally acknowledged…\" (1813)"],[at(1798),"Lyrical Ballads (1798)"],
  [at(1759),"Candide (1759)"],[at(1726),"Gulliver's Travels (1726)"],[at(1719),"Robinson Crusoe (1719)"],[at(1667),"Paradise Lost (1667)"],
  [at(1623),"Shakespeare's First Folio (1623)"],[at(1605),"Don Quixote (1605)"],[at(1600),"\"To be, or not to be\" · Hamlet (about 1600)"],
  [at(1400),"The Canterbury Tales (about 1400)"],[at(1320),"Dante's Divine Comedy (about 1320)"],[at(1010),"The Tale of Genji (about 1010)"],
  [at(800),"Beowulf, in Old English (date unknown)"],[at(-19),"The Aeneid · Virgil (19 BCE)"],[at(-441),"Antigone · Sophocles (about 441 BCE)"],[at(-700),"The Iliad and the Odyssey (about 700 BCE)"],
  [at(-1200),"the standard Epic of Gilgamesh is written down"],[at(-2000),"the first Gilgamesh poems, on clay (about 2100 BCE)"],[at(-2280),"Enheduanna, the first author known by name"],
];
function wall(i, len, side){
  const r = srand(4411 + i*31 + (side==="r"?17:0)); let s = "";
  const rep = (step, fn, y0 = 20) => { for (let y=y0; y<len-20; y+=step) fn(y); };
  const spines = (cols, light) => { let y = 0; while (y < len){ const h = f1(10+r()*14), w = f1(84+r()*30), x = f1((120-w)/2 + (r()-.5)*12);
      s+=`<rect x="${x}" y="${f1(y)}" width="${w}" height="${h}" rx="1.5" fill="${cols[Math.floor(r()*cols.length)]}"/><path d="M${f1(+x+6)} ${f1(y + h/2)} h${f1(w*.4)}" stroke="${light}" stroke-width="1.2" opacity=".55"/>`; y += +h + 1; } };
  switch(i){
    case 0: // today's paperbacks: bright spines and barcodes
      spines(["#ff5a5a","#ffb02e","#2ec4b6","#5a8bff","#ff7ad9","#f4f1ea"], "#fff");
      rep(150, y=>{ s+=`<g transform="translate(${f1(20+r()*60)} ${y})"><rect width="34" height="20" fill="#fff"/>${Array.from({length:10},(_,k)=>`<rect x="${3+k*3}" y="3" width="${k%3?1:2}" height="14" fill="#111"/>`).join("")}</g>`; });
      break;
    case 1: // the postmodern shelf: pop-art dots and frames within frames
      rep(26, y=>{ for (let x=8; x<120; x+=16) s+=`<circle cx="${x + (y/26%2)*8}" cy="${y}" r="${f1(2+r()*3)}" fill="#ff7ad9" opacity=".35"/>`; }, 0);
      rep(170, y=>{ s+=`<rect x="18" y="${y}" width="84" height="110" fill="none" stroke="#9fd8ff" stroke-width="2" stroke-dasharray="6 4"/><rect x="34" y="${y+20}" width="52" height="70" fill="none" stroke="#ffd25a" stroke-width="2"/><text x="60" y="${y+64}" text-anchor="middle" font-size="22" font-family="Georgia,serif" fill="#fff" opacity=".7">?!</text>`; });
      break;
    case 2: // modernism: art deco fans and typewriter keys
      rep(140, y=>{ s+=`<g opacity=".8">${[0,1,2,3,4].map(k=>`<path d="M60 ${y+70} L${20+k*20} ${y+10}" stroke="#d4af37" stroke-width="2"/>`).join("")}<path d="M16 ${y+10} q44 -18 88 0" stroke="#d4af37" stroke-width="2.4" fill="none"/></g>`
        + [0,1,2].map(k=>`<circle cx="${30+k*30}" cy="${y+105}" r="11" fill="#1a1a1a" stroke="#c9c9c9" stroke-width="2"/><text x="${30+k*30}" y="${y+110}" text-anchor="middle" font-size="12" font-family="Courier New,monospace" fill="#eee">${"QWERTYUIOP"[Math.floor(r()*10)]}</text>`).join(""); });
      break;
    case 3: // the Victorian novel: gas lamps in the fog
      rep(180, y=>{ s+=`<path d="M60 ${y+150} V${y+40}" stroke="#2a2a2a" stroke-width="5"/><path d="M48 ${y+40} h24 l-4 -22 h-16z" fill="#2a2a2a"/><path class="blink" d="M51 ${y+38} h18 l-3 -17 h-12z" fill="#ffd27a" opacity=".9"/>`
        + `<circle cx="60" cy="${y+30}" r="26" fill="#ffd27a" opacity=".12"/><g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${f1(30+r()*60)}" cy="${y+120}" rx="50" ry="12" fill="#c8c0b0" opacity=".18"/></g>`; });
      break;
    case 4: // Romantic poetry: a moon over mountains and daffodils
      rep(220, y=>{ s+=`<circle cx="${f1(30+r()*60)}" cy="${y+30}" r="14" fill="#f4f0d8" opacity=".85"/><path d="M0 ${y+120} L30 ${y+70} L55 ${y+100} L85 ${y+55} L120 ${y+120}z" fill="#2a3a5a"/><path d="M78 ${y+66} l7 -11 l7 11z" fill="#e8eef8"/>`
        + [0,1,2,3].map(k=>{ const x = 14+k*28; return `<path d="M${x} ${y+170} v-24" stroke="#4a8a3a" stroke-width="2"/><g transform="translate(${x} ${y+144})">${[0,72,144,216,288].map(a=>`<ellipse rx="3" ry="6" transform="rotate(${a}) translate(0 -5)" fill="#ffd84a"/>`).join("")}<circle r="3" fill="#ff9a2a"/></g>`; }).join(""); });
      break;
    case 5: // the Age of Reason: candles, quills and inkpots
      rep(170, y=>{ s+=`<rect x="22" y="${y+40}" width="12" height="60" fill="#f4ead0"/><path class="blink" d="M28 ${y+38} q-5 -8 0 -16 q5 8 0 16z" fill="#ffb03a"/><circle cx="28" cy="${y+28}" r="14" fill="#ffd27a" opacity=".12"/>`
        + `<path d="M70 ${y+110} h30 v-12 q-15 -10 -30 0z" fill="#1a1a2a"/><path d="M88 ${y+98} L104 ${y+30} q8 10 -2 30 q-4 18 -14 38" fill="#f4f0e8" stroke="#c8c0b0"/>`; });
      break;
    case 6: // Shakespeare's stage: red curtains and Yorick's skull
      s += `<rect width="120" height="${len}" fill="#5a0e12"/>`;
      for (let x=6; x<120; x+=18) s+=`<path d="M${x} 0 V${len}" stroke="#3a0608" stroke-width="5" opacity=".7"/>`;
      rep(200, y=>{ s+=`<path d="M10 ${y} q50 26 100 0" stroke="#d4af37" stroke-width="3" fill="none"/><circle cx="60" cy="${y+13}" r="4" fill="#d4af37"/>`
        + `<g transform="translate(60 ${y+90})"><ellipse rx="16" ry="18" fill="#ece4d0"/><rect x="-10" y="10" width="20" height="10" rx="3" fill="#ece4d0"/><circle cx="-6" cy="-2" r="4.5" fill="#2a0a0a"/><circle cx="6" cy="-2" r="4.5" fill="#2a0a0a"/><path d="M-1 6 l1 -4 l1 4z" fill="#2a0a0a"/><path d="M-7 14 v5 M-2 14 v5 M3 14 v5 M8 14 v5" stroke="#8a7a6a"/></g>`; });
      break;
    case 7: // illuminated manuscripts: gilded capitals on blue and red
      rep(130, y=>{ const L = "ABCDEFGHILMNOPRST"[Math.floor(r()*17)];
        s+=`<rect x="24" y="${y}" width="72" height="72" fill="${r()<.5?"#1a3a8a":"#8a1a1a"}" stroke="#d4af37" stroke-width="3"/><path d="M24 ${y} l12 12 M96 ${y} l-12 12 M24 ${y+72} l12 -12 M96 ${y+72} l-12 -12" stroke="#d4af37" stroke-width="1.5"/>`
          + `<text x="60" y="${y+54}" text-anchor="middle" font-size="46" font-weight="700" font-family="Georgia,serif" fill="#ffd25a">${L}</text>`
          + `<path d="M30 ${y+96} q15 -10 30 0 t30 0" stroke="#3a8a4a" stroke-width="2" fill="none"/><circle cx="45" cy="${y+90}" r="3" fill="#d03a3a"/><circle cx="75" cy="${y+100}" r="3" fill="#3a6ad0"/>`; });
      break;
    case 8: // classical scrolls: a Greek key border and the masks of comedy and tragedy
      rep(24, y=>{ s+=`<path d="M4 ${y+18} v-14 h16 v10 h-8 v-4" stroke="#d4af37" stroke-width="2" fill="none"/><path d="M100 ${y+18} v-14 h16 v10 h-8 v-4" stroke="#d4af37" stroke-width="2" fill="none"/>`; }, 0);
      rep(190, y=>{ s+=`<g transform="translate(44 ${y+50})"><path d="M-14 -16 q14 -6 28 0 q2 22 -14 34 q-16 -12 -14 -34z" fill="#f4ead0"/><path d="M-8 -6 q3 -3 6 0 M2 -6 q3 -3 6 0" stroke="#2a2a2a" stroke-width="2" fill="none"/><path d="M-6 6 q6 7 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>`
        + `<g transform="translate(78 ${y+70})"><path d="M-14 -16 q14 -6 28 0 q2 22 -14 34 q-16 -12 -14 -34z" fill="#d8d0c0"/><path d="M-8 -4 q3 3 6 0 M2 -4 q3 3 6 0" stroke="#2a2a2a" stroke-width="2" fill="none"/><path d="M-6 10 q6 -7 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>`
        + `<rect x="30" y="${y+120}" width="60" height="30" fill="#e8d8a8"/><circle cx="30" cy="${y+135}" r="7" fill="#c8b480"/><circle cx="90" cy="${y+135}" r="7" fill="#c8b480"/>`; });
      break;
    case 9: // clay tablets covered in cuneiform
      rep(150, y=>{ s+=`<rect x="20" y="${y}" width="80" height="110" rx="10" fill="#a8784a" stroke="#6a4424" stroke-width="2"/>`;
        for (let row=0; row<7; row++) for (let k=0; k<5; k++) if (r()<.75){ const x = 30+k*14, yy = y+14+row*14;
          s+=`<path d="M${x} ${yy} l8 -3 l-4 8z M${x+4} ${yy+3} v6" stroke="#5a3418" stroke-width="1.3" fill="#7a5028"/>`; } });
      break;
  }
  return vwall(s, len, side);
}
/* the bookworm: it pokes out of a book, puts on reading glasses, a bookmark scarf and a laurel wreath, then turns gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#e0ad2a" : "#7ac943", line = gold ? "#8a5a08" : "#2f6a1a", cover = gold ? "#ffd25a" : `hsl(${hue} 55% 42%)`;
  const eye = level >= 5 ? `hsl(${hue} 90% 40%)` : "#1a1a1a";
  const s = `<g class="av-rock">
    <path d="M-27 20 v12 q13 -4 27 1 q14 -5 27 -1 v-12" fill="${cover}" stroke="#2a1a0a" stroke-width="1.6"/>
    <path d="M-24 18 q12 -5 24 0 q12 -5 24 0 v11 q-12 -5 -24 0 q-12 -5 -24 0z" fill="#f4ead0" stroke="#2a1a0a" stroke-width="1.4"/>
    <path d="M-20 21 q8 -3 16 0 M-20 25 q8 -3 16 0 M4 21 q8 -3 16 0 M4 25 q8 -3 16 0" stroke="#b8a888" stroke-width="1"/>
    <ellipse cx="7" cy="20" rx="7" ry="2.6" fill="#2a1a0a"/>
    <circle cx="7" cy="15" r="6.4" fill="${body}" stroke="${line}" stroke-width="1.5"/><circle cx="5" cy="7" r="7" fill="${body}" stroke="${line}" stroke-width="1.5"/><circle cx="2" cy="-1" r="7.6" fill="${body}" stroke="${line}" stroke-width="1.5"/>
    ${level >= 4 ? `<path d="M-6 -3 q9 5 17 0 l0 4 q-8 5 -17 0z" fill="#d03a3a"/><path d="M8 0 l4 13 l-4 -3 l-4 3z" fill="#d03a3a"/>` : ""}
    <circle cx="0" cy="-13" r="12.5" fill="${body}" stroke="${line}" stroke-width="1.6"/>
    <circle cx="-7" cy="-9" r="2.6" fill="#ff9a9a" opacity=".6"/><circle cx="7" cy="-9" r="2.6" fill="#ff9a9a" opacity=".6"/>
    <circle cx="-4.6" cy="-16" r="4.2" fill="#fff"/><circle cx="4.6" cy="-16" r="4.2" fill="#fff"/>
    <g class="av-blink"><circle cx="-4" cy="-15.6" r="2.1" fill="${eye}"/><circle cx="5.2" cy="-15.6" r="2.1" fill="${eye}"/></g>
    ${level >= 3 ? `<circle cx="-4.6" cy="-16" r="5.6" fill="none" stroke="#2a1a0a" stroke-width="1.5"/><circle cx="4.6" cy="-16" r="5.6" fill="none" stroke="#2a1a0a" stroke-width="1.5"/><path d="M-1 -16.5 h2 M-10.2 -17 l-2 -1 M10.2 -17 l2 -1" stroke="#2a1a0a" stroke-width="1.5"/>` : ""}
    <path d="M-4 -7 q4 3.5 8 0" stroke="${line}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${level >= 6 ? Array.from({length:9}, (_, k) => { const a = (200 + k * 17.5) * Math.PI / 180; return `<ellipse cx="${f1(Math.cos(a) * 13)}" cy="${f1(-14 + Math.sin(a) * 13)}" rx="2" ry="4.2" transform="rotate(${f1(200 + k * 17.5 + 90)} ${f1(Math.cos(a) * 13)} ${f1(-14 + Math.sin(a) * 13)})" fill="${gold ? "#fff2a8" : "#4a9a3a"}"/>`; }).join("") : ""}
    ${level >= 2 ? `<path d="M-30 4 l8 -6 l8 6 v-12 l-8 -3 l-8 3z" fill="#f4ead0" stroke="#2a1a0a" stroke-width="1"/><path d="M-22 -2 v-9" stroke="#2a1a0a" stroke-width=".8"/>` : ""}
    ${gold ? `<circle r="33" fill="none" stroke="#ffd25a" stroke-width="1.5" stroke-dasharray="2 4" class="vspin" style="animation-duration:14s"/>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,110,`<path d="M60 74 q10 -18 40 -18 q30 0 40 18 q-20 10 -40 10 q-20 0 -40 -10z" fill="#e0ad2a" stroke="#fff2a8" stroke-width="2"/><path d="M140 70 q20 -8 26 -24 q-12 6 -22 8" fill="none" stroke="#e0ad2a" stroke-width="5" stroke-linecap="round"/><path d="M60 70 q-14 -2 -18 -12" stroke="#e0ad2a" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="88" y="48" width="24" height="9" rx="3" fill="#e0ad2a"/>`
    + `<path class="drift" d="M166 46 q10 -14 0 -24 q-10 -10 4 -20" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>` + [[30,30],[180,70],[100,20],[40,96]].map(([x,y],k)=>`<path class="blink" style="animation-delay:${k*.2}s" d="M${x} ${y-6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z" fill="#fff2a8"/>`).join(""));
  if (t === "rootkit") return W(170,100,`<rect x="50" y="14" width="70" height="78" rx="4" fill="#6a1a1a" stroke="${c}" stroke-width="3"/><rect x="58" y="22" width="54" height="62" fill="none" stroke="#d4af37" stroke-width="1.5"/><path d="M68 44 h34 M72 52 h26" stroke="#d4af37" stroke-width="3"/>`);
  if (t === "trojan") return W(170,100,`<rect x="44" y="64" width="82" height="16" rx="2" fill="#2a5a8a" stroke="${c}" stroke-width="2"/><rect x="50" y="46" width="72" height="16" rx="2" fill="#8a3a2a" stroke="${c}" stroke-width="2"/><rect x="46" y="28" width="78" height="16" rx="2" fill="#3a7a4a" stroke="${c}" stroke-width="2"/>`);
  if (t === "adware") return W(170,100,`<g transform="rotate(-8 85 50)"><rect x="58" y="18" width="54" height="72" rx="3" fill="#ffb02e" stroke="${c}" stroke-width="2.5"/><path d="M66 34 h38 M66 42 h30" stroke="#fff" stroke-width="3"/></g>`);
  if (t === "spam") return W(170,90,`<rect x="44" y="16" width="82" height="60" rx="3" fill="#f4f1ea" stroke="${c}" stroke-width="2"/><text x="85" y="36" text-anchor="middle" font-size="12" fill="#e0ad2a">★★★★★</text><path d="M54 48 h62 M54 56 h56 M54 64 h60" stroke="#9a9a9a" stroke-width="2"/>`);
  if (t === "blocked") return W(170,100,`<path class="blink" d="M85 92 q-30 -10 -20 -40 q6 14 14 8 q-8 -26 10 -46 q4 26 16 30 q4 -12 0 -20 q22 22 6 56z" fill="#ff6a2a"/><text x="85" y="84" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" font-family="Chakra Petch,sans-serif">451</text>`);
  return null;
}
registerSubject({
  key:"lit", name:"English A: Literature", theme:"A bookworm burrowing back through the history of literature", gemWord:"Thousand and One Nights", gemTitle:"One in a Thousand and One Nights", emoji:"📚",
  blurb:"You're a <b>bookworm</b> at the top of a tower of books. Each prompt has many correct answers. <b>Obvious answers barely nibble the cover. Answers other readers missed burrow you back through time</b>, past modernism, the Victorian novel, Romantic poetry, Shakespeare's stage and illuminated manuscripts, to classical scrolls and the clay tablets of Gilgamesh.",
  noLevel:"SL and HL",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Thousand and One Nights", rootkit:"Classic", trojan:"Page-turner", adware:"Paperback", spam:"Blurb"}, blocked:"Plot hole", fw:"FAHRENHEIT 451",
  notes:{rootkit:"A classic: very few readers got this far.", trojan:"A page-turner most readers don't reach.", adware:"A paperback: correct and common.", spam:"The blurb on the back: what everyone says first."},
  ladder:{gem:"One in a Thousand and One Nights: almost no one thinks of it", rootkit:"Classic: a rare answer", trojan:"Page-turner: a strong, less common answer", adware:"Paperback: correct and common", spam:"Blurb: what everyone says first", blocked:"Not an accepted answer"},
  verbs:{cta:"Burrow ▼", inject:"Read", hint:"▼ rarer answers burrow further back in time ▼", count:"turning the pages"},
  shout:t => ({gem:"O CAPTAIN! MY CAPTAIN!", rootkit:"WHAT A PLOT TWIST!", blocked:"PLOT HOLE!"})[t],
  particles:["❦","❧","☙","✦"], particleColor:"#ffd27a",
  meter:{label:"YEAR", fmt:fmtY, zone:fmtY, tick:fmtY, gain:(a,b)=>`back to ${fmtY(b)}`},
  start:{bg:"linear-gradient(180deg,#141a2e,#1d2740)", label:"Start · 2026", zone:"The newest bestseller", color:"#ffd27a"},
  endBg:"#1a0e06",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wall(i,len,"l")+wall(i,len,"r"), avatar, entity,
  beyond:"Before writing",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
