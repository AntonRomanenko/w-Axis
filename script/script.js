$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    infinite: false,
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
    ]
  });

  const customSelectors = $('.customSelect');
  // fill selectors with options

  const createOption = (value) => {
    const option = document.createElement('li');
    const optionContent = document.createElement('span');
    optionContent.innerHTML = value;
    option.append(optionContent);
    return option;
  }

  // fill custom selectors with options
  const selectors = document.querySelectorAll('.customSelect ul');
  selectors.forEach(el => {
    for (let i = 0; i < 51; i++) {
      const option = createOption(i);
      el.append(option);
    }
  })

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
    e.preventDefault();
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
});

