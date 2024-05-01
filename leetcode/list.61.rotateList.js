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
var rotateRight = function (head, k) {
  let n = 0, cur = head, newHead, tail
  while (cur) { n++; cur = cur.next }
  k = k % n
  if (!head || k == 0) return head

  cur = head
  for (let i = 0; i < n; i++) {
    if (i == n - k - 1) tail = cur
    if (i == n - k) newHead = cur
    if (!cur.next) cur.next = head
    else cur = cur.next
  }
  tail && (tail.next = null)
  return newHead
};