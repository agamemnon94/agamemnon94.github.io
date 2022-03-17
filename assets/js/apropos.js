let lastScrollTop = 0;
let navbar = document.querySelector('.header__container');
let proj = document.querySelector('#projet');

window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
});

// Navbar
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || this.document.scroolTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('header__hidden');
  } else {
    navbar.classList.remove('header__hidden');
  }
  lastScrollTop = scrollTop;
})

// Fonction mode nuit sur le site
let nightbtn = document.getElementById('nightbtn');
let body = document.getElementById('bodynight');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let h2apropos = document.querySelectorAll('.h2apropos');
let espace = document.querySelectorAll('.espace');

nightbtn.addEventListener('click', function () {
  body.classList.toggle('body__night');
  sun.classList.toggle('light');
  moon.classList.toggle('darknight');
  h2apropos.forEach(item => {
    item.classList.toggle('clear__border');
  });
  espace.forEach(element => {
    element.classList.toggle('clear__border');
  });

})

const btn1 = document.querySelector('.btn1');
let navBar = document.querySelector('.header__container');
let accueil = document.getElementById('accueil');
let propos = document.getElementById('propos');
let projet = document.getElementById('projet');
let alexandre = document.getElementById('alexandre');

function burger() {
  btn1.classList.toggle('active')
  navBar.classList.toggle('active__menu');
  accueil.classList.toggle('active__a');
  propos.classList.toggle('active__a');
  projet.classList.toggle('active__a');
  alexandre.classList.toggle('active');

}
btn1.addEventListener('click', burger);

proj.addEventListener('click', () => {
  document.getElementById('section__apropos2').scrollIntoView({ block: "start", behavior: "smooth", top: 0, left: 0 })
})

