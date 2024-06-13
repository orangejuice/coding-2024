/**
 * why does this one run so much slower?
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive2 = function (nums) {
  let unique = new Set(nums)
  let max = 0
  for (let num of nums) {
    if (unique.has(num - 1)) continue
    let len = 1
    while (unique.has(++num)) len++
    max = Math.max(max, len)
  }
  return max
}

var longestConsecutive = function (nums) {
  let unique = new Set(nums)
  let max = 0
  for (let num of nums) {
    if (unique.has(num + 1)) continue
    let len = 1
    while (unique.has(--num)) len++
    max = Math.max(max, len)
  }
  return max
}
