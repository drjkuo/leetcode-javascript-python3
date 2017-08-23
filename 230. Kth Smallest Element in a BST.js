/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */



var kthSmallest = function(root, k) {
    var cnt = 0;
    var ans;
    DFS(root);
    return ans;

    function DFS(root) {
        if (root === null || cnt >= k) return;
        DFS(root.left);

        // in-order operations
        cnt++;
        if (cnt === k) {
            ans = root.val;
        }

        DFS(root.right);
    }
};
