import jQuery from 'jquery';

(function ($) {
    const lon = -38.5804421;
    const lat = -6.9168561;
    const apiKey = 'e06246aee68406482d3ab9aa7f1cc258';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=${apiKey}&units=metric`;

    $.get(apiUrl, function (data) {
        const comp = $('.weather-component');
        let icon;

        if (data.main) {
            let desc = data.weather[0].main;
            let min = Math.floor(data.main.temp_min);
            let max = Math.floor(data.main.temp_min);

            switch (desc) {
                case 'Clear':
                    icon = '<i class="fas fa-cloud-sun"></i>';
                    break;
                case 'Rain':
                    icon = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
                case 'Extreme':
                    icon = '<i class="fas fa-sun"></i>';
                    break;
                case 'Thunderstorm':
                    icon = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
                case 'Drizzle':
                    icon = '<i class="fas fa-cloud-rain"></i>';
                    break;
                default:
                    icon = '<i class="fas fa-cloud"></i>';
            }

            $('.icon', comp).html(icon);
            $('.min', comp).prepend(min);
            $('.max', comp).prepend(max);
            $(comp).removeClass('hide');
            $('.weather-mini').prepend(`${icon} ${min}° `);
        } else {
            comp.addClass('hide');
        }
    });
})(jQuery);