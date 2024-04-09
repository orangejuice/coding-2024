/**
 * 每次跳跃跳到可达的最远的地方 遍历寻找下一次跳跃能跳到最远的地方，到达本次可达的最远的地方的时候进行下一次跳跃
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function (nums) {
  if (nums.length === 1) return 0

  let reachTo = nums[0], nextJumpTo = nums[0], count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextJumpTo = Math.max(nextJumpTo, i + nums[i])
    if (i === reachTo) {
      count++
      reachTo = nextJumpTo
    }
  }
  return count + 1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let nextJumpTo = capped(nums[0], nums.length - 1)
  let reachTo = nextJumpTo
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    nextJumpTo = Math.max(nextJumpTo, capped(i + nums[i], nums.length - 1))
    if (i == reachTo) {
      count++
      reachTo = nextJumpTo
    }
  }
  return count
};

var capped = function (num, cap) {
  if (num > cap) return cap
  else return num
}