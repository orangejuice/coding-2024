/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0, tank = 0
  for (let i = 0; i - start < gas.length; i++) {
    let cur = i % gas.length
    tank += gas[cur]
    if (cost[cur] <= tank) tank -= cost[cur]
    else {
      if (i >= gas.length - 1) return -1
      start = (i + 1) % gas.length
      tank = 0
    }
  }
  return start
}
