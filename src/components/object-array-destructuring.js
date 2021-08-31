let a, b, rest1;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest1] = [10, 20, 30, 40, 50];
console.log(rest1);


let aa, bb, rest2;
[aa, bb] = [10, 20];
console.log(aa); // 10
console.log(bb); // 20

[aa, bb, ...rest2] = [10, 20, 30, 40, 50];
console.log(aa); // 10
console.log(bb); // 20
console.log(rest2); // [30, 40, 50]

({ aa, bb } = { aa: 10, bb: 20 });
console.log(aa); // 10
console.log(bb); // 20


({aa, bb, ...rest2} = {aa: 10, bb: 20, c: 30, d: 40});
console.log(aa); // 10
console.log(bb); // 20
console.log(rest2); // {c: 30, d: 40}


//===================== 






//The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

 

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


let aaa, bbb;

[aaa, bbb] = [1, 2];
console.log(aaa); // 1
console.log(bbb); // 2


const foo2 = ['one', 'two'];

const [red2, yellow2, green2, blue2] = foo2;
console.log(red2); 
console.log(yellow2);  
console.log(green2);  
console.log(blue2);   