/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic2 = function (s, t) {
  let sMap = new Map(), tMap = new Map()
  let sArr = new Array(s.length)
  let tArr = new Array(t.length)
  for (let i = 0, format = 1; i < s.length; i++) {
    if (!sMap.has(s[i])) sMap.set(s[i], format++)
    sArr[i] = sMap.get(s[i])
  }
  for (let i = 0, format = 1; i < t.length; i++) {
    if (!tMap.has(t[i])) tMap.set(t[i], format++)
    tArr[i] = tMap.get(t[i])
  }
  return sArr.join("") == tArr.join("")
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic3 = function (s, t) {
  let sMap = new Map(), tMap = new Map()
  for (let i = 0, count = 1; i < s.length; i++) {
    if (!sMap.has(s[i]) && !tMap.has(t[i])) {
      sMap.set(s[i], count)
      tMap.set(t[i], count)
      count++
    } else if (sMap.get(s[i]) == tMap.get(t[i])) {
    } else return false
  }
  return true
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) != t.indexOf(t[i])) return false
  }
  return true
}
