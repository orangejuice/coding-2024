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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const doSum = (node, sum) => {
    if (!node) return false
    sum += node.val
    if (!node.left && !node.right) return sum == targetSum
    return doSum(node.left, sum) || doSum(node.right, sum)
  }
  return doSum(root, 0)
}
