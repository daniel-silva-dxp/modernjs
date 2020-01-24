const str = [
	{ tag: 'h1', text: 'Daniel Silva' },
	{ tag: 'h4', text: 'Font-end developer' },
	{
		tag: 'p',
		text:
			'Sou um desenvolvedor front-end com uma mentalidade centrada no usuário e uma sensibilidade ao design para resultar no ajuste perfeito.'
	}
];

let container = document.querySelector('.container');

str.forEach((element) => {
	let { tag, text } = element;
	let newElement = document.createElement(tag);
	let strElement = document.createTextNode(text);

	newElement.appendChild(strElement);
	container.appendChild(newElement);
});
