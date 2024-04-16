```js
function maximumToys(prices, k) {
  let sorted = prices.sort((a, b) => a - b), count = 0, sum = 0
  for (; sum + sorted[count] <= k; count++)
    sum += sorted[count]
  return count
}
```

