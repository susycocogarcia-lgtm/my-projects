// 1. Initialize Supabase with your project details
const SUPABASE_URL = "https://supabase.co"; 
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cHJubHhhcnJtemJidWJka3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwMDc0MjcsImV4cCI6MjEwOTU4MzQyN30.p24H1MA2hxCmqElSNgOlDWwhQosXylOrZrLbsbrhVQo"; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const statusDiv = document.getElementById('status');

// 2. Handle Account Registration
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  statusDiv.textContent = "Creating account...";
  statusDiv.style.color = "blue";

  const username = document.getElementById('signup-username').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;

  // Convert username to the matching pseudo-email structure
  const syntheticEmail = `${username}@projectsa.ink`;

  const { data, error } = await supabase.auth.signUp({
    email: syntheticEmail,
    password: password
  });

  if (error) {
    statusDiv.textContent = "Signup Error: " + error.message;
    statusDiv.style.color = "#d32f2f";
  } else {
    statusDiv.textContent = "Success! Your account is created. You can now log in.";
    statusDiv.style.color = "green";
  }
});
