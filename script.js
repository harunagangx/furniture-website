const mobileNavButton = document.getElementById('mobile-menu-button');
const mobileSidebar = document.getElementById('mobile-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const closeSidebarButton = document.getElementById('close-sidebar');
const toggleThemeButton = document.getElementById('toggle-theme');
const themeIcon = toggleThemeButton.querySelector('i');

const SCROLL_THRESHOLD = 120;

toggleThemeButton.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');

  if (document.documentElement.classList.contains('dark')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

const closeSidebar = function () {
  mobileSidebar.classList.add('translate-x-full');
  sidebarOverlay.classList.add('hidden');
};

mobileNavButton.addEventListener('click', function () {
  mobileSidebar.classList.remove('translate-x-full');
  sidebarOverlay.classList.remove('hidden');
});

sidebarOverlay.addEventListener('click', closeSidebar);
closeSidebarButton.addEventListener('click', closeSidebar);

mobileSidebar.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeSidebar);
});

document.addEventListener('scroll', function () {
  const header = document.getElementById('header');

  if (window.scrollY >= SCROLL_THRESHOLD) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for subscribing!');
});
