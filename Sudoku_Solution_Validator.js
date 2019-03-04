"use strict"

// 4 kyu
/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9
*/

function validSolution(board) {
    //Each row
    for (let i = 0; i < board.length; i++) {
        let result = board[i].reduce(reducer, true)
        if (result == false) return false;
    }


    //Each column
    var colTemp = []
    for (let i = 0; i < board.length; i++) {
        colTemp.push(board.map(e => e[i]))
    }
    for (let i = 0; i < colTemp.length; i++) {
        let result = colTemp[i].reduce(reducer, true)
        if (result == false) return false;
    }

    //Each Block
    var blockTemp = [];
    for (let k = 0; k <= 2; k++) {
        for (let l = 0; l <= 2; l++) {
            let temp = []
            for (let i = 3 * k; i <= 3 * k + 2; i++) {
                for (let j = 3 * l; j <= 3 * l + 2; j++) {
                    temp.push(Number(board[i][j]))
                }
            }
            blockTemp.push(temp)
        }
    }
    for (let i = 0; i < blockTemp.length; i++) {
        let result = blockTemp[i].sort().reduce(reducer, true)
        if (result == false) return false;
    }

    function reducer(prev, curr, i, array) {
        if (i > 0) {
            if (array[i - 1] == curr) prev = false;
        }
        return prev
    }

    return true
}



// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ])

validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]) //?

