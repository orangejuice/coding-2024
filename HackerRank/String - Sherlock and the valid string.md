建设hashmap, 然后如果所有的值相等或有一个的值大于其他值  有效

```js
function isValid(s) {
  let map = new Map()

  for (let ch of s) {
    if (map.has(ch)) map.set(ch, map.get(ch) + 1)
    else map.set(ch, 1)
  }

  let values = Array.from(map.values()).sort((a, b) => a - b)
  let removedFlag = false

  for (let i = 1; i < values.length; i++) {
    if (values[i] - values[i - 1] > 1)
      return "NO"
    if (values[i] > values[i - 1]) {
      if (removedFlag) return "NO"
      else {
        removedFlag = true
        values[i] -= 1
      }
    }
  }
  return "YES"
}
```

但是这样考虑的边缘情况还是不全

得到最大出现频率的次数后，如果有两个或两个以上不同的 NO 

没有不同的 YES

如果有两个不同频率的次数，两种情况 1.频率相等 2.频率不相等

比如{a:4, b:2, c:2}中，4次出现1次，2次出现2次。次数出现次数少的那个字母只能出现1次，

如果次数相等，{a:4, b:2}中，4次出现1次，2次出现1次，那么次数多的那个只能多1次

```js
function isValid(s) {
  let map = new Map()

  for (let ch of s) {
    if (map.has(ch)) map.set(ch, map.get(ch) + 1)
    else map.set(ch, 1)
  }

  let count = new Map()
  let values = Array.from(map.values()).sort((a, b) => a - b)
  values.forEach((v) => {
    if (count.has(v)) count.set(v, count.get(v) + 1)
    else count.set(v, 1)
  })
  let maxFreq = Array.from(count.entries()).find(([k, v]) => v == Math.max(...count.values()))[0]

  if (Array.from(count.entries()).length > 2) return "NO"
  if (Array.from(count.entries()).length == 1) return "YES"
  if (Array.from(count.values())[0] != Array.from(count.values())[1]) {
    if (Array.from(count.entries()).filter(([k, v]) =>
      k != maxFreq && v == 1 && (k == 1 || k == maxFreq + 1)).length) return "YES"
    return "NO"
  } else {
    if ([...count.values()][0] > 1) return "NO"
    if (Math.abs([...count.keys()][0] - [...count.keys()][1]) == 1)
      return "YES"
    else
      return "NO"
  }
}
```

