const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-nav-close');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    mobileMenu.setAttribute('aria-expanded', 'true');
});

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    mobileMenu.setAttribute('aria-expanded', 'false');
});

