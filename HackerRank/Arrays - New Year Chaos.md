数气泡排序交换的次数，当前位置距离原本位置大于2，则判为混乱

```js
function minimumBribes(q) {
  let result = 0
  for(let i=0; i<q.length; i++) {
    for(let j=0; j<q.length-1;j++) {
      if(q[j]- (j+1) >2) {
        console.log('Too chaotic')
      	return
      }
      if(q[j]>q[j+1]) {
        let temp = q[j]
        q[j] = q[j+1]
        q[j+1] = temp
        result++
      }
    }
  }
}
```

v2 - 不正确 会有重复计数？也不对啊 只统计往队伍前面移动的次数

3 2 1 - 2 3 1 - 2 1 3 - 1 2 3  -----  2 + 1 = 3

```js
function minimumBribes(q) {
  let result = 0
  for(let i=0;i<q.length;i++) {
    if(q[i] - (i+1) > 2) {
      console.log('Too chaotic')
      return
    }
    if(q[i] > i+1) result+=q[i]-i-1
  }
}
```

v3 - 确保只统计贿赂的次数 贿赂意味着队列位置更靠前了(q[i]>i+1) 但要排除区间内比自己更大的数

```js
function minimumBribes(q) {
  let result = 0
  for(let i=0;i<q.length-1;i++) {
    if(q[i] - (i+1) > 2) {
      console.log('Too chaotic')
      return
    }
    // i: 应该站的是i+1, 如果是大于i+1的数字，那么检查范围[i,数字-1]   <--- 还是哪里不对
    // i: 站的数是q[i], 如果比i+1大说明有贿赂，贿赂次数为区间(i,q[i]-1]内比q[i]小的数   <---- 还是哪里不对
    for(let j=i; j<q[i];j++)
      if(q[j]<q[i]) result++
  }
}
```

v3.1 来自讨论区的方案 妈的没看懂哦

```js
function minimumBribes(q) {
  let result = 0
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++)
      if (q[j] > q[i]) result++
  }
}
```





v3 - 统计被贿赂的次数 而贿赂之发生于向前推进 那么被贿赂1次意味着数字更大的人排到自己的前面

所以要数比原先

```js
function minimumBribes(q) {
  let result = 0
  for (let i = 0; i < q.length; i++) {
    for (let j = 0; j < q.length - i; j++) {
      if (q[j] - j > 3) {
        console.log('Too chaotic')
        return
      }
      if (q[j] > q[j + 1]) {
        const temp = q[j]
        q[j] = q[j + 1]
        q[j + 1] = temp
        result++
      }
    }
  }
  console.log(result)
}
```



## Apr 2, 2024 test3

原始brute-force 冒泡排序

```js
function minimumBribes(q) {
  let times = 0
  for (let i = 0; i < q.length - 1; i++) {
    for (let j = 0; j < q.length - 1 - i; j++) {
      if (q[j] - (j + 1) > 2) {
        console.log('Too chaotic')
        return
      }
      if (q[j] > q[j + 1]) {
        let tmp = q[j + 1]
        q[j + 1] = q[j]
        q[j] = tmp
        times += 1
      }
    }
  }
  console.log(times)
}
```

