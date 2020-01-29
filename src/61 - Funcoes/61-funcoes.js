// Declaração de função
function foo() {
	return 'foo';
}
console.log(foo());

// Expressão de função
let bar = function() {
	return 'bar';
};
console.log(bar());

//Callback
function fooBar(callback) {
	return `Callback: ${callback()}`;
}
console.log(fooBar(bar));

// Arrow function (destructing parameter)
const names = [ 'Daniel', 'Flávia', 'Matheus', 'Fabiana' ];
console.log(names.map(({ length }) => length));

// Funções construtoras
function Person() {
	this.age = 0;

	this.growUp = () => {
		this.age++;
	};
}

var p = new Person();
console.log(p.age);
p.growUp();
console.log(p.age);

// Em objetos
const person = {
	name: 'Daniel',
	surname: 'Silva',
	age: 32,
	myName() {
		console.log(`My name is ${this.name}`);
	}
};

person.myName();
