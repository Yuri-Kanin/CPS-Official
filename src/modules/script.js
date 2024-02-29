
const headerButtonBurger = document.querySelector('.header__button--burger');
const headerButtonClose = document.querySelector('.menu__header-elem-button--close');
const headerButtonCall = document.querySelector('.header__button--call');
const asideMenu = document.querySelector('.menu');
const headerSection = document.querySelector('.header');
const mainContent = document.querySelector('.main');
const footerSection = document.querySelector('.footer');
const menuButtonCall = document.querySelector('.menu__footer-button--call');
const modalSection = document.querySelector('.modal');
const modalSectionButtonClose = modalSection.querySelector('.modal__button');

headerButtonBurger.addEventListener('click', function () {
  asideMenu.classList.remove('menu--block');
  headerSection.classList.add('header--block');
  mainContent.classList.add('main--block');
  footerSection.classList.add('footer--block');
});

headerButtonClose.addEventListener('click', function () {
  asideMenu.classList.add('menu--block');
  headerSection.classList.remove('header--block');
  mainContent.classList.remove('main--block');
  footerSection.classList.remove('footer--block');
});

menuButtonCall.addEventListener('click', function () {
  asideMenu.classList.add('menu--block');
  headerSection.classList.add('header--block');
  mainContent.classList.add('main--block');
  footerSection.classList.add('footer--block')
  modalSection.classList.remove('modal--block');

});

headerButtonCall.addEventListener('click', function () {
  headerSection.classList.add('header--block');
  mainContent.classList.add('main--block');
  footerSection.classList.add('footer--block')
  modalSection.classList.remove('modal--block');
});


modalSectionButtonClose.addEventListener('click', function () {
  modalSection.classList.add('modal--block');
  headerSection.classList.remove('header--block');
  mainContent.classList.remove('main--block');
  footerSection.classList.remove('footer--block');
})


const infoSection = document.querySelector(".info");
const paragraph = infoSection.querySelector(".info__text--hidden");
const infoButtonShow = infoSection.querySelector(".buttons--elem-show");
const infoButtonHide = infoSection.querySelector(".buttons--elem-hidden");


infoButtonShow.addEventListener("click", function () {
  infoButtonShow.classList.add("buttons--hidden");
  infoButtonHide.classList.remove("buttons--hidden");
  paragraph.textContent =
    "Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.";
});
infoButtonHide.addEventListener("click", function () {
  infoButtonHide.classList.add("buttons--hidden");
  infoButtonShow.classList.remove("buttons--hidden");
  if (window.innerWidth < 768) {
    paragraph.textContent = "";
  } else {
    paragraph.textContent =
      "Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера";
  }
});


const brandsSection = document.querySelector(".brands");
const brandsListSection = brandsSection.querySelector(".brands__list");
const brandsButtonShow = brandsSection.querySelector(".buttons--elem-show");
const brandsButtonHide = brandsSection.querySelector(".buttons--elem-hidden");

brandsButtonShow.addEventListener("click", function () {
  brandsButtonShow.classList.add("buttons--hidden");
  brandsButtonHide.classList.remove("buttons--hidden");
  brandsListSection.classList.add("brands__list--maxHeight");
});

brandsButtonHide.addEventListener("click", function () {
  brandsButtonShow.classList.remove("buttons--hidden");
  brandsButtonHide.classList.add("buttons--hidden");
  brandsListSection.classList.remove("brands__list--maxHeight");
});

const technicsSection = document.querySelector(".technics");
const technicsListSection = technicsSection.querySelector(".technics__list");
const technicsButtonShow = technicsSection.querySelector(".buttons--elem-show");
const technicsButtonHide = technicsSection.querySelector(
  ".buttons--elem-hidden"
);

technicsButtonShow.addEventListener("click", function () {
  technicsButtonShow.classList.add("buttons--hidden");
  technicsButtonHide.classList.remove("buttons--hidden");
  technicsListSection.classList.add("technics__list--maxHeight");
});

technicsButtonHide.addEventListener("click", function () {
  technicsButtonShow.classList.remove("buttons--hidden");
  technicsButtonHide.classList.add("buttons--hidden");
  technicsListSection.classList.remove("technics__list--maxHeight");
});

const brandsSwiperContainer = brandsSection.querySelector('.brands__container');
const brandsSwiperBullets = brandsSection.querySelector('.bullets')
const brandsSwiperWrapper = brandsSwiperContainer.querySelector('.brands__list');
const brandsSwiperSlides = brandsSwiperWrapper.querySelectorAll('.brands__item');

const technicsSwiperContainer = technicsSection.querySelector('.technics__container');
const technicsSwiperBullets = technicsSection.querySelector('.bullets');
const technicsSwiperWrapper = technicsSwiperContainer.querySelector('.technics__list');
const technicsSwiperSlides = technicsSwiperContainer.querySelectorAll('.technics__item');

const pricesSection = document.querySelector('.prices');
const pricesSwiperContainer = pricesSection.querySelector('.prices__container');
const pricesSwiperBullets = pricesSection.querySelector('.bullets');
const pricesSwiperWrapper = pricesSwiperContainer.querySelector('.prices__list');
const pricesSwiperSlides = pricesSwiperContainer.querySelectorAll('.prices__item');

if (window.innerWidth < 768) {
  brandsSwiperContainer.classList.add('swiper');
  brandsSwiperWrapper.classList.add('swiper-wrapper');
  for (var i = 0; i < brandsSwiperSlides.length; i++) {
    brandsSwiperSlides[i].classList.add('swiper-slide');
  }
  brandsSwiperBullets.classList.add('swiper-pagination');

  technicsSwiperContainer.classList.add('swiper');
  technicsSwiperWrapper.classList.add('swiper-wrapper');
  for (var a = 0; a < technicsSwiperSlides.length; a++) {
    technicsSwiperSlides[a].classList.add('swiper-slide');
  }
  technicsSwiperBullets.classList.add('swiper-pagination');

  pricesSwiperContainer.classList.add('swiper');
  pricesSwiperWrapper.classList.add('swiper-wrapper');
  for (var x = 0; x < pricesSwiperSlides.length; x++) {
    pricesSwiperSlides[x].classList.add('swiper-slide');
  }
  pricesSwiperBullets.classList.add('swiper-pagination');

}
