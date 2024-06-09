/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map()
  for (const [a, b] of prerequisites) {
    if (!graph.has(a)) graph.set(a, [])
    graph.get(a).push(b)
  }

  const studied = new Set()

  const dfs = (no, visited) => {
    if (studied.has(no)) return true
    if (visited.has(no)) return false

    if (graph.has(no)) {
      visited.add(no)
      for (let neighbor of graph.get(no)) {
        if (dfs(neighbor, visited) == false) return false
      }
    }
    studied.add(no)
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i, new Set()) == false) return false
  }
  return true
};
