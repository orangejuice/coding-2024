/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  let maxLen = 0, unique = new Map()
  for (let left = 0, right = 0; right < s.length; right++) {
    if (unique.has(s[right]))
      while (left <= unique.get(s[right])) unique.delete(s[left++])
    unique.set(s[right], right)
    maxLen = Math.max(maxLen, unique.size)
  }
  return maxLen
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0, unique = new Set()
  for (let left = 0, right = 0; right < s.length; right++) {
    while (unique.has(s[right])) unique.delete(s[left++])
    unique.add(s[right])
    maxLen = Math.max(maxLen, unique.size)
  }
  return maxLen
}
