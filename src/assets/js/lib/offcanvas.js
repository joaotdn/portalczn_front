import $ from 'jquery';

const offcanvas = function () {
    $('[data-mobile-menu]').on('click', function (e) {
        e.preventDefault();
        $('#menu-offcanvas, .offcanvas-layer').toggleClass('active');
    });
};
offcanvas();