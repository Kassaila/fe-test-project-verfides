const bgVideoControl = () => {
  const $video = $('.hero-section__background video')[0];
  const $btn = $('.hero-section__btn-control');

  const init = () => {
    $btn.on('click', () => {
      if ($video.paused) {
        $video.play();
        $btn.toggleClass('hero-section__btn-control_paused').text('Pause');
      } else {
        $video.pause();
        $btn.toggleClass('hero-section__btn-control_paused').text('Play');
      }
    });
  };

  return {
    init,
  };
};

export default bgVideoControl();
