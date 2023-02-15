'use strict';

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	let number = 0;
	number = Math.floor(Math.random() * (max - min + 1)) + min;
	// Максимум и минимум включаются
	return number;
}

const addRandomNumber = (arr) => {
	const number = getRandomIntInclusive(0, 10);
	const newArr = arr.slice(0);
	newArr.push(number);
	const result = newArr.reduce((sum, elem) => sum + elem, 0);
	if (result <= 50) {
		return addRandomNumber(newArr);
	} else {
		return newArr;
	}
};

const array = [1, 2, 3];
addRandomNumber(array);
console.log(addRandomNumber(array));
