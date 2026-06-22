const SUPABASE_URL = 'https://oscvkgaynchglzpqycac.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zY3ZrZ2F5bmNoZ2x6cHF5Y2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDE2NTEsImV4cCI6MjA5NzY3NzY1MX0.oqNrKP8LBJ9PZgsvEPxG9BOyxXyRFqPjr_sxw1UrIeE';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
