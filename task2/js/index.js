// two entities: player_x and player_o
// all win combinations

window.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');

    // entities 
    function playerBuilder(mark, turn) {
        return {mark, turn};
    };

    const player_x = playerBuilder("x", true);
    const player_o = playerBuilder("o", false)

    cells.forEach(cell => {
        cell.addEventListener('click', (it) => {
        console.log(`Cell ${cell.textContent} clicked!`);
        cell.classList.add(it.target.textContent = 'clicked')
        });
    });
})

