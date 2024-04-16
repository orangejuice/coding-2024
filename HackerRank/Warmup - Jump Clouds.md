```js
let i = 0, jump = 0
  while (i < c.length - 1) {
    console.log(c[i+2])
    if (i + 2 < c.length && c[i + 2] == 0) i += 2
    else i += 1
    jump++
  }
  return jump
```



## Mar 29, 2024 test2

```js
function jumpingOnClouds(c) {
  let count = 0
  for (let i = 0; i < c.length;) {
    if (i + 2 < c.length && c[i + 2] == 0) i += 2
    else i += 1
    if (i != c.length - 1) count++
  }
  return count
}
```

