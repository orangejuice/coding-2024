/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  const find = (start, end) => {
    if (start > end) return start

    const mid = Math.floor((start + end) / 2)

    if (nums[mid] == target) return mid
    else if (nums[mid] > target) return find(start, mid - 1)
    else return find(mid + 1, end)
  }

  const pos = find(0, nums.length - 1)
  if (nums[pos] != target) return [-1, -1]

  let left = pos, right = pos
  while (true) {
    const nextLeft = find(0, left - 1)
    if (nums[nextLeft] != target || nextLeft == left) break
    left = nextLeft
  }
  while (true) {
    const nextRight = find(right + 1, nums.length - 1)
    if (nums[nextRight] != target || nextRight == right) break
    right = nextRight
  }
  return [left, right]
}

/*
 *   firstly, using a standard binary search to look for the target value,
 *   if the value is found in the array,
 *   look left to find out the left-boundary of the range
 *   look right to find out the right-boundary of the range
 *   repeat the process until the binary search return a position ----
 *   - does not equal to the target value, or
 *   - seem as the last position
 */
