// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
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
    // in-order traversal
    if (root === null) return true;
    var all = [];
    DFS(root);
    for (var i=1; i<all.length; i++) {
        if (all[i] <= all[i-1])
            return false;
    }
    return true;

    function DFS(root) {
        if (root) {
            DFS(root.left);
            all.push(root.val);
            DFS(root.right);
        }
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, Infinity, -Infinity);
};

function helper(node, max, min) {
    if (node === null) return true;

    if (node.val >= max) return false;
    if (node.val <= min) return false;

    return helper(node.left, node.val, min) && helper(node.right, max, node.val);

};
