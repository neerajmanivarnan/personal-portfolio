function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



//revela up 

const elements = document.querySelectorAll('.reveal-on-scroll');

const options = {
  root: null, 
  threshold: 0.6, 
};

const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
});

elements.forEach(element => observer1.observe(element));


//smooth animation

$(document).ready(function() {
    $('.reveal-on-scroll').waypoint(function(direction) {
      if (direction === 'down') {
        
      } else if (direction === 'up') {
        $(this).css('transform', 'translateY(0)'); 
      }
    }, {
      offset: '50%' 
    });
  });

  
  //hardware acceleration

  const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '#trigger-element', 
  duration: 400, 
  triggerHook: 0.5, 
})
.setTween(new ScrollMagic.TweenMax.to('#html', 1, { translateY: '-100px', ease: 'linear' })) 
.addToController(controller);
