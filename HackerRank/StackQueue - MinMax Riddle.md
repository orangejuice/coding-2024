version 1

```js
function riddle(arr) {
  let result = []
  for (let win = 1; win <= arr.length; win++) {
    let max = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length - win + 1; i++) {
      let min = Math.min(...arr.slice(i, i + win))
      max = Math.max(max, min)
    }
    result.push(max)
  }
  return result
}
```

version 2 不想弄了







## mar 26, 2024 test2

```js
function riddle(arr) {
  let result = []
  for (let win = 1; win <= arr.length; win++) {
    let mins = []
    for (let i = 0; i < arr.length + 1 - win; i++) {
      mins.push(Math.min(...arr.slice(i, i + win)))
    }
    result.push(Math.max(...mins))
  }
  return result
}
```

