/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function (s, t) {
  let i = 0, j = 0
  for (; i < s.length; i++) {
    for (; j < t.length; j++) {
      if (t[j] == s[i]) { j++; break }
    }
    if (i < s.length - 1 && j == t.length || s[i] != t[j - 1]) return false
  }
  return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0
  for (let i = 0; i < t.length; i++) {
    if(t[i] == s[sIndex]) sIndex++
  }
  return sIndex == s.length
};