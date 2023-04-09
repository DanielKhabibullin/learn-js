const Cart = function(items = []) {
	this.goods = items;
	this.totalPrice = 0;
	this.count = 0;
	this.discount = 0;
	// this.items = {
	// 	goods: [],
	// 	totalPrice: 0,
	// 	count: 0,
	// }
};

Cart.prototype.calculateGoodsPrice = function() {
	this.totalPrice = this.goods.reduce(function(total, item) {
		return total + item.price - (item.price * item.discount / 100);}, 0);
};

Cart.prototype.addGoods = function(item) {
	this.goods.push(item);
	this.increaseCount();
	this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function() {
	return this.totalPrice;
};

Cart.prototype.increaseCount = function() {
	this.count++;
};

Cart.prototype.clear = function() {
	this.goods = [];
	this.totalPrice = 0;
	this.count = 0;
};

Cart.prototype.print = function() {
	console.log(JSON.stringify(this.goods));
	console.log(`Total price: ${this.getTotalPrice()}`);
};

const Goods = function(price, name, discount) {
	this.price = price;
	this.name = name;
	this.discount = discount;
};

Object.setPrototypeOf(Goods.prototype, Cart.prototype);

const FoodGoods = function(price, name, discount = 0, calories = '') {
	Goods.call(this, price, name, discount);
	this.calories = calories;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype); // чтобы milk являлось экземпляром класса goods

const ClothingGoods = function(price, name, discount = 0, material = '') {
	Goods.call(this, price, name, discount);
	this.material = material;
};

Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);

const TechnicsGoods = function(price, name, discount = 0, techType = '') {
	Goods.call(this, price, name, discount);
	this.techType = techType;
};

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const iphone = new Goods(1000, 'iphone 14', 10);
console.log(iphone);
const milk = new FoodGoods(2.5, 'Milk', 0, 120);
console.log(milk);
const tShirt = new ClothingGoods(15, 'T-shirt', 10, 'cotton');
const smartphone = new TechnicsGoods(600, 'Smartphone', 10);

const cart = new Cart();

cart.addGoods(milk);
cart.addGoods(tShirt);
cart.addGoods(smartphone);
cart.addGoods(iphone);

cart.print();

console.log(milk instanceof Cart);
console.dir(cart);
