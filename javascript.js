const gameBoard = document.querySelector('.game-board');
let gameBoardSize = document.getElementById("board-size");
let sizeDisplay = document.querySelector('.range-number');



/*
boardSize() takes the value from the slider and uses it to change the board size
*/

function boardSize() {
    a = document.getElementById("board-size").value;
    sizeDisplay.textContent = `${a} x ${a}`;
    boardReset();
    gameBoard.classList.remove('g-reset');
    gameBoard.style.gridTemplateColumns = `repeat(${a}, 22px)`
    gameBoard.style.gridTemplateRows = `repeat(${a}, 22px)`
    for(let i = 1; i <= (a * a); i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
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
    gameBoard.classList.remove(`g-${a}`);


    /* 
    While loop is used to loop through each elemet of gameBoard (gameBox) and 
    removes them so the board is cleard.
    */

    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }
}



/*
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
*/



/* slider and button eventlisteners */
/*
game16.addEventListener('click', board16);
game17.addEventListener('click', board17);
*/
gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);
boardSize();


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