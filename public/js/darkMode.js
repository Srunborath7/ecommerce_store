// 🌓 Restore icon on load
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    // Default to light theme
  localStorage.setItem('theme', 'light');
}
tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6',
          secondary: '#1e40af',
          customSidebar: '#242038'
        }
      }
    }
};

// 🌓 Restore icon on load
document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('modeIcon');
  const root = document.documentElement;

  // Check for stored theme preference in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    // Default to light theme
    localStorage.setItem('theme', 'light');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// 🌓 Toggle dark mode + store in localStorage
document.getElementById('toggleDark').addEventListener('click', () => {
  const root = document.documentElement;
  const icon = document.getElementById('modeIcon');

  // Toggle the theme
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});


