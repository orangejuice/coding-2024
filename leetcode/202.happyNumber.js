/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set()
  while (!seen.has(n)) {
    seen.add(n)
    let result = Array.from(n.toString(), Number).reduce((acc, cur) => acc + Math.pow(Number(cur), 2), 0)
    if (result == 1) return true
    else n = result
  }

  return false
};