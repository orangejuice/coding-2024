version 1

```javascript
function substrCount(n, s) {
  let count = 0
  for (let i = 0; i < n; i++) {
    loop: for (let j = i + 1; j < n + 1; j++) {
      let substr = s.slice(i, j)
      if (substr.length % 2 == 1)
        substr = substr.split("")
        substr[parseInt(substr.length / 2)] = substr.slice(1)

      if (!((new Set(substr)).length == 1)) continue
      // } else {
      // substr = 
      // if (substr.length) {
      //   (new Set(substr)).length
      // }
      // const ch = substr[0]
      // for (let k = 0; k < substr.length; k++) {
      //   if (substr.length % 2 == 1 && k == parseInt(substr.length / 2)) continue
      //   if (substr[k] == ch) continue
      //   else continue loop
      // }
      // }
      count += 1
    }
  }
  return count
}
```



time efficiency does not pass

```javascript
function substrCount(n, s) {
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      let substr = s.slice(i, j)
      if (substr.length > 2 && substr.length % 2 == 1)
        substr = substr.slice(0, parseInt(substr.length / 2)) +
          substr.slice(parseInt(substr.length / 2) + 1)
      if ((new Set(substr.split(""))).size == 1) count += 1
    }
  }
  return count
}
```



time efficiency does not pass

```java
function substrCount(n, s) {
  let count = 0, strArr = s.split("")
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      let substr = strArr.slice(i, j)
      if (substr.length > 2 && substr.length % 2 == 1) {
        substr[parseInt(substr.length / 2)] = substr.pop()
      }
      if ((new Set(substr)).size == 1) count += 1
    }
  }
  return count
}
```



all pass final version

```javascript
function substrCount(n, s) {
  let count = 0, strArr = s.split("")
  for (let i = 0; i < n; i++) {
    count++
    let goLeft = i - 1, goRight = i + 1, value = strArr[i + 1]
    while (goLeft >= 0 && goRight < n) {
      if (strArr[goLeft--] == value && strArr[goRight++] == value)
        count++
      else break
    }
    goLeft = i, goRight = i + 1
    while (goLeft >= 0 && goRight < n) {
      if (strArr[goLeft--] == value && strArr[goRight++] == value)
        count++
      else break
    }
  }
  return count
}
```







## test 2 - 2024.3.25

先一个一个检查，再2个2个，再...

```js
function substrCount(n, s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (i + 1 == j) {
        count++
        continue
      }
      let subStr = s.slice(i, j), same = true
      if (subStr.length % 2 == 1) subStr = subStr.slice(0, parseInt(subStr.length / 2)) + subStr.slice(parseInt(subStr.length / 2) + 1)
      
      for (let k = 1; same && k < subStr.length; k++) {
        if (subStr[k] != subStr[k - 1]) same = false
      }
      if(same) count++
    }
  }
  return count
}
```

time efficiency low, so?

x, xx, xxx, xxxx, ... / xyx, xxyxx, xxxyxxx

```js
function substrCount(n, s) {
  let unique = new Set()

  for (let i = 0; i < s.length; i++) {
    let j = i
    while (s[j] == s[i]) {
      unique.add(i + '-' + j)
      j++
    }
    let k = 1
    while (i - k >= 0 && i + k <= s.length && s[i + k] == s[i - k]
      && (k == 1 || s[i + k] == s[i + k - 1])) {
      unique.add((i - k) + '-' + (i + k))
      k++
    }
  }
  return unique.size
}
```

