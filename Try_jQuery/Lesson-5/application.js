$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
		$(this).addClass('highlight');
  });
  $('.tour').on('mouseleave', function() {
		$(this).removeClass('highlight');
  });
});
