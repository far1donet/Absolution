/* Accounts (sign up, sign in, profiles, saved report cards) use a free Supabase project.
   Follow supabase/SETUP.md, then paste your project's URL and its "anon public" key below.
   Both are meant to be public: the database's row-level security keeps every player's data private.
   Leave them empty and the game still works: progress and the report card stay on each device. */
window.ACCOUNT_CONFIG = {
  supabaseUrl: "https://sewveevdbhyvijcgtpfc.supabase.co",
  supabaseAnonKey: "sb_publishable_0sFZWtwVfTYvVPBlPun_0w_RpVTmkTW",   // public by design: row-level security protects the data
  codeLength: 6,          // must match Authentication → Email → "Email OTP length"
};
