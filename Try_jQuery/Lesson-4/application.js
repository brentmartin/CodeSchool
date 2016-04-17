$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $(this).closest('.tour').find('.photo').slideDown();
  });
});
