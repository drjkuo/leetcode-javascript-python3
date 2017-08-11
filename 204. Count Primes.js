/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n<3) return 0; // n=0,1,2

    var ans = 1;
    for (var i=3; i<n; i+=2) {
        if (isPrime(i)) ans+=1;
    }

    return ans;

    ////////////////////////////////
    function isPrime(m) {
        for (var i=3; i*i<=m; i+=2) {
            if ((m%i) === 0) {
                return false;
            }
        }
        return true;
    }
};
