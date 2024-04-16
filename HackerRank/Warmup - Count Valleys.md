```js
// stack 
  let way = [], result = 0

  for (let i = 0; i < steps; i++) {
    if (way.length == 0) {
      way.push(path[i])
    } else if (path[i] != way[way.length - 1]) {
      way.pop()
      if (path[i] == 'U' && way.length == 0) result++
    } else {
      way.push(path[i])
    }

    // U U -> push
    // U D -> pop
    // D U -> pop if size=0 valley+1
    // D D -> push
  }

  return result
```



## Mar 29, 2024 test2

```js
function countingValleys(steps, path) {
  let rec = 0, count = 0
  for (let i = 0; i < steps; i++) {
    rec += path[i] == 'U' ? 1 : -1
    if (rec == 0 && path[i] == 'U') count++
  }
  return count
}
```

