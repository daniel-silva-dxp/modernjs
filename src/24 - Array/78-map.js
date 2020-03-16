const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

const double = numbers.map((number) => number * 2);
console.log(double);

const peoples = [
	{ name: 'Daniel', age: 32 },
	{ name: 'Matheus', age: 4 },
	{ name: 'Flávia', age: 26 },
	{ name: 'Fabiana', age: 28 },
	{ name: 'Laenis', age: 60 },
	{ name: 'Mario', age: 62 },
	{ name: 'Ana', age: 18 },
	{ name: 'Leda', age: 22 },
	{ name: 'Luiz', age: 42 }
];

// Adicionando um id para os objetos
const newPeople = peoples.map((obj, index) => {
	const newObj = { ...obj };
	newObj.id = index + 1;
	return newObj;
});
console.log(newPeople);
