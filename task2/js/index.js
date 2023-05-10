// two entities: player_x and player_o
// all win combinations

window.addEventListener('DOMContentLoaded', () => {
    let board = []

    let winnerCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 7], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ]

    // entities 
    function playerBuilder(mark, turn) {
        return {mark, turn};
    };

    const player_x = playerBuilder("x", true);
    const player_o = playerBuilder("o", false);

    const checkWinner = () => {
        for (const combo of winnerCombo) {
            const [a, b, c] = combo;
            const cells = document.querySelectorAll('.cell');
            const winner = document.getElementById('winner');

            if (cells[a].textContent !== '' &&
                cells[a].textContent === cells[b].textContent &&
                cells[b].textContent === cells[c].textContent
                ) {
                    winner.innerHTML += `The winner is: ${cells[a].textContent} player` 

                    cells.forEach(cell => {
                        cell.removeEventListener('click', handleCellClick);
                    });

                    return;
                // return cells[a].textContent; // Return the winning mark ('x' or 'o')
            }
        }
            return null; // Return null if no winner is found
    };

    const handleCellClick = (event) => {
        const cell = event.target;

        if(player_x.turn && cell.textContent === '') {
            cell.textContent = player_x.mark;

            player_x.turn = false;
            player_o.turn = true;

            cell.style.color = '#EE6C4D';

            checkWinner();
        } else if (player_o.turn && cell.textContent === '') {
            cell.textContent = player_o.mark;

            player_o.turn = false;
            player_x.turn = true;

            cell.style.color = '#98C1D9'

            checkWinner();
        } 
    }

    const playTurn = (function() {
        const cells = document.querySelectorAll('.cell');

        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        }) // forEach
    })(); // playTurn
})

