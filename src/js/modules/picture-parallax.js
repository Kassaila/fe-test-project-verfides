const pictureParallax = () => {
  const init = () => {
    $('.picture-section').jarallax({
      speed: 0.4,
    });
  };

  return {
    init,
  };
};

export default pictureParallax();
