let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

//TIPOS EM JS - ARRAY
const valores = [ 7.7, 8.9, 6.3, 9.2 ];

console.log(valores, valores[0], valores[3]);
console.log(valores.length); // Retorna o tamanho do array
valores.push({ id: 3 }, false, null, 'teste'); // Adiciona valores ao final do array - FILA
console.log(valores);
valores.pop(); // Remove o ultimo valor do array - FILA
valores.unshift('Daniel'); // Adiciona valores ao inicio do array - PILHA
valores.shift(); // Remove o primeiro valor do array - PILHA
console.log(valores);
console.log(aprovados.sort()); // Altera o array de forma ordenada

delete valores[4]; // Deleta um valor pelo indice
console.log(valores);

aprovados.splice(1, 1); // Nesta linha está removendo um elemento do array (indice, quantidadeDeElementosExcluidos)
console.log(aprovados);

aprovados.splice(0, 1, 'Daniel', 'Matheus'); // Nesta linha está removendo um elemento do array e adicionando dois elementos (indice, quantidadeDeElementosExcluidos, novoElemento, novoElemento)
console.log(aprovados);
