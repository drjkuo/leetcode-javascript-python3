/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Runtime: 119 ms
var isAnagram = function(s, t) {
    let arr1 = s.split("");
    let l1 = s.length;
    let arr2 = t.split("");
    let l2 = t.length;
    let tmp = {};

    if (l1 !== l2) return false;

    for (let i=0; i<l1; i++)
    {
        tmp[s[i]] = tmp[s[i]] || 0;
        tmp[s[i]]++;
    }

    for (let i=0; i<l2; i++)
    {
        tmp[t[i]]--;
    }

    for (let x in tmp)
    {
        if (tmp[x] !== 0) return false;
    }

    return true;

};
