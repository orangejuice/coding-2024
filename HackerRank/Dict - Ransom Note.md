```js
let magazineCount = new Map()
  for (let i = 0; i < magazine.length; i++) {
    if (magazineCount.has(magazine[i])) {
      magazineCount.set(magazine[i], magazineCount.get(magazine[i] + 1))
    } else {
      magazineCount.set(magazine[i], 1)
    }
  }

  for (let i = 0; i < note.length; i++) {
    if (magazineCount.has(note[i])) {
      magazineCount.get(note[i]) > 1 ?
        magazineCount.set(magazineCount.get(note[i]) - 1)
        : magazineCount.delete(note[i])
    } else {
      console.log('No')
      return
    }
  }
  console.log('Yes')
```



## Mar 29, 2024 test2

```js
function checkMagazine(magazine, note) {
  let map = new Map()
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) map.set(magazine[i], map.get(magazine[i] + 1))
    else map.set(magazine[i], 1)
  }
  for (let i = 0; i < note.length; i++) {
    if (map.has(note[i]) && map.get(note[i]) > 0)
      map.set(note[i], map.get(note[i]) - 1)
    else {
      console.log('No')
      return
    }
  }

  console.log('Yes')
}
```

