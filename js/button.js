const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  headerMenu.classList.toggle('active');
});

// привет из другого места ПК