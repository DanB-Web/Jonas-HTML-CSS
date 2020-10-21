$(document).ready(function() {

  //When the user scrolls past the setpoint at '.js--section-features', waypoint will either add or remove the nav class
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }},
    {offset: '60px;'})

});