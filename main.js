// VITE PREFIX a eliminar


// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


// Hamburger menu

//Declaro una variable y le asigno como valor el elemento con clase "hamburger"
  const hamburger = document.querySelector('.hamburger');

//Anexo un event listener a la variable "hamburger" para que cuando este elemento sea clickeado gatille la funcion "toggleHamburgerMenu"
  hamburger.addEventListener('click', toggleHamburgerMenu);


  // Esta función crea una variable "navBar" que selecciona el elemento con la clase .nav-bar y luego togglea la clase "active" al elemento.
  function toggleHamburgerMenu () {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
