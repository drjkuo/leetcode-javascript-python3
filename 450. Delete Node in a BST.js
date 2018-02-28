/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) return root;
    var parent = null;
    var tmp = root;
    while (tmp !== null) {
        console.log(tmp.val);
        if (tmp.val > key) {
            parent = tmp;
            tmp = tmp.left;
            continue;
        }
        if (tmp.val < key) {
            parent = tmp;
            tmp = tmp.right;
            continue;
        }
        if (tmp.val === key) break;
    }

    console.log(tmp.val);

    if (tmp === null) {
        if (parent.val > tmp.val) parent.left = null;
        else parent.right = null;
        return root;
    }

    // if tmp is found; check right
    if (tmp.right) {
        var removingNode = findRightTreeMin(tmp, tmp.right);
        var replacingValue = removingNode[1].val;
        tmp.val = replacingValue;
        removingNode[0].left = null;
        return root;
    }

    // if no right, check left
    if (tmp.left) {
        var removingNode = findLeftTreeMax(tmp, tmp.left);
        var replacingValue = removingNode[1].val;
        tmp.val = replacingValue;
        removingNode[0].right = null;
        return root;
    }

    // if no right and no left
    tmp = null;
    return root;


    function findRightTreeMin(p, right) {
        var parent = p;
        while (right.left) {
            parent = right;
            right = right.left;
        }
        return [parent, right];
    }

    function findLeftTreeMax(p, left) {
        var parent = p;
        while (left.right) {
            parent = left;
            left = left.right;
        }
        return [parent, left];
    }


};
