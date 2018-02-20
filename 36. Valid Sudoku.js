/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rowLen = board.length;
    var colLen = board[0].length;

    var hashRow = {}, hashCol = {}, hashBlock = {};

    for (var i=0; i<rowLen; i++) {
        for (var j=0; j<colLen; j++) {
            if (board[i][j] !== "." && hashRow[board[i][j]] !== undefined) return false;
            else hashRow[board[i][j]] = true;
            if (board[j][i] !== "." && hashCol[board[j][i]] !== undefined) return false;
            else hashCol[board[j][i]] = true;

            var rowIndex = 3 * parseInt(i/3), colIndex = 3 * parseInt(i%3);
            var row = parseInt(rowIndex + j/3);
            var col = parseInt(colIndex + j%3);
            if (board[row][col] !== "." && hashBlock[board[row][col]] !== undefined) return false;
            else hashBlock[board[row][col]] = true;
        }
        hashRow = {};
        hashCol = {};
        hashBlock = {};
    }
    return true;

};



/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var hashRow = {};
    var hashCol = {};
    var hashBlock = {};
    var rowLen = board.length;
    var colLen = board[0].length;
    // check row
    // check col
    // check block

    for (var i=0; i<rowLen; i++) {
        for (var j=0; j<colLen; j++) {
            if (board[i][j] !== "." && hashRow[parseInt(board[i][j])] !== undefined) return false;
            else hashRow[parseInt(board[i][j])] = true;
        }
        hashRow = {};
    }

    for (var i=0; i<rowLen; i++) {
        for (var j=0; j<colLen; j++) {
            if (board[j][i] !== "." && hashCol[parseInt(board[j][i])] !== undefined) return false;
            else hashCol[parseInt(board[j][i])] = true;
        }
        hashCol = {};
    }

    for (var i=0; i<rowLen; i++) {
        for (var j=0; j<colLen; j++) {
            var rowIndex = 3*parseInt(i/3); // 0,0,0,3...,6..
            var colIndex = 3*(i%3); // 0,1,2,0,1,2
            rowIndex = rowIndex + parseInt(j/3);
            colIndex = colIndex + j%3;

            if (board[rowIndex][colIndex] !== "." && hashBlock[parseInt(board[rowIndex][colIndex])] !== undefined) return false;
            else hashBlock[parseInt(board[rowIndex][colIndex])] = true;
        }
        hashBlock = {};
    }

    return true;


};
