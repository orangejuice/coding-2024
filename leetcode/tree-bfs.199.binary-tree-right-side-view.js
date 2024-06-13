/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  let queue = [root], row = [], result = []

  while (queue.length > 0) {
    const cur = queue.shift()
    if (cur.left) row.push(cur.left)
    if (cur.right) row.push(cur.right)

    if (queue.length == 0) {
      result.push(cur.val)
      queue.push(...row)
      row = []
    }
  }
  return result
}
