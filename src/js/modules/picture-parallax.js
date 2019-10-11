const pictureParallax = () => {
  const init = () => {
    if (typeof window.ontouchstart === 'undefined') {
      $('.parallax-section').jarallax({
        speed: 0.4,
      });
    }
  };

  return {
    init,
  };
};

export default pictureParallax();
