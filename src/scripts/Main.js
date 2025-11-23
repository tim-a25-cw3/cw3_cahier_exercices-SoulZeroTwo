import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.js-swiper', {
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 1,
    },
  },
});

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
  }
}
new Main();
