/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i=0; i<s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i])
        }
        else {
            var tmp = stack.pop();
            if (tmp === "(" && s[i] === ")") continue;
            if (tmp === "[" && s[i] === "]") continue;
            if (tmp === "{" && s[i] === "}") continue;
            return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
};
