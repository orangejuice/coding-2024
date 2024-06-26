/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftProduct = Array(nums.length)
  const rightProduct = Array(nums.length)
  leftProduct[0] = 1
  rightProduct[nums.length - 1] = 1
  for (let i = 1; i < nums.length; i++)
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1]
  for (let i = nums.length - 2; i >= 0; i--)
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1]

  return nums.map((_, i) => leftProduct[i] * rightProduct[i])
};
