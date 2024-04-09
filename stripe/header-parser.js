/**
 * @param {string} userLang
 * @param {string[]} serverLang
 */
function parseAcceptLanguagePart1(userLang, serverLang) {
  const result = []
  userLang.split(", ").forEach(lang => {
    if (serverLang.includes(lang)) result.push(lang)
  })
  return result
}


/**
 * @param {string} userLang
 * @param {string[]} serverLang
 */
function parseAcceptLanguagePart2(userLang, serverLang) {
  let result = []
  userLang.split(", ").forEach(lang => {
    result = result.concat(serverLang.filter(sLang => sLang.includes(lang)))
  })
  return result
}

function parseAcceptLanguagePart3(userLang, serverLang) {
  const result = []
  userLang.split(", ").forEach(uLang => {
    result.push(...serverLang.filter(sLang => sLang.includes(uLang)).filter(sLang => !result.includes(sLang)))
  })
  if (userLang.includes("*")) {
    result.push(...serverLang.filter(sLang => !result.includes(sLang)))
  }
  return result
}

console.log(parseAcceptLanguagePart1("en-US, fr-CA, fr-FR", ["fr-FR", "en-US"]))
console.log(parseAcceptLanguagePart1("fr-CA, fr-FR", ["en-US", "fr-FR"]))
console.log(parseAcceptLanguagePart1("en-US", ["en-US", "fr-CA"]))

console.log(parseAcceptLanguagePart2("en", ["en-US", "fr-CA", "fr-FR"]))
console.log(parseAcceptLanguagePart2("fr", ["en-US", "fr-CA", "fr-FR"]))
console.log(parseAcceptLanguagePart2("fr-FR, fr", ["en-US", "fr-CA", "fr-FR"]))

console.log("Part3 =========")
console.log(parseAcceptLanguagePart3("en-US, *", ["en-US", "fr-CA", "fr-FR"]))
console.log(parseAcceptLanguagePart3("fr-FR, fr, *", ["en-US", "fr-CA", "fr-FR"]))
