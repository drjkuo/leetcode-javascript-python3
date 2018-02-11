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


var minDiffInBST = function(root) {
    var min = Infinity;
    var arr = [];
    helper(root);
    for (var i=0; i<arr.length-1; i++) {
        min = Math.min(Math.abs(arr[i+1]-arr[i]), min);
    }
    return min;

    function helper(root) {
        if (root === null) return;
        if (root.left) helper(root.left);
        arr.push(root.val);
        if (root.right) helper(root.right);
    };
};
