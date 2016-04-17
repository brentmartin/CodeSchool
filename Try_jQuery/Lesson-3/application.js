$(document).ready(function() {
  $('.tour').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });

  $('#filters').on('click', '.on-sale', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
});
