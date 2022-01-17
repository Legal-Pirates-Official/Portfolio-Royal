const menubtn = document.querySelector('.menu');
const menu = document.querySelector('.menu-card');
const hero = document.querySelector('.hero-left');
const card = document.querySelector('.card');
menubtn.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  // hero.style.backgroundColor = '#539EFB';
});



VanillaTilt.init(document.querySelectorAll('.shake',), {
  max: 10,
  speed: 500,
  scale: 1.05,
  perspective: 3000
});