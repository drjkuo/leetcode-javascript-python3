/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) return;
    var q = [];
    root.next = null;
    var dummy = new TreeLinkNode(null);
    q.push(root);
    q.push(dummy);
    //console.log(q);
    while(q.length > 1) {
      curr = q.shift();
      if (curr !== dummy) {
        if (curr.left !== null) q.push(curr.left);
        if (curr.right !== null) q.push(curr.right);
      }
      else { //curr === dummy
        q.push(curr);
        //do linking for all nodes in the q
        for (var i = 0; i < q.length - 1; i++) {
          q[i].next = (q[i+1] === dummy) ? null : q[i+1];
        }
        //console.log(q);
      }
    }
};
