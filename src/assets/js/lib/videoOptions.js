import $ from 'jquery';

const lightBtn = $("*[data-video-light]");

if (lightBtn.length) {
    lightBtn.on('click', function (e) {
        e.preventDefault();
        $('.responsive-embed, .video-options').toggleClass('higher');
        $('.video-options-mask').toggleClass('active');
        $('a:first-child','.video-options').toggleClass('light');
    });
}