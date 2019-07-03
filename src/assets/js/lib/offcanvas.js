import $ from 'jquery';

const offcanvas = function () {
    $('[data-mobile-menu]').on('click', function () {
        $('#menu-offcanvas, .offcanvas-layer').toggleClass('active');
    });
};
offcanvas();