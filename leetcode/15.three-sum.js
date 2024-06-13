/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let j = i + 1, k = nums.length - 1
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) j++
      else if (nums[i] + nums[j] + nums[k] > 0) k--
      else {
        result.push([nums[i], nums[j], nums[k]])
        j++
        while (nums[j] == nums[j - 1]) j++
      }
    }
  }
  return result
}
