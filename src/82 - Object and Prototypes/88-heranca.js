function Product(type, price, amount) {
	this.type = type;
	this.price = price;

	Object.defineProperty(this, 'amount', {
		enumerable: true,
		configurable: false,
		get: function() {
			return amount;
		},
		set: function(value) {
			if (typeof value !== 'number') {
				throw { message: `Invalid value!` };
			}
			amount = value;
		}
	});
}

Product.prototype.increase = function(percent) {
	this.price += this.price * (percent / 100);
};
Product.prototype.discount = function(percent) {
	this.price -= this.price * (percent / 100);
};

// Herdando as características de Product
function Tshirt(type, price, amount, color) {
	Product.call(this, type, price, amount);
	this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype); // Definindo Product.prototype em Tshirt.prototype
Tshirt.prototype.constructor = Tshirt; // Definindo Tshit como constructor padrão

function Glass(type, price, amount, material) {
	Product.apply(this, [ type, price, amount ]);
	this.material = material;
}

Glass.prototype = Object.create(Product.prototype);
Glass.prototype.constructor = Glass;

const newTshirt = new Tshirt('Slim', 199.9, 2, 'Black');
const newGlass = new Glass('Glass of water', 12.29, 15, 'Plastic');

console.log(newTshirt);
console.log(newGlass);

newTshirt.increase(7);
newGlass.discount(5);

console.log(newTshirt);
console.log(newGlass);
