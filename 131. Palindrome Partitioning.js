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

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (typeof s !== "string") throw new Error("input error");
    if (s === "") return [[]];
    var result = [];
    helper(result, [], 0, s);
    return result;


    function helper(result, oneAns, pos, s) {
        console.log(oneAns);
        if (pos === s.length) {
            result.push(oneAns.slice());
            return;
        }
        if (pos > s.length) return;

        for(var i=pos+1; i<=s.length; i++) {
            if (isPalindrome(s.substring(pos, i))) {
                oneAns.push(s.substring(pos, i));
                helper(result, oneAns, i, s);
                oneAns.pop();
            }
        }
    }

    function isPalindrome(x) {
        if (x.length === 0) return true;
        var p1 = 0, p2 = x.length-1;
        while (p1<p2) {
            if (x[p1] !== x[p2]) return false;
            p1 += 1;
            p2 -= 1;
        }
        return true;
    }
};
