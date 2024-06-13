/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root
  let queue = [root]
  while (queue.length > 0) {
    const row = []
    while (queue.length > 0) {
      const cur = queue.shift()
      if (cur.left) {
        if (row.length > 0) row[row.length - 1].next = cur.left
        row.push(cur.left)
      }
      if (cur.right) {
        if (row.length > 0) row[row.length - 1].next = cur.right
        row.push(cur.right)
      }
    }
    queue = row
  }
  return root
}
