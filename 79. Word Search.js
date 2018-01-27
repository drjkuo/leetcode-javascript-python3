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
