/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    helper(root);
    return root;
};

function helper (root) {
    if (root === null || (root.left === null && root.right === null)) return;

    // root is not null
    if (root.left && root.right) {
        var tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        invertTree(root.left);
        invertTree(root.right);
        return;
    }

    if (root.left) {
        root.right = root.left;
        root.left = null;
        invertTree(root.right);
        return;
    }

    if (root.right) {
        root.left = root.right;
        root.right = null;
        invertTree(root.left);
        return;
    }
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return root;

    if (root.left && root.right) {
        var tmp = root.right;
        root.right = root.left;
        root.left = tmp;
        invertTree(root.left);
        invertTree(root.right);
        return root;
    }

    if (root.left) {
        root.right = root.left;
        root.left = null;
        invertTree(root.right);
        return root;
    }

    if (root.right) {
        root.left = root.right;
        root.right = null;
        invertTree(root.left);
        return root;
    }
    return root;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);

    return root;

};
