function Product(name, price, stock) {
	this.price = price;

	Object.defineProperties(this, {
		name: {
			enumerable: true, // Permite exibição do atributo
			value: name, // Atribuindo valor ao atributo
			writable: false, // Valor não pode ser alterado
			configurable: false // Bloqueia as configurações do atributo
		},
		stock: {
			enumerable: true, // Permite exibição do atributo
			value: stock, // Atribuindo valor ao atributo
			writable: false, // Valor não pode ser alterado
			configurable: false // Bloqueia as configurações do atributo
		}
	});
}

const p1 = new Product('Camiseta', 20, 5);
console.log(p1);
