/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const search = (start, end, row) => {
    if (start > end) return start

    const mid = Math.floor((start + end) / 2)
    const midValue = (row != undefined ? matrix[row][mid] : matrix[mid][0])

    if (midValue == target) return mid
    else if (midValue > target) return search(start, mid - 1, row)
    else return search(mid + 1, end, row)
  }

  const row = search(0, matrix.length - 1)

  if (matrix[row]?.[0] == target) return true
  if (row == 0) return false

  const col = search(0, matrix[0].length - 1, row - 1)

  return matrix[row - 1][col] == target
}
