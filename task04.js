'use strict';

function chooseYears(m, n) {
	
	let arr = [];
	if (n < m) {
		return chooseYears(n, m);
	}
	for (let i = m; i <= n; i++) {
		if (i % 4 === 0) {
		arr.push(i);
		}
	}
	return arr;
};

console.log('chooseYears: ', chooseYears(-1500, -1400));


