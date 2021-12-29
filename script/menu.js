'use strict';
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = 'calc(-100vh - 100%)'; //100% na mobilnych jest problem wiec device height
}

// Scroll to top
const scrollButton = document.querySelector('.scroll-top');
scrollButton.addEventListener('click', () => {
  document.body.scrollTo(0, 0);
});
