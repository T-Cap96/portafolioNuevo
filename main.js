// Navegación sticky header //

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

// Menú para dispositivos Mobile //
 
let menu = document.querySelector('#responsiveMenu');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
};

