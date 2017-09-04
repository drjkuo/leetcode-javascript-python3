/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// slower solution
// Runtime: 142 ms; 38%
var isAnagram = function(s, t) {
    let l1 = s.length;
    let l2 = t.length;

    if (l1 !== l2) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return (s === t);

};

// hashmap
var isAnagram = function(s, t) {
    var l1 = s.length;
    var l2 = t.length;
    var h1 = {};

    if (l1 !== l2) return false;

    for (var i=0; i<l1; i++) {
        h1[s[i]] = h1[s[i]] || 0;
        h1[s[i]]++;
    }

    for (i=0; i<l2; i++) {
        h1[t[i]] = h1[t[i]] || 0;
        h1[t[i]]--;
    }

    for (i in h1) {
        if (h1[i] !== 0) {
            return false;
        }
    }

    return true;
};
