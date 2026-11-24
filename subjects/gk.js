/* General knowledge — just for fun, not on the IB syllabus. A crashed UFO limps off a farm field and climbs:
   rarer answers fly higher, through the clouds, past the Moon and the planets, out into endless deep space.
   Riddles accept every sensible answer; list prompts are as complete as possible. */
(function(){
const CATALOG = [
  {label:"Just for fun · not on the IB syllabus", units:[
    {code:"R", name:"Riddles", topics:[["R.1","What am I? riddles"],["R.2","Brain teasers and wordplay"]]},
    {code:"M", name:"Movies and TV", topics:[["M.1","Animation"],["M.2","Blockbusters and franchises"],["M.3","TV, streaming and awards"]]},
    {code:"S", name:"Music", topics:[["S.1","Artists and bands"],["S.2","Songs and albums"],["S.3","Instruments, genres and festivals"]]},
    {code:"V", name:"Games", topics:[["V.1","Video game characters"],["V.2","Video games and consoles"],["V.3","Board, card and playground games"]]},
    {code:"W", name:"The world", topics:[["W.1","Animals and nature"],["W.2","Countries and landmarks"],["W.3","Space and science"]]},
    {code:"F", name:"Food and sport", topics:[["F.1","Food and drink"],["F.2","Sport"]]},
  ]},
];
const many = (w, ...names) => names.map(n => Array.isArray(n) ? [n[0], w, ...n.slice(1)] : [n, w]);

const PROMPTS = [
/* ---------- Riddles ---------- */
P("k01","R.1","Riddle: What has keys but can't open locks?","The Florida Keys",[
  ["Piano",30,"keyboard instrument"],["Keyboard",25,"computer keyboard"],["Map",6,"atlas","chart"],["Computer",4,"laptop"],["Typewriter",4],["Calculator",2],["Organ",1.5],["Accordion",1],["The Florida Keys",.4,"florida keys","florida"]]),
P("k02","R.1","Riddle: What has a neck but no head?","Hourglass",[
  ["Bottle",35],["Guitar",12],["Shirt",10,"t shirt","jumper","sweater","top"],["Violin",4],["Vase",4],["Jar",3],["Bass guitar",2,"bass"],["Ukulele",2],["Flask",2],["Hourglass",.4]],
  [[["giraffe","swan","person","human","goose"],"That has a head!"]]),
P("k03","R.1","Riddle: What has hands but can't clap?","A bunch of bananas",[
  ["Clock",40,"alarm clock"],["Watch",20,"wristwatch"],["Statue",4],["Mannequin",3],["Stopwatch",2],["A bunch of bananas",.4,"bananas","bunch of bananas"]]),
P("k04","R.1","Riddle: What has teeth but can't bite?","Dandelion",[
  ["Comb",35],["Zip",15,"zipper"],["Saw",12],["Gear",6,"cog"],["Rake",5],["Key",4],["Dandelion",.4,"dent de lion"]],
  [[["shark","dog","crocodile","lion","person"],"That can definitely bite!"]]),
P("k05","R.1","Riddle: What has legs but can't walk?","A journey (it has legs)",[
  ["Table",35],["Chair",25],["Bed",8],["Stool",6],["Desk",5],["Trousers",4,"pants","jeans"],["Piano",3],["Tripod",3],["Sofa",3,"couch"],["A journey (it has legs)",.4,"journey","trip","relay race"]]),
P("k07","R.1","Riddle: What has an eye but can't see?","Hook-and-eye fastener",[
  ["Needle",35],["Hurricane",20,"storm","cyclone"],["Potato",12],["Tornado",4],["Peacock feather",2,"feather"],["Hook-and-eye fastener",.4,"hook and eye"]]),
P("k08","R.1","Riddle: What gets wetter the more it dries?","Chamois",[
  ["Towel",60,"bath towel"],["Cloth",6,"dishcloth","tea towel","rag"],["Sponge",6],["Bath mat",2],["Chamois",.4,"shammy"]]),
P("k09","R.1","Riddle: What has many rings but no fingers?","Slinky",[
  ["Telephone",25,"phone"],["Tree",20,"tree trunk"],["Saturn",12],["Bell",8],["Onion",6],["Olympic flag",6,"olympic rings"],["Boxing ring",2],["Circus",2],["Jupiter, Uranus or Neptune",2,"uranus","neptune","jupiter"],["Slinky",.4]]),
P("k10","R.1","Riddle: What has a spine but no bones?","Sea urchin",[
  ["Book",60],["Cactus",10],["Mountain ridge",3,"mountain"],["Sea urchin",.4]],
  [[["hedgehog","porcupine","fish","snake"],"That has bones!"]]),
P("k11","R.1","Riddle: What has words but never speaks?","Tombstone",[
  ["Book",45],["Newspaper",8],["Sign",8,"road sign"],["Dictionary",6],["Letter",6],["Poster",4],["Crossword",3],["Text message",3,"text"],["Tombstone",.4,"gravestone","headstone"]]),
P("k12","R.2","Riddle: What runs but never walks?","Mascara",[
  ["River",25,"water","stream"],["Nose",15,"runny nose"],["Tap",8,"faucet"],["Time",6],["Clock",4],["Engine",4,"car","motor"],["Fridge",3,"refrigerator"],["Computer program",3,"program","software"],["Paint",2],["Tights",2,"stockings"],["Mascara",.4]]),
P("k13","R.2","Riddle: What has a mouth but never eats?","Estuary",[
  ["River",40],["Cave",8],["Bottle",6],["Jar",6],["Volcano",4],["Puppet",3],["Bag",3],["Tunnel",2],["Estuary",.4]]),
P("k14","R.2","Riddle: What has a bed but never sleeps?","Oyster bed",[
  ["River",60,"stream"],["Garden",10,"flower bed"],["Sea",8,"ocean","seabed"],["Truck",3,"pickup truck"],["Oyster bed",.4,"oysters"]]),
P("k15","R.2","Riddle: What can you catch but not throw?","Someone's eye",[
  ["A cold",40,"cold","the flu","flu","illness"],["Your breath",15,"breath"],["A bus or train",10,"bus","train"],["Fire",4],["Sleep",4,"some sleep"],["Sight of something",4,"sight","a glimpse"],["Feelings",2,"a vibe"],["Someone's eye",.4,"eye"]]),
P("k16","R.2","Riddle: What goes up but never comes down?","Entropy",[
  ["Your age",50,"age"],["Prices",8,"inflation","the cost of living"],["Height (as you grow)",4,"height"],["Smoke",3],["Rent",3],["Entropy",.4]]),
P("k17","R.2","Name a palindrome (a word that reads the same backwards).","Tattarrattat",[
  ["Racecar",25,"race car"],["Level",15],["Kayak",10],["Radar",10],["Madam",8],["Dad",8],["Mum",6],["Mom",6],["Noon",6],["Wow",5],["Civic",4],["Eye",4],["Refer",3],["Anna",3],["Bob",3],["Pop",3],
  ["Rotor",2],["Stats",2],["Deed",2],["Peep",2],["Solos",1],["Sagas",1],["Tenet",1],["Minim",1],["Redder",1],["Repaper",1],["Reviver",1],["Rotator",1],["Gag",1],["Nun",1],["Tot",1],["Did",1],["Pip",1],["Ewe",1],["Gig",1],["Sees",1],["Toot",1],["Hannah",1],["Otto",1],
  ["Tattarrattat",.4]]),
P("k18","R.2","Name something that has a bark.","Barque (a sailing ship)",[
  ["Dog",30],["Tree",30],["Seal",6],["Sea lion",3],["Fox",3],["Deer",2],["Coyote",2],["Wolf",2],["Barque (a sailing ship)",.4,"barque","bark ship"]]),
P("k19","R.2","Riddle: What has a head and a tail but no body?","Musical note",[
  ["Coin",60,"penny"],["Comet",6],["Kite",3],["Musical note",.4,"note"]]),
P("k06","R.2","Riddle: What can fill a room but takes up no space?","An idea",[
  ["Light",45],["Sound",15,"noise"],["Darkness",8,"dark"],["Smell",6,"scent"],["Music",4],["Laughter",4],["Silence",3],["An idea",.4,"idea"]],
  [[["air","water","gas","furniture","people"],"That takes up space!"]]),
/* ---------- Movies and TV ---------- */
P("k20","M.1","Name a Pixar film.","The Good Dinosaur",[
  ["Toy Story",25,"toy story 2","toy story 3","toy story 4","toy story 5"],["Finding Nemo",15,"finding dory"],["Inside Out",12,"inside out 2"],["Cars",12,"cars 2","cars 3"],["Up",10],["Monsters, Inc.",10,"monsters inc","monsters university"],
  ["Coco",8],["The Incredibles",8,"incredibles","incredibles 2"],["Ratatouille",6],["WALL-E",6,"wall e"],["Brave",4],["Soul",4],["Luca",4],["Turning Red",3],["Elemental",3],["A Bug's Life",3,"a bugs life"],
  ["Onward",2],["Lightyear",2],["Elio",1],["Hoppers",1],["The Good Dinosaur",.4]],
  [[["shrek","frozen","moana","madagascar","despicable me","kung fu panda","encanto","zootopia"],"Animated, but not made by Pixar."]]),
P("k21","M.1","Name a Disney princess (or queen).","Kida",[
  ["Elsa",15],["Cinderella",15],["Ariel",12],["Belle",12],["Rapunzel",10],["Moana",10],["Jasmine",8],["Snow White",8],["Mulan",8],["Aurora",6,"sleeping beauty"],["Anna",6],["Tiana",6],
  ["Pocahontas",4],["Merida",4],["Raya",3],["Asha",1],["Kida",.4]]),
P("k22","M.1","Name an anime (series or film).","Mushishi",[
  ["Naruto",15,"naruto shippuden"],["One Piece",15],["Attack on Titan",12,"shingeki no kyojin"],["Dragon Ball",12,"dragon ball z","dbz"],["Demon Slayer",10,"kimetsu no yaiba"],["Jujutsu Kaisen",8,"jjk"],["Death Note",8],
  ["Pokémon",8,"pokemon"],["My Hero Academia",6,"mha"],["Spirited Away",6],["One Punch Man",4],["My Neighbor Totoro",4,"totoro"],["Sailor Moon",4],["Fullmetal Alchemist",4,"fma"],["Hunter x Hunter",3],
  ["Chainsaw Man",3],["Spy x Family",3],["Bleach",3],["Neon Genesis Evangelion",3,"evangelion"],["Your Name",3],["Tokyo Ghoul",3],["Haikyu!!",3,"haikyuu"],["Solo Leveling",3],["Frieren",2],["Cowboy Bebop",2],["Akira",2],
  ["Princess Mononoke",2],["Howl's Moving Castle",2],["Mob Psycho 100",2],["Steins;Gate",1,"steins gate"],["Mushishi",.4]]),
P("k23","M.1","Name a cartoon character.","Courage the Cowardly Dog",[
  ["SpongeBob",15,"spongebob squarepants"],["Mickey Mouse",15,"mickey"],["Homer Simpson",12,"homer"],["Bugs Bunny",10],["Scooby-Doo",8,"scooby"],["Tom and Jerry",8,"tom","jerry"],["Shrek",8],["Bart Simpson",6,"bart"],
  ["Peppa Pig",6,"peppa"],["Patrick Star",4,"patrick"],["Garfield",4],["Donald Duck",4],["Pikachu",4],["Snoopy",4],["Popeye",3],["Doraemon",3],["Bluey",3],["Rick Sanchez",3,"rick and morty"],["Stewie Griffin",2,"stewie"],
  ["Daffy Duck",2],["Winnie the Pooh",2,"pooh"],["Courage the Cowardly Dog",.4,"courage"]]),
P("k24","M.2","Name a Marvel superhero.","Squirrel Girl",[
  ["Spider-Man",20,"spiderman","peter parker","miles morales"],["Iron Man",18,"tony stark"],["Captain America",12,"steve rogers"],["Thor",12],["Hulk",10,"the hulk","bruce banner"],["Black Panther",8],["Black Widow",6],
  ["Doctor Strange",6],["Wolverine",6],["Deadpool",6],["Ant-Man",4,"ant man"],["Hawkeye",4],["Scarlet Witch",4,"wanda"],["Captain Marvel",4],["Groot",3],["Star-Lord",3,"star lord"],["Vision",2],["Falcon",2],
  ["Storm",2],["Daredevil",2],["Ms. Marvel",2,"ms marvel"],["Shang-Chi",2,"shang chi"],["Moon Knight",2],["Rocket",2,"rocket raccoon"],["Squirrel Girl",.4]],
  [[["batman","superman","wonder woman","the flash","aquaman"],"That's DC, not Marvel."],[["thanos","loki","venom","green goblin","ultron"],"That's a villain (or at least not a hero)!"]]),
P("k32","M.2","Name a DC Comics superhero.","Booster Gold",[
  ["Batman",25,"bruce wayne"],["Superman",25,"clark kent"],["Wonder Woman",15],["The Flash",10,"flash"],["Aquaman",8],["Green Lantern",6],["Robin",4],["Cyborg",3],["Supergirl",3],["Shazam",3],["Green Arrow",3],
  ["Batgirl",2],["Martian Manhunter",1],["Booster Gold",.4]],
  [[["spider man","spiderman","iron man","hulk","thor","captain america"],"That's Marvel, not DC."],[["joker","the joker","lex luthor","bane","darkseid","harley quinn"],"That's a villain!"]]),
P("k25","M.2","Name a Harry Potter character.","Kreacher",[
  ["Harry Potter",20,"harry"],["Hermione Granger",18,"hermione"],["Ron Weasley",15,"ron"],["Albus Dumbledore",12,"dumbledore"],["Lord Voldemort",10,"voldemort","tom riddle"],["Severus Snape",10,"snape"],["Rubeus Hagrid",8,"hagrid"],
  ["Draco Malfoy",6,"draco","malfoy"],["Dobby",5],["Sirius Black",4,"sirius"],["Neville Longbottom",4,"neville"],["Luna Lovegood",4,"luna"],["Minerva McGonagall",4,"mcgonagall"],["Ginny Weasley",3,"ginny"],
  ["Bellatrix Lestrange",3,"bellatrix"],["Fred and George Weasley",3,"fred","george","fred weasley","george weasley"],["Remus Lupin",2,"lupin"],["Dudley Dursley",2,"dudley"],["Hedwig",2],["Cedric Diggory",2,"cedric"],
  ["Dolores Umbridge",2,"umbridge"],["Gilderoy Lockhart",1,"lockhart"],["Kreacher",.4]]),
P("k26","M.2","Name a Star Wars character.","Admiral Ackbar",[
  ["Darth Vader",20,"vader"],["Luke Skywalker",18,"luke"],["Yoda",15],["Han Solo",12,"han"],["Princess Leia",10,"leia"],["Chewbacca",8,"chewie"],["R2-D2",8,"r2d2","r2 d2"],["Obi-Wan Kenobi",8,"obi wan","obi wan kenobi","kenobi"],
  ["C-3PO",6,"c3po","c 3po"],["Grogu (Baby Yoda)",6,"grogu","baby yoda"],["Anakin Skywalker",5,"anakin"],["Rey",4],["Kylo Ren",4],["Emperor Palpatine",4,"palpatine","darth sidious"],["Boba Fett",4],["Jabba the Hutt",3,"jabba"],
  ["Ahsoka Tano",3,"ahsoka"],["Padmé Amidala",2,"padme"],["Darth Maul",2,"maul"],["Mace Windu",2],["BB-8",2,"bb8"],["The Mandalorian",3,"mandalorian","din djarin"],["Admiral Ackbar",.4,"ackbar"]]),
P("k27","M.2","Name an actor who has played James Bond in an official film.","George Lazenby",[
  ["Sean Connery",25,"connery"],["Daniel Craig",25,"craig"],["Roger Moore",15,"moore"],["Pierce Brosnan",15,"brosnan"],["Timothy Dalton",6,"dalton"],["George Lazenby",.4,"lazenby"]]),
P("k28","M.3","Name a film that won the Oscar for Best Picture.","Marty",[
  ["Titanic",15],["The Godfather",10,"godfather","the godfather part ii","godfather part 2"],["Parasite",10],["Oppenheimer",10],["Forrest Gump",8],["Gladiator",6],["Schindler's List",6,"schindlers list"],
  ["Everything Everywhere All at Once",6,"everything everywhere"],["The Lord of the Rings: The Return of the King",6,"return of the king","lord of the rings"],["Casablanca",4],["Slumdog Millionaire",4],["The Silence of the Lambs",3,"silence of the lambs"],
  ["Braveheart",3],["Moonlight",3],["CODA",3],["Nomadland",3],["The Shape of Water",3,"shape of water"],["Gone with the Wind",2],["Ben-Hur",2,"ben hur"],["Rocky",2],["Green Book",2],["Argo",2],["Birdman",2],
  ["Anora",2],["The Departed",2,"departed"],["A Beautiful Mind",2],["American Beauty",2],["No Country for Old Men",2],["The King's Speech",2,"kings speech"],["12 Years a Slave",2,"twelve years a slave"],["Spotlight",2],
  ["The Sound of Music",2,"sound of music"],["One Flew Over the Cuckoo's Nest",1,"cuckoos nest"],["Rain Man",1],["Dances with Wolves",1],["Unforgiven",1],["The Artist",1],["Chicago",1],["Million Dollar Baby",1],["Crash",1],
  ["The Hurt Locker",1,"hurt locker"],["Shakespeare in Love",1],["The English Patient",1],["Amadeus",1],["Platoon",1],["Gandhi",1],["Annie Hall",1],["Kramer vs. Kramer",1,"kramer vs kramer"],["Driving Miss Daisy",1],
  ["The Deer Hunter",1],["Lawrence of Arabia",1],["West Side Story",1],["My Fair Lady",1],["The Sting",1],["Patton",1],["Midnight Cowboy",1],["Oliver!",1,"oliver"],["The French Connection",1],["In the Heat of the Night",1],
  ["The Apartment",1],["On the Waterfront",1],["All About Eve",1],["The Last Emperor",1],["Out of Africa",1],["Chariots of Fire",1],["Terms of Endearment",1],["Ordinary People",1],["The Bridge on the River Kwai",1,"bridge on the river kwai"],
  ["From Here to Eternity",1],["An American in Paris",1],["Around the World in 80 Days",1],["All Quiet on the Western Front",1],["It Happened One Night",1],["Rebecca",1],["Wings",1],["Marty",.4]],
  [[["avatar","the dark knight","star wars","jaws","inception","barbie","avengers endgame","pulp fiction","the shawshank redemption","shawshank redemption","la la land","citizen kane"],"A great film, but it didn't win Best Picture."]]),
P("k29","M.3","Name a Netflix original series.","BoJack Horseman",[
  ["Stranger Things",25],["Squid Game",18],["Wednesday",12],["The Crown",8],["Money Heist",8,"la casa de papel"],["Bridgerton",8],["The Witcher",5],["Black Mirror",4],["Ozark",4],["Narcos",4],["Sex Education",4],
  ["Orange Is the New Black",4,"orange is the new black"],["House of Cards",4],["Dark",4],["Adolescence",4],["Lupin",3],["Emily in Paris",3],["Arcane",3],["One Piece (live action)",3,"one piece"],["Outer Banks",3],
  ["Cobra Kai",3],["The Umbrella Academy",2,"umbrella academy"],["Never Have I Ever",2],["Ginny & Georgia",2,"ginny and georgia"],["Elite",2],["You",2],["BoJack Horseman",.4,"bojack"]],
  [[["breaking bad","friends","the office","game of thrones","the boys","the simpsons","the last of us"],"Popular, but it isn't a Netflix original."]]),
P("k30","M.3","Name a character from the TV show Friends.","Marcel the monkey",[
  ["Rachel",18,"rachel green"],["Ross",18,"ross geller"],["Joey",16,"joey tribbiani"],["Chandler",16,"chandler bing"],["Monica",15,"monica geller"],["Phoebe",15,"phoebe buffay"],["Gunther",3],["Janice",3],
  ["Mike Hannigan",1,"mike"],["Ben",1],["Carol",1],["Richard",1],["Emily",1],["Ursula",1],["Marcel the monkey",.4,"marcel"]]),
P("k31","M.3","Name a sitcom.","Arrested Development",[
  ["Friends",20],["The Office",15,"office"],["The Big Bang Theory",12,"big bang theory"],["How I Met Your Mother",10,"himym"],["Brooklyn Nine-Nine",8,"brooklyn 99","b99"],["Modern Family",8],["The Simpsons",6,"simpsons"],
  ["Seinfeld",6],["Parks and Recreation",6,"parks and rec"],["The Fresh Prince of Bel-Air",6,"fresh prince"],["Mr Bean",4,"mr. bean"],["Young Sheldon",3],["Two and a Half Men",3],["Abbott Elementary",3],["Schitt's Creek",2,"schitts creek"],
  ["Community",2],["Fawlty Towers",2],["Ted Lasso",2],["Arrested Development",.4]]),
/* ---------- Music ---------- */
P("k33","S.1","Name a member of The Beatles (at any time).","Pete Best",[
  ["John Lennon",30,"lennon","john"],["Paul McCartney",30,"mccartney","paul"],["Ringo Starr",20,"ringo"],["George Harrison",20,"harrison","george"],["Stuart Sutcliffe",1,"sutcliffe"],["Pete Best",.4,"best"]]),
P("k34","S.1","Name a K-pop group.","Mamamoo",[
  ["BTS",30,"bangtan boys"],["Blackpink",25],["Twice",8],["Stray Kids",8,"skz"],["EXO",6],["NewJeans",6,"new jeans"],["Seventeen",5],["Big Bang",4],["Red Velvet",4],["aespa",4],["Girls' Generation",3,"snsd"],
  ["(G)I-DLE",3,"gidle","g i dle"],["ITZY",3],["Le Sserafim",3,"lesserafim"],["ATEEZ",3],["TXT",3,"tomorrow x together"],["NCT",3,"nct 127","nct dream"],["IVE",3],["Enhypen",2],["Shinee",2],["Babymonster",2],["Katseye",1],["Mamamoo",.4]]),
P("k35","S.1","Name a rapper.","MF DOOM",[
  ["Eminem",20],["Drake",18],["Kanye West",12,"kanye","ye"],["Kendrick Lamar",12,"kendrick"],["Travis Scott",8],["Jay-Z",8,"jay z"],["Snoop Dogg",8,"snoop"],["Nicki Minaj",8],["Tupac",8,"2pac","tupac shakur"],
  ["The Notorious B.I.G.",6,"biggie","notorious big","biggie smalls"],["Cardi B",6],["50 Cent",6,"fifty cent"],["Lil Wayne",4],["J. Cole",4,"j cole"],["Post Malone",4],["Dr. Dre",4,"dr dre"],["Doja Cat",3],["Megan Thee Stallion",3],
  ["Stormzy",3],["Ice Spice",2],["Tyler, the Creator",2,"tyler the creator"],["Lil Nas X",2],["Future",2],["21 Savage",2],["Central Cee",2],["Missy Elliott",2],["Nas",2],["MF DOOM",.4,"mf doom","doom"]]),
P("k36","S.1","Name a solo singer who has had a US Billboard Hot 100 number one.","Lorde",[
  ["Taylor Swift",20],["Michael Jackson",12],["Beyoncé",10,"beyonce"],["Adele",10],["Ed Sheeran",10],["Justin Bieber",10],["Rihanna",10],["Ariana Grande",8],["Bruno Mars",8],["Billie Eilish",8],["The Weeknd",8,"weeknd"],
  ["Olivia Rodrigo",6],["Elvis Presley",6,"elvis"],["Madonna",6],["Harry Styles",6],["Lady Gaga",6],["Katy Perry",6],["Mariah Carey",6],["Whitney Houston",4],["Miley Cyrus",4],["Sabrina Carpenter",4],["Prince",3],
  ["Doja Cat",3],["Lizzo",2],["Lorde",.4]]),
P("k37","S.1","Name a rock band.","Rush",[
  ["Queen",15],["The Beatles",12,"beatles"],["Nirvana",10],["AC/DC",10,"acdc"],["Led Zeppelin",8],["The Rolling Stones",8,"rolling stones"],["Coldplay",8],["Guns N' Roses",8,"guns n roses","guns and roses"],["Linkin Park",8],
  ["Metallica",6],["Pink Floyd",6],["Arctic Monkeys",6],["Foo Fighters",5],["Green Day",5],["Red Hot Chili Peppers",5,"rhcp"],["Imagine Dragons",5],["U2",5],["Oasis",5],["Radiohead",4],["Muse",3],["Kiss",3],["The Who",3],
  ["Fleetwood Mac",3],["Bon Jovi",3],["Aerosmith",3],["The Killers",3],["Måneskin",2,"maneskin"],["Paramore",2],["Twenty One Pilots",2],["Rush",.4]]),
P("k38","S.2","Name a Taylor Swift album.","Taylor Swift (debut)",[
  ["1989",15],["Midnights",12],["Folklore",10],["Red",10],["Fearless",10],["Reputation",8],["Lover",8],["The Tortured Poets Department",8,"ttpd","tortured poets department"],["Speak Now",6],["Evermore",6],
  ["The Life of a Showgirl",6,"life of a showgirl"],["Taylor Swift (debut)",.4,"taylor swift","debut"]]),
P("k39","S.2","Name a Michael Jackson song.","Stranger in Moscow",[
  ["Thriller",20],["Billie Jean",20],["Beat It",15],["Smooth Criminal",10],["Man in the Mirror",8],["Black or White",6],["Bad",6],["Heal the World",4],["They Don't Care About Us",4],["Don't Stop 'Til You Get Enough",4,"dont stop til you get enough"],
  ["Rock with You",3],["Remember the Time",3],["Earth Song",3],["Human Nature",2],["You Rock My World",2],["The Way You Make Me Feel",2],["Leave Me Alone",1],["Dirty Diana",1],["Stranger in Moscow",.4]]),
P("k40","S.2","Name a Beatles song.","Tomorrow Never Knows",[
  ["Hey Jude",15],["Let It Be",15],["Yesterday",12],["Here Comes the Sun",12],["Yellow Submarine",10],["Come Together",8],["Help!",8,"help"],["All You Need Is Love",6],["Twist and Shout",6],["Love Me Do",4],
  ["A Hard Day's Night",4,"hard days night"],["Strawberry Fields Forever",4],["Penny Lane",4],["Eleanor Rigby",4],["I Want to Hold Your Hand",4],["Blackbird",3],["Something",2],["Revolution",2],["Ob-La-Di, Ob-La-Da",2,"obladi oblada"],
  ["While My Guitar Gently Weeps",2],["Lucy in the Sky with Diamonds",2],["Can't Buy Me Love",2],["Hello, Goodbye",1,"hello goodbye"],["Get Back",1],["Tomorrow Never Knows",.4]]),
P("k41","S.2","Name a song by Queen.","'39",[
  ["Bohemian Rhapsody",25],["We Will Rock You",18],["Don't Stop Me Now",15],["We Are the Champions",15],["Another One Bites the Dust",10],["Under Pressure",8],["I Want to Break Free",6],["Somebody to Love",5],
  ["Radio Ga Ga",4],["Killer Queen",4],["The Show Must Go On",4],["Who Wants to Live Forever",3],["Crazy Little Thing Called Love",3],["A Kind of Magic",2],["Bicycle Race",1],["Fat Bottomed Girls",1],["'39",.4,"39"]]),
P("k42","S.2","Name a Christmas song.","2000 Miles",[
  ["All I Want for Christmas Is You",25,"all i want for christmas"],["Jingle Bells",18],["Last Christmas",15],["Silent Night",10],["Rudolph the Red-Nosed Reindeer",8,"rudolph"],["Feliz Navidad",6],["Let It Snow",6],
  ["White Christmas",6],["Santa Claus Is Coming to Town",6],["We Wish You a Merry Christmas",6],["Rockin' Around the Christmas Tree",5,"rocking around the christmas tree"],["Jingle Bell Rock",5],["Deck the Halls",4],
  ["Frosty the Snowman",3],["Fairytale of New York",3],["O Holy Night",3],["Little Drummer Boy",3],["Mistletoe",2],["Driving Home for Christmas",2],["Happy Xmas (War Is Over)",2,"happy xmas"],["Do They Know It's Christmas?",2,"do they know its christmas"],
  ["Santa Tell Me",2],["Underneath the Tree",2],["2000 Miles",.4,"two thousand miles"]]),
P("k43","S.3","Name a musical instrument.","Theremin",[
  ["Guitar",25],["Piano",25],["Drums",15,"drum kit"],["Violin",12,"fiddle"],["Flute",8],["Trumpet",6],["Saxophone",6,"sax"],["Cello",4],["Clarinet",4],["Bass guitar",4,"bass"],["Harp",3],["Ukulele",3],["Trombone",3],
  ["Harmonica",2],["Accordion",2],["Xylophone",2],["Tuba",2],["Banjo",2],["Oboe",2],["Bagpipes",2],["Triangle",2],["Recorder",2],["Keyboard",2,"synthesiser","synth"],["Organ",1],["French horn",1,"horn"],["Viola",1],
  ["Double bass",1],["Bassoon",1],["Tambourine",1],["Maracas",1],["Sitar",1],["Didgeridoo",1],["Bongos",1],["Mandolin",1],["Theremin",.4]]),
P("k44","S.3","Name a music genre.","Vaporwave",[
  ["Pop",20],["Rock",18],["Hip hop / rap",18,"hip hop","rap"],["Jazz",10],["Classical",10],["Country",8],["EDM / electronic",8,"edm","electronic","dance music"],["R&B",6,"rnb","r and b"],["Metal",6,"heavy metal"],["Reggae",5],
  ["K-pop",5,"kpop"],["Blues",4],["Punk",4],["Indie",4],["Funk",3],["Soul",3],["Disco",3],["Techno",3],["House",3],["Reggaeton",3],["Afrobeats",3],["Folk",3],["Gospel",2],["Drill",2],["Lo-fi",2,"lofi"],["Opera",2],
  ["Grime",2],["Dubstep",2],["Trap",2],["Latin",2],["Ska",1],["Grunge",1],["Bossa nova",1],["Salsa",1],["Vaporwave",.4]]),
P("k45","S.3","Name a famous music festival.","Fuji Rock",[
  ["Coachella",25],["Glastonbury",20],["Tomorrowland",15],["Lollapalooza",10],["Woodstock",10],["Burning Man",6],["Reading and Leeds",5,"reading","leeds","reading festival"],["Rock in Rio",4],["Ultra",4,"ultra music festival"],
  ["Primavera Sound",3,"primavera"],["Download",3],["Rolling Loud",3],["Wireless",3],["Sziget",2],["Roskilde",2],["Creamfields",2],["Bonnaroo",2],["Fuji Rock",.4]]),
P("k46","S.3","Name a famous DJ or electronic music act.","Aphex Twin",[
  ["Calvin Harris",15],["David Guetta",15],["Avicii",12],["Martin Garrix",10],["Marshmello",10],["Daft Punk",8],["Skrillex",6],["Tiësto",6,"tiesto"],["Alan Walker",6],["Kygo",5],["Deadmau5",4,"deadmau5","deadmaus"],
  ["The Chainsmokers",4,"chainsmokers"],["Swedish House Mafia",4],["Zedd",4],["Diplo",4],["Fred again..",3,"fred again"],["Armin van Buuren",3],["Peggy Gou",2],["Disclosure",2],["Fatboy Slim",2],["Aphex Twin",.4]]),
/* ---------- Games ---------- */
P("k47","V.1","Name one of the original 151 Pokémon (Generation I).","Tangela",[
  ["Pikachu",30],["Charizard",12],["Eevee",8],["Bulbasaur",8],["Charmander",8],["Squirtle",6],["Mewtwo",6],["Jigglypuff",5],["Snorlax",5],["Gengar",5],["Mew",4],["Meowth",4],["Psyduck",3],["Gyarados",3],["Magikarp",3],["Dragonite",3],
  ...many(.6,"Ivysaur","Venusaur","Charmeleon","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Raichu",
    "Sandshrew","Sandslash",["Nidoran","nidoran f","nidoran m"],"Nidorina","Nidoqueen","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth",
    "Diglett","Dugtrio","Persian","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel",
    "Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton",["Farfetch'd","farfetchd"],"Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Onix","Drowzee","Hypno",
    "Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Kangaskhan","Horsea","Seadra","Goldeen","Seaking",
    "Staryu","Starmie",["Mr. Mime","mr mime"],"Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Lapras","Ditto","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Articuno","Zapdos",
    "Moltres","Dratini","Dragonair"),
  ["Tangela",.4]],
  [[["lucario","greninja","sylveon","rayquaza","togepi","pichu","lugia","umbreon","espeon","garchomp","blaziken","totodile","cyndaquil","chikorita","mimikyu"],"A real Pokémon, but not one of the original 151."]]),
P("k48","V.1","Name a character from the Super Mario games.","Professor E. Gadd",[
  ["Mario",25],["Luigi",15],["Princess Peach",12,"peach"],["Bowser",12],["Yoshi",10],["Toad",6],["Wario",5],["Waluigi",4],["Princess Daisy",4,"daisy"],["Donkey Kong",4,"dk"],["Rosalina",3],["Bowser Jr.",3,"bowser jr"],
  ["Koopa Troopa",3,"koopa"],["Goomba",3],["Boo",3],["Shy Guy",2],["Toadette",2],["Birdo",2],["Lakitu",2],["Kamek",1],["Bob-omb",1,"bobomb"],["Chain Chomp",1],["Piranha Plant",1],["Diddy Kong",1],["Professor E. Gadd",.4,"e gadd","professor gadd"]]),
P("k49","V.1","Name a character from The Legend of Zelda.","Groose",[
  ["Link",30],["Princess Zelda",25,"zelda"],["Ganon / Ganondorf",18,"ganon","ganondorf","calamity ganon"],["Epona",5],["Navi",5],["Impa",3],["Midna",3],["Sheik",3],["Skull Kid",2],["Tingle",2],["Mipha",2],
  ["Daruk",1],["Revali",1],["Urbosa",1],["Purah",1],["Beedle",1],["Fi",1],["King Rhoam",1,"king of hyrule"],["Groose",.4]]),
P("k50","V.1","Name a Minecraft mob.","Mooshroom",[
  ["Creeper",25],["Zombie",15],["Skeleton",12],["Enderman",12],["Spider",8],["Villager",8],["Ender Dragon",8],["Pig",6],["Cow",6],["Chicken",4],["Sheep",4],["Wither",4],["Ghast",4],["Warden",4],["Blaze",3],
  ["Slime",3],["Iron Golem",3],["Witch",3],["Piglin",3],["Axolotl",3],["Wolf",3],["Cat",2],["Bee",2],["Phantom",2],["Shulker",2],["Allay",2],["Drowned",2],["Pillager",2],["Guardian",2],["Silverfish",2],["Horse",2],
  ["Fox",2],["Parrot",1],["Llama",1],["Panda",1],["Sniffer",1],["Strider",1],["Breeze",1],["Armadillo",1],["Mooshroom",.4]],
  [[["steve","alex","herobrine"],"That's a player character (or a legend), not a mob."]]),
P("k51","V.2","Name a video game console.","Virtual Boy",[
  ["PlayStation",25,"ps5","ps4","ps3","ps2","ps1","playstation 5","playstation 4"],["Xbox",20,"xbox series x","xbox one","xbox 360"],["Nintendo Switch",20,"switch","switch 2","nintendo switch 2"],["Wii",8,"nintendo wii"],
  ["Game Boy",6,"gameboy"],["Nintendo DS",5,"ds"],["NES",4,"nintendo entertainment system"],["Nintendo 3DS",3,"3ds"],["GameCube",3,"gamecube"],["Nintendo 64",3,"n64"],["SNES",3,"super nintendo"],["PSP",3],
  ["Sega Mega Drive / Genesis",3,"mega drive","sega genesis","genesis"],["Atari 2600",3,"atari"],["Steam Deck",3],["Game Boy Advance",2,"gba"],["Dreamcast",2,"sega dreamcast"],["Wii U",1],["PS Vita",1,"vita"],["Virtual Boy",.4]]),
P("k52","V.2","Name one of the best-selling video games of all time.","Diablo III",[
  ["Minecraft",25],["Grand Theft Auto V",15,"gta 5","gta v","gta"],["Tetris",10],["Fortnite",10],["Mario Kart 8",8,"mario kart","mario kart 8 deluxe"],["Call of Duty",8,"cod"],["Red Dead Redemption 2",6,"red dead redemption","rdr2"],
  ["Wii Sports",6],["Super Mario Bros.",6,"super mario bros","super mario"],["Roblox",6],["EA Sports FC / FIFA",6,"fifa","ea fc","ea sports fc"],["PUBG",5,"playerunknowns battlegrounds"],["Pokémon Red and Blue",4,"pokemon red","pokemon blue","pokemon"],
  ["Animal Crossing: New Horizons",4,"animal crossing"],["The Legend of Zelda: Breath of the Wild",4,"breath of the wild","botw","zelda"],["Terraria",3],["Elden Ring",3],["The Witcher 3",3,"witcher 3","the witcher"],["Among Us",3],
  ["Super Smash Bros. Ultimate",3,"smash bros","super smash bros"],["Stardew Valley",2],["Overwatch",2],["Diablo III",.4,"diablo 3","diablo"]]),
P("k53","V.2","Name an online multiplayer or battle royale game.","EVE Online",[
  ["Fortnite",25],["PUBG",12,"playerunknowns battlegrounds"],["Apex Legends",10,"apex"],["Call of Duty: Warzone",10,"warzone","call of duty"],["Among Us",8],["Roblox",8],["League of Legends",8,"lol","league"],["Valorant",8],
  ["Minecraft",6],["Counter-Strike",6,"cs2","csgo","counter strike"],["Overwatch",6],["Rocket League",6],["Dota 2",4,"dota"],["Free Fire",4],["Fall Guys",4],["World of Warcraft",4,"wow"],["Brawl Stars",4],["Clash Royale",4],
  ["Genshin Impact",3],["Marvel Rivals",3],["Rainbow Six Siege",3,"r6","rainbow six"],["Destiny 2",2,"destiny"],["Clash of Clans",2],["EVE Online",.4,"eve"]]),
P("k54","V.2","Name a video game company or studio.","Team Cherry",[
  ["Nintendo",20],["Sony",12,"playstation studios"],["Microsoft",10,"xbox game studios"],["EA",10,"electronic arts"],["Ubisoft",8],["Rockstar Games",8,"rockstar"],["Epic Games",8,"epic"],["Activision",6,"activision blizzard"],
  ["Valve",6],["Riot Games",6,"riot"],["Mojang",5],["Blizzard",4],["Bethesda",4],["Capcom",4],["Square Enix",4],["Sega",4],["Bandai Namco",3],["Konami",3],["FromSoftware",3,"from software"],["Naughty Dog",3],
  ["CD Projekt Red",3,"cd projekt"],["Insomniac Games",2,"insomniac"],["Bungie",2],["Supercell",2],["HoYoverse",2,"mihoyo"],["Tencent",2],["Roblox Corporation",1],["Atari",1],["Team Cherry",.4]]),
P("k55","V.3","Name a chess piece or chess term.","Zugzwang",[
  ["King",15],["Queen",15],["Pawn",12],["Checkmate",12,"mate"],["Knight",10,"horse"],["Bishop",10],["Rook",10,"castle"],["Check",6],["Castling",5],["Stalemate",5],["En passant",3],["Gambit",3],["Promotion",2],["Fork",2],
  ["Pin",1],["Opening",1],["Endgame",1],["Zugzwang",.4]]),
P("k56","V.3","Name a board game.","Mancala",[
  ["Monopoly",25],["Chess",15],["Scrabble",10],["Cluedo / Clue",8,"cluedo","clue"],["Snakes and Ladders",8,"chutes and ladders"],["Checkers / draughts",6,"checkers","draughts"],["Risk",6],["Catan",6,"settlers of catan"],
  ["Battleship",4],["Guess Who?",4,"guess who"],["Connect Four",4,"connect 4"],["Ludo",4],["Trivial Pursuit",4],["Go",3],["Backgammon",3],["Ticket to Ride",3],["Pictionary",3],["Operation",2],["Mouse Trap",2],["Carcassonne",2],
  ["Pandemic",2],["The Game of Life",2,"game of life","life"],["Sorry!",2,"sorry"],["Mancala",.4]]),
P("k57","V.3","Name a card game.","Belote",[
  ["Uno",25],["Poker",15],["Solitaire",10,"patience","klondike"],["Blackjack",10,"twenty one","21"],["Go Fish",8],["Snap",6],["Rummy",6,"gin rummy"],["Bridge",4],["Crazy Eights",3],["Hearts",3],["Spades",3],
  ["President",3,"scum"],["War",3],["Cheat",3,"bs","i doubt it"],["Exploding Kittens",3],["Magic: The Gathering",3,"magic the gathering","mtg"],["Old Maid",2],["Pokémon TCG",2,"pokemon cards"],["Canasta",2],["Cribbage",1],["Baccarat",1],
  ["Yu-Gi-Oh!",2,"yugioh"],["Belote",.4]]),
P("k58","V.3","Name a playground or party game.","British bulldog",[
  ["Hide and seek",18],["Tag",15,"tig","it","tag you're it"],["Musical chairs",10],["Simon says",10],["Truth or dare",6],["Charades",6],["Duck, duck, goose",6,"duck duck goose"],["Hopscotch",6],["Red light, green light",6,"red light green light","grandmother's footsteps"],
  ["Rock, paper, scissors",6,"rock paper scissors"],["Pin the tail on the donkey",4],["Pass the parcel",4],["Tug of war",4],["Marco Polo",3],["Musical statues",3],["Bingo",3],["Sleeping lions",2],["Two truths and a lie",2],["Hot potato",2],
  ["British bulldog",.4]]),
/* ---------- The world ---------- */
P("k59","W.1","Name an animal that lives in the wild in Australia.","Bilby",[
  ["Kangaroo",30],["Koala",25],["Platypus",8],["Wombat",6],["Emu",6],["Crocodile",5,"saltwater crocodile"],["Kookaburra",4],["Dingo",4],["Tasmanian devil",4],["Wallaby",4],["Echidna",3],["Quokka",3],["Cassowary",2],
  ["Funnel-web spider",2,"funnel web"],["Box jellyfish",2],["Great white shark",2],["Possum",2],["Cockatoo",2],["Sugar glider",1],["Taipan",1],["Frilled lizard",1],["Bilby",.4]],
  [[["kiwi","panda","lion","tiger","giraffe","penguin"],"Not native to Australia (or not in the wild there)."]]),
P("k60","W.1","Name an animal that can fly or glide but isn't a bird.","Colugo",[
  ["Bat",35],["Butterfly",10],["Bee",10],["Fly",10,"housefly"],["Dragonfly",6],["Mosquito",5],["Moth",4],["Wasp",4],["Flying squirrel",4],["Ladybird",3,"ladybug"],["Flying fish",3],["Beetle",2],["Locust",2],["Sugar glider",1],
  ["Pterosaur (extinct)",1,"pterosaur","pterodactyl"],["Colugo",.4,"flying lemur"]],
  [[["eagle","penguin","owl","parrot","pigeon","bird","ostrich"],"That's a bird!"]]),
P("k61","W.1","Name a dinosaur.","Microraptor",[
  ["Tyrannosaurus rex",30,"t rex","trex","tyrannosaurus"],["Velociraptor",15,"raptor"],["Triceratops",15],["Stegosaurus",10],["Brachiosaurus",8],["Diplodocus",6],["Spinosaurus",6],["Ankylosaurus",5],["Allosaurus",4],
  ["Iguanodon",3],["Parasaurolophus",3],["Brontosaurus",2],["Apatosaurus",2],["Pachycephalosaurus",2],["Gallimimus",2],["Carnotaurus",2],["Giganotosaurus",2],["Dilophosaurus",2],["Argentinosaurus",1],["Therizinosaurus",1],
  ["Compsognathus",1],["Archaeopteryx",1],["Baryonyx",1],["Microraptor",.4]],
  [[["pterodactyl","pteranodon","plesiosaur","mosasaurus","ichthyosaur","dimetrodon","mammoth"],"Not a dinosaur! It's a flying or marine reptile, an older relative, or a mammal."],[["indominus rex","indoraptor"],"That one only exists in Jurassic World."]]),
P("k62","W.1","Name a member of the cat family.","Sand cat",[
  ["Lion",25],["Tiger",25],["Cheetah",12],["Leopard",10],["Jaguar",8],["Panther",6,"black panther"],["Puma",5,"cougar","mountain lion"],["Lynx",4],["Snow leopard",4],["House cat",3,"cat","domestic cat"],["Ocelot",2],
  ["Bobcat",2],["Caracal",2],["Serval",2],["Clouded leopard",1],["Wildcat",1],["Sand cat",.4]]),
P("k63","W.2","Name one of the Seven Wonders (ancient or new).","Mausoleum at Halicarnassus",[
  ["Great Pyramid of Giza",25,"pyramids","pyramid of giza","pyramids of giza","great pyramid"],["Great Wall of China",18,"great wall"],["Taj Mahal",12],["Colosseum",10,"coliseum"],["Machu Picchu",8],["Petra",6],["Christ the Redeemer",6],
  ["Hanging Gardens of Babylon",6,"hanging gardens"],["Chichén Itzá",5,"chichen itza"],["Colossus of Rhodes",4],["Lighthouse of Alexandria",4],["Statue of Zeus at Olympia",2,"statue of zeus"],["Temple of Artemis",2],["Mausoleum at Halicarnassus",.4,"mausoleum"]],
  [[["eiffel tower","statue of liberty","stonehenge","big ben","angkor wat","sydney opera house"],"Famous, but not one of the Seven Wonders lists."]]),
P("k64","W.2","Name a country whose flag uses red, white and blue.","Nepal",[
  ["USA",20,"united states","america","us"],["United Kingdom",18,"uk","britain","great britain"],["France",18],["Russia",8],["Netherlands",8,"holland"],["Australia",6],["New Zealand",5],["Norway",4],["Iceland",3],["Thailand",3],
  ["Chile",3],["Cuba",3],["Czech Republic",3,"czechia"],["Slovakia",2],["Slovenia",2],["Serbia",2],["Croatia",2],["Panama",2],["Costa Rica",2],["Luxembourg",2],["Paraguay",2],["Philippines",2],["Malaysia",1],
  ["Haiti",1],["Dominican Republic",1],["Cambodia",1],["Laos",1],["Liberia",1],["Samoa",1],["Taiwan",1],["North Korea",1],["Fiji",.6],["Tuvalu",.6],["Cape Verde",.6],["Nepal",.4]],
  [[["italy","germany","japan","canada","ireland","spain","mexico","china","brazil"],"That flag doesn't use red, white and blue."]]),
P("k65","W.2","Name a capital city in Europe.","Vaduz",[
  ["Paris",20],["London",18],["Berlin",12],["Madrid",12],["Rome",12],["Amsterdam",6],["Lisbon",6],["Vienna",5],["Brussels",5],["Athens",5],["Dublin",5],["Prague",4],["Warsaw",4],["Stockholm",4],["Oslo",4],
  ["Copenhagen",4],["Moscow",4],["Helsinki",3],["Budapest",3],["Bern",3],["Kyiv",3,"kiev"],["Bucharest",2],["Sofia",2],["Belgrade",2],["Zagreb",2],["Reykjavík",2,"reykjavik"],["Edinburgh",1],["Cardiff",1],["Belfast",1],
  ["Ljubljana",1],["Bratislava",1],["Tallinn",1],["Riga",1],["Vilnius",1],["Luxembourg",1],["Valletta",1],["Monaco",1],["Andorra la Vella",1],["Tirana",1],["Skopje",1],["Sarajevo",1],["Podgorica",1],["Chișinău",1,"chisinau"],
  ["Minsk",1],["San Marino",1],["Vatican City",1,"vatican"],["Nicosia",1],["Pristina",.6],["Vaduz",.4]],
  [[["geneva","zurich","barcelona","milan","istanbul","munich","st petersburg","frankfurt","rotterdam","porto","krakow","venice","manchester"],"A big city, but not the capital."]]),
P("k66","W.2","Name a famous landmark in Paris.","Palais Garnier",[
  ["Eiffel Tower",30,"tour eiffel"],["The Louvre",15,"louvre"],["Arc de Triomphe",12],["Notre-Dame",12,"notre dame"],["Sacré-Cœur",6,"sacre coeur"],["Champs-Élysées",6,"champs elysees"],["Montmartre",3],["Moulin Rouge",4],
  ["Palace of Versailles",4,"versailles"],["Musée d'Orsay",3,"orsay"],["The Seine",3,"seine"],["Panthéon",2,"pantheon"],["Pompidou Centre",2,"centre pompidou","pompidou"],["Les Invalides",2,"invalides"],["Place de la Concorde",2],
  ["The Catacombs",2,"catacombs"],["Disneyland Paris",2],["Sainte-Chapelle",1],["Tuileries Garden",1,"tuileries"],["Palais Garnier",.4,"opera garnier","paris opera"]]),
P("k67","W.3","Name a planet or dwarf planet in our solar system.","Makemake",[
  ["Mars",20],["Jupiter",18],["Saturn",15],["Earth",12],["Venus",10],["Mercury",8],["Neptune",8],["Uranus",8],["Pluto",6],["Ceres",2],["Eris",1],["Haumea",1],["Makemake",.4]],
  [[["sun","the sun","moon","the moon"],"That's not a planet!"]]),
P("k68","W.3","Name a moon in our solar system.","Amalthea",[
  ["The Moon",20,"moon","luna"],["Titan",12],["Europa",10],["Io",8],["Ganymede",8],["Callisto",5],["Phobos",5],["Enceladus",5],["Deimos",4],["Triton",4],["Charon",3],["Mimas",2],["Miranda",2],["Oberon",2],["Titania",2],
  ["Rhea",1],["Iapetus",1],["Dione",1],["Tethys",1],["Hyperion",1],["Ariel",1],["Umbriel",1],["Proteus",1],["Nereid",1],["Amalthea",.4]]),
P("k69","W.3","Name a famous scientist.","Emmy Noether",[
  ["Albert Einstein",30,"einstein"],["Isaac Newton",25,"newton"],["Charles Darwin",12,"darwin"],["Marie Curie",12,"curie"],["Galileo",10,"galileo galilei"],["Nikola Tesla",8,"tesla"],["Stephen Hawking",8,"hawking"],
  ["Thomas Edison",6,"edison"],["Alan Turing",3,"turing"],["Ada Lovelace",3,"lovelace"],["Gregor Mendel",3,"mendel"],["Rosalind Franklin",3,"franklin"],["Louis Pasteur",3,"pasteur"],["Michael Faraday",3,"faraday"],
  ["Niels Bohr",3,"bohr"],["Archimedes",3],["Nicolaus Copernicus",3,"copernicus"],["J. Robert Oppenheimer",3,"oppenheimer"],["Johannes Kepler",2,"kepler"],["Richard Feynman",2,"feynman"],["Dmitri Mendeleev",2,"mendeleev"],
  ["John Dalton",2,"dalton"],["Ernest Rutherford",2,"rutherford"],["Edwin Hubble",2,"hubble"],["Carl Sagan",2,"sagan"],["Max Planck",1,"planck"],["James Clerk Maxwell",1,"maxwell"],["Antoine Lavoisier",1,"lavoisier"],
  ["Alexander Fleming",2,"fleming"],["Jane Goodall",2,"goodall"],["Emmy Noether",.4,"noether"]]),
P("k70","W.3","Name a chemical element.","Oganesson",[
  ["Oxygen",20],["Hydrogen",18],["Carbon",12],["Gold",10],["Iron",8],["Helium",8],["Nitrogen",8],["Sodium",5],["Silver",5],["Copper",4],["Calcium",4],["Uranium",3],["Neon",3],["Chlorine",3],["Lead",3],["Mercury",3],
  ["Zinc",3],["Aluminium",3,"aluminum"],["Potassium",3],["Magnesium",2],["Sulfur",2,"sulphur"],["Platinum",2],["Lithium",2],["Titanium",2],["Silicon",2],["Tin",2],
  ...many(.6,"Beryllium","Boron","Fluorine","Phosphorus","Argon","Scandium","Vanadium","Chromium","Manganese","Cobalt","Nickel","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium",
    "Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Cadmium","Indium","Antimony","Tellurium","Iodine","Xenon",["Caesium","cesium"],"Barium","Lanthanum","Cerium","Praseodymium","Neodymium",
    "Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Thallium","Bismuth","Polonium","Astatine",
    "Radon","Francium","Radium","Actinium","Thorium","Protactinium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium",
    "Seaborgium","Bohrium","Hassium","Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine"),
  ["Oganesson",.4]],
  [[["water","air","steel","bronze","brass","salt","plastic","diamond"],"That's a compound, a mixture or a form of an element, not an element itself."]]),
/* ---------- Food and sport ---------- */
P("k71","F.1","Name a pizza topping.","'Nduja",[
  ["Pepperoni",25],["Cheese / mozzarella",18,"cheese","mozzarella","extra cheese"],["Mushrooms",12,"mushroom"],["Pineapple",10],["Ham",8],["Olives",6],["Onions",5,"onion","red onion"],["Peppers",5,"pepper","bell peppers"],
  ["Sausage",4],["Chicken",4],["Bacon",4],["Tomato",4,"tomatoes"],["Jalapeños",3,"jalapenos"],["Anchovies",3],["Spinach",2],["Basil",2],["Sweetcorn",2,"corn"],["Beef",2,"ground beef","mince"],["Salami",2],["Chilli",2,"chili"],
  ["Garlic",1],["Artichoke",1],["Rocket",1,"arugula"],["Prosciutto",1],["Tuna",1],["Egg",1],["Pesto",1],["Feta",1],["BBQ sauce",1,"barbecue sauce"],["'Nduja",.4,"nduja"]]),
P("k72","F.1","Name a fruit.","Snake fruit (salak)",[
  ["Apple",20],["Banana",18],["Orange",12],["Strawberry",10],["Grapes",8,"grape"],["Mango",8],["Watermelon",6],["Pineapple",6],["Cherry",4,"cherries"],["Pear",4],["Peach",4],["Kiwi",4,"kiwi fruit"],["Lemon",3],["Blueberry",3,"blueberries"],
  ["Raspberry",2],["Plum",2],["Coconut",2],["Papaya",2],["Avocado",2],["Pomegranate",2],["Lime",2],["Apricot",1],["Fig",1],["Grapefruit",1],["Melon",1],["Passion fruit",1],["Lychee",1],["Dragon fruit",1],["Guava",1],
  ["Tomato",1],["Date",1],["Blackberry",1],["Cranberry",1],["Nectarine",1],["Persimmon",1],["Tangerine",1,"mandarin","satsuma"],["Clementine",1],["Durian",1],["Jackfruit",1],["Starfruit",1,"carambola"],["Plantain",1],
  ["Quince",.6],["Gooseberry",.6],["Kumquat",.6],["Mangosteen",.6],["Rambutan",.6],["Cantaloupe",.6],["Honeydew",.6],["Olive",.6],["Snake fruit (salak)",.4,"snake fruit","salak"]]),
P("k73","F.1","Name a fast-food chain.","Whataburger",[
  ["McDonald's",25,"mcdonalds","maccies"],["KFC",18,"kentucky fried chicken"],["Burger King",15],["Subway",10],["Domino's",8,"dominos"],["Pizza Hut",8],["Wendy's",6,"wendys"],["Taco Bell",6],["Five Guys",4],["Popeyes",4],
  ["Chick-fil-A",4,"chick fil a"],["Nando's",4,"nandos"],["Starbucks",4],["Tim Hortons",3],["Dunkin'",3,"dunkin donuts","dunkin"],["Chipotle",3],["In-N-Out",3,"in n out"],["Shake Shack",2],["Jollibee",2],["Greggs",2],
  ["Papa John's",2,"papa johns"],["Dairy Queen",1],["Arby's",1,"arbys"],["Sonic",1],["Jack in the Box",1],["Carl's Jr.",1,"carls jr"],["Wingstop",1],["Little Caesars",1],["Whataburger",.4]]),
P("k74","F.1","Name a type of pasta.","Strozzapreti",[
  ["Spaghetti",25],["Penne",15],["Macaroni",12],["Lasagne",10,"lasagna"],["Fusilli",8],["Ravioli",8],["Tagliatelle",6],["Linguine",5],["Fettuccine",5],["Farfalle",5,"bow ties","bowtie pasta"],["Rigatoni",4],["Tortellini",4],
  ["Gnocchi",3],["Cannelloni",2],["Conchiglie",2,"shells","pasta shells"],["Orzo",2],["Pappardelle",2],["Vermicelli",2],["Orecchiette",1],["Ziti",1],["Bucatini",1],["Capellini",1,"angel hair"],["Strozzapreti",.4]]),
P("k75","F.2","Name an Olympic sport (summer or winter).","Trampolining",[
  ["Athletics",15,"track and field","running","sprinting"],["Swimming",15],["Gymnastics",12],["Basketball",10],["Football",8,"soccer"],["Tennis",6],["Boxing",6],["Cycling",6],["Volleyball",5,"beach volleyball"],["Rowing",4],["Fencing",4],
  ["Judo",4],["Archery",4],["Diving",4],["Weightlifting",4],["Wrestling",4],["Skiing",4,"alpine skiing"],["Sailing",3],["Hockey",3,"field hockey"],["Taekwondo",3],["Skateboarding",3],["Surfing",3],["Table tennis",3,"ping pong"],
  ["Badminton",3],["Ice hockey",3],["Figure skating",3],["Snowboarding",3],["Curling",3],["Sport climbing",2,"climbing"],["Breaking",2,"breakdancing"],["Equestrian",2,"horse riding","show jumping","dressage"],["Golf",2],["Handball",2],
  ["Rugby sevens",2,"rugby"],["Triathlon",2],["Canoeing",2,"kayaking","canoe"],["Shooting",2],["Water polo",2],["Bobsleigh",2,"bobsled"],["Speed skating",2],["Modern pentathlon",1,"pentathlon"],["Biathlon",1],["Luge",1],["Skeleton",1],
  ["Cricket (LA 2028)",1,"cricket"],["Squash (LA 2028)",1,"squash"],["Lacrosse (LA 2028)",1,"lacrosse"],["Flag football (LA 2028)",1,"flag football"],["Trampolining",.4,"trampoline"]],
  [[["chess","darts","snooker","esports","bowling","netball"],"Not an Olympic sport."]]),
P("k76","F.2","Name a famous footballer (past or present).","Garrincha",[
  ["Lionel Messi",25,"messi"],["Cristiano Ronaldo",25,"ronaldo","cr7"],["Kylian Mbappé",12,"mbappe"],["Neymar",10],["Erling Haaland",8,"haaland"],["Pelé",8,"pele"],["Diego Maradona",8,"maradona"],["Mohamed Salah",6,"salah"],
  ["David Beckham",6,"beckham"],["Lamine Yamal",5,"yamal"],["Zinedine Zidane",5,"zidane"],["Ronaldinho",5],["Harry Kane",4,"kane"],["Jude Bellingham",4,"bellingham"],["Vinícius Júnior",4,"vinicius","vini jr"],["Robert Lewandowski",4,"lewandowski"],
  ["Kevin De Bruyne",4,"de bruyne"],["Luka Modrić",3,"modric"],["Thierry Henry",3,"henry"],["Zlatan Ibrahimović",3,"zlatan","ibrahimovic"],["Son Heung-min",3,"son"],["Karim Benzema",3,"benzema"],["Wayne Rooney",3,"rooney"],
  ["Ronaldo Nazário",2,"ronaldo nazario","r9"],["Johan Cruyff",2,"cruyff"],["Kaká",2,"kaka"],["Andrés Iniesta",2,"iniesta"],["Xavi",2],["Gianluigi Buffon",2,"buffon"],["Virgil van Dijk",2,"van dijk"],["Bukayo Saka",2,"saka"],
  ["Alexia Putellas",2,"putellas"],["Aitana Bonmatí",1,"bonmati"],["Marta",1],["Sam Kerr",1,"kerr"],["Megan Rapinoe",1,"rapinoe"],["Franz Beckenbauer",1,"beckenbauer"],["Garrincha",.4]]),
P("k77","F.2","Name a sport played with a ball.","Jai alai",[
  ["Football / soccer",25,"football","soccer"],["Basketball",18],["Tennis",12],["Cricket",8],["Rugby",8],["Baseball",8],["American football",6,"nfl"],["Golf",6],["Volleyball",6],["Hockey",4,"field hockey"],["Table tennis",4,"ping pong"],
  ["Netball",3],["Handball",3],["Bowling",3,"ten pin bowling"],["Snooker / pool",3,"snooker","pool","billiards"],["Water polo",2],["Squash",2],["Lacrosse",2],["Dodgeball",2],["Pickleball",2],["Padel",2],["Softball",1],
  ["Polo",1],["Croquet",1],["Rounders",1],["Gaelic football",1],["Hurling",1],["Sepak takraw",1],["Futsal",1],["Racquetball",1],["Pétanque / bocce",1,"petanque","bocce","boules"],["Jai alai",.4,"pelota"]],
  [[["badminton","ice hockey","curling","ultimate frisbee","frisbee","darts"],"That's played with a shuttlecock, puck, stone, disc or darts, not a ball."]]),
P("k78","F.2","Name a Formula 1 driver (past or present).","Jim Clark",[
  ["Lewis Hamilton",25,"hamilton"],["Max Verstappen",20,"verstappen"],["Michael Schumacher",12,"schumacher"],["Ayrton Senna",10,"senna"],["Fernando Alonso",6,"alonso"],["Charles Leclerc",6,"leclerc"],["Lando Norris",6,"norris"],
  ["Sebastian Vettel",5,"vettel"],["Kimi Räikkönen",4,"raikkonen"],["Carlos Sainz",3,"sainz"],["George Russell",3,"russell"],["Oscar Piastri",3,"piastri"],["Daniel Ricciardo",3,"ricciardo"],["Niki Lauda",3,"lauda"],
  ["Alain Prost",3,"prost"],["Nico Rosberg",2,"rosberg"],["Sergio Pérez",2,"perez","checo"],["Jenson Button",2,"button"],["Mika Häkkinen",1,"hakkinen"],["Kimi Antonelli",1,"antonelli"],["Pierre Gasly",1,"gasly"],
  ["Esteban Ocon",1,"ocon"],["Lance Stroll",1,"stroll"],["Valtteri Bottas",1,"bottas"],["Yuki Tsunoda",1,"tsunoda"],["Juan Manuel Fangio",1,"fangio"],["Jackie Stewart",1],["Nigel Mansell",1,"mansell"],["Damon Hill",1],["Jim Clark",.4]]),
];

/* ================= the climb ================= */
const BANDS = [
  {name:"The crash site",       zone:"The crash site",       from:0,  to:40,  hue:140, bg:["#0e1a22","#12202e"]},
  {name:"The countryside",      zone:"The countryside",      from:40, to:100, hue:160, bg:["#12202e","#162a42"]},
  {name:"The clouds",           zone:"The clouds",           from:100,to:170, hue:200, bg:["#162a42","#1d3560"]},
  {name:"The stratosphere",     zone:"The stratosphere",     from:170,to:250, hue:220, bg:["#1d3560","#0c1230"]},
  {name:"Low Earth orbit",      zone:"Low Earth orbit",      from:250,to:320, hue:190, bg:["#0c1230","#070a1c"]},
  {name:"The Moon",             zone:"The Moon",             from:320,to:390, hue:50,  bg:["#070a1c","#06081a"]},
  {name:"Interplanetary space", zone:"Interplanetary space", from:390,to:460, hue:280, bg:["#06081a","#0b0620"]},
  {name:"The planets",          zone:"Sun, Mars and Jupiter",from:460,to:530, hue:30,  bg:["#0b0620","#120820"]},
  {name:"The outer planets",    zone:"The outer planets",    from:530,to:600, hue:190, bg:["#120820","#080614"]},
  {name:"Interstellar space",   zone:"Interstellar space",   from:600,to:760, hue:300, bg:["#080614","#02020a"]},
];
const alt = p => Math.pow(10, p*16/700) - 1;                 // metres: 1 light-year at 700
const AU = 1.496e11, LY = 9.461e15;
function fmtAlt(p){
  const m = alt(p);
  if (m < 1000) return Math.round(m) + " m";
  if (m < 1e4) return (m/1000).toFixed(1) + " km";
  if (m < 1.5e10) return Math.round(m/1000).toLocaleString() + " km";
  if (m < 4.7e15){ const a = m/AU; return (a < 10 ? a.toFixed(2) : Math.round(a).toLocaleString()) + " AU"; }
  const l = m/LY;
  if (l < 1e6) return (l < 10 ? l.toFixed(2) : Math.round(l).toLocaleString()) + " ly";
  if (l < 1e9) return (l/1e6).toFixed(l < 1e7 ? 1 : 0) + " million ly";
  return (l/1e9).toFixed(l < 1e10 ? 1 : 0) + " billion ly";
}
const FACTS = [
  [-30,"engines damaged · repair by answering well"],[20,"the cows saw everything"],[60,"wind turbines reach about 150 m"],[96,"the tallest tree, Hyperion, is 116 m tall"],
  [140,"most clouds float below 12 km"],[173,"8.8 km · the top of Mount Everest"],[178,"airliners cruise at about 11 km"],[196,"weather balloons pop at about 35 km"],
  [219,"100 km · the Kármán line: space begins here"],[232,"auroras glow 100 to 300 km up"],[245,"408 km · the International Space Station"],[270,"about 10,000 active satellites orbit Earth"],
  [320,"20,200 km · GPS satellites"],[331,"35,786 km · geostationary orbit"],[376,"384,400 km · the Moon"],[420,"light takes 1.3 seconds to reach the Moon"],
  [465,"Venus can come within 0.28 AU of Earth"],[489,"1 AU · the distance from Earth to the Sun"],[497,"Mars"],[520,"Jupiter: bigger than all the other planets combined"],
  [532,"Saturn: its rings are mostly ice"],[545,"Uranus spins on its side"],[554,"Neptune"],[559,"Pluto"],[586,"Voyager 1, the farthest spacecraft, is about 170 AU away"],
  [633,"the Oort cloud: a shell of icy comets"],[699,"1 light-year"],[726,"Proxima Centauri, the nearest star: 4.2 light-years"],[740,"Sirius, the brightest star in the night sky"],
  [760,"Vega, 25 light-years away"],[819,"Betelgeuse, a red supergiant"],[836,"the Orion Nebula, where stars are born"],[892,"the centre of the Milky Way"],[918,"the Milky Way is about 100,000 light-years across"],
  [979,"the Andromeda Galaxy, 2.5 million light-years away"],[1037,"the Virgo Cluster of galaxies"],[1100,"there are more galaxies than grains of sand on a beach"],[1166,"the edge of the observable universe"],
];
/* things that stand on the farm, drawn so they continue across the start band and the first band */
function farm(g){
  const tree = (x, h, k) => `<svg x="${x}%" y="${g}" overflow="visible"><rect x="-5" y="${-h*.35}" width="10" height="${h*.35}" fill="#1a1208"/><circle cx="0" cy="${-h*.55}" r="${h*.28}" fill="hsl(${130+k*8} 30% 14%)"/><circle cx="${-h*.14}" cy="${-h*.42}" r="${h*.2}" fill="hsl(${135+k*8} 30% 12%)"/><circle cx="${h*.15}" cy="${-h*.44}" r="${h*.2}" fill="hsl(${125+k*8} 30% 16%)"/></svg>`;
  return tree(5,260,0) + tree(37,200,1) + tree(64,230,2) + tree(95,280,3)
    + `<svg x="16%" y="${g}" overflow="visible"><rect x="-60" y="-120" width="120" height="120" fill="#4a1a14"/><path d="M-70 -120 L0 -180 L70 -120Z" fill="#2a0e0a"/><rect x="-20" y="-70" width="40" height="70" fill="#1a0806"/><rect x="-14" y="-104" width="28" height="20" fill="#ffd27a" opacity=".85"/></svg>`
    + `<svg x="26%" y="${g}" overflow="visible"><rect x="-18" y="-220" width="36" height="220" fill="#5a6470"/><ellipse cx="0" cy="-220" rx="18" ry="10" fill="#7a8490"/></svg>`
    + `<svg x="84%" y="${g}" overflow="visible"><path d="M-10 0 L-4 -300 H4 L10 0Z" fill="#c8ccd4"/><g class="vspin" style="transform-origin:0 -300px;animation-duration:7s">${[0,120,240].map(a=>`<path d="M0 -300 l-4 -110 l8 0z" fill="#e8ecf4" transform="rotate(${a} 0 -300)"/>`).join("")}</g><circle cx="0" cy="-300" r="6" fill="#9aa2ae"/></svg>`;
}
function stars(n, k, seed, cls = true){ const r = srand(seed); let s = ""; for (let i=0; i<k; i++) s += `<circle cx="${f1(r()*100)}%" cy="${f1(r()*n)}" r="${f1(.5+r()*1.5)}" fill="#fff" opacity="${f1(.3+r()*.7)}" ${cls && r()<.25 ? `class="blink" style="animation-delay:${f1(r()*3)}s"` : ""}/>`; return s; }
const at = (x, y, inner) => `<svg x="${x}%" y="${y}" overflow="visible">${inner}</svg>`;
function scene(i, n){
  const r = srand(1201 + i*41); let s = "";
  const y = p => (BANDS[i].to - p) * 14;                       // height of a point inside this band
  switch(i){
    case 0: s += farm(n + 165) + Array.from({length:22},()=>`<circle cx="${f1(r()*100)}%" cy="${f1(n*.4+r()*n*.6)}" r="2" fill="#d8ff7a" class="blink" style="animation-delay:${f1(r()*2)}s"/>`).join("") + stars(n, 30, 7); break;
    case 1: s += stars(n, 50, 8) + [12,30,72].map((x,k)=>at(x, n, `<path d="M-6 0 L-2 -${260+k*60} H2 L6 0Z" fill="#9aa2ae"/><g class="vspin" style="transform-origin:0 -${260+k*60}px;animation-duration:${5+k}s">${[0,120,240].map(a=>`<path d="M0 -${260+k*60} l-3 -90 l6 0z" fill="#d8dce4" transform="rotate(${a} 0 -${260+k*60})"/>`).join("")}</g><circle cx="0" cy="-${260+k*60}" r="4" fill="#ff5a4a" class="blink"/>`)).join("")
      + Array.from({length:8},()=>at(f1(r()*90), f1(r()*n*.6), `<path class="fly" style="animation-delay:-${f1(r()*9)}s" d="M0 0 q6 -6 12 0 q6 -6 12 0" stroke="#0a0f18" stroke-width="2.5" fill="none"/>`)).join(""); break;
    case 2: s += stars(n, 30, 9) + Array.from({length:9},(_,k)=>at(f1(r()*100), f1(60+k*(n/9)), `<g class="dx" style="animation-delay:-${f1(r()*16)}s"><ellipse rx="${f1(90+r()*80)}" ry="26" fill="#c8d4ea" opacity=".22"/><ellipse cx="30" cy="-12" rx="${f1(60+r()*40)}" ry="22" fill="#dfe8f6" opacity=".22"/></g>`)).join("")
      + at(18, f1(n*.35), `<g class="fl" style="animation-duration:5s"><path d="M0 0 a26 30 0 1 1 .1 0z" fill="#e0533a"/><path d="M-26 -28 q26 12 52 0" stroke="#ffd27a" stroke-width="5" fill="none"/><path d="M-10 0 l4 22 h12 l4 -22" stroke="#5a3a1a" stroke-width="2" fill="none"/><rect x="-7" y="22" width="14" height="10" fill="#8a5a2a"/></g>`)
      + at(76, f1(n*.2), `<g class="fly"><path d="M-40 0 h70 l14 -6 h8 l-8 10 h-84z" fill="#c8ccd4"/><path d="M-6 0 l-16 14 h10 l20 -14z" fill="#9aa2ae"/><circle cx="-36" cy="-1" r="2" fill="#ff5a4a" class="blink"/></g>`); break;
    case 3: s += stars(n, 90, 10) + at(70, y(175), `<path d="M-30 0 h50 l10 -4 h6 l-6 8 h-60z" fill="#c8ccd4" opacity=".7"/>`) + at(30, y(196), `<g class="fl" style="animation-duration:5s"><circle r="16" fill="#f2f2f2" opacity=".85"/><path d="M0 16 v30" stroke="#ddd"/><rect x="-4" y="46" width="8" height="8" fill="#aaa"/></g>`)
      + `<path d="M0 ${y(219)} H${4000}" stroke="#5dffb0" stroke-dasharray="6 10" opacity=".5"/>`
      + Array.from({length:5},(_,k)=>`<rect x="${10+k*18}%" y="${f1(y(240))}" width="10%" height="${f1(y(219)-y(240))}" fill="url(#gkAur)" opacity=".5" class="blink" style="animation-duration:${3+k}s"/>`).join("")
      + `<defs><linearGradient id="gkAur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b07aff" stop-opacity="0"/><stop offset=".5" stop-color="#5dffb0"/><stop offset="1" stop-color="#5dffb0" stop-opacity="0"/></linearGradient></defs>`
      + at(62, y(245), `<rect x="-40" y="-3" width="80" height="6" fill="#c8ccd4"/><rect x="-36" y="-20" width="12" height="40" fill="#3a6aa8"/><rect x="-18" y="-20" width="12" height="40" fill="#3a6aa8"/><rect x="6" y="-20" width="12" height="40" fill="#3a6aa8"/><rect x="24" y="-20" width="12" height="40" fill="#3a6aa8"/><rect x="-8" y="-8" width="16" height="16" fill="#e8ecf4"/>`); break;
    case 4: s += stars(n, 120, 11) + `<ellipse cx="50%" cy="${n + 1700}" rx="2400" ry="1800" fill="#1d4a8a"/><ellipse cx="50%" cy="${n + 1700}" rx="2400" ry="1800" fill="none" stroke="#7ac8ff" stroke-width="10" opacity=".5"/>`
      + Array.from({length:6},(_,k)=>at(f1(10+r()*80), f1(40+k*(n/6)), `<g class="fly" style="animation-delay:-${f1(r()*9)}s;animation-duration:${f1(10+r()*8)}s"><rect x="-14" y="-6" width="28" height="12" fill="#d8b24a"/><rect x="-44" y="-4" width="28" height="8" fill="#3a6aa8"/><rect x="16" y="-4" width="28" height="8" fill="#3a6aa8"/><circle r="3" fill="#ff5a4a" class="blink"/></g>`)).join(""); break;
    case 5: s += stars(n, 140, 12) + at(66, y(376), `<circle r="120" fill="#c8c4bc"/><circle cx="-40" cy="-30" r="22" fill="#aaa69e"/><circle cx="30" cy="40" r="30" fill="#b4b0a8"/><circle cx="50" cy="-50" r="14" fill="#aaa69e"/><circle cx="-60" cy="50" r="12" fill="#b4b0a8"/>`)
      + at(28, y(331), `<rect x="-10" y="-8" width="20" height="16" fill="#d8b24a"/><rect x="-36" y="-5" width="24" height="10" fill="#3a6aa8"/><rect x="12" y="-5" width="24" height="10" fill="#3a6aa8"/>`); break;
    case 6: s += stars(n, 150, 13) + Array.from({length:26},()=>at(f1(r()*100), f1(r()*n), `<g class="spin" style="animation-duration:${f1(8+r()*14)}s"><ellipse rx="${f1(4+r()*10)}" ry="${f1(3+r()*7)}" fill="#6a5a4a" transform="rotate(${f1(r()*180)})"/></g>`)).join("")
      + at(30, f1(n*.3), `<g class="fly" style="animation-duration:14s"><path d="M0 0 l160 -70" stroke="#9fe0ff" stroke-width="3" opacity=".5"/><circle r="8" fill="#e8f8ff"/></g>`) + at(78, y(465), `<circle r="26" fill="#e8c88a"/>`); break;
    case 7: s += stars(n, 150, 14) + at(50, y(489), `<circle class="pulse" r="150" fill="#ffd25a" opacity=".25"/><circle r="110" fill="#ffc23a"/><circle r="110" fill="#ffe58a" opacity=".5" class="blink"/>`)
      + at(24, y(497), `<circle r="24" fill="#c8583a"/><circle cx="-6" cy="-8" r="6" fill="#a8482a"/>`)
      + at(74, y(520), `<circle r="70" fill="#d8b48a"/><path d="M-68 -20 h136 M-70 0 h140 M-66 22 h132" stroke="#a8784a" stroke-width="8"/><ellipse cx="20" cy="18" rx="14" ry="9" fill="#c8583a"/>`); break;
    case 8: s += stars(n, 160, 15) + at(28, y(532), `<ellipse rx="110" ry="26" fill="none" stroke="#e8d8a8" stroke-width="10" opacity=".8"/><circle r="56" fill="#e8d0a0"/><path d="M-110 0 a110 26 0 0 0 220 0" fill="none" stroke="#e8d8a8" stroke-width="10" opacity=".8"/>`)
      + at(72, y(545), `<circle r="40" fill="#9fe0e8"/><ellipse rx="6" ry="60" fill="none" stroke="#bfeff4" stroke-width="2"/>`) + at(36, y(554), `<circle r="38" fill="#3a6ae8"/>`) + at(64, y(559), `<circle r="12" fill="#d8c0a8"/>`)
      + at(46, y(586), `<rect x="-6" y="-6" width="12" height="12" fill="#ddd"/><circle cx="0" cy="-16" r="12" fill="none" stroke="#ddd" stroke-width="3"/><path d="M6 0 l30 10 M-6 0 l-24 18" stroke="#bbb" stroke-width="2"/>`); break;
    case 9: s += stars(n, 260, 16 + n) + Array.from({length:4},(_,k)=>at(f1(10+r()*80), f1(r()*n), `<g class="pulse" style="animation-duration:${f1(5+r()*4)}s"><ellipse rx="${f1(70+r()*90)}" ry="${f1(30+r()*40)}" fill="hsl(${f1(260+r()*100)} 70% 55%)" opacity=".16" transform="rotate(${f1(r()*180)})"/></g>`)).join("")
      + Array.from({length:3},()=>at(f1(10+r()*80), f1(r()*n), `<g class="spin" style="animation-duration:${f1(40+r()*30)}s"><g transform="rotate(${f1(r()*180)})"><ellipse rx="40" ry="12" fill="#e8d8ff" opacity=".35"/><circle r="6" fill="#fff6e8"/><path d="M0 0 q30 -20 50 4 M0 0 q-30 20 -50 -4" stroke="#d8c8ff" stroke-width="3" fill="none" opacity=".5"/></g></g>`)).join("")
      + Array.from({length:5},()=>at(f1(r()*100), f1(r()*n), `<g class="fly" style="animation-delay:-${f1(r()*9)}s"><path d="M0 0 l90 40" stroke="#bfe8ff" stroke-width="2" opacity=".5"/><circle r="4" fill="#fff"/></g>`)).join(""); break;
  }
  return `<svg width="100%" height="${n}" aria-hidden="true">${s}</svg>`;
}
/* the UFO: broken at the start, fully repaired and glowing by the time it reaches deep space */
function avatar(level, hue){
  const lv = Math.max(0, Math.min(10, level)), tilt = lv === 0 ? -18 : lv === 1 ? -9 : lv === 2 ? -4 : 0;
  const on = k => lv >= 2 || (lv === 1 && k % 2 === 0);
  const lights = [-22,-11,0,11,22].map((x,k)=>`<circle cx="${x}" cy="7" r="3" fill="${on(k) ? `hsl(${(hue + k*40) % 360} 95% 65%)` : "#3a4048"}" ${on(k) ? `class="blink" style="animation-delay:${k*.2}s;animation-duration:1.2s"` : ""}/>`).join("");
  const beam = lv >= 6 ? `<path class="av-beam" d="M-12 12 L-26 40 H26 L12 12Z" fill="hsl(${hue} 95% 70%)" opacity=".28"/>` : "";
  const smoke = lv <= 1 ? `<g class="drift" style="animation-duration:2.4s"><circle cx="16" cy="-24" r="7" fill="#5a5e66" opacity=".7"/><circle cx="22" cy="-32" r="5" fill="#6a6e76" opacity=".55"/><circle cx="26" cy="-38" r="3.5" fill="#7a7e86" opacity=".4"/></g>` : "";
  const sparks = lv === 0 ? `<path d="M-26 0 l-6 -4 M-26 2 l-7 2" stroke="#ffd25a" stroke-width="1.6" class="blink" style="animation-duration:.6s"/>` : "";
  const crack = lv <= 1 ? `<path d="M-4 -14 l3 5 l-3 4 l4 4" stroke="#1a2a30" stroke-width="1.4" fill="none"/>` : "";
  const alien = lv >= 3 ? `<ellipse cx="0" cy="-6" rx="4.5" ry="5.5" fill="#7aff9a"/><ellipse cx="-1.8" cy="-7" rx="1.3" ry="2" fill="#0a1a10"/><ellipse cx="1.8" cy="-7" rx="1.3" ry="2" fill="#0a1a10"/>` : "";
  const ring = lv >= 9 ? `<ellipse cx="0" cy="6" rx="36" ry="12" fill="none" stroke="hsl(${hue} 95% 70%)" stroke-width="1.5" opacity=".7" class="blink"/>` : "";
  const s = `${beam}${smoke}<g class="${lv >= 2 ? "av-hover" : ""}"><g transform="rotate(${tilt})">${ring}<path d="M-14 0 a14 14 0 0 1 28 0z" fill="hsl(${hue} 60% ${lv >= 3 ? 70 : 40}% / ${lv >= 3 ? .55 : .35})" stroke="#bfe8ff" stroke-width="1.5"/>${alien}${crack}
    <ellipse cx="0" cy="5" rx="31" ry="10" fill="#8a94a4" stroke="#d8e0ea" stroke-width="1.5"/><ellipse cx="0" cy="2" rx="22" ry="4" fill="#b8c2d0"/>${lights}${sparks}</g></g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem") return W(200,104,`<g transform="translate(100 52)"><ellipse rx="80" ry="34" fill="${c}" opacity=".18"/>${[0,1,2,3].map(k=>`<path d="M0 0 C${20+k*8} -${10+k*6} ${48+k*6} ${6+k*4} ${60+k*6} ${22+k*2}" stroke="${c}" stroke-width="${5-k}" fill="none" opacity="${1-k*.18}" transform="rotate(${k*90})"/>`).join("")}<circle r="10" fill="#fff6e8"/>${[[-70,-30],[-40,34],[60,-36],[78,20],[-84,8],[30,40],[8,-44]].map(([x,y],k)=>`<circle cx="${x}" cy="${y}" r="${1+k%3*.6}" fill="#fff" class="blink" style="animation-delay:${k*.3}s"/>`).join("")}</g>`);
  if (t === "rootkit") return W(190,100,`${Array.from({length:14},(_,k)=>`<path d="M95 50 L${f1(95+Math.cos(k/14*Math.PI*2)*90)} ${f1(50+Math.sin(k/14*Math.PI*2)*46)}" stroke="${c}" stroke-width="2" opacity=".7"/>`).join("")}<circle cx="95" cy="50" r="12" fill="#fff"/>`);
  if (t === "trojan") return W(190,100,`<ellipse cx="95" cy="52" rx="80" ry="16" fill="none" stroke="${c}" stroke-width="6"/><circle cx="95" cy="52" r="34" fill="${c}"/><path d="M15 52 a80 16 0 0 0 160 0" fill="none" stroke="${c}" stroke-width="6"/><path d="M66 40 h58 M62 56 h66" stroke="#fff" stroke-width="4" opacity=".3"/>`);
  if (t === "adware") return W(170,104,`<path d="M70 52 L50 100 H120 L100 52Z" fill="${c}" opacity=".3"/><path d="M71 40 a14 14 0 0 1 28 0z" fill="${c}" opacity=".6"/><ellipse cx="85" cy="46" rx="40" ry="12" fill="#8a94a4" stroke="${c}" stroke-width="2"/>${[-26,-13,0,13,26].map(x=>`<circle cx="${85+x}" cy="48" r="3.5" fill="${c}"/>`).join("")}`);
  if (t === "spam") return W(170,90,`<g transform="rotate(-8 85 50)"><path d="M71 46 a14 14 0 0 1 28 0z" fill="${c}" opacity=".5"/><ellipse cx="85" cy="52" rx="40" ry="12" fill="#8a94a4" stroke="${c}" stroke-width="2"/></g><circle cx="120" cy="28" r="8" fill="#6a6e76" opacity=".6" class="drift"/><path d="M10 84 h150" stroke="#3a5a2a" stroke-width="6"/>`);
  if (t === "blocked") return W(170,100,`<path d="M10 80 q75 -24 150 0 v20 h-150z" fill="#3a2a1a"/><g transform="rotate(28 85 62)"><path d="M71 58 a14 14 0 0 1 28 0z" fill="#5a646e"/><ellipse cx="85" cy="64" rx="40" ry="12" fill="#5a646e" stroke="${c}" stroke-width="2"/></g><g class="drift"><circle cx="104" cy="34" r="10" fill="#5a5e66" opacity=".7"/><circle cx="114" cy="20" r="7" fill="#6a6e76" opacity=".5"/></g>`);
  return null;
}
registerSubject({
  key:"gk", name:"General knowledge", theme:"A crashed UFO climbing into endless space", gemWord:"Galaxy", gemTitle:"One in a Galaxy", emoji:"🛸",
  blurb:"Just for fun, not on the IB syllabus: riddles, films, songs, artists, games and the world. You're a <b>crashed UFO</b> smoking in a farmer's field. Each prompt has many correct answers. <b>Obvious answers barely get you off the ground. Answers other players missed repair your engines and launch you higher</b>, through the clouds, past the Moon and the planets, and out into space that never ends.",
  noLevel:"Just for fun",
  axis:"up", arrow:"▲", avX:"50%",
  tiers:{gem:"One in a Galaxy", rootkit:"Hyperspace", trojan:"Orbit", adware:"Liftoff", spam:"Wobble"}, blocked:"Crash landing", fw:"GRAVITY",
  notes:{rootkit:"Hyperspace! Very few players found this one.", trojan:"Into orbit. Not the usual answer.", adware:"Liftoff. Fairly common, but not the first thing people say.", spam:"A wobble off the ground. Everyone says this one first."},
  verbs:{cta:"Lift off ▲", inject:"Beam up", hint:"▲ rarer answers fly higher ▲", count:"charging the engines"},
  particles:["✦","·","+","*"], particleColor:"#9ff5c8",
  meter:{label:"ALTITUDE", fmt:fmtAlt, zone:fmtAlt, tick:fmtAlt, gain:(a,b)=>`climb to ${fmtAlt(b)}`},
  start:{bg:"linear-gradient(0deg,#0a0705,#0e1a22)", label:"Start · 0 m", zone:"The crash site", color:"#9ff5c8",
    deco:n=>`<svg width="100%" height="${n}" aria-hidden="true">${stars(165, 40, 3)}${farm(165)}<rect x="0" y="165" width="100%" height="${n-165}" fill="#1a1408"/><rect x="0" y="160" width="100%" height="10" fill="#24361a"/>`
      + Array.from({length:14},(_,k)=>`<rect x="${k*7.5}%" y="140" width="4" height="26" fill="#5a4024"/>`).join("") + `<rect x="0" y="146" width="100%" height="3" fill="#5a4024"/>`
      + at(50, 172, `<ellipse rx="90" ry="14" fill="#0a0704"/><path d="M-90 0 q20 -18 40 -8 M90 0 q-20 -18 -40 -8" stroke="#3a2a14" stroke-width="5" fill="none"/>`)
      + at(68, 162, `<ellipse cx="0" cy="-14" rx="22" ry="13" fill="#e8e2d8"/><circle cx="20" cy="-22" r="8" fill="#e8e2d8"/><circle cx="-8" cy="-16" r="5" fill="#1a1a1a"/><circle cx="6" cy="-10" r="4" fill="#1a1a1a"/><path d="M-14 -2 v12 M12 -2 v12" stroke="#e8e2d8" stroke-width="5"/><circle cx="23" cy="-24" r="1.6" fill="#111"/>`)
      + at(32, 164, `<ellipse cx="0" cy="-12" rx="18" ry="11" fill="#6a4a2a"/><circle cx="-17" cy="-18" r="7" fill="#6a4a2a"/><path d="M-10 -2 v10 M10 -2 v10" stroke="#6a4a2a" stroke-width="4"/>`)
      + [[30,240],[60,300],[80,420]].map(([x,yy])=>`<circle cx="${x}%" cy="${yy}" r="14" fill="#2a2010"/>`).join("") + `<svg x="12%" y="${n-120}" overflow="visible"><path d="M0 0 q20 -10 40 0 q-10 20 -40 0z" fill="#d8d0c0" opacity=".25"/></svg></svg>`},
  endBg:"#010104",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"Deep space",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
