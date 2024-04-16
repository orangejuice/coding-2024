/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.get(nums[i]).push(i)
    else map.set(nums[i], [i])
  }

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) continue
    if (nums[i] == target - nums[i]) {
      if (map.get(nums[i]).length > 1) return map.get(nums[i])
    } else {
      return [i, map.get(target - nums[i])[0]]
    }
  }
};