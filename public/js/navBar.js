const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('sidebarToggle');
const close = document.getElementById('closeSidebar');
const mainContent = document.getElementById('mainContent');
const footer = document.getElementById('footer');
let sidebarVisible = true;

function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  sidebar.classList.add('translate-x-0');
  mainContent.classList.add('md:ml-64');
  footer.classList.add('md:ml-64');
  sidebarVisible = true;
}

function closeSidebar() {
  sidebar.classList.remove('translate-x-0');
  sidebar.classList.add('-translate-x-full');
  mainContent.classList.remove('md:ml-64');
  footer.classList.remove('md:ml-64');
  sidebarVisible = false;
}

function adjustLayout() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1200) {
    openSidebar();
    toggle.style.display = 'none';
  } else if (screenWidth >= 768 && screenWidth < 1200) {
    openSidebar(); // Tablet: open by default
    toggle.style.display = 'block';
  } else {
    closeSidebar(); // Mobile: closed by default
    toggle.style.display = 'block';
  }
}

// Initial layout
adjustLayout();
window.addEventListener('resize', adjustLayout);

// Toggle button click
toggle.addEventListener('click', () => {
  if (sidebarVisible) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

// Close button in sidebar
close.addEventListener('click', closeSidebar);

// Close sidebar if clicking outside (on small screen and toggle is visible)
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);
    const screenWidth = window.innerWidth;
  
    // Only close on small screens (mobile)
    if (
      sidebarVisible &&
      screenWidth < 768 &&
      !isClickInsideSidebar &&
      !isClickOnToggle
    ) {
      closeSidebar();
    }
});