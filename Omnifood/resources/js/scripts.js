$(document).ready(function() {

  //When the user scrolls past the setpoint at '.js--section-features', waypoint will 
  //either add or remove the nav class
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky animate__animated animate__fadeIn');
    } else {
      $('nav').removeClass('sticky animate__animated animate__fadeIn');
    }},
    //Slight offset to make it kick in before setpoint
    {offset: '60px;'}
    );

  //Scroll on buttons - jQuery
    $('.js--scroll-to-plans').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
    });

    $('.js--scroll-to-start').click(function() {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    //Scroll on nav links - CSS Tricks
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        } ;
        });
      }
    }
  });

  //Animations on scroll
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {offset: '50%'});

  //Animate phone to slide in
  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  }, {offset: '50%'});

  //Fade in cities
  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  }, {offset: '50%'});

  //Pulse pricing plans
  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
  }, {offset: '50%'});

  //Toggle mobile nav button
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')

    nav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

  //Check window width for main nav so links return after resizing
  $(window).resize(function() {
    var browserWidth = $(window).width()
    
    if(browserWidth > 750) {
      $('.js--main-nav').css('display', 'block');
    } else {
      $('.js--main-nav').css('display', 'none');
    }

  });

});