const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('show');
});
  document.addEventListener('DOMContentLoaded', () => {
    const animatedAboutMeImg = document.querySelectorAll('.aboutme__img');

    animatedAboutMeImg.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('visible');
      }, (index + 1) * 1000); // Задержка в 500 мс между каждым текстом
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const animatedAboutMeText = document.querySelectorAll('.aboutme__text');

    animatedAboutMeText.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('visible');
      }, (index + 1) * 1000); // Задержка в 500 мс между каждым текстом
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const animatedTexts = document.querySelectorAll('.skills__text');

    animatedTexts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('visible');
      }, (index + 1) * 700); // Задержка в 500 мс между каждым текстом
    });
  });


  