# One in a Computer

A reverse-trivia revision game for **IB Diploma** subjects. Every prompt has many correct answers. Obvious answers barely move you; valid answers that few people think of take you much further.

**Play:** https://far1donet.github.io/Absolution/

| Subject | World | Direction |
|---|---|---|
| Computer Science | A virus sinking into a computer, from the internet to the CPU registers | down |
| Biology | A virus burrowing through the human body, from the skin to DNA | down |
| Chemistry | Zooming into matter, from the lab bench to quarks | down |
| Physics | A cannon firing your answers further across the landscape | sideways |
| Business Management | A bottle of money that fills and rises, from $1 to $1 trillion | up |
| Economics | A bull charging up a stock chart, from a barter market past the factory town, the central bank, the stock exchange, the container port and a speculative bubble to the invisible hand. Its *One in a Billion* turns it into the Golden Bull | up |
| Psychology | A thought sinking through the mind, from the waking mind past daydreams, memory lane and the neuron forest, through sleep, dreams and nightmares, to the subconscious and the collective unconscious. The meter shows your brainwaves slowing from 40 Hz. Its *One in a Dream* makes it a Lucid Dreamer | down |
| Mathematics: Applications and Interpretation | A survey drone flying across a city of graphs: bar-chart suburbs, a scatter-plot park, histogram skyscrapers, a bell-curve stadium, a sine-wave harbour, a graph-theory metro and Voronoi fields, up into the cloud, collecting data from 1 byte to a yottabyte. Answers are typed. Wrong answers hit the NULL HYPOTHESIS; *One in a Census* launches a Drone Swarm | sideways |
| Environmental Systems and Societies | A seed growing into a tree, from the soil through the forest floor, the canopy and the emergent giants, past the clouds and the ozone layer to Earthrise, storing carbon as it grows. Wrong answers are felled ("TIMBER!"); *One in a Biosphere* makes it the World Tree | up |
| Theory of Knowledge | An owl climbing out of Plato's cave: from the shadows on the wall past the fire, the cave mouth and reflections in the water, through the library, the laboratory and the agora, up through the clouds of doubt to the Sun. The meter shows the light rising from 0.001 to 100,000 lux. Wrong answers hit DOGMA; *One in a Paradox* turns it into the Owl of Minerva | up |
| History | A time traveller crossing the ages, from the dinosaurs to the new generation | sideways |
| Geography | A pirate ship sailing past sharks, sirens, sea serpents, ghost ships and the kraken to where "here be dragons" | sideways |
| French ab initio | A baguette growing past Paris landmarks until it is taller than the Eiffel Tower, shouting "SACRÉ BLEU !" louder for rarer answers. Answers must be in French; English answers are caught and translated | up |
| Spanish ab initio | A chilli pepper travelling the Spanish-speaking world, from a tapas bar in Madrid through Barcelona, Andalusia and the Canary Islands, across the Atlantic to Mexico, Cuba, Colombia, Peru and the Salar de Uyuni, all the way to Patagonia, turning from green to orange to red as it heats up. Answers must be in Spanish (English is caught and translated), and words from Spain and Latin America both count. Wrong answers fall into a SIESTA; *One in a Piñata* makes it the Chile de Fuego | sideways |
| English A: Language & Literature | A pencil writing its way down an IB English notebook: first drafts, margin notes, essays, poems, scripts, the printed book, the library and the dictionary. Rarer answers write more lines | down |
| English A: Literature | A bookworm burrowing down a tower of books and back through time: from today's paperback past modernism, the Victorian novel, Romantic poetry, the Age of Reason, Shakespeare's stage and illuminated manuscripts to classical scrolls and the clay tablets of Gilgamesh. The meter counts the years back from 2026. Wrong answers burn in FAHRENHEIT 451; *One in a Thousand and One Nights* turns it into the Bookwyrm | down |
| Mathematics: Analysis and Approaches | Scipa, a little graphic calculator, riding the number line from 1 past π, e, calculus and the complex plane to a googol and beyond. Multiple choice only, one minute per question | sideways |
| General knowledge (just for fun, not IB) | A crashed UFO climbing from a farm field past the Moon and the planets into endless space: riddles, films, music, games, the world and sport | up |

Pick a subject and switch between **SL** and **HL** (French ab initio is SL only; English A and general knowledge have one set of prompts for both). **Today's dive** is 7 prompts from the whole subject (up to 700 points), the same for everyone that day. **Practice** is endless: prompts come from the topics you tick, the world keeps going deeper, and you play until you lose all 3 hearts.

