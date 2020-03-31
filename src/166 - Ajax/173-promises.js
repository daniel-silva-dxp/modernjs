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
		return `${e.code}: ${e.text}`;
	}
};

function getUser(config, id) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(config.metodo, config.url(id), true);
		xhr.onload = () => {
			if (xhr.status === 200) {
				const response = xhr.response;
				resolve(response);
			} else if (xhr.status >= 400) {
				reject(
					config.erro({
						code: xhr.status,
						text: xhr.statusText
					})
				);
			}
		};
		xhr.send();
	});
}

getUser(config, 1)
	.then((user) => {
		console.log(JSON.parse(user));
		return getUser(config, 2);
	})
	.then((user) => {
		console.log(JSON.parse(user));
	})
	.catch((e) => {
		console.log(e);
	});
