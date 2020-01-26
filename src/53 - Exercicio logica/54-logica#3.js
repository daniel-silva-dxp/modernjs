/**
 * Escreva uma função que receba (verificar se o valor é um Number) dois números e 
 * retorne: 
 * O número é divisível por 3 ? return foo
 * O número é divisível por 5 ? return bar
 * O número é divisível por 3 ou 5 ? return fooBar
 * O número NÃO é divisível por 3 ou 5 ? return barFoo
 * User a função com númers de 0 a 100 
 */

const foo = (x) => {
	if (typeof x !== 'number') {
		return `Valor inválido`;
	}
	if (x % 3 === 0 && x % 5 === 0) {
		return 'fooBar';
	}
	if (x % 3 === 0) {
		return 'foo';
	}
	if (x % 5 === 0) {
		return 'bar';
	}

	return x;
};

console.log(foo(15));
