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
var averageOfLevels = function (root) {
  if (!root) return []
  let queue = [root], row = [], result = [root.val]
  while (queue.length > 0) {
    const cur = queue.shift()
    if (cur.left) row.push(cur.left)
    if (cur.right) row.push(cur.right)

    if (queue.length == 0) {
      if (row.length) result.push(row.reduce((acc, cur) => acc + cur.val, 0) / row.length)
      queue = row
      row = []
    }
  }
  return result
}
