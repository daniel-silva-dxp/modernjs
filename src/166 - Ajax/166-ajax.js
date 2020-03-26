const xhr = new XMLHttpRequest();
//        Método        URL
xhr.open('GET', './data/alunos.json');
xhr.send(null);
xhr.onreadystatechange = function verificaAjax() {
	if (xhr.status === 200) {
		const alunos = JSON.parse(xhr.response);
		createTable(alunos);

		// console.log(xhr.responseText);
	} else if (xhr.status >= 400) {
		console.log(`code: ${xhr.status} | text: ${xhr.statusText}`);
	}
};

function createTable(alunos) {
	const lines = alunos.map((aluno) => {
		const tdName = document.createElement('td');
		tdName.innerHTML = aluno.nome;

		const tdNotas = document.createElement('td');
		tdNotas.innerHTML = aluno.notas;

		const tr = document.createElement('tr');

		tr.appendChild(tdName);
		tr.appendChild(tdNotas);

		return tr;
	});

	const table = document.createElement('table');
	lines.forEach((line) => table.appendChild(line));
	document.body.appendChild(table);
}
