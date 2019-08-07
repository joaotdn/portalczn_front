import $ from 'jquery';

if ($('.font-plus').length) {
    const text = $('p','.post-content');
    let fontSize = parseInt(text.css('fontSize'));

    $('.font-plus').on('click', function (e) {
        e.preventDefault();
        if (fontSize <= 22) {
            fontSize++;
            text.css('fontSize',fontSize);
        }
    });

    $('.font-minus').on('click', function (e) {
        e.preventDefault();
        if (fontSize >= 16) {
            fontSize--;
            text.css('fontSize',fontSize);
        }
    });
}