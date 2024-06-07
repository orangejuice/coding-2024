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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let queue = [root], row = [], result = [[root.val]]

  while (queue.length) {
    const cur = queue.pop()
    if (result.length % 2 == 1) {
      if (cur.right != null) row.push(cur.right)
      if (cur.left != null) row.push(cur.left)
    } else {
      if (cur.left != null) row.push(cur.left)
      if (cur.right != null) row.push(cur.right)
    }

    if (!queue.length) {
      if (row.length) result.push(row.map(node => node.val))
      queue = row
      row = []
    }
  }
  return result
};