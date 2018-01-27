/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var mainq = [];
    var helperq = [];
    var tmpNode;
    if (root === null) return;
    mainq.push(root);

    while (mainq.length > 0 || helperq > 0) {
        while (mainq.length > 0) {
            tmpNode = mainq.shift();
            if (mainq.length === 0) {
                tmpNode.next = null;
            }
            else {
                tmpNode.next = mainq[mainq.length-1];
            }
            if (tmpNode.left) helperq.push(tmpNode.left);
            if (tmpNode.right) helperq.push(tmpNode.right);
        }
        mainq = helperq;
        helperq = [];
    }
    return;

};
