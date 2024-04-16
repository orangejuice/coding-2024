Sort 时间复杂度太高

```js
function cookies(k, A) {
  let count = 0, cookies = A.sort((a, b) => a - b)
  while (cookies[0] < k && cookies.length > 1) {
    let [cookie1, cookie2] = cookies.splice(0, 2)
    cookies.push(cookie1 + cookie2 * 2)
    cookies.sort((a, b) => a - b)
    count++
  }
  if (cookies[0] < k) return -1
  else return count
}
```

```js
function cookies(k, A) {
  let count = 0, cookies = A
  while (cookies.length > 1) {
    let lastCookie1 = Math.min(...cookies)
    if (lastCookie1 >= k) return count
    cookies.splice(cookies.findIndex(c => c == lastCookie1), 1)
    let lastCookie2 = Math.min(...cookies)
    cookies.splice(cookies.findIndex(c => c == lastCookie2), 1)

    let newCookie = lastCookie1 + lastCookie2 * 2
    cookies.push(newCookie)

    count++
  }
  return -1
}
```

知道了 用Heap或PriorityQueue数据结构来很简单的解这个问题