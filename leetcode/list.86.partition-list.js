/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummy = new ListNode(0, head)
  let cur = dummy.next, last = dummy, gHead, gTail
  while (cur) {
    const next = cur.next
    if (cur.val >= x) {
      if (gTail) gTail = cur
      else gHead = gTail = cur
    }
    if (cur.val < x) {
      if (gHead) {
        last.next = cur
        cur.next = gHead
        gTail.next = next
      }
      last = cur
    }
    cur = next
  }
  return dummy.next
}
