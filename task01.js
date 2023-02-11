'use strict';

const generateArr = (a) => {
	let result = [];
	for (let i = 0; i < a; i++ ) {
		result[i] = Math.round(Math.random() * 100);
	};
	return result;
}
console.log(generateArr(100));