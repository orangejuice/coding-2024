```js
function repeatedString(s, n) {
  let aOfS = 0, aOfRemind = 0, remind = n % s.length
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a') {
      aOfS += 1
      if (i < remind) aOfRemind += 1
    }
  }
  return aOfS * (n - remind) / s.length + aOfRemind
}
```



## Mar 29, 2024  test2

```js
function repeatedString(s, n) {
  let multi = Math.floor(n / s.length), balance = n % s.length

  let fullOccur = [...s].filter(ch => ch == 'a').length
  let leftOccur = [...s.slice(0, balance)].filter(ch => ch == 'a').length

  return multi * fullOccur + leftOccur
}

```

