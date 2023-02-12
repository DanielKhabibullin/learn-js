'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number = 0;
  number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number;
};

let number = getRandomIntInclusive(0, 100);
console.log('number: ', number);

const startGame = () => {
	while (true) {
		let userNumber = prompt('Enter number from 0 to 100');
		
		if (isNaN(userNumber)) {
			alert('Please, enter correct number');
			continue;
		}
		if (userNumber === null) {
			console.log('userNumber: ', userNumber);
			alert ('Come back again');
			break;
		}
		if (parseInt(userNumber) === number) {
			alert('Good job');
			break;
		} else if (parseInt(userNumber) > number) {
			alert('Less!');
		} else if (parseInt(userNumber) < number) {
			alert('More!');
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
