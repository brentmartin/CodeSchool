$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();

    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This event handler should not be called.');
  });
});
