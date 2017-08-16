/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    // copy nodes and create a hash -- key: orignal nodes; value: new nodes
    if (head === null) return null;
    var hash = {};
    var newhead = new RandomListNode(head.label);
    hash[head] = newhead;
    var p, np;
    p = head;
    np = newhead;
    p = p.next;
    while (p) {
        var tmp = new RandomListNode(p.label);
        np.next = tmp;
        hash[p] = tmp;
        p = p.next;
        np = tmp;
    }

    // set random pointer for new nodes
    p = head;
    np = newhead;

    while (p) {
        np.random = hash[p.random];
        np = np.next;
        p = p.next;
    }

    return newhead;

};
