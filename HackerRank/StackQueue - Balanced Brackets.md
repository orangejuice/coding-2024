```js
function isBalanced(s) {
  let stack = [], brackets = { "}": "{", "]": "[", ")": "(" }
  for (let str of s.split("")) {
    if (Object.values(brackets).includes(str)) stack.push(str)
    else if (stack[stack.length - 1] == brackets[str]) {
      stack.pop()
    } else {
      return "NO"
    }
  }
  return stack.length == 0 ? "YES" : "NO"
}
```







## Mar 26, 2024 test2

```js
function isBalanced(s) {
  let queue = [], dict = { '}': '{', ']': '[', ')': '(' }

  for (let ch of s) {
    if (Object.values(dict).includes(ch)) {
      queue.push(ch)
    } else {
      if (dict[ch] == queue[queue.length - 1]) queue.pop()
      else return "NO"
    }
  }

  return queue.length == 0 ? "YES" : "NO"
}
```

