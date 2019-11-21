import jQuery from 'jquery';

(function ($) {
    const videos = $('*[data-video-id]');

    if (videos.length) {
        videos.on('click', function () {
            const data = $(this).data('video-id');
            $('.responsive-embed', '#videoModal')
                .find('iframe')
                .first()
                .attr('src', 'https://www.youtube.com/embed/' + data);
        });
    }
})(jQuery);