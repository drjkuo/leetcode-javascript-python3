/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }

    if (Math.abs(nodeHeight(root.left) - nodeHeight(root.right)) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
};

var nodeHeight = function(node) {
    if (node === null) return 0;
    return Math.max(nodeHeight(node.left), nodeHeight(node.right)) + 1;
}
