循环把所有沙漏的和的值走一遍，逐个跟最大值比较，最后留下的是最大值

```javascript
function hourglassSum(arr) {
  let result = Number.NEGATIVE_INFINITY
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      const sum = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] +
        arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1]
      if (sum > result) result = sum
    }
  }
  return result
}
```

