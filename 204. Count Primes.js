/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var ans = 0;
    for (var i=2; i<n; i++) {
        if (isPrime(i)) ans+=1;
    }

    return ans;

    ////////////////////////////////
    function isPrime(m) {
        for (var i=2; i*i<=m; i++) {
            if ((m%i) === 0) {
                return false;
            }
        }
        return true;
    }
};
