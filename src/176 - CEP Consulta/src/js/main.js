const consulta = (element) => document.querySelector(element);

const inputCep = consulta('#inputCEP');
inputCep.addEventListener('input', function(e) {
	e.preventDefault();
	let cep = this.value;
	let formatCep = cep.replace('-', '');

	if (formatCep.length >= 8) {
		const promise = getEndereco(formatCep);
		promise
			.then((dado) => {
				if (dado.erro) {
					throw new Error('CEP não existe');
				}
				viewEndereco(dado);
			})
			.catch((erro) => {
				console.log(`Error: ${erro}`);
			});
	}
});

async function getEndereco(cep) {
	const url = `https://viacep.com.br/ws/${cep}/json/`;
	const resposta = await fetch(url);

	if (!resposta.ok) {
		throw new Error(`Code: ${resposta.status} - Text: ${resposta.statusText} | ${cep}: Inválido`);
	}
	const json = await resposta.json();
	return json;
}

function viewEndereco(endereco) {
	const inputLogradouro = consulta('#inputLogradouro');
	const inputBairro = consulta('#inputBairro');
	const inputCidade = consulta('#inputCidade');
	const inputEstado = consulta('#inputEstado');

	inputLogradouro.value = endereco.logradouro;
	inputBairro.value = endereco.bairro;
	inputCidade.value = endereco.localidade;
	inputEstado.value = endereco.uf;
}
