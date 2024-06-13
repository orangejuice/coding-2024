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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return
  let last = root, left = root.left, right = root.right
  if (left) {
    last.right = left
    last.left = null
    last = flatten(left)
  }
  if (right) {
    last.right = right
    last.left = null
    last = flatten(right)
  }
  return last
}
