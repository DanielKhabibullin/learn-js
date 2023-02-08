'use strict';

const income = +prompt('Enter your income in rubles')?.trim();
if (isNaN(income)) {
	alert('Please, enter correct data');
}
const calculateTax = (income) => {
	if (income < 15000) {
		let taxes = income * .13;
		console.log(`Your taxes are ${taxes} rub`);
	} else if (income >= 50000) {
		let taxes = income * .3;
		console.log(`Your taxes are ${taxes} rub`);
	} else if (income >= 15000) {
		let taxes = income * .2;
		console.log(`Your taxes are ${taxes} rub`);
	}
}
calculateTax(income);