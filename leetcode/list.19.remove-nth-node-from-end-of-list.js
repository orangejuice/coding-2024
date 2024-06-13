/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let cur = head, list = []
  while (cur) {
    list.push(cur)
    cur = cur.next
  }

  const toRemove = list.length - n

  if (toRemove == 0) return head.next
  else if (toRemove == list.length - 1) list[toRemove - 1].next = null
  else list[toRemove - 1].next = list[toRemove + 1]
  return head
}
