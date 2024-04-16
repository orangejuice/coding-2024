```js
function minTime(machines, goal) {
  let average = 0
  for (let takeDays of machines) {
    average += 1 / takeDays
  }
  // let average = machines.reduce((prev, curr) => prev + curr, 0) / machines.length
  // let day = 0, prod = 0
  // while (prod < goal) {
  //   day++
  //   for (let takeDays of machines) {
  //     if (day % takeDays == 0) prod++
  //   }
  // }
  return Math.ceil(goal / average)
}
```

version 2

```js
function minTime(machines, goal) {
  let average = 0
  for (let takeDays of machines) average += 1 / takeDays
  return Math.ceil(goal / average)
}
```

version 3 fix precision problem 

```js
function minTime(machines, goal) {
  let average = 0
  for (let takeDays of machines) average += 1 / takeDays
  const day = Math.floor(goal / average)

  let prod = 0
  for (let takeDays of machines) {
    prod += (day - (day % takeDays)) / takeDays
  }
  return prod < goal ? day + 1 : day
}
```

version 4 use lcm (least common multiple)

```js
function minTime(machines, goal) {
  const gcdFunc = (a, b) => a ? gcdFunc(b % a, a) : b
  const lcmFunc = (a, b) => a * b / gcdFunc(a, b)
  const lcm = machines.reduce(lcmFunc)
  const average = machines.reduce((prev, curr) => prev + lcm / curr, 0) / lcm

  return Math.ceil(goal / average)
}
```

Ok only notice now that this is a WRONG path, because the average * day does not display the real production (some machines are not fully produced )

**Use binary search**

the goal is to find a minimal day that produce >= goal

```js
function minTime(machines, goal) {
  let min = 1, max = goal * Math.max(...machines)

  while (min < max) {
    let mid = parseInt((min + max) / 2)
    let prod = machines.reduce((prev, curr) => prev + parseInt(mid / curr), 0)
    if (prod < goal) min = mid + 1
    else max = mid
  }
  return min
}
```



## Mar 26 2024 test2

```js
function minTime(machines, goal) {
  let minDays = 1, maxDays = goal * Math.max(machines)

  while (minDays < maxDays) {
    let midDays = Math.floor((minDays + maxDays) / 2)
    let produce = machines.reduce((acc, cur) => acc + Math.floor(midDays / cur), 0)
    if (produce < goal) minDays = midDays + 1
    else maxDays = midDays
  }
  return minDays
}
```

