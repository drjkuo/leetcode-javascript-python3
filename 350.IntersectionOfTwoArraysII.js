/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Runtime: 98 ms; 98%

var intersect = function(nums1, nums2) {
    let ans = [];
    for (let i=0; i<nums2.length; i++)
    {
        let tmp = nums1.indexOf(nums2[i]);
        if (tmp !== -1)
        {
            ans.push(nums2[i]);
            nums1.splice(tmp,1);
        }
    }

    return ans;
};
