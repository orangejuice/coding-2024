/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = Infinity
  const find = (start, end) => {
    if (start > end) return
    if (nums[start] < nums[end]) {
      min = Math.min(min, nums[start])
    } else {
      const mid = Math.floor((start + end) / 2)
      min = Math.min(min, nums[mid], nums[end])
      find(start, mid - 1)
      find(mid + 1, end)
    }
  }
  find(0, nums.length - 1)
  return min
}
