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
    var sum = addLinkedList(l1) + addLinkedList(l2);

    var ans = new ListNode(0);
    var tmp = ans;
    if (sum === 0) return ans;
    while (sum !== 0) {
        var node = new ListNode(sum%10);
        sum = Math.floor(sum/10);
        tmp.next = node;
        tmp = tmp.next;
    }
    return ans.next;

    function addLinkedList(l) {
        var sum = 0;
        var exp = 0;
        while (l) {
            sum += l.val * Math.pow(10, exp);
            l = l.next;
            exp++;
        }
        return sum;
    }
};
