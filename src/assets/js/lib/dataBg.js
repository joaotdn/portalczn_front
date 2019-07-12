import $ from 'jquery';

const el = $('*[data-bg]');

if (el.length) {
    el.each(function () {
        let dt = $(this).data('bg');
        dt && $(this).css('backgroundImage', 'url('+ dt +')')
            .addClass('bgcover');
    });
}