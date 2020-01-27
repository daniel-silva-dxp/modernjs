//Entendendo tratamento de erros com
//try, catch e throw
function tratarErro(erro) {
	throw `${erro} Erro na execução`;
}

function imprimirNome(obj) {
	try {
		// Tratar um possível erro
		console.log(obj.name.toUpperCase() + '!!!');
	} catch (e) {
		//Lançar o tipo de erro
		tratarErro(e);
	} finally {
		//Sempre será executado
		console.log('Finally');
	}
}

const obj = { name: 'Daniel Silva' };

imprimirNome(obj);

var tanque = 999;
var abastecer = function() {
	if (tanque < 1000) {
		tanque++;
	} else {
		throw { message: 'Tanque ja esta cheio' };
	}
};

try {
	abastecer();
	abastecer();
} catch (e) {
	console.log(e.message);
}

function sum(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw { message: 'Is not a number' };
	}
	return x + y;
}

try {
	console.log(sum(1, '2'));
} catch (e) {
	console.log(e.message);
}

function getTime(date) {
	if (date && !(date instanceof Date)) {
		throw { message: `${date}: Is not instance of Date` };
	}

	if (!date) {
		date = new Date();
	}

	return date.toLocaleTimeString('pt-BR', { hour12: false });
}

try {
	const date = new Date('01-01-1970 12:58:12');
	const time = getTime(date);
	console.log(time);
} catch (e) {
	console.log(e.message);
} finally {
	console.log(getTime());
}
