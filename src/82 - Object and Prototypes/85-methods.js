const product = {
	product: 'Cup',
	price: 1.8
};

const newProduct = { ...product };
newProduct.product = 'Juice bottle';
newProduct.price = 12.99;

console.log(product);
console.log(newProduct);

const pessoa = {
	nome: 'Daniel',
	idade: 32,
	peso: 90
};

console.log(Object.keys(pessoa)); // Retorna um array com as chaves do objeto recebido por parâmetro
console.log(Object.values(pessoa)); // Retorna um array com os valores de cada chave do objeto recebido por parâmetro
console.log(Object.entries(pessoa)); // Retorna um array composto de outros arrays com os registros do objeto recebido por parâmetro

Object.entries(pessoa).forEach((element) => {
	console.log(`${element[0]}: ${element[1]}`);
});

//Ou

Object.entries(pessoa).forEach(([ chave, valor ]) => {
	console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true, // Permite enumerar o valor?
	writeble: false, // Permite alterar o valor?
	value: '11/07/1987'
});

pessoa.dataNascimento = '01/01/2018';
console.log(pessoa.dataNascimento);

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };

const obj = Object.assign(dest, o1, o2); // Atribui os valores os outros objetos no primeiro parâmetro

console.log(obj);

Object.freeze(obj); // Bloqueia as alterações do objeto recebido por parâmetro
obj.c = 1234;
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(pessoa, 'dataNascimento')); // Retorna as propriedades de um atributo
