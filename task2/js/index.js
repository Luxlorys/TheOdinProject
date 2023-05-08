window.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
        console.log(`Cell ${cell.textContent} clicked!`);
        });
    });
})
