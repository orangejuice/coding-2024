/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = prices[0], profit = 0
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i])
    profit = Math.max(profit, prices[i] - low)
  }
  return profit
}