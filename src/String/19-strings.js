let myName = 'Daniel Silva';

console.log(myName);
console.log(`caracter na posição: ${myName.indexOf('e')}`); // indexOf retorna o índice do parâmetro
console.log(`caracter da posição: ${myName.charAt(3)}`); // charAt retorna o elemento na posição do índice indicado por parâmetro
console.log(`código da tabela ascii: ${myName.charCodeAt('3')}`); // charCodeAt retorna o código da tabela ascii
console.log(myName.slice(0, 7)); // Devolve um trecho da string iniciada e terminada nos índices passados por parâmetro
