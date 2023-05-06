import en from '../locales/en.json';
import cn from '../locales/cn.json';

const resources = {
  en,
  cn
};

function changeLanguage(lang) {
  const i18nElements = document.querySelectorAll('[data-i18n]');
  if (!i18nElements.length) return;
  i18nElements.forEach(element => {
    const val = element.getAttribute('data-i18n');
    element.textContent = resources[lang][val] || element.textContent || val;
  });
}

export {
  changeLanguage
}