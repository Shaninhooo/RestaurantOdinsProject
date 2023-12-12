function createHome() {
    const home = document.createElement('div');
    home.classList.add = 'home';

    const chefGIF = document.createElement('img');
    chefGIF.src = "images/tumblr_omckfbgJ2F1t45pbyo2_500.gif";
    chefGIF.alt = "The Chef Knows What His Doing Don't Worry...";

    home.appendChild(chefGIF);
    home.appendChild(createParagraph("Experience the greatest seafood from the All Blue"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;