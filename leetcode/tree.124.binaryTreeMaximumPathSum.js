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
var maxPathSum = function (root) {
  let max = -Infinity

  const recur = (node) => {
    if (!node) return 0

    const left = recur(node.left)
    const right = recur(node.right)
    const sumCur = node.val + left + right
    const sumLeft = node.val + left
    const sumRight = node.val + right
    max = Math.max(max, node.val, sumCur, sumLeft, sumRight)
    // Compute the maximum path sum with the current node as the highest node in the path.

    return Math.max(node.val, sumLeft, sumRight)
    // Return the maximum gain from the current node that can be extended to its parent.
  }
  recur(root)
  return max
};