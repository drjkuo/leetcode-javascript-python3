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
var isValidBST = function(root) {
    if (!root) return true;

    var leftMax = helper(root.left)[0];
    var rightMin = helper(root.right)[1];

    if (root.val > leftMax && root.val < rightMin) {
        return isValidBST(root.left) && isValidBST(root.right);
    }
    else {
        return false;
    }
};

function helper(node) {
    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;
    DFS(node);
    return [max, min];

    function DFS(node) {
        if (node) {
            if (node.val > max) max = node.val;
            if (node.val < min) min = node.val;
            DFS(node.left);
            DFS(node.right);
        }
    }
}
