为a和b分别建设hashmap，然后从a到b逐个遍历，多了的话取差值，没有的话全加上

```js
function makeAnagram(a, b) {
  let dictA = new Map(), dictB = new Map()
  let toBeDeleted = 0

  for (let ch of a) {
    if (dictA.has(ch)) dictA.set(ch, dictA.get(ch) + 1)
    else dictA.set(ch, 1)
  }
  for (let ch of b) {
    if (dictB.has(ch)) dictB.set(ch, dictB.get(ch) + 1)
    else dictB.set(ch, 1)
  }

  dictA.forEach((v, k) => {
    if (!dictB.has(k)) toBeDeleted += v
    else if (dictB.get(k) < v) toBeDeleted += v - dictB.get(k)
  })
  
  dictB.forEach((v, k) => {
    if (!dictA.has(k)) toBeDeleted += v
    else if (dictA.get(k) < v) toBeDeleted += v - dictA.get(k)
  })
  return toBeDeleted
}
```





遍历string的字符：

for of

[...string].forEach((each, index, array)=>...)

string.split("") 不支持utf-16