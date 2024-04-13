/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (numbers, target) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target)
        result.push(i + 1, j + 1)
    }
  }
  return result
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0, j = numbers.length - 1
  while (true) {
    if (numbers[i] + numbers[j] > target) j--
    else if (numbers[i] + numbers[j] < target) i++
    else return [i + 1, j + 1]
  }
};