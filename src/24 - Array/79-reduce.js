// reduce() de um array de arrays
const arr = [ [ 0, 1 ], [ 2, 3 ], [ 4 ], [ 5 ] ];
const arrConcat = arr.reduce((acumulador, atual) => acumulador.concat(atual));

console.log(arr);
console.log(arrConcat);

// Contando valores iguais em um objeto
const names = [ 'Daniel', 'Matheus', 'Flávia', 'Daniel', 'Daniel', 'Flávia' ];
const contedNames = names.reduce((acumul, current) => {
	if (current in acumul) {
		acumul[current]++;
	} else {
		acumul[current] = 1;
	}
	return acumul;
}, {});

console.log(contedNames);

// Agrupando objetos por uma propriedade
const pessoas = [ { nome: 'Alice', idade: 21 }, { nome: 'Max', idade: 20 }, { nome: 'Jane', idade: 20 } ];

function groupFor(objArr, propertie) {
	return objArr.reduce((acc, obj) => {
		let key = obj[propertie];
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
}

console.log(groupFor(pessoas, 'idade'));

const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// Retornando um array com números pares
const pair = numbers.reduce((acumulator, current) => {
	if (current % 2 === 0) {
		acumulator.push(current);
	}
	return acumulator;
}, []);
console.log(pair);

// Retornando um array com o dobro dos valores
const double = numbers.reduce((acumulador, current) => {
	acumulador.push(current * 2);
	return acumulador;
}, []);

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

// Retornando a pessoa mais velha
const older = peoples.reduce((acumulator, value) => {
	if (acumulator.age > value.age) {
		return acumulator;
	}
	return value;
});

console.log(older);
