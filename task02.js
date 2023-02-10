'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue1 = (arr) => {
	let sum = 0;
	// for (let i = 0; i < arr.length; i += 1) {
	// 	sum += arr[i];
	// }
	for (const elem in arr) {
		sum += arr[elem];
	}
	return sum / arr.length;
};

getAverageValue1(allCashbox);
console.log('getAverageValue: ', getAverageValue1(allCashbox));

const getAverageValue2 = (arr) => arr
.reduce((a, b) => (a + b)) / arr.length;

getAverageValue2(allCashbox);
console.log('getAverageValue: ', getAverageValue2(allCashbox));
