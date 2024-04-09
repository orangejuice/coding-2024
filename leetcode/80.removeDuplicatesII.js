/*
立刻可以想到两种方案
1. traverse and look for the duplicates, remove it and putting all left forward
2. traverse and replace duplicates with a flag, remove them all and putting left forward after in another loop
但是感觉不是最佳 果然在讨论区看到了更好的方案
双指针：一个i指向检查的元素 一个j指向下一个元素应该放置的位置
* */

/**
 * @param {number[]} nums sorted ascending nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length

  let j = 2
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[j - 2]) continue
    else nums[j++] = nums[i]
  }
  return j
}