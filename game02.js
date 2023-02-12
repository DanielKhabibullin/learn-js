'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number = 0;
  number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number;
};



const startGame = () => {

// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается
let start = prompt('Enter first number ');
let end = prompt('Enter second number ');
let number = getRandomIntInclusive(start, end);
console.log('number: ', number);
let answerArr = [];
let tryAmount = Math.floor((end - start + 1) * 0.3);
console.log('tryAmount: ', tryAmount);
	while (true) {

		let userNumber = prompt(`Let's play the Game. Find random number from ${start} to ${end} inclusive both`);
		
		if (isNaN(parseInt(userNumber))) {
			alert('Please, enter correct number');
			break;
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
			answerArr.push(userNumber);
			console.log('answerArr: ', answerArr);
		} else if (parseInt(userNumber) < number) {
			alert('More!');
			answerArr.push(userNumber);
			console.log('answerArr: ', answerArr);
		} else if (tryAmount > answerArr.length) {
			alert('More!');

			break;
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
