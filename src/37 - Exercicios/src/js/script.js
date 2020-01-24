const imc_list = [
	{ imc: 'Menor que 18.5', status: 'Abaixo do peso' },
	{ imc: 'Entre 18.5 e 24.9', status: 'Peso normal' },
	{ imc: 'Entre 25 e 29.9', status: 'Sobrepeso' },
	{ imc: 'Entre 30 e 34.9', status: 'Obesidade grau I' },
	{ imc: 'Entre 35 e 39.9', status: 'Obesidade grau II' },
	{ imc: 'Maior que 40', status: 'Obesidade grau III' }
];

const controller = (() => {
	return {
		table: document.querySelector('table tbody'),
		form: document.querySelector('#form'),
		notification: document.querySelector('.notification'),
		weight: document.querySelector('#weight'),
		height: document.querySelector('#height')
	};
})();

controller.notification.style.display = 'none';
controller.table.innerHTML = '';

imc_list.map((element) => {
	const tr = document.createElement('tr');
	const td_imc = document.createElement('td');
	const td_status = document.createElement('td');

	const imc_txt = document.createTextNode(`${element.imc}`);
	const status_txt = document.createTextNode(`${element.status}`);

	td_imc.appendChild(imc_txt);
	td_status.appendChild(status_txt);

	tr.appendChild(td_imc);
	tr.appendChild(td_status);

	controller.table.appendChild(tr);
});

function createNotificationSuccess(msg) {
	let notification_txt = document.createTextNode(msg);
	controller.notification.appendChild(notification_txt);
	controller.notification.style.display = 'block';
	controller.notification.classList.add('success');
}

function createNotificationError(msg) {
	let notification_txt = document.createTextNode(msg);
	controller.notification.appendChild(notification_txt);
	controller.notification.style.display = 'block';
	controller.notification.classList.add('error');
}

function clearNotification() {
	controller.notification.innerHTML = '';
	controller.notification.style.display = 'none';
}

function isValid(weight, height) {
	if (!weight) {
		clearNotification();
		createNotificationError(`Invalid weight`);
		return;
	}

	if (!height) {
		clearNotification();
		createNotificationError(`Invalid height`);
		return;
	}
	clearNotification();
}

function imcTable(imc) {
	if (imc >= 39.9) {
		return createNotificationSuccess(`IMC ${imc}: Obesity degree III`);
	}

	if (imc >= 34.9) {
		return createNotificationSuccess(`IMC ${imc}: Obesity degree II`);
	}

	if (imc >= 29.9) {
		return createNotificationSuccess(`IMC ${imc}: Obesity degree I`);
	}

	if (imc >= 24.9) {
		return createNotificationSuccess(`IMC ${imc}: Overweight`);
	}

	if (imc >= 18.5) {
		return createNotificationSuccess(`IMC ${imc}: Normal weight`);
	}

	if (imc < 18.5) {
		return createNotificationSuccess(`IMC ${imc}: Under weight`);
	}
}

function getImc(weight, height) {
	const imc = weight / height ** 2;
	return imc.toFixed(2);
}

controller.form.addEventListener('submit', (e) => {
	e.preventDefault();
	let weight = Number(controller.weight.value);
	let height = Number(controller.height.value);
	let imc = getImc(weight, height);
	isValid(weight, height);
	imcTable(imc);
	controller.weight.value = '';
	controller.height.value = '';
});
