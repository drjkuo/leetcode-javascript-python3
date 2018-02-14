/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */


var closestValue = function(root, target) {
    var child = (root.val > target)? root.left : root.right;
    if (child === null) return root.val;

    var closesetInChild = closestValue(child, target);

    return Math.abs(closesetInChild - target) < Math.abs(root.val - target)? closesetInChild : root.val;


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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root === null) return;

    var diff = Infinity, result = Infinity;
    while (root) {
        if (Math.abs(target-root.val) < diff) {
            result = root.val;
            diff = Math.abs(target-root.val);
        }

        if (root.val > target) root = root.left;
        else root = root.right;
    }

    return result;
};
