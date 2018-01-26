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
    if (root === null) return true;

    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

function getHeight(root) {
    if (root === null) return 0;
    var leftH = getHeight(root.left);
    var rightH = getHeight(root.right);
    if

    return Math.max(leftH, rightH) + 1;
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
 * @return {boolean}
 */

var isBalanced = function(root) {
    if (root === null) return true;
    var flag = true;
    getHeight(root);
    return flag;

    function getHeight(root) {
        if (root === null) return 0;
        var leftH = getHeight(root.left);
        var rightH = getHeight(root.right);

        if (Math.abs(leftH - rightH) > 1) flag = false;

        return Math.max(leftH, rightH) + 1;
    }
};
