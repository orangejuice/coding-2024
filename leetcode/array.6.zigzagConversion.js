/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = ""
  for (let i = 0; i < numRows; i++) {
    let jumpTimes = 1
    for (let j = i; j < s.length;) {
      result += s[j]
      if (numRows == 1) j++
      else if (i == 0 || i == numRows - 1) j += (numRows - 1) * 2
      else if (jumpTimes++ % 2 == 1) j += (numRows - 1 - i) * 2
      else j += i * 2
    }
  }
  return result
}