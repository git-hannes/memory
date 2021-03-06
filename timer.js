let minutes = 00;
let seconds = 00;
let tens = 00;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let Interval;
let appendClicks = document.getElementById("clicks");
let appendExtraClicks = document.getElementById("extraClicks");
let clicks = 0;

function startTimer() {

	clearInterval(Interval);
	Interval = setInterval(startTimer, 10);

	function startTimer() {
		tens++;
		if (tens > 99) {
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
		}

		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}
		
		if (seconds > 59) {
			seconds = 0;
			minutes++;
			appendSeconds.innerHTML = "0" + seconds;
			appendMinutes.innerHTML = "0" + minutes;
		}
	}
}

function stopTimer() {
	clearInterval(Interval);
}

function updateClicks() {
	clicks++;
	appendClicks.innerHTML = clicks;
}

function updateExtraClicks() {
	extraClicks = clicks - images.length;
	appendExtraClicks.innerHTML = "(+" + extraClicks + ")";
}

function clearTimer() {
	tens = seconds = minutes = 0;
	appendSeconds.innerHTML = "00";
	appendMinutes.innerHTML = "00";
}

function clearClicks() {
	clicks = 0;
	appendClicks.innerHTML = "0";
}

function clearExtraClicks() {
	extraClicks = 0;
	appendExtraClicks.innerHTML = "";
}

