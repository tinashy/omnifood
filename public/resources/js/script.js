$(document).ready(function () {

  /* For the sticky navigation */
  $('.js--section-features').waypoint(function (direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    //this triggers the event 60px before we get to the html element we targeted with the .js--section-features class;
    offset: '60px;'
  });

});