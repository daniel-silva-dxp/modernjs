const config = {
	url(id) {
		return `https://jsonplaceholder.typicode.com/users/${id}`;
	},
	metodo: 'GET',
	sucesso(response) {
		const user = JSON.parse(response);
		console.log(user);
	},
	erro(e) {
		console.log(`${e.code}: ${e.text}`);
	}
};

function getUser(config, id, callback) {
	const xhr = new XMLHttpRequest();

	xhr.open(config.metodo, config.url(id), true);
	xhr.onload = () => {
		if (xhr.status === 200) {
			const response = xhr.response;
			if (callback && typeof callback === 'function') {
				callback(response);
			}
		} else if (xhr.status >= 400) {
			config.erro({
				code: xhr.status,
				text: xhr.statusText
			});
		}
	};
	xhr.send();
}

getUser(config, 1, (user) => {
	config.sucesso(user);
	getUser(config, 2, (user) => {
		config.sucesso(user);
	});
});
