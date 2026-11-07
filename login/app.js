// 1. Initialize Supabase with your project details
const SUPABASE_URL = "https://supabase.co"; 
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cHJubHhhcnJtemJidWJka3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwMDc0MjcsImV4cCI6MjEwOTU4MzQyN30.p24H1MA2hxCmqElSNgOlDWwhQosXylOrZrLbsbrhVQo"; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
