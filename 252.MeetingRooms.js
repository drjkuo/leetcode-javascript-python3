/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */

// 112 ms
var canAttendMeetings = function(intervals) {
    intervals.sort(function(a, b) {
        if (a.start === b.start)
        {
            return 0;
        }
        else
        {
            return (a.start < b.start) ? -1 : 1;
        }
    });

    let il = intervals.length;
    for (let i=0; i<il-1; i++) // 2nd to last's start >1st ... end
    {
        if (intervals[i+1].start < intervals[i].end) return false;
    }

    return true;
};
