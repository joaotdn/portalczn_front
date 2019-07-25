import $ from 'jquery';

const radioPlayer = $('#radio-player');
const RADIO_DELAY = 1500;

const playRadio = function(url) {
  let player = document.getElementById('radio-audio');
  player.setAttribute('src', url);
  player.play();
};

const setRadioName = function() {
  $('.radio-name').text('Aguarde...');
  let obj = JSON.parse(localStorage.getItem('activeRadio'));
  if (obj) {
    setTimeout(function() {
      $('.radio-name').text(obj.name);
      playRadio(obj.url);
    }, RADIO_DELAY);
  }
};

if (radioPlayer.length) {
  setTimeout(function() {
    !!localStorage.getItem('activeRadio') && radioPlayer.addClass('active') && setRadioName();
  }, RADIO_DELAY * 2);

  $('#radios-select').change(function() {
    let obj = {
      url: $(this).val(),
      name: $('option:selected', this).text()
    };
    localStorage.setItem('activeRadio', JSON.stringify(obj));
    !radioPlayer.hasClass('active') && radioPlayer.addClass('active');
    setRadioName();
  });
  
  $('.close-radio').click(function() {
    localStorage.removeItem('activeRadio');
    radioPlayer.removeClass('active');
    document.getElementById('radio-audio').pause();
  });
}
