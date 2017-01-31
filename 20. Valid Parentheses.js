/**
 * @param {string} s
 * @return {boolean}
 */

 //92%
var isValid = function(s) {
    let tmp = [];
    for (let i=0; i<s.length; i++)
    {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
        {
            tmp.push(s[i]);
        }
        else // (s[i] === ')' || s[i] === '}' || s[i] === ']'):
        {
            if (s[i] === ')' && tmp.pop() !== '(') return false;
            if (s[i] === '}' && tmp.pop() !== '{') return false;
            if (s[i] === ']' && tmp.pop() !== '[') return false;
        }
    }

    if (tmp.length > 0) return false;

    return true;
};
