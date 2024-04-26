/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1)
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }
  for (let i = result.length - 2, multiply = 1; i >= 0; i--) {
    multiply *= nums[i + 1]
    result[i] *= multiply
  }
  return result
};