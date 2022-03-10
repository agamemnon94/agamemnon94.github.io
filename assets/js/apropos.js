let lastScrollTop = 0;
let navbar = document.querySelector('.header__container');

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

nightbtn.addEventListener('click', function () {
  body.classList.toggle('body__night');
  suivant.classList.toggle('next__dark__active');
  precedant.classList.toggle('prev__dark__active');
  sun.classList.toggle('light');
  moon.classList.toggle('darknight');
})