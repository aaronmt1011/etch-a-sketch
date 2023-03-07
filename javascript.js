const gameBoard = document.querySelector('.game-board');
let gameBoardSize = document.getElementById("board-size");
let sizeDisplay = document.querySelector('.range-number');
let gameBox = document.createElement('div');
gameBox.classList.add('game-box');

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
        gameBox.classList.add('game-box');
        gameBox.classList.add(`gbox${i}`);
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


function colorChange() {
    gameBox.classList.add('g-b-color');
    console.log('hey');
}

[...document.querySelectorAll(".game-box")].forEach((round) => {
    round.addEventListener("click", function() {
      round.style.backgroundColor = "blue";
    })
  })


gameBoardSize.addEventListener('click', boardSize);
gameBoardSize.addEventListener('mouseover', boardSize);
gameBox.addEventListener('mouseover', colorChange);
gameBox.addEventListener('onmousemove', colorChange);
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