/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) return false;
    // if (root === null && sum === 0) return true;
    return helper(root, sum);
};

let helper = function(node, remaining) // make sure of end condition
{
    if (node.left === null && node.right === null && node.val === remaining) return true;
    if (node.left === null && node.right === null && node.val !== remaining) return false;
    if (node.left === null) return Boolean(helper(node.right, remaining - node.val));
    if (node.right === null) return Boolean(helper(node.left, remaining - node.val));
    return Boolean(helper(node.left, remaining - node.val) + helper(node.right, remaining - node.val));
}
