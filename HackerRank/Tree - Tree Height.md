JS built-in code broken

```ts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split(/\s/);
  inputString = '';
  solution();
});

function readLine(): string {
  return inputLines[currentLine++];
}

class TreeNode {
  data: number;
  left: null | TreeNode;
  right: null | TreeNode;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(node: TreeNode, data: number) {
    if (node == null) {
      node = new TreeNode(data);
    }
    else if (data < node.data) {
      node.left = this.insert(node.left, data);
    }
    else {
      node.right = this.insert(node.right, data);
    }

    return node;
  }
}


// This is a "method-only" submission.
// You only need to complete this method.

function treeHeight(root: TreeNode): string {
  if (!root) return "-1"
  if (!root.left && !root.right) return "0"
  return (Math.max(parseInt(treeHeight(root.left)), parseInt(treeHeight(root.right))) + 1).toString()
}

function solution() {
  var tree = new Tree();
  var n = parseInt(readLine());

  for (var i = 0; i < n; i++) {
    var m = parseInt(readLine());
    tree.root = tree.insert(tree.root, m);
  }

  var height = treeHeight(tree.root);
  process.stdout.write(height);
}
```



## mar 27, 2024 test2

无语 js的代码有毛病还是锁定的。

```js
function treeHeight(root) {
  function traverse(node) {
    if (!node) return -1
    let left = traverse(node.left)
    let right = traverse(node.right)
    return Math.max(left, right) + 1
  }
  return traverse(root).toString()
}

//ts
function treeHeight(root: TreeNode): string {
  function traverse(node: TreeNode): number {
    if (!node) return -1
    let left: number = traverse(node.left)
    let right: number = traverse(node.right)
    return Math.max(left, right) + 1
  }
  return traverse(root).toString()
}
```

