function createHome() {
    const home = document.createElement('div');
    home.classList.add('title');
    home.textContent = 'title';

    return home;
}

export default function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}