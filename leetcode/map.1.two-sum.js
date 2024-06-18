/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0, map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) map.get(num).push(i)
    else map.set(num, [i])
  }

  for (let num of map.keys()) {
    if (map.has(target - num)) {
      if (num == target - num) {
        if (map.get(num).length > 1) {
          return map.get(num).slice(0, 2)
        }
      } else {
        return [map.get(num)[0], map.get(target - num)[0]]
      }
    }
  }
};
