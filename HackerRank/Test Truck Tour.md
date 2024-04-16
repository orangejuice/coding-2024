```js
function truckTour(petrolpumps) {
  for (let i = 0; i < petrolpumps.length; i++) {
    let [amount, distance] = petrolpumps[i]
    for (let start = i; amount >= distance; start++) {
      if(start == i + petrolpumps.length) return i
      let [nextAmount, nextDistance] = petrolpumps[start % petrolpumps.length]
      amount = amount - distance + nextAmount
      distance = nextDistance
    }
  }
}
```

为什么有几个test case是错误的呢，无语了竟然犯这么低级的忘记加1的错误

O(n^2)

```js
function truckTour(petrolpumps) {
  for (let i = 0; i < petrolpumps.length; i++) {
    let [amount, distance] = petrolpumps[i]
    for (let cur = i; amount >= distance; cur++) {
      if (cur == i + petrolpumps.length) return i
      let [nextAmount, nextDistance] = petrolpumps[(cur + 1) % petrolpumps.length]
      amount = amount - distance + nextAmount
      distance = nextDistance
    }
  }
}
```

O(n)版本

```js
function truckTour(petrolpumps) {
  let curAmount = 0, start = 0
  for (let i = 0; i < petrolpumps.length; i++) {
    let [amount, distance] = petrolpumps[i]
    curAmount += amount - distance

    if (curAmount < 0) {
      start = i + 1
      curAmount = 0
    }
  }
  return start
}
```

