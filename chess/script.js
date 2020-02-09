let moveNumber = 1;
const figures = {
    q: {
        text: '&#9819', // король
        name: 'queen',
        color: 'black',
    },
    r: {
        text: '&#9820', // ладья
        name: 'rook',
        color: 'black',
    },
    b: {
        text: '&#9821', // слон
        name: 'bishop',
        color: 'black',
    },
    k: {
        text: '&#9818', // ферзь
        name: 'king',
        color: 'black',
    },
    c: {
        text: '&#9822', // конь
        name: 'knight',
        color: 'black',
    },
    p: {
        text: '&#9823', // пешка
        name: 'pawn',
        color: 'black',
    },
    K: {
        text: '&#9812',
        name: 'king',
        color: 'white',
    },
    R: {
        text: '&#9814',
        name: 'rook',
        color: 'white',
    },
    B: {
        text: '&#9815',
        name: 'bishop',
        color: 'white',
    },
    Q: {
        text: '&#9813',
        name: 'queen',
        color: 'white',
    },
    C: {
        text: '&#9816',
        name: 'knight',
        color: 'white',
    },
    P: {
        text: '&#9817',
        name: 'pawn',
        color: 'white',
    },
};

const positionStart = 'rcbqkbcrpppppppp................................PPPPPPPPRCBQKBCR';

//const history = [];

const chessBoard = [
    {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'},
    {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'},
    {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'},
    {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'},
    {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'},
    {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'},
    {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'},
    {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'}, {
        active: false,
        figure: null,
        color: 'black'
    }, {active: false, figure: null, color: 'white'}, {active: false, figure: null, color: 'black'}, {
        active: false,
        figure: null,
        color: 'white'
    }, {active: false, figure: null, color: 'black'}, {active: false, figure: null, color: 'white'},
];

function createDiv(classes = []) {
    let result = document.createElement('div');
    classes.forEach((className) => result.classList.add(className));
    return result;
}

//start
function toggleActive(cell, index, color) {
    if (color == 'white') {
        if (cell.active) {
            chessBoard[index].active = false;
            createNewChessBord(chessBoard);
            return
        }


        let isActiveSomeone = chessBoard.filter(cell => {
            return cell.active
        });
        if (!isActiveSomeone.length) {

            if (chessBoard[index].figure == 'Q' || chessBoard[index].figure == 'K' || chessBoard[index].figure == 'B' ||
                chessBoard[index].figure == 'R' || chessBoard[index].figure == 'C' || chessBoard[index].figure == 'P') chessBoard[index].active = true;

            createNewChessBord(chessBoard);
            return

        }
        if (chessBoard) move(index, color);
    } else if (color == 'black') {
        if (cell.active) {
            chessBoard[index].active = false;
            createNewChessBord(chessBoard);
            return
        }


        let isActiveSomeone = chessBoard.filter(cell => {
            return cell.active
        });
        if (!isActiveSomeone.length) {

            if (chessBoard[index].figure == 'q' || chessBoard[index].figure == 'k' || chessBoard[index].figure == 'b' ||
                chessBoard[index].figure == 'r' || chessBoard[index].figure == 'c' || chessBoard[index].figure == 'p') chessBoard[index].active = true;

            createNewChessBord(chessBoard);
            return
        }
        if (chessBoard) move(index, color);
    }
}

function move(index, color) {
    if (color == 'white') {
        if (chessBoard[index].figure != 'Q' && chessBoard[index].figure != 'K' && chessBoard[index].figure != 'B' &&
            chessBoard[index].figure != 'R' && chessBoard[index].figure != 'C' && chessBoard[index].figure != 'P') {
            let cellIndex = chessBoard.filter(chessBoard => {
                return chessBoard.active
            });
            chessBoard[index].figure = cellIndex[0].figure;
            cellIndex[0].figure = null;
            cellIndex[0].active = false;
            moveNumber++;
            createNewChessBord(chessBoard);
            return;
        }
    } else if (color == 'black') {
        if (chessBoard[index].figure != 'q' && chessBoard[index].figure != 'k' && chessBoard[index].figure != 'b' &&
            chessBoard[index].figure != 'r' && chessBoard[index].figure != 'c' && chessBoard[index].figure != 'p') {
            let cellIndex = chessBoard.filter(chessBoard => {
                return chessBoard.active
            });
            chessBoard[index].figure = cellIndex[0].figure;
            cellIndex[0].figure = null;
            cellIndex[0].active = false;
            moveNumber++;
            createNewChessBord(chessBoard);
            return;
        }
    }else return;
}
function getCurrentPosition(chessBoard) {
    let newPosition = chessBoard.map(cell => cell.figure ? cell.figure : '.');
    return newPosition.join('');
}


function createNewChessBord(chessBoard, position) {
    if (!chessBoard) return;

    if (!position) {
        position = getCurrentPosition(chessBoard);
    }
    if (moveNumber % 2 != 0) { //TODO зависит от хода
        console.log('cейчас ходит игорк 1');

    } else {
        console.log('cейчас ходит игорк 2');
    }

    let container = document.querySelector('.chessboard');

    container.innerHTML = '';

    chessBoard.forEach((cell, index) => {

        createCellElement(cell, index, position);

    });
}


function createCellElement(cell, index, position) {
    let cellElement = createDiv(['cell', cell.color]);
    let container = document.querySelector('.chessboard');

    if (cell.active) cellElement.classList.add('green');

    let nameShortFigure = [...position][index];

    if (!(nameShortFigure == '.')) {
        cellElement.innerHTML = figures[nameShortFigure].text;
        chessBoard[index].figure = nameShortFigure;
    }
    ;

    container.append(cellElement);

    cellElement.addEventListener('click', () => {
        if (moveNumber % 2 != 0) {
            toggleActive(cell, index, 'white');
        } else toggleActive(cell, index, 'black');
    })
}

function startGame() {
    const app = document.querySelector('#app');
    let container = createDiv(['chessboard']);

    app.addEventListener('click', event => {

        if (event.target.classList.value === '') {
            let activeCell = document.querySelector('.green');
            if (activeCell) activeCell.style.background = 'red';
        }
    })

    app.append(container);
    createNewChessBord(chessBoard, positionStart);
}

startGame();




