/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// [3,1,2,3,4,5,6]

var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;
    //if(nums.indexOf(val) < 0) return nums.length;

    let newlength = 0;
    let nl = nums.length;
    for(let i=0; i<nl ; i++){
        if(nums[i] !== val) {
            nums[newlength] = nums[i];
            newlength++;
        }
    }

    return newlength;
};
