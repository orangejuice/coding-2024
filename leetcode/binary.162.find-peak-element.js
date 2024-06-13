/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const find = (start, end) => {
    if (start > end) return start

    const mid = Math.floor((start + end) / 2)
    const leftValue = nums[mid - 1] ?? -Infinity
    const rightValue = nums[mid + 1] ?? -Infinity

    if (nums[mid] > leftValue && nums[mid] > rightValue) return mid
    else if (nums[mid] > leftValue) return find(mid + 1, end)
    else return find(start, mid - 1)
  }
  return find(0, nums.length - 1)
}
