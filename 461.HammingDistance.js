/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */:
var hammingDistance = function(x, y) {
    let z = x ^ y;
    let cnt = 0;
    while(z)
    {
        cnt = ((z%2)? cnt+1: cnt);
        z = Math.floor(z/2);
    }
    
    return cnt;
};
