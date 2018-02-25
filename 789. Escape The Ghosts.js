/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    var myDis = Math.abs(target[0]) + Math.abs(target[1]);

    for (var i=0; i<ghosts.length; i++) {
        var ghostDis = Math.abs(ghosts[i][0]-target[0]) + Math.abs(ghosts[i][1]-target[1]);
        if (ghostDis <= myDis) return false;
    }

    return true;
 };
