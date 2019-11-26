import $ from 'jquery';

export default function () {
    const container = $('.component-loteria').first();
    const loterias = ['megasena', 'quina', 'lotofacil'];

    if (container.length) {
        loterias.forEach(function (loteria) {
            $.ajax({
                url: `http://apiloterias.com.br/app/resultado?loteria=${loteria}&token=aZPKBeUFVyT0dly`,
                dataType: "json",
                success: function (data) {
                    if (data) {
                        switch (data.nome) {
                            case 'QUINA':
                                data.dezenas.forEach(function (i) {
                                    $('.quina-results').append('<span>' + i + '</span>');
                                });
                                break;
                            case 'LOTOFÁCIL':
                                data.dezenas.forEach(function (i) {
                                    $('.lotofacil-results').append('<span>' + i + '</span>');
                                });
                                break;
                            default:
                                data.dezenas.forEach(function (i) {
                                    $('.megasena-results').append('<span>' + i + '</span>');
                                });
                        }
                    } else {
                        $('ul','.component-loteria').addClass('hide');
                    }
                }
            });
        });
    }
}