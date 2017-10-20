/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var plen = p.length;
    var objs = {}, objp = {};
    var ans = [];

    for (var i=0; i<p.length; i++) {
        objp[p[i]] = objp[p[i]] || 0;
        objp[p[i]]++;
    }

    for (i=0; i<p.length; i++) {
        objs[s[i]] = objs[s[i]] || 0;
        objs[s[i]]++;
    }

    for (i=0; i<=s.length-p.length; i++) {
        if (isEqual(objs, objp)) {
            ans.push(i);
        }

        if (objs[s[i]] > 0) {
            if (objs[s[i]] === 1) {
                delete objs[s[i]]
            }
            else {
                objs[s[i]]--;
            }
        }

        objs[s[i+p.length]] = objs[s[i+p.length]] || 0;
        objs[s[i+p.length]]++;
    }

    return ans;


    function isEqual(a, b) {
       var propA = Object.getOwnPropertyNames(a);
       var propB = Object.getOwnPropertyNames(b);

       if (propA.length !== propB.length) return false;

       for (var i=0; i<propA.length; i++) {
          var propName = propA[i];

          if (a[propName] !== b[propName]) return false;
       }
        return true;
    }

};
