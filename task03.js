'use strict';

const rectangle = {
	width: 5,
	set setWidth(a) {
		this.width = a;
	},
	// height: 5,
	// set setHeight(b) {
	// 	this.height = b;
	// },
	get getSquare() {
		return `${this.width * this.height}cm^2`;
	},
	get getPerimeter() {
		return `${2 * (this.width + this.height)}cm`;
	},
};

Object.defineProperty(rectangle, 'setHeight', {
	set(b) {
		this.height = b;
	},
});
rectangle.setHeight = 6;
console.log(rectangle.getSquare);
console.log(rectangle.getPerimeter);
