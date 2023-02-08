const income = +prompt('Enter your income in rubles')?.trim();

if (income >= 50000) {
	let taxes = income * .3;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income >= 15000 && income < 50000) {
	let taxes = income * .2;
	console.log(`Your taxes are ${taxes} rub`);
}
if (income < 15000) {
	let taxes = income * .13;
	console.log(`Your taxes are ${taxes} rub`);
}