/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const toolHead = new ListNode(0, head)
  let before, next, last, cur = toolHead
  for (let i = 0; i <= right; i++) {
    next = cur.next
    if (i == left - 1) before = cur
    if (i > left) cur.next = last
    last = cur
    cur = next
  }
  before.next.next = next
  before.next = last
  return toolHead.next
}
