/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf3 = function (nums) {
  let leftProd = [nums[0]], rightProd = [nums[nums.length - 1]]
  for (let i = 1; i < nums.length - 1; i++) {
    leftProd.push(leftProd[i - 1] * nums[i])
    rightProd.push(rightProd[i - 1] * nums[nums.length - 1 - i])
  }
  let answer = [rightProd[rightProd.length - 1]]
  for (let i = 1; i < nums.length - 1; i++) {
    answer.push(leftProd[i - 1] * rightProd[rightProd.length - 1 - i])
  }
  answer.push(leftProd[leftProd.length - 1])
  return answer
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
  let leftProd = new Array(nums.length)
  let rightProd = new Array(nums.length)
  leftProd[0] = 1
  rightProd[nums.length - 1] = 1

  for (let i = 1; i <= nums.length - 1; i++)
    leftProd[i] = leftProd[i - 1] * nums[i - 1]
  for (let i = nums.length - 2; i >= 0; i--)
    rightProd[i] = rightProd[i + 1] * nums[i + 1]

  let answer = []
  for (let i = 0; i < nums.length; i++)
    answer[i] = leftProd[i] * rightProd[i]
  return answer
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = new Array(nums.length)
  result[0] = 1
  let rightProd = 1
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProd *= nums[i + 1]
    result[i] *= rightProd
  }
  return result
}