/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length
  let caddies = new Array(n).fill(0)
  let kidsWithCaddy = 0
  for (let i = 0; i < n; i++) {
    if ((ratings[i - 1] >= ratings[i] && ratings[i] <= ratings[i + 1])
      || n == 1
      || (i == 0 && ratings[0] <= ratings[1])
      || (i == n - 1 && ratings[n - 1] <= ratings[n - 2])) {
      caddies[i] = 1
      kidsWithCaddy += 1
    }
  }
  while (kidsWithCaddy < n) {
    for (let i = 1; i < n - 1; i++) {
      if (!caddies[i] && caddies[i - 1]) {
        if (ratings[i - 1] < ratings[i] && ratings[i] <= ratings[i + 1]) {
          caddies[i] = caddies[i - 1] + 1
          kidsWithCaddy += 1
        }
      }
      if (!caddies[i] && caddies[i + 1]) {
        if (ratings[i - 1] >= ratings[i] && ratings[i] > ratings[i + 1]) {
          caddies[i] = caddies[i + 1] + 1
          kidsWithCaddy += 1
        }
      }
      if (!caddies[i] && caddies[i - 1] && caddies[i + 1]) {
        if (ratings[i] == Math.max(ratings[i - 1], ratings[i], ratings[i + 1])) {
          caddies[i] = Math.max(caddies[i - 1], caddies[i + 1]) + 1
          kidsWithCaddy += 1
        }
      }
    }
    if (!caddies[0] && caddies[1]) {
      caddies[0] = caddies[1] + 1
      kidsWithCaddy += 1
    }
    if (!caddies[n - 1] && caddies[n - 2]) {
      caddies[n - 1] = caddies[n - 2] + 1
      kidsWithCaddy += 1
    }
  }
  return caddies.reduce((acc, cur) => acc + cur, 0)
}
