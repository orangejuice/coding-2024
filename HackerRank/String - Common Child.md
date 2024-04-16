

version 1, not covering all case 

```javascript
function commonChild(s1, s2) {
  let s1Clean = s1.split("").filter(ch => s2.includes(ch)).join("")
  let s2Clean = s2.split("").filter(ch => s1.includes(ch)).join("")
  let max = 0

  for (let i = 0; i < s1Clean.length; i++) {
    for (let j = i + 1; j < s2Clean.length + 1; j++) {
      let str = s1Clean.substring(i, j)
      if (s2Clean.includes(str)) {
        console.log(str)
        max = Math.max(max, str.length)
      }
    }
  }
  return max
}
```



##



好吧 动态编程问题 略过

```js
```

