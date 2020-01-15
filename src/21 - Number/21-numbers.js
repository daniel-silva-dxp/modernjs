let num1 = 10,
	num2 = 2.51;
const numbers = [ 1, 10, 20, 12, 76, 45 ];

console.log(Number.isInteger(num1)); // Verifica se o valor é um inteiro
console.log(Number.isInteger(num2));

// Objeto Math
console.log(Math.floor(num2)); // Arredonda o valor para baixo
console.log(Math.ceil(num2)); // Arredonda o valor para cima
console.log(Math.round(num2)); // Arredonda para o mais próximo
console.log(Math.max(...numbers)); // Retorna o maior valor recebido por parâmetro
console.log(Math.min(...numbers)); // Retorna o menor valor recebido por parâmetro
console.log(numbers[Math.round(Math.random() * 5)]);
