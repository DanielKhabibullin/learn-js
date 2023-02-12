
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number3 = 0;
  number3 = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number3;
};

const generateArr3 = (a, m, n, str) => {
	let result3 = [];
	if (n < m) {
		return generateArr3(a, n, m, str);
	}
	for (let i = 0; i < a; i++ ) {
		let randomNum = getRandomIntInclusive(m, n);
		if (str === 'even') { 
			while (randomNum % 2 !== 0) {
				randomNum = getRandomIntInclusive(m, n);
			}
		} else if (str === 'odd') {
			while (randomNum % 2 !== 0) {
				randomNum = getRandomIntInclusive(m, n);
			}
		}
		result3.push(randomNum);
	}
	return result3;
};
console.log(generateArr3(20, 100, -10, 'even'));