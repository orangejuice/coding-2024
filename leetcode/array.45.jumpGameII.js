/**
 * This version of code counted the first jump twice and did not count the last jump, to simplify the code
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let reach = 0, nextReach = 0, jump = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextReach = Math.max(nextReach, i + nums[i])
    if (i == reach) { reach = nextReach; jump++ }
  }
  return jump
}