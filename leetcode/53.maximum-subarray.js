/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0], curSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(curSum + nums[i], nums[i])
    max = Math.max(max, curSum)
  }

  return max
}
