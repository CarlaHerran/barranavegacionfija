$(window).scroll(function(){

  var scroll = $(window).scrollTop();

  if (scroll > 0 ) {
    $('.top-nav').addClass('scrolled');
  }

  if (scroll <= 0 ) {
    $('.top-nav').removeClass('scrolled');
 }

});
