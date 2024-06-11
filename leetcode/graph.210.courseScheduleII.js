/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const dependsOn = Array.from({length: numCourses}, () => new Set())
  prerequisites.forEach(([a, b]) => {
    dependsOn[a].add(b)
    dependsOn[b].forEach(course => dependsOn[a].add(course))
  })
  const result = []

  while (result.length < numCourses) {
    const next = dependsOn.findIndex(courses => courses?.size == 0)
    if (next == -1) return []
    result.push(next)
    dependsOn[next] = null
    dependsOn.forEach((courses) => courses?.delete(next))
  }
  return result
}
