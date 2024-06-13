/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let mapping = new Map()
  let list = new Node(), cur = list
  while (head) {
    let next = new Node()
    mapping.set(head, next)
    next.val = head.val
    next.random = head.random
    head = head.next
    cur.next = next
    cur = next
  }
  cur = list.next
  while (cur) {
    cur.random = mapping.get(cur.random)
    cur = cur.next
  }
  return list.next
}
