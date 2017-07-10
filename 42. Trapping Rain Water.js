/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var curIndex = 0;
    var ans = 0;
    var oneSum = 0;
    // [0,1,0,2,1,0,1,3,2,1,2,1]
    // find next index having greater height
    while (curIndex < height.length ) {
        var tmpHeight = height[curIndex];
        oneSum = 0;
        for (var i = curIndex+1; i < height.length; i++) {
            if (height[i] >= height[curIndex]) {
                ans += oneSum;
                curIndex = i;
            }
            else {
                oneSum += (height[curIndex] - height[i]);
            }
        }
        console.log(oneSum);

    }

    return ans;

};
