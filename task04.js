'use strict';

function chooseYears(m, n) {
	
	let arr = [];
	if (n < m) {
		return chooseYears(n, m);
	}
	for (let i = m; i <= n; i++) {
		if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
		arr.push(i);
		}
	}
	return arr;
};

console.log('chooseYears: ', chooseYears(2000, 2150));


