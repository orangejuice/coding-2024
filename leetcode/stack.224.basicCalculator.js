/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [], num = 0, positive = true
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      while (/\d/.test(s[i])) { num = num * 10 + +s[i]; i++ }
      if (num > 0) { stack.push(positive ? num : -num); num = 0 }
      positive = true
    }
    switch (s[i]) {
      case ' ': continue
      case '-': positive = false; break
      case '(': {
        if (!positive) { stack.push('-'); positive = true }
        stack.push(s[i])
      } break
      case ')': {
        let result = 0
        while (stack[stack.length - 1] != '(') result += stack.pop()
        stack.pop()
        if (stack[stack.length - 1] == '-') { stack.pop(); stack.push(-result) }
        else stack.push(result)
      }
    }
  }
  return stack.reduce((a, b) => a + b, 0)
};