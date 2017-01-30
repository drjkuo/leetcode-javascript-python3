/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Runtime: 119 ms; 24%

var plusOne = function(digits) {
    let carry = 0;
    for (let i=digits.length-1; i>=0; i--)
    {
        digits[i] += carry;
        carry = 0;

        if (i===digits.length-1) digits[i]++;

        if (digits[i] === 10)
        {
            digits[i] = 0;
            carry = 1;
        }
    }

    if (digits[0] === 0 && carry === 1) digits.unshift(1);

    return digits;

};
