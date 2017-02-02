/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let arr = []
    for (let i=0; i<=15; i++)
    {
        arr.push(Math.pow(4,i));
    }

    if (arr.indexOf(num) !== -1) return true;

    return false;

};
