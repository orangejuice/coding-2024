Breatheh first search

```js
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  let heads = []
  for (let i = 1; i <= graphNodes; i++) if (ids[i - 1] == val) heads.push(i)

  for (let head of heads) {
    let queue = [head], levelCount = 0, visited = new Array(ids.length).fill(false)
    visited[head] = true
    while (queue.length > 0) {
      let levelSize = queue.length
      while (levelSize--) {
        let curr = queue.shift()
        if (!visited[curr] && ids[curr - 1] == val) return levelCount
        visited[curr] = true
        for (let i = 1; i <= graphFrom.length; i++) {
          if (graphFrom[i - 1] == curr && !visited[graphTo[i - 1]])
            queue.push(graphTo[i - 1])
          if (graphTo[i - 1] == curr && !visited[graphFrom[i - 1]])
            queue.push(graphFrom[i - 1])
        }
      }
      levelCount++
    }
  }
  return -1
}
```





## Mar 27, 2024 test2

```js
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  let map = new Map()
  for (let i = 0; i < graphFrom.length; i++) {
    if (!map.has(graphFrom[i])) map.set(graphFrom[i], [])
    map.get(graphFrom[i]).push(graphTo[i])
    if (!map.has(graphTo[i])) map.set(graphTo[i], [])
    map.get(graphTo[i]).push(graphFrom[i])
  }

  let nodesToInvestigate = []
  for (let i = 1; i <= ids.length; i++) {
    if (ids[i - 1] == val) nodesToInvestigate.push(i)
  }

  if (nodesToInvestigate.length < 2) return -1

  let visited = new Set(), distances = []
  for (let i = 0; i < nodesToInvestigate.length; i++) {
    let queue = [[nodesToInvestigate[i], 0]]
    visited.add(nodesToInvestigate[i])
    while (queue.length > 0) {
      let [cur, steps] = queue.shift()
      visited.add(cur)
      if (ids[cur - 1] == val && cur != nodesToInvestigate[i]) {
        distances.push(steps)
        continue
      }
      queue.push(...map.get(cur).filter(to => !visited.has(to))
        .map(node => [node, steps + 1]))
    }
  }
  return Math.min(...distances)
}
```

