let container = document.querySelector('.container');

const date = new Date();

function formatDateTime(date) {
	return {
		day: date.getDay(),
		date: date.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		}),
		time: date.toLocaleTimeString('pt-BR')
	};
}

function dayWeek(day) {
	const days = {
		0: () => 'Domingo',
		1: () => 'Segunda-feira',
		2: () => 'Terça-feira',
		3: () => 'Quarta-feira',
		4: () => 'Quinta-feira',
		5: () => 'Sexta-feira',
		6: () => 'Sábado'
	};
	return days[day]();
}

((day, date, time) => {
	const p = document.createElement('p');
	const str_p = document.createTextNode(`${day}, ${date} às ${time}`);

	p.appendChild(str_p);
	container.appendChild(p);
})(dayWeek(formatDateTime(date).day), formatDateTime(date).date, formatDateTime(date).time);
