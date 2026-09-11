const navbar = document.getElementById('navbar');
const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

function openMenu(){
  toggle.classList.add('open');
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu(){
  toggle.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

toggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

mobileOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && mobileMenu.classList.contains('open')){
    closeMenu();
  }
});

// Close the sidebar automatically if the viewport is resized back to desktop
window.addEventListener('resize', () => {
  if(window.innerWidth > 860 && mobileMenu.classList.contains('open')){
    closeMenu();
  }
});