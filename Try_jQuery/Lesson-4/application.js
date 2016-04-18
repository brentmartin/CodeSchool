$(document).ready(function() {
  $('.see-photos').on('click', function() {
    $(this).closest('.tour').find('.photos').slideToggle();
  });
});
