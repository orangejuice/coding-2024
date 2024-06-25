/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head
  let cur = head, last = null
  while (cur) {
    const next = cur.next
    cur.next = last
    last = cur
    cur = next
  }
  return last
}
