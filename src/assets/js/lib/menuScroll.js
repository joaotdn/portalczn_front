import $ from 'jquery';

let lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
      $('#menu-scroll').removeClass('active');
  } else if(st <= 200) {
      $('#menu-scroll').removeClass('active');
  } else {
      $('#menu-scroll').addClass('active');
  }
  lastScrollTop = st;
});