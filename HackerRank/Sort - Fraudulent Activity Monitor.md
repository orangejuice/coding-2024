d是像前看的天数

每一天 

d1 d2 d3 d4 d5

```js
function activityNotifications(expenditure, d) {
  let count = 0
  for(let i=d;i<expenditure.length;i++){
    let sorted = expenditure.slice(i-d, i).sort((a,b)=>a-b)
    let median = d%2==1? sorted[parseInt(d/2)] : (expenditure[parseInt(d/2)]+expenditure[parseInt(d/2-1)])/2
    if(expenditure[d]>=median*2) count++
  }
  return count
}
```

好吧 可以使用计数堆来优化性能 但是。。

