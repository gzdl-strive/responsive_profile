/**
 * Node.nodeType => 用于区分不同类型的节点
 */

// nav
const navToggle = document.querySelector('.nav__btn--toggle');
const navMenu = document.querySelector('.nav__menu');
const navClose = document.querySelector('.nav__close');

(navToggle.nodeType === 1) && navToggle.addEventListener('click', () => {
  navMenu && (navMenu.style.bottom = '0');
  navClose && (navClose.style.display = 'block');
});

(navClose.nodeType === 1) && navClose.addEventListener('click', () => {
  navMenu && (navMenu.style.bottom = '-100%');
  navClose && (navClose.style.display = 'none');
});