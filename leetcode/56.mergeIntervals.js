/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0], end = intervals[i][1]
    while (end >= intervals[i + 1]?.[0]) {
      i++
      end = Math.max(end, intervals[i][1])
    }
    result.push([start, end])
  }
  return result
};