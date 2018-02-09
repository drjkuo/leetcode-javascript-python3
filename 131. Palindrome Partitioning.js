/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var slen = s.length, ans = [];
    helper(ans, [], s, 0);
    return ans;

    function helper(ans, oneAns, s, pos) {
        if (pos === slen) {
            ans.push(oneAns);
        }

        for (var i=pos+1; i<=slen; i++) {
            var tmpS = s.substring(pos, i);
            if (isPalindrome(tmpS)) {
                var tmpAns = oneAns.slice();
                tmpAns.push(tmpS);
                helper(ans, tmpAns, s, i);
            }
        }
    }

    function isPalindrome (s) {
       if (s.length === 0) return false;
       var start = 0, end = s.length - 1;
       while (start < end) {
          if (s[start++] !== s[end--]) {
             return false;
          }
       }
       return true;
    }
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    var oneAns = [];
    helper(result, oneAns, s, 0);
    return result;
};


function helper(result, oneAns, s, pos) {
    var len = s.length;
    if (pos === len) {
        result.push(oneAns.slice());
        return;
    }

    for (var j=pos+1; j<=len; j++) {
        var subs = s.substring(pos, j);
        if (isPalindrome(subs)) {
            oneAns.push(subs);
            helper(result, oneAns, s, j);
            oneAns.pop();
        }
    }
}

function isPalindrome(s) {
    if (s.length === 0) return false;
    var start = 0, end = s.length-1;
    while (start < end) {
        if (s[start] !== s[end])
            return false;
        start += 1;
        end -= 1;
    }
    return true;
}
