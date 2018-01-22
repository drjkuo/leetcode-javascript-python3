/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i=0; i<s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        }
        else {
            var tmp = stack.pop();
            if (tmp === "(" && s[i] === ")") continue;
            if (tmp === "[" && s[i] === "]") continue;
            if (tmp === "{" && s[i] === "}") continue;
            return false;
        }
    }
    return (stack.size() == 0);
};

/*
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack;
        stack = new Stack<Character>();
        for (char c : s.toCharArray()) {
            // System.out.print((int)(c));
            if (c == '(' || c == '[' || c == '{' )
            {
                stack.push(c);
            }
            else {
                if (stack.size() == 0) return false;

                Character tmp = stack.pop();
                if (tmp == '(' && c== ')') continue;
                if (tmp == '[' && c == ']') continue;
                if (tmp == '{' && c == '}') continue;
                return false;
            }
        }

        return (stack.size() == 0);
    }
}


*/
