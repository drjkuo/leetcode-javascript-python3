/**
 * @param {number[][]} M
 * @return {number}
 */



var longestLine = function(M) {
    if (M.length === 0) return 0;
    var rownum = M.length;
    var colnum = M[0].length;
    var max = 0;
    var tmp = 0;
    for (var i=0; i<rownum; i++) {
        for (var j=0; j<colnum; j++) {
            tmp = findLine(M,i,j,rownum,colnum);
            max = (max < tmp)? tmp : max;
        }
    }
    return max;
};

function findLine(M,i,j, rownum, colnum) {
    var cnt1 = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0;
    for (let y = j; y<colnum; y++) { // right
        if (M[i][y] === 1) {
            cnt1++;
        }
        else break;
    }

    for (let x = i, y = j; x<rownum && y<colnum; x++, y++) { //right + down
        if (M[x][y] === 1) {
            cnt2++;
        }
        else break;

    }

    for (let x = i; x<rownum; x++) { //down
        if (M[x][j] === 1) {
            cnt3++;
        }
        else break;
    }

    for (let y = j, x = i; y > -1 && x<rownum; x++, y--) { //left, down
        if (M[x][y] === 1) {
            cnt4++;
        }
        else break;
    }

    return Math.max(cnt1,cnt2,cnt3,cnt4);
}


