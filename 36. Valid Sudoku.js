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
