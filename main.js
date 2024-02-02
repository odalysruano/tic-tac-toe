/*----- constants -----*/
const displayColor = {
    null: 'white',
    player1: 'pink',
    player2: 'blue',
}

/*----- app's state (variables) -----*/
let gameBoard;
let playerTurn;
let winner;

/*----- cached html element references -----*/
const message = document.querySelector("#winner");
const resestBtn = document.querySelector("button");

/*----- event listeners -----*/
// Will add these in later

/*----- functions -----*/
initialize();
const initialize = () => {
    gameBoard = [
        [null, null, null], 
        [null, null, null],
        [null, null, null],
    ];
    playerTurn = 1;
    winner = null;
    // will create render function in later commit
    render();
}

function checkWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (!winner && board[i][0] == board[i][1] &&
            board[i][1] == board[i][2]) {
                winner = board[i][0];
        } else if (board[0][i] == board[1][i] &&
            board[1][i] == board[2][i]) {
                winner = board[1][i];
        }
    } 
    if (!winner && board[0][0] == board[1][1] &&
        board [1][1] == board [2][2]) {
            winner = board[0][0];
    } else if (board[2][0] == board[1][1] &&
        board[1][1] == board[0][2]) {
            winner = board[2][0];
    }
}
