/**
 * @param {number} num
 * @return {string}
 */

// bug to fix
var toHex = function(num) {
    // let binString = num.toString(2);
    //push q, and continue to work on r
    let reverse_ans = [];
    if (num === 0) return "0";
    if (num < 0) num = Math.pow(2,32) - Math.abs(num);
    while ((num % 16) !== 0)
    {
        if ((num % 16) < 10)
        {
            reverse_ans.push(num % 16);
        }
        else
        {
            switch (num % 16)
            {
                case 10:
                   reverse_ans.push("a");
                   break;
                case 11:
                   reverse_ans.push("b");
                   break;
                case 12:
                   reverse_ans.push("c");
                   break;
                case 13:
                   reverse_ans.push("d");
                   break;
                case 14:
                   reverse_ans.push("e");
                   break;
                case 15:
                   reverse_ans.push("f");
                   break;

            }
        }
        num = Math.floor(num / 16);
    }

    return reverse_ans.reverse().join("");
    // return helper(num);
};

