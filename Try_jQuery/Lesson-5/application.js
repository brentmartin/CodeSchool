$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'opacity': '1'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});
