import en from '../locales/en.json';
import cn from '../locales/cn.json';

// resource map(资源对象)
const resources = {
  en,
  cn
};

// change language(语言切换)
function changeLanguage(lang) {
  changeElements(lang, 'textContent', '[data-i18n]');
  changeElements(lang, 'title', '[data-i18n-icon]');
}

/**
 * change elements(修改元素)
 * @param {string} lang 'en' | 'cn'
 * @param {string} type 'textContent' | 'title'
 * @param {string} customKey '[data-i18n]' | '[data-i18n-icon]'
 * @returns 
 */
function changeElements(lang, type, customKey) {
  const i18nElements = document.querySelectorAll(customKey);
  if (!i18nElements.length) return;
  const dataSetReg = /^\[([a-zA-Z0-9\-]+)\]$/;
  const matchResult = customKey.match(dataSetReg)[1];
  i18nElements.length && i18nElements.forEach(element => {
    const val = element.getAttribute(matchResult);
    changeElementByType(type, element, lang, val); 
  });
}

/**
 * change element by type(通过类型修改文本)
 * @param {string} type 'textContext' | 'title'
 * @param {HTMLElment} element 
 * @param {string} lang 'en' | 'cn' 
 * @param {string} val 
 */
function changeElementByType(type, element, lang, val) {
  element[type] = resources[lang][val] || element[type] || val;
}

export {
  changeLanguage
}