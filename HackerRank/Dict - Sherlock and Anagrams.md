```js
function sherlockAndAnagrams(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let cur = [...s.slice(i, j)].sort().join('')
      if (map.has(cur)) map.set(cur, map.get(cur) + 1)
      else map.set(cur, 1)
    }
  }

  return [...map.values()].reduce((acc, cur) => acc + (cur * (cur - 1)) / 2, 0)
}
```

