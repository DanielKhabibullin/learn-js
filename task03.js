'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number = 0;
  number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number;
}

const generateArr = (a, n, m) => {
	let result = [];
	for (let i = 0; i < a; i++ ) {
		if (n > m) {
			result[i] = getRandomIntInclusive(m, n);
		} else {
			result[i] = getRandomIntInclusive(n, m);
		}
	}
	return result;
}
console.log(generateArr(20, -10, 10));