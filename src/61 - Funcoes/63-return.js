// Retorno simples
function foo() {
	return `foo`;
}

console.log(foo());

// Interrompendo uma função com return
function counter() {
	// loop infinito
	for (let count = 1; ; count++) {
		console.log(`${count}A`);
		if (count === 5) {
			return;
		}
		console.log(`${count}B`);
	}
}

counter();

// Retornando uma função
function magic() {
	return function calc(x) {
		return x * 10;
	};
}

let answer = magic();
console.log(answer(10));

// Retornando objetos
function person(name, surname) {
	return { name, surname };
}

const p = person('Daniel', 'Silva');
console.log(p, typeof p);
