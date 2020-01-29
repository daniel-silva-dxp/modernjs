function rand(min = 1000, max = 5000) {
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}

function foo() {
	setTimeout(() => {
		console.log('foo');
	}, rand());
}

function bar() {
	setTimeout(() => {
		console.log('bar');
	}, rand());
}

function fooBar() {
	setTimeout(() => {
		console.log('fooBar');
	}, rand());
}

foo();
bar();
fooBar();
console.log('Callback');
