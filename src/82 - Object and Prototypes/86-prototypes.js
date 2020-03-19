function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}

Person.prototype.myName = function() {
	return `My name is ${this.name} ${this.surname}`;
};

const p1 = new Person('Daniel', 'Silva');
console.log(p1.myName());

// Cadeia de protótipos
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };
console.log(filho.attr1, filho.attr2, filho.attr3);

function Product(type, price) {
	this.type = type;
	this.price = price;
}

Product.prototype.discount = function(porcent) {
	return (this.price -= this.price * (porcent / 100)).toFixed(2);
};

const newProduct = new Product('Cup', 12.99);
console.log(newProduct);
console.log(newProduct.discount(10));

const glass = Object.create(Product.prototype, {
	type: {
		enumerable: true,
		writable: false,
		value: 'White Glass'
	},
	price: {
		enumerable: true,
		value: 12.75
	}
});

console.log(glass);
console.log(glass.discount(5));
