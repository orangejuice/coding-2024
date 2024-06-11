/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const find = (start, end) => {
    if (start >= end) return start
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] < nums[end]) return find(start, mid)
    if (nums[mid] > nums[end]) return find(mid + 1, end)
  }
  return nums[find(0, nums.length - 1)]
};

/*
*   start >= end              includes start == end
*   nums[mid] < nums[end]     minimum locates in [start, mid]
*   nums[mid] > nums[end]     minimum locates in [mid+1, end]
*/
