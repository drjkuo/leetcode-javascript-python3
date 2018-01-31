/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var row = board.length;
    var col = board[0].length;
    // BFS
    var i, j;
    var visited = [];
    for (i=0; i<row; i++) {
        visited.push([]);
        for (j=0; j<col; j++) {
            visited[i].push(false);
        }
    }
    var result = [];

    for (i=0; i<row; i++) {
        for (j=0; j<col; j++) {
            if (DFS(word, 0, i, j, visited)) return true;
        }
    }

    return false;


    function DFS(word, k, i, j, visited) {
        console.log(visited, "\n");
        if (k === word.length) return true;
        if (i === row || i === -1 || j === col || j === -1 || visited[i][j] === true || board[i][j] !== word[k]) return false;
        visited[i][j] = true;
        var res = DFS(word, k+1, i+1, j, visited) ||
            DFS(word, k+1, i-1, j, visited) ||
            DFS(word, k+1, i, j+1, visited) ||
            DFS(word, k+1, i, j-1, visited);
        visited[i][j] = false;
        return res;
    }

};


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rowlen = board.length;
    var collen = board[0].length;
    var visited = [];
    var i,j;
    for (i=0; i<rowlen; i++) {
        visited.push([]);
        for (j=0; j<collen; j++) {
            visited[i].push(false);
        }
    }

    for (i=0; i<rowlen; i++) {
        for (j=0; j<collen; j++) {
            if (DFS(word, 0, board, i, j, visited)) return true;
        }
    }
    return false;

};

function DFS (w, wpos, board, brow, bcol, visited) {
    // console.log(brow, bcol);
    var rowlen = board.length;
    var collen = board[0].length;
    var wlen = w.length;
    if (wpos === wlen) return true;

    if (brow === -1 || brow === rowlen ||
        bcol === -1 || bcol === collen || visited[brow][bcol] === true ||       w[wpos] !== board[brow][bcol])
        return false;
    visited[brow][bcol] = true;
    var flag = (DFS(w, wpos+1, board, brow+1, bcol, visited)) ||
        (DFS(w, wpos+1, board, brow-1, bcol, visited)) ||
        (DFS(w, wpos+1, board, brow, bcol+1, visited)) ||
        (DFS(w, wpos+1, board, brow, bcol-1, visited));
    visited[brow][bcol] = false;
    return flag;
}
