/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function (target, nums) {
  if (nums.reduce((a, b) => a + b, 0) < target) return 0
  let minLen = Infinity
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target) {
        minLen = Math.min(minLen, j - i + 1)
        break
      }
    }
  }
  return minLen
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen3 = function (target, nums) {
  let minLen = Infinity
  let sums = new Map([[0, nums[0]]])
  for (let i = 1; i < nums.length; i++)
    sums.set(i, sums.get(i - 1) + nums[i])
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (sums.get(j) - sums.get(i) + nums[i] >= target) {
        minLen = Math.min(minLen, j - i + 1)
        break
      }
    }
  }
  return minLen == Infinity ? 0 : minLen
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen4 = function (target, nums) {
  let minLen = Infinity
  let sums = new Map([[0, nums[0]]])
  for (let i = 1; i < nums.length; i++)
    sums.set(i, sums.get(i - 1) + nums[i])

  for (let i = 0; i < nums.length; i++) {
    let j = i, k = nums.length
    while (j < k) {
      let mid = Math.floor((j + k) / 2)
      if (sums.get(mid) - sums.get(i) + nums[i] >= target)
        k = mid
      else
        j = mid + 1
    }
    if (j != sums.size) {
      minLen = Math.min(minLen, j - i + 1)
    }
  }
  return minLen == Infinity ? 0 : minLen
};


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLen = Infinity, sum = 0
  for (let left = 0, right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left++]
    }
  }
  return minLen == Infinity ? 0 : minLen
};