// Auto-update the copyright year
const footerYear = document.getElementById('footerYear');
if(footerYear){
  footerYear.textContent = new Date().getFullYear();
}

// Fade the footer content up into view once, the first time it's scrolled to
const footerReveal = document.querySelector('.site-footer .reveal');
if(footerReveal){
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        footerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  footerObserver.observe(footerReveal);
}

// Back-to-top button
const backToTop = document.getElementById('backToTop');
if(backToTop){
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}