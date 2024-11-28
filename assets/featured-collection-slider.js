$(document).ready(function () {
  var autoplaySetting = $('.featured-collection-slider').data('autoplay') === true;

  $('.featured-collection-slider').slick({
      autoplay: autoplaySetting,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      slidesToShow: 4,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});
