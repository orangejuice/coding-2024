version 1, not correct

```js
function whatFlavors(cost, money) {
  let buy = [], menu = new Map()    // price, [ids]
  for (let i = 0; i < cost.length; i++) {
    if (menu.has(cost[i])) menu.get(cost[i]).push(i + 1)
    else menu.set(cost[i], [i + 1])
  }
  cost.sort((a, b) => b - a)
  // console.log(menu, cost)
  for (let i = 0; i < cost.length; i++) {
    if ((buy.length == 0 && cost[i] >= money) || (buy.length == 1 && cost[i] > money)) continue
    money -= cost[i]
    console.log(menu, cost, i, money, cost[i])
    buy.push(menu.get(cost[i]).pop())
  }
  console.log(buy.join("  "))
}
```

version2, fix thousands of issues

```js
function whatFlavors(cost, money) {
  let buy = [], menu = new Map()    // price, [ids]
  for (let i = 0; i < cost.length; i++) {
    if (menu.has(cost[i])) menu.get(cost[i]).push(i + 1)
    else menu.set(cost[i], [i + 1])
  }
  cost.sort((a, b) => b - a)

  for (let i = 0; i < cost.length; i++) {
    if (cost[i] < money && menu.has(money - cost[i])) {
      buy.push(menu.get(cost[i]).pop(), menu.get(money - cost[i]).pop())
      buy.sort((a, b) => a - b)
      console.log(buy.join(" "))
      return
    }
  }
}
```





## Mar 26, 2024 test2

```js
function whatFlavors(cost, money) {
  let menu = new Map()

  for (let i = 0; i < cost.length; i++) {
    if (menu.has(cost[i])) menu.get(cost[i]).push(i + 1)
    else menu.set(cost[i], [i + 1])
  }

  for (let i = 0; i < cost.length; i++) {
    if (menu.has(money - cost[i]) && (cost[i] != money - cost[i] || menu.get(cost[i]).length > 1)) {
      console.log(menu.get(cost[i]).shift(), menu.get(money - cost[i]).shift())
      return
    }
  }
}
```

