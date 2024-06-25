/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = prices[0], maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) low = prices[i]
    else maxProfit = Math.max(maxProfit, prices[i] - low)
  }
  return maxProfit
};
