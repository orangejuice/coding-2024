version 1

```js
function countTriplets(arr, r) {
  const possibles = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] == arr[i] / r) possibles.push([arr[j], arr[i]])
    }
  }

  let count = 0
  for (let num of arr) {
    count += possibles.filter(possible => possible[possible.length - 1] == num / r).length
  }

  return count
}
```

version 2 fix bug, not efficent 

```js
function countTriplets(arr, r) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] == arr[i] / r) {
        for (let k = i + 1; k < arr.length; k++) {
          if (arr[k] / r == arr[i]) count += 1
        }
      }
    }
  }

  return count
}
```

updated later - v2.1 - wrong

```js
function countTriplets(arr, r) {
  let count = 0

  if (r == 1) {
    for (let i = 1; i < arr.length - 1; i++) count += i * (arr.length - i - 1)
  } else {
    for (let i = 0; i < arr.length; i++) {
      let numCount = new Map()
      for (let [index, num] of arr.entries()) {
        if (num == 1 || num % r == 0) {
          if ((index < i && num < arr[i]) || (index > i && num > arr[i]))
            numCount.set(num, (numCount.get(num) || 0) + 1)
        }
      }
      let lastNumCount = numCount.get(parseInt(arr[i] / r))
      let nextNumCount = numCount.get(arr[i] * r)
      count += (lastNumCount || 0) * (nextNumCount || 0)
    }
  }

  return count
}
```

v2.2 does not pass 4,5,7,9

```js
function countTriplets(arr, r) {
  let count = 0

  let numBeforeIndexCount = new Map() //  {index: {num: count}}
  let numAfterIndexCount = new Map() //  {index: {num: count}}
  let numCount = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!numBeforeIndexCount.has(i)) numBeforeIndexCount.set(i, new Map())
    numBeforeIndexCount.set(i, new Map(numCount))
    // if (arr[i] == 1 || arr[i] % r == 0)
      numCount.set(arr[i], (numCount.get(arr[i]) || 0) + 1)
  }
  numCount = new Map()
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!numAfterIndexCount.has(i)) numAfterIndexCount.set(i, new Map())
    numAfterIndexCount.set(i, new Map(numCount))
    // if (arr[i] == 1 || arr[i] % r == 0)
      numCount.set(arr[i], (numCount.get(arr[i]) || 0) + 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % r != 0) continue
    let lastNumCount = numBeforeIndexCount.get(i).get(arr[i] / r)
    let nextNumCount = numAfterIndexCount.get(i).get(arr[i] * r)
    count += (lastNumCount || 0) * (nextNumCount || 0)
  }
  return count
}
```

v2.3 does not pass 4,5,9

```js
function countTriplets(arr, r) {
  let count = 0, unique = new Set(arr)

  let numCountBeforeIndex = new Map() //  {index: {num: count}}
  let numCountAfterIndex = new Map() //  {index: {num: count}}
  let numCountBefore = new Map(), numCountAfter = new Map()
  for (let i = 0; i < arr.length; i++) {
    numCountBeforeIndex.set(i, new Map(numCountBefore))
    if (unique.has(arr[i] * r) && unique.has(arr[i] * r * r))
      numCountBefore.set(arr[i], (numCountBefore.get(arr[i]) || 0) + 1)

    numCountAfterIndex.set(arr.length - i - 1, new Map(numCountAfter))
    if (arr[arr.length - i - 1] == 1 || arr[arr.length - i - 1] % r == 0)
      numCountAfter.set(arr[arr.length - i - 1], (numCountAfter.get(arr[arr.length - i - 1]) || 0) + 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % r != 0) continue
    let lastNumCount = numCountBeforeIndex.get(i).get(arr[i] / r)
    let nextNumCount = numCountAfterIndex.get(i).get(arr[i] * r)
    count += (lastNumCount || 0) * (nextNumCount || 0)
  }
  return count
}
```

v2.4 Final version pass all tests

```js
function countTriplets(arr, r) {
  let count = 0, unique = new Set(arr)

  let numCountBeforeIndex = new Map() //  {index: {num: count}}
  let numCountAfterIndex = new Map() //  {index: {num: count}}
  let numCountBefore = new Map(), numCountAfter = new Map()
  for (let i = 0; i < arr.length; i++) {
    numCountBeforeIndex.set(i, new Map(numCountBefore))
    if (unique.has(arr[i] * r) && unique.has(arr[i] * r * r))
      numCountBefore.set(arr[i], (numCountBefore.get(arr[i]) || 0) + 1)

    let backwardCursor = arr.length - i - 1
    numCountAfterIndex.set(backwardCursor, new Map(numCountAfter))
    if (unique.has(arr[backwardCursor] / r) && unique.has(arr[backwardCursor] / r / r))
      numCountAfter.set(arr[backwardCursor], (numCountAfter.get(arr[backwardCursor]) || 0) + 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % r != 0) continue
    let lastNumCount = numCountBeforeIndex.get(i).get(arr[i] / r)
    let nextNumCount = numCountAfterIndex.get(i).get(arr[i] * r)
    count += (lastNumCount || 0) * (nextNumCount || 0)
  }
  return count
}
```



v3

```js
version 3, improve performance, but did not consider order and duplicate 
function countTriplets(arr, r) {
  let sum = 0
  let map = new Map()
  for (let num of arr) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }

  for (let num of map.keys()) {
    if (map.has(num / r) && map.has(num * r)) {
      sum += map.get(num) * map.get(num / r) * map.get(num * r)
    }
  }

  return sum
}
version 4 
function countTriplets(arr, r) {
  let sum = 0
  let map = new Map()
  for (let num of arr) {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }

  for (let num of map.keys()) {
    if (map.has(num / r) && map.has(num * r)) {
      sum += map.get(num) * map.get(num / r) * map.get(num * r)
    }
  }

  return sum
}
version 5
function countTriplets(arr, r) {
  let sum = 0

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] == arr[j] * r && arr[i] * r == arr[j]) sum += 1
      }
    }
  }

  return sum
}
```





## Mar 29, 2024 test2

```js
function countTriplets(arr, r) {
  let map = new Map(), count = 0
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.get(arr[i]).push(i)
    else map.set(arr[i], [i])
  }
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    if (map.has(cur / r) && map.has(cur * r)) {
      count += map.get(cur / r).filter(idx => idx < i).length
        * map.get(cur * r).filter(idx => idx > i).length
    }
  }
  return count
}
```

fails Test Case 3, v2 

```js
function countTriplets(arr, r) {
  let map = new Map(), count = 0
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.get(arr[i]).push(i)
    else map.set(arr[i], [i])
  }
  for (let i = 1; i < arr.length - 1; i++) {
    let cur = arr[i]
    if (map.has(cur / r) && map.has(cur * r)) {
      let leftIndex = map.get(cur / r).findIndex(idx => idx > i)
      let rightIndex = map.get(cur * r).findIndex(idx => idx > i)
      let howManyLeft = leftIndex == -1 ? map.get(cur / r).length : leftIndex
      let howManyRight = rightIndex == -1 ? 0 : map.get(cur * r).length - rightIndex
      count += (r == 1 ? howManyLeft - 1 : howManyLeft) * howManyRight
    }
  }
  return count
}
```

