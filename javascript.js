let gameBoard = document.querySelector('.gameBoard');
let gameBoardSize = document.getElementById("board-size");
let sizeDisplay = document.querySelector('.range-number');
let gameBox = document.createElement('div');
gameBox.classList.add('gameBox');


/*
boardSize() takes the value from the slider and uses it to change the board size
*/

function boardSize() {
    a = document.getElementById("board-size").value;
    sizeDisplay.textContent = `${a} x ${a}`;
    boardReset();
    gameBoard.classList.remove('g-reset');
    gameBoard.style.gridTemplateColumns = `repeat(${a}, auto)`
    gameBoard.style.gridTemplateRows = `repeat(${a}, auto)`
    for(let i = 1; i <= (a * a); i++) {
        gameBox = document.createElement('div');
        gameBox.classList.add('gameBox');
        gameBoard.appendChild(gameBox);
    }
}



/* 
boardReset() removes the gameboard pieces so next game board size can be 
appplied.
*/

function boardReset() {
    a = document.getElementById("board-size").value;
    gameBoard.classList.add('g-reset');


    /* 
    While loop is used to loop through each elemet of gameBoard (gameBox) and 
    removes them so the board is cleard.
    */

    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }
}


gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);

gameBoard.addEventListener(
    "mouseover", (e) => {
        e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 50%)`;
    }
);


boardSize();