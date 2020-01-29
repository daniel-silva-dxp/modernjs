const input = document.querySelector('.assignment');
const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

const assignment = JSON.parse(localStorage.getItem('assignment_list')) || [];

function renderAssignments() {
	wrap.innerHTML = '';
	for (let todo of assignment) {
		const li = document.createElement('li');
		const strLi = document.createTextNode(todo);

		li.appendChild(strLi);
		createBtnRemove(li);
		wrap.appendChild(li);
		clearInput();
	}
}
renderAssignments();

function clearInput() {
	input.value = '';
	input.focus();
}

function createBtnRemove(element) {
	element.innerHTML += ' ';
	const btn = document.createElement('span');
	btn.innerHTML = ' delete';
	btn.classList.add('icon-doc-remove');
	element.appendChild(btn);
}

function addAssignment() {
	let str = input.value;
	assignment.push(str);
	console.log(assignment);
	renderAssignments();
	saveToStorage();
	clearInput();
}

input.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		addAssignment();
	}
});

btn.addEventListener('click', () => {
	addAssignment();
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('icon-doc-remove')) {
		e.target.parentElement.remove();
	}
});

function saveToStorage() {
	localStorage.setItem('assignment_list', JSON.stringify(assignment));
}
