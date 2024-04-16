```js
function processData(input) {
  let lines = input.split("\n")
  let sorted = lines.slice(1).map((str) => {
    let split = str.split(" ")
    return { name: split[0], score: parseInt(split[1]) }
  }).sort((p1, p2)=> {
    if(p1.score == p2.score) return p1.name < p2.name ? -1 : 1
    else return p2.score - p1.score 
  }).map(p=>p.name + " " + p.score).join("\n")
  console.log(sorted)
}
```

