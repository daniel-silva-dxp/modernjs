const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ];

pilotos.push('Verstappen'); // Adiciona valores ao final do array - FILA
console.log(`Push: ${pilotos}`);
pilotos.pop(); // Remove o ultimo valor do array - FILA
console.log(`Pop: ${pilotos}`);
pilotos.unshift('Hamilton'); // Adiciona valores ao inicio do array - PILHA
console.log(`Unshift: ${pilotos}`);
pilotos.shift(); // Remove o primeiro valor do array - PILHA
console.log(`Shift: ${pilotos}`);

//Add
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(`Splice Add: ${pilotos}`);

//Remove
pilotos.splice(3, 1);
console.log(`Splice remove: ${pilotos}`);

//Métodos que retornam novo array
const algunsPilotos = pilotos.slice(2); //Retorna um novo array à partir do indice
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);

// Ordenando array
const pessoas = [ 'Fabiana', 'Flávia', 'Matheus', 'Daniel' ];
const nums = [ 12, 40, 3, 7, 19, 1 ];

console.log(`Padrão: ${pessoas}`);
console.log(`Ordenados: ${pessoas.sort()}`);
console.log(`Padrão: ${nums}`);
console.log(`Ordenados: ${nums.sort((a, b) => a - b)}`);
