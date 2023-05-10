// two entities: player_x and player_o
// all win combinations

window.addEventListener('DOMContentLoaded', () => {
    let board = []

    // entities 
    function playerBuilder(mark, turn) {
        return {mark, turn};
    };

    const player_x = playerBuilder("x", true);
    const player_o = playerBuilder("o", false);

    

    const playTurn = (function() {
        const cells = document.querySelectorAll('.cell');

        cells.forEach(cell => {
            cell.addEventListener('click', (event) => {

                if(player_x.turn && cell.textContent === '') {
                    cell.textContent = player_x.mark;
                    
                    player_x.turn = false;
                    player_o.turn = true;
                } else if (player_o.turn && cell.textContent === '') {
                    cell.textContent = player_o.mark;

                    player_o.turn = false;
                    player_x.turn = true;
                }
            }); // cells event listener
        }) // forEach
    })(); // playTurn
})

