/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const paths = new Map()
  equations.forEach(([x, y], index) => {
    if (!paths.has(x)) paths.set(x, [])
    if (!paths.has(y)) paths.set(y, [])
    paths.get(x).push([y, values[index]])
    paths.get(y).push([x, 1 / values[index]])
  })

  const dfs = (current, target, product, visited) => {
    if (!paths.get(current) || visited.has(current)) return -1
    if (current == target) return product

    visited.add(current)

    for (const [neighbor, value] of paths.get(current)) {
      const result = dfs(neighbor, target, product * value, visited)
      if (result != -1) return result
    }
    return -1
  }

  return queries.map(([x, y]) => dfs(x, y, 1, new Set()))
}
