function Product(name, price, stock) {
	this.name = name;
	this.price = price;
	let myStock = stock;

	Object.defineProperty(this, 'stock', {
		enumerable: true,
		configurable: false,
		get: function() {
			return myStock;
		},
		set: function(value) {
			if (typeof value !== 'number') {
				throw { message: `Invalid value!` };
			}
			myStock = value;
		}
	});
}

const p1 = new Product('Camiseta', 20, 5);
console.log(p1.stock);
p1.stock = 10;
console.log(p1.stock);
