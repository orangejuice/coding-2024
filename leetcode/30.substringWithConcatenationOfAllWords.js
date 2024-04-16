/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordLen = words[0].length
  let wordCou = words.length
  let wordMapInit = new Map()
  let result = []
  for (let i = 0; i < words.length; i++) {
    if (wordMapInit.has(words[i])) wordMapInit.set(words[i], wordMapInit.get(words[i]) + 1)
    else wordMapInit.set(words[i], 1)
  }
  loop: for (let i = 0; i < s.length - wordLen * wordCou + 1; i++) {
    let wordMap = new Map(wordMapInit)
    for (let j = i; j < i + wordLen * wordCou; j += wordLen) {
      let cur = s.slice(j, j + wordLen)
      if (wordMap.has(cur) && wordMap.get(cur) > 0) {
        wordMap.set(cur, wordMap.get(cur) - 1)
        continue
      }
      continue loop
    }
    result.push(i)
  }
  return result
};