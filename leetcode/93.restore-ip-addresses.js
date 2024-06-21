/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []

  const getNextPart = (str, which, prev) => {
    if (which == 4) {
      if (!str) result.push(prev.join("."))
      return
    }

    for (let i = 1; i <= 3; i++) {
      if (i > str.length) return
      const cur = str.slice(0, i)
      if (cur > 255 || (i != 1 && cur.startsWith(0))) return
      getNextPart(str.slice(i), which + 1, prev.concat(cur))
    }
  }

  getNextPart(s, 0, [])
  return result
}