**Go to heaven:** a third mode for every subject. Satan drags you into his dungeon and locks you in a cage; you escape by writing full answers to exam-style questions (Define, Outline, Explain, Calculate…) on the topics you tick. Answers are marked against a markscheme (`heaven.js`, banks in `qbank/<subject>.js`): each marking point is awarded when its key wording appears, with spelling slips forgiven. Full marks (or within one mark on 4+ mark questions) climbs a floor, zero marks gets you dragged back down, and questions you miss come back later. Climb through the dungeon, lava pits, catacombs, the surface, the sky and the clouds to the gates of heaven, where God is waiting: "nice one son! you tryna come in or what?" There are 3,422 written questions, at least eight for every topic in every subject (Biology 320, Geography 368, Business 296, Economics 252, Computer Science 202, Psychology 176, Maths AI 160, ESS 240, Theory of Knowledge 104, Physics 192, French 192, Spanish 192, Chemistry 176, History 168, English A Language & Literature 152, English A Literature 104, General knowledge 128), so a climb rarely repeats a question. Mathematics AA escapes with its multiple-choice questions (right answer up a floor, wrong answer down).

**Examiner's commentary:** after every written answer you get feedback like an examiner's: which marking points you earned, exactly what to add for the marks you missed, what the command term asks for ("Explain means give reasons…"), a warning if the answer is too short for the marks, an examiner's tip, and a full-mark model answer. Questions in the bank are checked automatically: every model answer must earn the marks, copying the question back or writing nonsense must earn nothing, and one question's answer must not pass an unrelated question.

**The dive and special forms:** your skin carries each answer down through the layers itself; wrong answers charge the wall and bounce off. A "One in a …" answer gets a long charge-up, then plunges past its line into the next layer before floating back. It also **transforms your skin into a special form** for the rest of the dive (`specials.js`), whose power spreads through the world: Mega Virus (red code veins and glitches), Superbug (infection), Quantum Core (energy arcs), Railgun (cracks), Golden Tycoon (golden rays), Time Lord (time-rift rings), Kraken Flagship (tentacles), Baguette Royale (tricolour ribbons), The Quill (the pencil becomes a tough feather pen in shades and writes whole pages, which fly out across the notebook), Scipa Prime (a crowned black-and-gold calculator with symbols in orbit) and Mothership (warp rings). Each extra "One in a …" powers it up further, and classroom skins transform too.

**Motion:** every world is animated (`life.js`, `life.css`). Each skin has its own moving parts (pulsing virus spikes, orbiting electrons, a recoiling cannon, a flipping coin, a walking time traveller, a rocking ship, a blinking baguette, a hovering UFO) and squashes, stretches and leans with its speed, then wobbles to a stop. Themed particles drift through each world and streak past as speed lines on fast moves, the scenery sways, swims and flies, and the camera follows on a smooth spring. It all turns off when the device asks for reduced motion.

**Mathematics AA and Scipa the calculator:** every question is IB-style multiple choice with one minute on the clock (`subjects/math.js`, 73 questions over all five topics, HL-only topics marked). Right first time within 15 seconds is *One in a Googol*; within 35 seconds *Q.E.D.*; later *Solved*. A wrong answer greys out that option, makes Scipa jump onto the screen ("Scipa is disappointed") and gives you one more try for fewer points; wrong twice or out of time is *Math ERROR*. After every question Scipa, a Casio-style graphic display calculator, shows how to solve it: it opens the right app (Run-Matrix, Graph, Statistics, Distribution, Equation), types the keystrokes, draws the graphs and runs G-Solv (root, max/min, intersection, dy/dx, ∫dx), 1-variable statistics, regression, NormalCD, InvNorm, Binomial PD/CD and polynomial or simultaneous equations. `calc.js` really computes every screen, and a test checks that each question's last screen matches the right answer. Classroom rounds use typed answers, so Maths isn't in their question mix (Scipa is still a skin).

**Bonus questions:** every correct answer unlocks a multiple-choice bonus written with IB command terms (`mcq.js`), with a markscheme-style explanation.
**The honey pot:** students drop in their IA, extended essay, English A HL essay (Language & Literature or Literature) or TOK exhibition or essay as a PDF and mark it themselves against the IB criteria (current guides: sciences 2025, Computer Science 2027, Business Management 2024, History for 2027 and from 2028, Geography, Maths AA, TOK, the 2027 extended essay). For each criterion they rate a few statements (*Not yet*, *Partly*, *Mostly* or *Fully*) and the honey pot works out the mark on the IB's scale, the estimated grade and whether they're *Smashing it*, *On track* or *Still to work on*; the document sinks deeper into the honey the higher the grade. It never gives written feedback, because IB rules don't allow outside feedback on coursework. Everything stays on the device: the PDF is read in the browser with PDF.js (`vendor/pdfjs`) to count its pages and words and draw its first page, and is never uploaded; past marks are kept in that browser only. Criteria and statements live in `honey-rubrics.js`. French and Spanish ab initio are left out (their IA is a live oral, and ab initio EEs aren't allowed).

