const config = {
	url(id) {
		return `https://jsonplaceholder.typicode.com/userss/${id}`;
	},
	metodo: 'GET'
};

function getUser(config, id) {
	return fetch(config.url(id)).then((data) => {
		if (!data.ok) {
			throw new Error(`code: ${data.status} | text: ${data.statusText}`);
		}
		return data.json();
	});
}

getUser(config, 1)
	.then((user) => {
		console.log(user);
		return getUser(config, 2);
	})
	.then((user) => {
		console.log(user);
	})
	.catch((e) => {
		console.log(e);
	});
