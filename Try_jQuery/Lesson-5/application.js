$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});
