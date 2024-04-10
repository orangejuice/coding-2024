/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let tank = 0, start = 0
  for (let i = 0; i < gas.length + start; i++) {
    let cur = i % gas.length

    tank += gas[cur]
    if (tank < cost[cur]) {
      if (i >= gas.length - 1) return -1
      start = (cur + 1) % gas.length
      tank = 0
    } else {
      tank -= cost[cur]
    }
  }

  return start
}