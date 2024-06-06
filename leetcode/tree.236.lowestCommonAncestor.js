/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root

  const lcaLeft = lowestCommonAncestor(root.left, p, q)
  const lcaRight = lowestCommonAncestor(root.right, p, q)

  if (lcaLeft && lcaRight) return root
  else if (lcaLeft) return lcaLeft
  else if (lcaRight) return lcaRight
}