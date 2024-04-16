/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let resultMap = new Map()
  for (let word of strs) {
    let map = new Map()
    for (let ch of word) map.set(ch, (map.get(ch) ?? 0) + 1)
    let key = Array.from(map.entries(), entry => entry.join('')).sort().join('')
    if (resultMap.has(key)) resultMap.get(key).push(word)
    else resultMap.set(key, [word])
  }

  return [...resultMap.values()]
}


/**
 * ok, no need to create a map
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let resultMap = new Map()
  for (let word of strs) {
    let key = Array.from(word).sort().join('')
    if (resultMap.has(key)) resultMap.get(key).push(word)
    else resultMap.set(key, [word])
  }
  return [...resultMap.values()]
}