/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let map = new Map(), usedPattern = new Set()
  let sArr = s.split(" ")
  for (let i = 0; i < sArr.length; i++) {
    if (map.has(sArr[i])) {
      if (map.get(sArr[i]) == pattern[i]) {
      } else return false
    } else if (!usedPattern.has(pattern[i])) {
      map.set(sArr[i], pattern[i])
      usedPattern.add(pattern[i])
    } else return false
  }
  return sArr.length == pattern.length
}
