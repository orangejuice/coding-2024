```js
function minimumMoves(grid, startX, startY, goalX, goalY) {
  let map = grid.map(row => [...row])

  function nextMove(x, y, visited, direct, steps) {
    visited.add(x + "-" + y)
    if (x == goalX && y == goalY) return steps
    let minimumMove = []

    if (x - 1 >= 0 && map[x - 1][y] == '.' && !visited.has((x - 1) + '-' + y)) {
      minimumMove.push(nextMove(x - 1, y, new Set(visited), 'x', direct == 'x' ? steps : steps + 1))
    }
    if (x + 1 < map.length && map[x + 1][y] == '.' && !visited.has((x + 1) + '-' + y)) {
      minimumMove.push(nextMove(x + 1, y, new Set(visited), 'x', direct == 'x' ? steps : steps + 1))
    }
    if (y - 1 >= 0 && map[x][y - 1] == '.' && !visited.has(x + '-' + (y - 1))) {
      minimumMove.push(nextMove(x, y - 1, new Set(visited), 'y', direct == 'y' ? steps : steps + 1))
    }
    if (y + 1 < map[0].length && map[x][y + 1] == '.' && !visited.has(x + '-' + (y + 1))) {
      minimumMove.push(nextMove(x, y + 1, new Set(visited), 'y', direct == 'y' ? steps : steps + 1))
    }

    return Math.min(...minimumMove)
  }

  return nextMove(startX, startY, new Set(), '', 0)
}
```

超时和运行时错误



BFS (breadth) 广度优先搜索

```js
function minimumMoves(grid, startX, startY, goalX, goalY) {
  let map = grid.map(row => [...row])
  let visited = new Set()
  let queue = [[startX, startY, '', 0]]

  while (queue.length > 0) {
    let [x, y, direct, steps] = queue.shift()
    visited.add(x + "-" + y)
    if (x == goalX && y == goalY) return steps

    if (x - 1 >= 0 && map[x - 1][y] == '.' && !visited.has((x - 1) + '-' + y)) {
      queue.push([x - 1, y, 'x', direct == 'x' ? steps : steps + 1])
    }
    if (x + 1 < map.length && map[x + 1][y] == '.' && !visited.has((x + 1) + '-' + y)) {
      queue.push([x + 1, y, 'x', direct == 'x' ? steps : steps + 1])
    }
    if (y - 1 >= 0 && map[x][y - 1] == '.' && !visited.has(x + '-' + (y - 1))) {
      queue.push([x, y - 1, 'y', direct == 'y' ? steps : steps + 1])
    }
    if (y + 1 < map[0].length && map[x][y + 1] == '.' && !visited.has(x + '-' + (y + 1))) {
      queue.push([x, y + 1, 'y', direct == 'y' ? steps : steps + 1])
    }
  }
}
```

