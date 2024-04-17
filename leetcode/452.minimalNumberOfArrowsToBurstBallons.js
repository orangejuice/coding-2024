/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  let count = 0
  for (let i = 0; i < points.length; i++) {
    right = points[i][1]
    while (points[i + 1]?.[0] <= right) {
      i++
      right = Math.min(right, points[i][1])
    }
    count++
  }
  return count
};