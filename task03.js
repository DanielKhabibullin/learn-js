
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number3 = 0;
  number3 = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number3;
};

const generateArr3 = (a, m, n, even) => {
	let result3 = [];
	if (n < m) {
		return generateArr3(a, n, m);
	} 
	for (let i = 0; i < a; i++ ) {
			result3[i] = getRandomIntInclusive(m, n);
	}
	return result3;
}
console.log(generateArr3(20, 100, -10, 'even'));