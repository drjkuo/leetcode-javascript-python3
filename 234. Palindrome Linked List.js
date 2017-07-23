/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // find mid
    // reverse first half
    // traverse and compare
    var mid = findMid(head);
    var anotherHead = reverse(mid);
    return compare(head, anotherHead);
};

function findMid (head) {
    if (!head) return null;
    var fast = head.next;
    var slow = head;
    while (fast) {
        fast = fast.next;
        if (fast.next) {
            fast = fast.next;
        }
        else {
            fast = null;
        }
        slow = slow.next;
    }
    return slow;
}

function reverse (head) {
    if (!head) return head;
    var prev = null;
    var cur = head;
    var nxt;
    while (cur) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return cur;
}

function compare (h1, h2) {
    while (h1) {
        if (h1.val !== h2.val) {
            return false;
        }
        h1 = h1.next;
        h2 = h2.next;
    }
    return true;
}
