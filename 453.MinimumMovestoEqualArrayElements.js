/**
 * @param {number[]} nums
 * @return {number}
 */

// refactor
var minMoves = function(nums) {
    // let minNums = Math.min(...nums);
    let min = Number.MAX_VALUE;
    let nl = nums.length;
    let sum = 0;
    // let sum = nums.reduce(function(a, b) { return a + b;}, 0);
    for (let i=0; i<nl; i++) {
        sum += nums[i];
        min = (nums[i]<min)? nums[i]:min;
    }
    // for (let i=0; i<nl; i++)
    // {
    //     ans += (nums[i] - minNums);
    // }

    return sum - min*nl;
};

