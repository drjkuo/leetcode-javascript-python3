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

var ans = 0;

var findTilt = function(root) {
    if (root === null) return 0

    return Math.abs(sum(root.left) - sum(root.right)) + findTilt(root.left) + findTilt(root.right);
    // return ans;

};

function sum(node) {
    if (node === null) return 0;
    // if (node.left === null && node.right === null) return node.val;
    // if (node.right === null) return node.val + sum
    return sum(node.right) + sum(node.left) + node.val;
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
 * @return {number}
 */
var findTilt = function(root) {
    var result = 0;
    helper(root);
    return result;

    function helper(root) {
        if (root === null) return 0;

        var left = helper(root.left);
        var right = helper(root.right);
        result += Math.abs(left-right);

        return left+right+root.val;
    }

};
