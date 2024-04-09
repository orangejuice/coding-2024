/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function (nums) {
  let reachable = new Array(nums.length)
  reachable[0] = true
  for (let i = 0; i < nums.length; i++) {
    if (!reachable[i]) return false
    for (let j = i; j <= i + nums[i]; j++) reachable[j] = true
  }
  return true
};




/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachable = nums[0]
  for (let i = 0; i < nums.length && i <= reachable; i++) {
    reachable = Math.max(reachable, i + nums[i])
  }
  return reachable >= nums.length - 1
};