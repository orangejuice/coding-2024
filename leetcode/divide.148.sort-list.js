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
var sortList = function (head) {
  if (!head || !head.next) return head
  const mid = getMid(head), right = mid.next
  mid.next = null
  return merge(sortList(head), sortList(right))
}

const getMid = (head) => {
  let slow = head, fast = head.next
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

const merge = (left, right) => {
  const dummy = new ListNode()
  let cur = dummy
  while (left && right) {
    if (left.val > right.val) {
      cur.next = right
      right = right.next
    } else {
      cur.next = left
      left = left.next
    }
    cur = cur.next
  }
  cur.next = left || right
  return dummy.next
}
