const config = {
	url(id) {
		return `https://jsonplaceholder.typicode.com/users/${id}`;
	},
	metodo: 'GET'
};

async function getUser(config, id) {
	const users = await fetch(config.url(id));

	if (!users.ok) {
		throw new Error(`code: ${users.status} | text: ${users.statusText}`);
	}
	const user = await users.json();
	return user;
}

getUser(config, 1)
	.then((user) => {
		console.log(user);
		return getUser(config, 2);
	})
	.then((user) => {
		console.log(user);
		return getUser(config, 3);
	})
	.then((user) => {
		console.log(user);
	})
	.catch((e) => {
		console.log(e);
	});
