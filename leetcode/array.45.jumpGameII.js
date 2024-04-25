/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let reach = nums[0], nextReach = 0, jump = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextReach = Math.max(nextReach, i + nums[i])
    if (i == reach) { reach = nextReach; jump++ }
  }
  return nums.length > 1 ? jump + 1 : jump
}