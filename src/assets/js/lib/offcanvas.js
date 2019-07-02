import $ from 'jquery';

const offcanvas = function () {
  $('[data-mobile-menu]').on('click', function () {
    let canvas = $('.offcanvas-layer');
    let menu = $('#menu-offcanvas');

    if (canvas.hasClass('active') && menu.hasClass('active')) {
        canvas.removeClass('active');
        menu.removeClass('active');
    } else {
        canvas.addClass('active');
        menu.addClass('active');
    }
  });
};
offcanvas();