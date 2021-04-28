
$(document).ready(function(){
    $('.slider_1').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        adaptiveHeight: true,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.right'),
        prevArrow: $('.left')
      });
              
  });

  $('.slider_2').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.right_2'),
    prevArrow: $('.left_2')
  });
      