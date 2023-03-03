const gameBoard = document.querySelector('.game-board');
const game16 = document.querySelector('.game-16');
const game17 = document.querySelector('.game-17');
let gameBoardSize = document.getElementById("board-size");

function boardSize() {
    boardSize = document.getElementById("board-size").value;
    console.log(boardSize);
}

function boardReset() {
    gameBoard.classList.add('g-reset');
    gameBoard.classList.remove('g-16');
    gameBoard.classList.remove('g-17');

    /* 
    While loop is used to loop through each elemet of gameBoard (gameBox) and 
    removes them so the board is cleard.
    */
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }
}

function board16() {
    boardReset();
    for(let i = 1; i <= (16 * 16); i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
        gameBoard.appendChild(gameBox);
    }
    gameBoard.classList.add('g-16');
}

function board17() {
    boardReset();
    for(let i = 1; i <= (17 * 17); i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
        gameBoard.appendChild(gameBox);
    }
    gameBoard.classList.add('g-17');
}

game16.addEventListener('click', board16);
game17.addEventListener('click', board17);
gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);



/*
game16.addEventListener('click', () => {
    boardReset();
    board16();    
});

game17.addEventListener('click', () => {
    boardReset();
    board17();    
});
*/

