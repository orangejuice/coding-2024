in this example, k=3 people want to buy 4 flowers, each priced at c: [1, 2, 3, 4]

if a customer buy first flower priced at 2, the price would be (0+1)x2=2, the second flower priced at 2 would be (1+1)x2=4



so if people head >= flowers they want to buy, then they buy one each, otherwise:

people buy the cheapest flower at last, which means

4 - 3 = 1

```javascript
function getMinimumCost(k, c) {
  if (k >= c.length) {
    return c.reduce((prev, curr) => prev + curr, 0)
  } else {
    c.sort((a, b) => b - a)
    let friends = new Map()             // (Friend, Buy Times)
    let buyTimes = new Map([[0, []]])  // (Buy Times, [Friends])
    let sum = 0

    for (let i = 0; i < k; i++) {
      friends.set(i, 0)
      buyTimes.get(0).push(i)
    }
    for (let i = 0; i < c.length; i++) {
      const idealBuyer = buyTimes.get(buyTimes.keys().next().value).pop()
      const buyTime = friends.get(idealBuyer)
      console.log(friends, buyTimes, idealBuyer, buyTime, c[i])
      const price = (buyTime + 1) * c[i]
      sum += price

      if (buyTimes.has(buyTime + 1)) {
        buyTimes.get(buyTime + 1).push(idealBuyer)
      } else {
        buyTimes.set(buyTime + 1, [idealBuyer])
      }
      if (buyTimes.get(buyTime).length == 0) buyTimes.delete(buyTime)
      friends.set(idealBuyer, buyTime + 1)
    }
    return sum
  }
}
```

## Mar 25, 2024 test2

```js
// k: number of friends
// c[i]: [price of each flower]
function getMinimumCost(k, c) {
  if (k >= c.length)
    return c.reduce((acc, cur) => acc + cur, 0)
  else {
    c.sort((a, b) => b - a)
    let boughtCountEach = new Array(k).fill(0), boughtCount = 0
    let costs = 0
    while (boughtCount < c.length) {
      let whoBuyThisTime = boughtCountEach.findIndex(val =>
        val == Math.min(...boughtCountEach))

      costs += (boughtCountEach[whoBuyThisTime] + 1) * c[boughtCount]
      boughtCountEach[whoBuyThisTime] += 1
      boughtCount++
    }

    return costs
  }
}
```

