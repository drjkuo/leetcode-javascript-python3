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
    return dfs(root, p, q);
};

var dfs = function(node, p, q) {
  if ((p.val > node.val) && (q.val > node.val)) {
      return dfs(node.right, p, q);
  }

  if ((p.val < node.val) && (q.val < node.val)) {
      return dfs(node.left, p, q);
  }

  return node;


};
