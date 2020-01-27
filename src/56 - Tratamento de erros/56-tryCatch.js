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
