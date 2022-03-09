document.addEventListener("DOMContentLoaded", () => {

  const today = new Date();
  let dateViewed = new Date(Date.parse(localStorage.dateViewed) || Date.now() - 86400000);

  const main = document.getElementById('main');
  const title = document.getElementById('title');
  const tagline = document.getElementById('tagline');
  const online = document.getElementById('online');
  const marquee = document.getElementById('marquee');
  const directory = document.getElementById('directory');
  const replay = document.getElementById('replay');
  const replayIcon = document.getElementById('replay-icon');
  let sectionArr = ['about', 'digital', 'et-cetera', 'contact'];
  
  function introAnimation () {
    setTimeout(() => {
      title.classList.remove('hidden');
      title.classList.add('animate__animated');
      title.classList.add('animate__fadeInDown');
    }, 1500)
     
    setTimeout(() => {
      tagline.classList.remove('hidden');
      tagline.classList.add('animate__animated');
      tagline.classList.add('animate__fadeInLeft');
    }, 2150);
    
    setTimeout(() => {
      online.classList.remove('invisible');
      online.classList.add('animate__animated');
      online.classList.add('animate__jackInTheBox');
    }, 4750)
    
    setTimeout(() => {
      marquee.classList.remove('intro');
      marquee.classList.add('animate__animated');
      marquee.classList.add('animate__intro-finish');
    }, 8000)
    
    setTimeout(() => {
      directory.classList.remove('hidden');
      directory.classList.add('animate__animated');
      directory.classList.add('animate__fadeIn');

      replay.classList.remove('invisible');
      replayIcon.style.cursor = "pointer";
      replayIcon.addEventListener('click', resetAnimation);

      marquee.classList.remove('animate__intro-finish');

      localStorage.setItem('dateViewed', today);
      dateViewed = today;

    }, 9000)
  }

  function defaultPositions () {
      title.classList.remove('hidden');
      tagline.classList.remove('hidden');
      online.classList.remove('invisible');
      marquee.classList.remove('intro');
      directory.classList.remove('hidden');
      replay.classList.remove('invisible');
      replayIcon.addEventListener('click', resetAnimation);
  }
  
  // If site has not been visited today, play intro animation
  if (dateViewed.getDate() < today.getDate()) {
    introAnimation();
  } else {
    defaultPositions();
  }

  function resetAnimation() {
    setTimeout(() => {
      main.style.opacity = 1;
      title.classList.add('hidden');
      title.classList.remove('animate__animated');
      title.classList.remove('animate__fadeInDown');
      tagline.classList.add('hidden');
      tagline.classList.remove('animate__animated');
      tagline.classList.remove('animate__fadeInLeft');
      online.classList.add('invisible');
      online.classList.remove('animate__animated');
      online.classList.remove('animate__jackInTheBox');
      marquee.classList.add('intro');
      marquee.classList.remove('animate__animated');
      marquee.classList.remove('animate__intro-finish');
      directory.classList.add('hidden');
      directory.classList.remove('animate__animated');
      directory.classList.remove('animate__fadeIn');
      replay.classList.add('invisible');
      sectionArr.forEach(section => {
        let elem = document.getElementById(section+'-link');
        if (elem.classList.contains('open')) {
          elem.classList.remove('open');
          elem.style.maxHeight = '0px';
          elem.style.marginBottom = '0px';
        }
      });    
    }, 1000);

    setTimeout(() => {
      introAnimation();
    }, 1250);
    
    replayIcon.style.cursor = "default";
    replayIcon.removeEventListener('click', resetAnimation);
    main.style.opacity = 0;
  }


  // 
  //  POPOUT MENUS

  function fadeToggle(elem) {
      if (elem.classList.contains('open')) {
        elem.classList.remove('open');
        elem.style.maxHeight = '0px';
        elem.style.marginBottom = '0px';
      } else {
        elem.classList.add('open')
        let sectionHeight = elem.scrollHeight;
        elem.style.maxHeight = sectionHeight + 'px';
        elem.style.marginBottom = '12px';
      }
  }

  sectionArr.forEach(section => {
    document.getElementById(section+'-link').addEventListener('click', (e) => {
      e.preventDefault();
      fadeToggle(document.getElementById(section+'-menu'));
    })
  })


  window.addEventListener('resize', () => {
    sectionArr.forEach(section => {
      let elem = document.getElementById(section+'-menu');
      if (elem.classList.contains('open')) {
        let sectionHeight = elem.scrollHeight;
        let currentHeight = elem.clientHeight;
        if (sectionHeight > currentHeight) {
          let elementTransition = elem.style.transition;
          elem.style.transition = '';
          requestAnimationFrame(function() {
            elem.style.maxHeight = sectionHeight + 'px';
            elem.style.transition = elementTransition;
          })
        }
      }
    });
  });


// THE END...
})