let workHours = 0;
let startTimer;
let continueTimer;

const html = document.querySelector('html');
const timer = document.querySelector('.timer');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

html.addEventListener('click', (e) => {
	if (e.target.classList.contains('play')) {
		startTimer = setInterval(() => {
			workHours++;
			timer.innerHTML = timeFormat(workHours);
		}, 1000);
		play.style.display = 'none';
		pause.style.display = 'inline-block';
	}

	if (e.target.classList.contains('pause')) {
		clearInterval(startTimer);
		clearInterval(continueTimer);

		play.style.display = 'inline-block';
		pause.style.display = 'none';
	}

	if (e.target.classList.contains('reset')) {
		clearInterval(startTimer);
		clearInterval(continueTimer);

		timer.innerHTML = '00:00:00';
		workHours = 0;

		play.style.display = 'inline-block';
		pause.style.display = 'inline-block';
	}
});

var timeFormat = function(counter) {
	let display = new Date(counter * 1000);
	return display.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'UTC'
	});
};
