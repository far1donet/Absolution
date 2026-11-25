# Switching on accounts

Accounts, profiles and report cards are stored in a free **Supabase** project. The game is a static site on GitHub Pages, so it needs a service like this to send emails and keep accounts.
Until you finish these steps the game still works: each player's report card is just saved on their own device.

It takes about 15 minutes, and you only do it once.

## 1. Create the project

1. Go to [supabase.com](https://supabase.com), sign up (free) and click **New project**.
2. Give it a name (e.g. `one-in-a-computer`), choose a strong database password (save it somewhere), pick the region closest to your players, and create it. Wait a minute or two while it starts.

## 2. Create the tables

1. In the project, open **SQL Editor** → **New query**.
2. Open [`schema.sql`](schema.sql) from this folder, copy all of it, paste it in and press **Run**. It should say *Success*.

This creates the `profiles` and `results` tables. Their row-level security means each player can only ever read or change their own data. It also creates the name filter, so rude, hateful or staff-impersonating usernames are refused by the database itself, and a function that lets a player delete their own account. It's safe to run again after an update.

## 3. Set up sign-in by code

Open **Authentication** and set:

| Where | Setting | Value |
|---|---|---|
| Sign In / Providers → **Email** | Enable email provider | on |
| | Confirm email | on |
| | Secure password change | off |
| | Minimum password length | 8 |
| | Password requirements | letters and digits |
| | Email OTP expiration | 600 (10 minutes) |
| | Email OTP length | 6 |
| **URL Configuration** | Site URL | `https://far1donet.github.io/Absolution/` |

Then go to **Emails → Templates** (also called *Email Templates*). For each of these three templates, set the subject and paste the matching file from [`email-templates/`](email-templates) into the message body:

| Template | Subject | Body |
|---|---|---|
| Confirm signup | Your One in a Computer sign-up code | `confirm-signup.html` |
| Magic Link | Your One in a Computer code | `magic-link.html` |
| Reset Password | Reset your One in a Computer password | `reset-password.html` |

Each one shows `{{ .Token }}`, the 6-digit code, instead of a link. That's what makes sign-up and *Forgot my damn password?* work with codes typed into the game.

## 4. Connect an email sender (needed)

Supabase's built-in email only delivers to the members of your own Supabase team, a few per hour, so players won't get their codes until you connect a real sender.
Go to **Authentication → Emails → SMTP Settings**, switch on **Enable custom SMTP**, and fill it in from one of these:

**Quickest: a Gmail account** (about 500 emails a day)
1. On the Gmail account, turn on 2-Step Verification, then create an **App password** (Google Account → Security → App passwords).
2. In Supabase: Host `smtp.gmail.com`, Port `465`, Username = the Gmail address, Password = the 16-character app password, Sender email = the same Gmail address, Sender name `One in a Computer`.

**Best for a whole school: an email service with your own domain**
[Resend](https://resend.com), [Brevo](https://www.brevo.com) or [SendGrid](https://sendgrid.com) all have free plans. Verify your domain with them, then copy the SMTP host, port, username and password they give you into Supabase.

Codes are delivered to any address: Gmail, Outlook, Hotmail, Yahoo, iCloud, school accounts and so on.
Then open **Authentication → Rate Limits** and raise *Rate limit for sending emails* (e.g. to 100 per hour) so a whole class can sign up at once.

## 5. Connect the game

1. In Supabase open **Project Settings → API** (or *API Keys*). Copy the **Project URL** and the **anon public** key (it may be labelled *publishable*).
2. Paste both into [`account-config.js`](../account-config.js) at the top of the repository:

   ```js
   window.ACCOUNT_CONFIG = {
     supabaseUrl: "https://your-project-ref.supabase.co",
     supabaseAnonKey: "eyJ...",
     codeLength: 6,
   };
   ```
3. Commit and push. GitHub Pages redeploys in about a minute.

The anon key is designed to be public: row-level security in `schema.sql` decides what it can do. **Never** put the `service_role` / *secret* key in the site.

## 6. Try it

Open the game, press **Sign in** on the title screen, then **Create an account**. Enter your email, type the code you receive, choose a password and a username. Play a dive and open **My profile** to see it on your report card. Sign out and back in with just your email and password; use *Forgot my damn password?* to test a reset.

## Notes

- **Where data lives:** email addresses and passwords are handled by Supabase Auth (passwords are stored hashed). The game stores the profile (username, display name, motto, skin, colour, banner) and each game's subject, mode, score and per-question results. Players can delete everything from **My profile → Account → Delete account**.
- **Guest games:** games played before signing up are kept on the device and added to the account the first time someone signs in there.
- **Changing the word filter:** edit the lists in `namecheck.js`, then run `node supabase/build-schema.js` and run the new `schema.sql` again in the SQL editor, so the page and the database keep the same rules.
- **Free plan limits:** the free plan pauses a project after a week with no activity; open the Supabase dashboard to wake it. It has plenty of room for a school's report cards.
