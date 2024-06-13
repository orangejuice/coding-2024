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
 * @return {boolean}
 */
var isSymmetric1 = function (root) {
  if (!root.left && !root.right) return true
  else if (!root.left || !root.right) return false

  const leftQueue = [root.left], rightQueue = [root.right]
  while (leftQueue.length > 0 || rightQueue.length > 0) {
    const left = leftQueue.shift()
    const right = rightQueue.shift()
    if (left?.val != right?.val) return false
    if (left) leftQueue.push(left.left, left.right)
    if (right) rightQueue.push(right.right, right.left)
  }
  return true
}

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
 * @return {boolean}
 */
var isSymmetric2 = function (root) {
  return check(root.left, root.right)
}

const check = function (left, right) {
  if (left?.val != right?.val) return false
  if (left == null && right == null) return true
  return check(left.left, right.right) && check(left.right, right.left)
}
