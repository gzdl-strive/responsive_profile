function scrollChangeHeader() {
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