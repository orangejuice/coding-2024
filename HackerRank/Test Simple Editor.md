```js
function processData(input) {
  let operations = input.split('\n').slice(1).map(line => line.split(' '))
  let records = [], editor = ''
  for (let [op, content] of operations) {
    switch (op) {
      case '1': {
        records.push('+' + content)
        editor += content
      } break
      case '2': {
        records.push('-' + editor.slice(-content))
        editor = editor.slice(0, -content)
      } break
      case '3': console.log(editor[content - 1]); break
      case '4': {
        let [, lastOp, lastContent] = records.pop().match(/(\-|\+)(.+)/)
        if (lastOp == '+') editor = editor.slice(0, -lastContent.length)
        else editor += lastContent
      }
    }
  }
}
```

