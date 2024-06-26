/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length)
  result[0] = 1

  for (let i = 1; i < nums.length; i++)
    result[i] = result[i - 1] * nums[i - 1]

  let product = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    product *= nums[i + 1]
    result[i] *= product
  }

  return result
};
