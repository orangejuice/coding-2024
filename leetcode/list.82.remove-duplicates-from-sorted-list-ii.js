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
var deleteDuplicates = function (head) {
  const dummyHead = new ListNode(0, head)
  let last = dummyHead, cur = dummyHead.next, dupVal
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      dupVal = cur.val
      if (cur.next.next == null) last.next = cur.next.next
    } else {
      if (cur.val != dupVal) {
        last.next = cur
        last = cur
      }
      if (cur.next.next == null) last.next = cur.next
    }
    cur = cur.next
  }
  return dummyHead.next
}
