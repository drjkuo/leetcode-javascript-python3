/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) {
        return null;
    }
    return DFS(t1, t2);
};

function DFS(t1, t2) {
    var node = createNode(t1,t2);
    // console.log(node);
    if (t1 === null && t2 === null) {
        return node;
    }

    if (t1 && t2) {
        node.left = DFS(t1.left, t2.left);
        node.right = DFS(t1.right, t2.right);
        return node;
    }
    if (t1) {
        node.left = DFS(t1.left, null);
        node.right = DFS(t1.right, null);
        return node;
    }

    if (t2) {
        node.left = DFS(null, t2.left);
        node.right = DFS(null, t2.right);
        return node;
    }

}

function createNode(t1, t2) {
    if (t1 === null && t2 === null) {
        return null;
    }

    if (t1 && t2) {
        return new TreeNode(t1.val+t2.val);
    }

    if (t1) {
        return new TreeNode(t1.val);
    }

    if (t2) {
        return new TreeNode(t2.val);
    }

}
