const soundFile = new Audio('static/audio/sandreks.m4a');
const savedThemePref = localStorage.getItem('theme');

if (savedThemePref !== null) {
	enableDarkMode(savedThemePref === 'dark');
}

function enableDarkMode(isDarkMode) {
	if (isDarkMode) {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.querySelector('#day-button').style.display = 'flex';
		document.querySelector('#night-button').style.display = 'none';
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		document.querySelector('#day-button').style.display = 'none';
		document.querySelector('#night-button').style.display = 'flex';
	}
	localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function pronounceName() {
	soundFile.play();
}
