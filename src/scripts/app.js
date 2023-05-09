import Swiper, { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { changeLanguage } from './i18n';
import skillsMap from '@d/skills.json';
import { sibling } from '@u/getElement.js';

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

// eye protection
const eyeProtectionContainer = document.querySelector('.eyeProtection');
const eyeProtectionBtn = document.querySelector('.nav__btn--eyeProtection');
let curEyeStatus = false;
eyeProtectionBtn.addEventListener('click', () => {
  eyeProtectionContainer.style.display = !curEyeStatus ? 'block' : 'none';
  eyeProtectionBtn.style.color = !curEyeStatus ? 'orange' : '';
  curEyeStatus = !curEyeStatus;
});

// # main
// ## skills
const skillsContainer = document.querySelector('.skills__container');
const skills = Object.keys(skillsMap);
skills.length && skills.forEach(skill => {
  const skillData = skillsMap[skill];
  if (skillData.title) {
    const { title, subtitle, headerIcon, defaultChecked, skillTree, i18n } = skillData;
    const skillTreeList = Object.keys(skillTree);
    const skillContent = document.createElement('div');
    const skillList = document.createElement('div');
    skillContent.setAttribute('class', 'skill__content');
    skillList.setAttribute('class', 'skill_lists');
    let list_str = '';
    !defaultChecked && skillContent.classList.add('skill__content--close');
    skillContent.innerHTML = `
      <div class="skill__header flex gap-col-3-2">
        <i class="iconfont ${headerIcon} skill__header--icon"></i>
        <div>
          <h3 class="skill__title" data-i18n="skill__title__${i18n}">${title}</h3>
          <p class="skill__subtitle" data-i18n="skill__subtitle__${i18n}">${subtitle}</p>
        </div>
        <span class="skill__icon--arrow"></span>
      </div>
    `;
    skillTreeList.forEach(item => {
      list_str += `
        <div class="skill__list">
          <div class="skill__item">
            <div class="skill__data flex between_center">
              <h4 class="skill__name">${item}</h4>
              <span class="skill__num">${skillTree[item]}%</span>
            </div>
            <div class="skill__percent">
              <div class="skill__percent--progress" style="width: ${skillTree[item]}%;"></div>
            </div>
          </div>
        </div>
      `;
    });
    skillList.innerHTML = list_str;
    skillContent.append(skillList);
    skillsContainer.append(skillContent);
  }
});
const skillHeaders = document.querySelectorAll('.skill__header');
skillHeaders.forEach(skillHeader => {
  skillHeader.addEventListener('click', () => {
    const skillContent = skillHeader.parentElement;
    if (skillContent.classList.contains('skill__content--close')) {
      skillContent.classList.remove('skill__content--close');
      const contentSiblings = sibling(skillContent);
      contentSiblings.forEach(content => {
        content.classList.add('skill__content--close');
      });
    } else {
      skillContent.classList.add('skill__content--close');
    }
  });
});

// ## experience
const experienceTabs = document.querySelectorAll('.experience__tab');
const experienceContents = document.querySelector('.experience__contents').children;
experienceTabs.forEach((experienceTab, idx) => {
  experienceTab.addEventListener('click', () => {
    if (!experienceTab.classList.contains('active')) {
      experienceTab.classList.add('active');
      experienceContents[idx].classList.remove('experience__content--close');
      const siblings = sibling(experienceTab);
      siblings.forEach(tab => {
        tab.classList.remove('active');
      });
      const siblingContents = sibling(experienceContents[idx]);
      siblingContents.forEach(content => {
        content.classList.add('experience__content--close');
      });
    }
  });
});

// ## portfolio
new Swiper(".portfolio__swiper", {
  modules: [Navigation, Pagination, Mousewheel, Autoplay],
  loop: true,
  mousewheel: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});