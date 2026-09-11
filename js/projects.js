// ---------- Multi-screenshot galleries ----------
document.querySelectorAll('.gallery').forEach(gallery => {
  const track = gallery.querySelector('.gallery-track');
  const slides = [...track.children];
  const dotsWrap = gallery.querySelector('.g-dots');
  const prevBtn = gallery.querySelector('.g-nav.prev');
  const nextBtn = gallery.querySelector('.g-nav.next');

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => track.scrollTo({ left: i * track.clientWidth, behavior:'smooth' }));
    dotsWrap.appendChild(dot);
  });
  const dots = [...dotsWrap.children];

  if(slides.length <= 1){
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dotsWrap.style.display = 'none';
  }

  prevBtn.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior:'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: track.clientWidth, behavior:'smooth' }));

  track.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  });
});

// ---------- Project sidebar: mobile drawer open/close ----------
const sideNav = document.getElementById('sideNav');
const sideToggle = document.getElementById('sideToggle');
const sideOverlay = document.getElementById('sideOverlay');
const sideLinks = sideNav ? [...sideNav.querySelectorAll('a')] : [];

function openSideNav(){
  sideNav.classList.add('open');
  sideToggle.classList.add('open');
  sideOverlay.classList.add('open');
  sideToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSideNav(){
  sideNav.classList.remove('open');
  sideToggle.classList.remove('open');
  sideOverlay.classList.remove('open');
  sideToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if(sideToggle){
  sideToggle.addEventListener('click', () => {
    sideNav.classList.contains('open') ? closeSideNav() : openSideNav();
  });
  sideOverlay.addEventListener('click', closeSideNav);
  sideLinks.forEach(a => a.addEventListener('click', closeSideNav));
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && sideNav.classList.contains('open')) closeSideNav();
  });
  window.addEventListener('resize', () => {
    if(window.innerWidth > 960 && sideNav.classList.contains('open')) closeSideNav();
  });
}

// ---------- Scroll-spy: highlight the current project in the sidebar ----------
const projectSections = document.querySelectorAll('.project');
if(projectSections.length && sideLinks.length){
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const link = sideNav.querySelector(`a[href="#${entry.target.id}"]`);
        if(link){
          sideLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  projectSections.forEach(section => spy.observe(section));
}