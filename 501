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

var maxtimes = 0;
var tmpmaxtimes = 0;
var tmpval;
var ans = [];

var findMode = function(root) {
    // in-order traversal

    if (root === null) {
        return;
    }

    findMode(root.left);

    if (root.val === tmpval) {
        tmpmaxtimes += 1;
    }
    else { //root.val !== tmpval
        tmpmaxtimes = 1;
        tmpval = root.val;
    }

    if (tmpmaxtimes === maxtimes) {
        ans.push(root.val);
    }

    if (tmpmaxtimes > maxtimes) {
        maxtimes = tmpmaxtimes;
        ans = [];
        ans.push(root.val);
    }


    findMode(root.right);

    return ans;
};


