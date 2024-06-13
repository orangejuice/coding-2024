/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  const search = (start, end) => {
    if (start > end) return start
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] == target) return mid
    else if (nums[mid] < target) return search(mid + 1, end)
    else return search(start, mid - 1)
  }

  return search(0, nums.length - 1)
}
