function foo(msg) {
	return msg;
}

console.log(foo('foo'));

//Argumentos object
function myConcat(separator) {
	let args = Array.prototype.slice.call(arguments, 1);
	return args.join(separator);
}

console.log(myConcat(', ', 'red', 'orange', 'blue'));

// Parâmetros default
function multiply(a, b) {
	b = typeof b !== 'undefined' ? b : 1;

	return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5, 1));
console.log(multiply(5));

// OU

function sum(a, b = 10) {
	return a + b;
}

console.log(sum(5, 5));
console.log(sum(5, 1));
console.log(sum(5));

function append(value, array = []) {
	array.push(value);
	return array;
}

console.log(append(1));
console.log(append(10));

// OU

function callSomething(thing = something()) {
	return thing;
}

function something() {
	return 'sth';
}

console.log(callSomething());
console.log(callSomething('STH'));

// Parâmetros por desestruturação
const person = {
	name: 'Daniel',
	surname: 'Silva',
	age: 32
};

function getPerson({ name, surname, age }) {
	return `Name: ${name}, Surname: ${surname}, Age: ${age}`;
}

console.log(getPerson(person));

// Parâmetro rest
function bar(x, ...args) {
	return args.map((args) => args * x);
}

console.log(bar(5, 10, 20, 30, 40, 50));
