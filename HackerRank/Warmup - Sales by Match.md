```js
const colorNum = new Map()
  for (let i = 0; i < n; i++) {
    if (colorNum.has(ar[i])) {
      colorNum.set(ar[i], colorNum.get(ar[i]) + 1)
    } else {
      colorNum.set(ar[i], 1)
    }
  }

  return Array.from(colorNum.values())
    .reduce((prev, cur) => prev + (cur - cur % 2) / 2, 0)
```



## Mar 29, 2024 test2

```js
function sockMerchant(n, ar) {
  let map = new Set(), count = 0
  for (let i = 0; i < n; i++) {
    if (map.has(ar[i])) {
      map.delete(ar[i])
      count++
    } else {
      map.add(ar[i])
    }
  }
  return count
}
```

