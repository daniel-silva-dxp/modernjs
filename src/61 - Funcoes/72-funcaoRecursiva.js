function loop(max) {
	if (max >= 10) {
		return;
	}
	max++;
	console.log(max);
	loop(max);
}

loop(-10);
