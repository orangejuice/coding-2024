/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (newInterval[1] < intervals[0]?.[0]) {
    intervals.unshift(newInterval)
    return intervals
  }
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] > intervals[i][1]) continue
    let start = Math.min(intervals[i][0], newInterval[0]), startIdx = i
    if (newInterval[1] < intervals[i][0]) {
      intervals.splice(startIdx, 0, newInterval)
      return intervals
    }
    while (newInterval[1] >= intervals[i + 1]?.[0]) i++
    let end = Math.max(newInterval[1], intervals[i][1])
    intervals.splice(startIdx, i - startIdx + 1, [start, end])
    return intervals
  }
  intervals.push(newInterval)
  return intervals
};