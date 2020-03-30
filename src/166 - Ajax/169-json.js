(() => {
	const config = {
		url: 'https://jsonplaceholder.typicode.com/users',
		metodo: 'GET',
		sucesso(response) {
			const users = JSON.parse(response);
			createTable(users);
		},
		erro(e) {
			const msg = document.createTextNode(`${e.code}: ${e.text}`);
			selector('section').appendChild(msg);
		}
	};

	const selector = (selector) => document.querySelector(selector);
	const create = (element) => document.createElement(element);

	function ajax(config) {
		const xhr = new XMLHttpRequest();

		xhr.open(config.metodo, config.url, true);
		xhr.onload = () => {
			if (xhr.status === 200) {
				config.sucesso(xhr.response);
			} else if (xhr.status >= 400) {
				config.erro({
					code: xhr.status,
					text: xhr.statusText
				});
			}
		};
		xhr.send();
	}

	function createTable(users) {
		const table = selector('table');

		const lineUser = users.map((user) => {
			const tdNome = create('td');
			tdNome.innerHTML = user.name;

			const tdEmail = create('td');
			tdEmail.innerHTML = user.email;

			const tdTel = create('td');
			tdTel.innerHTML = user.phone;

			const tdSite = create('td');
			tdSite.innerHTML = user.website;

			const tr = create('tr');
			tr.appendChild(tdNome);
			tr.appendChild(tdEmail);
			tr.appendChild(tdTel);
			tr.appendChild(tdSite);

			return tr;
		});

		lineUser.forEach((line) => table.appendChild(line));
	}

	ajax(config);
})();
