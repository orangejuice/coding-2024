/**
 * @param {(string|number)[][]} balances
 * @param {number} requiredMinimum
 */
function rebalance(balances, requiredMinimum) {
  let record = []
  balances.sort((a, b) => a[1] - b[1])
  let left = 0, right = balances.length - 1
  while (left < right) {
    if (balances[left][1] >= 100 || balances[right][1] <= 100) return record
    const amount = Math.min(requiredMinimum - balances[left][1], balances[right][1] - requiredMinimum)
    balances[left][1] += amount
    balances[right][1] -= amount
    record.push('Transfer: '+ balances[right][0] + ' -> ' + balances[left][0] + ': ' + amount)

    if (balances[left][1] === 100) left++
    if (balances[right][1] === 100) right--
  }
  return record
}


const balances = [["AU", 80], ["US", 140], ["MX", 110], ["SG", 120], ["FR", 70]]
console.log(rebalance(balances, 100))
console.log(balances)