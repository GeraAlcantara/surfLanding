/**
 * @type {HTMLElement}
 */
const hamburger = document.querySelector('.hamburger');

/**
 * @type {NodeList}
 */
const navItem = document.querySelectorAll('.nav-item')

hamburger.addEventListener('click', toggleHamburgerMenu);


Array.from(navItem).forEach(e => e.addEventListener('click', () => {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}));

/**
 * @function toggleHamburgerMenu
 * @description Toggles the class "active" on the element with the class "nav-bar"
*/
function toggleHamburgerMenu () {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}