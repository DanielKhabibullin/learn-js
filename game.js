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


	const marbleCount = {
		player: 5,
		bot: 5,
		_playerBid: 1,
		set playerBid(bid) {
			if ((!isNaN(parseFloat(bid)) && isFinite(bid)) || bid <= this.player) {
				this._playerBid = +bid;
			}
		},
		_botChoice: 1, // 0 - even/ 1 - odd
		set botChoice(evenOdd) {
			this._botChoice = evenOdd;
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

	const startRSP = function() {
		let userAnswer = prompt(`Who turns first?
Let's play "rock, scissors, paper" to find out.`);
		if (userAnswer === null) {
			const endGame = confirm(`Are you sure to exit from RSP game?
Note: computer will turn first.`);
			if (endGame) {
				alert(`Computer turns first.`);
				return;
			} else {
				return startRSP();
			}
		}
		userAnswer = userAnswer.slice(0, 1).toLowerCase();
		const answers = [...FIGURES_ENG];
		const computerAnswer = answers[getRandomIntInclusive(0, 2)].slice(0, 1);
		if (userAnswer === computerAnswer) {
			alert(`Tie! Let's play again.`);
			return startRSP();
		} else if (userAnswer === 'r' && computerAnswer === 's') {
			playerResult = 1;
			alert(`You chose ${FIGURES_ENG[0]}.\nComputer chose ${FIGURES_ENG[1]}.
You won. Your turn now.`);
		} else if (userAnswer === 'r' && computerAnswer === 'p') {
			playerResult = 0;
			alert(`You chose ${FIGURES_ENG[0]}.\nComputer chose ${FIGURES_ENG[2]}.
You lost. Computer turn now.`);
		} else if (userAnswer === 's' && computerAnswer === 'r') {
			playerResult = 0;
			alert(`You chose ${FIGURES_ENG[1]}.\nComputer chose ${FIGURES_ENG[0]}.
You lost. Computer turn now.`);
		} else if (userAnswer === 's' && computerAnswer === 'p') {
			playerResult = 1;
			alert(`You chose ${FIGURES_ENG[1]}.\nComputer chose ${FIGURES_ENG[2]}.
You won. Your turn now.`);
		} else if (userAnswer === 'p' && computerAnswer === 's') {
			playerResult = 0;
			alert(`You chose ${FIGURES_ENG[2]}.\nComputer chose ${FIGURES_ENG[1]}.
You lost. Computer turn now.`);
		} else if (userAnswer === 'p' && computerAnswer === 'r') {
			playerResult = 1;
			alert(`You chose ${FIGURES_ENG[2]}.\nComputer chose ${FIGURES_ENG[0]}.
You won. Your turn now.`);
		} else {
			alert('Choose correctly');
			return startRSP();
		}
		return playerResult;
	};

	const startMarble = function(playerResult) {
		if (marbleCount.player > 0 && marbleCount.bot > 0) {
			alert(`You have ${marbleCount.player} marble(s).
Computer has ${marbleCount.bot} marble(s).`);
			if (playerResult === 1) {
				const bid = prompt(`Choose quantity of marble(s)
from 1 to ${marbleCount.player}.`);
				console.log(typeof bid);
				if (bid === null) {
					const endGame = confirm('Are you sure to exit?');
					if (endGame) {
						alert(`Come back again.`);
						return;
					} else {
						return startMarble(playerResult);
					}
				}
				if (bid > 0 && bid <= marbleCount.player) {
					marbleCount.playerBid = bid;
					playerResult = 0;
					marbleCount.botChoice = getRandomIntInclusive(0, 1);
					if (marbleCount._botChoice === 0) {
						alert(`Computer chose even.`);
						if (marbleCount._playerBid % 2 === 0) {
							marbleCount.player -= marbleCount._playerBid;
							marbleCount.bot += marbleCount._playerBid;
							alert(`You lost round.`);
							return startMarble(playerResult);
						} else {
							marbleCount.player += marbleCount._playerBid;
							marbleCount.bot -= marbleCount._playerBid;
							alert(`You won round.`);
							return startMarble(playerResult);
						}
					} else if (marbleCount._botChoice === 1) {
						alert(`Computer chose odd`);
						if (marbleCount._playerBid % 2 === 1) {
							marbleCount.player -= marbleCount._playerBid;
							marbleCount.bot += marbleCount._playerBid;
							alert(`You lost round.`);
							return startMarble(playerResult);
						} else {
							marbleCount.player += marbleCount._playerBid;
							marbleCount.bot -= marbleCount._playerBid;
							alert(`You won round.`);
							return startMarble(playerResult);
						}
					}
				} else {
					alert(`Please enter correct number.`);
					return startMarble(1);
				}
			} else { // bot turn
				playerResult = 1;
				marbleCount.botBid = getRandomIntInclusive(1, marbleCount.bot);
				const numberIsEven = confirm('Number is even?');
				if (numberIsEven && (marbleCount._botBid % 2 === 0)) {
					marbleCount.player += marbleCount._botBid;
					marbleCount.bot -= marbleCount._botBid;
					alert(`You won round.`);
					return startMarble(playerResult);
				} else if (!numberIsEven && (marbleCount._botBid % 2 !== 0)) {
					marbleCount.player += marbleCount._botBid;
					marbleCount.bot -= marbleCount._botBid;
					alert(`You won round.`);
					return startMarble(playerResult);
				} else {
					marbleCount.player -= marbleCount._botBid;
					marbleCount.bot += marbleCount._botBid;
					alert(`You lost round.`);
					return startMarble(playerResult);
				}
			}
		} else if (marbleCount.bot <= 0) {
			alert(`You won game! Congratulations!`);
			const moreMarble = confirm('Wanna play more?');
			if (!moreMarble) {
				return;
			} else {
				marbleCount.newGame();
				return startMarble(startRSP());
			}
		} else if (marbleCount.player <= 0) {
			alert(`WASTED!`);
			const moreMarble = confirm('Wanna play more?');
			if (!moreMarble) {
				return;
			} else {
				marbleCount.newGame();
				return startMarble(startRSP());
			}
		}
	};
	const game = () => function() {
		startMarble(startRSP());
	};
	window.marble = game;
})();
