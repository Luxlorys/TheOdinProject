function createHome() {
    const home = document.createElement('div');

    const intro = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'intro';

    title.classList.add('title');
    intro.appendChild(title);

    home.appendChild(intro);

    return home;
}

export default function loadHome() {
    const main = document.getElementById('main');
    main.appendChild(createHome());
}