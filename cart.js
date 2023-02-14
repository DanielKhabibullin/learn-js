'use strict';

const cart = {
	items: [
	{ title: 'cheese', price: 50, qty: 1, }, 
	{ title: 'bread', price: 10, qty: 1, }, 
	{ title: 'butter', price: 20, qty: 1, }, 
	],
	totalPrice: 0,
	count: 0,
	getTotalPrice() {
		return this.totalPrice;
	},
		increaseCount(number) {
		//let [{ qty }] = this.items;
		//return this.items.reduce((acc, e) => acc + e.qty, 0);
		return this.count += number;
	},
	calculateItemPrice() {
		return this.totalPrice = this.items.reduce((sum, { price, qty }) => sum + price * qty, 0);
	// 	for (const key in this.items) {
	// 		this.totalPrice += (this?.items[key].price * this?.items[key].qty);
	// 	}
	// return this.totalPrice;
	},
	add(title, price, qty = 1) {
		let item = { 
			title: title,
			price: price,
			qty: qty,
		};
		this.items.push(item);
		this.increaseCount(qty);
		this.calculateItemPrice();
		this.getTotalPrice();
	},
	clear() {
		// for (const key in this.items) {
		// 	delete this?.items[key];
		// }
		this.totalPrice = 0;
		this.count = 0;
		this.items= [];
	},
	print() {
		const cartStr = JSON.stringify(cart?.items);
		console.log(`${cartStr}\n${cart.totalPrice}`);
	},
}

//console.log(cart.totalPrice);
console.log(cart.calculateItemPrice());
//console.log(cart.getTotalPrice());
//cart.clear();
// console.log(cart);
cart.increaseCount(5);
console.log(cart);

cart.add('sausage', 60, 1);
console.log(cart);

cart.add('sausage', 60, 1);
console.log(cart);

cart.add('sausage', 60, 2);
console.log(cart);

cart.print();