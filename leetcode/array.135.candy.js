/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candies = new Array(ratings.length), last = ratings.length - 1
  for (let i = 0; i < ratings.length; i++) {
    if ((i == 0 || ratings[i] <= ratings[i - 1]) && (i == last || ratings[i] <= ratings[i + 1])) {
      candies[i] = 1
    }
    if (ratings[i] > ratings[i - 1] && (i == last || ratings[i] <= ratings[i + 1])) {
      candies[i] = candies[i - 1] + 1
    }
  }
  for (let i = last; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && (i == 0 || ratings[i] <= ratings[i - 1])) {
      candies[i] = candies[i + 1] + 1
    }
    if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i - 1], candies[i + 1]) + 1
    }
  }
  return candies.reduce((a, b) => a + b, 0)
}

// Current kid get 1 candy
// 1. left x  cur <= right
// 2. left >= cur <= right
// 3. left >= cur x  right
// 4. left x  cur x  right
// Current kid get candies[i-1] + 1 candy
// 1. left <  cur <= right
// 2. left <  cur x  right
// Current kid get candies[i+1] + 1 candy
// 1. left >= cur >  right
// 2. left x  cur >  right
// Current kid get max(c[i-1], c[i+1]) + 1 candy
// 1. left <  cur >  right