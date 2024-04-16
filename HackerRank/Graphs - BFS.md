### process data

```js
function processData(input) {
  let lines = input.split('\n')
  let lineIdx = 0

  for (let i = 0; i < parseInt(lines[0]); i++) {
    let [numOfNodes, numOfEdges] = lines[++lineIdx].split(' ')
    let edges = lines.slice(++lineIdx, lineIdx + parseInt(numOfEdges)).map(l => l.split(' ')).reduce((acc, [n1, n2]) => {
      if (!acc?.[n1]) acc[n1] = []; acc[n1].push(n2)
      if (!acc?.[n2]) acc[n2] = []; acc[n2].push(n1)
      return acc
    }, {})
    lineIdx += parseInt(numOfEdges)
    calculateDistance(parseInt(numOfNodes), edges, lines[lineIdx])
  }
}
```

v1

```js


function calculateDistance(nodes, edges, start) {
  let distances = []

  loop: for (let i = 1; i <= nodes; i++) {
    if (i.toString() == start) continue
    let queue = [[start, 0]]
    let visited = new Set()

    while (queue.length > 0) {
      let [cur, steps] = queue.shift()
      visited.add(cur)
      if (cur !== start) steps += 6
      if (cur == i.toString()) {
        distances.push(steps)
        continue loop
      }
      queue.push(...edges[cur].filter(to => !visited.has(to))
        .map(to => [to, steps]))
    }

    distances.push(-1)
  }
  console.log(distances.join(' '))
}
```

v2

```js
function calculateDistance(nodes, edges, start) {
  let queue = [[start, 0]]
  let visited = new Map()

  while (queue.length > 0) {
    let [cur, steps] = queue.shift()
    if (cur !== start) steps += 6
    visited.set(cur, steps)

    queue.push(...edges[cur].filter(to => !visited.has(to))
      .map(to => [to, steps]))
  }

  let distances = []
  for (let i = 1; i <= nodes; i++) {
    if (i.toString() !== start) {
      if (visited.has(i.toString()))
        distances.push(visited.get(i.toString()))
      else
        distances.push(-1)
    }
  }
  console.log(distances.join(' '))
}
```

