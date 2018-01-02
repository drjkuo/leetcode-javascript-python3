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
var reverseList = function(head) {
    if (head === null) return null;

    var cur, prev;
    cur = head;
    prev = null;

    while(cur !== null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;

};

/*
Java sol

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }

 class Solution {
     public ListNode reverseList(ListNode head) {
         if (head == null) return null;
         ListNode cur = head;
         ListNode prev = null;
         while (cur != null) {
             ListNode next = cur.next;
             cur.next = prev;
             prev = cur;
             cur = next;
         }
         return prev;

     }
 }

*/
