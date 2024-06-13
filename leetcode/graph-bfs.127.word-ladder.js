/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = [[beginWord, 1]], wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0
  const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))

  while (queue.length) {
    const [cur, step] = queue.shift()
    if (cur == endWord) return step

    for (let i = 0; i < cur.length; i++) {
      for (let j = 0; j < 26; j++) {
        const word = cur.slice(0, i) + alphabet[j] + cur.slice(i + 1)
        if (wordSet.has(word)) {
          wordSet.delete(word)
          queue.push([word, step + 1])
        }
      }
    }
  }
  return 0
}
