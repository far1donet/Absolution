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

Pick a subject, tick syllabus topics, and switch between **SL** and **HL**. Each dive draws 7 prompts from your selection.

## Join the classroom (multiplayer)

Tap **Join the classroom**, pick a nickname, a skin (any subject's character) and a colour.
**Host a classroom** to get a 6-character code, or enter a friend's code to join. Share the invite link or the code.

- Players sit round the class and take turns clockwise on the same question.
- A correct answer nobody has said yet scores 10–100 points by rarity. A wrong answer, a repeat or running out of time scores 0 and costs a heart; whoever slipped up picks the next subject and topic, then the next person starts.
- Fill your points bar to win back a heart. Last player with hearts wins.
- The host sets the seats (2–8), hearts, seconds per turn, points per heart, SL/HL and which subjects and topics come up.

The host's browser runs the game and connects to friends directly (WebRTC via [PeerJS](https://peerjs.com), bundled in `vendor/`), so there is no server to run. The host needs to keep the page open. Some school networks block this kind of connection; a phone hotspot usually works.
Add `?net=local` to the URL to test with several tabs on one computer.

## Adding prompts

Each subject lives in `subjects/<subject>.js`: its syllabus (`CATALOG`), its prompts (`PROMPTS`) and its world. Each prompt lists accepted answers from most to least common, plus one rare gem answer:

```js
P("bi03", "A2.2", "Name an organelle found in a human cell.", "Peroxisome", [
  ["Nucleus", 30], ["Mitochondria", 25, "mitochondrion"], /* … */ ["Peroxisome", .4]
])
```
