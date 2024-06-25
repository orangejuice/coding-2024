/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0

  const traverse = (x, y) => {
    if (x > -1 && x < grid.length && y > -1 && y < grid[0].length && grid[x][y] == 1) {
      grid[x][y] = 2
      traverse(x + 1, y)
      traverse(x - 1, y)
      traverse(x, y + 1)
      traverse(x, y - 1)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        count++
        traverse(i, j)
      }
    }
  }
  return count
};
