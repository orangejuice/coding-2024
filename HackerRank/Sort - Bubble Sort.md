

```js
function countSwaps(a) {
  let count = 0
  for(let i=0; i<a.length; i++) {
    for(let j=0; j<a.length-1; j++) {
      if(a[j]>a[j+1]) {
        swap(a,j,j+1)
        count ++
      }
    }
  }
  
  console.log("Array is sorted in", count, "swaps.")
  console.log("First Element:", a[0])
  console.log("Last Element:", a[a.length - 1])
}
  
function swap(arr, i1, i2){
  let temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}
```

