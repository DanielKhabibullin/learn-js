'use strict';
(() => {
	const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		let number = 0;
		number = Math.floor(Math.random() * (max - min + 1)) + min;
		return number;
	};

	const game = () => {
		const marbleCount = {
			player: 5,
			bot: 5,
			_playerBid: 1,
			set playerBid(bid) {
				if ((!isNaN(parseFloat(bid)) && isFinite(bid)) || bid <= this.player) {
					this._playerBid = +bid;
					console.log(marbleCount._playerBid);
				}
			},
			_botChoice: 1,
			set botChoice(evenOdd) {
				this._botChoice = evenOdd;
				console.log('_botChoice: ', this._botChoice);
			},
			_botBid: 1,
			set botBid(bid) {
				this._botBid = bid;
			},
			newGame() {
				this.player = 5;
				this.bot = 5;
			},
		};

		let playerResult = 0;

		const startRPS = function() {
			let userAnswer = prompt(`Who turns first?
Let's play "rock, scissors, paper" to find out`);
			if (userAnswer === null) {
				const endGame = confirm('Are you sure to exit?');
				if (endGame) {
					alert(`Come back again`);
					return;
				} else {
					return startRPS();
				}
			}
			userAnswer = userAnswer.slice(0, 1).toLowerCase();
			const answers = [...FIGURES_ENG];
			const computerAnswer = answers[getRandomIntInclusive(0, 2)].slice(0, 1);
			console.log(userAnswer, computerAnswer);
			if (userAnswer === computerAnswer) {
				alert(`Tie! Let's play again.`);
				return startRPS();
			} else if (userAnswer === 'r' && computerAnswer === 's') {
				playerResult = 1;
				alert(`You chose ${FIGURES_ENG[0]}.\nComputer chose ${FIGURES_ENG[1]}.
You won. Your turn now`);
			} else if (userAnswer === 'r' && computerAnswer === 'p') {
				playerResult = 0;
				alert(`You coose ${FIGURES_ENG[0]}.\nComputer chose ${FIGURES_ENG[2]}.
You lost. Computer turn now`);
			} else if (userAnswer === 's' && computerAnswer === 'r') {
				playerResult = 0;
				alert(`You chose ${FIGURES_ENG[1]}.\nComputer chose ${FIGURES_ENG[0]}.
You lost. Computer turn now`);
			} else if (userAnswer === 's' && computerAnswer === 'p') {
				playerResult = 1;
				alert(`You chose ${FIGURES_ENG[1]}.\nComputer chose ${FIGURES_ENG[2]}.
You won. Your turn now`);
			} else if (userAnswer === 'p' && computerAnswer === 's') {
				playerResult = 0;
				alert(`You chose ${FIGURES_ENG[2]}.\nComputer chose ${FIGURES_ENG[1]}.
You lost. Computer turn now`);
			} else if (userAnswer === 'p' && computerAnswer === 'r') {
				playerResult = 1;
				alert(`You chose ${FIGURES_ENG[2]}.\nComputer chose ${FIGURES_ENG[0]}.
You won. Your turn now`);
			} else {
				alert('Choose correctly');
				return startRPS();
			}
			return playerResult;
		};
		startRPS();

		return function startMarble() {
			const bid = prompt(`Choose quantity of marbles
from 1 to ${marbleCount.player}, but not more than ${marbleCount.bot}`);
			if (bid === null) {
				const endMarble = confirm('Are you sure to exit?');
				if (endMarble) {
					alert(`Come back again`);
					return;
				} else {
					return startMarble();
				}
			} else if (bid > marbleCount.bot || bid <= 0) {
				alert(`Please enter number equal or less than ${marbleCount.bot}`);
				return startMarble();
			} else {
				marbleCount.playerBid = bid;
				marbleCount.botBid = getRandomIntInclusive(1, marbleCount.bot);
				if (playerResult === 1) {
					marbleCount.botChoice = getRandomIntInclusive(0, 1);
					if (marbleCount._botChoice === 0) {
						alert(`Computer chose even`);
						if (marbleCount._playerBid % 2 === 0) {
							marbleCount.player -= marbleCount._playerBid;
							marbleCount.bot += marbleCount._playerBid;
							alert(`You lost. You have ${marbleCount.player} marble(s) left.
Computer has ${marbleCount.bot} marble(s).`);
							(marbleCount.player === 0) ? alert(`WASTED`) : startMarble();
						} else {
							marbleCount.player += marbleCount._playerBid;
							marbleCount.bot -= marbleCount._playerBid;
							alert(`You won. You have ${marbleCount.player} marble(s).
Computer has ${marbleCount.bot} marble(s).`);
							(marbleCount.bot === 0) ?
							alert(`You won game! Congratulations!`) : startMarble();
						}
					} else {
						alert(`Computer chose odd`);
						if (marbleCount._playerBid % 2 === 1) {
							marbleCount.player -= marbleCount._playerBid;
							marbleCount.bot += marbleCount._playerBid;
							alert(`You lost. You have ${marbleCount.player} marble(s) left.
Computer has ${marbleCount.bot} marble(s).`);
							(marbleCount.player === 0) ? alert(`WASTED`) : startMarble();
						} else {
							marbleCount.player += marbleCount._playerBid;
							marbleCount.bot -= marbleCount._playerBid;
							alert(`You won. You have ${marbleCount.player} marble(s).
Computer has ${marbleCount.bot} marble(s).`);
							(marbleCount.bot === 0) ?
							alert(`You won game! Congratulations!`) : startMarble();
						}
					}
				} else {
					const numberIsEven = confirm('Number is even?');
					marbleCount.botChoice = getRandomIntInclusive(0, 1);
					if (numberIsEven && marbleCount._botChoice === 1) {
						marbleCount.player += marbleCount._playerBid;
						marbleCount.bot -= marbleCount._playerBid;
						alert(`You won. You have ${marbleCount.player} marble(s).
Computer has ${marbleCount.bot} marble(s).`);
						(marbleCount.bot === 0) ? alert(`You won game! Congratulations!`) :
						startMarble();
					} else if (!numberIsEven && marbleCount._botChoice === 0) {
						marbleCount.player += marbleCount._playerBid;
						marbleCount.bot -= marbleCount._playerBid;
						alert(`You won. You have ${marbleCount.player} marble(s).
Computer has ${marbleCount.bot} marble(s).`);
						(marbleCount.bot === 0) ? alert(`You won game! Congratulations!`) :
						startMarble();
					} else {
						marbleCount.player -= marbleCount._playerBid;
						marbleCount.bot += marbleCount._playerBid;
						alert(`You lost. You have ${marbleCount.player} marble(s) left.
Computer has ${marbleCount.bot} marble(s).`);
						(marbleCount.player === 0) ? alert(`WASTED`) : startMarble();
					}
				}
				if (marbleCount.player === 0 || marbleCount.bot === 0) {
					const moreMarble = confirm('Wanna play more?');
					if (!moreMarble) {
						alert(`Come back again`);
						return;
					} else {
						marbleCount.newGame();
						return game();
					}
				}
			}
		};
	};
	window.marble = game;
})();
