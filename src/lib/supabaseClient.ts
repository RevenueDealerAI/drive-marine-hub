import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

// Vite only injects env vars prefixed with VITE_. If they're missing (common in misconfigured builds),
// fall back to the values provided for this project so the app doesn't hard-crash on load.
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? "https://mknozvjdlrohmfqydesk.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbm96dmpkbHJvaG1mcXlkZXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMDUwMTIsImV4cCI6MjA3ODc4MTAxMn0.iXPHMrfm4hqIONL8v9oq9GIltbjQtSvDT00OIM9CQFo";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
