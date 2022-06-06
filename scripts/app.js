const menuItems = document.querySelector('.nav__container');

const featuresBtn = document.getElementById('features-btn');
const featuresMenu = document.querySelector('#features-menu');
const featuresIcon = document.querySelector('.fa-solid');

const companyBtn = document.querySelector('#company-btn');
const companyMenu = document.querySelector('#company-menu');
const companyIcon = document.querySelector('#c-icon');

const openMenu = document.querySelector('.menu__container');

const overlay = document.getElementById('overlay');

featuresBtn.addEventListener('click', function () {
  companyIcon.classList.remove('fa-angle-up');

  if (featuresIcon.classList.contains('fa-angle-up')) {
    featuresIcon.classList.remove('fa-angle-up');
  } else {
    featuresIcon.classList.add('fa-angle-up');
  }
  featuresMenu.classList.toggle('show-menu');
  companyMenu.classList.remove('show-menu');
});

companyBtn.addEventListener('click', function () {
  featuresIcon.classList.remove('fa-angle-up');

  if (companyIcon.classList.contains('fa-angle-up')) {
    companyIcon.classList.remove('fa-angle-up');
  } else {
    companyIcon.classList.add('fa-angle-up');
  }

  companyMenu.classList.toggle('show-menu');
  featuresMenu.classList.remove('show-menu');
});

openMenu.addEventListener('click', function () {
  companyMenu.classList.remove('show-menu');
  featuresMenu.classList.remove('show-menu');
  companyIcon.classList.remove('fa-angle-up');
  featuresIcon.classList.remove('fa-angle-up');
  menuItems.classList.toggle('show-nav');
  overlay.classList.toggle('show-overlay');
  openMenu.classList.toggle('menu-open');
});
