$(function(){
    "use strict";

  // Logo slider start

$('.logo_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow:false,
    prevArrow:false,
  });

  // test slider start

  $('.test_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
   // sticky top start

  var navOff = $('.main_menu').offset().top;

  $(window).scroll(function(){
     var scrolling = $(this).scrollTop();

     if(scrolling > navOff){
         $(".main_menu").addClass('menu_fix')
     }
    else{
        $(".main_menu").removeClass('menu_fix');
    }

  });

//  back-to-top start

$('.back-to-top').click(function(){
  $('html, body').animate({
    scrollTop:0,
  } ,3000);
})

$(window).scroll(function(){
  var scroll2 = $(this).scrollTop();

  if( scroll2 > 150){
    $('.back-to-top').fadeIn();
  }

  else{
    $('.back-to-top').fadeOut();
  }
      
}); 



});