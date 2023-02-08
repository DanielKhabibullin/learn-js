'use strict';
{
	const rain = Math.round(Math.random());
	//console.log('rain: ', rain);
	if (rain === 0) {
		alert('Take an umbrella!')
	} else {
		alert('It is not raining!')
	}
};

{
	const mathPoints = +prompt('Enter points in mathematics')?.trim();
	const russianPoints = +prompt('Enter points in russian language')?.trim();
	const informaticsPoints = +prompt('Enter points in informatics')?.trim();
	const totalPoints = mathPoints + russianPoints + informaticsPoints;
	if (isNaN(mathPoints) || isNaN(russianPoints) || isNaN(informaticsPoints)) {
		alert('Please, enter correct data');
		} else if (totalPoints >= 265) {
			alert('Congratulations, you passed on budget!');
		} else {
			alert("Don't worry, be happy");
		}
}
{
	const moneyAmount = +prompt('Enter amount of money(not less than 100 rub)')?.trim();
	if (isNaN(moneyAmount)) {
		alert('Please, enter correct data');
	} else if (moneyAmount % 100 === 0) {
		console.log("Please, don't forget the money in the ATM");
	} else {
		alert('Please, enter the amount in multiples of 100 rub');
	}
}