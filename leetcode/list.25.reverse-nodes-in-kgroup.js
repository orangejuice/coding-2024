/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const toolHead = new ListNode(0, head)
  let cur = toolHead
  while (cur) {
    let group = [], before, after
    for (let i = 0; cur && i <= k; i++) {
      if (i == 0) before = cur
      else group.push(cur)
      if (i < k) cur = cur.next
      else after = cur.next
    }
    if (group.length == k) {
      let last = group.pop()
      before.next = last
      while (group.length > 0) {
        last.next = group.pop()
        last = last.next
      }
      last.next = after
      cur = last
    }
  }
  return toolHead.next
}
