'use strict';

const b = +prompt('Enter number > 1')?.trim();
if (Number.isNaN(parseFloat(b)) || b <= 1) {
	alert('Please, enter correct data');
}

const isPrime = (b) => {
	for (let i = 2, max = Math.sqrt(b); i <= max; i++) {
		if (b % i === 0) {
			return false;
		} 
	}
	return b > 1;
};

const result = isPrime(b);
console.log(`Is ${b} simple? Answer is ${result}.`);
