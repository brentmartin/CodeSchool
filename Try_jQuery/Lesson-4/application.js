$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('#tour').on('mouseenter', 'li', function() {
    $('.photos').slideToggle();
  });
});
