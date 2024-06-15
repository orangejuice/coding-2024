/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const queue = new MinPriorityQueue({priority: node => node.val})

  for (let cur of lists) {
    while (cur) {
      queue.enqueue(cur)
      cur = cur.next
    }
  }

  let dummy = new ListNode(), cur = dummy
  while (!queue.isEmpty()) {
    cur.next = queue.dequeue().element
    cur = cur.next
    if (queue.isEmpty()) cur.next = null
  }
  return dummy.next
}
