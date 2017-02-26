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
    dfs(root, target);
    //console.log(arr);
    var minabs = Number.MAX_SAFE_INTEGER,
        minindex;
    for (var i=0; i<arr.length; i++) {
        if (Math.abs(arr[i]-target) < minabs) {
            minabs = Math.abs(arr[i]-target);
            minindex = i;
        }
    }

    return arr[minindex];

};

var arr = []
var dfs = function(root, target) {
    if (root === null) return;
    arr.push(root.val);
    if (root.val > target) {
        dfs(root.left, target);
    }
    else {
        dfs(root.right, target);
    }
}
