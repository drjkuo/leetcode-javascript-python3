/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) { return 0; }
    return helper(root);
};

let helper = function(node) {
    if (node.left === null && node.right === null) { return 1;}
    if (node.left === null) { return helper(node.right) + 1; }
    if (node.right === null) { return helper(node.left) + 1; }
    return (Math.min(helper(node.left), helper(node.right)) + 1);
}
