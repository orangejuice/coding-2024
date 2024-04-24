/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = 0, count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == majority) count++
    else {
      if (count == 0) majority = nums[i]
      else count--
    }
  }
  return majority
};