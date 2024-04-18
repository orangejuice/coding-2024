/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(), cur = result
  let sum = l1.val + l2.val
  while (sum || l1?.next || l2?.next) {
    cur.val = sum % 10
    sum = Math.floor(sum / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    sum += (l1?.val ?? 0) + (l2?.val ?? 0)
    if (sum || l1?.next || l2?.next) {
      cur.next = new ListNode()
      cur = cur.next
    }
  }
  return result
};