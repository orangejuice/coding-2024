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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let i = 1, result

  const iterate = (node) => {
    if (!node) return
    iterate(node.left)
    if (i++ == k) result = node.val
    else iterate(node.right)
  }
  iterate(root)
  return result
}
