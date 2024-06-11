/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  let queue = [startGene], visited = new Set(), count = 1
  let nextQueue = new Set()

  while (queue.length) {
    const cur = queue.shift()
    visited.add(cur)
    const neighbors = bank.filter(str => !visited.has(str))
    .filter(str => diff(str, cur) == 1)

    for (let neighbor of neighbors) {
      if (neighbor == endGene) return count
      nextQueue.add(neighbor)
    }

    if (queue.length == 0) {
      count += 1
      queue = [...nextQueue]
      nextQueue = new Set()
    }
  }
  return -1
}

const diff = (str1, str2) => {
  str1 = [...str1], str2 = [...str2]
  let count = 0
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    count += (str1[i] == str2[i] ? 0 : 1)
    if (count > 1) return count
  }
  return count
}
