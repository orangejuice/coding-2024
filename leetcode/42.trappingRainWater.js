/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  let result = 0
  for (let i = 1; i < height.length - 1; i++) {
    let floors = height[i - 1] - height[i]
    while (floors > 0) {
      for (let goRight = i + 1; goRight < height.length; goRight++) {
        if (height[goRight] >= height[i] + floors) {
          result += goRight - i
          break
        }
      }
      floors--
    }
  }
  return result
};


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0
  let left = 0, right = height.length - 1, leftPeek = 0, rightPeek = 0
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] < leftPeek) result += leftPeek - height[left]
      else leftPeek = height[left]
      left++
    } else {
      if (height[right] < rightPeek) result += rightPeek - height[right]
      else rightPeek = height[right]
      right--
    }
  }
  return result
};

