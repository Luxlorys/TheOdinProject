function createMenu() {
    const contact = document.createElement('div');
    contact.classList.add('menu');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Cola';

    const address = document.createElement('p');
    address.textContent = 'Burger';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}

export default function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}