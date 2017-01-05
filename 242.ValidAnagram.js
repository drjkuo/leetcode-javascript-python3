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

