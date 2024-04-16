```js
function freqQuery(queries) {
  let map = new Map()
  const result = []
  for (let [op, num] of queries) {
    switch (op) {
      case 1: { map.set(num, map.has(num) ? map.get(num) + 1 : 1) } break
      case 2: {
        if (map.has(num)) {
          if (map.get(num) > 1) map.set(num, map.get(num) - 1)
          else map.delete(num)
        }
      } break
      case 3: { result.push(Array.from(map.values()).includes(num) ? 1 : 0) }
    }
  }
  return result
}
```



## Mar 29, 2024 test2

```js
function freqQuery(queries) {
  let map = new Map(), result = []
  for (let [op, val] of queries) {
    switch (op) {
      case 1: {
        map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1)
        break
      }
      case 2: {
        if (map.has(val) && map.get(val) > 0)
          map.set(val, map.get(val) - 1)
        break
      }
      case 3: {
        if ([...map.values()].includes(val))
          result.push(1)
        else
          result.push(0)
      }
    }
  }
  return result
}
```

