$(document).ready(function () {
  $('.slider').slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    asNavFor: '.sliderbig',
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 7,
          asNavFor: '',
        },
      },
    ],
    mobileFirst: true,
  });

  $('.sliderbig').slick({
    asNavFor: '.slider',
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          asNavFor: '',
        },
      },
    ],
    mobileFirst: true,
  });

  $('.first-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 0);
  });

  $('.second-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 1);
  });

  $('.third-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 2);
  });

  $('.fourth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 3);
  });

  $('.fifth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 4);
  });

  $('.sixth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 5);
  });

  $('.seventh-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 6);
  });
});

$(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.burger-wrap').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

const readMore = document.querySelector('.more-text'),
  dots = document.querySelector('.sliderbig__item-content_dots'),
  readMoreButton = document.querySelector('.sliderbig__item-content-button');

let i = 0;
function read() {
  if (!i) {
    readMore.style.display = 'inline';
    dots.style.display = 'none';
    readMoreButton.innerHTML = 'скрыть текст';
    i = 1;
  } else {
    readMore.style.display = 'none';

    dots.style.display = 'inline';
    readMoreButton.innerHTML = 'Читать дальше';
    i = 0;
  }
}
