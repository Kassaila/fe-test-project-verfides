const pictureParallax = () => {
  const PICTURE_CLASS = '.picture-section__image-parallax';

  const init = () => {
    const parallax = new Parallax(PICTURE_CLASS, {
      offsetYBounds: 50,
      intensity: 30,
      center: 0.5,
      safeHeight: 0.15,
    });

    parallax.init();
  };

  return {
    init,
  };
};

export default pictureParallax();
