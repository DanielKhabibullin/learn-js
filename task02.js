function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
	let number2 = 0;
  number2 = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	return number2;
};

const generateArr2 = (a, m, n) => {
	let result2 = [];
	if (n < m) {
		return generateArr2(a, n, m);
	} 
	for (let i = 0; i < a; i++ ) {
			result2[i] = getRandomIntInclusive(m, n);
	}
	return result2;
}
console.log(generateArr2(20, 100, -10));