/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let width = board[0].length, height = board.length
  let neighbor = [...new Array(height)].map(() => new Array(width))
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let neighbors = [
        board[i - 1]?.[j - 1], board[i - 1]?.[j], board[i - 1]?.[j + 1],
        board[i]?.[j - 1], board[i]?.[j + 1],
        board[i + 1]?.[j - 1], board[i + 1]?.[j], board[i + 1]?.[j + 1]
      ].filter(Boolean).length
      neighbor[i][j] = neighbors
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (neighbor[i][j] < 2 || neighbor[i][j] > 3) board[i][j] = 0
      else if (neighbor[i][j] == 3) board[i][j] = 1
    }
  }
};