$(document).ready(function() {
  
  //   INTRO ANIMATION
    setTimeout(function() {
      $('#title')
      .removeClass('hidden')
      .addClass('animate__animated animate__fadeInDown')
    }, 1000)
     
    setTimeout(function() {
      $('#tagline')
      .removeClass('hidden')
      .addClass('animate__animated animate__fadeInLeft')
    }, 2400);
    
    
    setTimeout(function() {
      $('#online')
      .fadeTo('fast', 1)
      .addClass('animate__animated animate__jackInTheBox')
    }, 5000)
    
    setTimeout(function() {
      $('#marquee')
      .removeClass('intro')
      .css('margin', '1em');
    }, 8000)
    
    setTimeout(function() {
      $('div.directory')
      .fadeIn(1000);
      $('.marquee')
      .css('position', 'relative')
    }, 9000)
    
  //  POPOUT MENUS
    $('#digital').click(function() {
      $('#digital-menu').fadeToggle( "slow", "linear" );
    })
    
    $('#et-cetera').click(function() {
      $('#et-cetera-menu').fadeToggle( "slow", "linear" );
    })
    
    $('#about').click(function() {
      $('#about-menu').fadeToggle( "slow", "linear" );
    })
    
  });