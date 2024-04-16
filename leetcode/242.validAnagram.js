/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map()
  for (let ch of s) map.set(ch, (map.get(ch) ?? 0) + 1)

  for (let ch of t) {
    if (map.has(ch))
      if (map.get(ch) > 1) map.set(ch, map.get(ch) - 1)
      else map.delete(ch)
    else
      return false
  }
  return map.size == 0
};