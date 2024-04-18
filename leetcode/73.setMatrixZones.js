/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const width = matrix[0].length, height = matrix.length
  const rows = new Set(), cols = new Set()
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] == 0) {
        let backI = i, backJ = j
        while (backI--) matrix[backI][j] = 0
        while (backJ--) matrix[i][backJ] = 0
        rows.add(i)
        cols.add(j)
      } else {
        if (rows.has(i)) matrix[i][j] = 0
        if (cols.has(j)) matrix[i][j] = 0
      }
    }
  }
};