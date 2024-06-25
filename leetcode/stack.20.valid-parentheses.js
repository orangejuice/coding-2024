/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let ch of s) {
    switch (ch) {
      case '}': if (stack[stack.length - 1] == '{') stack.pop(); else return false; break;
      case ']': if (stack[stack.length - 1] == '[') stack.pop(); else return false; break;
      case ')': if (stack[stack.length - 1] == '(') stack.pop(); else return false; break;
      default: stack.push(ch)
    }
  }
  return stack.length == 0
};
