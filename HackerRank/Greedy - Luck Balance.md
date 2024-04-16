

```javascript

function luckBalance(k, contests) {
  // [0]: luck, [1]: importance
  let sum = 0
  contests.sort((c1, c2) => {
    if (c1[1] != c2[1]) return c2[1] - c1[1]
    return c2[0] - c1[0]
  })

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] == 1) {
      if (i < k) sum += contests[i][0]
      else sum -= contests[i][0]
    } else {
      sum += contests[i][0]
    }
  }
  return sum
}
```

## mar 25, 2024 test2

```js
function luckBalance(k, contests) {
  let [importantOnes, notImportantOnes] = contests.reduce((acc, cur) => {
    if (cur[1] == 1) acc[0].push(cur[0])
    else acc[1].push(cur[0])
    return acc
  }, [[], []])

  let result = notImportantOnes.reduce((acc, cur) => acc + cur, 0)

	if (k >= importantOnes.length)
    result += importantOnes.reduce((acc, cur) => acc + cur, 0)
  else {
    importantOnes.sort((a, b) => a - b)
    for (let i = 0; i < importantOnes.length - k; i++)
      result -= importantOnes[i]

    for (let i = importantOnes.length - k; i < importantOnes.length; i++)
      result += importantOnes[i]

    return result
  }
}
```

以上答案存在错误 为什么啊？搞不懂

```js
function luckBalance(k, contests) {
  let [importantOnes, notImportantOnes] = contests.reduce((acc, cur) => {
    if (cur[1] == 1) acc[0].push(cur[0])
    else acc[1].push(cur[0])
    return acc
  }, [[], []])

  let result = notImportantOnes.reduce((acc, cur) => acc + cur, 0)
  importantOnes.sort((a, b) => b - a)
  
  for (let i = 0; i < importantOnes.length; i++) {
    if (i < k) result += importantOnes[i]
    else result -= importantOnes[i]
  }

  return result
}
```

