/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] || 0;
        hash[s[i]]++;
    }
    // var keys = Object.keys(hash);
    var arr = [];
    for (var i in hash) {
        arr.push([i, hash[i]]);
    }

    arr.sort(function(a,b) {
        return b[1]-a[1];
    });

    var ans = "";
    for (i=0; i<arr.length; i++) {
        ans = ans + arr[i][0].repeat(arr[i][1]);
    }

    return ans;
};
