/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let l1 = nums1.length;
    let ans = [];
    for (let i=0; i<l1; i++)
    {
        let tmp = nums1[i];
        if (nums2.indexOf(tmp) >=0 && ans.indexOf(tmp) == -1)
        {
            ans.push(tmp);
        }
    }

    return ans;

};
