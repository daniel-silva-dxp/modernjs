function Account(agency, account) {
	this.agency = agency;
	this.account = account;
	let balance = 0;

	Object.defineProperty(this, 'balance', {
		enumerable: true,
		configurable: false,
		get: function() {
			return balance;
		},
		set: function(value) {
			balance = value;
		}
	});
}

Account.prototype.withdraw = function(value) {
	if (this.balance <= value) {
		console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
		return;
	}
	this.balance -= value;
};
Account.prototype.deposit = function(value) {
	this.balance += value;
};
Account.prototype.balance = function() {
	console.log(`Balance: R$${this.balance.toFixed(2)}`);
};

function CheckingAccount(agency, account) {
	Account.call(this, agency, account);
	let limit = 0;

	Object.defineProperty(this, 'limit', {
		enumerable: true,
		configurable: false,
		get: function() {
			return limit;
		},
		set: function(value) {
			limit = value;
		}
	});
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.requestLimit = function(request) {
	if (request.toLowerCase() !== 'sim') {
		return;
	}
	this.limit = this.balance * (10 / 100);
	console.log(`Balance: R$${this.balance.toFixed(2)} | Limit: R$${this.limit.toFixed(2)}`);
};
CheckingAccount.prototype.withdraw = function(value) {
	if (this.balance + this.limit < value) {
		console.log(`Insufficient funds: R$${this.balance.toFixed(2)}`);
		return;
	} else if (value > this.balance && value < this.balance + this.limit) {
		let diff = value - this.balance;
		this.limit -= diff;
	}
	this.balance -= value;
};

const cc = new CheckingAccount(100, 112215);

cc.deposit(150);
console.log(cc.balance);
cc.withdraw(151);
console.log(cc.balance);
cc.requestLimit('sim');
cc.withdraw(151);
console.log(cc.balance);
