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
 */
var BSTIterator = function (root) {
  this.inOrder = []
  const iterateInOrder = (node) => {
    if (!node) return
    iterateInOrder(node.left)
    this.inOrder.push(node)
    iterateInOrder(node.right)
  }
  iterateInOrder(root)
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.inOrder.shift().val
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.inOrder.length > 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
