/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({length: numCourses}, () => [])
  prerequisites.forEach(([a, b]) => graph[a].push(b))
  const result = new Set()

  const dfs = (course, visited) => {
    if (result.has(course)) return true
    if (visited.has(course)) return false
    visited.add(course)

    for (const pre of graph[course]) {
      if (!dfs(pre, visited)) return false
    }
    result.add(course)
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, new Set())) return []
  }

  return [...result]
}

/*
 *     if (result.has(course)) return true       -> firstly, check if the course has already been studied
 *     if (visited.has(course)) return false     -> if not studied, and visited has it already, that means a cycle
 */
