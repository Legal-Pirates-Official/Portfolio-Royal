const menubtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-card');
const hero = document.querySelector('.hero-left');
const card = document.querySelector('.card');
const body = document.querySelector('body');
menubtn.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  // hero.style.backgroundColor = '#539EFB';
});



VanillaTilt.init(document.querySelectorAll('.shake'), {
  max: 10,
  speed: 500,
  scale: 1.05,
  perspective: 3000
});


var afterrule = CSSRulePlugin.getRule(".content:after");
var beforerule = CSSRulePlugin.getRule(".content:before");


gsap.timeline(
  {
      scrollTrigger: {
    trigger: '.about',
    start: 'top 80%',

       
          
          // scrub: true,
          // pin: true

  }
  }
).to(afterrule,{
  duration:   .8,
  cssRule: {
    translateX: '6%',
    translateY: '-6%',
  }
}
  

).to(beforerule,{
  duration:   .8,
  cssRule: {
    translateX: '-6%',
    translateY: '6%',
  }
}, '>-0.5')
gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top 50%',
  }}
  
).to(
  '.forest',{
    duration:   1.5,
    bottom: '0%'
  }
)