/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// use random pivot to prevent from time limit exceed

var findKthLargest = function(nums, k) {
    // var pivot = nums[nums.length-1];
    var pivot = nums[Math.floor((Math.random() * nums.length))];
    var nums1 = [];
    var nums2 = [];

    for (var i=0; i<nums.length; i++) {
        if (nums[i] > pivot) {
            nums1.push(nums[i]);
        }
        if  (nums[i] < pivot){
            nums2.push(nums[i]);
        }
    }

    if (k <= nums1.length) {
        return findKthLargest(nums1, k);
    }

    if (k > (nums.length - nums2.length)) {
        return findKthLargest(nums2, k - (nums.length - nums2.length)); //(nums.length - nums2.length)
    }

    return pivot;

};
