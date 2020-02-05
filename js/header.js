


window.addEventListener('scroll', headerClassAdder);

// Changes header style on scroll
function headerClassAdder() {
    var element = document.getElementById('header');
    var scrollPos = window.scrollY;

    if (scrollPos >= 1) {
        element.classList.add('scrolled');
    } else {
        element.classList.remove('scrolled');
    }
}


function menuShow() {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');

    menuIcon.classList.toggle('clicked');
    menu.classList.toggle('clicked');
}


