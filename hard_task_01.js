'use stirct';

const a = +prompt('Enter first number > 0')?.trim();
if (Number.isNaN(parseFloat(a)) || a < 0) {
	alert('Please, enter correct data');
}

const b = +prompt('Enter second number > 0')?.trim();
if (Number.isNaN(parseFloat(b)) || b < 0) {
	alert('Please, enter correct data');
}

const findMaxDivider1 = (a, b) => {
	
	while (a !== b) {
		if (a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
	return a;
};

const maxDivider1 = findMaxDivider1(a, b);
console.log(`Greatest common divider is ${maxDivider1}`);

const findMaxDivider2 = (a, b) => {
	while (a !== 0 && b !== 0) {
		if (a > b) {
			a = a % b;
		} else {
			b = b % a;
		}
	}
	return a + b;
};

const maxDivider2 = findMaxDivider2(a, b);
console.log(`Greatest common divider is ${maxDivider2}`);