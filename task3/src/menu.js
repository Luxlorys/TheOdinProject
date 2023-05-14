function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('row')

    menu.appendChild(createCard('gamburger', 2.50));
    menu.appendChild(createCard('chiburger', 3.75));
    menu.appendChild(createCard('cola', 1));
    menu.appendChild(createCard('sprite', 1));

    return menu;
}

function createCard(title, price) {
    
    const row = document.createElement('div');
    row.classList.add('col-sm-6');

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.classList.add('card-img-top')
    img.classList.add('card-img')
    img.src = `images/burger3.png`;

    const cardBody = document.createElement('div');
    card.classList.add('card-body');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const cardPrice = document.createElement('a');
    cardPrice.classList.add('btn');
    cardPrice.classList.add('btn-primary');
    cardPrice.textContent = `${price} $`;

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);

    row.appendChild(card);

    return card;
}


export default function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}