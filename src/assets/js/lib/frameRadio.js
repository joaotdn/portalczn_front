import $ from 'jquery';

const radioPlayer = $('#radio-player');

if (radioPlayer.length) {
  !!localStorage.getItem('activeRadio') && radioPlayer.addClass('active');

  $('#radios-select').change(function() {
    localStorage.setItem('activeRadio', $(this).val());
    !radioPlayer.hasClass('active') && radioPlayer.addClass('active');
  });
  
  $('.close-radio').click(function() {
    localStorage.setItem('activeRadio', null);
    radioPlayer.removeClass('active');
  });
}
