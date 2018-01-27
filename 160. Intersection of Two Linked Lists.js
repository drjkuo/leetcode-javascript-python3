/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var tmpA = headA;
    var tmpB = headB;
    var lenA = getLength(tmpA);
    var lenB = getLength(tmpB);
    var offset = lenA - lenB;
    while (offset !== 0) {
        if (offset > 0) {
            headA = headA.next;
            offset -= 1;
        }
        else {
            headB = headB.next;
            offset += 1;
        }
    }

    while (headA !== null && headB !== null) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

function getLength (head) {
    if (head === null) return 0;
    var len = 0;
    while (head !== null) {
        len += 1;
        head = head.next;
    }
    return len;
}
