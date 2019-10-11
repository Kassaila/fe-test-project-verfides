const bgVideoControl = () => {
  const $video = $('.hero-section__background video')[0];
  const $btn = $('.hero-section__btn-control');
  const BTN_TEXT_PAUSE = $btn.attr('data-text-pause');
  const BTN_TEXT_PLAY = $btn.attr('data-text-play');
  const BTN_CLASS_PAUSED = 'hero-section__btn-control_paused';

  function _addEventListeners() {
    $btn.on('click', () => {
      if ($video.paused) {
        $video.play();
        $btn.toggleClass(BTN_CLASS_PAUSED).text(BTN_TEXT_PAUSE);
      } else {
        $video.pause();
        $btn.toggleClass(BTN_CLASS_PAUSED).text(BTN_TEXT_PLAY);
      }
    });
  }

  const init = () => {
    _addEventListeners();
  };

  return {
    init,
  };
};

export default bgVideoControl();
