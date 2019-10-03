import Swiper from 'swiper';

const servicesSlider = () => {
  const init = () => {
    const $win = $(window);
    let slider;
    let state = 'destroy';

    const _sliderInit = () => {
      slider = new Swiper('.swiper-container', {
        // Optional parameters
        init: false,
        direction: 'horizontal',
        speed: 300,
        loop: false,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-btn_next',
          prevEl: '.swiper-btn_prev',
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });

      slider.init();
      state = 'init';
    };

    const _sliderDestroy = () => {
      slider.destroy();
      state = 'destroy';
    };

    if ($win.width() > 480) _sliderInit();

    $win.on('resize', () => {
      if ($win.width() <= 480 && state !== 'destroy') {
        _sliderDestroy();
      } else if ($win.width() > 480 && state === 'destroy') {
        _sliderInit();
      }
    });
  };

  return {
    init,
  };
};

export default servicesSlider();
