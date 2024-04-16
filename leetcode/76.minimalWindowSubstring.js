/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let wordMap = new Map()
  for (let ch of t) wordMap.set(ch, (wordMap.get(ch) ?? 0) + 1)

  let windMap = new Map(), min = Infinity, minStr = ""
  let left = 0, right = 0, accomplished = 0

  for (; right < s.length; right++) {
    if (wordMap.has(s[right])) {
      windMap.set(s[right], (windMap.get(s[right]) ?? 0) + 1)
      if (windMap.get(s[right]) == wordMap.get(s[right])) accomplished++
    }
    if (accomplished == wordMap.size) {
      while (true) {
        if (!wordMap.has(s[left])) {
          left++
        } else if (windMap.get(s[left]) > wordMap.get(s[left])) {
          windMap.set(s[left], windMap.get(s[left]) - 1)
          left++
        } else break
      }
      if (right - left + 1 < min) {
        min = right - left + 1
        minStr = s.slice(left, right + 1)
      }
    }
  }
  return minStr
}