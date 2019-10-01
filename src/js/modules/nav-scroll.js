const navScroll = () => {
  const $scrollClass = $('.hero-section__btn_scroll-to');
  const scrollDelay = 300;
  const $win = $(window);

  const scrollToAnchor = (target) => {
    const winHeight = $win.height();
    const anchorVal = $(target).offset().top;
    let timeRate = Math.round(Math.abs($win.scrollTop() - anchorVal) / winHeight);

    timeRate = timeRate > 0 ? timeRate : 1;

    if (winHeight * 0.1 < Math.abs($win.scrollTop() - anchorVal)) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: anchorVal,
          },
          scrollDelay * timeRate,
        );
    }
    return scrollDelay * timeRate;
  };

  const scrollTo = () => {
    $scrollClass.on('click', function () {
      const anchorId = $(this).attr('data-anchor');

      if (!anchorId) return false;

      return scrollToAnchor(anchorId);
    });
  };

  return {
    scrollTo,
  };
};

export default navScroll();
