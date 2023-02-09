'use stirct';

const c = +prompt('Enter first number')?.trim();
if (Number.isNaN(parseFloat(c))) {
	alert('Please, enter correct data');
}

const d = +prompt('Enter second number')?.trim();
if (Number.isNaN(parseFloat(d))) {
	alert('Please, enter correct data');
}

const findMinNumber = (c, d) => minNumber = (c > d) * d + (d > c) * c;


const result = findMinNumber(c, d);
console.log(`Minimal number is ${result}`);