/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (var i=0; i<nums.length;) {
        if(nums[i] !== i+1 && nums[i]>0 && nums[i]<=nums.length && nums[i]!=nums[nums[i]-1]) {
            swap(i, nums[i]-1);
        }
        else {
            i+=1;
        }
    }

    // console.log(nums);

    for (var i=0; i<nums.length; i++) {
        if (nums[i] !== i+1) return i+1;
    }

    return nums.length+1;

    function swap(i,j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        return;
    }
};
