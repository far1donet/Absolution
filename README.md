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

## Adding prompts

Each subject lives in `subjects/<subject>.js`: its syllabus (`CATALOG`), its prompts (`PROMPTS`) and its world. Each prompt lists accepted answers from most to least common, plus one rare gem answer:

```js
P("bi03", "A2.2", "Name an organelle found in a human cell.", "Peroxisome", [
  ["Nucleus", 30], ["Mitochondria", 25, "mitochondrion"], /* … */ ["Peroxisome", .4]
])
```
