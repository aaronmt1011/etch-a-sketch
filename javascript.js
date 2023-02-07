const gameBoard = document.querySelector('.game-board');

function board() {
    for(let i = 0; i < 300; i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
        gameBoard.appendChild(gameBox);
    }
}

board();

console.log(gameBoard);