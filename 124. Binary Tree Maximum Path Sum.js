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

        var left = Math.max(0, helper(root.left));
        var right = Math.max(0, helper(root.right));
        max = Math.max(max, left+right+root.val);

        return Math.max(root.val+left, root.val+right)

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
var maxPathSum = function(root) {
    var max = -Infinity;
    helper(root);
    return max;

    function helper(root) {
        if (root ===null) return 0;

        var left = Math.max(0, helper(root.left));
        var right = Math.max(0, helper(root.right));
        max = Math.max(max, left+right+root.val);

        return root.val+Math.max(left, right);
    }
};
