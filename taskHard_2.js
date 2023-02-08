'use strict';

const income = +prompt('Enter your income in rubles')?.trim();
if (income >= 50000) {
	let taxes = 15000 * .13 + 35000 * .2 + (income - 50000) * .3;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income >= 15000 && income < 50000) {
	let taxes = 15000 * .13 + (income - 15000) * .2;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income < 15000) {
	let taxes = income * .13;
	console.log(`Your taxes are ${taxes} rub`);
}