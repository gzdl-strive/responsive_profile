// resize event
window.addEventListener('resize', () => {
  const innerWidth = window.innerWidth || document.documentElement.clientWidth;
  const navClose = document.querySelector('.nav__close');
  if (innerWidth >= 767 && navClose.style.display && navClose.style.display === 'block') {
    const navMenu = document.querySelector('.nav__menu');
    navMenu && (navMenu.style.bottom = '-100%');
    navClose && (navClose.style.display = 'none');
  }
});