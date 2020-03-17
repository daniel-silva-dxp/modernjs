const carro = {
	modelo: 'New Fiesta',
	preco: 41000,
	proprietario: {
		nome: 'Daniel',
		idade: 32,
		endereco: {
			logradouro: 'Rua RADL',
			numero: 100,
			bairro: 'Cidade Miguel Badra',
			cidade: 'Suzano',
			estado: 'SP'
		}
	},
	condutores: [
		{
			nome: 'Daniel',
			idade: 32
		},
		{
			nome: 'Flávia',
			idade: 25
		}
	],
	calcularValorDoSeguro: {}
};

console.log(carro);

//* Formas de se criar Objetos

// 1 - Literal

const obj1 = {};
console.log(obj1);

// 2 - Nativa

const obj2 = new Object();
console.log(obj2);

// 3 - Funções construtoras

function Produto(nome, preco, desc) {
	this.nome = nome;
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc);
	};
}

const prod1 = new Produto('Café', 12.69, 0.15);

console.log(prod1.getPrecoComDesconto().toFixed(2));

// 4 - Função Factory

function Funcionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return salarioBase / 30 * (30 - faltas);
		}
	};
}

const f1 = Funcionario('Daniel', 6500, 2);
console.log(f1.getSalario().toFixed(2));
