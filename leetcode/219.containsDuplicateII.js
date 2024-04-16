/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let arr = map.get(nums[i])
      arr.push(i)
      if (arr[arr.length - 1] - arr[arr.length - 2] <= k) return true
    } else map.set(nums[i], [i])
  }

  return false
}