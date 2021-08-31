function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3,56,7,8,9,7,23];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));
const[first, , , fourth,fifth]=numbers;
console.log(sum(first,fourth,fifth ));


let parts = ['engine', 'wheel','handle','tyre','seats'];
let car = ['head', ...parts, 'diesel'];
console.log(car);

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
console.log(clonedObj);

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
