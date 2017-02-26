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

var minABS = Number.MAX_SAFE_INTEGER;
var ans;

var closestValue = function(root, target) {
    dfs(root, target);
    return ans;
};


var dfs = function(root, target) {
    if (root === null) return;

    if (root.val > target) {
        if (Math.abs(root.val-target) < minABS) {
            minABS = Math.abs(root.val-target);
            ans = root.val;
        }
        dfs(root.left, target);
    }

    else { // root.val < target
        if (Math.abs(root.val-target) < minABS) {
            minABS = Math.abs(root.val-target);
            ans = root.val;
        }
        dfs(root.right, target);
    }
};

