import $ from 'jquery';

const offcanvas = function () {
    let canvas = $('.offcanvas-layer');
    let menu = $('#menu-offcanvas');

    $('[data-mobile-menu]').on('click', function () {
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