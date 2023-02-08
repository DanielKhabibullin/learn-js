'use strict';
const income2 = +prompt('Enter your income in rubles')?.trim();

if (isNaN(income2)) {
	alert('Please, enter correct data');
}

if (income2 > 50000) {
	let taxes = 15000 * .13 + 35000 * .2 + (income2 - 50000) * .3;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income2 > 15000 && income2 <= 50000) {
	let taxes = 15000 * .13 + (income2 - 15000) * .2;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income2 <= 15000) {
	let taxes = income2 * .13;
	console.log(`Your taxes are ${taxes} rub`);
}