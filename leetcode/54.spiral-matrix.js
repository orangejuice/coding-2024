/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let width = matrix[0].length, height = matrix.length
  let cur = [0, 0], visited = new Set(), going = "right" // up, right, down, left
  let result = []
  while (true) {
    let exit = visited.has(cur[0] + "#" + cur[1])
    if (!exit) {
      visited.add(cur[0] + "#" + cur[1])
      result.push(matrix[cur[0]][cur[1]])
    }
    if (going == "right") {
      if (cur[1] + 1 < width && !visited.has(cur[0] + "#" + (cur[1] + 1))) {
        cur = [cur[0], cur[1] + 1]
        continue
      } else going = "down"
    }
    if (going == "down") {
      if (cur[0] + 1 < height && !visited.has((cur[0] + 1) + "#" + cur[1])) {
        cur = [cur[0] + 1, cur[1]]
        continue
      } else going = "left"
    }
    if (going == "left") {
      if (cur[1] - 1 >= 0 && !visited.has(cur[0] + "#" + (cur[1] - 1))) {
        cur = [cur[0], cur[1] - 1]
        continue
      } else going = "up"
    }
    if (going == "up") {
      if (cur[0] - 1 >= 0 && !visited.has((cur[0] - 1) + "#" + cur[1])) {
        cur = [cur[0] - 1, cur[1]]
        continue
      } else going = "right"
    }
    if (exit) return result
  }
}
