$(document).ready(function () {
    $('.featured-collection-slider').slick({
      autoplay: false,
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
  