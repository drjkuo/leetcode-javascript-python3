/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals <= 1) return intervals;

    intervals.sort(function(x,y) {
        if (x.start > y.start) return 1;
        else return -1;
    });

    // if overlaps, then merge
    // if not, print

    var result = [];

    for (var i=0; i<intervals.length; i++) {
        if (result.length === 0 || intervals[i].start > result[result.length-1].end) result.push(intervals[i]);
        else result[result.length-1].end = Math.max(result[result.length-1].end, intervals[i].end);
    }

    return result;

};
