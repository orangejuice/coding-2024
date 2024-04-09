/**
 * O(n), O(n)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
    else map.set(nums[i], 1)
  }
  return [...map.entries()].sort(([, v1], [, v2]) => v2 - v1)[0][0]
}

/**
 * O(n), O(1)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
  let majority = nums[0], count = 1
  for (let i = 1; i < nums.length; i++) {
    count += nums[i] === majority ? 1 : -1
    if (count === -1) {
      majority = nums[i]
      count = 1
    }
  }
  return majority
}