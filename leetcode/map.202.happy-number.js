/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let visited = new Set(), cur = n
  while (cur > 1) {
    if (visited.has(cur)) return false
    visited.add(cur)
    cur = [...String(cur)].reduce((acc, dig) => acc + Math.pow(dig, 2), 0)
  }
  return true
};
