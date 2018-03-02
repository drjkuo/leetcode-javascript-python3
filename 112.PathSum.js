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
    if (node === null) return false; // if current node is null then terminate
    if (node.val === remaining && node.left === null && node.right === null) return true; // true condition: node.val && leaf
    return helper(node.left, remaining - node.val) || helper(node.right, remaining - node.val);
}

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
    if (root.val === sum && root.left === null && root.right === null) return true;

    return (hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val));
};
