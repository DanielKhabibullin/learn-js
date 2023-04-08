function Cart(items = []) {
	this.goods = items;
	this.totalPrice = 0;
	this.count = 0;
	this.discount = 0;

	this.calculateGoodsPrice = function() {
		this.totalPrice = this.goods.reduce(function(total, item) {
			return total + item.price;}, 0);
		this.totalPrice = this.totalPrice - this.totalPrice * this.discount;
		this.increaseCount();
		
	};
	this.addGoods = function(item) {
		this.goods.push(item);
		this.increaseCount();
		this.calculateGoodsPrice();
	};

	this.getTotalPrice = function() {
		return this.totalPrice;
	};

	this.increaseCount = function() {
		this.count++;
	};

	this.clear = function() {
		this.goods = [];
		this.totalPrice = 0;
		this.count = 0;
	};

	this.print = function() {
		console.log(JSON.stringify(this.goods));
		console.log(`Total price: ${this.getTotalPrice()}`);
	};
};

function Goods(price, name, discount) {
	this.price = price;
	this.name = name;
	this.discount = discount;
}

function FoodGoods(price, name, discount, calories) {
	Goods.call(this, price, name, discount);
	this.calories = calories;
}

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
FoodGoods.prototype.constructor = FoodGoods;

function ClothingGoods(price, name, discount, material) {
	Goods.call(this, price, name, discount);
	this.material = material;
}

Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);
ClothingGoods.prototype.constructor = ClothingGoods;

function TechnicsGoods(price, name, discount, techType) {
	Goods.call(this, price, name, discount);
	this.techType = techType;
}

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);
TechnicsGoods.prototype.constructor = TechnicsGoods;

const milk = new FoodGoods(2.5, 'Milk', 0, 120);
const tShirt = new ClothingGoods(15, 'T-shirt', 0.1, 'cotton');
const smartphone = new TechnicsGoods(600, 'Smartphone', 0.2, 'smartphone');

const cart = new Cart();
cart.addGoods(milk);
cart.addGoods(tShirt);
cart.addGoods(smartphone);

cart.print();

console.dir(cart);
