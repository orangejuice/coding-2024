/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  if (citations.length === 1) return citations[0] > 0 ? 1 : 0
  citations.sort((a, b) => b - a)
  for (let i = 0; i < citations.length; i++) {
    if (i + 1 > citations[i]) return i
  }
  return citations.length
}