const navMobile = () => {
  const $nav = $('.nav__list');
  const $navButton = $('.nav__btn-mobile');
  const ACTIVE_CLASS = 'nav__btn-mobile_active';

  const init = () => {
    $navButton.on('click', () => {
      if (!$navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.addClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      } else {
        $navButton.removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
      return true;
    });
  };

  return {
    init,
  };
};

export default navMobile();
