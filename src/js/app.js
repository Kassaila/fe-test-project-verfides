// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navMobile from './modules/nav-mobile';
import bgVideoControl from './modules/bg-video-control';
import navScroll from './modules/nav-scroll';
import servicesSlider from './modules/services-slider';

(($) => {
  // When DOM is ready
  $(() => {
    navMobile.init();
    bgVideoControl.init();
    navScroll.scrollTo();
    servicesSlider.init();
    $('.picture-section').offset().top;
  });
})(jQuery);
