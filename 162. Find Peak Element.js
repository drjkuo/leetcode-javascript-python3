/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // 0 ... n-1
    var start = 0, end = nums.length-1;
    var mid = 0;
    if (nums.length === 1) return 0;

    while (start+1 < end) {
        mid = parseInt(start + (end-start)/2);
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            return mid;
        }
        else if (nums[mid] > nums[mid-1] && nums[mid] < nums[mid+1]) {
            start = mid;
        }
        else end = mid;
    }

    if (nums[start] > nums[end]) return start;
    else return end;
};
