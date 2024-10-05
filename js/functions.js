$(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 49) {
          $('.navbar').addClass('header-fixed');
      } else {
          $('.navbar').removeClass('header-fixed');
      }
    });
  });