



version 1

```js
function triplets(a, b, c) {
  a.sort((x, y) => x - y)
  b.sort((x, y) => x - y)
  c.sort((x, y) => x - y)
  let unique = new Set()
  for (let j = 0; j < b.length; j++) {
    let q = b[j]
    for (let i = 0; a[i] <= q && i < a.length; i++) {
      for (let k = 0; c[k] <= q && k < c.length; k++) {
        unique.add([a[i], b[j], c[k]].join())
      }
    }
  }
  return unique.size
}
```



version 2 improved performance 

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)]
  let cleanB = [...new Set(b)]
  let cleanC = [...new Set(c)]
  let count = 0

  for (let i = 0; i < cleanB.length; i++) {
    count += cleanA.filter(num => num <= cleanB[i]).length
      * cleanC.filter(num => num <= cleanB[i]).length
  }
  return count
}
```



version 3 one test not pass

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)].sort((x, y) => x - y)
  let cleanB = [...new Set(b)]
  let cleanC = [...new Set(c)].sort((x, y) => x - y)
  let count = 0

  for (let i = 0; i < cleanB.length; i++) {
    let numOfP = 0, numOfQ = 0
    for (let j = 0; cleanA[j] <= cleanB[i] && j < cleanA.length; j++)
      numOfP++
    if (numOfP == 0) continue
    for (let j = 0; cleanC[j] <= cleanB[i] && j < cleanC.length; j++)
      numOfQ++
    if (numOfQ == 0) continue
    count += numOfP * numOfQ
  }
  return count
}
```

version 4 still one not pass

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)].sort((x, y) => x - y)
  let cleanB = [...new Set(b)]
  let cleanC = [...new Set(c)].sort((x, y) => x - y)
  let count = 0

  for (let i = 0; i < cleanB.length; i++) {
    let numOfP = 0, numOfQ = 0
    while (cleanA[numOfP] <= cleanB[i]) numOfP++
    if (numOfP == 0) continue
    while (cleanC[numOfQ] <= cleanB[i]) numOfQ++
    if (numOfQ == 0) continue
    count += numOfP * numOfQ
  }
  return count
}
```

version 5

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)].sort((x, y) => x - y)
  let cleanB = [...new Set(b)]
  let cleanC = [...new Set(c)].sort((x, y) => x - y)
  let count = 0

  for (let i = 0; i < cleanB.length; i++) {
    let numOfP = 0, numOfQ = 0
    while (cleanA[numOfP] <= cleanB[i]) numOfP++
    while (cleanC[numOfQ] <= cleanB[i]) numOfQ++
    count += numOfP * numOfQ
  }
  return count
}
```

version 6

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)].sort((x, y) => x - y)
  let cleanB = [...new Set(b)]
  let cleanC = [...new Set(c)].sort((x, y) => x - y)
  let count = 0

  for (let i = 0; i < cleanB.length; i++) {
    let numOfP = 0, numOfQ = 0
    for (let j = cleanA.length; j > 0; j--) {
      if (cleanA[j - 1] <= cleanB[i]) {
        numOfP = j
        break
      }
    }
    for (let j = cleanC.length; j > 0; j--) {
      if (cleanC[j - 1] <= cleanB[i]) {
        numOfQ = j
        break
      }
    }
    count += numOfP * numOfQ
  }
  return count
}
```





## Mar 26, 2024 test2

version 1 not efficient enough

```js
  let uniqueAB = new Map(), unique = new Set()

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length && a[j] <= b[i]; j++) {
      uniqueAB.set(a[j] + '-' + b[i], b[i])
    }
  }
  
  for (let i = 0; i < c.length; i++) {
    uniqueAB.forEach((v, k) => {
      if (c[i] <= v) unique.add(k + '-' + c[i])
    })
  }
  
  return unique.size
```

version 2  all pass

```js
function triplets(a, b, c) {
  let cleanA = [...new Set(a)].sort((a, b) => a - b)
  let cleanB = [...new Set(b)].sort((a, b) => a - b)
  let cleanC = [...new Set(c)].sort((a, b) => a - b)

  let count = 0
  for (let i = 0; i < cleanB.length; i++) {
    let howManyA = cleanA.findIndex(v => v > cleanB[i])
    let howManyC = cleanC.findIndex(v => v > cleanB[i])
    if (howManyA == -1) howManyA = cleanA.length
    if (howManyC == -1) howManyC = cleanC.length
    
    count += howManyA * howManyC
  }
  return count
}
```

