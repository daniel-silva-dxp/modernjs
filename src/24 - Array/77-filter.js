const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

const maiorQue10 = numbers.filter((number) => number > 10);
console.log(maiorQue10);

const produtos = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'iPad Pro', preco: 4199, fragil: true },
	{ nome: 'Copo de Vidro', preco: 12.49, fragil: true },
	{ nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(produtos.filter((p) => p.preco >= 500 && p.fragil));

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

// Retornando nomes com 5 letras ou mais
const fiveLetter = peoples.filter((people) => people.name.length >= 5);
console.log(fiveLetter);

// Retornando pessoas com mais de 40 anos
const age = peoples.filter((people) => people.age > 40);
console.log(age);

// Retornando pessoas cujo nome termina com a letra A
const letterA = peoples.filter((people) => people.name.toLowerCase().endsWith('a'));
console.log(letterA);
