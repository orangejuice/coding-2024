/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let i = 0, row = 0
  let result = []
  while (i < words.length) {
    if (result[row]) {
      if ((result[row] + " " + words[i]).length <= maxWidth) {
        result[row] += " " + words[i++]
      } else {
        if (i != words.length) {
          let spacesToAdd = maxWidth - result[row].length
          if (result[row].indexOf(" ") == -1) {
            result[row] += " ".repeat(spacesToAdd)
          } else {
            let rowArr = result[row].split(" ")
            let finalRow = ""
            let spacesToAddEach = Math.floor(spacesToAdd / (rowArr.length - 1))
            for (let j = 0; j < rowArr.length; j++) {
              if (j == rowArr.length - 1)
                finalRow += rowArr[j]
              else {
                finalRow += rowArr[j] + " ".repeat(spacesToAddEach + 1 +
                  (j < spacesToAdd % (rowArr.length - 1) ? 1 : 0))
              }
            }
            result[row] = finalRow
          }
        }
        row++
      }
    } else {
      result[row] = words[i++]
    }

    if (i == words.length) {
      let spacesToAdd = maxWidth - result[row].length
      result[row] += " ".repeat(spacesToAdd)
    }
  }
  return result
}
