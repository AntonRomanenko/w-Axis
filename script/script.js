$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrow: false,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        infinite: true,
        dots: true,
      }
    }
  ]
  });
});

$(document).ready(function () {
  $('.products').slick({
    arrow: true,
    infinite: false,
    dots: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });
});





$(document).ready(function () {
  $('.slick-footer').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          speed: 300,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          infinite: true,
          speed: 300,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          speed: 300,
        }
      }
    ]
  });
});

