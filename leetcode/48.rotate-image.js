/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const width = matrix.length
  for (let layer = 0; layer < Math.floor((width - 1) / 2) + 1; layer++) {
    const layerWidth = width - layer * 2
    for (let i = 0; i < layerWidth - 1; i++) {
      swap(matrix, [layer, layer + i], [layer + i, layer + layerWidth - 1],
        [layer + layerWidth - 1, layer + layerWidth - 1 - i],
        [layer + layerWidth - 1 - i, layer])
    }
  }
}

const swap = (arr, [ai, aj], [bi, bj], [ci, cj], [di, dj]) => {
  const tmp = arr[di][dj]
  arr[di][dj] = arr[ci][cj]
  arr[ci][cj] = arr[bi][bj]
  arr[bi][bj] = arr[ai][aj]
  arr[ai][aj] = tmp
}
