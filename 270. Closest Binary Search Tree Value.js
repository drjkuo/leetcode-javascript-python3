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





