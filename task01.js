'use strict';

const generateArr1 = (a) => {
	let result1 = [];
	for (let i = 0; i < a; i++ ) {
		result1[i] = Math.round(Math.random() * 100);
	};
	return result1;
}
console.log(generateArr1(100));