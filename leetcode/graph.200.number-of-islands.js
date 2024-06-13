/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false))

  const iterate = (x, y) => {
    if (visited[x][y] || grid[x][y] == 0) return
    else visited[x][y] = true
    if (x + 1 < grid.length) iterate(x + 1, y)
    if (y + 1 < grid[0].length) iterate(x, y + 1)
    if (x - 1 >= 0) iterate(x - 1, y)
    if (y - 1 >= 0) iterate(x, y - 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        count++
        iterate(i, j)
      }
    }
  }
  return count
}
