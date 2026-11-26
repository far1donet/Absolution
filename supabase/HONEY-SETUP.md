# Switching on the honey pot

The honey pot lets a signed-in student drop in their IA, extended essay or English HL essay as a PDF and get an estimated mark on every IB criterion. The grading is done by Claude (Anthropic's AI). Your Claude key must stay secret, so the grading runs in a small **Supabase Edge Function** (a piece of code that runs on Supabase's servers), not in the website.

Until you do these steps, the honey pot button still opens, but grading says *"The honey pot isn't switched on yet"*.

It takes about 10 minutes. You need accounts switched on first ([SETUP.md](SETUP.md)).

## 1. Add the honey pot table

1. In Supabase open **SQL Editor → New query**.
2. Copy all of [`schema.sql`](schema.sql), paste it and press **Run**. It should say *Success*.

This adds the `honey_grades` table. It keeps only the marks, never the PDF. Students can read their own grades but can't add, change or delete any, so nobody can get round the daily limit. Running the file again is safe.

## 2. Get a Claude API key

1. Go to [platform.claude.com](https://platform.claude.com) and sign in (or sign up).
2. Open **Billing** and add some credit (for example $10–20 to start).
3. Set a **monthly spend limit** (in the Console's limits or billing settings), so a busy month can never cost more than you choose.
4. Open **API keys → Create key**, name it `honey pot`, and copy the key. It starts with `sk-ant-`.

**Never** paste this key into the website, into `account-config.js`, into GitHub or into a chat. It only goes into Supabase in step 4.

## 3. Create the grading function

1. In Supabase open **Edge Functions** (left sidebar).
2. Press **Deploy a new function → Via Editor**.
3. Name it exactly **`grade`**.
4. Delete the example code in the editor. Open [`functions/grade/index.ts`](functions/grade/index.ts) in this repository, copy **all** of it, and paste it in.
5. Press **Deploy function** and wait until it says it's deployed.

## 4. Two settings on the function

1. Still in **Edge Functions**, open **Secrets** (sometimes **Manage secrets**). Add:

   | Name | Value |
   |---|---|
   | `ANTHROPIC_API_KEY` | the `sk-ant-…` key from step 2 |

   Press **Save**.
2. Open the **`grade`** function → **Details** (or its settings). Turn **Verify JWT** / **Enforce JWT verification** **off** and save.
   This sounds less safe but isn't: the function checks that the student is signed in itself. Supabase's built-in check doesn't work with the new *publishable* keys this site uses, and leaving it on would block every request.

## 5. Try it

Open the game, press **The honey pot**, sign in, choose a subject, drop in a PDF, tick the box and press **Drop it in the honey pot**. Reading takes a minute or two. You'll see the estimated grade, each criterion as *Smashing it*, *On track* or *Still to work on*, and the document sinking into the honey: the higher the grade, the deeper it sinks.

## What it costs

You pay Anthropic for each grade. A PDF is read as text and as page images, so the cost depends on its length:

| Piece | Roughly |
|---|---|
| An IA of 10–15 pages | $0.10–0.25 |
| An extended essay of 20–30 pages | $0.20–0.45 |

Each student can grade **3 pieces a day** (failed attempts don't count). The monthly spend limit from step 2 is your safety net.

## Optional settings

Add these in **Edge Functions → Secrets** if you want to change them:

| Name | What it does | Default |
|---|---|---|
| `HONEY_DAILY_LIMIT` | grades per student per 24 hours | `3` |
| `GRADER_EFFORT` | `low`, `medium` or `high`: how hard Claude thinks. `high` is a little more careful but slower; on Supabase's free plan a function has 150 seconds, so leave it at `medium` unless you're on a paid plan | `medium` |
| `HONEY_ORIGINS` | the websites allowed to call the function, comma-separated | `https://far1donet.github.io` plus a local test server |

## How the grading works

- The function sends the PDF and the IB criteria for that task (from [`../honey-rubrics.js`](../honey-rubrics.js)) to Claude (`claude-opus-5-5`). Claude must reply with a mark for each criterion and nothing else: no comments, feedback or corrections, because IB rules on academic integrity don't allow outside feedback on coursework.
- It uses the IB's best-fit approach, ignores anything past the word limit (as moderators do), and ignores any text in the PDF that tries to ask for a mark.
- If Claude declines a file for safety reasons, the request is automatically re-run on another Claude model (Anthropic's server-side fallback), so students rarely see an error.
- Grades are estimates. IB grade boundaries change each session, and the boundaries for the new 30-mark extended essay won't be published until after May 2027, so the 1–7 and A–E grades shown are approximate.

## Privacy and the rules

- The PDF is sent to Anthropic's API to be marked and is not stored by the site. Only the marks, the subject and the file name are saved, in the student's own account. Check that this fits your school's data rules and Anthropic's API terms.
- Students can delete their account, and everything saved with it, from **My profile → Account → Delete account**.
- The IB's academic integrity policy and your school's rules on AI apply. The honey pot gives marks only, never written feedback, but students should still check with their teacher that using it is fine.

## When you change the criteria

The criteria live in [`../honey-rubrics.js`](../honey-rubrics.js). After editing it:

```bash
node supabase/build-grade.js
```

That copies the criteria into `functions/grade/index.ts`. Then repeat step 3: open the `grade` function in the Supabase editor, paste the new code over the old and deploy again.
