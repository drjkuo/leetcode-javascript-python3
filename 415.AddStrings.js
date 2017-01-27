/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 // 87%
var addStrings = function(num1, num2) {
    let carry = 0;
    let reverse_ans = [];
    num1 = "0"+num1;
    num2 = "0"+num2;
    let i=num1.length-1;
    let j=num2.length-1;

    while (i>=0 || j>=0)
    {
        let tmp = 0;
        if (i>=0)
        tmp += parseInt(num1[i--]);
        if (j>=0)
        tmp += parseInt(num2[j--]);

        tmp += carry;
        reverse_ans.push(tmp % 10);
        carry = Math.floor(tmp / 10);
    }

    if (reverse_ans[reverse_ans.length-1] === 0) reverse_ans.pop();
    return reverse_ans.reverse().join("");
};
