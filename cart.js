'use strict';

const cart = {
	items: [
		{title: 'cheese', price: 50, qty: 1},
		{title: 'bread', price: 10, qty: 1},
		{title: 'butter', price: 20, qty: 1},
	],
	
	get totalPrice() {
		return this.calculateItemPrice();
	},
	calculateItemPrice() {
		return this.items.reduce((sum, {price, qty}) => sum + price * qty, 0);
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
	},
	clear() {
		this.totalPrice = 0;
		this.count = 0;
		this.items = [];
	},
	print() {
		const cartStr = JSON.stringify(this?.items);
		console.log(`${cartStr}\n${this.totalPrice}`);
	},
};

cart.print();
