const gameBoard = document.querySelector('.game-board');


function board16() {
    for(let i = 1; i < (16*16); i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
        gameBoard.classList.add('g17');
        gameBoard.appendChild(gameBox);
    }
}

function board17() {
    for(let i = 0; i < (17*17); i++) {
        let gameBox = document.createElement('div');
        gameBox.classList.add('game-box');
        gameBoard.classList.remove('g16');
        gameBoard.classList.add('g17');
        gameBoard.appendChild(gameBox);
    }
}


board16();





