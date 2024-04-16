/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i], last = i
    while (cur + 1 == nums[i + 1]) { cur++; i++ }
    if (i - last > 0) result.push(`${nums[last]}->${nums[i]}`)
    else result.push(nums[i].toString())
  }
  return result
};