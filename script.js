document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// No signup backend exists yet — this opens the visitor's email client
// addressed to Flitzo instead of faking a "you're subscribed" confirmation.
const form = document.getElementById('waitlistForm');
const note = document.getElementById('waitlistNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = new FormData(form).get('email');
  window.location.href = `mailto:hello@flitzo.app?subject=Notify me when Flitzo launches&body=Please notify me at: ${email}`;
  note.textContent = "Opening your email app to send us your request…";
});
