/* Accounts (sign up, sign in, profiles, saved report cards) use a free Supabase project.
   Follow supabase/SETUP.md, then paste your project's URL and its "anon public" key below.
   Both are meant to be public: the database's row-level security keeps every player's data private.
   Leave them empty and the game still works: progress and the report card stay on each device. */
window.ACCOUNT_CONFIG = {
  supabaseUrl: "",        // e.g. "https://abcdefghijklmnop.supabase.co"
  supabaseAnonKey: "",    // the long "anon" / "publishable" key from Project Settings → API
  codeLength: 6,          // must match Authentication → Email → "Email OTP length"
};
