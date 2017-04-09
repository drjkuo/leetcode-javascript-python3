/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var ans = "";
    var stack = [];
    if (s === null || s.length <= 1) return s;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            while (stack.length > 0 ) { //
                ans += stack.pop();
            }

            ans += " ";

        }
        else { //push s[i] to stack;
            stack.push(s[i]);
        }

        if (i === (s.length - 1)) {
            while (stack.length > 0 ) {
                ans += stack.pop();
            }
        }
    }

    return ans;
};
