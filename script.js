'use strict';

{
	const productName = 'pencil';
	const productCount = 10;
	const productCategory = 'office';
	const productPrice = 20;

	//console.log('productName: ', productName);

	const sumTotal = productCount * productPrice;
	//console.log('sumTotal: ', sumTotal);
};

{
	const productName = 'Monitor ASUS';
	const productCount = 1;
	const productCategory = 'Computer monitors';
	const productPrice = 5000;

	//console.log('productName: ', productName);

	const sumTotal = productCount * productPrice;
	//console.log('sumTotal: ', sumTotal);
};

{
	const productName = prompt('Enter product name')?.trim();
	const productCount = +prompt('Enter product qty')?.trim();
	if (isNaN(productCount)) {
		alert('Please, enter correct data');
	}
	const productCategory = prompt('Enter product category')?.trim();
	const productPrice = +prompt('Enter product price, rub')?.trim();
	if (isNaN(productPrice)) {
		alert('Please, enter correct data');
	}

	const sumTotal = productCount * productPrice;

	if (productCount > 1) {
		console.log(`"There are ${productCount} units of "${productName}" worth ${sumTotal} rubles in stock"`);
	} 
	if (productCount == 1) {
		console.log(`"There is 1 unit of "${productName}" worth ${productCount} rubles in stock"`);
	};
	if (productCount < 1) {
		console.log('Something gone wrong');
	};
};

// ?? Анна, посмотри, пожалуйста, почему если заменить на условие ниже, то не работает код
// 	if ((typeof productCount != 'number') || (typeof productPrice != 'number')) {

