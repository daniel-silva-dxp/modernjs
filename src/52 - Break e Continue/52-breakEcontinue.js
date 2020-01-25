const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Imprimindo números pares
for (let number of numbers) {
	if (number % 2 != 0) {
		continue;
	}
	console.log(number);
}

for (let number of numbers) {
	if (number === 5) {
		console.log(number);
		break;
	}
}
