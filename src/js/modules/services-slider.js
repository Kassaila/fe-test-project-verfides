const servicesSlider = () => {
  const init = () => {
    const $win = $(window);
    let slider;
    let state = 'destroy';

    const _sliderInit = () => {
      slider = new Swiper('.services-slider', {
        // Optional parameters
        init: false,
        direction: 'horizontal',
        speed: 300,
        loop: false,
        autoHeight: true,
        navigation: {
          nextEl: '.services-slider__btn_next',
          prevEl: '.services-slider__btn_prev',
        },
        breakpoints: {
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

    if ($win.width() > 767) _sliderInit();

    $win.on('resize', () => {
      if ($win.width() <= 767 && state !== 'destroy') {
        _sliderDestroy();
      } else if ($win.width() > 767 && state === 'destroy') {
        _sliderInit();
      }
    });
  };

  return {
    init,
  };
};

export default servicesSlider();
