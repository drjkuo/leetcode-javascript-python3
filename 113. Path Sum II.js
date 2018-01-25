/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    helper(result, sum, root, 0, []);
    return result;
};

function helper(result, sum, node, curSum, path) {
    if (node === null) return;

    curSum += node.val;
    path.push(node.val);

    if (curSum === sum && node.left === null && node.right === null) {
        result.push(path.slice());
    }
    else {
        helper(result, sum, node.left, curSum, path);
        helper(result, sum, node.right, curSum, path);
    }
    path.pop();


}
