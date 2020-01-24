const date = new Date(); // Ordem dos parâmetros (Ano, Mês, Dia, Horas, Minutos, Segundos, Milissegundos)

console.log(
	date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	})
);

// Recuperando a Data
console.log(date.getDate()); // Retorna o dia do mês (1 à 31)
console.log(date.getMonth() + 1); // Retorna o mês (0 à 11)
console.log(date.getFullYear()); // Retorna o ano

// Adicionando ou removendo dias da data
console.log(date.toString());
date.setDate(date.getDate() - 365);
console.log(date.toString());

let dtUm = new Date(2019, 0, 16); // Ordem dos parâmetros (Ano, Mês, Dia, Horas, Minutos, Segundos, Milissegundos)
let dtDois = new Date(2020, 0, 16);

console.log(dtUm.toString(), dtDois.toString());

console.log(`Milissegundos dtUm: ${dtUm.getTime()}, Milissegundos dtDois: ${dtDois.getTime()}`); // Convertendo datas para realizar calculos

const milissegundosEntreDatas = Math.abs(dtUm.getTime() - dtDois.getTime()); // Converte o resultado em um número absoluto
console.log(milissegundosEntreDatas);

const milissegundosPorDia = 1 * 24 * 60 * 60 * 1000;
console.log(
	`O intervalo em dias entre dtUm e dtDois é: ${Math.round(milissegundosEntreDatas / milissegundosPorDia)} dias`
);
