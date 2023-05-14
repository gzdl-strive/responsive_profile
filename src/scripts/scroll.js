// scroll event

// scroll change => header add shadow
const scrollChangeHeader = () => {
  const scrollY = window.scrollY;
  const header = document.querySelector('.header');
  // When scrollY scrolls to a certain value, the header shows a specific effect
  // 当scrollY滚动到一定值时，header出现特定效果
  if (scrollY >= 80) {
    header.classList.add('header--scroll');
  } else {
    header.classList.contains('header--scroll') && header.classList.remove('header--scroll');
  }
}
window.addEventListener('scroll', scrollChangeHeader);
window.addEventListener('load', scrollChangeHeader);

// scroll change => scrolltop show/hide
const scrollChangeScrolltop = () => {
  const scrollY = window.scrollY;
  const scorlltop = document.querySelector('.scrolltop__container');
  if (scrollY >= 350) {
    scorlltop.classList.add('show');
  } else {
    scorlltop.classList.remove('show');
  }
}
window.addEventListener('scroll', scrollChangeScrolltop);
window.addEventListener('load', scrollChangeScrolltop);

// scroll change => nav active
const sections = document.querySelectorAll('section[id]');
const scrollChangeNavItem = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`) &&
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`) &&
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollChangeNavItem);