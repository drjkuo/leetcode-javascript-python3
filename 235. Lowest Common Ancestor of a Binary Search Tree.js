var lowestCommonAncestor = function(root, p, q) {
    var arr1 = helper(root, p);
    var arr2 = helper(root, q);
};

var arr = [];
var helper = function(root, p) { // return an array showing the path from root to node p
    if (root.val === p.val) {
        arr.push(root.val);
        return arr;
    }

    if (root.val > p.val) {
        arr.push(root.val);
        helper(root.left, p);
    }

    if (root.val < p.val) {
        arr.push(root.val);
        helper(root.right, p);
    }
}
