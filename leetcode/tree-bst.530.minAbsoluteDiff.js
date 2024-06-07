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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity, arr = []
  const iterate = (node) => {
    if (!node) return
    iterate(node.left)
    arr.push(node.val)
    iterate(node.right)
  }
  iterate(root)

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i] - arr[i - 1])
  }
  return min
}

var getMinimumDifferenceBetter = function (root) {
  let min = Infinity, last
  const iterate = (node) => {
    if (!node) return

    iterate(node.left)
    if (last != null) min = Math.min(min, node.val - last) // do not miss last == 0
    last = node.val
    iterate(node.right)
  }
  iterate(root)
  return min
}
