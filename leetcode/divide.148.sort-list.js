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
  const quickSort = (start, end) => {
    if (start == end) return start
    const [head, pivot] = partition(start, end)
    const left = quickSort(head, pivot)
    pivot.next = quickSort(pivot.next, end)
    return left
  }
  return quickSort(head, null)
}

const partition = (start, end) => {
  const dummy = new ListNode(), pivot = start
  let last = start, cur = start.next, small = dummy
  while (cur != end) {
    if (cur.val < pivot.val) {
      small.next = cur
      small = small.next
      last.next = cur.next
    } else {
      last = cur
    }
    cur = cur.next
  }
  small.next = pivot
  return [dummy.next, pivot]
}
