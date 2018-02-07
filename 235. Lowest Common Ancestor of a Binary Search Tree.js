/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while(1) {
        if (p.val === root.val || q.val === root.val) {
            return root;
        }
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        }
        else if (p.val < root.val && q.val < root.val) {
            root = root.left;
        }
        else {
            return root;
        }
    }
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while ((root.val >= p.val && root.val >= q.val) || (root.val <= p.val && root.val <= q.val)) {
        if (root.val === p.val || root.val === q.val)
            return root;
        if (root.val > p.val && root.val > q.val)
            root = root.left;
        if (root.val < p.val && root.val < q.val)
            root = root.right;
    }

    return root;
};
