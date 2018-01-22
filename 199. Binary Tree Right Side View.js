/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];

    var q = [];
    var helperQ = [];

    if (root === null) return [];

    q.push(root);

    while (q.length > 0 || helperQ > 0) {
        while (q.length > 0) {
            if (q.length === 1) result.push(q[0].val);
            var tmp = q.shift();
            if (tmp.left) helperQ.push(tmp.left);
            if (tmp.right) helperQ.push(tmp.right);
        }
        q = helperQ;
        helperQ = [];
    }

    return result;

};
