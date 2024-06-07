/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const record = new Set()

  const surrounded = (x, y) => {
    if (x == board.length || y == board[0].length || x == -1 || y == -1) return false
    if (board[x][y] == 'X' || record.has(`${x}-${y}`)) return true
    record.add(`${x}-${y}`)

    return surrounded(x + 1, y) && surrounded(x, y + 1) && surrounded(x - 1, y) && surrounded(x, y - 1)
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'O') {
        if (surrounded(i, j)) record.forEach(locStr => {
          const [x, y] = locStr.split('-')
          board[x][y] = 'X'
        })
        record.clear()
      }
    }
  }
}
