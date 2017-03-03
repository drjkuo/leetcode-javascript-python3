/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var queue = []; // empty array //push, shift
    var tmpqueue = [];
    var tmpans = [];
    var ans = [];
    if (root === null) return [];
    queue.push(root);

    while (queue.length > 0) {
        tmpans = [];
        tmpqueue = [];
        while (queue.length > 0) {
            var tmpnode = queue.shift();
            //ans.push(tmp.val);
            if (tmpnode.left !== null) tmpqueue.push(tmpnode.left);
            if (tmpnode.right !== null) tmpqueue.push(tmpnode.right);
            tmpans.push(tmpnode.val);
        }
        ans.push(tmpans);
        queue = tmpqueue;

    }


    return ans.reverse();

};
