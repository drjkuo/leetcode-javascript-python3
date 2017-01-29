/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // if (nums.length === 0) return 0;
    return helper(nums, 0, nums.length-1);
};

var helper = function (arr, start, end) {
    if (start > end) return null;

    var mid = start + Math.floor((end-start)/2);
    var node = new TreeNode(arr[mid]);
    node.left = helper (arr, start, mid-1);
    node.right = helper (arr, mid+1, end);

    return node;
};
