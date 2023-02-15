'use strict';

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let number = 0;
	number = Math.floor(Math.random() * (max - min + 1)) + min;
	// Максимум и минимум включаются
	return number;
}

const number = getRandomIntInclusive(0, 100);
console.log('number: ', number);

function isNum(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

const guessNumber = () => {
	let userNumber = prompt('Enter number from 0 to 100');
	if (userNumber === null) {
		alert('Come back again');
	} else if (isNum(userNumber)) {
		userNumber = +userNumber;
		if (parseInt(userNumber) > number) {
			alert('Less!');
		} else if (parseInt(userNumber) < number) {
			alert('More!');
		} else if (parseInt(userNumber) === number) {
			alert('Good job');
			return;
		} else {
			alert('Please, enter correct number');
		}
		return guessNumber();
	}
};

guessNumber();
