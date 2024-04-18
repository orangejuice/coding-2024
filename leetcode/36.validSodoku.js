/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = board[i].filter(n => n != '.')
    // console.log(new Set(row).size, row.length)
    if (new Set(row).size != row.length) return false
  }

  let cols = [...new Array(9)].map(() => [])
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      if (board[i][j] != '.') cols[j].push(board[i][j])
    }
    // console.log(new Set(cols[j]).size, cols[j].length)
    if (new Set(cols[j]).size != cols[j].length) return false
  }

  for (let i = 1; i < 9; i += 3) {
    for (let j = 1; j < 9; j += 3) {
      let grid = [
        board[i - 1][j - 1], board[i - 1][j], board[i - 1][j + 1],
        board[i][j - 1], board[i][j], board[i][j + 1],
        board[i + 1][j - 1], board[i + 1][j], board[i + 1][j + 1],
      ].filter(n => n != '.')
      // console.log(new Set(grid).size, grid.length)
      if (new Set(grid).size != grid.length) return false
    }
  }
  return true
};