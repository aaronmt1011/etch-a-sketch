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

/*
function colorChange() {
    [...document.querySelectorAll("gameBox")].forEach((gameBox) => {
        gameBox.addEventListener("click", function() {
            gameBoard.classList.add('g-reset');
        })
      })
}
*/


/*
function colorChange(e) {
    let mainBox = gameBoxes[e];
    console.log(e);
}
*/


gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);

/*
gameBoxes.forEach(gameBox => gameBox.addEventListener('click', colorChange));
*/

gameBoard.addEventListener(
    "mouseover", (e) => {
        e.target.style.backgroundColor = 'black';
    }
);


/*
gameBox.addEventListener('click', colorChange);
gameBox.addEventListener('mouseover', colorChange);
*/
boardSize();


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