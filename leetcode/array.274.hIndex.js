/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a)
  let count = 0
  for (let i = 1; i <= citations.length; i++) {
    if (citations[i - 1] >= i) count++
    else break
  }
  return count
};