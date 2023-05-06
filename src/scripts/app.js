import { changeLanguage } from './i18n';

// # nav
const navToggle = document.querySelector('.nav__btn--toggle');
const navMenu = document.querySelector('.nav__menu');
const navClose = document.querySelector('.nav__close');

// ## nav toggle
navToggle.addEventListener('click', () => {
  navMenu && (navMenu.style.bottom = '0');
  navClose && (navClose.style.display = 'block');
});
// ## nav close
navClose.addEventListener('click', () => {
  navMenu && (navMenu.style.bottom = '-100%');
  navClose && (navClose.style.display = 'none');
});

// ## nav theme
const themeChangeBtn = document.querySelector('.nav__btn--theme');
const themeMode = {
  curTheme: localStorage.getItem('theme-mode') ?? 'light',
  // theme-init
  initTheme: () => {
    if (!localStorage.getItem('theme-mode')) localStorage.setItem('theme-mode', 'light');
    if (themeMode.curTheme !== 'dark') return;
    themeMode.toggleMode();
  },
  toggleMode: () => {
    themeChangeBtn.classList.toggle('icon-dark-mode');
    document.body.classList.toggle('dark-theme');
  },
  // theme-change
  themeChange: () => {
    themeMode.toggleMode();
    themeMode.curTheme = themeMode.curTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme-mode', themeMode.curTheme);
  }
}
themeMode.initTheme();
themeChangeBtn.addEventListener('click', themeMode.themeChange);

// ## nav language
const languageChangeContainer = document.querySelector('.nav__languageContainer');
const languageChangeBtn = document.querySelector('.nav__language');
const languageMap = {
  curLanguage: localStorage.getItem('language') ?? 'en',
  initLanguage: () => {
    if (!localStorage.getItem('language')) localStorage.setItem('language', 'en');
    if (localStorage.getItem('language') !== 'cn') return;
    languageMap.toggleLanguage();
  },
  toggleLanguage: () => {
    languageChangeBtn.classList.toggle('icon-En2Cn');
    languageChangeBtn.classList.toggle('icon-Cn2En');
    changeLanguage(languageMap.curLanguage);
  },
  changeLanguage: () => {
    languageMap.curLanguage = languageMap.curLanguage === 'en' ? 'cn' : 'en';
    localStorage.setItem('language', languageMap.curLanguage); 
    languageMap.toggleLanguage();
  }
};
languageMap.initLanguage();
languageChangeContainer.addEventListener('click', languageMap.changeLanguage);
