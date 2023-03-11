const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelectorAll('.nav-item')
const navList = document.getElementById('navList'); 
const mobileMenu = document.querySelector('.mobileMenu');


function handleClickLinks(e){
  // check if click was on a link
  if(e.target.tagName === 'A'){
    toggleHamburgerMenu()}
  }

function toggleHamburgerMenu () {
  mobileMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleHamburgerMenu);
navList.addEventListener('click', handleClickLinks)