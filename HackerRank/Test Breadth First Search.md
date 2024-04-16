```js
function bfs(numOfNodes, numOfEdges, edges, start) {
  let edgesMap = new Map(), visited = new Set(), queue = [[start, 0]], visit = new Map()
  edges.forEach(([n1, n2]) => edgesMap.has(n1) ? edgesMap.get(n1).push(n2) : edgesMap.set(n1, [n2]))

  while (queue.length) {
    let [i, count] = queue.shift()
    visited.add(i)
    visit.set(i, count)
    edgesMap.get(i)?.forEach(n => {
      if (!visited.has(n)) {
        visited.add(n)
        queue.push([n, count + 1])
      }
    })
  }

  let result = []
  for (let i = 1; i <= numOfNodes; i++) {
    if (i == start) continue
    result.push(visit.get(i) ? visit.get(i) * 6 : -1)
  }
  return result
}
```

```js
function bfs(numOfNodes, numOfEdges, edges, start) {
  let edgesMap = new Map(), queue = [[start, 0]], visit = new Map()
  edges.forEach(([n1, n2]) => {
    edgesMap.has(n1) ? edgesMap.get(n1).add(n2) : edgesMap.set(n1, new Set([n2]))
    edgesMap.has(n2) ? edgesMap.get(n2).add(n1) : edgesMap.set(n2, new Set([n1]))
  })

  while (queue.length) {
    let [i, count] = queue.shift()
    visit.set(i, count)
    edgesMap.get(i)?.forEach(n => {
      if (!visit.has(n)) queue.push([n, count + 1])
    })
  }

  let result = []
  for (let i = 1; i <= numOfNodes; i++) {
    if (i == start) continue
    result.push(visit.has(i) ? visit.get(i) * 6 : -1)
  }
  return result
}
```

操 知道为什么了，因为当真正遍历到节点的时候才加入visited list会导致一个窗口期-----节点2被加入队列等待遍历，这个节点2被遍历之前如果又有其他节点1也有同样的相邻节点2，那么节点就会被遍历2遍。

```js
function bfs(numOfNodes, numOfEdges, edges, start) {
  let edgesMap = new Map(), queue = [[start, 0]], visit = new Map([[start, 0]])
  for (let i = 1; i <= numOfNodes; i++) edgesMap.set(i, new Set())
  edges.forEach(([n1, n2]) => { edgesMap.get(n1).add(n2); edgesMap.get(n2).add(n1) })

  while (queue.length) {
    let [i, distance] = queue.shift()
    edgesMap.get(i).forEach(neighbor => {
      if (!visit.has(neighbor)) {
        visit.set(neighbor, distance + 6)
        queue.push([neighbor, distance + 6])
      }
    })
  }

  let result = []
  for (let i = 1; i <= numOfNodes; i++) {
    if (i == start) continue
    result.push(visit.has(i) ? visit.get(i) : -1)
  }
  return result
}
```

