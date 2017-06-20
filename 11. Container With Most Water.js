/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;
    var area = -1;

    while (left < right) {
        tmpArea = Math.min(height[left], height[right]) * (right - left);
        area = (tmpArea > area)? tmpArea : area;
        if (height[left] > height[right]) {
            right += -1;
        }
        else {
            left += 1;
        }
    }

    return area;
};
