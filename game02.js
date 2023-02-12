'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number = 0;
  number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number;
};



const startGame = () => {

	let start = prompt('Enter first number ');
	let end = prompt('Enter second number ');
	let number = getRandomIntInclusive(start, end);
	console.log('number: ', number);
	let answerArr = [];
	let tryAmount = Math.floor((end - start + 1) * 0.3);
	console.log('tryAmount: ', tryAmount);
	while (true) {

		let userNumber = prompt(`Let's play the Game. Find random number from ${start} to ${end} inclusive both`);
		
		if (isNaN(userNumber)) {
			alert('Please, enter correct number!');
			continue;
		}
		if (userNumber === null) {
			console.log('userNumber: ', userNumber);
			alert ('Come back again!');
			break;
		}
		if (start === 50 && end === 100) {
			tryAmount = 15;
			continue;
		}
		if (answerArr.length >= tryAmount) {
			alert('Tries are over');
			break;
		}
		if (answerArr.includes(userNumber)) {
			alert('You entered this number already');
			continue;
		}
		if (parseInt(userNumber) === number) {
			alert('Good job');
			break;
		} else if (parseInt(userNumber) > number) {
			alert('Less!');
			answerArr.push(userNumber);
			console.log('answerArr: ', answerArr);
		} else if (parseInt(userNumber) < number) {
			alert('More!');
			answerArr.push(userNumber);
			console.log('answerArr: ', answerArr);
		}
		
	}
};

startGame();

// const handlers = [
//   { check: value => value === null, toContinue: false, text: "Bye bye :)" },
//   { check: value => isNaN(parseInt(value)), toContinue: true, text: "Enter please number" },
//   { check: value => parseInt(value) === number, toContinue: false, text: "You win" },
//   { check: value => parseInt(value) > number, toContinue: true, text: "Your number more" },
//   { check: value => parseInt(value) < number, toContinue: true, text: "Your number less" }
// ];

// let isGuessing = true;
// while (isGuessing) {
//   const value = prompt("Enter the number");
//   const matchedHandler = handlers.find(handler => handler.check(value));
//   isGuessing = matchedHandler.toContinue;
//   alert(matchedHandler.text);
// }
