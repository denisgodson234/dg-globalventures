// ======================================
// DENIS GODSON GLOBAL VENTURES
// PREMIUM VERSION 6.0
// SUPABASE CONNECTION
// ======================================

// Import Supabase from CDN
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Your Supabase project values
const SUPABASE_URL = "https://mcsvqhbsllhcvpnrqwcc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qRQAaE4NjXL7UfRDfroMdg_l0EYID8-";

// Create Supabase client
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);