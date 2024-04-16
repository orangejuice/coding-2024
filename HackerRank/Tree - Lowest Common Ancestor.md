```js
function lca(root, val1, val2) {
  if (root.data < val1 && root.data < val2)
    return lca(root.right, val1, val2)

  if (root.data > val1 && root.data > val2)
    return lca(root.left, val1, val2)
    
  return root.data
}
```

