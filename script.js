$('.footer__back-to-top').click(function () {
  $('body,html').animate({ scrollTop: 0}, 800);
});

$(window).scroll(function() {
  let scrolled = $(window).scrollTop();

  if(scrolled > 350) {
    $('.footer__back-to-top').addClass('active');
  } else {
    $('.footer__back-to-top').removeClass('active');
  }
});
