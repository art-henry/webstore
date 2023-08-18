// swiper

// import Swiper JS
import Swiper from "swiper/bundle";
// import Swiper styles

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
