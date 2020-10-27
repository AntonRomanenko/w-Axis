$(document).ready(function () {
  $('.slider').slick({
    arrow: false,
    infinite: false,
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
    ]
  });
});

const customSelectors = $('.customSelect');
const slideSpeed = 200;

function closeAll(el) {
  $.each(customSelectors, function () {
    const ul = this.querySelector('ul');
    const isVisible = $(ul).is(':visible');
    const isPassedElement = el && el[0] === ul;
    if (isVisible && !isPassedElement) {
      $(ul).slideUp(slideSpeed);
    }
  });
}

$('html').on('click', function(e) {
  if($(e.target).parents('.customSelect').length == 0) {
    /* Hide dropdown here */
    closeAll();
  }
});

$(customSelectors).on('click', function () {
  const ul = this.querySelector('ul');
  $(ul).slideToggle(slideSpeed);
  closeAll($(ul));
});

$(customSelectors).on('click', 'li', function () {
  const parent = $(this).parent().siblings('.selected').find('.selected');
  parent[0].innerHTML = this.innerHTML;
  closeAll($(this).parent());
});

