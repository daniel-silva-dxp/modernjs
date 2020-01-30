function Person(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.myName = () => {
		return `My name is ${this.name} ${this.surname}`;
	};
}

let p = new Person('Daniel', 'Silva', 32);
console.log(p.myName());
