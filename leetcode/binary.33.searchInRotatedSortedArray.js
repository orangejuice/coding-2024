/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  const find = (start, end) => {
    if (start > end) return -1

    const mid = Math.floor((start + end) / 2)
    if (nums[mid] == target) return mid

    if (nums[start] < nums[end]) {
      if (nums[mid] < target) return find(mid + 1, end)
      else return find(start, mid - 1)
    } else {
      const left = find(start, mid - 1), right = find(mid + 1, end)
      return left == -1 ? right == -1 ? -1 : right : left
    }
  }

  return find(0, nums.length - 1)
}
