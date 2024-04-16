```js
function processData(input) {
  let lines = input.split("\n"), queue = []
  for (let i = 1; i <= lines[0]; i++) {
    let op = lines[i].split(" ")[0], num = lines[i].split(" ")[1]
    if (op == 1) queue.push(num)
    else if (op == 2) queue.shift()
    else console.log(queue[0])
  }
}
```







## mar 26, 2024  test2

```js
class Queue {
  constructor() {
    this.inbox = []
    this.outbox = []
  }

  put(element) {
    this.inbox.push(element)
  }

  pop() {
    if (this.outbox.length == 0) {
      while (this.inbox.length) this.outbox.push(this.inbox.pop())
    }
    return this.outbox.pop()
  }

  peek() {
    if (this.outbox.length == 0) {
      while (this.inbox.length) this.outbox.push(this.inbox.pop())
    }
    return this.outbox[this.outbox.length - 1]
  }
}

function processData(input) {
  let lines = input.split('\n').slice(1)
  let queue = new Queue()

  for (let i = 0; i < lines.length; i++) {
    let [op, n] = lines[i].split(' ')
    switch (op) {
      case '1': queue.put(n); break
      case '2': queue.pop(); break
      case '3': console.log(queue.peek())
    }
  }
}
```

