/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length
  let fast = 1, slow = 0, cur = nums[0], count = 1

  while (fast <= nums.length) {
    if (nums[fast] == cur && fast < nums.length) {
      if (count < 2) count += 1
    } else {
      while (count-- > 0) nums[slow++] = cur
      cur = nums[fast]
      count = 1
    }
    fast++
  }
  return slow
};
