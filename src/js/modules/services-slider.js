const servicesSlider = () => {
  const init = () => {
    const $win = $(window);

    const slider = new Swiper('.swiper-container', {
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

    if ($win.width() > 480) slider.init();

    $win.on('resize', () => {
      if ($win.width() <= 480) {
        slider.destroy();
      } else {
        slider.init();
      }
    });
  };

  return {
    init,
  };
};

export default servicesSlider();
