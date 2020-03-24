function temp(min, max) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, temp) {
	return new Promise((resolve, reject) => {
		if (typeof msg !== 'string') {
			reject('ERRO!');
		}
		setTimeout(() => {
			resolve(msg);
		}, temp);
	});
}

espera('Frase 1', temp(1, 3))
	.then((response) => {
		console.log(response);
		return espera(2, temp(1, 3));
	})
	.then((response) => {
		console.log(response);
		return espera('Frase 3', temp(1, 3));
	})
	.then((response) => {
		console.log(response);
	})
	.catch((e) => {
		console.log(`Erro: ${e}`);
	});
