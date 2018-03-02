/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var result = [];
    for (var i=1; i<=n; i++) {
        result.push(i);
    }

    result.sort(function(x,y) {
        if (x.toString() > y.toString()) return 1;
        else return -1;
    });

    return result;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var result = [];
    helper(result, 0, n);
    return result;

    function helper(result, x, n) {
        if (x > n) return;
        if (x <= n && x!==0) result.push(x);

        for (var i=0; i<=9; i++) {
            if (x===0 && i===0) continue;
            helper(result, x*10+i, n);
        }
    }
};
