/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if (A.length === 0) return 0;
    var ans = Number.MIN_SAFE_INTEGER;
    var tmp;
    for (var i=0; i<A.length; i++) {
        tmp = 0;
        for (var j=0; j<A.length; j++) {
            tmp += (j*A[j]);
        }
        ans = (tmp > ans)? tmp : ans;
        tmp = A.pop();
        A.unshift(tmp);
    }
    return ans;
};
