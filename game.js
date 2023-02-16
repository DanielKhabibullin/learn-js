'use strict';
(() => {
	const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	// const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];


	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		let number = 0;
		number = Math.floor(Math.random() * (max - min + 1)) + min;
		return number;
	};

	// const getFigure = lang => {
	// };

	const game = (language) => {
		const result = {
			player: 0,
			computer: 0,
			tie: 0,
			round: 0,
		};
		// const lang = language === 'EN' || language ==='ENG' ?
		// 	FIGURES_ENG : FIGURES_RUS;

		return function start() {
			let userAnswer = prompt('rock, scissors, paper?');
			if (userAnswer === null) {
				const endGame = confirm('Are you sure to exit?');
				if (endGame) {
					alert(`Result: \ncomputer - ${result.computer}
you - ${result.player}\nTie - ${result.tie}\nRounds - ${result.round}`);
				} else {
					return start();
				}
			}
			userAnswer = userAnswer.slice(0, 1).toLowerCase();
			const answers = [...FIGURES_ENG];
			const computerAnswer = answers[getRandomIntInclusive(0, 2)].slice(0, 1);
			console.log(userAnswer, computerAnswer);
			if (userAnswer === computerAnswer) {
				result.tie++;
				result.round++;
				alert(`Tie!\nResult: \ncomputer - ${result.computer}
you - ${result.player}`);
				return start();
			} else if (userAnswer === 'r' && computerAnswer === 's') {
				result.player++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[0]}.\nComputer choose ${FIGURES_ENG[1]}.
You win.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else if (userAnswer === 'r' && computerAnswer === 'p') {
				result.computer++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[0]}.\nComputer choose ${FIGURES_ENG[2]}.
You lost.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else if (userAnswer === 's' && computerAnswer === 'r') {
				result.computer++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[1]}.\nComputer choose ${FIGURES_ENG[0]}.
You lost.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else if (userAnswer === 's' && computerAnswer === 'p') {
				result.player++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[1]}.\nComputer choose ${FIGURES_ENG[2]}.
You win.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else if (userAnswer === 'p' && computerAnswer === 's') {
				result.computer++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[2]}.\nComputer choose ${FIGURES_ENG[1]}.
You lost.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else if (userAnswer === 'p' && computerAnswer === 'r') {
				result.player++;
				result.round++;
				alert(`You choose ${FIGURES_ENG[2]}.\nComputer choose ${FIGURES_ENG[0]}.
You win.\nResult: \ncomputer - ${result.computer}\nyou - ${result.player}`);
				return start();
			} else {
				alert('Choose correctly');
				return start();
			}
		};
	};
	window.RPS = game;
})();
