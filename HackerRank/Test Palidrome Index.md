```js
function palindromeIndex(s) {
  let strArr = [...s]

  let start = 0, end = strArr.length - 1
  while (start < end) {
    if (strArr[start] != strArr[end]) break
    start++
    end--
  }
  if (start >= end) return -1

  

  for (let i = 0; i < strArr.length; i++) {
    let strArrNew = strArr.slice(0, i).concat(strArr.slice(i + 1))
    let start = 0, end = strArrNew.length - 1
    while (start < end) {
      if (strArrNew[start] != strArrNew[end]) break
      start++
      end--
    }
    if (start >= end) return i
  }
  return -1
}
```



看了讨论醒悟到！前面的代码确实告诉了哪里导致不是回文了

```js
function palindromeIndex(s) {
  const isPalindrome = (strArr) => {
    let i = 0, j = strArr.length - 1
    while (i < j) {
      if (strArr[i] != strArr[j]) break
      i++; j--
    }
    return { yes: i >= j, left: i, right: j }
  }

  const { yes, left, right } = isPalindrome([...s])
  if (yes) return -1

  const { yes: yesLeft } = isPalindrome([...s].slice(0, left).concat([...s].slice(left + 1)))
  if (yesLeft) return left

  const { yes: yesRight } = isPalindrome([...s].slice(0, right).concat([...s].slice(right + 1)))
  if (yesRight) return right

  return -1
}
```

