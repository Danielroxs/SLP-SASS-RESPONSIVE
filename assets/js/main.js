/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    // validar que las variables esten definidas
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // anadimos la show-menu clase al div tag con la nav_menu clase
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function removeMenu() {
    const navMenu = document.getElementById('nav-menu')
    // Cuando damos el click en cada nav__link removemos el show-menu clase
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', removeMenu))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/