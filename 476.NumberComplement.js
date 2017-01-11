/**
 * @param {number} num
 * @return {number}
 */
// Runtime: 102 ms; 42%

var findComplement = function(num) {
    let i=0;
    while (Math.floor(num/Math.pow(2,i))) i=i+1;
    return Math.pow(2,i)-num-1;
};
