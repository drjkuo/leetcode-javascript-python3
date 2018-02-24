/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (typeof n !== "number") throw new Error("input error");

    if (n === 1) return "1";

    var p = "1";
    while (n>1) {
        var cnt = 1;
        var s = "";
        for (var i=0; i<p.length; i++) {
            if (i+1 <= p.length-1 && p[i] === p[i+1]) cnt += 1;
            else {
                s = (s + cnt) + p[i];
                cnt = 1;
            }
        }
        p = s.slice();


        n -= 1;
    }

    return s;
};
