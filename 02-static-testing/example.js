/* if we keep out of fashion formating : prettier wirte in fashion way.*/
let x = 1

function foo() {
  var x = 2
  var y = x
  // eslint-disable-next-line no-console
  console.log(y) /* testing  code */
}

let y = x
// eslint-disable-next-line no-console
console.log(y) /* testing  code */
foo()