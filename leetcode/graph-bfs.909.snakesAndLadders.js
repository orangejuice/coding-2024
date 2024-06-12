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

  let queue = [[1, 0]]

  while (queue.length) {
    const [cur, steps] = queue.shift()

    console.log(cur, steps)
    if (cur == n * n) return steps

    for (let i = 6; i >= 1 && cur + i <= n * n; i--) {
      const [x, y] = coords(cur + i), next = board[x][y]
      if (next == -1) queue.push([cur + i, steps + 1])
      else if (next > cur) queue.push([next, steps + 1])      // wrong answer
    }                                                         // ok we have to consider the scenario that next < cur
  }
  return -1
}
