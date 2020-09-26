const toggleNavMenu = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const homeContainer = document.querySelector('.home_container');
    const navLinks = document.querySelectorAll('.nav__link')

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        console.log("menu toggled!");
    });

    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        console.log("link clicked and menu toggled!");
    });

    });

}

export { toggleNavMenu };