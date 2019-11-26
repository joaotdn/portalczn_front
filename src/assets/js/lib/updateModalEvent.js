import jQuery from 'jquery';

(function ($) {
    const changeModalInfo = function () {
        console.log('teste');
    };

    if ($('.widget-agenda').length) {
        $('.event-title').on('click', function () {
            const parent = $(this).parents('.accordion-item');
            const eDay = parent.find('.event-day').first().text();
            const thumb = parent.find('.event-thumb').first().data('bg');
            const hour = parent.find('.event-hour').first().text();
            const title = parent.find('.event-title').first().text();
            const description = parent.find('.event-description').first().text();
            const local = parent.find('.event-local').first().text();

            $('*[data-bg]','#scheduleModal')
                .first()
                .css('backgroundImage', 'url('+ thumb +')')
                .addClass('bgcover');

            $('[data-event-day]','#scheduleModal').first().html(eDay);
            $('[data-event-hour]','#scheduleModal').first().html(hour);
            $('h4','#scheduleModal').first().text(title);
            $('p > small', '#scheduleModal').text(description);
            $('[data-event-local]').first().html('<i class="fas fa-map-marker-alt"></i> ' + local);
        });
    }
})(jQuery);