import jQuery from 'jquery';

(function ($) {
    $(document).ready(function () {
        const url = "https://api.hgbrasil.com/finance/quotations?format=json-cors&key=73d8886b";
        const block = $('.stack-component').eq(0);

        if (block.length) {
                $.get(url, function (data) {
                if (data) {
                    const {results: {currencies}} = data;
                    let name, prop;

                    for (prop in currencies) {
                        if (currencies.hasOwnProperty(prop) && currencies[prop].name !== undefined) {
                            switch (currencies[prop].name) {
                                case 'Dollar':
                                    name = 'Dólar comercial';
                                    break;
                                case 'Argentine Peso':
                                    name = 'Peso Argentino';
                                    break;
                                case 'Pound Sterling':
                                    name = 'Libra';
                                    break;
                                default:
                                    name = currencies[prop].name
                            }

                            $('ul', block).append(`<li><strong class="text-uppercase">${name}</strong><span> R$ ${currencies[prop].buy.toFixed(2)}</span></li>`);
                        }
                    }
                } else {
                    block.addClass('hide');
                }
            });
        }
    });
})(jQuery);