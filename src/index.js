import loadHome from './home.js'
import loadMenu from './menu.js'
import loadAbout from './about.js'

document.addEventListener("DOMContentLoaded", function() {
    
    const menuBtn = document.getElementById('menuBtn');
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    menuBtn.addEventListener('click', (e) => {
        console.log('Clicked');
        loadMenu();
    });
    
    homeBtn.addEventListener('click', (e) => {
        console.log('Clicked');
        loadHome();
    });

    aboutBtn.addEventListener('click', (e) => {
        console.log('Clicked');
        loadAbout();
    });

    loadHome();


});