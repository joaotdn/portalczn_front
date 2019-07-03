$(window).on('scroll', function () {
    if ($(this).scrollTop() > 160) {
        $('.scroll-menu, .back-top').addClass('show');
    } else {
        $('.scroll-menu, .back-top').removeClass('show');
    }
});