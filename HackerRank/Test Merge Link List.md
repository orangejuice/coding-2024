```js
function mergeLists(head1, head2) {
  let mergedHead, head
  while (head1 || head2) {
    console.log(head1.data, head2.data)
    if (head1 && head2) {
      if (head1.data < head2.data) {
        if (!head) mergedHead = head = head1
        else head.next = head1
        head1 = head1.next
      } else {
        if (!head) mergedHead = head = head2
        else head.next = head2
        head2 = head2.next
      }
    } else if (head1) {
      if (!head) mergedHead = head = head1
      else head.next = head1
      head1 = head1.next
    } else if (head2) {
      if (!head) mergedHead = head = head2
      else head.next = head2
      head2 = head2.next
    }
    head = head.next
  }
  return mergedHead
}
```

有问题

```js
function mergeLists(head1, head2) {
  let head, cur
  head = cur = new SinglyLinkedListNode()

  while (head1 || head2) {
    if (head1 && head2) {
      if (head1.data < head2.data) {
        cur.next = head1
        head1 = head1.next
      } else {
        cur.next = head2
        head2 = head2.next
      }
    } else if (head1) {
      cur.next = head1
      head1 = head1.next
    } else if (head2) {
      cur.next = head2
      head2 = head2.next
    }
    cur = cur.next
  }
  return head.next
}

```

```js
function mergeLists(head1, head2) {
  let head, cur
  head = cur = new SinglyLinkedListNode()

  while (head1 || head2) {
    if ((head1 && !head2) || (head1 && head2 && head1.data < head2.data)) {
      cur.next = head1
      head1 = head1.next
    } else if ((!head1 && head2) || (head1 && head2)) {
      cur.next = head2
      head2 = head2.next
    }
    cur = cur.next
  }
  return head.next
}
```

```js
function mergeLists(head1, head2) {
  let head, cur
  head = cur = new SinglyLinkedListNode()

  while (head1 || head2) {
    if ((head1 && !head2) || (head1 && head2 && head1.data < head2.data)) {
      cur.next = head1
      head1 = head1.next
    }
    if ((!head1 && head2) || (head1 && head2 && head1.data >= head2.data)) {
      cur.next = head2
      head2 = head2.next
    }
    cur = cur.next
  }
  return head.next
}
```

为什么这个不工作啊