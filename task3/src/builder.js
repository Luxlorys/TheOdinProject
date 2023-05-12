import loadHome from "./home";
import loadContacts from "./contacts";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Mozzafiato";
  
    header.appendChild(restaurantName);
    header.appendChild(createNav());
  
    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'home';
    homeBtn.addEventListener('click', () => {
        loadHome();
    });

    const contactsBtn = document.createElement('button');
    contactsBtn.textContent = 'contacts';
    contactsBtn.addEventListener('click', () => {
        loadContacts();
    });


    nav.appendChild(homeBtn);
    nav.appendChild(contactsBtn);

    

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

export default function initialize() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHome();
}