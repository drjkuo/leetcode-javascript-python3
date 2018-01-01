/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }

    var ans = new ListNode(0);
    var tmp = ans;
    var carry = 0;
    var digit = 0;

    while (l1 || l2 || carry !== 0) {
        digit = carry;
        if (l1) {
            digit += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            digit += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(digit/10);
        digit = digit % 10;


        tmp.next = new ListNode(digit);
        tmp = tmp.next;
    }

    return ans.next;

};
