/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN2 = function (tokens) {
  const stack = []

  for (const ch of tokens) {
    if (/\d+/.test(ch)) stack.push(ch)
    else switch (ch) {
      case "+":
        stack.push(+stack.pop() + +stack.pop())
        break
      case "-":
        stack.push(-stack.pop() + +stack.pop())
        break
      case "*":
        stack.push(+stack.pop() * +stack.pop())
        break
      case "/":
        stack.push(Math.trunc(1 / +stack.pop() * +stack.pop()))
    }
  }
  return stack[0]
}


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  for (const ch of tokens) {
    switch (ch) {
      case "+":
        stack.push(+stack.pop() + +stack.pop())
        break
      case "-":
        stack.push(-stack.pop() + +stack.pop())
        break
      case "*":
        stack.push(+stack.pop() * +stack.pop())
        break
      case "/":
        stack.push(Math.trunc(1 / +stack.pop() * +stack.pop()))
        break
      default:
        stack.push(ch)
    }
  }
  return stack[0]
}
