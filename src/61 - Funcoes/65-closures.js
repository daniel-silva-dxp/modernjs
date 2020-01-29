let x = 'Global';

function out() {
	let x = 'Local';
	return function inside() {
		return x;
	};
}

let foo = out();
console.log(foo(), x);

function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2), add10(2));
