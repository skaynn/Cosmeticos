/* MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


    /*SHOW MENU*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if(navClose){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

