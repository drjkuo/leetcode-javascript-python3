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
var maxDepth = function(root) {
    return helper(root);


    function helper(node) {
        if (node === null) return 0;
        return Math.max(helper(node.left), helper(node.right)) + 1 ;
    }
};

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
var maxDepth = function(root) {
    if (root === null) return 0;
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return (Math.max(left, right) + 1);
};
