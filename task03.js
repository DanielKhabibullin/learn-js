'use strict';

const rectangle = {
	_width: 5,
	set setWidth(a) {
		if (!isNaN(parseFloat(a)) && isFinite(a)) {
			this._width = a;
		} else {
			console.warn('width is not a number');
		}
	},
	_height: 5,
	// set setHeight(b) {
	// 	this._height = b;
	// },
	get getSquare() {
		return `${this._width * this._height}cm^2`;
	},
	get getPerimeter() {
		return `${2 * (this._width + this._height)}cm`;
	},
};

Object.defineProperty(rectangle, 'setHeight', {
	set(b) {
		if (!isNaN(parseFloat(b)) && isFinite(b)) {
			this._height = b;
		} else {
			console.warn('height is not a number');
		}
	},
});
rectangle.setHeight = '9';
rectangle.setWidth = 'str';
console.log(rectangle.getSquare);
console.log(rectangle.getPerimeter);
