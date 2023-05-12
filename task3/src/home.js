function createHome() {
    const home = document.createElement('div');

    home.appendChild(paragraph('my text'));
    home.appendChild(paragraph('my text'));
    home.appendChild(paragraph('my text'));

    return home;
}

function paragraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    return paragraph;
}

export default function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}