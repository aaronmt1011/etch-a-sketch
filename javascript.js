let gameBoard = document.querySelector('.gameBoard');
let gameBoardSize = document.getElementById("boardSize");
let sizeDisplay = document.querySelector('.rangeNumber');
let gameBox = document.createElement('div');
gameBox.classList.add('gameBox');


/*
boardSize() takes the value from the slider and uses it to change the board size
*/

function boardSize() {
    a = document.getElementById("boardSize").value;
    sizeDisplay.textContent = `${a} x ${a}`;
    boardReset();
    gameBoard.classList.remove('gReset');
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
    a = document.getElementById("boardSize").value;
    gameBoard.classList.add('gReset');


    /* 
    While loop is used to loop through each elemet of gameBoard (gameBox) and 
    removes them so the board is cleard.
    */

    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }
}

function colorfulBoard(e) {
    e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 50%)`;
}


gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);

gameBoard.addEventListener(
    "mouseover", colorfulBoard);


boardSize();