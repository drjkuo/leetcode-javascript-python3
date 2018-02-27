/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !inorder) {
        return null;
    }

    if(preorder.length !== inorder.length) {
        return null;
    }

    return helper(0, preorder.length - 1, preorder, 0, inorder.length - 1, inorder);
};

function helper(lp,rp,arrp,li,ri,arri) {
    if (lp > rp || li > ri) return null;
    var node = new TreeNode(arrp[lp]);

    //search root index in inorder sequence
    var rootIndexInorder = -1;
    for (var i=0; i<arri.length; i++) {
        if (arri[i] === node.val) {
            rootIndexInorder = i;
        }
    }

    // if(rootIndexInorder === -1) {
    //     return null;
    // }

    var left = helper(lp+1, rootIndexInorder-li+lp, arrp, li, rootIndexInorder-1, arri);
    var right = helper(rootIndexInorder-li+lp+1, rp, arrp, rootIndexInorder+1, ri, arri);

    node.left = left;
    node.right = right;

    return node;

}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder === null || preorder.length === 0) return null;
    return helper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);

    function helper(preorder, pl, pr, inorder, il, ir) {
        if (pl > pr) return null;

        var root = new TreeNode(preorder[pl]);

        for (var rootpos=il; rootpos<=ir; rootpos++) {
            if (inorder[rootpos] === preorder[pl])
                break;
        }

        root.left = helper(preorder, pl+1, rootpos-il+pl, inorder, il, rootpos-1);
        root.right = helper(preorder, rootpos-il+pl+1, pr, inorder, rootpos+1, ir);

        return root;
    }
};
