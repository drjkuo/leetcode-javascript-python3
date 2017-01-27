/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ans = 0;
    let con = 0;
    if (nums.length === 0) return 0;
    for (let i=0; i<nums.length; i++)
    {
        if (nums[i] === 1)
        {
            con++;
            if (con > ans) ans = con;
        }
        else
        {
            con = 0;
        }
    }

    return ans;
};
