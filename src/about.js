function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');

   const baratieImg = document.createElement('img');
   baratieImg.src = 'images/23c67b968e300090b3ffdd87bdd81797.jpg';
   baratieImg.alt = 'Photo Of Baratie'

   const address = document.createElement('p');
   address.textContent = 'Located in the Sambas Region of the East Blue, close to the entrance of the Grand Line';

   const contact = document.createElement('p');
   contact.textContent = "Contact through the restaurant's transponder snail"
   const snailImg = document.createElement('img');
   snailImg.src = 'images/FairyOnePieceTail-0452-Large220.webp';
   contact.appendChild(snailImg);

   const kitchenCrew = document.createElement('div');
   const kitchenCrewText = document.createElement('p');
   kitchenCrewText.textContent = 'This Is The Kitchen Crew';
   const captainImg = document.createElement('img');
   captainImg.src = 'images/23c67b968e300090b3ffdd87bdd81797.jpg';
   captainImg.alt = 'Captain Monkey D Luffy';

   const mainChef = document.createElement('img');
   mainChef.src = 'images/ti1v42gndzhy.webp';
   mainChef.alt = 'Head Chef Vinsmoke Sanji';

   const butcherImg = document.createElement('img');
   butcherImg.src = 'images/4fc7cc31a156ec8f56607c5ce020d6a6.jpg';
   butcherImg.src = 'Assistant Chef Roronoa Zoro';

   const emergencyFood = document.createElement('img');
   emergencyFood.src = 'images/tony-tony-chopper-quiz-featured.webp';
   emergencyFood.alt = 'Emergency Food Tony Tony Chopper';
   kitchenCrew.appendChild(kitchenCrewText);
   kitchenCrew.appendChild(captainImg);
   kitchenCrew.appendChild(mainChef);
   kitchenCrew.appendChild(butcherImg);
   kitchenCrew.appendChild(emergencyFood);

   about.appendChild(baratieImg);
   about.appendChild(address);
   about.appendChild(contact);
   about.appendChild(kitchenCrew);

   return about;
}

function loadAbout() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;