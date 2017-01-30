/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (parseInt(digits.join(""))+1).toString().split("").map(Number);
};
