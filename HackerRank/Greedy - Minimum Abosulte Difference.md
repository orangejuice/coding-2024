```js
function minimumAbsoluteDifference(arr) {
	let min = Number.POSITIVE_INFINITY
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(min, arr[i + 1] - arr[i])
  }
  return min
}
```

## Mar 25, 2024 test2

```js
function minimumAbsoluteDifference(arr) {
  let min = Number.POSITIVE_INFINITY
  let sorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length - 1; i++) {
    let diff = sorted[i + 1] - arr[i]
    if (diff < min) min = diff
  }
  return min
}
```

