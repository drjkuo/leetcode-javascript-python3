/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    // this.root = root;
    this.stack = [];
    this.pushLeft(root);
};



/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return (this.stack.length > 0);
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        var tmp = this.stack.pop();
        if (tmp.right) this.pushLeft(tmp.right);
        return tmp.val;

    }
    return null;
};

BSTIterator.prototype.pushLeft = function(node) {
    while(node) {
        this.stack.push(node);
        node = node.left;
    }
}


/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
