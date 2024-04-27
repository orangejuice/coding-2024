/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ""
  for (let i = 0; true; i++) {
    let common = strs[0][i]
    if (!common) return result
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != common) return result
    }
    result += common
  }
  return result
}