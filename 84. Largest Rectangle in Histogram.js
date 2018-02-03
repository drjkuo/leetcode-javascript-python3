/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var h = heights.slice();
    h.push(0);
    var result = 0;
    var stack = []; // store indexes
    if (heights.length === 0) return 0;

    // var pointer = -1;

    for(var i=0; i<h.length; i++) {
        if (stack.length === 0 || h[i] >= h[stack[stack.length-1]]) {
            stack.push(i);
            continue;
        }
        while (stack.length > 0 && h[i] < h[stack[stack.length-1]]) {
            var oneIndex = stack.pop();
            // console.log(oneIndex, h[oneIndex]);
            var left = (stack.length === 0)? -1 : stack[stack.length-1];
            result = Math.max(h[oneIndex]*(i-left-1), result);
            // console.log(result);
        }
        stack.push(i);
    }

    return result;

};
