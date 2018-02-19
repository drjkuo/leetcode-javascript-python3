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
var maxPathSum = function(root) {
    var max = -Infinity;
    helper(root);
    return max;


    function helper(root) {
        if (root === null) return 0;

        var left = Math.max(helper(root.left), 0);
        var right = Math.max(helper(root.right), 0);
        max = Math.max(max, root.val+left+right);
        return root.val + Math.max(left, right);
    }
};
