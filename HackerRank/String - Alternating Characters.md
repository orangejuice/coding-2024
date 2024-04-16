```js
function alternatingCharacters(s) {
  let map = new Map([['A', 0], ['B', 0]])

  for (let ch of s) {
    if (ch == 'A') map.set('A', map.get('A') + 1)
    else map.set('B', map.get('B') + 1)
  }
  
  console.log(map)

  return map.get('A') ==0 && map.get('B')? 1 
  : map.get('B'==0 && map.get('A'))? 1
  : Math.abs(map.get('A') - map.get('B'))
}
```

无语 犯大错 题目是不允许换位置的 所以只需要检查对比

```js
function alternatingCharacters(s) {
  let toBeDeleted = 0
  if (s.length == 1) return 0
  for (let i = 1, last = 0; i < s.length; i++) {
    if (s[i] == s[last]) toBeDeleted += 1
    else last = i
  }
  return toBeDeleted
}
```

