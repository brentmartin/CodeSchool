$(document).ready(function() {
  $('button').on('click', function() {
    var discount = $(this).closest('.tour').data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $'+discount+' discount.</span>');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});
