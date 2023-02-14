/**
 * @type {HTMLElement}
 */
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleHamburgerMenu);

/**
 * @function toggleHamburgerMenu
 * @description Toggles the class "active" on the element with the class "nav-bar"
*/
function toggleHamburgerMenu () {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}