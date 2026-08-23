/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        // 1- get the middle of linked list
       let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse the second part
         let second = slow.next;
        let prev = (slow.next = null);
        while (second !== null) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }
        // merge 
        second = prev;
        let first = head
        while (second) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second
            second.next = tmp1
            first = tmp1;
            second = tmp2;
        }

    }
}
