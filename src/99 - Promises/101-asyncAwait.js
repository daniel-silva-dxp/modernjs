function rand(min = 0, max = 3) {
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function foo(msg, temp) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof msg !== 'string') {
				reject('ERRO!');
			}
			resolve(msg);
		}, temp);
	});
}

// foo('Frase I', rand(1, 4))
// 	.then((value) => {
// 		console.log(value);
// 		return foo('Frase II', rand());
// 	})
// 	.then((value) => {
// 		console.log(value);
// 		return foo('Frase III', rand(1, 5));
// 	})
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

async function bar() {
	const fraseI = await foo('Frase I', rand(1, 4));
	console.log(fraseI);
	const fraseII = await foo('Frase II', rand());
	console.log(fraseII);
	const fraseIII = await foo('Frase III', rand(1, 5));
	console.log(fraseIII);
}
bar();
