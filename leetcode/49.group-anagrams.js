/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()

  for(let str of strs) {
    const sorted = [...str].sort().join('')
    if(map.has(sorted)) map.get(sorted).push(str)
    else map.set(sorted, [str])
  }

  return [...map.values()]
};
