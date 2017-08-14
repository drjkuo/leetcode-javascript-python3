/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let sign = 1;
    str = str.trim();
    if (str.includes("+") && str.includes("-")) { return 0; }
    if (str.startsWith("+") ) { str = str.slice(1); }
    if (str.startsWith("-") ) { str = str.slice(1); sign = -1; }

    if (str.length === 0) return 0;
    // let result = parseInt(str);

    var ans = 0;
    for (var i=0; i<str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            break;
        }
        ans = ans * 10 + parseInt(str[i]);
    }

    if (ans > 2147483647 && sign === 1) { return 2147483647; }
    if (ans > 2147483648 && sign === -1) { return -2147483648; }
    return ans * sign;
};
