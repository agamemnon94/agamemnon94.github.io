const exp1 = document.getElementById('exp1');
const branding = document.getElementById('branding');
const headerContainer = document.querySelector('.header__container');
const monStyle = document.querySelector('.mon__style__inside');

let lastScrollTop = 0;
let navbar = document.querySelector('.header__container');
let cube = document.getElementById('cube');
let container = document.getElementById('result');

window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
  exp1.style.opacity = "1";
});
// Navbar et scroll
window.addEventListener('scroll', function () {
  branding.style.backgroundPositionY = `${-window.scrollY / 1.49}px`;
  // monStyle.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
  const scrollTop = window.pageYOffset || this.document.scroolTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('header__hidden');
  } else {
    navbar.classList.remove('header__hidden');
  }
  lastScrollTop = scrollTop;
})

// Diaporama fiches expériences
let fichesExp = document.querySelectorAll('.expdiv');
let change = 0;
let suivant = document.querySelector("#next_exp")
let precedant = document.querySelector("#previous_exp")

for (let index = 0; index < fichesExp.length; index++) {
  fichesExp[index].style.opacity = 0;
  fichesExp[index].style.zIndex = fichesExp.length - index;
}
function changeFiche() {
  fichesExp[change].style.opacity = 0
  change++
  if (change === fichesExp.length) {
    change = 0
  }
  fichesExp[change].style.opacity = 1
}
function previous() {
  fichesExp[change].style.opacity = 0;
  change--

  if (change === -1) {
    change = fichesExp.length - 1
  }
  fichesExp[change].style.opacity = 1
}
suivant.addEventListener("click", changeFiche);
precedant.addEventListener("click", previous);
// Fin Diaporama fiches expériences


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
// Mouvement du cube 3D
container.addEventListener('mousemove', (e) => {
  cube.style.animation = 'none';
  rotY = e.clientX / 1.2;
  rotX = e.clientY / 1.2;
  cube.style.transform = 'rotateY(' + rotY + 'deg) rotateX(' + rotX + 'deg)';
  cube.style.transition = '0.5s ease-out';
  container.addEventListener('mouseleave', () => {
    cube.style.animation = 'rotate3D 45s infinite linear';
  });
})