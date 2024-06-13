/**
 * @param {number[]} nums sorted ascending nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length
  let validI = 1
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[validI - 1]) nums[++validI] = nums[i]
  }
  return validI + 1
}
