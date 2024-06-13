/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let ch of s) {
    if ("([{".includes(ch)) stack.push(ch)
    else if (ch == ")" && stack[stack.length - 1] == "("
      || ch == "]" && stack[stack.length - 1] == "["
      || ch == "}" && stack[stack.length - 1] == "{") stack.pop()
    else return false
  }
  return stack.length == 0
}
