'use strict';

const string3 = prompt('Enter some sentense')?.trim();
const stringReverse = (string3) => {
	if (string3 != '' && typeof str !== 'undefined') {
		let i = 0;
		let result = '';
		while (i < string3.length) {
			result = `${string3[i]}${result}`;
			i += 1;
		}
		return result;
	} else {
		alert('Please, enter correct data');
	}
};

const newString3 = stringReverse(string3);
console.log('result: ', newString3);
