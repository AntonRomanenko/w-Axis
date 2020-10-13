
let arrow = document.querySelectorAll('.arrow');
for (i = 0; i < arrow.length; i++) {
  let subMenu = arrow[i].nextElementSibling;
  let thisArrow = arrow[i];

  arrow[i].addEventListener('click', function () {
    subMenu.classList.toggle('open');
    thisArrow.classList.toggle('active');
  });
}  