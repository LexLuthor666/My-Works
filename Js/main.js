$(function () {
  $(".bike__slider, .slider__items").slick({
    arrows: false,
    dots: true,
    fade: true, // меняет стиль слайдера
    autoplay: true, // автосмена картинок слайда
    autoplaySpeed: 2000, //скорость смены картинок(ms)
  });
});
