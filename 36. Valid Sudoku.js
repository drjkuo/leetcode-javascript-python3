/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var rowLen = board.length;
    var colLen = board[0].length;

    for (var i=0; i<rowLen; i++) {
        var tmp = [];
        for (var j=0; j<colLen; j++) {
            tmp.push(parseInt(board[i][j]));
        }
        if (!checkValid(tmp)) return false;
    }

    for (var i=0; i<rowLen; i++) {
        var tmp = [];
        for (var j=0; j<colLen; j++) {
            tmp.push(parseInt(board[j][i]));
        }
        if (!checkValid(tmp)) return false;
    }

    for (var i=0; i<3; i++) {
        for (var j=0; j<3; j++) {
            if (!checkValid(makeBlock(i*3, j*3, board))) return false;
        }
    }

    return true;


};

function checkValid (arr) {
    var tmp = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>9 || arr[i]<1) return false;
        else if (tmp.indexOf(arr[i]) !== -1) {
            return false;
        }
        else tmp.push(arr[i]);
    }

    return true;
}

function makeBlock(x, y, board) {
    var tmp = [];
    for (var i=0; i<3; i++) {
        for (var j=0; j<3; j++) {
            tmp.push(parseInt(board[i+x][j+y]));
        }
    }
    return tmp;
}
