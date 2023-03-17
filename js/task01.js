'use strict';

const arr = ['module.jsx', 'index.html', 'style.css',
	'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const filterExtArr = arr => {
	const regexp = /\.(jsx?|ts)$/;
	const newArr = arr.filter(arrItem => regexp.test(arrItem));
	return newArr;
};

const filteredExtArr = filterExtArr(arr);
console.log('filteredExtArr: ', filteredExtArr);

