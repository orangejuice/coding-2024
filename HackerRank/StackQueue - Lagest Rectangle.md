```js
function largestRectangle(heights) {
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    let h = heights[i], left = i, right = i
    while (left - 1 >= 0 && heights[left - 1] >= h) left--
    while (right + 1 < heights.length && heights[right + 1] >= h) right++
    max = Math.max(max, (right - left + 1) * h)
  }
  return max
}
```





## Mar 26, 2024 test2

```js
function largestRectangle(heights) {
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    let toLeft = 0, toRight = 0
    while (i - toLeft - 1 >= 0 && heights[i - toLeft - 1] >= heights[i])
      toLeft++
    while (i + toRight + 1 < heights.length && heights[i + toRight + 1] >= heights[i])
      toRight++
    max = Math.max(max, heights[i] * (1 + toLeft + toRight))
  }
  return max
}
```

