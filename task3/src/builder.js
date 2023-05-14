import loadHome from "./home";
import loadContacts from "./contacts";
import loadMenu from "./menu";


function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Luxlorys";
  
    header.appendChild(restaurantName);
    header.appendChild(createNav());
  
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add("navbar");
    nav.classList.add("navbar-light");
    nav.classList.add("bg-light");

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('btn');
    homeBtn.classList.add('btn-outline-success');
    homeBtn.textContent = 'home';
    homeBtn.addEventListener('click', () => {
        loadHome();
    });

    const contactsBtn = document.createElement('button');
    contactsBtn.classList.add('btn');
    contactsBtn.classList.add('btn-outline-success');
    contactsBtn.textContent = 'contacts';
    contactsBtn.addEventListener('click', () => {
        loadContacts();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.classList.add('btn-outline-success');
    menuBtn.textContent = 'menu';
    menuBtn.addEventListener('click', () => {
        loadMenu();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
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