$(document).ready(function () {
  $('div#container').on("click", 'button.butt', function () {
    $('.row-offcanvas').toggleClass('active');
  });
});