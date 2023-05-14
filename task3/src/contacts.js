function createContacts() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p')
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)

    return contact
}

export default function loadContacts() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContacts());
}