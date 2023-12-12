


function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('title');
    restaurantName.textContent = "Baratie";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    homeButton.classList.add('btn-nav');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeButton);
        loadhome();
    });

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {

}

function setActiveBtn(btn) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove('active');
        }
    });

    btn.classList.add('active');
};