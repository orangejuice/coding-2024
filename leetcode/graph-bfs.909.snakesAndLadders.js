/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let n = board.length

  // convert number index to 0~n-1 x,y on board
  const coords = (cur) => {
    const row = Math.floor((cur - 1) / n) + 1
    const x = n - row
    const y = row % 2 == 1 ? ((cur - 1) % n) : (n - 1 - (cur - 1) % n)
    return [x, y]
  }

  let queue = [[1, 0]], visited = Array(n * n).fill(false)

  while (queue.length) {
    const [cur, steps] = queue.shift()

    if (cur == n * n) return steps

    for (let i = 1; i <= 6 && cur + i <= n * n; i++) {
      const [x, y] = coords(cur + i)
      const next = board[x][y] == -1 ? cur + i : board[x][y]
      if (!visited[next]) {
        visited[next] = true
        queue.push([next, steps + 1])
      }
    }
  }
  return -1
};
