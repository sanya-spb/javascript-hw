"use strict"

const x_board = ['1', '2', '3', '4', '5', '6', '7', '8'];
const y_board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const blackFigures = [
    { name: 'Тура', char: 'Т', position: 'A1', color: 'black' },
    { name: 'Слон', char: 'С', position: 'A2', color: 'black' },
    { name: 'Лошадь', char: 'Л', position: 'A3', color: 'black' },
    { name: 'Король', char: 'К', position: 'A4', color: 'black' },
    { name: 'Ферзь', char: 'Ф', position: 'A5', color: 'black' },
    { name: 'Лошадь', char: 'Л', position: 'A6', color: 'black' },
    { name: 'Слон', char: 'С', position: 'A7', color: 'black' },
    { name: 'Тура', char: 'Т', position: 'A8', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B1', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B2', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B3', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B4', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B5', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B6', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B7', color: 'black' },
    { name: 'пешка', char: 'п', position: 'B8', color: 'black' },
];

const whiteFigures = [
    { name: 'Тура', char: 'Т', position: 'H1', color: 'white' },
    { name: 'Слон', char: 'С', position: 'H2', color: 'white' },
    { name: 'Лошадь', char: 'Л', position: 'H3', color: 'white' },
    { name: 'Король', char: 'К', position: 'H4', color: 'white' },
    { name: 'Ферзь', char: 'Ф', position: 'H5', color: 'white' },
    { name: 'Лошадь', char: 'Л', position: 'H6', color: 'white' },
    { name: 'Слон', char: 'С', position: 'H7', color: 'white' },
    { name: 'Тура', char: 'Т', position: 'H8', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G1', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G2', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G3', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G4', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G5', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G6', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G7', color: 'white' },
    { name: 'пешка', char: 'п', position: 'G8', color: 'white' },
];

const chess = {
    boardId: 0,
    boardHTML: "",
    figures: [],

    createBoard: function (id, x, y) {
        this.boardId = id;
        this.boardHTML = document.createElement('table');
        this.boardHTML.className = "board";
        for (let iy = 0; iy <= y.length + 1; iy++) {
            let row = document.createElement("tr");
            this.boardHTML.appendChild(row);
            for (let ix = 0; ix <= x.length + 1; ix++) {
                let cell = document.createElement("td");
                if (iy == 0 && ix == 0 || iy == 0 && ix > x.length || iy > y.length && ix == 0 || iy > y.length && ix > x.length) {
                    cell.className = "head-xy";
                } else if (iy == 0 || iy > y.length) {
                    cell.className = "head-x";
                    cell.innerHTML = x[ix - 1];
                } else if (ix == 0 || ix > x.length) {
                    cell.className = "head-y";
                    cell.innerHTML = y[iy - 1];
                } else if ((ix + iy) % 2 == 0) {
                    cell.className = "black";
                    cell.id = id + '@' + y[iy - 1] + x[ix - 1];
                } else {
                    cell.className = "white";
                    cell.id = id + '@' + y[iy - 1] + x[ix - 1];
                }
                row.appendChild(cell);

            }
        }
        return this;
    },
    initFigures: function (figuresSet) {
        this.figures = figuresSet;
        for (let ii = 0; ii < figuresSet.length; ii++) {
            let cell = document.getElementById(this.boardId + '@' + this.figures[ii].position);
            let fig = document.createElement("div");
            fig.innerHTML = this.figures[ii].char;
            fig.className = 'fig f-' + this.figures[ii].color;
            cell.appendChild(fig);

        }
    }
}

window.onload = function () {
    let boardDiv1 = document.getElementById("board-1");
    let board1 = chess.createBoard('1', x_board, y_board);
    boardDiv1.appendChild(board1.boardHTML);

    let boardDiv2 = document.getElementById("board-2");
    let board2 = chess.createBoard('2', x_board, y_board);
    boardDiv2.appendChild(board2.boardHTML);
    board2.initFigures(whiteFigures.concat(blackFigures));

}
