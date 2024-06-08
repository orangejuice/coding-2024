/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node

  let visited = new Map()

  const dfsCopy = (node) => {                           // copy recursively
    if (visited.has(node)) return visited.get(node)     // return copied node

    let copy = new Node(node.val)
    visited.set(node, copy)

    node.neighbors.forEach(neighbor => {
      copy.neighbors.push(dfsCopy(neighbor))
    })

    return copy
  }

  return dfsCopy(node)
};
