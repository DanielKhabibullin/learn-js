/* eslint-disable no-undef */
'use strict';

const cart = {
	items: [
		{title: 'cheese', price: 50, qty: 1},
		{title: 'bread', price: 10, qty: 1},
		{title: 'butter', price: 20, qty: 1},
	],
	calculateItemPrice() {
		let sum = this.items.reduce((sum, {price, qty}) => sum + price * qty, 0);
		return sum - sum * this.discount / 100;
	},
	totalPrice: {
		get() {
			return calculateItemPrice();
		},
	},
	count: 0,
	increaseCount(number) {
		return this.count += number;
	},
	add(title, price, qty = 1) {
		const item = {
			title,
			price,
			qty,
		};
		this.items.push(item);
		this.increaseCount(qty);
		this.calculateItemPrice();
	},
	discount: 0,
	set setDiscount(promocode) {
		if (promocode.toUpperCase() === 'METHED') {
			this.discount = 15;
		}
		if (promocode.toUpperCase() === 'NEWYEAR') {
			this.discount = 21;
		}
	},
	clear() {
		this.totalPrice = 0;
		this.count = 0;
		this.items = [];
	},
	print() {
		const cartStr = JSON.stringify(this?.items);
		console.log(`${cartStr}\n${this.calculateItemPrice()}`);
	},
};

cart.setDiscount = 'methed';
cart.print();
