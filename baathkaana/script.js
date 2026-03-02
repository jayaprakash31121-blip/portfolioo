document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  // -------- Sticky header shadow on scroll --------
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // -------- Mobile menu toggle --------
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });

    // close menu when clicking any link
    const links = navMenu.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});
