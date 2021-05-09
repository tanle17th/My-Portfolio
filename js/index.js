const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

/**
 * Toggle on a button when clicked
 */
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})


navLinks.forEach(nav__link => {
    nav__link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})