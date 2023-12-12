function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Receive the Blessing of East Blue",
            "East Blue Salad",
            "salad"

    ));

    menu.appendChild(
        createMenuItem(
            "In Order to Save My Friends",
            "The Vow with Shanks",
            "shanks"      
    ));

    menu.appendChild(
        createMenuItem(
            "In the Name of Absolute Justice",
            "The Birth of a Man Becoming a Marine Officer",
            "marine"
    ));

    menu.appendChild(
        createMenuItem(
            "Honorable Liar",
            "Proud Warrior's Departure",
            "liar"
    ));

    menu.appendChild(
        createMenuItem(
            "The Fighting Cook who Had the Same Dream",
            "The Pirate and the Little Eggplant",
            "fightingcook"
    ));

    menu.appendChild(
        createMenuItem(
            "Aiming to be the Best Swordsman in the World",
            "Battle of the Strong Man",
            "swordsman"
    ));
    return menu;
}

function createMenuItem(name, description, img) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.src = `images/food/${img}.png`;
    foodImage.alt = `${name}`;


    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";

    main.appendChild(createMenu());
}

export default loadMenu();