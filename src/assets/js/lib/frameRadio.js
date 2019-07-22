import jQuery from 'jquery';

(function($) {
  const radiosSelect = $('#radios-select');
  const isActiveRadio = localStorage.getItem('activeRadio');
  
  if (radiosSelect.length) {
    radiosSelect.on('change', function() {
      isActiveRadio =! "" && localStorage.setItem('activeRadio', $(this).val());
    });
  }
})(jQuery);