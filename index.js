const menubtn = document.querySelector('.line1');
const menubtn2 = document.querySelector('.line2');
const menubtn3 = document.querySelector('.line3');
const menubtn4 = document.querySelector('.mid');
const menubtn5 = document.querySelector('.mid2');
const menu = document.querySelector('.menu-card');
const hero = document.querySelector('.hero-left');
const card = document.querySelector('.card');
const body = document.querySelector('body');

menubtn.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  menubtn.classList.toggle('trans1');
  menubtn2.classList.toggle('trans2');
  menubtn3.classList.toggle('trans3');
});
menubtn2.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  menubtn.classList.toggle('trans1');
  menubtn2.classList.toggle('trans2');
  menubtn3.classList.toggle('trans3');
});
menubtn3.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  menubtn.classList.toggle('trans1');
  menubtn2.classList.toggle('trans2');
  menubtn3.classList.toggle('trans3');

});
menubtn4.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  menubtn.classList.toggle('trans1');
  menubtn2.classList.toggle('trans2');
  menubtn3.classList.toggle('trans3');
});
menubtn5.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  body.classList.toggle('active2');
  menubtn.classList.toggle('trans1');
  menubtn2.classList.toggle('trans2');
  menubtn3.classList.toggle('trans3');
});

// menubtn.foreach(function(e) {
//   e.addEventListener('click', function(e) {
//     menu.classList.toggle('active');
//     body.classList.toggle('active2');
//     // hero.style.backgroundColor = '#539EFB';
//   });
// });


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
    start: 'top 70%',

       
          
          // scrub: true,
          // pin: true

  }
  }
).to(afterrule,{
  duration:   .8,
  cssRule: {
    translateX: '6%',
    translateY: '-6%',
    width: '50%',
    height: '85%'
  }
}


).to(beforerule,{
  duration:   .8,
  cssRule: {
    translateX: '-6%',
    translateY: '6%',
    width: '50%',
    height: '85%'
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



gsap.timeline(
  {
      scrollTrigger: {
    trigger: '.contact',
    start: 'top 70%',

       
          
          // scrub: true,
          // pin: true

  }
  }
).to('.img',{
  duration:   .6,
  x: '0',
  height: '90%',
  marginTop: '0%'
}).to('.detailh1',{
  duration:   .6,
  x: '0',
}).to('.box2',{
  duration:   .3,
  x: '0'
} ).to('.box',{
  duration:   .0,
  borderTop: 2 + 'px solid #006ab1'
  },'<-0.5')




  //menu

