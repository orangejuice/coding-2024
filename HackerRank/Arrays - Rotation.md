

把前面d个数字放到数组的后面

```js
function rotLeft(a, d) {
  return a.slice(d).concat(a.slice(0, d))
}
```

```js
//v2
for(let i = 0;i < d - 1; i++){
  a.push(a.shift())
}
```

