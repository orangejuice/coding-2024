/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
  k = k % nums.length

  for (let startFrom = 0; startFrom < (k % 2 === 1 ? 1 : 2); startFrom++) {
    let i = startFrom, seized = nums[startFrom]
    while (true) {
      const desiredI = (i + k) % nums.length
      console.log(desiredI + ":", seized)
      const tmp = nums[desiredI]
      nums[desiredI] = seized
      seized = tmp
      i = desiredI
      if (i === startFrom) break
    }
  }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length

  reverse(nums)
  reverse(nums, 0, k - 1)
  reverse(nums, k)
}


const reverse = (arr, left, right) => {
  left = left ?? 0
  right = right ?? arr.length - 1
  while (left < right) {
    const tmp = arr[left]
    arr[left++] = arr[right]
    arr[right--] = tmp
  }
}


