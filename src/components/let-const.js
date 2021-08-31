/*
let a;
let a; // ERROR

try{
	for(let i = 0; i < 10; i++) { console.log(i) }
	for(let i = 0; i < 10; i++) { console.log(i) }

	console.log(i) // ERROR: i is not defined
} catch(e) {
	console.log(e.message)
}


const notchange = 0;
notchange = notchange + 1; // ERROR



const first = {};

const second = {};
second.a = 'change constant value'; // NO ERROR
console.log(JSON.stringify(second)); 

first = second; // Here we get ERROR!
*/