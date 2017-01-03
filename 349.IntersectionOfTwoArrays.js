/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 = nums1.slice();
    let l1 = nums1.length;

    let arr2 = nums2.slice();
    let l2 = nums2.length;

    let noDupArr1 = new Set();
    for (let i=0; i<l1; i++)
    {
        noDupArr1.add(arr1[i]);
    }

    let noDupArr2 = new Set();
    for (let i=0; i<l2; i++)
    {
        noDupArr2.add(arr2[i]);
    }


    let ans = [];
    for (let y of noDupArr1)
    {
        for (let x of noDupArr2)
        {
            if (y === x)
            {
                ans.push(x);
            }
        }
    }

    return ans;

};
