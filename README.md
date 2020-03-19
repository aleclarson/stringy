# @alloc/stringy

Stringify a value into a minimal, readable format.

```js
var stringy = require('@alloc/stringy')

function inspect(value) {
  console.log(stringy(value))
}

inspect({
  a: 1,
  b: 2,
})
// a = 1
// b = 2

inspect({
  items: [1, 2, 3],
  count: 3,
})
// items =
//   - 1
//   - 2
//   - 3
// count = 3

inspect({
  user: {
    name: 'Alec',
    age: 23,
  }
})
// user =
//   name = "Alec"
//   age = 23

inspect(function() {
  return 1 + 1
})
// [object Function]
```

