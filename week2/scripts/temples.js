// temples.js


const yearEl = document.getElementById('copyright-year');
const modifiedEl = document.getElementById('last-modified');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (modifiedEl) {
  modifiedEl.textContent = document.lastModified;
}

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
const hamburgerIcon = document.querySelector('.hamburger-icon');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburgerIcon.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

 
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      hamburgerIcon.innerHTML = '&#9776;';
    });
  });
}