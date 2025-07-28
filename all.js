// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '☀️';
  } else {
    toggleBtn.innerHTML = '🌙';
  }
});
