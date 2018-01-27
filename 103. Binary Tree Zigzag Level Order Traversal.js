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
var zigzagLevelOrder = function(root) {
    if (root === null) return [];
    var main = [];
    var helper = [];
    var tmpNode, oneLevel, result = [], level = 0;
    main.push(root);

    while (main.length > 0 || helper.length > 0) {
        oneLevel = [];
        while (main.length > 0) {
            tmpNode = main.shift();
            oneLevel.push(tmpNode.val)
            if (tmpNode.left) helper.push(tmpNode.left);
            if (tmpNode.right) helper.push(tmpNode.right);
        }
        if (level % 2)
            result.push(oneLevel.slice().reverse());
        else
            result.push(oneLevel.slice());
        main = helper;
        helper = [];
        level += 1;
    }
    return result;
};
