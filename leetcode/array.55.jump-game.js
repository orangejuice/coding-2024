/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let furthest = nums[0]
  for (let i = 0; i < nums.length && i <= furthest; i++) {
    furthest = Math.max(furthest, i + nums[i])
  }
  return furthest >= nums.length - 1
}
