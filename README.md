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
| History | A time traveller crossing the ages, from the dinosaurs to the new generation | sideways |
| Geography | A pirate ship sailing past sharks, sirens, sea serpents, ghost ships and the kraken to where "here be dragons" | sideways |
| French ab initio | A baguette growing past Paris landmarks until it is taller than the Eiffel Tower, shouting "SACRÉ BLEU !" louder for rarer answers. Answers must be in French; English answers are caught and translated | up |
| General knowledge (just for fun, not IB) | A crashed UFO climbing from a farm field past the Moon and the planets into endless space: riddles, films, music, games, the world and sport | up |

Pick a subject and switch between **SL** and **HL** (French ab initio is SL only; general knowledge has no levels). **Today's dive** is 7 prompts from the whole subject (up to 700 points), the same for everyone that day. **Practice** is endless: prompts come from the topics you tick, the world keeps going deeper, and you play until you lose all 3 hearts.

**Go to heaven:** a third mode for every subject. Satan drags you into his dungeon and locks you in a cage; you escape by writing full answers to exam-style questions (Define, Outline, Explain, Calculate…) on the topics you tick. Answers are marked against a markscheme (`heaven.js`, banks in `qbank/<subject>.js`): each marking point is awarded when its key wording appears, with spelling slips forgiven. Full marks (or within one mark on 4+ mark questions) climbs a floor, zero marks gets you dragged back down, and questions you miss come back later. Climb through the dungeon, lava pits, catacombs, the surface, the sky and the clouds to the gates of heaven, where God is waiting: "nice one son! you tryna come in or what?" There are 512 questions, at least two for every topic in all nine subjects.

**Motion:** every world is animated (`life.js`, `life.css`). Each skin has its own moving parts (pulsing virus spikes, orbiting electrons, a recoiling cannon, a flipping coin, a walking time traveller, a rocking ship, a blinking baguette, a hovering UFO) and squashes, stretches and leans with its speed, then wobbles to a stop. Themed particles drift through each world and streak past as speed lines on fast moves, the scenery sways, swims and flies, and the camera follows on a smooth spring. It all turns off when the device asks for reduced motion.

**Bonus questions:** every correct answer unlocks a multiple-choice bonus written with IB command terms (`mcq.js`), with a markscheme-style explanation.
**Explanations:** tap any accepted answer to see why it counts (`explain.js`).
**Auto-correction:** small spelling mistakes are forgiven and shown as "Auto-corrected to …".

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
