function person(name, surname, age) {
	return {
		name,
		surname,
		age,
		myName() {
			return `My name is ${name}`;
		}
	};
}

const p = person('Daniel', 'Silva', 32);
console.log(p, p.myName());
