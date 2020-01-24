let container = document.querySelector('.container');
const date = new Date();
const options = {
	dateStyle: 'full',
	timeStyle: 'long'
};

const p = document.createElement('p');
const str_p = document.createTextNode(date.toLocaleDateString('pt-BR', options));
p.appendChild(str_p);
container.appendChild(p);
