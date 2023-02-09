'use strict';

const cartTotalPrice = 50000;//+prompt('Enter cart total price')?.trim();
if (Number.isNaN(parseFloat(cartTotalPrice))) {
	alert('Please, enter correct data');
}
const cartProductCount = 10;//+prompt('Enter amount of products in the cart')?.trim();
if (Number.isNaN(parseFloat(cartProductCount))) {
	alert('Please, enter correct data');
}
const promocode = 'METHED';//prompt('Enter promocode here')?.trim().toUpperCase();

const calculate = (cartTotalPrice, cartProductCount, promocode) => {
	let totalPrice = cartTotalPrice;

	if (cartProductCount > 10) {
		totalPrice = totalPrice * 0.97;
	} if (cartTotalPrice > 30000) {
		totalPrice = totalPrice - ((totalPrice - 30000) * 0.15);
	} if (promocode === 'METHED') {
		totalPrice = totalPrice * 0.9;
	} if (promocode === 'G3H2Z1' && totalPrice > 2000) {
		totalPrice -= 500;
	}
	return totalPrice;
};

const result = calculate(cartTotalPrice, cartProductCount, promocode);
console.log('result: ', result);
