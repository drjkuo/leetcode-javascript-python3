/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 0) return 0;
    citations = citations.sort(function(x, y) {
        return x-y;
    });
    var i, j, tmp, count;
    var result = [], len = citations.length;
    for(i=0; i<len; i++) {
        tmp = citations[i];
        count = 0;
        for(j=i; j<len; j++) {
            if (citations[i] >= tmp) count += 1;
        }
        result.push(Math.min(citations[i], count));
    }

    return Math.max(...result);
};
