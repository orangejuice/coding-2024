```js
function pairs(k, arr) {
  let unique = new Set(arr), count = 0
  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i] + k)) count += 1
  }
  return count
}
```



## Mar 26, 2024 test2

```js
function pairs(k, arr) {
  let count = 0, unique = new Set(arr)
  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i] + k)) count++
  }
  return count
}
```

