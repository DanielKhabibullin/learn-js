'use strict';

const euro = +prompt('Enter purchase price, euro')?.trim();
if (Number.isNaN(parseFloat(euro)) || euro < 0 || euro == Infinity) {
	alert('Please, enter correct data');
}
const convertEuro = (euro) => {

		let dollarsPerEuro = euro * 1.2;
		let rublesPerEuro = dollarsPerEuro * 73;
		//console.log(`Purchase total price: ${rublesPerEuro} rub`);
		return `Purchase total price: ${rublesPerEuro} rub`;

}

const result1 = convertEuro(euro);
console.log('result: ', result1);