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
var isSymmetric = function(root) {
    if (root === null) return true;
    invertTree(root.right);
    return isSameTree(root.left, root.right);
};

function invertTree(root) {
    if (root === null) return;

    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);
    return;
}

function isSameTree(left, right) {
    if (left && right === null) return false;
    if (left === null && right) return false;
    if (left === null && right === null) return true;
    return (left.val === right.val) && isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
}
