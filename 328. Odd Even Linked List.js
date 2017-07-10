/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return null;

    // for even nodes
    // remove node
    // attach node to the end
    var cur = head;
    var prev = null;
    var tail = head;
    var tmp = new ListNode(-1);
    while(tail.next) {
        tail = tail.next;
    }
    console.log(tail.val);

    var movingTail = tail;
    // attach node to moving tail
    var cnt = 1;

    while (cur !== tail) {
        if (parseInt(cnt % 2) === 0) {
            tmp.val = cur.val;
            tmp.next = null;

            prev.next = cur.next;
            cur = prev.next;

            movingTail.next = tmp;
            movingTail = tmp;
        }
        else {
            prev = cur;
            cur = cur.next;
        }
        console.log(cnt);
        traversal(head);
        cnt++;
    }

    return head;

    function traversal(head) {
        var total = [];
        while (head) {
            total.push(head.val);
            head = head.next;
        }
        console.log(total);
    }

};
