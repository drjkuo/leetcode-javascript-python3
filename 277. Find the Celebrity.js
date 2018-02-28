/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        var cand = 0;
        for (var i=1; i<n; i++) {
            if (knows(cand, i)) cand = i;
        }

        for (var i=0; i<n; i++) {
            // if () continue;
            if (i !== cand && (knows(cand, i) || !knows(i, cand))) return -1;
        }

        return cand;

    };
};
