/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 108 ms; 73%
var longestPalindrome = function(s) {
    // count characters using hashmap
    let hashmap = {};
    let ans = 0;
    let flag = 0;
    let sl = s.length;

    for (let i=0; i<sl; i++)
    {
        hashmap[s[i]] = hashmap[s[i]] || 0;
        hashmap[s[i]]++;
    }

    for (let x in hashmap) // check for double
    {
        ans += Math.floor(hashmap[x]/2) * 2;
        if (hashmap[x] % 2 === 1) flag = 1;
    }

    return ans + flag;

};
