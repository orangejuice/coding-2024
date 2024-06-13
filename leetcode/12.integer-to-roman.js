/**
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function (num) {
  let numArr = Array.from(String(num), Number).reverse()
  let map = new Map([
    [0, ["", "", ""]],
    [1, ["I", "X", "C", "M"]],
    [2, ["II", "XX", "CC", "MM"]],
    [3, ["III", "XXX", "CCC", "MMM"]],
    [4, ["IV", "XL", "CD"]],
    [5, ["V", "L", "D"]],
    [6, ["VI", "LX", "DC"]],
    [7, ["VII", "LXX", "DCC"]],
    [8, ["VIII", "LXXX", "DCCC"]],
    [9, ["IX", "XC", "CM"]]
  ])
  let result = ""
  for (let i = 0; i < numArr.length; i++) {
    result = map.get(numArr[i])[i] + result
  }
  return result
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = ""
  while (num > 0) {
    if (num >= 1000) {
      result += "M"
      num -= 1000
    } else if (num >= 900) {
      result += "CM"
      num -= 900
    } else if (num >= 500) {
      result += "D"
      num -= 500
    } else if (num >= 400) {
      result += "CD"
      num -= 400
    } else if (num >= 100) {
      result += "C"
      num -= 100
    } else if (num >= 90) {
      result += "XC"
      num -= 90
    } else if (num >= 50) {
      result += "L"
      num -= 50
    } else if (num >= 40) {
      result += "XL"
      num -= 40
    } else if (num >= 10) {
      result += "X"
      num -= 10
    } else if (num >= 9) {
      result += "IX"
      num -= 9
    } else if (num >= 5) {
      result += "V"
      num -= 5
    } else if (num >= 4) {
      result += "IV"
      num -= 4
    } else if (num >= 1) {
      result += "I"
      num -= 1
    }
  }
  return result
}
