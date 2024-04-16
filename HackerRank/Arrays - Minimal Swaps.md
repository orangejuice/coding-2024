给一个数组 计算最小需要的交换次数，可以交换任意两个元素

```js
function minimumSwaps(arr) {
  let result = 0, swapped = true

  while(swapped) {
    swapped = false
    for(let i=0;i<arr.length;i++){
      if(arr[i] != i+1) {
        swap(arr, i, arr[i]-1)
        result++
        swapped = true
      }
    }
  }
  return result
} 

function swap (arr, i1, i2) {
  let temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}
```

