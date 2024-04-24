/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let validIdx = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[validIdx]) nums[++validIdx] = nums[i]
  }
  return validIdx + 1
};