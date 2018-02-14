/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    var hash={}, i;
    for (i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] || 0;
        hash[s[i]] += 1;
    }

    for (i=0; i<t.length; i++) {
        hash[t[i]] -= 1;
        if (hash[t[i]] === 0) delete hash[t[i]];
    }

    return Object.keys(hash).length === 0;

};
