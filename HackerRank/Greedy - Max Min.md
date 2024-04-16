

1 10 100 101 102 102 

9 90 1 1 0

0 1 1 9 90

problematic, because it uses only diff value but forgot the fact that that the numbers to be picked must be considered 

```js
function maxMin(k, arr) {
  let diff = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 1; i++) {
    diff.push(arr[i + 1] - arr[i])
  }
  console.log(arr)
  console.log(diff)
  diff.sort((a, b) => a - b)
  console.log(diff)
  return diff.slice(0, k ).reduce((prev, cur) => prev + cur, 0)
}

```

```js
function maxMin(k, arr) {
  let min = Number.POSITIVE_INFINITY
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - (k - 1); i++) {
    min = Math.min(min, arr[i + k - 1] - arr[i])
  }
  return min
}
```

## Mae 25, 2024 test 2

```js
function maxMin(k, arr) {
  arr.sort((a, b) => a - b)
  let min = Number.POSITIVE_INFINITY
  for (let i = 0; i < arr.length - k + 1; i++) {
    min = Math.min(min, arr[i + k - 1] - arr[i])
  }
  return min
}
```

