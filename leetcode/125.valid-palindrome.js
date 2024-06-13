/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0, j = s.length - 1
  while (i < j) {
    let left, right
    while (i < s.length) {
      if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z")
        || (s[i] >= "0" && s[i] <= "9")) {
        left = s[i++].toLowerCase()
        break
      }
      i++
    }
    while (j >= 0) {
      if ((s[j] >= "A" && s[j] <= "Z") || (s[j] >= "a" && s[j] <= "z")
        || (s[j] >= "0" && s[j] <= "9")) {
        right = s[j--].toLowerCase()
        break
      }
      j--
    }
    if (left != right) return false
  }
  return true
}