**Explanations:** tap any accepted answer to see why it counts, written like an IB markscheme. All 14,241 accepted answers in every subject have one. `explain.js` loads `explain/<subject>.js` only when that subject is opened.
**Auto-correction:** small spelling mistakes are forgiven and shown as "Auto-corrected to …".

## Accounts, profiles and report cards

Press **Sign in** on the title screen (or **My profile** in the menu).

- **Create an account** with any email (Gmail, Outlook, Yahoo, iCloud, school…). The game emails a 6-digit code; type it in, then choose a password and confirm it, then pick a username, display name, skin and colour. After that you sign in with your email and password, with no more codes.
- **Forgot my damn password?** emails a new code to set a new password.
- **Everything is saved:** every daily dive, practice run (even one you leave early) and Go to heaven run. Games played as a guest stay on the device and join your account when you sign up or sign in there. Each device keeps a copy of your games and only downloads the ones it hasn't seen, so opening your profile stays quick and cheap however many games you play.
- **Your profile** has a printable **IB-style report card**: a predicted grade (1–7) and effort grade (A–E) for every subject, a predicted IB score out of 45 (six best IB subjects plus up to 3 core points for escaping hell), handwritten comments signed by each subject's character, your rarity mix and trend, strongest topics and topics to revise next (with a *Practise* button), badges, an activity calendar, personal bests and recent games.
- **Customise** your username, display name, motto, skin, colour, banner and favourite subject. Your skin shows its special form once you've found a *One in a …* in that subject.
- **Names are filtered:** usernames, display names, mottos and classroom nicknames can't contain rude, hateful or sexual words, including leetspeak (`sh1t`), stretched letters, word combinations, prank names, or names pretending to be staff (`admin`, `moderator`). Innocent words that contain them (*class*, *Dickinson*, *Scunthorpe*, *therapist*) are fine. The same rules run in the page (`namecheck.js`) and in the database, so they can't be skipped.
- **Account settings:** change your password, sign out (on this device), or delete your account and everything saved with it.

Accounts use a free [Supabase](https://supabase.com) project. To switch them on, follow [`supabase/SETUP.md`](supabase/SETUP.md) (about 15 minutes), then paste the project URL and anon key into `account-config.js`. Until then the game works as before, and the report card is kept on each device.

## Join the classroom (multiplayer)

Tap **Join the classroom**, pick a nickname, a skin (any subject's character) and a colour.
**Host a classroom** to get a 6-character code, or enter a friend's code to join. Share the invite link or the code.

- Players sit round the class and take turns clockwise on the same question. A teacher in the middle points at whoever's turn it is.
- A correct answer nobody has said yet scores 10–100 points by rarity. A wrong answer, a repeat or running out of time scores 0 and costs a heart. Everyone else then answers that question once more, and when it comes back round, whoever slipped up picks the next subject and topic.
- Fill your points bar to win back a heart. Last player with hearts wins.
- The host sets the seats (2–8), hearts, seconds per turn, points per heart, SL/HL and which subjects and topics come up.

The host's browser runs the game, so there is no server to run and the host must keep the page open. Players connect two ways at once and keep whichever works first:
a direct phone-to-phone link (WebRTC via [PeerJS](https://peerjs.com), bundled in `vendor/`), and a relay through free public MQTT brokers over secure WebSockets (EMQX, HiveMQ and Mosquitto; the host listens on all three). If a player's connection drops, they are put back in their seat automatically, and the seat is kept for 60 seconds. Reloading the page and entering the code again also gets you your seat back.

Testing: `?net=local` plays across tabs on one computer, `?net=relay` or `?net=direct` forces one connection type, and `?relay=ws://localhost:8888` points the relay at your own broker.
Add `?net=local` to the URL to test with several tabs on one computer.

## Adding prompts

Each subject lives in `subjects/<subject>.js`: its syllabus (`CATALOG`), its prompts (`PROMPTS`) and its world. Each prompt lists accepted answers from most to least common, plus one rare gem answer:

```js
P("bi03", "A2.2", "Name an organelle found in a human cell.", "Peroxisome", [
  ["Nucleus", 30], ["Mitochondria", 25, "mitochondrion"], /* … */ ["Peroxisome", .4]
])
```
